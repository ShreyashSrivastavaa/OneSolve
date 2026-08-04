import React from 'react';
import { CheckCircle, Zap, Shield, Clock, Users, Rocket, Globe, Code } from 'lucide-react';

export default function FeatureList() {
  const featureCategories = [
    {
      title: 'Performance & Speed',
      icon: Zap,
      accent: '#f59e0b',
      features: [
        'Lightning-fast load times with 95+ Lighthouse scores',
        'Optimized WebGL experiences that run smoothly on all devices',
        'CDN integration for global content delivery',
        'Lazy loading and code splitting for instant page loads',
      ],
    },
    {
      title: 'Security & Reliability',
      icon: Shield,
      accent: '#10b981',
      features: [
        'Enterprise-grade security protocols and encryption',
        '24/7 monitoring and automated backups',
        'DDoS protection and secure authentication systems',
        'Compliance with GDPR, SOC 2, and industry standards',
      ],
    },
    {
      title: 'Time to Market',
      icon: Clock,
      accent: '#3b82f6',
      features: [
        'Rapid prototyping and MVP development in weeks, not months',
        'Agile development methodology with continuous delivery',
        'Automated testing and deployment pipelines',
        'Scalable architecture that grows with your business',
      ],
    },
    {
      title: 'Expert Team',
      icon: Users,
      accent: '#ec4899',
      features: [
        'Senior engineers with 10+ years of experience',
        'Specialists in AI, WebGL, and modern web technologies',
        'Dedicated project managers and support staff',
        'Continuous learning and staying ahead of tech trends',
      ],
    },
  ];

  const coreBenefits = [
    { icon: Rocket, title: 'Faster Development', description: 'Ship features 3x faster with our proven methodologies' },
    { icon: Globe, title: 'Global Reach', description: 'CDN-powered delivery to users worldwide' },
    { icon: Code, title: 'Clean Code', description: 'Maintainable, scalable code following best practices' },
    { icon: Shield, title: 'Secure by Default', description: 'Security-first approach to every project' },
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
            <CheckCircle size={14} />
            <span>WHY CHOOSE US</span>
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
            <span className="gradient-text-purple"> success</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            We combine cutting-edge technology with proven methodologies to deliver digital products that drive real business results.
          </p>
        </div>

        {/* Feature Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
            marginBottom: '80px',
          }}
        >
          {featureCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '36px',
                  borderRadius: '20px',
                  position: 'relative',
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '24px',
                    paddingBottom: '20px',
                    borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: `${category.accent}20`,
                      border: `2px solid ${category.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: category.accent,
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      margin: 0,
                    }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Feature List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {category.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                      }}
                    >
                      <CheckCircle
                        size={18}
                        style={{
                          color: category.accent,
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6,
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Benefits */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {coreBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon
                  size={32}
                  style={{ color: 'var(--accent-purple)', marginBottom: '16px' }}
                />
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '8px',
                  }}
                >
                  {benefit.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
