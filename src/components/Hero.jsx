import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const glowRef = useRef(null);

  // Subtle parallax glow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (glowRef.current) {
        const y = window.scrollY * 0.3;
        glowRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        paddingTop: '88px',
      }}
    >
      {/* Radial glow orbs (background) */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {/* Main indigo glow */}
        <div
          className="glow-orb"
          style={{
            width: '700px',
            height: '700px',
            bottom: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(99,102,241,0.28) 0%, rgba(99,102,241,0.1) 40%, transparent 70%)',
            opacity: 1,
            filter: 'blur(0px)',
          }}
        />
        {/* Left violet accent */}
        <div
          className="glow-orb"
          style={{
            width: '400px',
            height: '400px',
            top: '20%',
            left: '-80px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
            opacity: 1,
          }}
        />
        {/* Right blue accent */}
        <div
          className="glow-orb"
          style={{
            width: '350px',
            height: '350px',
            top: '10%',
            right: '-60px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            opacity: 1,
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* NEW pill badge */}
        <a
          href="#services"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '7px 16px',
            borderRadius: '50px',
            border: '1px solid rgba(100, 116, 139, 0.45)',
            background: 'linear-gradient(to bottom, rgba(30,41,59,0.9), rgba(15,23,42,0.8))',
            color: '#e2e8f0',
            fontSize: '0.82rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'border-color 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.6)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(100,116,139,0.45)')}
        >
          <span className="live-dot" />
          <span>NEW — AI-powered solutions for your business!</span>
        </a>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <h1 className="hero-headline-unicorn" style={{ textAlign: 'center' }}>
            From{' '}
            <span className="bold-word">Vision</span>
            {' '}to{' '}
            <span className="bold-word">Reality</span>
          </h1>
          <h4
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontWeight: 300,
              color: 'rgba(148, 163, 184, 0.7)',
              fontFamily: 'var(--font-body)',
              marginTop: '8px',
            }}
          >
            Supercharging your business with{' '}
            <span
              style={{
                position: 'relative',
                display: 'inline-block',
                padding: '0 10px',
                color: 'rgba(199, 210, 254, 0.9)',
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '4px',
                  background: 'rgba(99, 102, 241, 0.18)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                }}
              />
              <span style={{ position: 'relative' }}>AI</span>
            </span>
          </h4>
        </div>

        {/* CTA Pill */}
        <div className="hero-cta-bar" style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {/* Left divider */}
          <div
            className="hero-divider"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(100,116,139,0.5))',
            }}
          />
          <div className="hero-cta-pill">
            <p>Explore the future</p>
            <a href="#services" className="btn-shine">
              Get Started
            </a>
          </div>
          {/* Right divider */}
          <div
            className="hero-divider"
            style={{
              background: 'linear-gradient(to left, transparent, rgba(100,116,139,0.5))',
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-dim)',
          }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            scroll to explore
          </span>
          <div
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, rgba(148,163,184,0.4), transparent)',
              animation: 'scroll-line 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}
