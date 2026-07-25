"use client";

import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 1,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="hidden justify-end lg:flex"
    >
      <div className="flex items-center gap-5">
        <span className="text-xs tracking-[0.28em] text-[#b99154]">01</span>

        <div className="h-48 w-px bg-white/20">
          <motion.div
            animate={{ height: ["20%", "100%", "20%"] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-px bg-[#b99154]"
          />
        </div>

        <span className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.32em] text-white/50">
          Role para explorar
        </span>
      </div>
    </motion.div>
  );
}
