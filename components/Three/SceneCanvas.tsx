'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

// 🔮 NeuralSphere Component explicitly fixed for TypeScript compatibility
function NeuralSphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const sphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      <points ref={pointsRef} geometry={sphereGeometry}>
        <pointsMaterial
          color="#00aaff"
          size={0.015}
          sizeAttenuation
          transparent
          depthWrite={false}
        />
      </points>

      <Html distanceFactor={10}>
        <div style={{ color: '#ffffff', textAlign: 'center', pointerEvents: 'none' }}>
          <h1 style={{ marginBottom: 0 }}>⚡ Protocol 2145 ⚡</h1>
          <p style={{ marginTop: 0 }}>Human–AI Symbiosis</p>
        </div>
      </Html>
    </group>
  );
}

// ✨ ParticlesBackground Component explicitly fixed
function ParticlesBackground() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleGeometry = new THREE.BufferGeometry();
  const count = 4000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
  }
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={particlesRef} geometry={particleGeometry}>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.5} />
    </points>
  );
}

// 🎬 Main Canvas explicitly corrected
export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 65 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle, #0b0f27 0%, #02050d 100%)',
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <ParticlesBackground />
        <NeuralSphere />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
}