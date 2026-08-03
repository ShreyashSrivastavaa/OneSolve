import React, { useState } from 'react';
import {
  Search,
  Layout,
  FlaskConical,
  Code,
  Box,
  Rocket,
  Activity,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

export default function WorkflowProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      subtitle: 'Understanding goals, market dynamics, and technical scope.',
      icon: Search,
      color: '#00d9ff',
      details: [
        'Stakeholder alignment workshop & goal discovery',
        'Market intelligence & competitor benchmarking',
        'Technical architecture roadmap & API scoping',
        'Timeline commitment & milestone definitions',
      ],
    },
    {
      number: '02',
      title: 'Design & Planning',
      subtitle: 'Wireframes, design systems, and technical architecture.',
      icon: Layout,
      color: '#ec4899',
      details: [
        'Figma component design tokens & grid layout system',
        'High-fidelity UX wireframing & user flow mapping',
        'Database schema design & API endpoint planning',
        'AI prompt engineering & context window architecture',
      ],
    },
    {
      number: '03',
      title: 'Prototyping & Testing',
      subtitle: 'Clickable prototypes, user testing, and AI validation.',
      icon: FlaskConical,
      color: '#a855f7',
      details: [
        'Interactive Figma prototypes for usability feedback',
        'Early WebGL 3D model viewport performance tests',
        'AI RAG accuracy testing & prompt evaluation',
        'WCAG AA accessibility validation checks',
      ],
    },
    {
      number: '04',
      title: 'Development',
      subtitle: 'Full-stack web engineering, AI agents, and custom APIs.',
      icon: Code,
      color: '#ff006e',
      details: [
        'Modular React / Next.js component engineering',
        'Custom RESTful & GraphQL API integration',
        'LLM & RAG vector store setup (Pinecone/Qdrant)',
        'State management & real-time WebSocket listeners',
      ],
    },
    {
      number: '05',
      title: '3D & Interactive Elements',
      subtitle: 'Custom 3D models, WebGL canvas, and GLSL shaders.',
      icon: Box,
      color: '#ffb703',
      details: [
        'Blender 3D mesh modeling & low-poly GLTF exports',
        'Three.js & React Three Fiber canvas integration',
        'Custom GLSL fragment & vertex shader effects',
        'Scroll-triggered GSAP 3D camera animations',
      ],
    },
    {
      number: '06',
      title: 'Deployment & Optimization',
      subtitle: 'Cloud deployment, CI/CD pipelines, and speed tuning.',
      icon: Rocket,
      color: '#38bdf8',
      details: [
        'Docker containerization & AWS / Vercel cloud deployment',
        'Automated CI/CD workflow testing via GitHub Actions',
        'Lighthouse 95+ performance optimization & caching',
        'SSL encryption & OAuth2 security hardening',
      ],
    },
    {
      number: '07',
      title: 'Launch & Monitoring',
      subtitle: 'Go-live execution, real-time analytics, and logging.',
      icon: Activity,
      color: '#9d4edd',
      details: [
        'Production DNS cutover & zero-downtime launch',
        'Real-time uptime & latency error monitoring',
        'Google Analytics 4 & heatmapping integration',
        'Post-launch client team handover & documentation',
      ],
    },
    {
      number: '08',
      title: 'Growth & Support',
      subtitle: 'Ongoing SLA support, updates, scaling, and feature iterations.',
      icon: TrendingUp,
      color: '#10b981',
      details: [
        'Monthly SLA technical support & security updates',
        'AI model fine-tuning & prompt accuracy iterations',
        'Conversion rate optimization (CRO) A/B experiments',
        'Continuous feature enhancements as business scales',
      ],
    },
  ];

  return (
    <section
      id="process"
      className="section-padding"
      style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 20, 34, 0.5)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Rocket size={14} />
            <span>HOW WE SOLVE YOUR PROBLEMS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Our 8-Step <span className="gradient-text-pink">Proven Workflow</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            A transparent, sequential methodology taking your digital vision from initial discovery to scaled global operation.
          </p>
        </div>

        {/* Timeline Step Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}
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
                  padding: '18px',
                  cursor: 'pointer',
                  borderColor: isActive ? st.color : 'rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(28, 37, 60, 0.95)' : 'var(--bg-card)',
                  boxShadow: isActive ? `0 0 20px ${st.color}25` : 'none',
                  transform: isActive ? 'translateY(-4px)' : 'none',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: isActive ? st.color : 'var(--text-dim)' }}>
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
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: isActive ? '#fff' : 'var(--text-muted)' }}>
                  {st.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase */}
        {steps[activeStep] && (
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '24px',
              borderColor: steps[activeStep].color,
              boxShadow: `0 10px 40px ${steps[activeStep].color}20`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  color: steps[activeStep].color,
                  padding: '8px 18px',
                  borderRadius: '14px',
                  background: `${steps[activeStep].color}15`,
                  border: `1px solid ${steps[activeStep].color}40`,
                }}
              >
                STEP {steps[activeStep].number}
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
                marginTop: '24px',
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
                  <CheckCircle2 size={20} color={steps[activeStep].color} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: '#fff' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
