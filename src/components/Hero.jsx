import React from 'react';
import { ArrowRight, Play, Sparkles, ChevronDown, Zap } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '750px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--gradient-hero)',
        paddingTop: '60px',
      }}
    >
      {/* Subtle WebGL Gradient Canvas */}
      <ThreeCanvas />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at 30% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'left',
          maxWidth: '1200px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          {/* Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: '24px' }}
          >
            <div className="badge-pill">
              <Sparkles size={14} />
              <span>MINIMALIST WEBGL & AI AGENCY</span>
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1
            className="hero-headline-unicorn"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginBottom: '20px' }}
          >
            One<span className="gradient-text-purple">Solve</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            We Create Beautiful Digital Experiences
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'var(--text-muted)',
              maxWidth: '600px',
              marginBottom: '36px',
              lineHeight: 1.6,
            }}
          >
            We are a full-stack digital solutions agency crafting high-conversion web platforms, WebGL 3D experiences, and autonomous AI automation.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <a href="#contact" className="btn-primary">
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-secondary">
              <Play size={16} fill="currentColor" color="var(--accent-purple)" />
              <span>View Our Work</span>
            </a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            {[
              { icon: Zap, text: 'AI-Powered', color: 'var(--accent-purple)' },
              { icon: Zap, text: 'WebGL 3D', color: 'var(--accent-pink)' },
              { icon: Zap, text: 'Lightning Fast', color: 'var(--accent-cyan)' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <item.icon size={14} style={{ color: item.color }} />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#services"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll to explore</span>
        <ChevronDown size={20} style={{ animation: 'bounce 1.8s infinite' }} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
