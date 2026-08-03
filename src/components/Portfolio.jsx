import React, { useState } from 'react';
import { Briefcase, Eye, Sparkles, ArrowRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

export default function Portfolio() {
  const [serviceFilter, setServiceFilter] = useState('All');
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
      color: '#8b5cf6',
      afterBg: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
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
      color: '#f59e0b',
      afterBg: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
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
      color: '#06b6d4',
      afterBg: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
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
      color: '#ec4899',
      afterBg: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
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
      color: '#3b82f6',
      afterBg: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      challenge: 'Cluttered analytics dashboard had a 45% churn rate and 4s+ initial load time.',
      solution: 'Engineered a modular dashboard with WebGL charts and Lighthouse 99 performance.',
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
      color: '#f59e0b',
      afterBg: 'linear-gradient(135deg, #f59e0b 0%, #10b981 100%)',
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
  ];

  const categories = ['All', 'AI Solutions', '3D Web', 'Automation', 'Agentic AI', 'UI/UX', 'Branding'];

  const filteredProjects =
    serviceFilter === 'All' ? projects : projects.filter((p) => p.category === serviceFilter);

  return (
    <section id="portfolio" className="section-padding" style={{ position: 'relative', zIndex: 1, background: '#fafafa' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Briefcase size={14} />
            <span>RECENT WORK</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Selected <span className="gradient-text-purple">Case Studies</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            A collection of high-impact digital experiences, WebGL applications, and AI platforms built for scaling enterprises.
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setServiceFilter(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: serviceFilter === cat ? 700 : 500,
                cursor: 'pointer',
                background: serviceFilter === cat ? 'var(--accent-purple)' : '#ffffff',
                borderColor: serviceFilter === cat ? 'var(--accent-purple)' : 'rgba(0,0,0,0.08)',
                color: serviceFilter === cat ? '#ffffff' : '#1a1a1a',
                border: '1px solid',
                boxShadow: serviceFilter === cat ? '0 4px 15px rgba(139, 92, 246, 0.3)' : '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'var(--transition-bounce)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Desktop Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '32px',
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
                background: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              }}
            >
              {/* Thumbnail 16:9 Banner */}
              <div
                style={{
                  height: '200px',
                  background: project.afterBg,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1a1a1a',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div>
                  <Sparkles size={36} color="#ffffff" style={{ marginBottom: '10px' }} />
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>{project.client}</div>
                </div>
              </div>

              {/* Card Details */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px', color: '#1a1a1a' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                    {project.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          padding: '4px 10px',
                          borderRadius: '14px',
                          background: '#f4f4f6',
                          color: '#666',
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--accent-purple)',
                  }}
                >
                  <span>View Case Study</span>
                  <ArrowRight size={16} />
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
