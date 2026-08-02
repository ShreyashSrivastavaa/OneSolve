import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Phone, Copy, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design & Dev',
    budget: '$5k - $10k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const services = ['Web Design & Dev', '3D Animation & Motion', 'Brand Identity', 'UI/UX Design'];
  const budgets = ['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger Confetti Party Explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00d9ff', '#ff006e', '#ffb703'],
    });

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@onesolve.agency');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Mail size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, marginBottom: '20px' }}>
            Let's Build Something <span className="gradient-text-pink">Extraordinary</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Have a project in mind? Fill out the form below or drop us an email to kickstart your digital experience.
          </p>
        </div>

        {/* Layout: Form on Left, Contact Details on Right */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '36px', alignItems: 'start' }}>
          {/* Left Form */}
          <div style={{ gridColumn: 'span 7' }} className="contact-form-col">
            <div className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'rgba(0, 217, 255, 0.15)',
                      border: '2px solid var(--accent-cyan)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                    Project Request Transmitted!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '450px', margin: '0 auto 24px auto' }}>
                    Thank you, <span style={{ color: '#fff', fontWeight: 700 }}>{formData.name}</span>. Our team at OneSolve will review your request and get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary">
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.95rem',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.95rem',
                        }}
                      />
                    </div>
                  </div>

                  {/* Service Pills */}
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '10px' }}>
                      Select Primary Service
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {services.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setFormData({ ...formData, service: srv })}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            border: '1px solid',
                            borderColor: formData.service === srv ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)',
                            background: formData.service === srv ? 'rgba(0, 217, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                            color: formData.service === srv ? '#fff' : 'var(--text-muted)',
                            cursor: 'pointer',
                          }}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Pills */}
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '10px' }}>
                      Estimated Budget Range
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            border: '1px solid',
                            borderColor: formData.budget === b ? 'var(--accent-pink)' : 'rgba(255, 255, 255, 0.1)',
                            background: formData.budget === b ? 'rgba(255, 0, 110, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                            color: formData.budget === b ? '#fff' : 'var(--text-muted)',
                            cursor: 'pointer',
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                      Project Overview / Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project goals, timelines, and visual vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        outline: 'none',
                        fontSize: '0.95rem',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '16px', justifyContent: 'center' }}>
                    <span>Send Project Proposal</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Info */}
          <div style={{ gridColumn: 'span 5' }} className="contact-info-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                  Direct Email Contact
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>hello@onesolve.agency</span>
                  <button onClick={copyEmail} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.78rem' }}>
                    {copiedEmail ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '30px', borderRadius: '20px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                  Studio Location & Hours
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MapPin size={18} className="text-pink-400" />
                    <span>Creative Studio Hub, San Francisco / Remote Worldwide</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Phone size={18} className="text-gold-400" />
                    <span>Mon - Fri (9:00 AM - 6:00 PM PST)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-form-col { grid-column: span 12 !important; }
          .contact-info-col { grid-column: span 12 !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
