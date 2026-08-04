import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      id="cta"
      style={{
        position: 'relative',
        background: 'var(--bg-primary)',
        padding: '80px 24px 120px',
        overflow: 'hidden',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* Card */}
      <div
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          borderRadius: '28px',
          padding: 'clamp(40px, 6vw, 80px)',
          background: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Glow behind card */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(20px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge-pill" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <Sparkles size={13} />
            <span>Let's Build Together</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '16px',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Ready to upscale<br />your business?
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              marginBottom: '36px',
              maxWidth: '500px',
              margin: '0 auto 36px',
              lineHeight: 1.6,
            }}
          >
            Let's turn your ideas into a stunning digital reality — AI, automation, and world-class design, all in one place.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '50px',
                background: 'rgba(99,102,241,0.2)',
                border: '1px solid rgba(99,102,241,0.45)',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.35)';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.2)';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.45)';
              }}
            >
              Get Started <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '50px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = 'var(--text-main)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
