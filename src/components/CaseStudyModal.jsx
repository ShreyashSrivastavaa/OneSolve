import React, { useState } from 'react';
import { X, ExternalLink, Award, Check, Star, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  if (!project) return null;

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(5, 7, 12, 0.9)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '24px',
          padding: '36px',
          position: 'relative',
          borderColor: 'rgba(0, 217, 255, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <span>{project.category}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '8px' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>{project.subtitle}</p>
        </div>

        {/* INTERACTIVE BEFORE / AFTER SLIDER */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-pink)', textTransform: 'uppercase' }}>
              BEFORE: Legacy Product UI
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
              AFTER: OneSolve Redesign
            </span>
          </div>

          <div
            style={{
              position: 'relative',
              height: '320px',
              borderRadius: '16px',
              overflow: 'hidden',
              userSelect: 'none',
              cursor: 'ew-resize',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
          >
            {/* After Image View (Background) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: project.afterBg || 'linear-gradient(135deg, #091e3a 0%, #2f80ed 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#fff',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <Sparkles size={48} className="text-cyan-400 mb-2 animate-bounce" />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>⚡ Redesigned 3D Web Experience</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, maxWidth: '400px', marginTop: '6px' }}>
                Ultra-smooth 60fps WebGL shaders, fluid micro-interactions, dark mode elegance.
              </p>
            </div>

            {/* Before Image View (Clipped Overlay) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${sliderPos}%`,
                height: '100%',
                background: project.beforeBg || 'linear-gradient(135deg, #333 0%, #111 100%)',
                overflow: 'hidden',
                borderRight: '2px solid #00d9ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#aaa',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <SlidersHorizontal size={40} className="mb-2" />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ddd' }}>Original Legacy Site</h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, maxWidth: '350px', marginTop: '6px' }}>
                Slow load times, outdated typography, zero interactive 3D graphics.
              </p>
            </div>

            {/* Slider Drag Handle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${sliderPos}%`,
                transform: 'translate(-50%, -50%)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#00d9ff',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px #00d9ff',
                pointerEvents: 'none',
              }}
            >
              ↔
            </div>
          </div>
        </div>

        {/* Project Results Pills */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '30px' }}>
          {project.metrics?.map((m, i) => (
            <div
              key={i}
              style={{
                padding: '16px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{m.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '30px' }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>The Challenge</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{project.challenge}</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>The Solution</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{project.solution}</p>
          </div>
        </div>

        {/* Testimonial Quote */}
        {project.quote && (
          <div
            style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(0, 217, 255, 0.05)',
              borderLeft: '4px solid var(--accent-cyan)',
              marginBottom: '30px',
            }}
          >
            <div style={{ display: 'flex', gap: '4px', marginBottom: '8px', color: '#ffb703' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', color: '#fff', fontSize: '0.98rem', marginBottom: '10px' }}>
              "{project.quote.text}"
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              — {project.quote.author}, {project.quote.role}
            </div>
          </div>
        )}

        {/* CTA Launch Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onClose} className="btn-secondary">
            Close Case Study
          </button>
          <a href="#contact" onClick={onClose} className="btn-primary">
            <span>Build Similar Solution</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
