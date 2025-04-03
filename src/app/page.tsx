import SceneCanvas from '@/components/Three/SceneCanvas';

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#fff', overflow: 'hidden' }}>
      <h1 style={{
        position: 'absolute',
        top: '5%',
        width: '100%',
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
        ⚡ Protocol 2145 ⚡
      </h1>
      <p style={{
        position: 'absolute',
        top: '12%',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#333'
      }}>
        A 5-part epic reawakening the future of human–AI symbiosis.
      </p>
      <SceneCanvas />
    </div>
  );
}