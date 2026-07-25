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
  title: "Oliveira Systems | Software, SaaS e Soluções Digitais",
  description:
    "A Oliveira Systems desenvolve produtos SaaS, sistemas empresariais e experiências digitais modernas, escaláveis e orientadas a resultados.",
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
      <body className="min-h-full flex flex-col">
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
