import React, { useState } from 'react';
import { Briefcase, Eye, Sparkles, Filter, ExternalLink, ArrowRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Dashboard Redesign',
      subtitle: 'SaaS Platform Analytics Architecture & Real-Time Visualization',
      category: 'Web Design',
      tags: ['Web Design', 'UI/UX', 'React', 'Data Visuals'],
      client: 'Synthetix AI',
      color: '#00d9ff',
      beforeBg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      afterBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      challenge: 'The client had a cluttered analytics dashboard with high churn rate and 4s+ initial load latency.',
      solution: 'Engineered a sleek dark-mode dashboard with modular widget system, WebGL canvas charting, and 60fps micro-interactions.',
      metrics: [
        { val: '+240%', label: 'Conversion Boost' },
        { val: '0.4s', label: 'Load Latency' },
        { val: '99.8%', label: 'User Satisfaction' },
      ],
      quote: {
        text: 'OneSolve transformed our complex AI data platform into a stunning visual experience our users adore.',
        author: 'Alex Vance',
        role: 'VP of Product, Synthetix AI',
      },
    },
    {
      id: 2,
      title: 'E-Commerce Brand Identity',
      subtitle: 'Luxury Fashion Startup Visual Architecture & Storefront',
      category: 'Branding',
      tags: ['Branding', 'Web Design', 'Identity', 'Shopify'],
      client: 'AURA Couture',
      color: '#ff006e',
      beforeBg: 'linear-gradient(135deg, #444 0%, #222 100%)',
      afterBg: 'linear-gradient(135deg, #be185d 0%, #831843 100%)',
      challenge: 'New high-end fashion line needed a bold, memorable visual identity to stand out against legacy luxury houses.',
      solution: 'Designed complete brand system, custom typography, gold foil print assets, and a 3D product showcase e-commerce flagship.',
      metrics: [
        { val: '3.5x', label: 'ROI in Month 1' },
        { val: '$1.2M', label: 'Launch Sales' },
        { val: '14 Awards', label: 'Design Recognition' },
      ],
      quote: {
        text: 'The brand identity crafted by OneSolve gave us immediate authority and luxury prestige.',
        author: 'Elena Rostova',
        role: 'Founder, AURA Couture',
      },
    },
    {
      id: 3,
      title: '3D Product Visualization',
      subtitle: 'Interactive WebGL Spatial Viewer for Next-Gen Hardware',
      category: '3D Animation',
      tags: ['3D Animation', 'WebGL', 'Three.js', 'Hardware'],
      client: 'Orion Dynamics',
      color: '#ffb703',
      beforeBg: 'linear-gradient(135deg, #27272a 0%, #18181b 100%)',
      afterBg: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
      challenge: 'Static 2D photos failed to communicate the intricate engineering of Orion’s quantum processing unit.',
      solution: 'Created an interactive 3D WebGL model viewer allowing potential enterprise buyers to disassemble and inspect components in real time.',
      metrics: [
        { val: '+180%', label: 'Session Duration' },
        { val: '60 FPS', label: 'WebGL Frame Rate' },
        { val: '100%', label: 'Mobile Optimized' },
      ],
      quote: {
        text: 'Our enterprise buyers can inspect every layer of our hardware right inside their browser. Truly remarkable!',
        author: 'Dr. Marcus Sterling',
        role: 'CTO, Orion Dynamics',
      },
    },
    {
      id: 4,
      title: 'Marketing Campaign Website',
      subtitle: 'High-Impact Interactive Landing Page for Global Tech Summit',
      category: 'Web Design',
      tags: ['Web Design', '3D Animation', 'GSAP', 'Enterprise'],
      client: 'Apex Tech Summit',
      color: '#9d4edd',
      beforeBg: 'linear-gradient(135deg, #3f3f46 0%, #18181b 100%)',
      afterBg: 'linear-gradient(135deg, #6b21a8 0%, #4c1d95 100%)',
      challenge: 'Needed to sell out 5,000 VIP tickets within 48 hours for an international tech summit.',
      solution: 'Built an immersive, scroll-animated campaign site with 3D particle hero, live speaker schedule, and ticket checkout flow.',
      metrics: [
        { val: '5,000+', label: 'Tickets Sold' },
        { val: '< 2.1s', label: 'Page Load' },
        { val: '#1 Trend', label: 'ProductHunt Launch' },
      ],
      quote: {
        text: 'The campaign site generated massive viral buzz across tech Twitter and sold out our event in record time.',
        author: 'Sarah Jenkins',
        role: 'Head of Marketing, Apex Global',
      },
    },
    {
      id: 5,
      title: 'Cyberpunk NFT Experience',
      subtitle: 'Immersive Web3 Metaverse Hub & 3D Interactive Avatars',
      category: '3D Animation',
      tags: ['3D Animation', 'Web3', 'Metaverse', 'Shaders'],
      client: 'NeoTokyo Labs',
      color: '#00d9ff',
      beforeBg: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
      afterBg: 'linear-gradient(135deg, #0e7490 0%, #155e75 100%)',
      challenge: 'Web3 collector community demanded a futuristic metaverse hub rather than a standard mint page.',
      solution: 'Constructed a neon cyberpunk 3D virtual environment with audio reactive canvas, custom shaders, and wallet connection.',
      metrics: [
        { val: '10,000', label: 'Minted in 12 Mins' },
        { val: '45,000', label: 'Discord Members' },
        { val: '0 Failures', label: 'Uptime' },
      ],
      quote: {
        text: 'OneSolve delivered the sickest Web3 3D portal on the market!',
        author: 'KAI_ZERO',
        role: 'Lead Strategist, NeoTokyo',
      },
    },
    {
      id: 6,
      title: 'Spatial AR Platform',
      subtitle: 'Spatial Computing Interface & Augmented Reality Previewer',
      category: 'UI/UX',
      tags: ['UI/UX', '3D Animation', 'Spatial AR', 'Prototyping'],
      client: 'Vision Tech',
      color: '#ff006e',
      beforeBg: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)',
      afterBg: 'linear-gradient(135deg, #9f1239 0%, #881337 100%)',
      challenge: 'Designing a natural spatial computing UI layout for Next-Gen AR smart glasses.',
      solution: 'Created intuitive spatial glassmorphism UI components, hand gesture micro-interactions, and 3D depth layers.',
      metrics: [
        { val: '98%', label: 'Usability Score' },
        { val: 'WCAG AA', label: 'Accessibility' },
        { val: 'Patent', label: 'UI Gesture Patent' },
      ],
      quote: {
        text: 'Their spatial UI design principles laid the foundation for our flagship AR glass OS.',
        author: 'David Chen',
        role: 'Chief Architect, Vision Tech',
      },
    },
  ];

  const categories = ['All', 'Web Design', '3D Animation', 'Branding', 'UI/UX'];

  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Briefcase size={14} />
            <span>PORTFOLIO GALLERY</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Selected Works & <span className="gradient-text-gold">Case Studies</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Explore how we help high-growth startups and industry leaders build transformative digital experiences.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '50px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="badge-pill cursor-pointer"
              style={{
                padding: '10px 22px',
                fontSize: '0.88rem',
                cursor: 'pointer',
                background: filter === cat ? 'linear-gradient(135deg, var(--accent-cyan) 0%, #0088ff 100%)' : 'rgba(255, 255, 255, 0.04)',
                borderColor: filter === cat ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.08)',
                color: filter === cat ? '#000' : 'var(--text-muted)',
                fontWeight: filter === cat ? 700 : 500,
                boxShadow: filter === cat ? '0 0 20px rgba(0, 217, 255, 0.4)' : 'none',
                transition: 'var(--transition-bounce)',
              }}
            >
              {cat}
            </button>
          ))}
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
                  height: '220px',
                  background: project.afterBg,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      background: 'rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div>
                  <Sparkles size={36} color={project.color} className="mb-2" />
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>{project.client}</div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                    {project.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.72rem',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-dim)',
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
                  <span>View Case Study & Comparison</span>
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
