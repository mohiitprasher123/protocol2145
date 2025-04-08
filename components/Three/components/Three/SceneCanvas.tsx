'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';
import ParticlesBackground from '../../ParticlesBackground';

// Beautiful Neural Sphere Component
function NeuralSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshPhysicalMaterial
        color="#88e8f2"
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={0.1}
        metalness={0.9}
        transmission={0.8}
        thickness={0.5}
      />
    </mesh>
  );
}

// Complete SceneCanvas component
export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 65 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at center, #1c2541 0%, #0b132b 100%)',
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <ParticlesBackground />
        <NeuralSphere />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
      />
    </Canvas>
  );
}