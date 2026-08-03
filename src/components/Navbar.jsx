import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, MousePointer } from 'lucide-react';
import AudioSynthesizer from './AudioSynthesizer';

export default function Navbar({ cursorEnabled, setCursorEnabled }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'AI Demos', href: '#demos' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#capabilities' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '12px 0' : '20px 0',
        transition: 'var(--transition-smooth)',
        backgroundColor: isScrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00d9ff 0%, #ff006e 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 217, 255, 0.4)',
            }}
          >
            <Sparkles size={22} color="#000" />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.4rem',
                color: '#fff',
                letterSpacing: '-0.03em',
              }}
            >
              One<span style={{ color: 'var(--accent-cyan)' }}>Solve</span>
            </span>
            <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              CREATIVE AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.92rem',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <AudioSynthesizer />

          {/* Cursor Toggle Button */}
          <button
            onClick={() => setCursorEnabled(!cursorEnabled)}
            className="badge-pill cursor-pointer hidden-mobile"
            style={{
              background: cursorEnabled ? 'rgba(255, 0, 110, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              borderColor: cursorEnabled ? 'rgba(255, 0, 110, 0.4)' : 'rgba(255, 255, 255, 0.1)',
              color: cursorEnabled ? '#ff006e' : '#94a3b8',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            title="Toggle Custom Glowing Cursor"
          >
            <MousePointer size={14} />
            <span style={{ fontSize: '0.78rem' }}>{cursorEnabled ? 'CURSOR ON' : 'CURSOR OFF'}</span>
          </button>

          {/* Start Project CTA */}
          <a href="#contact" className="btn-primary desktop-nav" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
            <span>Start Project</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '10px',
              padding: '8px',
              color: '#fff',
              cursor: 'pointer',
              display: 'none',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 9, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            padding: '40px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}
          >
            Start Your Project
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
