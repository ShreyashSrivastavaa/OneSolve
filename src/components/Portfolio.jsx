import React, { useState } from 'react';
import { Briefcase, Eye, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

export default function Portfolio() {
  const [serviceFilter, setServiceFilter] = useState('All');
  const [industryFilter, setIndustryFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Chatbot & Knowledge Platform',
      subtitle: 'SaaS Startup Conversational Engine & Multi-LLM RAG Pipeline',
      category: 'AI Solutions',
      industry: 'SaaS',
      projectType: 'AI Agent',
      tags: ['AI Solutions', 'Web Design', 'API Dev', 'Claude 3.5', 'Python'],
      client: 'Synthetix AI',
      color: '#ff006e',
      afterBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      challenge: 'Enterprise users struggled with slow customer ticket routing and 45-minute response delays.',
      solution: 'Built an autonomous AI Agent powered by Claude 3.5 Sonnet RAG with live HubSpot & Slack dispatch.',
      metrics: [
        { val: '85%', label: 'Ticket Deflection' },
        { val: '< 2s', label: 'Response Time' },
        { val: '+300%', label: 'User Engagement' },
      ],
      quote: {
        text: 'OneSolve transformed our support team with autonomous AI workflows that saved us hundreds of support hours.',
        author: 'Alex Vance',
        role: 'VP of Product, Synthetix AI',
      },
    },
    {
      id: 2,
      title: '3D Interactive Product Visualizer',
      subtitle: 'Spatial WebGL Configurator for High-End E-Commerce Flagship',
      category: '3D Web',
      industry: 'E-Commerce',
      projectType: '3D Experience',
      tags: ['3D Web', 'Web Design', 'Three.js', 'WebGL', 'React'],
      client: 'AURA Couture',
      color: '#00d9ff',
      afterBg: 'linear-gradient(135deg, #be185d 0%, #831843 100%)',
      challenge: 'Static product images had high return rates and low customization buyer conversions.',
      solution: 'Developed an interactive 3D WebGL product configurator allowing 360-degree rotation and instant material swaps.',
      metrics: [
        { val: '+240%', label: 'Conversion Boost' },
        { val: '3.5x', label: 'ROI Month 1' },
        { val: '60 FPS', label: 'Frame Rate' },
      ],
      quote: {
        text: 'The 3D WebGL viewer gave our buyers absolute confidence in customization. Launch sales exploded!',
        author: 'Elena Rostova',
        role: 'Founder, AURA Couture',
      },
    },
    {
      id: 3,
      title: 'Enterprise Automation Workflow Suite',
      subtitle: 'Self-Hosted n8n Engine Syncing CRM, Billing & Operations',
      category: 'Automation',
      industry: 'Enterprise',
      projectType: 'Automation',
      tags: ['Automation', 'Cloud & DevOps', 'n8n', 'Webhooks', 'PostgreSQL'],
      client: 'Orion Global',
      color: '#a855f7',
      afterBg: 'linear-gradient(135deg, #7e22ce 0%, #581c87 100%)',
      challenge: 'Manual data entry across 6 SaaS portals wasted 30+ team hours weekly with high error rates.',
      solution: 'Architected 25+ resilient n8n automated workflow pipelines with automated exception logging.',
      metrics: [
        { val: '30 Hrs', label: 'Saved / Week' },
        { val: '99.9%', label: 'Execution Accuracy' },
        { val: '$120k', label: 'Annual Savings' },
      ],
      quote: {
        text: 'OneSolve eliminated data entry bottlenecks completely across our entire regional operations.',
        author: 'Dr. Marcus Sterling',
        role: 'CTO, Orion Dynamics',
      },
    },
    {
      id: 4,
      title: 'Agentic AI & MCP Knowledge Graph',
      subtitle: 'Multi-Agent Autonomous System Querying Enterprise Data',
      category: 'Agentic AI',
      industry: 'Tech',
      projectType: 'AI Agent',
      tags: ['Agentic AI', 'RAG', 'MCP', 'LangChain', 'Vector DB'],
      client: 'Apex Tech Labs',
      color: '#9d4edd',
      afterBg: 'linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)',
      challenge: 'Engineers spent hours searching fragmented internal documentation and legacy APIs.',
      solution: 'Deployed an Agentic AI knowledge network with Model Context Protocol (MCP) server integration.',
      metrics: [
        { val: '15x', label: 'Faster Search' },
        { val: '100%', label: 'Internal Security' },
        { val: '5,000+', label: 'Daily Queries' },
      ],
      quote: {
        text: 'Our dev team queries our internal codebase in natural language. Game-changing developer productivity!',
        author: 'Sarah Jenkins',
        role: 'Head of Engineering, Apex',
      },
    },
    {
      id: 5,
      title: 'SaaS Analytics Dashboard Redesign',
      subtitle: 'High-Performance UI/UX & React Application Platform',
      category: 'UI/UX',
      industry: 'SaaS',
      projectType: 'App',
      tags: ['UI/UX', 'Web Dev', 'Cloud', 'React', 'Figma'],
      client: 'Synthetix Cloud',
      color: '#38bdf8',
      afterBg: 'linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%)',
      challenge: 'Cluttered analytics dashboard had a 45% churn rate and 4s+ initial load time.',
      solution: 'Engineered a modular dark-mode dashboard with WebGL charts and Lighthouse 99 performance.',
      metrics: [
        { val: '0.4s', label: 'Load Latency' },
        { val: '45% -> 8%', label: 'Churn Reduction' },
        { val: '99.8%', label: 'User Rating' },
      ],
      quote: {
        text: 'The dashboard feels like butter. Load times dropped under half a second!',
        author: 'Michael Chang',
        role: 'Chief Product Officer',
      },
    },
    {
      id: 6,
      title: 'Complete Brand Identity & Launch',
      subtitle: 'Vector Logo System, Style Playbook & Campaign Portal',
      category: 'Branding',
      industry: 'Startup',
      projectType: 'Website',
      tags: ['Brand Identity', 'Web Design', 'Figma', 'Marketing'],
      client: 'NovaPay Startup',
      color: '#ffb703',
      afterBg: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
      challenge: 'Early-stage fintech startup needed brand authority to compete for Seed funding.',
      solution: 'Designed comprehensive brand visual system, pitch deck assets, and responsive marketing web portal.',
      metrics: [
        { val: '$4.2M', label: 'Seed Fund Raised' },
        { val: '100k+', label: 'Waitlist Signups' },
        { val: '12 Awards', label: 'Design Badges' },
      ],
      quote: {
        text: 'Investors specifically highlighted our slick branding and portal quality during our pitch rounds.',
        author: 'Rachel Adams',
        role: 'Co-Founder, NovaPay',
      },
    },
    {
      id: 7,
      title: 'DevOps Infrastructure Migration',
      subtitle: 'AWS Cloud-Native Docker & Kubernetes Zero-Downtime Pipeline',
      category: 'Cloud',
      industry: 'Enterprise',
      projectType: 'App',
      tags: ['Cloud & DevOps', 'Maintenance', 'AWS', 'Kubernetes', 'Docker'],
      client: 'Vanguard Systems',
      color: '#10b981',
      afterBg: 'linear-gradient(135deg, #047857 0%, #064e3b 100%)',
      challenge: 'Legacy server setup crashed under traffic spikes with high monthly hosting overhead.',
      solution: 'Migrated infrastructure to containerized AWS Kubernetes clusters with automated CI/CD.',
      metrics: [
        { val: '99.99%', label: 'Uptime Achieved' },
        { val: '40%', label: 'Hosting Cost Cut' },
        { val: '0 Sec', label: 'Deployment Downtime' },
      ],
      quote: {
        text: 'Our platform handled Black Friday peak traffic without a single hiccup or slowdown.',
        author: 'David Chen',
        role: 'Director of Ops, Vanguard',
      },
    },
    {
      id: 8,
      title: 'Intelligent Document Processing',
      subtitle: 'AI Pipeline Parsing Invoices & Unstructured PDFs',
      category: 'AI Solutions',
      industry: 'AI',
      projectType: 'AI Agent',
      tags: ['RAG', 'AI Solutions', 'Python', 'OCR', 'FastAPI'],
      client: 'DocuMind AI',
      color: '#ec4899',
      afterBg: 'linear-gradient(135deg, #be185d 0%, #831843 100%)',
      challenge: 'Accounting department manually transcribed 2,000+ PDF invoices monthly.',
      solution: 'Built an OCR + LLM document extraction pipeline that auto-populates financial databases.',
      metrics: [
        { val: '99.4%', label: 'Extraction Precision' },
        { val: '10x', label: 'Faster Processing' },
        { val: '2,000+', label: 'PDFs / Hour' },
      ],
      quote: {
        text: 'Processing thousands of complex multi-page invoices now takes seconds instead of days.',
        author: 'James Miller',
        role: 'COO, DocuMind',
      },
    },
    {
      id: 9,
      title: 'Fintech Mobile Web App & API',
      subtitle: 'Real-Time Crypto & Stock Trading Interface',
      category: 'Web Dev',
      industry: 'Fintech',
      projectType: 'App',
      tags: ['Web Dev', 'API Dev', 'UI/UX', 'WebSockets', 'React'],
      client: 'KryptoX Exchange',
      color: '#6366f1',
      afterBg: 'linear-gradient(135deg, #4338ca 0%, #312e81 100%)',
      challenge: 'High-frequency traders required sub-50ms WebSocket order book updates on mobile devices.',
      solution: 'Built a custom React web app leveraging low-overhead WebSockets and state management.',
      metrics: [
        { val: '25 ms', label: 'Order Execution' },
        { val: '250k+', label: 'Active Traders' },
        { val: '$50M+', label: 'Daily Volume' },
      ],
      quote: {
        text: 'The WebSocket UI responsiveness is second to none in the crypto exchange space.',
        author: 'KAI_ZERO',
        role: 'Founder, KryptoX',
      },
    },
    {
      id: 10,
      title: '3D Interactive Campaign Portal',
      subtitle: 'Immersive Canvas Experience for Global Brand Launch',
      category: '3D Web',
      industry: 'Marketing',
      projectType: '3D Experience',
      tags: ['3D Web', 'WebGL', 'GSAP', 'Three.js', 'Shaders'],
      client: 'Apex Global Campaign',
      color: '#00d9ff',
      afterBg: 'linear-gradient(135deg, #0e7490 0%, #155e75 100%)',
      challenge: 'Wanted a viral marketing website with real-time 3D particle interactivity for a product drop.',
      solution: 'Engineered a WebGL particle canvas that morphs on cursor hover and scroll trigger.',
      metrics: [
        { val: '1.2M', label: 'Unique Visitors' },
        { val: '4:15 Min', label: 'Avg Time on Site' },
        { val: '#1 Trend', label: 'Viral Campaign' },
      ],
      quote: {
        text: 'The 3D interactive particle hero was shared across tech forums and generated huge buzz!',
        author: 'Sophia Martinez',
        role: 'Creative Lead, Apex Marketing',
      },
    },
  ];

  const serviceCategories = ['All', 'AI Solutions', '3D Web', 'Automation', 'Agentic AI', 'UI/UX', 'Branding', 'Cloud', 'Web Dev'];
  const industries = ['All', 'SaaS', 'E-Commerce', 'Enterprise', 'Tech', 'Startup', 'Fintech', 'AI'];

  const filteredProjects = projects.filter((p) => {
    const matchService = serviceFilter === 'All' || p.category === serviceFilter;
    const matchIndustry = industryFilter === 'All' || p.industry === industryFilter;
    return matchService && matchIndustry;
  });

  return (
    <section id="portfolio" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Briefcase size={14} />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Transformative <span className="gradient-text-gold">Case Studies</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Explore 10 enterprise projects demonstrating our expertise in AI Agents, 3D WebGL experiences, full-stack web platforms, and automated workflow suites.
          </p>
        </div>

        {/* Multi-Filter Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {/* Service Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginRight: '8px' }}>
              Service:
            </span>
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setServiceFilter(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: serviceFilter === cat ? 700 : 500,
                  cursor: 'pointer',
                  background: serviceFilter === cat ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.04)',
                  borderColor: serviceFilter === cat ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.08)',
                  color: serviceFilter === cat ? '#000' : 'var(--text-muted)',
                  border: '1px solid',
                  transition: 'var(--transition-bounce)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Industry Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginRight: '8px' }}>
              Industry:
            </span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustryFilter(ind)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: industryFilter === ind ? 700 : 500,
                  cursor: 'pointer',
                  background: industryFilter === ind ? 'rgba(255, 0, 110, 0.2)' : 'transparent',
                  borderColor: industryFilter === ind ? 'var(--accent-pink)' : 'rgba(255, 255, 255, 0.06)',
                  color: industryFilter === ind ? 'var(--accent-pink)' : 'var(--text-dim)',
                  border: '1px solid',
                  transition: 'var(--transition-smooth)',
                }}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'var(--transition-smooth)',
              }}
            >
              {/* Thumbnail Header Box */}
              <div
                style={{
                  height: '210px',
                  background: project.afterBg,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', gap: '6px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '16px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '16px',
                      background: 'rgba(255, 0, 110, 0.4)',
                      color: '#fff',
                    }}
                  >
                    {project.industry}
                  </span>
                </div>

                <div>
                  <Sparkles size={36} color={project.color} style={{ marginBottom: '10px' }} />
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>{project.client}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>
                    {project.projectType}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                    {project.subtitle}
                  </p>

                  {/* Result Metrics Pill Bar */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div
                        key={idx}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '10px',
                          background: 'rgba(0, 217, 255, 0.08)',
                          border: '1px solid rgba(0, 217, 255, 0.2)',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{m.val}</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.7rem',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  <Eye size={16} />
                  <span>View Full Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
