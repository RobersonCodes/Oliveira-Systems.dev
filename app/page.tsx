import SmoothScroll from "@/components/animations/SmoothScroll";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import Cases from "@/components/sections/Cases";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Products from "@/components/sections/Products";
import Story from "@/components/sections/Story";

import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />

      <Navbar />

      <main id="main-content">
        <Hero />

        <Manifesto />

        <Story />

        <Products />

        <Cases />

        <CTA />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
