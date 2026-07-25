"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="grid min-h-screen place-items-center bg-[#0b0b0a] px-6 text-[#f3efe7]">
          <div className="max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.34em] text-[#b99154]">
              Erro inesperado
            </p>
            <h1 className="mt-8 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-none">
              Não foi possível carregar esta experiência.
            </h1>
            <p className="mx-auto mt-8 max-w-lg text-lg leading-8 text-white/60">
              Tente novamente. Se o problema persistir, entre em contato com a
              Oliveira Systems.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-10 rounded-full border border-[#b99154]/60 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#d7b882] transition-colors hover:bg-[#b99154] hover:text-black"
            >
              Tentar novamente
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
