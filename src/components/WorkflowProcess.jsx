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
      number: '1',
      title: 'Discovery & Strategy',
      subtitle: 'Understanding goals, market dynamics, and technical scope.',
      icon: Search,
      color: '#3b82f6',
      details: [
        'Stakeholder alignment workshop & goal discovery',
        'Market intelligence & competitor benchmarking',
        'Technical architecture roadmap & API scoping',
        'Timeline commitment & milestone definitions',
      ],
    },
    {
      number: '2',
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
      number: '3',
      title: 'Prototyping & Testing',
      subtitle: 'Clickable prototypes, user testing, and AI validation.',
      icon: FlaskConical,
      color: '#8b5cf6',
      details: [
        'Interactive Figma prototypes for usability feedback',
        'Early WebGL 3D model viewport performance tests',
        'AI RAG accuracy testing & prompt evaluation',
        'WCAG AA accessibility validation checks',
      ],
    },
    {
      number: '4',
      title: 'Development',
      subtitle: 'Full-stack web engineering, AI agents, and custom APIs.',
      icon: Code,
      color: '#ec4899',
      details: [
        'Modular React / Next.js component engineering',
        'Custom RESTful & GraphQL API integration',
        'LLM & RAG vector store setup (Pinecone/Qdrant)',
        'State management & real-time WebSocket listeners',
      ],
    },
    {
      number: '5',
      title: '3D & Interactive Elements',
      subtitle: 'Custom 3D models, WebGL canvas, and GLSL shaders.',
      icon: Box,
      color: '#f59e0b',
      details: [
        'Blender 3D mesh modeling & low-poly GLTF exports',
        'Three.js & React Three Fiber canvas integration',
        'Custom GLSL fragment & vertex shader effects',
        'Scroll-triggered GSAP 3D camera animations',
      ],
    },
    {
      number: '6',
      title: 'Deployment & Optimization',
      subtitle: 'Cloud deployment, CI/CD pipelines, and speed tuning.',
      icon: Rocket,
      color: '#06b6d4',
      details: [
        'Docker containerization & AWS / Vercel cloud deployment',
        'Automated CI/CD workflow testing via GitHub Actions',
        'Lighthouse 95+ performance optimization & caching',
        'SSL encryption & OAuth2 security hardening',
      ],
    },
    {
      number: '7',
      title: 'Launch & Monitoring',
      subtitle: 'Go-live execution, real-time analytics, and logging.',
      icon: Activity,
      color: '#8b5cf6',
      details: [
        'Production DNS cutover & zero-downtime launch',
        'Real-time uptime & latency error monitoring',
        'Google Analytics 4 & heatmapping integration',
        'Post-launch client team handover & documentation',
      ],
    },
    {
      number: '8',
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
      style={{ position: 'relative', zIndex: 1, background: '#fafafa' }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Rocket size={14} />
            <span>HOW WE WORK</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Our <span className="gradient-text-purple">Process</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            An 8-step sequential timeline taking your digital vision from initial discovery to scaled global operation.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {/* Connecting Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '27px',
              width: '2px',
              background: 'rgba(0, 0, 0, 0.08)',
              zIndex: 0,
            }}
          />

          {/* Timeline Steps List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = idx === activeStep;

              return (
                <div
                  key={st.number}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '24px',
                    position: 'relative',
                    zIndex: 1,
                    cursor: 'pointer',
                  }}
                >
                  {/* Left Numbered Indicator Circle */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: isActive ? st.color : '#ffffff',
                      color: isActive ? '#ffffff' : '#1a1a1a',
                      border: `2px solid ${isActive ? st.color : 'rgba(0, 0, 0, 0.1)'}`,
                      boxShadow: isActive ? `0 4px 20px ${st.color}40` : '0 2px 10px rgba(0,0,0,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      flexShrink: 0,
                      transition: 'var(--transition-bounce)',
                    }}
                  >
                    {st.number}
                  </div>

                  {/* Right Content Card */}
                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: '28px',
                      borderRadius: '20px',
                      background: '#ffffff',
                      border: `1px solid ${isActive ? st.color : 'rgba(0, 0, 0, 0.06)'}`,
                      boxShadow: isActive ? `0 8px 30px ${st.color}15` : '0 4px 20px rgba(0, 0, 0, 0.03)',
                      transform: isActive ? 'translateX(6px)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1a1a1a' }}>{st.title}</h3>
                      <div
                        style={{
                          padding: '8px',
                          borderRadius: '10px',
                          background: `${st.color}12`,
                          color: st.color,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                    </div>

                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                      {st.subtitle}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                      {st.details.map((detail, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={16} color={st.color} style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: '0.85rem', color: '#1a1a1a' }}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
