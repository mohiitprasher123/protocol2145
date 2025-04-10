"use client";
import SceneCanvas from "@/components/Three/SceneCanvas";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <SceneCanvas />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          className="text-5xl font-bold text-[#7ef0ff] pointer-events-auto">
          Protocol <span className="text-white">2145</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }} 
          className="mt-4 text-lg text-gray-300 pointer-events-auto">
          The Future of AI Begins Here.
        </motion.p>
        <div className="mt-8 space-x-4 pointer-events-auto">
          <button className="px-4 py-2 border border-[#7ef0ff] text-[#7ef0ff] rounded-lg transition hover:bg-[#7ef0ff] hover:text-black">
            Enter
          </button>
          <button className="px-4 py-2 border border-[#7ef0ff] text-[#7ef0ff] rounded-lg transition hover:bg-[#7ef0ff] hover:text-black">
            About Us
          </button>
        </div>
      </div>
    </main>
  );
}