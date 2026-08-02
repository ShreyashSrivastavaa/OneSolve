import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AudioSynthesizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  const gainRef = useRef(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainRef.current = masterGain;

        // Ambient Drone Synth Oscillator 1
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, ctx.currentTime); // A2
        osc1.connect(masterGain);
        osc1.start();
        osc1Ref.current = osc1;

        // Ambient Harmonic Synth Oscillator 2
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(164.81, ctx.currentTime); // E3
        osc2.connect(masterGain);
        osc2.start();
        osc2Ref.current = osc2;

        setIsPlaying(true);
      } catch (err) {
        console.error('Web Audio API not supported', err);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`badge-pill cursor-pointer transition-all duration-300 ${
        isPlaying ? 'bg-cyan-500/20 text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(0,217,255,0.4)]' : 'bg-white/5 text-slate-400 hover:text-white'
      }`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 14px' }}
      title={isPlaying ? 'Mute Ambient Audio' : 'Play Ambient Sci-Fi Audio'}
    >
      {isPlaying ? <Volume2 size={16} className="animate-pulse text-cyan-400" /> : <VolumeX size={16} />}
      <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.05em' }}>
        {isPlaying ? 'AMBIENT SOUND ON' : 'SOUND OFF'}
      </span>
      {isPlaying && (
        <span style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '12px' }}>
          <span style={{ width: '2px', height: '100%', background: '#00d9ff', animation: 'bounce 0.8s infinite alternate' }}></span>
          <span style={{ width: '2px', height: '60%', background: '#ff006e', animation: 'bounce 1.1s infinite alternate 0.2s' }}></span>
          <span style={{ width: '2px', height: '80%', background: '#ffb703', animation: 'bounce 0.9s infinite alternate 0.4s' }}></span>
        </span>
      )}
    </button>
  );
}
