'use client';

import SceneCanvas from '@/components/Three/SceneCanvas';

export default function Home() {
  return (
    <main style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <SceneCanvas />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: '#ffffff',
          marginTop: '40vh'
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>Protocol 2145</h1>
        <p style={{ fontSize: '1.2rem' }}>The Future of AI Begins Here.</p>
        <button style={{ margin: '1rem', padding: '10px 20px' }}>Enter</button>
        <button style={{ margin: '1rem', padding: '10px 20px' }}>About Us</button>
      </div>
    </main>
  );
}