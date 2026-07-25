"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    number: "01",
    title: "SaaS sob medida",
    description:
      "Produtos digitais escaláveis, preparados para autenticação, planos, pagamentos, gestão de usuários e crescimento contínuo.",
    benefit: "Uma base digital pronta para evoluir com o negócio.",
  },
  {
    number: "02",
    title: "Sistemas empresariais",
    description:
      "Soluções para organizar operações, vendas, estoque, clientes, financeiro e processos internos.",
    benefit: "Mais clareza e controle sobre a operação.",
  },
  {
    number: "03",
    title: "Automação com inteligência artificial",
    description:
      "Integrações com IA para atendimento, análise, geração de conteúdo, produtividade e automação de tarefas.",
    benefit: "Tecnologia aplicada a rotinas que exigem agilidade.",
  },
  {
    number: "04",
    title: "Plataformas web de alta performance",
    description:
      "Aplicações responsivas, rápidas e modernas, desenvolvidas com foco em experiência do usuário e conversão.",
    benefit: "Experiências consistentes em diferentes dispositivos.",
  },
  {
    number: "05",
    title: "APIs e integrações",
    description:
      "Conexão entre sistemas, bancos de dados, pagamentos, WhatsApp, serviços externos e ferramentas empresariais.",
    benefit: "Processos conectados com menos trabalho manual.",
  },
  {
    number: "06",
    title: "Modernização de sistemas",
    description:
      "Evolução de aplicações antigas, melhoria de arquitetura, interface, desempenho, segurança e manutenção.",
    benefit: "Software mais sustentável para os próximos ciclos.",
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      aria-labelledby="produtos-title"
      className="overflow-hidden bg-[#0a0a09] px-6 py-28 text-[#f3efe7] md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.34em] text-[#b99154]"
          >
            02 — Soluções
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              id="produtos-title"
              className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] leading-[0.9] tracking-[-0.045em]"
            >
              Tecnologia criada para existir no mundo real.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              Soluções digitais construídas para organizar operações, conectar
              processos e sustentar a evolução de cada negócio.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex min-h-[390px] flex-col justify-between rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_85%_10%,rgba(185,145,84,.13),transparent_34%),rgba(255,255,255,.025)] p-8 transition-colors duration-500 hover:border-[#b99154]/35 hover:bg-white/[.045] md:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                    Solução
                  </p>
                  <span className="text-xs tracking-[0.28em] text-[#b99154]">
                    {solution.number}
                  </span>
                </div>

                <h3 className="mt-12 max-w-sm font-serif text-4xl leading-[1.02] tracking-[-0.035em]">
                  {solution.title}
                </h3>
                <p className="mt-7 text-base leading-7 text-white/55">
                  {solution.description}
                </p>
              </div>

              <div className="mt-12 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#b99154]">
                  Benefício
                </p>
                <p className="mt-3 leading-7 text-white/70">
                  {solution.benefit}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
