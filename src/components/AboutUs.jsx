import React from 'react';
import { Users, Award, Globe, Code2, ShieldCheck, Zap, Bot, Share2 } from 'lucide-react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Shreyash Srivastava',
      role: 'Founder & Full-Stack Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      fallbackEmoji: '⚡',
      bio: 'Architecting ultra-fast Next.js platforms, WebGL 3D graphics, and multi-agent AI pipelines.',
      color: '#8b5cf6',
      github: 'https://github.com/ShreyashSrivastavaa',
      linkedin: 'https://linkedin.com/in/shreyashsrivastava',
    },
    {
      name: 'Deep Dama',
      role: 'Lead Backend & AI Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      fallbackEmoji: '⚙️',
      bio: 'Architecting high-throughput REST/GraphQL APIs, vector databases, and real-time WebSockets.',
      color: '#ec4899',
      github: '#',
      linkedin: '#',
    },
    {
      name: 'Alex Vance',
      role: 'Lead UX & Creative Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      fallbackEmoji: '🎨',
      bio: 'Crafting visually arresting brand systems, design tokens, and high-converting UI frameworks.',
      color: '#3b82f6',
      github: '#',
      linkedin: '#',
    },
  ];

  const stats = [
    { val: '40+', label: 'Projects Delivered', icon: Zap, color: '#8b5cf6' },
    { val: '30+', label: 'Happy Clients', icon: Users, color: '#ec4899' },
    { val: '10+', label: 'Industries Served', icon: Globe, color: '#f59e0b' },
    { val: '99.9%', label: 'Uptime Average', icon: ShieldCheck, color: '#10b981' },
    { val: '12', label: 'Expert Team Members', icon: Code2, color: '#06b6d4' },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1, background: '#fafafa' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Users size={14} />
            <span>MEET THE TEAM</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, marginBottom: '20px' }}>
            The Minds Behind <span className="gradient-text-purple">OneSolve</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            A collective of full-stack engineers, 3D artists, and AI architects building digital flagships.
          </p>
        </div>

        {/* 3-Column Team Grid */}
        <div
          id="team"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '80px',
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="glass-card team-card-3d"
              style={{
                padding: '36px 28px',
                borderRadius: '24px',
                textAlign: 'center',
                background: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Circular Avatar */}
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${member.color}20 0%, ${member.color}40 100%)`,
                  border: `3px solid ${member.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  marginBottom: '20px',
                  boxShadow: `0 8px 25px ${member.color}30`,
                }}
              >
                {member.fallbackEmoji}
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '6px' }}>
                {member.name}
              </h3>
              <div style={{ fontSize: '0.88rem', color: member.color, fontWeight: 700, marginBottom: '14px' }}>
                {member.role}
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                {member.bio}
              </p>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#f4f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1a1a1a',
                    textDecoration: 'none',
                  }}
                >
                  <Globe size={16} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#f4f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1a1a1a',
                    textDecoration: 'none',
                  }}
                >
                  <Share2 size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* STATISTICS SECTION ("By The Numbers") */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '36px', color: '#1a1a1a' }}>
            By The <span className="gradient-text-purple">Numbers</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
            }}
          >
            {stats.map((st, i) => {
              const Icon = st.icon;

              return (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '28px 20px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    background: '#ffffff',
                    border: `1px solid ${st.color}25`,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `${st.color}12`,
                      color: st.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 14px auto',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div style={{ fontSize: '2.8rem', fontWeight: 900, color: st.color, lineHeight: 1.1 }}>
                    {st.val}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '6px', fontWeight: 600 }}>
                    {st.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
