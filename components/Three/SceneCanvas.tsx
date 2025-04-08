'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import ParticlesBackground from './ParticlesBackground';
import { Mesh } from 'three';

function NeuralSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
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
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1.5} position={[10, 10, 5]} />
        <NeuralSphere />
        <ParticlesBackground />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}