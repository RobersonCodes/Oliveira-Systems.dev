"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
