'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function RotatingCube() {
  return (
    <mesh rotation={[45, 45, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00ffff" wireframe />
    </mesh>
  );
}

export default function SceneCanvas() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <RotatingCube />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}