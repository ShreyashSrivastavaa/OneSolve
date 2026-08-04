import React, { useState, useEffect } from 'react';
import { Award, Globe, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const publications = [
    { name: 'TechCrunch', icon: Globe },
    { name: 'Wired', icon: TrendingUp },
    { name: 'Forbes', icon: Award },
    { name: 'The Verge', icon: Zap },
    { name: 'Product Hunt', icon: Globe },
    { name: 'Hacker News', icon: TrendingUp },
    { name: 'Dev.to', icon: Award },
    { name: 'GitHub', icon: Zap },
    { name: 'Medium', icon: Globe },
    { name: 'Indie Hackers', icon: TrendingUp },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % publications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [publications.length]);

  const visiblePublications = [
    ...publications.slice(scrollPosition),
    ...publications.slice(0, scrollPosition),
  ].slice(0, 5);

  return (
    <section
      style={{
        position: 'relative',
        padding: '60px 0',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <p
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
              marginBottom: '8px',
            }}
          >
            AS SEEN ON
          </p>
          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'var(--gradient-purple)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {visiblePublications.map((pub, index) => {
            const Icon = pub.icon;
            return (
              <motion.div
                key={`${pub.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={20} style={{ color: 'var(--accent-purple)' }} />
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                  }}
                >
                  {pub.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trusted By Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '32px',
          }}
        >
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-dim)',
            }}
          >
            Trusted by innovative companies worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
