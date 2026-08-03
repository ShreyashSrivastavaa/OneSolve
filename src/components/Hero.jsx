import React from 'react';
import { ArrowRight, Play, Sparkles, ChevronDown, Award, Zap, ShieldCheck } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Three.js Background */}
      <ThreeCanvas />

      {/* Code Snippet Background Overlay */}
      <div
        className="code-snippet-overlay hidden-mobile"
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          fontSize: '0.75rem',
          color: 'rgba(0, 217, 255, 0.25)',
          pointerEvents: 'none',
          zIndex: 0,
          whiteSpace: 'pre',
          textAlign: 'left',
          lineHeight: 1.5,
        }}
      >
        {`const agency = new OneSolveAgency({
  capabilities: ["Web", "AI", "3D", "Cloud"],
  intelligence: "Agentic RAG & MCP",
  performance: "Lighthouse 99+"
});
await agency.transformBusiness();`}
      </div>

      <div
        className="code-snippet-overlay hidden-mobile"
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '5%',
          fontSize: '0.75rem',
          color: 'rgba(255, 0, 110, 0.25)',
          pointerEvents: 'none',
          zIndex: 0,
          whiteSpace: 'pre',
          textAlign: 'left',
          lineHeight: 1.5,
        }}
      >
        {`function optimizeFlow(nodes) {
  return nodes.map(node => ({
    ...node,
    aiPowered: true,
    status: 'ACTIVE'
  }));
}`}
      </div>

      {/* Glow Orbs Background */}
      <div className="glow-orb-cyan" style={{ top: '20%', left: '10%' }} />
      <div className="glow-orb-pink" style={{ bottom: '15%', right: '10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Top Tagline Pill */}
        <div style={{ display: 'inline-block', marginBottom: '20px' }}>
          <div className="badge-pill" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            <Sparkles size={14} className="text-cyan-400" />
            <span>FULL-STACK CREATIVE & AI SOLUTIONS AGENCY</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            marginBottom: '24px',
            textTransform: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          OneSolve <span style={{ color: 'var(--text-muted)' }}>—</span> <br />
          Where <span className="gradient-text-cyan">Creativity</span> Meets <span className="gradient-text-pink">Intelligence</span>
        </h1>

        {/* Sub-headline / Tagline */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'var(--text-muted)',
            maxWidth: '850px',
            margin: '0 auto 36px auto',
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}
        >
          Web <span style={{ color: 'var(--accent-pink)' }}>•</span> AI <span style={{ color: 'var(--accent-cyan)' }}>•</span> 3D <span style={{ color: 'var(--accent-gold)' }}>•</span> Design <span style={{ color: 'var(--accent-indigo)' }}>•</span> Automation <span style={{ color: 'var(--accent-pink)' }}>•</span> Cloud <span style={{ color: 'var(--accent-cyan)' }}>•</span> Growth
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center', marginBottom: '60px' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </a>
          <a
            href="#portfolio"
            className="btn-secondary"
            style={{
              padding: '16px 36px',
              fontSize: '1.05rem',
              borderColor: 'rgba(255, 0, 110, 0.4)',
              color: '#fff',
            }}
          >
            <Play size={18} fill="currentColor" color="var(--accent-pink)" />
            <span>View Our Work</span>
          </a>
        </div>

        {/* Live Metrics Ticker Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            padding: '20px 30px',
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: '20px',
            background: 'rgba(18, 24, 40, 0.65)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(0, 217, 255, 0.1)', color: 'var(--accent-cyan)' }}>
              <Zap size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>40+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Enterprise Projects</div>
            </div>
          </div>

          <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255, 0, 110, 0.1)', color: 'var(--accent-pink)' }}>
              <ShieldCheck size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>100+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AI Workflows Deployed</div>
            </div>
          </div>

          <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255, 183, 3, 0.1)', color: 'var(--accent-gold)' }}>
              <Award size={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>99.9%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>System Uptime</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#services"
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            marginTop: '40px',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <span>Scroll To Explore</span>
          <div
            style={{
              width: '24px',
              height: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: 'var(--accent-cyan)',
                animation: 'bounce 1.5s infinite',
              }}
            />
          </div>
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </section>
  );
}
