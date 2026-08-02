import React from 'react';
import { Users, Code, Box, Palette, Award, Terminal, Globe, Share2, Code2 } from 'lucide-react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'John',
      role: 'Lead Designer & Creative Director',
      avatar: '🎨',
      bio: 'Crafting visually arresting brand systems and high-converting UI frameworks for 8+ years.',
      skills: ['Brand Identity', 'UI Architecture', '3D Layouts'],
      color: '#ff006e',
    },
    {
      name: 'Sarah',
      role: 'Senior Full-Stack & WebGL Dev',
      avatar: '💻',
      bio: 'Architecting ultra-fast, responsive web apps with complex 3D shader interactions and React.',
      skills: ['React / Vite', 'Three.js / Shaders', 'Performance'],
      color: '#00d9ff',
    },
    {
      name: 'Mike',
      role: '3D Artist & Motion Designer',
      avatar: '🪐',
      bio: 'Breathing life into static interfaces with Cinema4D, Blender, WebGL models, and fluid animations.',
      skills: ['Blender / GLTF', 'Motion FX', '3D Sculpting'],
      color: '#ffb703',
    },
    {
      name: 'Lisa',
      role: 'Project Manager & Product Strategist',
      avatar: '🚀',
      bio: 'Ensuring seamless client delivery, roadmap execution, and product-market alignment.',
      skills: ['Agile Sprints', 'Client Relations', 'UX Research'],
      color: '#9d4edd',
    },
  ];

  const badges = [
    'WebGL / Three.js',
    'React & Vite',
    '3D Motion Design',
    'Brand Architecture',
    'Figma Design Systems',
    'GSAP & Shaders',
    'UI/UX Prototyping',
    'Tailwind & Vanilla CSS',
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Users size={14} />
            <span>WHO WE ARE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            A Collective of <span className="gradient-text-pink">Creative Friends</span> & Builders
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            OneSolve was born from a shared passion for pushing the boundaries of web experiences. We combine high-end design aesthetics with real-time 3D graphics to help brands leave unforgettable impressions.
          </p>
        </div>

        {/* Meet the Team Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '70px',
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="glass-card"
              style={{
                padding: '30px',
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
                  height: '4px',
                  background: member.color,
                }}
              />
              <div>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: `${member.color}15`,
                    border: `1px solid ${member.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    marginBottom: '20px',
                  }}
                >
                  {member.avatar}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '6px' }}>{member.name}</h3>
                <div style={{ fontSize: '0.85rem', color: member.color, fontWeight: 600, marginBottom: '14px' }}>
                  {member.role}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Badges */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Our Technical Stack & Core Competencies
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {badges.map((b) => (
              <span
                key={b}
                style={{
                  padding: '10px 20px',
                  borderRadius: '30px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-main)',
                  transition: 'var(--transition-smooth)',
                }}
              >
                ⚡ {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
