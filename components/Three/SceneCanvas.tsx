'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';

// 🌐 Elegant Central Neural Sphere
function NeuralSphere() {
  const sphereRef = useRef<Mesh>(null);
  useFrame(() => {
    if (sphereRef.current) sphereRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={sphereRef}>
      <Sphere args={[1.5, 100, 100]} scale={1.4}>
        <MeshDistortMaterial
          color="#74b9ff"
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.95}
        />
      </Sphere>

      <Html distanceFactor={10}>
        <div style={{ color: '#ffffff', textAlign: 'center', pointerEvents: 'none' }}>
          <h2>⚡ Protocol 2145 ⚡</h2>
          <p>Explore AI–Human Symbiosis</p>
        </div>
      </Html>
    </mesh>
  );
}

// 🌠 Background
function Background() {
  return (
    <Stars radius={50} depth={100} count={3000} factor={4} fade speed={0.5} />
  );
}

// 🖥️ Main Scene
export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />

      <Suspense fallback={null}>
        <Background />
        <NeuralSphere />
      </Suspense>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}