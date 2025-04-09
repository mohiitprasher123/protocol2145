'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function DNAHelix() {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 4;
    }
  });

  const balls = Array.from({ length: 40 }, (_, i) => ({
    position: [Math.sin(i * 0.2) * 0.8, (i - 20) * 0.1, Math.cos(i * 0.2) * 0.8] as [number, number, number],
  }));

  return (
    <group ref={ref} position={[0, 1, 0]}>
      {balls.map((ball, idx) => (
        <mesh key={idx} position={ball.position}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
}