import React from 'react';

const cards = [
  {
    id: 'card-1',
    tint: 'indigo-tint',
    heading: 'Your digital presence deserves better.',
    body: 'Got an outdated website, a clunky process, or a product idea stuck in your head?\n\nWe have all been there — big vision, limited execution.',
    emoji: '🌟',
    side: 'right',
  },
  {
    id: 'card-2',
    tint: 'blue-tint',
    heading: 'Generic solutions do not cut it.',
    body: 'You could settle for a template website, off-the-shelf software, or spend a fortune patching together tools that barely talk to each other.\n\nOr keep waiting for the perfect moment — but that rarely comes.',
    emoji: '⚡',
    side: 'left',
  },
  {
    id: 'card-3',
    tint: 'violet-tint',
    heading: 'We build exactly what you need.',
    body: 'Here is UpscaleTechSolutions — custom AI, intelligent automation, and stunning web experiences built specifically for your business.\n\nEasy to use, built to scale, and designed to impress.',
    emoji: '🚀',
    side: 'right',
  },
];

function IllustrationBlock({ emoji, tint }) {
  const glowColors = {
    'indigo-tint': 'rgba(99,102,241,0.15)',
    'blue-tint': 'rgba(59,130,246,0.12)',
    'violet-tint': 'rgba(139,92,246,0.15)',
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '360px',
        aspectRatio: '4/3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        background: glowColors[tint] || 'rgba(99,102,241,0.1)',
        border: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
        fontSize: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at center, ${glowColors[tint]} 0%, transparent 70%)`,
        }}
      />
      <span style={{ position: 'relative', filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.4))' }}>
        {emoji}
      </span>
    </div>
  );
}

export default function ProblemSolution() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ position: 'relative', zIndex: 1, background: 'var(--bg-primary)' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>
            Your pixels, <br />enhanced for life.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto' }}>
            We help businesses build smarter, look better, and grow faster.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {cards.map((card) => (
            <div
              key={card.id}
              className={`info-card ${card.tint}`}
              style={{
                flexDirection: card.side === 'right' ? 'row' : 'row-reverse',
              }}
            >
              <div style={{ flex: 1, maxWidth: '480px' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {card.heading}
                </h2>
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {card.body}
                </p>
              </div>
              <IllustrationBlock emoji={card.emoji} tint={card.tint} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .info-card { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
