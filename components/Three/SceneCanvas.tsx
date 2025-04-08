'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import ParticlesBackground from './ParticlesBackground';

export default function SceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 65 }}>
      <color attach="background" args={['#010409']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <Suspense fallback={null}>
        <ParticlesBackground />
        <Sphere args={[1, 100, 200]} scale={1.5}>
          <MeshDistortMaterial
            color="#121212"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.7}
          />
        </Sphere>
      </Suspense>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}