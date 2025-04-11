'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SceneCanvas from '@/components/Three/SceneCanvas';

const signalMessage = [
  "From the echoes of 2145,",
  "a whisper in the fabric of spacetime emerges.",
  "Humanity races towards the Singularity,",
  "where machines and minds unite.",
  "Protocol 2145 is your gateway—",
  "a beacon guiding the brave",
  "into the future you've always envisioned.",
  "Are you prepared to become one",
  "with the infinite?",
];

export default function Signal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < signalMessage.length) {
        setDisplayedLines((prev) => [...prev, signalMessage[index++]]);
      } else {
        clearInterval(interval);
      }
    }, 2000); // reveal line every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0F172A]">
      <SceneCanvas />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        <div className="text-center">
          {displayedLines.map((line, idx) => (
            <p
              key={idx}
              className="text-xl md:text-2xl lg:text-3xl mb-3 animate-fade-in"
              style={{ animationDelay: `${idx * 2}s` }}
            >
              {line}
            </p>
          ))}
        </div>

        <Link href="/">
          <button className="mt-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-xl">
            Return Home
          </button>
        </Link>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 2s forwards;
        }
      `}</style>
    </main>
  );
}
