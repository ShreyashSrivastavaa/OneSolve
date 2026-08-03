import React from 'react';
import { ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 1, background: '#fafafa' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '70px 40px',
            borderRadius: '32px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #ffffff 0%, #f4f4f8 100%)',
            borderColor: 'rgba(139, 92, 246, 0.2)',
            boxShadow: '0 12px 40px rgba(139, 92, 246, 0.08)',
          }}
        >
          <div className="badge-pill" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} />
            <span>START YOUR TRANSFORMATION</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1, color: '#1a1a1a' }}>
            Ready To Start <br />
            <span className="gradient-text-purple">Your Project?</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 36px auto', lineHeight: 1.6 }}>
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
