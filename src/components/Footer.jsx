import React, { useState } from 'react';
import { Sparkles, ArrowUp, Send, CheckCircle2, Globe, Share2, ExternalLink, MessageSquare, Terminal, FileText } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#04060b',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', marginBottom: '60px' }}>
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col">
            <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00d9ff 0%, #ff006e 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={20} color="#000" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.4rem', color: '#fff' }}>
                One<span style={{ color: 'var(--accent-cyan)' }}>Solve</span>
              </span>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Full-Stack Creative & AI Solutions Agency. We engineer bespoke web apps, 3D WebGL experiences, autonomous AI agents, and cloud automation platforms.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: Globe, href: '#', label: 'Website' },
                { icon: Share2, href: '#', label: 'Share' },
                { icon: ExternalLink, href: '#', label: 'Network' },
                { icon: MessageSquare, href: '#', label: 'Community' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    title={s.label}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'var(--transition-smooth)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-cyan)';
                      e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ gridColumn: 'span 2' }} className="footer-col">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About Squad</a>
              <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>10 Services</a>
              <a href="#demos" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>AI & 3D Demos</a>
              <a href="#portfolio" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Case Studies</a>
              <a href="#tech-stack" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tech Arsenal</a>
              <a href="#process" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>8-Step Process</a>
              <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact Us</a>
            </div>
          </div>

          {/* Resources */}
          <div style={{ gridColumn: 'span 2' }} className="footer-col">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <span>Documentation</span>
              <span>API Reference</span>
              <span>Agentic AI Playbook</span>
              <span>Case Studies PDF</span>
              <span>Privacy & Terms</span>
            </div>
          </div>

          {/* Newsletter Form */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Get AI & Tech Updates</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '16px' }}>
              Subscribe to our monthly tech journal on AI agents, 3D WebGL shaders, and web development innovations.
            </p>

            {subscribed ? (
              <div style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} />
                <span>Subscribed! Welcome to the OneSolve journal.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.88rem',
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '10px 16px' }}>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Back to top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            © {new Date().getFullYear()} OneSolve Agency. Enterprise Creative & AI Solutions. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            <span>Back To Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-col { grid-column: span 12 !important; }
        }
      `}</style>
    </footer>
  );
}
