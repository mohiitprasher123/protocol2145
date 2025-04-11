'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const phrases = [
  "From the echoes of 2145,",
  "a whisper in the fabric of spacetime emerges.",
  "Humanity races towards the Singularity,",
  "where machines and minds unite.",
  "Protocol 2145 is your gateway—",
  "a beacon guiding the brave",
  "into the future you've always envisioned.",
  "Are you prepared to become one",
  "with the infinite?"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.5
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export default function Signal() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-[#0F172A] text-white overflow-hidden">
      <motion.div
        className="text-center text-3xl font-light max-w-3xl px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {phrases.map((line, idx) => (
          <motion.p key={idx} className="mb-2 tracking-wide font-mono" variants={textVariants}>
            {line}
          </motion.p>
        ))}
      </motion.div>

      <Link href="/">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5 }}
          className="mt-12 px-8 py-3 bg-transparent hover:bg-white hover:text-[#0F172A] transition-colors border border-white rounded font-mono tracking-widest"
        >
          Return Home
        </motion.button>
      </Link>
    </main>
  );
}