'use client';
import SceneCanvas from '@/components/Three/SceneCanvas';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h1 className="text-5xl font-bold text-white mb-4">Protocol 2145</h1>
        <p className="text-xl text-gray-300 mb-8">The Future of AI Begins Here.</p>
        <div className="flex space-x-4 pointer-events-auto">
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Enter</button>
          <button className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded">About Us</button>
        </div>
      </div>
      <SceneCanvas />
    </main>
  );
}