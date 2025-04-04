'use client';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import { Mesh, TextureLoader, EquirectangularReflectionMapping, SRGBColorSpace, Vector3 } from 'three';

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

// 🌌 Background Loader
function SceneBackground() {
  const texture = useLoader(TextureLoader, '/cosmic_background.jpg');
  texture.mapping = EquirectangularReflectionMapping;
  texture.colorSpace = SRGBColorSpace;
  return <primitive object={texture} attach="background" />;
}

// ✨ Floating Particles Component
function FloatingParticles() {
  const particlesCount = 500;
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 40;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  return (
    <Points positions={particles} stride={3} frustumCulled>
      <PointMaterial color="white" size={0.05} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

// 🪐 Main Canvas
export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Suspense fallback={null}>
        <SceneBackground />
        <FloatingParticles />
        <RotatingCube />
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
