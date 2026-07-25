"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const links = [
  { name: "Início", href: "#inicio" },
  { name: "História", href: "#historia" },
  { name: "Produtos", href: "#produtos" },
  { name: "Cases", href: "#cases" },
];

const mobileLinks = [...links, { name: "Contato", href: "#contato" }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-black/45 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 md:px-12">
        <a
          href="#inicio"
          aria-label="Voltar ao início"
          onClick={closeMenu}
          className="text-xs font-medium uppercase tracking-[0.28em] text-[#c7a86a] transition-opacity duration-300 hover:opacity-75 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86a] md:text-sm md:tracking-[0.35em]"
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
              className="group relative text-sm text-white/75 transition-colors duration-300 hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86a]"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c7a86a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#c7a86a]/60 text-[#d7b882] transition-colors hover:border-[#c7a86a] hover:bg-[#c7a86a] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86a] lg:hidden"
        >
          <span className="sr-only">{menuOpen ? "Fechar" : "Abrir"}</span>
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition-transform ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <a
          href="#contato"
          className="hidden rounded-full border border-[#c7a86a]/60 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#d7b882] transition-all duration-300 hover:border-[#c7a86a] hover:bg-[#c7a86a] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86a] lg:inline-flex"
        >
          Contato
        </a>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação principal mobile"
          className="border-t border-white/10 bg-[#0a0a09]/95 px-6 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden"
        >
          <ul className="mx-auto flex max-w-[1500px] flex-col">
            {mobileLinks.map((link) => (
              <li key={link.href} className="border-b border-white/10 last:border-0">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-4 text-sm uppercase tracking-[0.24em] text-white/75 transition-colors hover:text-[#d7b882] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#c7a86a]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
