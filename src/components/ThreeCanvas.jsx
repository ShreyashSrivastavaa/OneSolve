import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 10 Services metadata matching the agency disciplines
const SERVICES_3D = [
  {
    id: 0,
    title: 'Web Design & Dev',
    subtitle: 'Geometric Cyber Cube',
    color: '#00d9ff',
    position: [-4.2, 1.0, 2.0],
    icon: '💻',
    type: 'cube',
  },
  {
    id: 1,
    title: 'AI Solutions & Automation',
    subtitle: 'Neural Sphere',
    color: '#9d4edd',
    position: [0, 2.2, 2.5],
    icon: '🤖',
    type: 'sphere',
  },
  {
    id: 2,
    title: '3D Web Experiences',
    subtitle: 'Wireframe Torus Knot',
    color: '#ffb703',
    position: [4.2, 1.0, 2.0],
    icon: '✨',
    type: 'torusKnot',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    subtitle: 'Artboard Palette',
    color: '#ff006e',
    position: [-2.8, -1.2, 1.2],
    icon: '🎨',
    type: 'artboard',
  },
  {
    id: 4,
    title: 'Agentic AI, RAG & MCP',
    subtitle: 'Knowledge Graph Swarm',
    color: '#ec4899',
    position: [0, 3.8, -1.0],
    icon: '🧠',
    type: 'graph',
  },
  {
    id: 5,
    title: 'Business Process Auto',
    subtitle: 'Workflow Pipeline Nodes',
    color: '#ffb703',
    position: [2.8, -1.2, 1.2],
    icon: '⚡',
    type: 'workflow',
  },
  {
    id: 6,
    title: 'Brand Strategy',
    subtitle: 'Morphing Geometry',
    color: '#a855f7',
    position: [4.8, 2.4, -2.0],
    icon: '🚀',
    type: 'morph',
  },
  {
    id: 7,
    title: 'Cloud & DevOps',
    subtitle: '3D Server Stack',
    color: '#00d9ff',
    position: [-4.8, 2.8, -2.5],
    icon: '☁️',
    type: 'server',
  },
  {
    id: 8,
    title: 'API & Integrations',
    subtitle: 'Linked Puzzle Nodes',
    color: '#6366f1',
    position: [0, -2.2, 1.8],
    icon: '⚙️',
    type: 'api',
  },
  {
    id: 9,
    title: 'Maintenance & Growth',
    subtitle: 'Upward Growth Spiral',
    color: '#00ff41',
    position: [4.8, -2.2, -1.5],
    icon: '📈',
    type: 'growth',
  },
];

// Interactive Camera Controller with mouse parallax, scroll zoom & WASD key panning
function CameraRig({ mousePos, zoomZ, keyOffset }) {
  const { camera } = useThree();

  useFrame((state, delta) => {
    // Target position combining mouse parallax and WASD offset
    const targetX = (mousePos.current.x * 2.5) + keyOffset.current.x;
    const targetY = (mousePos.current.y * 1.8) + 1.2 + keyOffset.current.y;
    const targetZ = zoomZ.current;

    // Smooth camera interpolation
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, delta * 3);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 3);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, delta * 3);

    // Look slightly towards center workspace
    camera.lookAt(keyOffset.current.x * 0.5, keyOffset.current.y * 0.5, 0);
  });

  return null;
}

