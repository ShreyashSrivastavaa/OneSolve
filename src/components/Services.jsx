import React, { useState } from 'react';
import {
  Monitor,
  Bot,
  BrainCircuit,
  LineChart,
  Database,
  FileSearch,
  Layout,
  Cloud,
  Cpu,
  Workflow,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function Services({ selectedServiceId = 0, setSelectedServiceId }) {
  const [activeGroup, setActiveGroup] = useState('all');
  const activeServiceId = selectedServiceId;
  const setActiveServiceId = (id) => {
    if (setSelectedServiceId) setSelectedServiceId(id);
  };

  const groups = [
    { id: 'all', label: 'All 11 Services' },
    { id: 'dev', label: 'Development & APIs' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'data', label: 'Data & Vision AI' },
    { id: 'design_growth', label: 'Design & Growth' },
  ];

  const services = [
    // 1. Web Design & Development
    {
      id: 0,
      group: 'dev',
      groupLabel: 'DEVELOPMENT & APIS',
      title: 'Web Design & Development',
      icon: Monitor,
      accent: '#00d9ff',
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
      tags: ['React', 'Next.js', 'Vite', 'Tailwind', 'TypeScript', 'Node.js'],
      projectCount: '45+ Delivered',
    },
    // 2. AI Solutions & Automation
    {
      id: 1,
      group: 'ai',
      groupLabel: 'AI & MACHINE LEARNING',
      title: 'AI Solutions & Automation',
      icon: Bot,
      accent: '#ff006e',
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
    // 3. Agentic AI, RAG & MCP Development
    {
      id: 2,
      group: 'ai',
      groupLabel: 'AI & MACHINE LEARNING',
      title: 'Agentic AI, RAG & MCP Development',
      icon: BrainCircuit,
      accent: '#9d4edd',
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
      tags: ['RAG', 'MCP', 'LangChain', 'LlamaIndex', 'Vector DB', 'Python'],
      projectCount: '25+ Enterprise Systems',
    },
    // 4. Predictive Analytics & Machine Learning
    {
      id: 3,
      group: 'ai',
      groupLabel: 'AI & MACHINE LEARNING',
      title: 'Predictive Analytics & Machine Learning',
      icon: LineChart,
      accent: '#ffb703',
      tagline: 'Customer churn prediction, demand forecasting, recommendation engines, and dynamic pricing.',
      description:
        'Transform historical business data into actionable forward-looking intelligence with tailored statistical models and machine learning classifiers.',
      features: [
        'Customer Churn Prediction & Retention Analytics',
        'Inventory Demand & Time-Series Sales Forecasting',
        'Personalized Recommendation & Cross-Sell Engines',
        'Dynamic Pricing Models & Market Elasticity Scoring',
        'Supervised & Unsupervised Machine Learning Models',
      ],
      tags: ['Scikit-Learn', 'PyTorch', 'Time-Series', 'Predictive ML', 'Python'],
      projectCount: '20+ Models',
    },
    // 5. Data Engineering & Interactive Dashboards
    {
      id: 4,
      group: 'data',
      groupLabel: 'DATA & VISION AI',
      title: 'Data Engineering & Interactive Dashboards',
      icon: Database,
      accent: '#38bdf8',
      tagline: 'Automated ETL pipelines, data warehousing, custom Streamlit/Dash apps, and BI reporting.',
      description:
        'Architect robust data pipelines that clean, transform, and feed real-time analytics into custom interactive dashboards for C-suite decision making.',
      features: [
        'Automated ETL & ELT Data Pipeline Architecture',
        'Cloud Data Warehousing (BigQuery, Snowflake, PostgreSQL)',
        'Custom Interactive Dashboards (Streamlit, Dash, React)',
        'Executive BI Reporting & Real-Time Metrics Streaming',
        'Data Cleaning, Normalization & Quality Assurance',
      ],
      tags: ['PostgreSQL', 'BigQuery', 'Streamlit', 'Python', 'ETL', 'React Charts'],
      projectCount: '30+ Pipelines',
    },
    // 6. Intelligent Document & Vision AI
    {
      id: 5,
      group: 'data',
      groupLabel: 'DATA & VISION AI',
      title: 'Intelligent Document & Vision AI',
      icon: FileSearch,
      accent: '#ec4899',
      tagline: 'Automated document parsing (invoices/PDFs), OCR workflows, object detection, and visual analytics.',
      description:
        'Extract data accurately from complex unstructured PDFs, forms, invoices, and video streams using computer vision and multimodal vision models.',
      features: [
        'Multimodal Vision AI Document Parsing (Invoices, Receipts, Contracts)',
        'High-Accuracy OCR & Table Extraction Pipelines',
        'Real-Time Object Detection & Image Classification',
        'Unstructured PDF Data Structuring & Database Sync',
        'Custom Computer Vision Model Training (YOLO, OpenCV)',
      ],
      tags: ['Vision AI', 'OCR', 'YOLO', 'PDF Parsing', 'OpenCV', 'Python'],
      projectCount: '35+ OCR Systems',
    },
    // 7. UI/UX Design
    {
      id: 6,
      group: 'design_growth',
      groupLabel: 'DESIGN & GROWTH',
      title: 'UI/UX Design',
      icon: Layout,
      accent: '#f43f5e',
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
      tags: ['Figma', 'UI/UX', 'Design System', 'Wireframing', 'Prototyping'],
      projectCount: '50+ UI Systems',
    },
    // 8. Cloud & DevOps
    {
      id: 7,
      group: 'dev',
      groupLabel: 'DEVELOPMENT & APIS',
      title: 'Cloud & DevOps',
      icon: Cloud,
      accent: '#3b82f6',
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
      tags: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      projectCount: '25+ Migrations',
    },
    // 9. API Development & System Integration
    {
      id: 8,
      group: 'dev',
      groupLabel: 'DEVELOPMENT & APIS',
      title: 'API Development & System Integration',
      icon: Cpu,
      accent: '#6366f1',
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
      tags: ['GraphQL', 'REST', 'Node.js', 'Python', 'WebSockets', 'OAuth2'],
      projectCount: '30+ Integrated',
    },
    // 10. Business Process Automation
    {
      id: 9,
      group: 'data',
      groupLabel: 'DATA & VISION AI',
      title: 'Business Process Automation',
      icon: Workflow,
      accent: '#a855f7',
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
      tags: ['n8n', 'Make', 'Zapier', 'Webhooks', 'CRM Auto', 'Python'],
      projectCount: '60+ Workflows',
    },
    // 11. Maintenance & Growth
    {
      id: 10,
      group: 'design_growth',
      groupLabel: 'DESIGN & GROWTH',
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
      tags: ['SEO', 'Uptime', 'Security', 'CRO', 'SLA Support', 'Analytics'],
      projectCount: '40+ Retainer Clients',
    },
  ];

  const filteredServices =
    activeGroup === 'all' ? services : services.filter((s) => s.group === activeGroup);

  const current = services.find((s) => s.id === activeServiceId) || services[0];
  const IconComp = current.icon;

  return (
    <section
      id="services"
      className="section-padding"
      style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 20, 34, 0.6)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Layers size={14} />
            <span>OUR 11 CORE DISCIPLINES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Comprehensive <span className="gradient-text-cyan">Tech, Data & AI</span> Solutions
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            From high-converting web applications and predictive ML models to autonomous AI agents, document vision AI, and cloud automation—we build enterprise digital systems.
          </p>
        </div>

        {/* Group Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {groups.map((grp) => (
            <button
              key={grp.id}
              onClick={() => {
                setActiveGroup(grp.id);
                const firstMatch = services.find((s) => grp.id === 'all' || s.group === grp.id);
                if (firstMatch) setActiveServiceId(firstMatch.id);
              }}
              style={{
                padding: '10px 22px',
                borderRadius: '30px',
                border:
                  activeGroup === grp.id
                    ? '1px solid var(--accent-cyan)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                background:
                  activeGroup === grp.id
                    ? 'rgba(0, 217, 255, 0.15)'
                    : 'rgba(255, 255, 255, 0.03)',
                color: activeGroup === grp.id ? 'var(--accent-cyan)' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
            >
              {grp.label}
            </button>
          ))}
        </div>

        {/* Interactive Layout: Left List + Right Detail Card */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px', alignItems: 'start' }}>
          {/* Service Selector Tabs */}
          <div style={{ gridColumn: 'span 5' }} className="service-tabs-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredServices.map((srv) => {
                const Icon = srv.icon;
                const isActive = srv.id === activeServiceId;

                return (
                  <div
                    key={srv.id}
                    onClick={() => setActiveServiceId(srv.id)}
                    className="glass-card"
                    style={{
                      padding: '18px 20px',
                      cursor: 'pointer',
                      borderColor: isActive ? srv.accent : 'rgba(255, 255, 255, 0.08)',
                      background: isActive ? 'rgba(28, 37, 60, 0.95)' : 'var(--bg-card)',
                      boxShadow: isActive ? `0 0 25px ${srv.accent}25` : 'none',
                      transform: isActive ? 'translateX(6px)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: `${srv.accent}15`,
                          border: `1px solid ${srv.accent}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: srv.accent,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h3
                            style={{
                              fontSize: '1.02rem',
                              fontWeight: 700,
                              color: isActive ? '#fff' : 'var(--text-main)',
                            }}
                          >
                            {srv.title}
                          </h3>
                          <span
                            style={{
                              fontSize: '0.68rem',
                              color: srv.accent,
                              fontWeight: 600,
                              background: `${srv.accent}15`,
                              padding: '2px 8px',
                              borderRadius: '10px',
                            }}
                          >
                            {srv.projectCount}
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-muted)',
                            marginTop: '3px',
                            lineHeight: 1.4,
                          }}
                        >
                          {srv.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Active Service Detail View */}
          <div style={{ gridColumn: 'span 7' }} className="service-detail-col">
            <div
              className="glass-card"
              style={{
                padding: '40px',
                position: 'relative',
                overflow: 'hidden',
                borderColor: current.accent,
                boxShadow: `0 10px 40px ${current.accent}20`,
              }}
            >
              {/* Background Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-80px',
                  right: '-80px',
                  width: '250px',
                  height: '250px',
                  background: current.accent,
                  opacity: 0.15,
                  filter: 'blur(60px)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div
                  style={{
                    padding: '14px',
                    borderRadius: '16px',
                    background: `${current.accent}20`,
                    color: current.accent,
                    border: `1px solid ${current.accent}50`,
                  }}
                >
                  <IconComp size={32} />
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', color: current.accent, fontWeight: 700, letterSpacing: '0.08em' }}>
                    {current.groupLabel}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{current.title}</h3>
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.7 }}>
                {current.description}
              </p>

              {/* Technologies Tag Badges */}
              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                  }}
                >
                  Core Tech Stack:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-main)',
                      }}
                    >
                      ⚡ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                Key Capabilities & Deliverables:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {current.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={18} color={current.accent} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <a
                  href="#contact"
                  className="btn-primary"
                  style={{ background: current.accent, color: '#000', padding: '14px 28px', fontSize: '0.95rem' }}
                >
                  <span>Inquire About {current.title}</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#portfolio"
                  className="btn-secondary"
                  style={{ padding: '14px 24px', fontSize: '0.9rem' }}
                >
                  <span>See Case Studies</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .service-tabs-col { grid-column: span 12 !important; }
          .service-detail-col { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
