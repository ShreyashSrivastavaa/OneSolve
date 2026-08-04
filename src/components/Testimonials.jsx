import React, { useState, useEffect } from 'react';
import { Star, MessageSquareQuote, Quote, Zap, Twitter, Heart } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      quote:
        'OneSolve turned our vision into an absolute masterpiece. Their AI Chatbot engine and WebGL dashboard performance left our board members and users speechless.',
      author: 'Alex Vance',
      handle: '@alexvance',
      role: 'VP of Product',
      company: 'Synthetix AI',
      avatar: '👨‍💼',
      stars: 5,
      project: 'AI Chatbot & Dashboard Platform',
      metric: '+300% User Engagement',
      likes: 142,
      retweets: 28,
    },
    {
      id: 2,
      quote:
        'They delivered a luxury brand identity and custom 3D WebGL storefront that generated 3.5x ROI in our very first month of launch!',
      author: 'Elena Rostova',
      handle: '@elenarostova',
      role: 'Founder & Creative Lead',
      company: 'AURA Couture',
      avatar: '👩‍🎨',
      stars: 5,
      project: '3D Product Visualizer & Branding',
      metric: '3.5x Launch ROI',
      likes: 256,
      retweets: 45,
    },
    {
      id: 3,
      quote:
        'OneSolve eliminated manual data entry bottlenecks completely across our enterprise operations by self-hosting n8n workflows.',
      author: 'Dr. Marcus Sterling',
      handle: '@drsterling',
      role: 'Chief Technology Officer',
      company: 'Orion Global',
      avatar: '👨‍🔬',
      stars: 5,
      project: 'Enterprise Automation Suite',
      metric: '30 Hrs Saved / Week',
      likes: 189,
      retweets: 34,
    },
    {
      id: 4,
      quote:
        'Our dev team queries our internal codebase in natural language using the Agentic AI & MCP system OneSolve engineered for us.',
      author: 'Sarah Jenkins',
      handle: '@sarahjenkins',
      role: 'Head of Engineering',
      company: 'Apex Tech Labs',
      avatar: '👩‍💻',
      stars: 5,
      project: 'Agentic AI & MCP Knowledge Graph',
      metric: '15x Search Velocity',
      likes: 312,
      retweets: 67,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const active = reviews[currentIndex];

  return (
    <section id="testimonials" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <MessageSquareQuote size={14} />
            <span>CLIENT LOVE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)' }}>
            Client <span className="gradient-text-purple">Love</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Discover how our full-stack engineering, 3D graphics, and AI automation transform real client businesses.
          </p>
        </div>

        {/* Twitter-style Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="glass-card"
              style={{
                padding: '24px',
                borderRadius: '16px',
                position: 'relative',
                background: index === currentIndex ? 'rgba(139, 92, 246, 0.1)' : 'rgba(26, 26, 36, 0.8)',
                border: index === currentIndex ? '2px solid var(--accent-purple)' : '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Twitter-style Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    border: '2px solid var(--accent-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}
                >
                  {review.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                      {review.author}
                    </h4>
                    <Twitter size={14} style={{ color: 'var(--accent-purple)' }} />
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                    {review.handle}
                  </div>
                </div>
              </div>

              {/* Tweet Content */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}
              >
                "{review.quote}"
              </p>

              {/* Metric Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#10b981',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                <Zap size={12} />
                <span>{review.metric}</span>
              </div>

              {/* Engagement Stats */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                  <Heart size={14} />
                  <span>{review.likes}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                  <MessageSquareQuote size={14} />
                  <span>{review.retweets}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Review - Large Display */}
        <div
          style={{
            maxWidth: '800px',
            margin: '48px auto 0 auto',
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: '40px',
              borderRadius: '24px',
              position: 'relative',
              background: 'rgba(26, 26, 36, 0.9)',
              border: '2px solid var(--accent-purple)',
              boxShadow: '0 8px 30px rgba(139, 92, 246, 0.2)',
            }}
          >
            {/* Quote Graphic */}
            <div style={{ position: 'absolute', top: '24px', right: '32px', color: 'rgba(139, 92, 246, 0.2)' }}>
              <Quote size={60} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '6px', color: '#f59e0b' }}>
                {[...Array(active.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Result Metric Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#10b981',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                }}
              >
                <Zap size={14} />
                <span>Result: {active.metric}</span>
              </div>
            </div>

            {/* Quote Text */}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'var(--text-main)',
                lineHeight: 1.6,
                marginBottom: '32px',
                position: 'relative',
                zIndex: 1,
                fontStyle: 'italic',
              }}
            >
              "{active.quote}"
            </p>

            {/* Client Info Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    border: '2px solid var(--accent-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                  }}
                >
                  {active.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>{active.author}</h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    {active.role} • <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{active.company}</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '2px' }}>
                  PROJECT
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', fontWeight: 700 }}>
                  {active.project}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
