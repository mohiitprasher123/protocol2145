'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FuturisticSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta / 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial 
        metalness={1} 
        roughness={0.15} 
        color="#5555ff" 
        envMapIntensity={0.9} 
      />
    </mesh>
  );
}