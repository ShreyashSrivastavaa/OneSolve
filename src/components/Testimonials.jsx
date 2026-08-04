import React from 'react';

const reviews = [
  {
    author: 'Alex Vance',
    handle: '@alexvance',
    quote: 'UpscaleTechSolutions turned our vision into an absolute masterpiece. Their AI Chatbot engine and WebGL dashboard left our board members speechless.',
  },
  {
    author: 'Elena Rostova',
    handle: '@elenarostova',
    quote: 'They delivered a luxury brand identity and custom 3D WebGL storefront that generated 3.5× ROI in our very first month of launch!',
  },
  {
    author: 'Dr. Marcus Sterling',
    handle: '@drsterling',
    quote: 'UpscaleTechSolutions eliminated our manual data entry bottlenecks completely across enterprise operations using self-hosted n8n workflows.',
  },
  {
    author: 'Sarah Jenkins',
    handle: '@sarahjenkins',
    quote: 'Our dev team queries our internal codebase in natural language using the Agentic AI & MCP system they engineered. Game-changer! 🤯',
  },
  {
    author: 'James Liu',
    handle: '@jamesliu',
    quote: "The RAG knowledge system they built for us made our support team 15× faster at finding answers. Truly impressive engineering.",
  },
  {
    author: 'Priya Sharma',
    handle: '@priyasharma',
    quote: "Our new website went from a template to a world-class product. The 3D animations and performance scores are off the charts.",
  },
  {
    author: 'Carlos Mendez',
    handle: '@carlosmendez',
    quote: "If you want top-tier AI automation and a website that actually converts — UpscaleTechSolutions is the only call you need to make.",
  },
  {
    author: 'Lily Chen',
    handle: '@lilychen',
    quote: "Free from manual reporting forever! Their automated workflow pipelines have saved us 30+ hours every single week.",
  },
];

// Duplicate for seamless loop
const doubled = [...reviews, ...reviews];

function ReviewCard({ review }) {
  return (
    <figure
      style={{
        width: '280px',
        flexShrink: 0,
        background: 'rgba(30, 41, 59, 0.7)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: '20px',
        cursor: 'pointer',
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(41,53,72,0.9)';
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(30,41,59,0.7)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#c7d2fe',
            flexShrink: 0,
            border: '1px solid rgba(99,102,241,0.3)',
          }}
        >
          {review.author.charAt(0)}
        </div>
        <div>
          <figcaption style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
            {review.author}
          </figcaption>
          <p style={{ fontSize: '0.76rem', color: 'var(--text-dim)', fontWeight: 500 }}>
            {review.handle}
          </p>
        </div>
      </div>
      <blockquote
        style={{
          fontSize: '0.88rem',
          color: 'var(--text-muted)',
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {review.quote}
      </blockquote>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        background: 'var(--bg-primary)',
        padding: '100px 0',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}>
        <h2
          className="section-heading"
          style={{ marginBottom: '12px' }}
        >
          Hey, people seem to love us too!
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Real results from real clients — here's what they're saying.
        </p>
      </div>

      {/* Marquee */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fade edges */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(to right, var(--bg-primary), transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(to left, var(--bg-primary), transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div className="cards-marquee-track" style={{ padding: '8px 0' }}>
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
