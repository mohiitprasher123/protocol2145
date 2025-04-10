'use client';

import SceneCanvas from '@/components/Three/SceneCanvas';

export default function Home() {
  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Your 3D Canvas */}
      <SceneCanvas />

      {/* UI Elements (Protocol 2145, buttons, etc.) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h1 style={{ fontSize: '4rem', color: '#00e5ff', marginBottom: '1rem', pointerEvents: 'auto' }}>
          Protocol <span style={{ color: '#fff' }}>2145</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#00e5ff', marginBottom: '2rem', pointerEvents: 'auto' }}>
          The Future of AI Begins Here.
        </p>
        <div style={{ display: 'flex', gap: '1rem', pointerEvents: 'auto' }}>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#00e5ff', color: '#000', borderRadius: '8px' }}>
            Enter
          </button>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#7dd3fc', color: '#000', borderRadius: '8px' }}>
            About Us
          </button>
        </div>
      </div>
    </main>
  );
}