"use client";

import { motion } from "framer-motion";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="inline-flex items-center gap-4 rounded-full border border-[#b99154]/60 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#d7b882] transition-all hover:bg-[#b99154] hover:text-black"
    >
      {children}
    </motion.a>
  );
}