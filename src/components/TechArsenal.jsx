import React, { useState } from 'react';
import { Cpu, Terminal, Sparkles, Cloud, Layers, Palette, CheckCircle2 } from 'lucide-react';

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
    { name: 'React', cat: 'frontend', level: 'Expert', desc: 'Component architecture & custom hooks', color: '#00d9ff' },
    { name: 'Next.js', cat: 'frontend', level: 'Expert', desc: 'App router, SSR & ISR flagships', color: '#ffffff' },
    { name: 'Three.js', cat: 'frontend', level: 'Advanced', desc: '3D WebGL scenes & R3F canvas', color: '#ffb703' },
    { name: 'WebGL & GLSL', cat: 'frontend', level: 'Advanced', desc: 'Custom vertex & fragment shaders', color: '#ff006e' },
    { name: 'Tailwind CSS', cat: 'frontend', level: 'Expert', desc: 'Utility design tokens & responsive UI', color: '#38bdf8' },
    { name: 'Framer Motion', cat: 'frontend', level: 'Expert', desc: 'Physics-based micro-animations', color: '#ec4899' },
    { name: 'GSAP', cat: 'frontend', level: 'Advanced', desc: 'ScrollTrigger 3D timelines', color: '#10b981' },
    { name: 'Vue.js / Angular', cat: 'frontend', level: 'Proficient', desc: 'Enterprise frontend frameworks', color: '#41b883' },

    // Backend
    { name: 'Node.js & Express', cat: 'backend', level: 'Expert', desc: 'Asynchronous event-driven microservices', color: '#22c55e' },
    { name: 'Python & FastAPI', cat: 'backend', level: 'Expert', desc: 'AI data pipelines & ML endpoints', color: '#3b82f6' },
    { name: 'Go (Golang)', cat: 'backend', level: 'Advanced', desc: 'High-concurrency microservices', color: '#00add8' },
    { name: 'GraphQL', cat: 'backend', level: 'Expert', desc: 'Apollo server schema federation', color: '#e535ab' },
    { name: 'PostgreSQL', cat: 'backend', level: 'Expert', desc: 'Relational schema design & indexing', color: '#336791' },
    { name: 'MongoDB & Firebase', cat: 'backend', level: 'Expert', desc: 'NoSQL document store & real-time DB', color: '#47a248' },
    { name: 'Socket.io', cat: 'backend', level: 'Advanced', desc: 'Real-time WebSocket event streams', color: '#ffffff' },

    // AI & Automation
    { name: 'OpenAI API', cat: 'ai', level: 'Expert', desc: 'GPT-4o, Embeddings & Structured Outputs', color: '#10a37f' },
    { name: 'Anthropic Claude', cat: 'ai', level: 'Expert', desc: 'Claude 3.5 Sonnet RAG & Prompt Engineering', color: '#d97706' },
    { name: 'LLaMA & Open Source', cat: 'ai', level: 'Advanced', desc: 'Self-hosted open models & vLLM inference', color: '#a855f7' },
    { name: 'LangChain & LlamaIndex', cat: 'ai', level: 'Expert', desc: 'RAG pipelines & document chunking', color: '#00d9ff' },
    { name: 'MCP (Model Context Protocol)', cat: 'ai', level: 'Advanced', desc: 'Enterprise tool & database context servers', color: '#9d4edd' },
    { name: 'n8n & Make', cat: 'ai', level: 'Expert', desc: 'Self-hosted workflow automation nodes', color: '#ff006e' },
    { name: 'Vector DB (Pinecone/Qdrant)', cat: 'ai', level: 'Advanced', desc: 'High-dimensional semantic search index', color: '#38bdf8' },

    // Cloud & DevOps
    { name: 'AWS Cloud', cat: 'cloud', level: 'Expert', desc: 'ECS, Lambda, S3, RDS, CloudFront', color: '#ff9900' },
    { name: 'Google Cloud Platform', cat: 'cloud', level: 'Expert', desc: 'BigQuery, Vertex AI, Kubernetes Engine', color: '#4285f4' },
    { name: 'Docker & Containers', cat: 'cloud', level: 'Expert', desc: 'Multi-stage container packaging', color: '#2496ed' },
    { name: 'Kubernetes', cat: 'cloud', level: 'Advanced', desc: 'Container orchestration & auto-scaling', color: '#326ce5' },
    { name: 'CI/CD Pipelines', cat: 'cloud', level: 'Expert', desc: 'GitHub Actions & automated deployment', color: '#2088ff' },
    { name: 'Vercel & Netlify', cat: 'cloud', level: 'Expert', desc: 'Edge network deployment & serverless', color: '#ffffff' },

    // Design
    { name: 'Figma', cat: 'design', level: 'Expert', desc: 'Design systems, auto-layout & prototypes', color: '#f24e1e' },
    { name: 'Blender', cat: 'design', level: 'Advanced', desc: '3D modeling, lighting & GLTF exports', color: '#ea7600' },
    { name: 'Spline 3D', cat: 'design', level: 'Advanced', desc: 'Interactive WebGL spatial assets', color: '#9d4edd' },
    { name: 'Adobe Creative Suite', cat: 'design', level: 'Expert', desc: 'After Effects, Illustrator & Photoshop', color: '#ff0000' },
  ];

  const filteredTech =
    activeCategory === 'all' ? techItems : techItems.filter((t) => t.cat === activeCategory);

  return (
    <section
      id="tech-stack"
      className="section-padding"
      style={{ position: 'relative', zIndex: 1, background: 'rgba(15, 20, 34, 0.4)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Cpu size={14} />
            <span>OUR TECH ARSENAL</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Enterprise <span className="gradient-text-cyan">Tools & Technologies</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            We leverage production-proven frameworks, AI frameworks, WebGL graphics engines, and cloud infrastructures to deliver uncompromised velocity and scale.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '30px',
                  border: isActive ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(0, 217, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
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
                padding: '20px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}40`,
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
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{item.name}</h3>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: item.color,
                      fontWeight: 600,
                    }}
                  >
                    {item.level}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
