import React, { useState, useEffect } from 'react';

const targets = ['Creators', 'Businesses', 'Designers', 'Artists', 'Developers', 'You'];

export default function MadeFor() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % targets.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--bg-primary)',
        padding: '120px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', textAlign: 'center' }}>
        <h4
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            color: 'var(--text-muted)',
            fontWeight: 400,
            fontFamily: 'var(--font-body)',
            marginBottom: '16px',
            letterSpacing: '0',
          }}
        >
          UpscaleTechSolutions is made for
        </h4>

        <div
          style={{
            height: 'clamp(5rem, 12vw, 9rem)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 800,
              color: 'var(--text-main)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(-20px)',
            }}
          >
            {targets[currentIdx]}
          </h1>
        </div>
      </div>
    </section>
  );
}
