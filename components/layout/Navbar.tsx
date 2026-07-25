"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Início", href: "#inicio" },
  { name: "História", href: "#historia" },
  { name: "Produtos", href: "#produtos" },
  { name: "Cases", href: "#cases" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/45 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 md:px-12">
        <a
          href="#inicio"
          aria-label="Voltar ao início"
          className="text-xs font-medium uppercase tracking-[0.28em] text-[#c7a86a] transition-opacity duration-300 hover:opacity-75 md:text-sm md:tracking-[0.35em]"
        >
          Oliveira Systems
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-10 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm text-white/75 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c7a86a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-full border border-[#c7a86a]/60 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-[#d7b882] transition-all duration-300 hover:border-[#c7a86a] hover:bg-[#c7a86a] hover:text-black md:px-6 md:text-xs md:tracking-[0.25em]"
        >
          Contato
        </a>
      </div>
    </motion.header>
  );
}