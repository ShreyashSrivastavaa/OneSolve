import React from 'react';
import { Users, Sparkles, Award, Globe, Code2, ShieldCheck, Zap, Bot } from 'lucide-react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Shreyash Srivastava',
      role: 'Founder & Lead Full-Stack Architect',
      avatar: '⚡',
      bio: 'High-impact full-stack engineer & AI system architect specializing in ultra-fast React/Next.js platforms, WebGL 3D graphics, scalable cloud microservices, and autonomous AI pipelines.',
      skills: ['Full-Stack React/Next', 'AI & Agentic RAG', 'WebGL & Cloud Arch'],
      color: '#00d9ff',
      github: 'https://github.com/ShreyashSrivastavaa',
      linkedin: 'https://linkedin.com/in/shreyashsrivastava',
    },
    {
      name: 'Deep Dama',
      role: 'Lead Backend & Microservices Engineer',
      avatar: '⚙️',
      bio: 'Architecting high-throughput REST & GraphQL APIs, distributed database systems, real-time WebSockets, and resilient cloud microservices with sub-50ms latency.',
      skills: ['Node.js & Python', 'PostgreSQL & Redis', 'Microservices & APIs'],
      color: '#9d4edd',
      github: '#',
      linkedin: '#',
    },
    {
      name: 'Alex Vance',
      role: 'Lead UX & Creative Director',
      avatar: '🎨',
      bio: 'Crafting visually arresting brand systems and high-converting UI frameworks for 8+ years.',
      skills: ['Brand Identity', 'UI Architecture', 'Design Systems'],
      color: '#ff006e',
      github: '#',
      linkedin: '#',
    },
    {
      name: 'Elena Rostova',
      role: '3D Artist & Motion Lead',
      avatar: '🪐',
      bio: 'Breathing life into static interfaces with Cinema4D, Blender, WebGL models, and fluid animations.',
      skills: ['Blender / GLTF', 'Motion FX', '3D Sculpting'],
      color: '#ffb703',
      github: '#',
      linkedin: '#',
    },
  ];

  const stats = [
    { val: '40+', label: 'Successful Projects', icon: Zap, color: '#00d9ff' },
    { val: '30+', label: 'Happy Clients', icon: Users, color: '#ff006e' },
    { val: '10+', label: 'Industries Served', icon: Globe, color: '#ffb703' },
    { val: '99.9%', label: 'Uptime Average', icon: ShieldCheck, color: '#10b981' },
    { val: '50%', label: 'Avg Client Growth', icon: Award, color: '#9d4edd' },
    { val: '12', label: 'Expert Team Members', icon: Code2, color: '#38bdf8' },
    { val: 'Global', label: 'Client Presence', icon: Globe, color: '#ec4899' },
    { val: '100+', label: 'AI Solutions Deployed', icon: Bot, color: '#a855f7' },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Users size={14} />
            <span>MEET THE ONESOLVE SQUAD</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            A Collective of <span className="gradient-text-pink">Builders & AI Engineers</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            OneSolve was born from a shared passion for merging high-end design aesthetics with real-time 3D graphics and autonomous AI intelligence.
          </p>
        </div>

        {/* Team Squad Grid */}
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
              className="glass-card team-card-3d"
              style={{
                padding: '30px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transformStyle: 'preserve-3d',
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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

        {/* PORTFOLIO STATS SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '30px' }}>
            By The Numbers <span className="gradient-text-cyan">— Impact & Scale</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {stats.map((st, i) => {
              const Icon = st.icon;

              return (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    border: `1px solid ${st.color}30`,
                    boxShadow: `0 0 20px ${st.color}15`,
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: `${st.color}15`,
                      color: st.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px auto',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff' }}>{st.val}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>{st.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
