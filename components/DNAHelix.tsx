"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Group } from "three";

export default function DNAHelix() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  const particles = Array.from({ length: 100 }, (_, i) => {
    const angle = i * 0.2;
    const x = Math.sin(angle) * 1.5;
    const y = (i - 50) * 0.15;
    const z = Math.cos(angle) * 1.5;
    return { position: [x, y, z] };
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, idx) => (
        <mesh key={idx} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[0.07, 32, 32]} />
          <meshStandardMaterial emissive="#7ef0ff" emissiveIntensity={0.9} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}