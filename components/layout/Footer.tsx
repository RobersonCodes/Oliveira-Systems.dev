const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a09] px-6 py-10 text-[#f3efe7] md:px-12">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs uppercase tracking-[0.28em] text-[#c7a86a]">
          Oliveira Systems
        </p>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Oliveira Systems
        </p>
      </div>
    </footer>
  );
}
