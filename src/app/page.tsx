"use client";
import { motion } from "framer-motion";
import SceneCanvas from "@/components/Three/SceneCanvas";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-[#060A1E] to-[#0F172A] overflow-hidden">
      <SceneCanvas />
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7ef0ff] to-[#ffffff] drop-shadow-xl"
        >
          Protocol 2145
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mt-4 text-center text-lg md:text-xl text-[#7ef0ff]/70"
        >
          The Future of AI Begins Here.
        </motion.p>
        <div className="mt-8 flex space-x-6">
          <button className="px-8 py-2 rounded-xl font-semibold text-[#0F172A] bg-[#7ef0ff] hover:bg-white shadow-xl transition duration-300">
            Enter
          </button>
          <button className="px-8 py-2 rounded-xl font-semibold text-[#7ef0ff] border border-[#7ef0ff] hover:bg-[#7ef0ff] hover:text-[#0F172A] shadow-xl transition duration-300">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}