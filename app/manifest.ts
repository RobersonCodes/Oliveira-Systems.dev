import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Oliveira Systems",
    short_name: "Oliveira Systems",
    description:
      "Software, SaaS e soluções digitais modernas para operações reais.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0a",
    theme_color: "#0b0b0a",
    lang: "pt-BR",
  };
}
