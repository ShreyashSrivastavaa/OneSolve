import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Copy, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState(['Web Design & Dev', 'AI Solutions']);
  const [budgetValue, setBudgetValue] = useState(25000);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  const availableServices = [
    'Web Design & Dev',
    'AI Solutions & Automation',
    'Agentic AI & RAG Systems',
    '3D Web Experiences',
    'UI/UX Design',
    'Cloud & DevOps',
    'Brand Identity',
    'Business Process Automation',
    'Maintenance & Growth',
  ];

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#ec4899', '#3b82f6', '#f59e0b'],
    });

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@onesolve.agency');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const formattedBudget =
    budgetValue >= 100000 ? '$100,000+' : `$${budgetValue.toLocaleString()}`;

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 1, background: '#fafafa' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Mail size={14} />
            <span>LET'S TALK</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Start Your <span className="gradient-text-purple">Project</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Have an ambitious web, 3D, or AI project? Fill out our scope inquiry form or schedule a direct consultation call.
          </p>
        </div>

        {/* Layout: Form + Info Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '36px', alignItems: 'start' }}>
          {/* Left Form */}
          <div style={{ gridColumn: 'span 7' }} className="contact-form-col">
            <div
              className="glass-card"
              style={{
                padding: '40px',
                borderRadius: '24px',
                background: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '2px solid var(--accent-purple)',
                      color: 'var(--accent-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '12px' }}>
                    Proposal Request Received!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 24px auto' }}>
                    Thank you, <span style={{ color: '#1a1a1a', fontWeight: 700 }}>{formData.name}</span>. Our lead architect will review your scope (<span style={{ color: 'var(--accent-purple)', fontWeight: 700 }}>{formattedBudget}</span>) and respond within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary">
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Name & Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          background: '#f4f4f6',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          color: '#1a1a1a',
                          outline: 'none',
                          fontSize: '0.95rem',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Apex Technologies"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          background: '#f4f4f6',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          color: '#1a1a1a',
                          outline: 'none',
                          fontSize: '0.95rem',
                        }}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          background: '#f4f4f6',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          color: '#1a1a1a',
                          outline: 'none',
                          fontSize: '0.95rem',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          background: '#f4f4f6',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          color: '#1a1a1a',
                          outline: 'none',
                          fontSize: '0.95rem',
                        }}
                      />
                    </div>
                  </div>

                  {/* Multi-Select Services Pills */}
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: '10px' }}>
                      Services Interested In:
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {availableServices.map((srv) => {
                        const isSelected = selectedServices.includes(srv);

                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            style={{
                              padding: '8px 14px',
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              border: '1px solid',
                              borderColor: isSelected ? 'var(--accent-purple)' : 'rgba(0, 0, 0, 0.08)',
                              background: isSelected ? 'var(--accent-purple)' : '#f4f4f6',
                              color: isSelected ? '#ffffff' : '#1a1a1a',
                              cursor: 'pointer',
                              transition: 'var(--transition-smooth)',
                            }}
                          >
                            {isSelected ? '✓ ' : '+ '} {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive Budget Range Slider */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a' }}>
                        Project Budget Range:
                      </label>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-purple)' }}>
                        {formattedBudget}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="5000"
                      value={budgetValue}
                      onChange={(e) => setBudgetValue(Number(e.target.value))}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '6px' }}>
                      <span>$5,000</span>
                      <span>$25,000</span>
                      <span>$50,000</span>
                      <span>$100,000+</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>
                      Project Details & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your vision, target launch date, and key features..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        background: '#f4f4f6',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        color: '#1a1a1a',
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

          {/* Right Info & Consultation Call Booking */}
          <div style={{ gridColumn: 'span 5' }} className="contact-info-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Call Booking Card */}
              <div
                className="glass-card"
                style={{
                  padding: '30px',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  boxShadow: '0 8px 30px rgba(139, 92, 246, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <Calendar size={24} color="var(--accent-purple)" />
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1a1a1a' }}>
                    Book a 15-Min Discovery Call
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                  Prefer a live video conversation? Speak directly with our lead architect to discuss scope and timelines.
                </p>
                <button
                  onClick={() => setShowCalendlyModal(true)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Calendar size={18} />
                  <span>Schedule Consultation</span>
                </button>
              </div>

              {/* Direct Email Card */}
              <div className="glass-card" style={{ padding: '24px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '12px' }}>
                  Direct Email Contact
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '12px', background: '#f4f4f6', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', fontWeight: 700 }}>hello@onesolve.agency</span>
                  <button onClick={copyEmail} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
                    {copiedEmail ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="glass-card" style={{ padding: '24px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '14px' }}>
                  Response Guarantee
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>Inquiries Answered Within 24 Hours</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MapPin size={16} color="var(--accent-purple)" />
                    <span>San Francisco Studio & Global Remote Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Booking Modal Simulation */}
      {showCalendlyModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setShowCalendlyModal(false)}
        >
          <div
            className="glass-card"
            style={{ padding: '36px', maxWidth: '500px', width: '100%', borderRadius: '24px', textAlign: 'center', background: '#ffffff' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Calendar size={48} color="var(--accent-purple)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '10px' }}>
              Schedule 15-Min Discovery Call
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Select a time slot directly on our official calendar to speak directly with Shreyash Srivastava & the OneSolve engineering team.
            </p>
            <div style={{ padding: '20px', background: '#f4f4f6', borderRadius: '16px', marginBottom: '24px', border: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontWeight: 700, color: 'var(--accent-purple)' }}>Available Slots Today & Tomorrow</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '4px' }}>10:00 AM • 2:30 PM • 4:00 PM PST</div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setShowCalendlyModal(false)} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                Close
              </button>
              <a href="mailto:hello@onesolve.agency?subject=Discovery%20Call%20Booking" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                Confirm Slot
              </a>
            </div>
          </div>
        </div>
      )}

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
