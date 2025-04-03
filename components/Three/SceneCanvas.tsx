'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';
import Helix from './Helix/helix.js'; // ✅ Helix animation

function RotatingCube() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00ffff" wireframe />
    </mesh>
  );
}

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [5, 5, 5] }}
      style={{
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at top left, #0f0c29, #302b63, #24243e)',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <OrbitControls />
        <RotatingCube />
        <Helix />
      </Suspense>
    </Canvas>
  );
}