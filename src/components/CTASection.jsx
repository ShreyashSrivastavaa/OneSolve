import React from 'react';
import { ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section style={{ padding: '60px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '60px 40px',
            borderRadius: '32px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(28, 37, 60, 0.95) 100%)',
            borderColor: 'rgba(0, 217, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 217, 255, 0.15)',
          }}
        >
          <div className="glow-orb-cyan" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />

          <div className="badge-pill" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} />
            <span>START YOUR TRANSFORMATION</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>
            Ready To Launch Your Next <br />
            <span className="gradient-text-cyan">Digital Flagship?</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 36px auto' }}>
            Book a free 30-minute discovery call with our creative leads to discuss your vision, timeline, and custom 3D web features.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <a href="#contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              <span>Book Discovery Call</span>
              <ArrowUpRight size={20} />
            </a>
            <a href="mailto:hello@onesolve.agency" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              <MessageSquare size={18} />
              <span>Email Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
