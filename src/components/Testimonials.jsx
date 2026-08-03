import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, Quote, Zap } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      quote:
        'OneSolve turned our vision into an absolute masterpiece. Their AI Chatbot engine and WebGL dashboard performance left our board members and users speechless.',
      author: 'Alex Vance',
      role: 'VP of Product',
      company: 'Synthetix AI',
      avatar: '👨‍💼',
      stars: 5,
      project: 'AI Chatbot & Dashboard Platform',
      metric: '+300% User Engagement',
    },
    {
      id: 2,
      quote:
        'They delivered a luxury brand identity and custom 3D WebGL storefront that generated 3.5x ROI in our very first month of launch!',
      author: 'Elena Rostova',
      role: 'Founder & Creative Lead',
      company: 'AURA Couture',
      avatar: '👩‍🎨',
      stars: 5,
      project: '3D Product Visualizer & Branding',
      metric: '3.5x Launch ROI',
    },
    {
      id: 3,
      quote:
        'OneSolve eliminated manual data entry bottlenecks completely across our enterprise operations by self-hosting n8n workflows.',
      author: 'Dr. Marcus Sterling',
      role: 'Chief Technology Officer',
      company: 'Orion Global',
      avatar: '👨‍🔬',
      stars: 5,
      project: 'Enterprise Automation Suite',
      metric: '30 Hrs Saved / Week',
    },
    {
      id: 4,
      quote:
        'Our dev team queries our internal codebase in natural language using the Agentic AI & MCP system OneSolve engineered for us.',
      author: 'Sarah Jenkins',
      role: 'Head of Engineering',
      company: 'Apex Tech Labs',
      avatar: '👩‍💻',
      stars: 5,
      project: 'Agentic AI & MCP Knowledge Graph',
      metric: '15x Search Velocity',
    },
  ];

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const active = reviews[currentIndex];

  return (
    <section id="testimonials" className="section-padding" style={{ position: 'relative', zIndex: 1, background: '#fafafa' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <MessageSquareQuote size={14} />
            <span>CLIENT LOVE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Client <span className="gradient-text-purple">Love</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Discover how our full-stack engineering, 3D graphics, and AI automation transform real client businesses.
          </p>
        </div>

        {/* Carousel Card */}
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div
            className="glass-card"
            style={{
              padding: '48px',
              borderRadius: '24px',
              position: 'relative',
              background: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Quote Graphic */}
            <div style={{ position: 'absolute', top: '24px', right: '32px', color: 'rgba(139, 92, 246, 0.1)' }}>
              <Quote size={80} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '6px', color: '#f59e0b' }}>
                {[...Array(active.stars)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
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
                  background: 'rgba(16, 185, 129, 0.1)',
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

            {/* Elegant Serif Quote Text */}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)',
                color: '#1a1a1a',
                lineHeight: 1.6,
                marginBottom: '36px',
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
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '2px solid var(--accent-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                  }}
                >
                  {active.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1a1a1a' }}>{active.author}</h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    {active.role} • <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{active.company}</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={prevReview}
                  className="btn-secondary"
                  style={{ width: '44px', height: '44px', padding: 0, justifyContent: 'center', borderRadius: '50%' }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextReview}
                  className="btn-secondary"
                  style={{ width: '44px', height: '44px', padding: 0, justifyContent: 'center', borderRadius: '50%' }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
