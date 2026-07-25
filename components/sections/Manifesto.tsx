"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a09] px-8 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,145,84,.12),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .35 }}
        transition={{
          duration: 1.3,
          ease: [0.22,1,0.36,1]
        }}
        className="relative z-10 max-w-6xl"
      >
        <p className="mb-12 text-center text-xs uppercase tracking-[.45em] text-[#b99154]">
          Manifesto
        </p>

        <h2 className="text-center font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-[-.05em]">
          Não desenvolvemos
          <br />
          apenas software.
        </h2>

        <p className="mx-auto mt-16 max-w-3xl text-center text-xl leading-10 text-white/55">
          Construímos produtos digitais que simplificam processos,
          aumentam produtividade e ajudam empresas a crescer com tecnologia
          criada para durar.
        </p>
      </motion.div>
    </section>
  );
}