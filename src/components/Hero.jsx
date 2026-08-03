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
        minHeight: '720px',
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
          top: '95px',
          right: '24px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 16px',
          borderRadius: '30px',
          background: 'rgba(10, 14, 39, 0.65)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0, 217, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
        className="hidden-mobile"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00ff41',
              boxShadow: '0 0 10px #00ff41',
              animation: 'pulse 1.8s infinite',
            }}
          />
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff' }}>Open for Projects</span>
        </div>
        <div style={{ width: '1px', height: '14px', background: 'rgba(255, 255, 255, 0.15)' }} />
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>4 Engineers Online</span>
      </div>

      {/* Main Glassmorphic Hero Overlay Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
          maxWidth: '850px',
          pointerEvents: 'none',
          paddingTop: '60px',
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            padding: '32px 28px',
            borderRadius: '24px',
            background: 'rgba(10, 14, 39, 0.35)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Top Tagline Pill */}
          <div style={{ display: 'inline-block', marginBottom: '16px' }}>
            <div className="badge-pill" style={{ padding: '6px 18px', fontSize: '0.8rem' }}>
              <Sparkles size={14} className="text-cyan-400" />
              <span>INTERACTIVE 3D DIGITAL WORKSPACE AGENCY</span>
            </div>
          </div>

          {/* Main Floating Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              color: '#fff',
              textShadow: '0 0 35px rgba(0, 217, 255, 0.4), 0 0 10px rgba(0,0,0,0.8)',
            }}
          >
            OneSolve <br />
            <span className="gradient-text-cyan">3D Workspace</span> & <span className="gradient-text-pink">AI Studio</span>
          </h1>

          {/* Vision Tagline */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#f8fafc',
              maxWidth: '700px',
              margin: '0 auto 28px auto',
              fontWeight: 600,
              letterSpacing: '0.01em',
              lineHeight: 1.4,
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            Build in 3D <span style={{ color: 'var(--accent-cyan)' }}>•</span> Think in AI <span style={{ color: 'var(--accent-pink)' }}>•</span> Scale Infinitely
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: '14px 32px',
                fontSize: '1rem',
                boxShadow: '0 0 25px rgba(0, 217, 255, 0.5)',
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="btn-secondary"
              style={{
                padding: '14px 32px',
                fontSize: '1rem',
                borderColor: 'rgba(255, 0, 110, 0.5)',
                color: '#fff',
                background: 'rgba(255, 0, 110, 0.15)',
              }}
            >
              <Play size={16} fill="currentColor" color="var(--accent-pink)" />
              <span>View Portfolio</span>
            </a>
          </div>

          {/* 3D Navigation Controls Hint Bar */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(0, 217, 255, 0.12)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              fontSize: '0.78rem',
              color: 'var(--accent-cyan)',
              fontWeight: 600,
              backdropFilter: 'blur(8px)',
            }}
          >
            <Navigation size={13} />
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
