"use client";

import { motion } from "framer-motion";

export default function HeroCTA() {
  return (
    <motion.a
      href="#historia"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.05,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ x: 8 }}
      whileTap={{ scale: 0.97 }}
      className="mt-12 inline-flex items-center gap-5 text-xs uppercase tracking-[0.32em] text-[#d0b17d]"
    >
      <motion.span
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="grid h-16 w-16 place-items-center rounded-full border border-[#b99154]/60"
      >
        ↓
      </motion.span>

      Explorar
    </motion.a>
  );
}
