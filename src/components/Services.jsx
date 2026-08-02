import React, { useState } from 'react';
import { Monitor, Box, Sparkles, Layout, CheckCircle, ArrowRight, Layers } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: 'Web Design & Development',
      icon: Monitor,
      accent: '#00d9ff',
      tagline: 'Ultra-fast, high-converting digital flagships built with React & WebGL.',
      description:
        'We engineer bespoke web applications and portfolio sites that combine stunning aesthetic standards with rock-solid performance, SEO architecture, and interactive micro-animations.',
      features: [
        'Custom React / Vite & Next.js Development',
        'WebGL & Three.js 3D Canvas Integration',
        'Lighthouse 95+ Performance Tuning',
        'Fully Responsive Across Desktop, Tablet & Mobile',
        'Headless CMS & API Integration',
      ],
    },
    {
      id: 1,
      title: '3D Animation & Motion Graphics',
      icon: Box,
      accent: '#ff006e',
      tagline: 'Immersive 3D visuals and spatial web experiences that enchant visitors.',
      description:
        'From custom Blender & Cinema4D models to real-time WebGL interactive viewports, we turn flat static web pages into tactile 3D environments that captivate users.',
      features: [
        'Interactive 3D Model Viewers (GLTF / GLB)',
        'Custom GLSL Fragment & Vertex Shaders',
        'Product 3D Renderings & Morphing Geometry',
        'Scroll-Driven 3D Camera Animations',
        'Mobile-Optimized Low-Poly Geometry',
      ],
    },
    {
      id: 2,
      title: 'Brand Identity & Strategy',
      icon: Sparkles,
      accent: '#ffb703',
      tagline: 'Unforgettable visual identities tailored for ambitious tech startups.',
      description:
        'We craft comprehensive brand systems—from emblem architecture and color theory to typographic hierarchy and brand guidelines—that establish category leadership.',
      features: [
        'Logo Design & Vector Brand Architecture',
        'Comprehensive Brand Guideline Playbooks',
        'Color Systems & Dark/Light Mode Schemes',
        'Custom Typography & Graphic Assets',
        'Social Media Kit & Pitch Deck Design',
      ],
    },
    {
      id: 3,
      title: 'UI/UX Design & Prototyping',
      icon: Layout,
      accent: '#9d4edd',
      tagline: 'Intuitive user journeys and polished design systems built in Figma.',
      description:
        'We design intuitive, accessible user interfaces backed by user research and rapid prototyping, ensuring your users enjoy effortless interaction flow.',
      features: [
        'Figma Component Design Systems & Tokens',
        'User Journey Mapping & Wireframing',
        'High-Fidelity Interactive Prototypes',
        'Accessibility (WCAG AA) Compliance',
        'Design-to-Code Developer Handoff',
      ],
    },
  ];

  const current = services[activeService];
  const IconComp = current.icon;

  return (
    <section id="services" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 20, 34, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Layers size={14} />
            <span>WHAT WE DO BEST</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Services Crafted For <span className="gradient-text-cyan">Maximum Impact</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Four core disciplines designed to elevate your digital presence from ordinary to extraordinary.
          </p>
        </div>

        {/* Interactive Service Grid & Detail Panel Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px', alignItems: 'start' }}>
          {/* Left List Tabs */}
          <div style={{ gridColumn: 'span 5' }} className="service-tabs-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {services.map((srv) => {
                const Icon = srv.icon;
                const isActive = srv.id === activeService;

                return (
                  <div
                    key={srv.id}
                    onClick={() => setActiveService(srv.id)}
                    className="glass-card cursor-pointer"
                    style={{
                      padding: '24px',
                      cursor: 'pointer',
                      borderColor: isActive ? srv.accent : 'rgba(255, 255, 255, 0.08)',
                      background: isActive ? 'rgba(28, 37, 60, 0.9)' : 'var(--bg-card)',
                      boxShadow: isActive ? `0 0 25px ${srv.accent}30` : 'none',
                      transform: isActive ? 'translateX(8px)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: `${srv.accent}15`,
                          border: `1px solid ${srv.accent}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: srv.accent,
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: isActive ? '#fff' : 'var(--text-muted)' }}>
                          {srv.title}
                        </h3>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                          {srv.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Active Service Feature Detail */}
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
              <div
                style={{
                  position: 'absolute',
                  top: '-100px',
                  right: '-100px',
                  width: '250px',
                  height: '250px',
                  background: current.accent,
                  opacity: 0.15,
                  filter: 'blur(60px)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '16px',
                    background: `${current.accent}20`,
                    color: current.accent,
                    border: `1px solid ${current.accent}50`,
                  }}
                >
                  <IconComp size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{current.title}</h3>
                  <span style={{ fontSize: '0.88rem', color: current.accent, fontWeight: 600 }}>FEATURED SERVICE</span>
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: 1.7 }}>
                {current.description}
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                Key Capabilities & Deliverables:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                {current.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={18} color={current.accent} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{feat}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary" style={{ background: current.accent, color: '#000' }}>
                <span>Inquire About {current.title}</span>
                <ArrowRight size={18} />
              </a>
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
