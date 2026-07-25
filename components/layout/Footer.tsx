const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

const externalLinkClass =
  "text-sm leading-6 text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86a]";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a09] px-6 py-10 text-[#f3efe7] md:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <section aria-labelledby="footer-brand-title">
            <h2
              id="footer-brand-title"
              className="text-xs uppercase tracking-[0.28em] text-[#c7a86a]"
            >
              Oliveira Systems
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              Desenvolvimento de Software, SaaS e Soluções com Inteligência
              Artificial.
            </p>
            <address className="mt-5 space-y-2 text-sm not-italic leading-6 text-white/70">
              <p>São Leopoldo – RS, Brasil</p>
              <p>CNPJ: 66.792.651/0001-70</p>
            </address>
            <p className="mt-8 text-sm leading-6 text-white/60">
              © 2026 Oliveira Systems. Todos os direitos reservados.
            </p>
          </section>

          <section aria-labelledby="footer-contact-title">
            <h2
              id="footer-contact-title"
              className="text-xs uppercase tracking-[0.28em] text-[#c7a86a]"
            >
              Contato
            </h2>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/5551991640903"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar com a Oliveira Systems pelo WhatsApp"
                  className={`mt-2 inline-block ${externalLinkClass}`}
                >
                  +55 (51) 99164-0903
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  GitHub
                </p>
                <a
                  href="https://github.com/RobersonCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir o perfil da Oliveira Systems no GitHub"
                  className={`mt-2 inline-block ${externalLinkClass}`}
                >
                  github.com/RobersonCodes
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/roberson-de-oliveira-tecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir o perfil da Oliveira Systems no LinkedIn"
                  className={`mt-2 inline-block ${externalLinkClass}`}
                >
                  linkedin.com/in/roberson-de-oliveira-tecnologia
                </a>
              </li>
              <li>
                <a href="#contato" className={externalLinkClass}>
                  Falar sobre um projeto
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-institutional-title">
            <h2
              id="footer-institutional-title"
              className="text-xs uppercase tracking-[0.28em] text-[#c7a86a]"
            >
              Institucional
            </h2>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="text-sm text-white/70">
                  Política de Privacidade
                </p>
                <span
                  aria-disabled="true"
                  className="mt-1 inline-block text-xs uppercase tracking-[0.18em] text-white/50"
                >
                  Em breve
                </span>
              </li>
              <li>
                <p className="text-sm text-white/70">Termos de Uso</p>
                <span
                  aria-disabled="true"
                  className="mt-1 inline-block text-xs uppercase tracking-[0.18em] text-white/50"
                >
                  Em breve
                </span>
              </li>
            </ul>
          </section>
        </div>

        <nav
          aria-label="Navegação do rodapé"
          className="mt-12 border-t border-white/10 pt-8"
        >
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86a]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
