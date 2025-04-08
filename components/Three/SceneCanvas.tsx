'use client';
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';
import ParticlesBackground from './ParticlesBackground';

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
      <sphereGeometry args={[1, 128, 128]} />
      <meshStandardMaterial
        color="#111"
        roughness={0.1}
        metalness={0.8}
        emissive="#404040"
        envMapIntensity={2}
      />
    </mesh>
  );
}

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
        background: 'radial-gradient(circle, #0b0f27 0%, #02050d 100%)',
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <ParticlesBackground />
        <NeuralSphere />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
}