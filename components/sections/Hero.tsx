import HeroBackground from "@/components/sections/hero/HeroBackground";
import HeroContent from "@/components/sections/hero/HeroContent";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#0b0b0a] px-6 pb-12 pt-32 text-[#f3efe7] md:px-12 md:pb-16"
    >
      <HeroBackground />
      <HeroOverlay />
      <HeroContent />
    </section>
  );
}
