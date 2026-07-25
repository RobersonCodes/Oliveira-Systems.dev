"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="historia"
      className="flex min-h-screen items-center overflow-hidden bg-[#f2eee7] px-6 py-24 text-[#161614] md:px-12"
    >
      <div className="mx-auto grid w-full max-w-[1500px] gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs uppercase tracking-[0.34em] text-black/55">
            01 — O crescimento
          </p>
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-[clamp(3rem,6vw,7rem)] leading-[0.92] tracking-[-0.04em]"
          >
            Empresas crescem.
            <br />
            Processos evoluem.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mt-10 max-w-xl text-lg leading-8 text-black/65 md:text-xl">
              Chega um momento em que planilhas, controles manuais e sistemas
              genéricos deixam de acompanhar o ritmo do negócio.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/65 md:text-xl">
              É nesse momento que a tecnologia precisa evoluir junto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16 origin-left border-t border-black/20 pt-8"
          >
            <p className="max-w-lg font-serif text-3xl leading-tight md:text-5xl">
              Crescer sem estrutura transforma oportunidade em complexidade.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}