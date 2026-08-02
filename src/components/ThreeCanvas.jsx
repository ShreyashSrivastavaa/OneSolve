import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 250 }) {
  const points = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#00d9ff');
    const pink = new THREE.Color('#ff006e');
    const gold = new THREE.Color('#ffb703');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const rand = Math.random();
      const chosenColor = rand < 0.5 ? cyan : rand < 0.8 ? pink : gold;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
      points.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingShapes() {
  const torusRef = useRef();
  const icoRef = useRef();

  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.4;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x -= delta * 0.2;
      icoRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={torusRef} position={[-2.5, 1.2, -1]}>
          <torusKnotGeometry args={[0.8, 0.25, 128, 32]} />
          <MeshDistortMaterial
            color="#00d9ff"
            roughness={0.1}
            metalness={0.8}
            distort={0.3}
            speed={2}
            emissive="#004466"
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.8}>
        <mesh ref={icoRef} position={[2.8, -1, -0.5]}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#ff006e"
            roughness={0.2}
            metalness={0.9}
            wireframe={true}
            emissive="#440022"
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[0, -2, -2]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial
            color="#ffb703"
            roughness={0.1}
            metalness={0.9}
            emissive="#332200"
          />
        </mesh>
      </Float>
    </>
  );
}

export default function ThreeCanvas() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#ff006e" />
        <directionalLight position={[0, 5, 5]} intensity={1} color="#ffffff" />
        
        <ParticleField count={300} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
