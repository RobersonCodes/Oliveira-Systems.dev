const cases = [
  {
    number: "01",
    name: "TireMax ERP",
    category: "Gestão automotiva",
    description:
      "Plataforma SaaS para centralizar ordens de serviço, estoque, clientes, veículos, financeiro e operação de centros automotivos.",
    href: "https://tiremax.vercel.app/",
    action: "Ver projeto",
  },
  {
    number: "02",
    name: "Oliveira Apply AI",
    category: "Inteligência aplicada",
    description:
      "Experiência digital para organizar candidaturas, analisar oportunidades e apoiar a busca por vagas com automação e inteligência artificial.",
    href: "https://oliveira-apply-ai-okbt.vercel.app/",
    action: "Ver projeto",
  },
  {
    number: "03",
    name: "Milwaukee Connect",
    category: "CRM empresarial",
    description:
      "Arquitetura para gestão de clientes, oportunidades, indicadores comerciais e processos internos em uma única plataforma.",
    href: "#contato",
    action: "Conversar sobre projetos",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      aria-labelledby="cases-title"
      className="bg-[#f2eee7] px-6 py-28 text-[#161614] md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-black/15 pb-16 lg:grid-cols-2">
          <p className="text-xs uppercase tracking-[0.34em] text-black/55">
            03 — Cases
          </p>

          <div>
            <h2
              id="cases-title"
              className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] leading-[0.9] tracking-[-0.045em]"
            >
              Produtos pensados para operações reais.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Uma seleção de soluções desenvolvidas pela Oliveira Systems para
              transformar processos em experiências digitais claras e
              escaláveis.
            </p>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 lg:grid-cols-3">
          {cases.map((project) => {
            const isExternal = project.href.startsWith("http");

            return (
              <article
                key={project.name}
                className="flex min-h-[470px] flex-col justify-between bg-[#f2eee7] p-8 transition-colors duration-500 hover:bg-[#ebe4da] md:p-10"
              >
                <div>
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-black/50">
                      {project.category}
                    </p>
                    <span className="text-xs tracking-[0.28em] text-[#8a693d]">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="mt-14 font-serif text-4xl tracking-[-0.035em] md:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-8 text-lg leading-8 text-black/60">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.26em] text-[#76572f] transition-transform duration-300 hover:translate-x-2"
                >
                  {project.action}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
