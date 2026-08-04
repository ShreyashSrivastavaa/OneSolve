import React from 'react';
import { AlertTriangle, CheckCircle, Rocket, Lightbulb, Target, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
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
            <Lightbulb size={14} />
            <span>THE CHALLENGE</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              marginBottom: '20px',
              color: 'var(--text-main)',
            }}
          >
            Digital experiences shouldn't be
            <span className="gradient-text-purple"> complicated</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            Building exceptional digital products shouldn't feel like rocket science. Yet so many businesses struggle with fragmented solutions, slow performance, and generic designs.
          </p>
        </div>

        {/* Problem Section */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto 80px auto',
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: '48px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AlertTriangle size={28} style={{ color: '#ef4444' }} />
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 700,
                marginBottom: '20px',
                color: 'var(--text-main)',
              }}
            >
              The struggle is real
            </h3>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Got a brilliant digital vision but stuck with outdated technology? Love your business idea but hate the slow, clunky website? We've all been there.
            </p>

            <div
              style={{
                display: 'grid',
                gap: '16px',
              }}
            >
              {[
                'Websites that load slower than a snail on vacation',
                'Generic templates that make your brand look like everyone else',
                'AI tools that promise magic but deliver confusion',
                '3D experiences that crash browsers instead of wowing users',
                'Automation workflows that need constant babysitting',
              ].map((problem, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(239, 68, 68, 0.05)',
                    border: '1px solid rgba(239, 68, 68, 0.1)',
                  }}
                >
                  <AlertTriangle size={16} style={{ color: '#ef4444', flexShrink: 0 }} />
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bridge Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 32px',
              borderRadius: '50px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '2px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <ArrowRight size={24} style={{ color: 'var(--accent-purple)' }} />
            <span
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--accent-purple)',
              }}
            >
              Enter OneSolve
            </span>
            <ArrowRight size={24} style={{ color: 'var(--accent-purple)' }} />
          </div>
        </div>

        {/* Solution Section */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: '48px',
              position: 'relative',
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircle size={28} style={{ color: '#10b981' }} />
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 700,
                marginBottom: '20px',
                color: 'var(--text-main)',
              }}
            >
              We've got you covered
            </h3>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Here's OneSolve — your full-stack digital partner that turns complex challenges into elegant solutions. Fast, beautiful, and actually fun to work with.
            </p>

            <div
              style={{
                display: 'grid',
                gap: '16px',
              }}
            >
              {[
                'Lightning-fast web apps that load in the blink of an eye',
                'Custom designs that make your brand unforgettable',
                'AI solutions that work like magic, no PhD required',
                '3D experiences that impress without breaking the web',
                'Automation that runs while you sleep (literally)',
              ].map((solution, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                  }}
                >
                  <CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {solution}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Rocket size={18} />
                <span>Let's Build Something Amazing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
