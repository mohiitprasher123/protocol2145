'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import DNAHelix from '../DNAHelix';
import ParticlesBackground from './ParticlesBackground';
import { OrbitControls } from '@react-three/drei';

export default function SceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={2} />
        <directionalLight position={[0, 10, 10]} intensity={2.5} />
        <DNAHelix />
        <ParticlesBackground />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Suspense>
    </Canvas>
  );
}