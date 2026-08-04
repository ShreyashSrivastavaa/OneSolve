import React from 'react';

const clients = [
  { name: 'Synthetix AI',    abbr: 'Synthetix' },
  { name: 'AURA Couture',    abbr: 'AURA' },
  { name: 'Orion Global',    abbr: 'Orion' },
  { name: 'Apex Tech Labs',  abbr: 'Apex' },
  { name: 'NovaSpark',       abbr: 'NovaSpark' },
  { name: 'Strata Digital',  abbr: 'Strata' },
  { name: 'Lumen Cloud',     abbr: 'Lumen' },
  { name: 'Zenith Labs',     abbr: 'Zenith' },
];

// Duplicate for seamless infinite scroll
const doubled = [...clients, ...clients];

export default function SocialProof() {
  return (
    <div
      style={{
        paddingTop: '48px',
        paddingBottom: '48px',
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: 'var(--text-dim)',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}
      >
        Trusted by forward-thinking teams
      </p>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 48px',
                height: '40px',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  opacity: 0.55,
                  transition: 'opacity 0.2s ease',
                  userSelect: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.55')}
              >
                {client.name}
              </span>
              {/* Dot separator */}
              <span
                style={{
                  display: 'inline-block',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--text-dim)',
                  opacity: 0.3,
                  marginLeft: '48px',
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Top border line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(100,116,139,0.2), transparent)',
        }}
      />
    </div>
  );
}
