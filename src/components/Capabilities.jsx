import React from 'react';
import { ShieldCheck, Cpu, Box, Bot, Layers, Zap, Sparkles } from 'lucide-react';

export default function Capabilities() {
  const differentiators = [
    {
      title: 'Full-Stack Technical Expertise',
      icon: Layers,
      color: '#00d9ff',
      desc: 'We manage the complete project lifecycle—from AI models and custom 3D design to backend APIs and cloud infrastructure.',
    },
    {
      title: 'Cutting-Edge 3D Experiences',
      icon: Box,
      color: '#ff006e',
      desc: 'Interactive Three.js & WebGL 3D viewports and spatial particle graphics that mesmerize visitors.',
    },
    {
      title: 'AI-Powered Autonomous Agents',
      icon: Bot,
      color: '#9d4edd',
      desc: 'Deep integration of Claude 3.5, OpenAI, RAG retrieval engines, and MCP tools built directly into your workflow.',
    },
    {
      title: 'Scalable Cloud Architecture',
      icon: Cpu,
      color: '#ffb703',
      desc: 'Cloud-native Docker & Kubernetes setups configured for high availability and zero-downtime traffic spikes.',
    },
    {
      title: 'Seamless Custom Integrations',
      icon: ShieldCheck,
      color: '#10b981',
      desc: 'Connect existing CRMs, payment gateways, and databases cleanly via REST, WebSockets, or GraphQL.',
    },
    {
      title: 'Performance Obsessed (Lighthouse 95+)',
      icon: Zap,
      color: '#38bdf8',
      desc: 'Sub-second page loads, asset compression, WCAG AA accessibility, and 60 FPS animation frame rates.',
    },
  ];

  return (
    <section
      id="capabilities"
      className="section-padding"
      style={{ position: 'relative', zIndex: 1, background: 'rgba(7, 9, 14, 0.9)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} />
            <span>WHY BRANDS CHOOSE ONESOLVE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Engineered For <span className="gradient-text-cyan">Unfair Advantage</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Six core pillars that separate OneSolve from traditional design agencies and dev shops.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;

            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '30px',
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: diff.color,
                  }}
                />

                <div>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: `${diff.color}15`,
                      border: `1px solid ${diff.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: diff.color,
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                    {diff.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{diff.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
