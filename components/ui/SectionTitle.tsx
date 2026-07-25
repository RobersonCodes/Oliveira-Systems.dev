import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`font-serif leading-[0.9] tracking-[-0.045em] text-[clamp(3rem,6vw,7rem)] ${className}`}
    >
      {children}
    </h2>
  );
}