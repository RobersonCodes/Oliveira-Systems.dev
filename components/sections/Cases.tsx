const cases = [
  {
    number: "01",
    name: "TireMax ERP",
    category: "Gestão automotiva",
    challenge:
      "Centralizar a gestão de borracharias e centros automotivos em uma única plataforma.",
    solution:
      "SaaS para reunir operação, atendimento e gestão administrativa em um fluxo digital integrado.",
    resources: [
      "Ordens de serviço",
      "Estoque",
      "Clientes e veículos",
      "Financeiro",
      "Painel administrativo",
    ],
    technologies: ["Next.js", "PostgreSQL", "SaaS", "WhatsApp"],
    stage: "Produto funcional em evolução contínua.",
    href: "https://tiremax.vercel.app/",
    action: "Ver projeto",
  },
  {
    number: "02",
    name: "Oliveira Apply AI",
    category: "Inteligência aplicada",
    challenge:
      "Organizar candidaturas e tornar a análise de oportunidades mais clara durante a busca por vagas.",
    solution:
      "Experiência digital que combina organização, análise e automação para apoiar cada etapa das candidaturas.",
    resources: [
      "Organização de candidaturas",
      "Análise de oportunidades",
      "Automação de tarefas",
      "Autenticação",
      "Planos e pagamentos",
    ],
    technologies: ["Next.js", "IA", "OAuth", "Stripe"],
    stage: "Produto funcional disponível online.",
    href: "https://oliveira-apply-ai-okbt.vercel.app/",
    action: "Ver projeto",
  },
  {
    number: "03",
    name: "Milwaukee Connect",
    category: "CRM empresarial",
    challenge:
      "Concentrar clientes, oportunidades, indicadores comerciais e processos internos em um ambiente único.",
    solution:
      "Arquitetura empresarial para estruturar o relacionamento com clientes e dar visibilidade à operação comercial.",
    resources: [
      "Gestão de clientes",
      "Oportunidades",
      "Indicadores comerciais",
      "Processos internos",
      "Visão centralizada",
    ],
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    stage: "Case de arquitetura apresentado no portfólio.",
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
              Projetos que mostram como estratégia, arquitetura e experiência
              se transformam em soluções digitais concretas.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          {cases.map((project) => {
            const isExternal = project.href.startsWith("http");

            return (
              <article
                key={project.name}
                className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#ece6dc]"
              >
                <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="flex flex-col justify-between border-b border-black/10 p-8 lg:min-h-[560px] lg:border-b-0 lg:border-r md:p-12">
                    <div>
                      <div className="flex items-center justify-between gap-6">
                        <p className="text-xs uppercase tracking-[0.28em] text-black/50">
                          {project.category}
                        </p>
                        <span className="text-xs tracking-[0.28em] text-[#8a693d]">
                          {project.number}
                        </span>
                      </div>

                      <h3 className="mt-14 font-serif text-5xl tracking-[-0.04em] md:text-7xl">
                        {project.name}
                      </h3>
                      <p className="mt-10 text-xs uppercase tracking-[0.24em] text-[#76572f]">
                        Estágio atual
                      </p>
                      <p className="mt-3 max-w-md text-lg leading-8 text-black/65">
                        {project.stage}
                      </p>
                    </div>

                    <a
                      href={project.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="mt-12 inline-flex items-center gap-4 self-start text-xs uppercase tracking-[0.26em] text-[#76572f] transition-transform duration-300 hover:translate-x-2"
                    >
                      {project.action}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div className="grid gap-px bg-black/10 md:grid-cols-2">
                    <div className="bg-[#f2eee7] p-8 md:p-10">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#76572f]">
                        Desafio
                      </p>
                      <p className="mt-5 text-lg leading-8 text-black/65">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="bg-[#f2eee7] p-8 md:p-10">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#76572f]">
                        Solução
                      </p>
                      <p className="mt-5 text-lg leading-8 text-black/65">
                        {project.solution}
                      </p>
                    </div>

                    <div className="bg-[#f2eee7] p-8 md:p-10">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#76572f]">
                        Principais recursos
                      </p>
                      <ul className="mt-5 space-y-3">
                        {project.resources.map((resource) => (
                          <li
                            key={resource}
                            className="flex gap-3 leading-7 text-black/65"
                          >
                            <span aria-hidden="true" className="text-[#8a693d]">
                              —
                            </span>
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#f2eee7] p-8 md:p-10">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#76572f]">
                        Tecnologias
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-black/60"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
