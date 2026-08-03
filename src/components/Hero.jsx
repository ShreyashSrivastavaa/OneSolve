import React from 'react';
import { ArrowRight, Play, Sparkles, Navigation, ShieldCheck, Zap, Award } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero({ onSelectService }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0e27',
      }}
    >
      {/* 3D Interactive Workspace Canvas */}
      <ThreeCanvas onSelectService={onSelectService} />

      {/* Real-time Status Floating Panel (Top-Right) */}
      <div
        style={{
          position: 'absolute',
          top: '110px',
          right: '30px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 18px',
          borderRadius: '30px',
          background: 'rgba(18, 24, 40, 0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 217, 255, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
        className="hidden-mobile"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#00ff41',
              boxShadow: '0 0 10px #00ff41',
              animation: 'pulse 1.8s infinite',
            }}
          />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>Open for Projects</span>
        </div>
        <div style={{ width: '1px', height: '16px', background: 'rgba(255, 255, 255, 0.15)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>4 Engineers Online</span>
        </div>
      </div>

      {/* Main Glassmorphic Hero Overlay Box */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
          maxWidth: '900px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            padding: '40px 30px',
            borderRadius: '28px',
            background: 'rgba(10, 14, 39, 0.55)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Top Tagline Pill */}
          <div style={{ display: 'inline-block', marginBottom: '20px' }}>
            <div className="badge-pill" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
              <Sparkles size={14} className="text-cyan-400" />
              <span>INTERACTIVE 3D DIGITAL WORKSPACE AGENCY</span>
            </div>
          </div>

          {/* Main Floating Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              color: '#fff',
              textShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
            }}
          >
            OneSolve <br />
            <span className="gradient-text-cyan">3D Workspace</span> & <span className="gradient-text-pink">AI Studio</span>
          </h1>

          {/* Vision Tagline */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
              color: 'var(--text-main)',
              maxWidth: '750px',
              margin: '0 auto 32px auto',
              fontWeight: 600,
              letterSpacing: '0.01em',
              lineHeight: 1.5,
            }}
          >
            Build in 3D <span style={{ color: 'var(--accent-cyan)' }}>•</span> Think in AI <span style={{ color: 'var(--accent-pink)' }}>•</span> Scale Infinitely
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '32px',
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '1.05rem',
                boxShadow: '0 0 25px rgba(0, 217, 255, 0.4)',
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#portfolio"
              className="btn-secondary"
              style={{
                padding: '16px 36px',
                fontSize: '1.05rem',
                borderColor: 'rgba(255, 0, 110, 0.5)',
                color: '#fff',
                background: 'rgba(255, 0, 110, 0.1)',
              }}
            >
              <Play size={18} fill="currentColor" color="var(--accent-pink)" />
              <span>View Portfolio</span>
            </a>
          </div>

          {/* 3D Navigation Controls Hint Bar */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '20px',
              background: 'rgba(0, 217, 255, 0.1)',
              border: '1px solid rgba(0, 217, 255, 0.25)',
              fontSize: '0.8rem',
              color: 'var(--accent-cyan)',
              fontWeight: 600,
            }}
          >
            <Navigation size={14} />
            <span>Mouse: Parallax | Scroll: Zoom | WASD: Pan 3D Space | Click Objects to Explore</span>
          </div>
        </div>
      </div>

      {/* Pulse Keyframe Animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
