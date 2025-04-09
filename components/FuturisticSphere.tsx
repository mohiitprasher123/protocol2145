'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FuturisticSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta / 4;
      meshRef.current.rotation.x += delta / 10;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.5, 128, 128]} />
      <meshPhysicalMaterial
        color="#6654f1"
        emissive="#22194d"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}