'use client';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment, Sphere, MeshDistortMaterial, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import {
  TextureLoader,
  EquirectangularReflectionMapping,
  SRGBColorSpace,
  Fog,
  Color,
  Mesh,
} from 'three';
// explicitly trigger git detection
// 🔷 Neural Sphere Component
function NeuralModel() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0}
        />
      </Sphere>

      <Html distanceFactor={10}>
        <div style={{ color: 'white', textAlign: 'center', cursor: 'pointer' }}>
          ⚡ Protocol 2145 ⚡
          <br />
          <small>Click to explore</small>
        </div>
      </Html>
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
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
        <NeuralModel />
        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}