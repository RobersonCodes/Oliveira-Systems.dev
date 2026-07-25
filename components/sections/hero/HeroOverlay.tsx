export default function HeroOverlay() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: [
          "radial-gradient(ellipse at center, transparent 48%, rgba(0, 0, 0, 0.14) 100%)",
          "linear-gradient(180deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.08) 34%, rgba(0, 0, 0, 0.02) 64%, rgba(0, 0, 0, 0.16) 100%)",
          "linear-gradient(90deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.58) 38%, rgba(0, 0, 0, 0.30) 68%, rgba(0, 0, 0, 0.10) 100%)",
        ].join(", "),
      }}
    />
  );
}
