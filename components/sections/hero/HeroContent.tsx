"use client";

import { motion } from "framer-motion";

import HeroCTA from "@/components/sections/hero/HeroCTA";
import HeroScroll from "@/components/sections/hero/HeroScroll";

export default function HeroContent() {
  return (
    <div className="relative z-10 grid w-full items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 text-xs uppercase tracking-[0.34em] text-[#c3a56d]"
        >
          Digital Engineering Studio
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 1.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl font-serif text-[clamp(3.8rem,8.3vw,9rem)] leading-[0.86] tracking-[-0.045em]"
        >
          Toda empresa
          <br />
          tem uma <span className="italic text-[#b99154]">história.</span>
          <br />
          A próxima pode
          <br />
          <span className="italic text-[#b99154]">começar aqui.</span>
        </motion.h1>

        <HeroCTA />
      </div>

      <HeroScroll />
    </div>
  );
}
