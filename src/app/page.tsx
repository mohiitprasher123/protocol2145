import SceneCanvas from '@/components/Three/SceneCanvas';

export default function Home() {
  return (
    <>
      <SceneCanvas />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          paddingTop: '5vh',
          color: 'white',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>⚡ Protocol 2145 ⚡</h1>
        <p style={{ fontSize: '1.1rem' }}>
          A 5-part epic reawakening the future of human–AI symbiosis.
        </p>
      </div>
    </>
  );
}