// Background Particle Field
function WorkspaceParticles({ count = 350 }) {
  const points = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#00d9ff');
    const purple = new THREE.Color('#9d4edd');
    const gold = new THREE.Color('#ffb703');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20 + 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const rand = Math.random();
      const chosenColor = rand < 0.4 ? cyan : rand < 0.7 ? purple : gold;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Central OneSolve Emblem
function OneSolveEmblem() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
      <group position={[0, 0.5, -3]}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <MeshDistortMaterial
            color="#00d9ff"
            wireframe={true}
            distort={0.2}
            speed={2}
            emissive="#004466"
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial
            color="#ff006e"
            emissive="#990033"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Individual 3D Service Object Component
function ServiceObject3D({ service, onSelectService }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const rotSpeed = hovered ? 1.5 : 0.5;
      meshRef.current.rotation.y += delta * rotSpeed;
      meshRef.current.rotation.x += delta * (rotSpeed * 0.5);
    }
  });

  const scale = hovered ? 1.25 : 1.0;

  const handleClick = (e) => {
    e.stopPropagation();
    if (onSelectService) {
      onSelectService(service.id);
    }
    const targetEl = document.getElementById('services');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <group position={service.position}>
        <mesh
          ref={meshRef}
          scale={scale}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'default';
          }}
          onClick={handleClick}
        >
          {/* Specific Geometry based on type */}
          {service.type === 'cube' && <boxGeometry args={[1.1, 1.1, 1.1]} />}
          {service.type === 'sphere' && <sphereGeometry args={[0.85, 32, 32]} />}
          {service.type === 'torusKnot' && <torusKnotGeometry args={[0.7, 0.22, 100, 16]} />}
          {service.type === 'artboard' && <boxGeometry args={[1.3, 0.9, 0.2]} />}
          {service.type === 'graph' && <octahedronGeometry args={[0.9]} />}
          {service.type === 'workflow' && <cylinderGeometry args={[0.6, 0.6, 0.8, 6]} />}
          {service.type === 'morph' && <icosahedronGeometry args={[0.85, 1]} />}
          {service.type === 'server' && <boxGeometry args={[0.9, 1.3, 0.7]} />}
          {service.type === 'api' && <dodecahedronGeometry args={[0.8]} />}
          {service.type === 'growth' && <coneGeometry args={[0.7, 1.4, 16]} />}

          <MeshDistortMaterial
            color={service.color}
            roughness={0.15}
            metalness={0.85}
            distort={hovered ? 0.4 : 0.2}
            speed={2}
            wireframe={service.type === 'torusKnot' || service.type === 'graph'}
            emissive={service.color}
            emissiveIntensity={hovered ? 0.6 : 0.25}
          />
        </mesh>

        {/* Outer Glowing Halo Ring on Hover */}
        {hovered && (
          <mesh scale={1.4}>
            <ringGeometry args={[0.8, 0.85, 32]} />
            <meshBasicMaterial color={service.color} side={THREE.DoubleSide} transparent opacity={0.6} />
          </mesh>
        )}

        {/* Floating 3D HTML Tooltip Badge */}
        <Html
          position={[0, 1.2, 0]}
          center
          distanceFactor={12}
          style={{
            pointerEvents: 'none',
            transition: 'all 0.3s ease',
            opacity: hovered ? 1 : 0.75,
            transform: `scale(${hovered ? 1.1 : 1.0})`,
          }}
        >
          <div
            onClick={handleClick}
            style={{
              pointerEvents: 'auto',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(10, 14, 39, 0.85)',
              backdropFilter: 'blur(12px)',
              border: `1px solid ${hovered ? service.color : 'rgba(255, 255, 255, 0.15)'}`,
              boxShadow: hovered ? `0 0 20px ${service.color}60` : '0 4px 15px rgba(0,0,0,0.4)',
              whiteSpace: 'nowrap',
              color: '#fff',
              fontSize: '0.78rem',
              fontWeight: 700,
            }}
          >
            <span>{service.icon}</span>
            <span>{service.title}</span>
            {hovered && (
              <span
                style={{
                  fontSize: '0.65rem',
                  color: service.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginLeft: '4px',
                }}
              >
                Click →
              </span>
            )}
          </div>
        </Html>
      </group>
    </Float>
  );
}

export default function ThreeCanvas({ onSelectService }) {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const zoomZ = useRef(9.0);
  const keyOffset = useRef({ x: 0, y: 0 });

  // Mouse Move Parallax Listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mousePos.current = {
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1,
      };
    };

    // Scroll Wheel Zoom Listener
    const handleWheel = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        zoomZ.current = THREE.MathUtils.clamp(zoomZ.current + e.deltaY * 0.005, 5, 14);
      }
    };

    // WASD / Arrow Keys Pan Listener
    const handleKeyDown = (e) => {
      const step = 0.4;
      switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          keyOffset.current.y += step;
          break;
        case 's':
        case 'arrowdown':
          keyOffset.current.y -= step;
          break;
        case 'a':
        case 'arrowleft':
          keyOffset.current.x -= step;
          break;
        case 'd':
        case 'arrowright':
          keyOffset.current.x += step;
          break;
        default:
          break;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 9], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0e27']} />
        <fog attach="fog" args={['#0a0e27', 12, 35]} />

        {/* Ambient & Directional Neon Lights */}
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 15, 10]} intensity={1.8} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.4} color="#ff006e" />
        <pointLight position={[0, -5, 5]} intensity={1.2} color="#ffb703" />

        {/* Camera Controller */}
        <CameraRig mousePos={mousePos} zoomZ={zoomZ} keyOffset={keyOffset} />

        {/* Infinite Glowing Grid Floor */}
        <gridHelper
          args={[60, 60, '#00d9ff', 'rgba(255, 255, 255, 0.08)']}
          position={[0, -3.8, 0]}
        />

        {/* Particle Stars */}
        <WorkspaceParticles count={350} />

        {/* Central OneSolve Emblem */}
        <OneSolveEmblem />

        {/* Render All 10 Interactive 3D Service Objects */}
        {SERVICES_3D.map((srv) => (
          <ServiceObject3D key={srv.id} service={srv} onSelectService={onSelectService} />
        ))}
      </Canvas>
    </div>
  );
}
