import React, { useState } from 'react';
import { Cpu, Terminal, Sparkles, Cloud, Layers, Palette } from 'lucide-react';

export default function TechArsenal() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack', icon: Layers },
    { id: 'frontend', label: 'Frontend & 3D', icon: Terminal },
    { id: 'backend', label: 'Backend & APIs', icon: Cpu },
    { id: 'ai', label: 'AI & Automation', icon: Sparkles },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'design', label: 'Design Systems', icon: Palette },
  ];

  const techItems = [
    // Frontend
    { name: 'React', cat: 'frontend', level: 'Expert', desc: 'Component architecture & custom hooks', color: '#3b82f6' },
    { name: 'Next.js', cat: 'frontend', level: 'Expert', desc: 'App router, SSR & ISR flagships', color: '#1a1a1a' },
    { name: 'Three.js', cat: 'frontend', level: 'Advanced', desc: '3D WebGL scenes & R3F canvas', color: '#f59e0b' },
    { name: 'WebGL & GLSL', cat: 'frontend', level: 'Advanced', desc: 'Custom vertex & fragment shaders', color: '#ec4899' },
    { name: 'Tailwind CSS', cat: 'frontend', level: 'Expert', desc: 'Utility design tokens & responsive UI', color: '#06b6d4' },
    { name: 'Framer Motion', cat: 'frontend', level: 'Expert', desc: 'Physics-based micro-animations', color: '#8b5cf6' },

    // Backend
    { name: 'Node.js & Express', cat: 'backend', level: 'Expert', desc: 'Asynchronous event-driven microservices', color: '#10b981' },
    { name: 'Python & FastAPI', cat: 'backend', level: 'Expert', desc: 'AI data pipelines & ML endpoints', color: '#3b82f6' },
    { name: 'GraphQL', cat: 'backend', level: 'Expert', desc: 'Apollo server schema federation', color: '#ec4899' },
    { name: 'PostgreSQL', cat: 'backend', level: 'Expert', desc: 'Relational schema design & indexing', color: '#3b82f6' },

    // AI & Automation
    { name: 'OpenAI API', cat: 'ai', level: 'Expert', desc: 'GPT-4o, Embeddings & Structured Outputs', color: '#10b981' },
    { name: 'Anthropic Claude', cat: 'ai', level: 'Expert', desc: 'Claude 3.5 Sonnet RAG & Prompting', color: '#f59e0b' },
    { name: 'LangChain & LlamaIndex', cat: 'ai', level: 'Expert', desc: 'RAG pipelines & document chunking', color: '#06b6d4' },
    { name: 'MCP (Model Context Protocol)', cat: 'ai', level: 'Advanced', desc: 'Enterprise tool & database context servers', color: '#8b5cf6' },
    { name: 'n8n & Make', cat: 'ai', level: 'Expert', desc: 'Self-hosted workflow automation nodes', color: '#ec4899' },

    // Cloud & DevOps
    { name: 'AWS Cloud', cat: 'cloud', level: 'Expert', desc: 'ECS, Lambda, S3, RDS, CloudFront', color: '#f59e0b' },
    { name: 'Docker & Containers', cat: 'cloud', level: 'Expert', desc: 'Multi-stage container packaging', color: '#3b82f6' },
    { name: 'Vercel & Netlify', cat: 'cloud', level: 'Expert', desc: 'Edge network deployment & serverless', color: '#1a1a1a' },

    // Design
    { name: 'Figma', cat: 'design', level: 'Expert', desc: 'Design systems, auto-layout & prototypes', color: '#ec4899' },
    { name: 'Blender', cat: 'design', level: 'Advanced', desc: '3D modeling, lighting & GLTF exports', color: '#f59e0b' },
  ];

  const filteredTech =
    activeCategory === 'all' ? techItems : techItems.filter((t) => t.cat === activeCategory);

  return (
    <section
      id="tech-stack"
      className="section-padding"
      style={{ position: 'relative', zIndex: 1, background: '#fafafa' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Cpu size={14} />
            <span>TECHNOLOGY STACK</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            Technologies We <span className="gradient-text-purple">Use</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            We leverage production-proven frameworks, AI tools, WebGL engines, and cloud infrastructures.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '30px',
                  border: isActive ? '1px solid var(--accent-purple)' : '1px solid rgba(0, 0, 0, 0.08)',
                  background: isActive ? 'var(--accent-purple)' : '#ffffff',
                  color: isActive ? '#ffffff' : '#1a1a1a',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: isActive ? '0 4px 15px rgba(139, 92, 246, 0.3)' : '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                background: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: `${item.color}12`,
                  border: `1px solid ${item.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: item.color,
                  flexShrink: 0,
                  fontWeight: 800,
                }}
              >
                ⚡
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1a1a1a' }}>{item.name}</h3>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: '#f4f4f6',
                      color: item.color,
                      fontWeight: 700,
                    }}
                  >
                    {item.level}
                  </span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
