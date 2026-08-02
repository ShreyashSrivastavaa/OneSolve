import React, { useState } from 'react';
import { Compass, Cpu, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WorkflowProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      subtitle: 'Uncovering goals, market positioning, and creative direction.',
      icon: Compass,
      color: '#00d9ff',
      details: [
        'Stakeholder alignment workshop & goal setting',
        'Competitive analysis & target audience personas',
        'Visual moodboarding & design direction alignment',
        'Project scope, milestones, and timeline roadmap',
      ],
    },
    {
      number: '02',
      title: 'Concept & 3D Prototyping',
      subtitle: 'Mapping user journeys and crafting interactive 3D concepts.',
      icon: Cpu,
      color: '#ff006e',
      details: [
        'Figma wireframing & high-fidelity UI design',
        'Custom 3D model creation & shader prototyping',
        'Interactive component design system setup',
        'Clickable prototype testing with key stakeholders',
      ],
    },
    {
      number: '03',
      title: 'Build & Animate',
      subtitle: 'Engineering robust React/Vite web apps with WebGL graphics.',
      icon: Code2,
      color: '#ffb703',
      details: [
        'Clean component-driven React / Vite architecture',
        'Three.js & GSAP scroll-triggered animations',
        'Responsive layout tuning across desktop, tablet & mobile',
        'Interactive micro-animations & custom cursor integration',
      ],
    },
    {
      number: '04',
      title: 'Polish & Launch',
      subtitle: 'Rigorous optimization, SEO setup, and smooth deployment.',
      icon: Rocket,
      color: '#9d4edd',
      details: [
        'Lighthouse 95+ performance optimization & code splitting',
        'Comprehensive cross-browser & mobile QA testing',
        'SEO meta tags, OpenGraph images & analytics setup',
        'Production deployment & team handoff support',
      ],
    },
  ];

  return (
    <section id="process" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 20, 34, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Rocket size={14} />
            <span>HOW WE WORK</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Our Proven <span className="gradient-text-pink">Creative Workflow</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            A structured 4-step process designed to take your project from initial vision to a polished digital flagship.
          </p>
        </div>

        {/* Timeline Step Navigation Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '40px',
          }}
          className="process-steps-grid"
        >
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isActive = idx === activeStep;

            return (
              <div
                key={st.number}
                onClick={() => setActiveStep(idx)}
                className="glass-card cursor-pointer"
                style={{
                  padding: '20px',
                  cursor: 'pointer',
                  borderColor: isActive ? st.color : 'rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(28, 37, 60, 0.95)' : 'var(--bg-card)',
                  boxShadow: isActive ? `0 0 25px ${st.color}30` : 'none',
                  transform: isActive ? 'translateY(-4px)' : 'none',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: isActive ? st.color : 'var(--text-dim)' }}>
                    {st.number}
                  </span>
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '10px',
                      background: `${st.color}15`,
                      color: st.color,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: isActive ? '#fff' : 'var(--text-muted)' }}>
                  {st.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Active Step Content Card */}
        {steps[activeStep] && (
          <div
            className="glass-card"
            style={{
              padding: '40px',
              borderRadius: '24px',
              borderColor: steps[activeStep].color,
              boxShadow: `0 10px 40px ${steps[activeStep].color}20`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: steps[activeStep].color,
                  padding: '8px 20px',
                  borderRadius: '16px',
                  background: `${steps[activeStep].color}15`,
                  border: `1px solid ${steps[activeStep].color}40`,
                }}
              >
                PHASE {steps[activeStep].number}
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{steps[activeStep].title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{steps[activeStep].subtitle}</p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
                marginTop: '30px',
              }}
            >
              {steps[activeStep].details.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <CheckCircle2 size={20} color={steps[activeStep].color} />
                  <span style={{ fontSize: '0.95rem', color: '#fff' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .process-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
