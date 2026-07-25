import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(0,0,0,.35)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}