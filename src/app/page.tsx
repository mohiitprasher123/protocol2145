'use client';
import SceneCanvas from '@/components/Three/SceneCanvas';
import { Exo_2 } from 'next/font/google';
import Link from 'next/link';

const exo2 = Exo_2({ subsets: ['latin'] });

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000', position: 'relative', overflow: 'hidden' }}>
      <SceneCanvas />
      <div style={{ position: 'absolute', top: '8%', width: '100%', textAlign: 'center', color: '#fff', pointerEvents: 'none', zIndex: 10 }}>
        <h1 className={exo2.className} style={{ fontSize: '3rem', letterSpacing: '4px' }}>
          ⚡ Protocol <span style={{ color: '#00ffff' }}>2145</span> ⚡
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
          The Future of AI Begins Here.
        </p>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', pointerEvents: 'auto' }}>
          <Link href="/enter">
            <button style={{ padding: '12px 30px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', cursor: 'pointer', fontSize: '1rem', transition: '0.3s' }}>
              Enter
            </button>
          </Link>
          <Link href="/about">
            <button style={{ padding: '12px 30px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.3)', color: '#00ffff', cursor: 'pointer', fontSize: '1rem', transition: '0.3s' }}>
              About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}