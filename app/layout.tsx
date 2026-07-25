import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oliveirasystems.dev"),
  title: {
    default: "Oliveira Systems | Software, SaaS e Soluções Digitais",
    template: "%s | Oliveira Systems",
  },
  description:
    "A Oliveira Systems desenvolve produtos SaaS, sistemas empresariais e experiências digitais modernas, escaláveis e orientadas a resultados.",
  applicationName: "Oliveira Systems",
  authors: [{ name: "Roberson de Oliveira" }],
  creator: "Oliveira Systems",
  publisher: "Oliveira Systems",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "desenvolvimento de software",
    "SaaS",
    "sistemas empresariais",
    "Next.js",
    "React",
    "automação com inteligência artificial",
    "APIs",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Oliveira Systems",
    title: "Oliveira Systems | Software, SaaS e Soluções Digitais",
    description:
      "Produtos SaaS, sistemas empresariais e experiências digitais modernas, escaláveis e orientadas a resultados.",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "Oliveira Systems — engenharia de produtos digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliveira Systems | Software, SaaS e Soluções Digitais",
    description:
      "Produtos SaaS, sistemas empresariais e experiências digitais modernas.",
    images: ["/images/hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="fixed left-6 top-6 z-[10000] -translate-y-24 rounded-full bg-[#f3efe7] px-5 py-3 text-sm font-medium text-[#0b0b0a] shadow-xl transition-transform focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
