import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Single Centered Floating Morphing Glass Shape
function UnicornFloatingShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.35;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[2.5, 0.2, -1]}>
        <icosahedronGeometry args={[2.2, 3]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          roughness={0.15}
          metalness={0.85}
          distort={0.4}
          speed={2.5}
          emissive="#ec4899"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Background Soft Particles Field
function FluidParticles({ count = 180 }) {
  const points = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const purple = new THREE.Color('#8b5cf6');
    const pink = new THREE.Color('#ec4899');
    const blue = new THREE.Color('#3b82f6');
    const gold = new THREE.Color('#f59e0b');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const rand = Math.random();
      const chosenColor = rand < 0.35 ? purple : rand < 0.65 ? pink : rand < 0.85 ? blue : gold;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

// Camera Mouse Parallax Rig
function CameraRig() {
  useFrame((state, delta) => {
    const { mouse, camera } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.8, delta * 2);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.6, delta * 2);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function ThreeCanvas() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#fafafa']} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#ec4899" />
        <directionalLight position={[0, 5, 5]} intensity={1} color="#ffffff" />

        <CameraRig />
        <FluidParticles count={180} />
        <UnicornFloatingShape />
      </Canvas>
    </div>
  );
}
