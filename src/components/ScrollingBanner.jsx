import React from 'react';

const words = [
  'UpscaleTechSolutions',
  'UpscaleTechSolutions',
  'UpscaleTechSolutions',
  'UpscaleTechSolutions',
  'UpscaleTechSolutions',
  'UpscaleTechSolutions',
  'UpscaleTechSolutions',
  'UpscaleTechSolutions',
];

export default function ScrollingBanner() {
  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '20px 0',
        background: 'var(--bg-primary)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="marquee-track">
        {[...words, ...words].map((word, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(4rem, 8vw, 7rem)',
                fontWeight: 200,
                textTransform: 'uppercase',
                color: 'rgba(148, 163, 184, 0.18)',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                paddingRight: '60px',
              }}
            >
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
