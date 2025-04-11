// src/app/signal/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Signal() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const launchDate = new Date('2025-05-01T00:00:00');
    const difference = launchDate.getTime() - new Date().getTime();
  
    let timeLeft: { [key: string]: number } = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <span key={interval} className="mx-2 text-4xl">
      {timeLeft[interval]} {interval}{" "}
    </span>
  ));

  return (
    <main className="relative flex flex-col items-center justify-center w-full h-screen bg-[#0F172A] text-white overflow-hidden">
      <h1 className="text-6xl font-bold animate-pulse">The memory has begun.</h1>
      
      <div className="mt-8 flex flex-col items-center justify-center">
        {timerComponents.length ? timerComponents : <span>Phase 1 has started!</span>}
      </div>

      <Link href="/">
        <button className="mt-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-xl">
          Return Home
        </button>
      </Link>
    </main>
  );
}