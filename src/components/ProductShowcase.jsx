import React from 'react';
import { Monitor, BrainCircuit, Sparkles, Zap, Layers, Code, Globe, Cpu } from 'lucide-react';

export default function ProductShowcase() {
  const showcases = [
    {
      title: 'WebGL Experiences',
      description: 'Immersive 3D environments that captivate and convert',
      icon: Monitor,
      accent: '#8b5cf6',
      features: ['Three.js & R3F', 'GLSL Shaders', 'Performance Optimized'],
    },
    {
      title: 'AI Integration',
      description: 'Intelligent automation that works while you sleep',
      icon: BrainCircuit,
      accent: '#ec4899',
      features: ['LLM Integration', 'RAG Systems', 'Autonomous Agents'],
    },
    {
      title: 'Brand Design',
      description: 'Visual identities that leave lasting impressions',
      icon: Sparkles,
      accent: '#06b6d4',
      features: ['Logo Systems', 'Design Tokens', 'Brand Guidelines'],
    },
    {
      title: 'Lightning Performance',
      description: 'Speed that keeps users engaged and happy',
      icon: Zap,
      accent: '#f59e0b',
      features: ['95+ Lighthouse', 'CDN Optimized', 'Instant Loads'],
    },
  ];

  return (
    <section
      className="section-padding"
      style={{
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto 80px auto',
          }}
        >
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Layers size={14} />
            <span>OUR WORK</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              marginBottom: '20px',
              color: 'var(--text-main)',
            }}
          >
            Built for
            <span className="gradient-text-purple"> excellence</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            Every project we deliver combines cutting-edge technology with stunning design to create digital experiences that truly stand out.
          </p>
        </div>

        {/* Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          {showcases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '40px 32px',
                  borderRadius: '24px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: `${item.accent}20`,
                    border: `2px solid ${item.accent}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px auto',
                    color: item.accent,
                  }}
                >
                  <Icon size={36} />
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  {item.description}
                </p>

                {/* Feature Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'center',
                  }}
                >
                  {item.features.map((feature, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        background: `${item.accent}15`,
                        color: item.accent,
                        fontWeight: 600,
                        border: `1px solid ${item.accent}30`,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
          }}
        >
          {[
            { number: '150+', label: 'Projects Delivered', icon: Code },
            { number: '98%', label: 'Client Satisfaction', icon: Globe },
            { number: '24/7', label: 'Support Available', icon: Cpu },
            { number: '10+', label: 'Years Experience', icon: Zap },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '32px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <Icon
                  size={24}
                  style={{ color: 'var(--accent-purple)', marginBottom: '16px' }}
                />
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--text-main)',
                    marginBottom: '8px',
                    background: 'var(--gradient-purple)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
