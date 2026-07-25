"use client";

import { motion } from "framer-motion";

const products = [
  {
    number: "01",
    name: "TireMax ERP",
    category: "Gestão automotiva",
    description:
      "Uma plataforma completa para borracharias e centros automotivos controlarem ordens de serviço, estoque, clientes, veículos, financeiro e operação.",
    technologies: ["Next.js", "PostgreSQL", "SaaS", "WhatsApp"],
    href: "https://tiremax.vercel.app/",
    background:
      "bg-[radial-gradient(circle_at_80%_15%,rgba(193,150,82,0.20),transparent_30%),linear-gradient(135deg,#17140f_0%,#090909_70%)]",
  },
  {
    number: "02",
    name: "Oliveira Apply AI",
    category: "Inteligência aplicada",
    description:
      "Uma experiência inteligente para organizar candidaturas, analisar oportunidades e acelerar a busca por vagas com automação e inteligência artificial.",
    technologies: ["Next.js", "IA", "OAuth", "Stripe"],
    href: "https://oliveira-apply-ai-okbt.vercel.app/",
    background:
      "bg-[radial-gradient(circle_at_15%_20%,rgba(112,110,190,0.22),transparent_32%),linear-gradient(135deg,#11111a_0%,#080809_70%)]",
  },
  {
    number: "03",
    name: "Milwaukee Connect",
    category: "CRM empresarial",
    description:
      "Arquitetura empresarial para gestão de clientes, oportunidades, indicadores comerciais e processos internos em uma única plataforma.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    href: "#contato",
    background:
      "bg-[radial-gradient(circle_at_75%_25%,rgba(75,125,120,0.24),transparent_32%),linear-gradient(135deg,#0d1715_0%,#080909_70%)]",
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
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
            02 — Produtos
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
            <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] leading-[0.9] tracking-[-0.045em]">
              Tecnologia criada para existir no mundo real.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              Produtos próprios, arquiteturas escaláveis e experiências
              digitais construídas para resolver problemas concretos.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 space-y-8">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative min-h-[650px] overflow-hidden rounded-[2rem] border border-white/10 p-7 md:p-12 lg:p-16 ${product.background}`}
            >
              <motion.div
                className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
                whileHover={{ scale: 1.15, rotate: 12 }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10 flex min-h-[530px] flex-col justify-between">
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      {product.category}
                    </p>

                    <h3 className="mt-5 font-serif text-5xl tracking-[-0.04em] md:text-7xl lg:text-8xl">
                      {product.name}
                    </h3>
                  </div>

                  <span className="text-sm tracking-[0.3em] text-[#b99154]">
                    {product.number}
                  </span>
                </div>

                <div className="grid items-end gap-12 lg:grid-cols-2">
                  <p className="max-w-2xl text-xl leading-9 text-white/65 md:text-2xl">
                    {product.description}
                  </p>

                  <div className="lg:justify-self-end">
                    <div className="mb-10 flex max-w-md flex-wrap gap-3">
                      {product.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/55"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={product.href}
                      target={
                        product.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        product.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      whileHover={{ x: 8 }}
                      className="inline-flex items-center gap-5 text-xs uppercase tracking-[0.3em] text-[#d0b17d]"
                    >
                      Conhecer produto

                      <span className="grid h-14 w-14 place-items-center rounded-full border border-[#b99154]/50 transition-colors duration-300 group-hover:bg-[#b99154] group-hover:text-black">
                        ↗
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}