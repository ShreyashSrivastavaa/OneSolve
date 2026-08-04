import React, { useState } from 'react';
import {
  Monitor, Bot, BrainCircuit, Layout, Box, Sparkles,
  Cloud, Cpu, Workflow, TrendingUp, ArrowRight, X, CheckCircle,
  Gauge, Palette, Puzzle, Infinity, MonitorSpeaker, Group,
} from 'lucide-react';

const services = [
  {
    id: 0, icon: Monitor, title: 'Web Design & Development',
    desc: 'Custom web apps, SaaS platforms, and e-commerce storefronts built for performance and beauty.',
    accent: '#6366f1',
    tags: ['React', 'Next.js', 'TypeScript'],
    count: '45+ Projects',
    features: [
      'Custom React, Next.js & Vite Web Applications',
      'SaaS Platforms & Enterprise E-Commerce',
      'Lighthouse 95+ Performance Tuning',
      'Mobile-First Responsive Layouts',
      'Headless CMS Integration (Sanity, Contentful)',
    ],
    span: 'col-1-2 row-1-2',
  },
  {
    id: 1, icon: Bot, title: 'AI Solutions & Automation',
    desc: 'Harness LLMs, chatbots, and intelligent agents to automate workflows and delight users.',
    accent: '#818cf8',
    tags: ['GPT-4o', 'Claude', 'LangChain'],
    count: '40+ Systems',
    features: [
      'Custom LLM Integration (OpenAI GPT-4o, Claude)',
      'Intelligent Chatbots & Conversational AI',
      'Automated Workflow Triggers & Webhooks',
      'Custom Fine-Tuning & Model Evaluation',
      'Enterprise Security & Guardrails',
    ],
    span: 'col-2-3 row-1-2',
  },
  {
    id: 2, icon: BrainCircuit, title: 'Agentic AI & RAG',
    desc: 'Multi-agent systems and retrieval-augmented generation that interact with your enterprise data.',
    accent: '#a78bfa',
    tags: ['RAG', 'MCP', 'Vector DB'],
    count: '25+ Deployed',
    features: [
      'Autonomous Multi-Agent Swarms',
      'RAG on Enterprise Data',
      'MCP Server & Tool Development',
      'Vector Database Architecture',
      'Context-Aware AI Assistants',
    ],
    span: 'col-3-4 row-1-3',
  },
  {
    id: 3, icon: Layout, title: 'UI/UX Design',
    desc: 'Research-driven, accessible interfaces with Figma design systems and interactive prototypes.',
    accent: '#38bdf8',
    tags: ['Figma', 'Design System', 'WCAG'],
    count: '50+ UI Systems',
    features: [
      'Figma Component Design Systems',
      'User Journey Mapping',
      'High-Fidelity Prototypes',
      'WCAG 2.1 AA Accessibility',
      'Design-to-Code Handoff',
    ],
    span: 'col-1-2 row-2-3',
  },
  {
    id: 4, icon: Box, title: '3D Web Experiences',
    desc: 'Immersive Three.js and React Three Fiber 3D scenes, shaders, and Blender-optimized assets.',
    accent: '#f59e0b',
    tags: ['Three.js', 'WebGL', 'GLSL'],
    count: '30+ Scenes',
    features: [
      'Three.js & React Three Fiber Viewports',
      'Custom GLSL Shader Effects',
      'Blender 3D Model Optimization',
      'Scroll-Triggered GSAP Timelines',
      'WebGL Fallbacks & Touch Optimization',
    ],
    span: 'col-2-3 row-2-3',
  },
  {
    id: 5, icon: Cloud, title: 'Cloud & DevOps',
    desc: 'Cloud-native infrastructure, CI/CD pipelines, Docker, and 24/7 monitoring.',
    accent: '#06b6d4',
    tags: ['AWS', 'Docker', 'CI/CD'],
    count: '25+ Migrations',
    features: [
      'Multi-Cloud Deployment (AWS, GCP, Vercel)',
      'Docker & Kubernetes Orchestration',
      'GitHub Actions CI/CD',
      'Infrastructure as Code (Terraform)',
      '24/7 Monitoring & Auto-Scaling',
    ],
    span: 'col-1-2 row-3-4',
  },
  {
    id: 6, icon: Workflow, title: 'Business Automation',
    desc: 'n8n, Make, and Zapier workflows that eliminate manual tasks and connect your entire stack.',
    accent: '#4ade80',
    tags: ['n8n', 'Make', 'Zapier'],
    count: '60+ Workflows',
    features: [
      'n8n, Make & Zapier Pipelines',
      'Automated Lead Qualification',
      'E-Commerce Order Automation',
      'Automated Reporting & Invoicing',
      'Custom Webhooks & Scripting',
    ],
    span: 'col-2-3 row-3-4',
  },
  {
    id: 7, icon: TrendingUp, title: 'Maintenance & Growth',
    desc: 'Ongoing support, security updates, technical SEO, and performance optimization.',
    accent: '#fb923c',
    tags: ['SEO', 'Security', 'SLA'],
    count: '40+ Retainers',
    features: [
      '24/7 Server Health & Uptime Monitoring',
      'Security Patches & Vulnerability Scans',
      'Technical SEO & CRO',
      'Monthly Feature Iterations',
      'Priority SLA Support',
    ],
    span: 'col-3-4 row-3-4',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section
      id="services"
      className="section-padding"
      style={{ position: 'relative', zIndex: 1, background: 'var(--bg-primary)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Sparkles size={13} />
            <span>Our Services</span>
          </div>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>
            Meet our capabilities.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
            Full-spectrum digital engineering — from pixel-perfect design to autonomous AI.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '22rem',
            gap: '16px',
          }}
          className="services-bento"
        >
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bento-card"
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveService(srv)}
              >
                {/* Card Content */}
                <div
                  className="card-content"
                  style={{
                    padding: '28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div className="feature-icon" style={{ marginBottom: '16px', color: srv.accent, borderColor: `${srv.accent}30`, background: `${srv.accent}12` }}>
                      <Icon size={22} />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        marginBottom: '8px',
                      }}
                    >
                      {srv.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {srv.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.74rem',
                          padding: '3px 10px',
                          borderRadius: '20px',
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--text-dim)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover reveal */}
                <div className="card-hover-reveal" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.95), transparent)' }}>
                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--text-muted)',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      transition: 'color 0.2s',
                    }}
                    onClick={(e) => { e.stopPropagation(); setActiveService(srv); }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {activeService && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setActiveService(null)}
        >
          <div
            style={{
              background: 'rgba(15,23,42,0.96)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '580px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveService(null)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'rgba(255,255,255,0.06)', border: 'none',
                borderRadius: '50%', width: '34px', height: '34px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--text-muted)',
              }}
            >
              <X size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: `${activeService.accent}18`,
                  border: `1px solid ${activeService.accent}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: activeService.accent,
                }}
              >
                {React.createElement(activeService.icon, { size: 26 })}
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: activeService.accent, display: 'block', marginBottom: '2px' }}>
                  {activeService.count}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {activeService.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
              {activeService.desc}
            </p>

            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '12px' }}>
              Key Deliverables:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {activeService.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={16} color={activeService.accent} style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setActiveService(null)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '50px', textDecoration: 'none',
                background: `${activeService.accent}20`,
                border: `1px solid ${activeService.accent}40`,
                color: 'var(--text-main)', fontWeight: 600, fontSize: '0.95rem',
                transition: 'all 0.2s ease',
              }}
            >
              Start this project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        .services-bento { grid-auto-rows: 22rem; }
        @media (max-width: 900px) {
          .services-bento { grid-template-columns: 1fr !important; grid-auto-rows: auto !important; }
          .bento-card { min-height: 260px; }
        }
        @media (min-width: 901px) and (max-width: 1200px) {
          .services-bento { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
