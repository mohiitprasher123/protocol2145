"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DNAHelix from "../DNAHelix";
import ParticlesBackground from "./ParticlesBackground";
import { OrbitControls } from "@react-three/drei";

export default function SceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 10, 5]} intensity={1.5} />
        <DNAHelix />
        <ParticlesBackground />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Suspense>
    </Canvas>
  );
}