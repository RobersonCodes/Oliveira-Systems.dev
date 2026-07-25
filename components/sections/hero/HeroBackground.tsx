"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      videoRef.current?.pause();
    }
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_72%_30%,rgba(190,150,88,0.16),transparent_26%),linear-gradient(135deg,#0a0a09_0%,#171511_55%,#090909_100%)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-[position:58%_center] md:bg-center"
        style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
      />

      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
        animate={{
          scale: shouldReduceMotion ? 1 : [1, 1.03, 1],
        }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] motion-reduce:hidden md:object-center"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>
    </div>
  );
}
