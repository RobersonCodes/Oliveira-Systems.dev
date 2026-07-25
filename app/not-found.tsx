import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#0b0b0a] px-6 text-[#f3efe7]">
      <div className="max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.34em] text-[#b99154]">
          Erro 404
        </p>
        <h1 className="mt-8 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-none">
          Página não encontrada.
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-lg leading-8 text-white/60">
          O endereço pode ter mudado ou não estar mais disponível.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full border border-[#b99154]/60 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#d7b882] transition-colors hover:bg-[#b99154] hover:text-black"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
