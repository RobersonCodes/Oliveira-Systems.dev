interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({
  children,
}: SectionLabelProps) {
  return (
    <p className="text-xs uppercase tracking-[0.34em] text-[#b99154]">
      {children}
    </p>
  );
}