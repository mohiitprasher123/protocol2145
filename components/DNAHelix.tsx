'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Group } from 'three';

const DNAHelix = () => {
  const groupRef = useRef<Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const strands = Array.from({ length: 80 }, (_, i) => {
    const angle = i * 0.2;
    const x = Math.sin(angle) * 2;
    const y = (i - 40) * 0.1;
    const z = Math.cos(angle) * 2;

    return (
      <Sphere key={i} args={[0.1, 32, 32]} position={[x, y, z]}>
        <MeshDistortMaterial
          color="#00e5ff"
          emissive="#00ffff"
          emissiveIntensity={1}
          speed={3}
          distort={0.3}
        />
      </Sphere>
    );
  });

  return <group ref={groupRef}>{strands}</group>;
};

export default DNAHelix;