import SceneCanvas from '@/components/Three/SceneCanvas';

export default function Home() {
  return (
    <div style={{ 
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000', 
        overflow: 'hidden' 
      }}>
      <SceneCanvas />
      <div
        style={{
          position: 'absolute',
          zIndex: 10,
          textAlign: 'center',
          width: '100%',
          top: '5vh',
          color: 'white',
          pointerEvents: 'none',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          ⚡ Protocol 2145 ⚡
        </h1>
        <p style={{ fontSize: '1.1rem' }}>
          An AI Awakening.
        </p>
      </div>
    </div>
  );
}