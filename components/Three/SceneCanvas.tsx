'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
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
      <group position={[0, -0.5, 0]}>
        <FuturisticSphere />
        <DNAHelix />
      </group>
      <ParticlesBackground />
    </Canvas>
  );
}