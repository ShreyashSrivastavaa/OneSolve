import React, { useState, useEffect } from 'react';

/**
 * SplashScreen — exact upscayl.org intro sequence:
 *
 *  0ms  – 100ms  : Mount, light gray bg visible, name invisible
 *  100ms– 700ms  : Brand name fades + slides up into view
 *  800ms– 2200ms : Dark radial orb expands from center, covering everything
 *  2200ms–2900ms : Whole overlay fades to 0 opacity → reveals dark site
 *  2900ms        : Component unmounts via onFinished()
 */
export default function SplashScreen({ onFinished }) {
  const [nameVisible, setNameVisible] = useState(false);
  const [orbOpen, setOrbOpen]         = useState(false);
  const [fadeOut, setFadeOut]          = useState(false);

  useEffect(() => {
    // Slight delay so CSS transition has a starting frame
    const t0 = setTimeout(() => setNameVisible(true), 120);
    // Start orb expansion
    const t1 = setTimeout(() => setOrbOpen(true), 800);
    // Begin full fade-out
    const t2 = setTimeout(() => setFadeOut(true), 2200);
    // Unmount
    const t3 = setTimeout(() => onFinished(), 2950);

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinished]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        overflow: 'hidden',
        /* Light slate background — matches upscayl.org exactly */
        background: '#dde1ea',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /* Final fade-out */
        opacity: fadeOut ? 0 : 1,
        transition: fadeOut ? 'opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Subtle noise / grain texture overlay (pure CSS — no image needed) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          pointerEvents: 'none',
          mixBlendMode: 'overlay',
        }}
      />

      {/* ─── Dark expanding orb ─── */}
      <div
        style={{
          position: 'absolute',
          /* Expand from 0 → 340vmax */
          width:  orbOpen ? '340vmax' : '0vmax',
          height: orbOpen ? '340vmax' : '0vmax',
          borderRadius: '50%',
          /*
           * The gradient mimics the upscayl.org screenshot:
           * very dark navy core → slate-900 mid → transparent edge
           */
          background: `
            radial-gradient(
              circle at center,
              #080d17   0%,
              #0c1323  20%,
              #0f172a  45%,
              #111827  65%,
              transparent 100%
            )
          `,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: orbOpen
            ? 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1), height 1.5s cubic-bezier(0.22, 1, 0.36, 1)'
            : 'none',
          pointerEvents: 'none',
        }}
      />

      {/* ─── Brand name ─── */}
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Syne', 'Inter', sans-serif",
          fontSize: 'clamp(1.8rem, 5vw, 3.6rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          /* Colour transitions: dark on light → light on dark (as orb covers it) */
          color: orbOpen ? '#e2e8f0' : '#1e293b',
          /* Name entrance animation */
          opacity: nameVisible ? 1 : 0,
          transform: nameVisible ? 'translateY(0)' : 'translateY(14px)',
          transition: orbOpen
            ? 'color 0.5s ease 0.35s'
            : 'opacity 0.55s ease, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        UpscaleTechSolutions
      </span>
    </div>
  );
}
