import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, MousePointer } from 'lucide-react';
import AudioSynthesizer from './AudioSynthesizer';

export default function Navbar({ cursorEnabled, setCursorEnabled }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    { label: 'Process', href: '#process' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Team', href: '#team' },
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
        padding: isScrolled ? '14px 0' : '22px 0',
        transition: 'var(--transition-smooth)',
        backgroundColor: isScrolled ? 'rgba(250, 250, 250, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.03)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
            }}
          >
            <Sparkles size={20} color="#fff" />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.35rem',
                color: '#1a1a1a',
                letterSpacing: '-0.03em',
              }}
            >
              One<span style={{ color: 'var(--accent-purple)' }}>Solve</span>
            </span>
            <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', fontWeight: 700 }}>
              CREATIVE AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '22px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#1a1a1a',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-purple)')}
              onMouseLeave={(e) => (e.target.style.color = '#1a1a1a')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AudioSynthesizer />

          {/* Cursor Toggle Button */}
          <button
            onClick={() => setCursorEnabled(!cursorEnabled)}
            className="badge-pill cursor-pointer hidden-mobile"
            style={{
              background: cursorEnabled ? 'rgba(139, 92, 246, 0.1)' : 'rgba(0, 0, 0, 0.04)',
              borderColor: cursorEnabled ? 'rgba(139, 92, 246, 0.3)' : 'rgba(0, 0, 0, 0.08)',
              color: cursorEnabled ? 'var(--accent-purple)' : '#666',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            title="Toggle Custom Glowing Cursor"
          >
            <MousePointer size={14} />
            <span style={{ fontSize: '0.75rem' }}>{cursorEnabled ? 'CURSOR ON' : 'CURSOR OFF'}</span>
          </button>

          {/* Start Project CTA */}
          <a
            href="#contact"
            className="btn-primary desktop-nav"
            style={{ padding: '10px 22px', fontSize: '0.85rem' }}
          >
            <span>Start Project</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              padding: '8px',
              color: '#1a1a1a',
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
            backgroundColor: 'rgba(250, 250, 250, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
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
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a1a1a',
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
