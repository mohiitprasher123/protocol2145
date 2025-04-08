'use client';

import React, { useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function ParticlesBackground() {
  const particles = useMemo(() => {
    const positions = new Float32Array(15000);
    for (let i = 0; i < 15000; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  const pointsRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta / 20;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.007}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}