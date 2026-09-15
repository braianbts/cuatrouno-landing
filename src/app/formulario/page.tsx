import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FormularioForm from "./FormularioForm";

export const metadata: Metadata = {
  title: "Formulario de alumno | Cuatrouno Training Club",
  description: "Contanos sobre tu salud, alimentación y entrenamiento para armar tu plan personalizado.",
};

export default function FormularioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080706] text-white">
      <div className="dot-grid pointer-events-none fixed inset-0 opacity-40" />

      {/* marca de agua */}
      <div
        className="pointer-events-none fixed left-1/2 top-1/2 w-[140vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.05] sm:w-[70vw]"
        aria-hidden="true"
      >
        <Image src="/assets/logo.png" alt="" width={1520} height={574} className="h-auto w-full object-contain" />
      </div>
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-[#080706] via-transparent to-[#080706]" />

      <header className="relative flex flex-col items-center gap-4 px-6 pt-12 pb-6 text-center sm:pt-16">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Cuatrouno Training Club"
            width={260}
            height={98}
            priority
            className="h-14 w-auto object-contain sm:h-20"
          />
        </Link>
        <div>
          <h1 className="font-heading text-2xl uppercase text-white sm:text-3xl">Ficha de alumno</h1>
          <p className="mx-auto mt-2 max-w-md text-[13px] leading-relaxed text-zinc-400 sm:text-sm">
            Completá estos datos para armar tu plan. Es rápido — solo lo esencial para arrancar.
          </p>
        </div>
      </header>

      <main className="relative px-4 pb-20 sm:px-6">
        <FormularioForm />
      </main>
    </div>
  );
}
