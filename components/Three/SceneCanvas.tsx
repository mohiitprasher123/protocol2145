'use client';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Mesh, TextureLoader, EquirectangularReflectionMapping } from 'three';

// ✅ Rotating Cube
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
      <boxGeometry args={[12, 2, 21]} />
      <meshStandardMaterial color="#00ffff" />
    </mesh>
  );
}

// ✅ Background Loader
function SceneBackground() {
  const texture = useLoader(TextureLoader, '/cosmic_background.jpg');
  texture.mapping = EquirectangularReflectionMapping;
  return <primitive object={texture} attach="background" />;
}

// ✅ Canvas with Background + Cube
export default function SceneCanvas() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <SceneBackground />
        <RotatingCube />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}