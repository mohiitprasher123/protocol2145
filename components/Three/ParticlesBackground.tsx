"use client";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ParticlesBackground() {
  const particlesRef = useRef<THREE.Points>(null);
  const particles = new Float32Array(4000);

  for (let i = 0; i < 4000; i += 3) {
    particles[i] = (Math.random() - 0.5) * 50;
    particles[i + 1] = (Math.random() - 0.5) * 50;
    particles[i + 2] = (Math.random() - 0.5) * 50;
  }

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Points ref={particlesRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}