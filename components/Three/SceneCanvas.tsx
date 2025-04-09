'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import ParticlesBackground from './ParticlesBackground';
import { FuturisticSphere } from '../FuturisticSphere';
import { DNAHelix } from '../DNAHelix';

export default function SceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.2} position={[5, 10, 5]} />

      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <FuturisticSphere />
      </Float>

      <Float speed={1.5} rotationIntensity={0.6}>
        <DNAHelix />
      </Float>

      <ParticlesBackground />
    </Canvas>
  );
}