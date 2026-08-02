import React from 'react';
import { ArrowRight, Play, Sparkles, ChevronDown, Award, Zap, ShieldCheck } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Three.js Background */}
      <ThreeCanvas />

      {/* Glow Orbs Background */}
      <div className="glow-orb-cyan" style={{ top: '20%', left: '10%' }} />
      <div className="glow-orb-pink" style={{ bottom: '15%', right: '10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Top Tagline Pill */}
        <div style={{ display: 'inline-block', marginBottom: '20px' }}>
          <div className="badge-pill" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            <Sparkles size={14} className="text-cyan-400" />
            <span>FREELANCE CREATIVE STUDIO & 3D LAB</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.2rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}
        >
          We Create <br />
          <span className="gradient-text-cyan">Digital Experiences</span>
        </h1>

        {/* Sub-headline / Tagline */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            margin: '0 auto 36px auto',
            fontWeight: 400,
          }}
        >
          Branding <span style={{ color: 'var(--accent-pink)' }}>|</span> Web Design <span style={{ color: 'var(--accent-cyan)' }}>|</span> 3D Animation <span style={{ color: 'var(--accent-gold)' }}>|</span> Digital Innovation
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </a>
          <a href="#3d-lab" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
            <Play size={18} fill="currentColor" />
            <span>Interactive 3D Lab</span>
          </a>
        </div>

        {/* Live Metrics Ticker Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            padding: '20px 30px',
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '20px',
            background: 'rgba(18, 24, 40, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(0, 217, 255, 0.1)', color: 'var(--accent-cyan)' }}>
              <Zap size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>150+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Projects Delivered</div>
            </div>
          </div>

          <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255, 0, 110, 0.1)', color: 'var(--accent-pink)' }}>
              <ShieldCheck size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>99.4%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Client Satisfaction</div>
            </div>
          </div>

          <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255, 183, 3, 0.1)', color: 'var(--accent-gold)' }}>
              <Award size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>24</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Design Awards</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            marginTop: '50px',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <span>Scroll To Explore</span>
          <div
            style={{
              width: '24px',
              height: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: 'var(--accent-cyan)',
                animation: 'bounce 1.5s infinite',
              }}
            />
          </div>
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </section>
  );
}
