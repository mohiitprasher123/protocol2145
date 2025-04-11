'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const textLines = [
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

const fadeInVariant = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 2, ease: "easeOut" } }
};

export default function Signal() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full h-screen bg-[#0F172A] text-white overflow-hidden">
      <div className="text-center space-y-3">
        {textLines.map((line, i) => (
          <motion.p
            key={i}
            className="text-2xl md:text-3xl font-light"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.5 }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <Link href="/">
        <motion.button
          className="mt-12 px-8 py-2 text-lg border border-white rounded-full hover:bg-white hover:text-[#0F172A] transition duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5, duration: 2 }}
        >
          Return Home
        </motion.button>
      </Link>
    </main>
  );
}