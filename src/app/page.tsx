'use client';

import { useRouter } from 'next/navigation';
import SceneCanvas from '../../components/Three/SceneCanvas';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Overlay UI */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h1 style={{ color: '#FFFFFF', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Protocol 2145
        </h1>
        <p style={{ color: '#CCCCCC', fontSize: '1.2rem', marginBottom: '2rem' }}>
          The memory has begun.
        </p>
        <div style={{ display: 'flex', gap: '1rem', pointerEvents: 'auto' }}>
          <button
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
            onClick={() => router.push('/phase-one')}
          >
            Enter Phase 1
          </button>
          <button
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#4B5563',
              color: '#FFFFFF',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
            onClick={() => router.push('/about')}
          >
            About Us
          </button>
        </div>
      </div>

      {/* 3D canvas behind */}
      <SceneCanvas />
    </main>
  );
}