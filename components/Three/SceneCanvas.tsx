'use client';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import {
  Mesh,
  TextureLoader,
  EquirectangularReflectionMapping,
  SRGBColorSpace,
  Fog,
  Color,
} from 'three';

// 🔷 Rotating Cube Component
function RotatingCube() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00ffff" roughness={0.5} metalness={0.7} />
    </mesh>
  );
}

// 🌌 Background Texture
function SceneBackground() {
  const texture = useLoader(TextureLoader, '/cosmic_background.jpg');
  texture.mapping = EquirectangularReflectionMapping;
  texture.colorSpace = SRGBColorSpace;
  return <primitive object={texture} attach="background" />;
}

// 🪐 Main Canvas Scene
export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
      onCreated={({ scene }) => {
        scene.fog = new Fog(new Color('#0d0d1f'), 10, 40); // 🌫️ Adds depth with a cosmic fog
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <SceneBackground />
        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
        />
        <RotatingCube />
        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}