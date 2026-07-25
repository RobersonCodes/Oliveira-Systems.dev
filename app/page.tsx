import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Story from "@/components/sections/Story";
import Products from "@/components/sections/Products";

import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />

      <Navbar />

      <main>
        <Hero />

        <Manifesto />

        <Story />

        <Products />
      </main>
    </SmoothScroll>
  );
}