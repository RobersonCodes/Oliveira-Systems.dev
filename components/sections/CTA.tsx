export default function CTA() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative overflow-hidden bg-[#0a0a09] px-6 py-28 text-[#f3efe7] md:px-12 md:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(185,145,84,.18),transparent_38%)]"
      />

      <div className="relative mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
        <p className="text-xs uppercase tracking-[0.34em] text-[#b99154]">
          04 — Contato
        </p>

        <div>
          <h2
            id="contato-title"
            className="max-w-5xl font-serif text-[clamp(3rem,7vw,8rem)] leading-[0.9] tracking-[-0.05em]"
          >
            Vamos construir o próximo projeto.
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55 md:text-xl">
            Produtos SaaS, sistemas empresariais e experiências digitais
            desenvolvidos com clareza, tecnologia e visão de longo prazo.
          </p>

          <button
            type="button"
            disabled
            aria-describedby="contato-status"
            className="mt-12 inline-flex cursor-not-allowed items-center gap-4 rounded-full border border-[#b99154]/40 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#d7b882]/65"
          >
            Canal de contato em definição
          </button>
          <p id="contato-status" className="mt-4 text-sm text-white/40">
            Os dados oficiais de contato serão disponibilizados em breve.
          </p>
        </div>
      </div>
    </section>
  );
}
