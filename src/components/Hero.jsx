import React from 'react';
import { ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '750px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#fafafa',
        paddingTop: '60px',
      }}
    >
      {/* Subtle WebGL Gradient Canvas */}
      <ThreeCanvas />

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'left',
          maxWidth: '1200px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          {/* Badge Pill */}
          <div style={{ marginBottom: '24px' }}>
            <div className="badge-pill">
              <Sparkles size={14} />
              <span>MINIMALIST WEBGL & AI AGENCY</span>
            </div>
          </div>

          {/* Massive Headline */}
          <h1 className="hero-headline-unicorn" style={{ marginBottom: '20px' }}>
            One<span className="gradient-text-purple">Solve</span>
          </h1>

          {/* Subheadline */}
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            We Create Beautiful Digital Experiences
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'var(--text-muted)',
              maxWidth: '600px',
              marginBottom: '36px',
              lineHeight: 1.6,
            }}
          >
            We are a full-stack digital solutions agency crafting high-conversion web platforms, WebGL 3D experiences, and autonomous AI automation.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <a href="#contact" className="btn-primary">
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-secondary">
              <Play size={16} fill="currentColor" color="var(--accent-purple)" />
              <span>View Our Work</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#services"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll to explore</span>
        <ChevronDown size={20} style={{ animation: 'bounce 1.8s infinite' }} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
