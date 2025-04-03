export default function Home() {
  return (
    <main style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '4rem'
    }}>
      <h1 style={{ fontSize: '3rem' }}>⚡ Protocol 2145 ⚡</h1>
      <p style={{ fontSize: '1.25rem', marginTop: '1rem', maxWidth: '600px' }}>
        A 5-part epic reawakening the future of human-AI symbiosis.
      </p>
    </main>
  );
}