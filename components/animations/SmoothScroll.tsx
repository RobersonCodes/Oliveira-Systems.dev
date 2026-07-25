"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;

    const frame = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(frame);
    };

    animationFrameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
