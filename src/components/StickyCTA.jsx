import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 990,
        width: '90%',
        maxWidth: '700px',
        padding: '16px 24px',
        borderRadius: '50px',
        background: 'rgba(18, 24, 40, 0.92)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 217, 255, 0.35)',
        boxShadow: '0 10px 30px rgba(0, 217, 255, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        transition: 'var(--transition-smooth)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(0, 217, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)',
            flexShrink: 0,
          }}
        >
          <Sparkles size={18} />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#fff' }}>
            Ready to Transform Your Business?
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Speak directly with our AI & 3D Web Architects
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <a
          href="#contact"
          className="btn-primary"
          style={{ padding: '10px 20px', fontSize: '0.82rem', borderRadius: '30px' }}
        >
          <span>Book Free Consultation</span>
          <ArrowRight size={14} />
        </a>

        <button
          onClick={() => setDismissed(true)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-dim)',
            cursor: 'pointer',
            padding: '4px',
          }}
          title="Dismiss Sticky Banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
