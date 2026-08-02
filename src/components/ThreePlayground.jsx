import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { Box, RefreshCw, Eye, Sparkles, Sliders, Layers } from 'lucide-react';
import * as THREE from 'three';

function InteractiveModel({ shape, materialColor, isWireframe, autoRotate, speed, distort }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * speed * 0.8;
      meshRef.current.rotation.x += delta * speed * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        {shape === 'torusKnot' && <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />}
        {shape === 'icosahedron' && <icosahedronGeometry args={[1.6, 2]} />}
        {shape === 'cube' && <boxGeometry args={[2, 2, 2]} />}
        {shape === 'sphere' && <sphereGeometry args={[1.5, 64, 64]} />}

        <MeshDistortMaterial
          color={materialColor}
          roughness={0.1}
          metalness={0.9}
          wireframe={isWireframe}
          distort={distort}
          speed={speed * 2}
          emissive={materialColor === '#00d9ff' ? '#003344' : materialColor === '#ff006e' ? '#440022' : '#332200'}
        />
      </mesh>
    </Float>
  );
}

export default function ThreePlayground() {
  const [shape, setShape] = useState('torusKnot');
  const [colorPreset, setColorPreset] = useState('#00d9ff');
  const [isWireframe, setIsWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [distort, setDistort] = useState(0.3);
  const [speed, setSpeed] = useState(1);

  const shapes = [
    { id: 'torusKnot', label: 'Torus Knot' },
    { id: 'icosahedron', label: 'Icosahedron' },
    { id: 'cube', label: 'Cyber Cube' },
    { id: 'sphere', label: 'Orb Sphere' },
  ];

  const colors = [
    { name: 'Neon Cyan', hex: '#00d9ff' },
    { name: 'Holo Pink', hex: '#ff006e' },
    { name: 'Cyber Gold', hex: '#ffb703' },
    { name: 'Deep Purple', hex: '#9d4edd' },
    { name: 'Emerald', hex: '#10b981' },
  ];

  return (
    <section id="3d-lab" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Box size={14} />
            <span>INTERACTIVE 3D LAB</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px' }}>
            Real-Time <span className="gradient-text-pink">WebGL Playground</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Click & drag to rotate the 3D model. Test different geometries, shader distortions, wireframe modes, and glowing material presets.
          </p>
        </div>

        {/* Playground Container */}
        <div className="glass-card" style={{ padding: '30px', borderRadius: '24px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px', alignItems: 'center' }}>
            {/* Left Controls Panel */}
            <div style={{ gridColumn: 'span 4' }} className="lab-controls-col">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                    1. Choose 3D Geometry
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {shapes.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setShape(s.id)}
                        className="badge-pill"
                        style={{
                          padding: '10px',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          background: shape === s.id ? 'rgba(0, 217, 255, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                          borderColor: shape === s.id ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.08)',
                          color: shape === s.id ? '#fff' : 'var(--text-muted)',
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                    2. Material Color Presets
                  </label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {colors.map((c) => (
                      <button
                        key={c.hex}
                        onClick={() => setColorPreset(c.hex)}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: c.hex,
                          border: colorPreset === c.hex ? '3px solid #fff' : 'none',
                          cursor: 'pointer',
                          boxShadow: colorPreset === c.hex ? `0 0 15px ${c.hex}` : 'none',
                          transition: 'var(--transition-bounce)',
                        }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                    3. Shader & Mesh Toggles
                  </label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setIsWireframe(!isWireframe)}
                      className="btn-secondary"
                      style={{
                        padding: '10px 16px',
                        fontSize: '0.85rem',
                        borderColor: isWireframe ? 'var(--accent-pink)' : 'rgba(255, 255, 255, 0.1)',
                        color: isWireframe ? 'var(--accent-pink)' : 'var(--text-muted)',
                      }}
                    >
                      <Layers size={16} />
                      <span>{isWireframe ? 'Wireframe ON' : 'Solid Mesh'}</span>
                    </button>

                    <button
                      onClick={() => setAutoRotate(!autoRotate)}
                      className="btn-secondary"
                      style={{
                        padding: '10px 16px',
                        fontSize: '0.85rem',
                        borderColor: autoRotate ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)',
                        color: autoRotate ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      }}
                    >
                      <RefreshCw size={16} className={autoRotate ? 'animate-spin' : ''} />
                      <span>{autoRotate ? 'Rotating' : 'Paused'}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      Distortion Factor: {distort.toFixed(2)}
                    </label>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.8"
                    step="0.05"
                    value={distort}
                    onChange={(e) => setDistort(parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>

            {/* Right 3D Viewport Canvas */}
            <div style={{ gridColumn: 'span 8', height: '480px', position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#04060a' }} className="lab-viewport-col">
              <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color={colorPreset} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
                <InteractiveModel
                  shape={shape}
                  materialColor={colorPreset}
                  isWireframe={isWireframe}
                  autoRotate={autoRotate}
                  speed={speed}
                  distort={distort}
                />
                <OrbitControls enableZoom={true} autoRotate={false} />
              </Canvas>

              {/* Viewport Overlay Hint */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(8px)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Eye size={14} className="text-cyan-400" />
                <span>Drag mouse to orbit 360° | Scroll to zoom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .lab-controls-col { grid-column: span 12 !important; }
          .lab-viewport-col { grid-column: span 12 !important; height: 350px !important; }
        }
      `}</style>
    </section>
  );
}
