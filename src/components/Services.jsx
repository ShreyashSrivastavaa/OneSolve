import React, { useState } from 'react';
import {
  Monitor,
  Bot,
  BrainCircuit,
  Layout,
  Box,
  Sparkles,
  Cloud,
  Cpu,
  Workflow,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Layers,
  X,
} from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 0,
      title: 'Web Design & Development',
      icon: Monitor,
      accent: '#3b82f6',
      tagline: 'Modern websites, web applications, SaaS platforms, and e-commerce flagships.',
      description:
        'We engineer bespoke web applications and platforms that combine stunning aesthetic standards with rock-solid performance, SEO architecture, and interactive micro-animations.',
      features: [
        'Custom React, Next.js & Vite Web Applications',
        'SaaS Platforms & Enterprise E-Commerce Storefronts',
        'Lighthouse 95+ Core Web Vitals Performance Tuning',
        'Mobile-First Responsive Layouts & Touch Optimization',
        'Headless CMS & API Integration (Sanity, Contentful)',
      ],
      tags: ['React', 'Next.js', 'Vite', 'Tailwind', 'TypeScript'],
      projectCount: '45+ Delivered',
    },
    {
      id: 1,
      title: 'AI Solutions & Automation',
      icon: Bot,
      accent: '#8b5cf6',
      tagline: 'Custom AI applications, chatbots, intelligent agents, and workflow automation.',
      description:
        'Harness cutting-edge large language models and predictive AI to automate complex business workflows and deliver hyper-personalized user experiences.',
      features: [
        'Custom LLM Integration (OpenAI GPT-4o, Claude 3.5, LLaMA)',
        'Intelligent Chatbots & Conversational Assistants',
        'Automated Workflow Triggers & Webhook Dispatches',
        'Custom Fine-Tuning & Model Evaluation Pipelines',
        'Enterprise Security & Guardrails Protocol',
      ],
      tags: ['OpenAI', 'Claude 3.5', 'Python', 'LangChain', 'Fine-Tuning'],
      projectCount: '40+ Deployed',
    },
    {
      id: 2,
      title: 'Agentic AI, RAG & MCP',
      icon: BrainCircuit,
      accent: '#ec4899',
      tagline: 'Autonomous AI agents, RAG knowledge retrieval, MCP tools, and enterprise integrations.',
      description:
        'Build multi-agent autonomous systems powered by Retrieval-Augmented Generation (RAG) and Model Context Protocol (MCP) to interact directly with internal enterprise databases.',
      features: [
        'Autonomous Multi-Agent Swarms & Decision Workflows',
        'Retrieval-Augmented Generation (RAG) on Enterprise Data',
        'MCP (Model Context Protocol) Server & Tool Development',
        'Vector Database Architecture (Pinecone, Qdrant, Chroma)',
        'Context-Aware AI Knowledge Assistants & Search',
      ],
      tags: ['RAG', 'MCP', 'LangChain', 'LlamaIndex', 'Vector DB'],
      projectCount: '25+ Enterprise Systems',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      icon: Layout,
      accent: '#06b6d4',
      tagline: 'User research, wireframes, design systems, and interactive prototypes.',
      description:
        'We design intuitive, accessible user interfaces backed by user research and rapid prototyping, ensuring your users enjoy effortless interaction flow.',
      features: [
        'Figma Component Design Systems & Design Tokens',
        'User Journey Mapping & Information Architecture',
        'High-Fidelity Clickable Interactive Prototypes',
        'Accessibility (WCAG 2.1 AA) Compliance Audits',
        'Design-to-Code Handoff & Developer Specs',
      ],
      tags: ['Figma', 'UI/UX', 'Design System', 'Wireframing'],
      projectCount: '50+ UI Systems',
    },
    {
      id: 4,
      title: '3D Web Experiences',
      icon: Box,
      accent: '#f59e0b',
      tagline: 'Interactive 3D WebGL scenes, product configurators, and spatial canvas elements.',
      description:
        'Engage visitors with immersive, real-time 3D canvas viewports powered by Three.js, React Three Fiber, GLSL shaders, and Blender 3D assets.',
      features: [
        'Three.js & React Three Fiber 3D Viewports',
        'Custom GLSL Fragment & Vertex Shader Effects',
        'Low-Poly Blender 3D Model Optimization',
        'Scroll-Triggered GSAP 3D Camera Timelines',
        'WebGL Fallbacks & Touch Optimization',
      ],
      tags: ['Three.js', 'R3F', 'Blender', 'WebGL', 'GLSL'],
      projectCount: '30+ 3D Scenes',
    },
    {
      id: 5,
      title: 'Brand Identity & Strategy',
      icon: Sparkles,
      accent: '#a855f7',
      tagline: 'Morphing geometric logos, brand guidelines, typography systems, and digital strategy.',
      description:
        'Forge an unmistakable visual identity that resonates across digital platforms, print touchpoints, and spatial media.',
      features: [
        'Visual Identity Systems & Brand Guidelines',
        'Custom Typography & Vector Logo Suite',
        'Digital Strategy & Market Positioning Scoping',
        'Social Media Kit & Motion Graphics Templates',
        'Brand Messaging & Verbal Voice Architecture',
      ],
      tags: ['Branding', 'Typography', 'Logo Design', 'Strategy'],
      projectCount: '35+ Brands',
    },
    {
      id: 6,
      title: 'Cloud & DevOps',
      icon: Cloud,
      accent: '#06b6d4',
      tagline: 'Deployment, CI/CD, Docker, cloud infrastructure, monitoring, and scaling.',
      description:
        'Cloud-native infrastructure configuration and DevOps pipelines that ensure maximum reliability, security, and effortless horizontal scaling.',
      features: [
        'Multi-Cloud Deployment (AWS, GCP, Vercel, Azure)',
        'Containerization & Kubernetes Orchestration (Docker)',
        'Automated CI/CD Pipelines (GitHub Actions)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        '24/7 Monitoring, Uptime Alerting & Auto-Scaling',
      ],
      tags: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
      projectCount: '25+ Migrations',
    },
    {
      id: 7,
      title: 'API Development & Integration',
      icon: Cpu,
      accent: '#8b5cf6',
      tagline: 'REST APIs, GraphQL, third-party integrations, payment gateways, and custom backend services.',
      description:
        'Connect disparate software systems seamlessly with robust, scalable API architectures and real-time data sync channels.',
      features: [
        'Custom RESTful & GraphQL API Architecture',
        'Payment Gateway Integrations (Stripe, PayPal, Square)',
        'Third-Party Service Sync (Salesforce, HubSpot, Slack)',
        'Real-Time WebSockets & Event-Driven Systems',
        'Enterprise Security & OAuth2 Authentication',
      ],
      tags: ['GraphQL', 'REST', 'Node.js', 'Python', 'OAuth2'],
      projectCount: '30+ Integrated',
    },
    {
      id: 8,
      title: 'Business Process Automation',
      icon: Workflow,
      accent: '#f59e0b',
      tagline: 'CRM automation, email workflows, internal tools, and automation using n8n, Make, and Zapier.',
      description:
        'Eliminate repetitive manual tasks by creating resilient visual workflow pipelines that connect CRMs, email engines, and databases automatically.',
      features: [
        'n8n, Make & Zapier Self-Hosted Automation Engines',
        'Automated Lead Qualification & CRM Sync (HubSpot, Salesforce)',
        'E-Commerce Order & Inventory Automation',
        'Automated Reporting & Financial Invoicing Workflows',
        'Custom Webhooks & Scripting Nodes',
      ],
      tags: ['n8n', 'Make', 'Zapier', 'Webhooks', 'Python'],
      projectCount: '60+ Workflows',
    },
    {
      id: 9,
      title: 'Maintenance & Growth',
      icon: TrendingUp,
      accent: '#10b981',
      tagline: 'Ongoing support, security updates, performance optimization, SEO, and feature enhancements.',
      description:
        'Keep your digital assets performing at peak speed with 24/7 uptime monitoring, security audits, technical SEO enhancements, and feature iterations.',
      features: [
        '24/7 Server Health & Uptime Monitoring',
        'Security Patches & Vulnerability Scans',
        'Technical SEO & Conversion Rate Optimization (CRO)',
        'Monthly Feature Iterations & Code Updates',
        'Priority SLA Support & Emergency Helpdesk',
      ],
      tags: ['SEO', 'Uptime', 'Security', 'CRO', 'SLA Support'],
      projectCount: '40+ Retainer Clients',
    },
  ];

  return (
    <section
      id="services"
      className="section-padding"
      style={{ position: 'relative', zIndex: 1, background: '#fafafa' }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Layers size={14} />
            <span>OUR DISCIPLINES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Our <span className="gradient-text-purple">Services</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            We deliver full-spectrum digital engineering capabilities focused on aesthetic elegance, high velocity, and scalable AI intelligence.
          </p>
        </div>

        {/* 2-Column Minimalist Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
          }}
        >
          {services.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                onClick={() => setActiveService(srv)}
                className="glass-card"
                style={{
                  padding: '36px',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                }}
              >
                {/* Top Accent Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: srv.accent,
                  }}
                />

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: `${srv.accent}12`,
                        border: `1px solid ${srv.accent}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: srv.accent,
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: srv.accent,
                        background: `${srv.accent}12`,
                        padding: '4px 12px',
                        borderRadius: '20px',
                      }}
                    >
                      {srv.projectCount}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '12px' }}>
                    {srv.title}
                  </h3>

                  <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {srv.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.78rem',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          background: '#f4f4f6',
                          color: '#666',
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: srv.accent,
                    }}
                  >
                    <span>Explore Discipline</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setActiveService(null)}
        >
          <div
            className="glass-card"
            style={{
              padding: '40px',
              maxWidth: '650px',
              width: '100%',
              borderRadius: '24px',
              background: '#ffffff',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} color="#1a1a1a" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '16px',
                  background: `${activeService.accent}15`,
                  color: activeService.accent,
                }}
              >
                {React.createElement(activeService.icon, { size: 32 })}
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: activeService.accent }}>
                  {activeService.projectCount}
                </span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a1a1a' }}>{activeService.title}</h3>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              {activeService.description}
            </p>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>
              Key Deliverables & Capabilities:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {activeService.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color={activeService.accent} />
                  <span style={{ fontSize: '0.92rem', color: '#1a1a1a' }}>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <a
                href="#contact"
                onClick={() => setActiveService(null)}
                className="btn-primary"
                style={{ background: activeService.accent, flex: 1, justifyContent: 'center' }}
              >
                Inquire Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
