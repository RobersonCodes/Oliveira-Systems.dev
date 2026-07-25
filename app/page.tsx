import SmoothScroll from "@/components/animations/SmoothScroll";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import Cases from "@/components/sections/Cases";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Products from "@/components/sections/Products";
import Story from "@/components/sections/Story";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Oliveira Systems",
  url: "https://www.oliveirasystems.dev",
  logo: "https://www.oliveirasystems.dev/favicon.ico",
  founder: {
    "@type": "Person",
    name: "Roberson de Oliveira",
  },
  description:
    "Desenvolvimento de produtos SaaS, sistemas empresariais e experiências digitais.",
  email: "mailto:roberson_sl@hotmail.com",
  areaServed: "BR",
};

export default function Home() {
  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
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
