import React from 'react';
import { ArrowUpRight, Sparkles, MessageSquare, Rocket, Target } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      style={{
        padding: '100px 0',
        position: 'relative',
        zIndex: 1,
        background: 'var(--bg-secondary)',
      }}
    >
      {/* Gradient Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '80px 40px',
            borderRadius: '32px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(26, 26, 36, 0.9)',
            border: '2px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 12px 40px rgba(139, 92, 246, 0.2)',
          }}
        >
          {/* Decorative Elements */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          <div className="badge-pill" style={{ marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <Sparkles size={14} />
            <span>START YOUR TRANSFORMATION</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 900,
              marginBottom: '24px',
              lineHeight: 1.1,
              color: 'var(--text-main)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Ready To Start <br />
            <span className="gradient-text-purple">Your Project?</span>
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.15rem',
              maxWidth: '650px',
              margin: '0 auto 40px auto',
              lineHeight: 1.6,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Book a free 30-minute discovery call with our creative leads to discuss your vision, timeline, and custom 3D web features.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: '18px 40px',
                fontSize: '1.05rem',
                background: 'var(--gradient-purple)',
              }}
            >
              <Rocket size={20} />
              <span>Book Discovery Call</span>
              <ArrowUpRight size={20} />
            </a>
            <a
              href="mailto:hello@onesolve.agency"
              className="btn-secondary"
              style={{ padding: '18px 36px', fontSize: '1rem' }}
            >
              <MessageSquare size={18} />
              <span>Email Us Directly</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {[
              { icon: Target, text: 'Free Consultation' },
              { icon: Rocket, text: 'Fast Response Time' },
              { icon: Sparkles, text: 'No Obligation' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  <Icon size={16} style={{ color: 'var(--accent-purple)' }} />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
