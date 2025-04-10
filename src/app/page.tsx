// page.tsx
'use client';
import SceneCanvas from '@/components/Three/SceneCanvas';

export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100%', height: '100%' }}>
      <SceneCanvas />
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', zIndex: 10, color: '#ffffff'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Protocol <span style={{ color: '#00e5ff' }}>2145</span></h1>
        <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>The Future of AI Begins Here.</p>
      </div>
    </main>
  );
}