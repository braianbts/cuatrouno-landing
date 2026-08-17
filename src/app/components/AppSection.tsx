import Image from "next/image";
import { WaIcon, WA_LINK } from "./icons";

const features = [
  { q: "¿Qué entreno hoy?", a: "El día, cada ejercicio, las series y la técnica. Sin buscar videos ni improvisar." },
  { q: "¿Qué como hoy?", a: "Cada comida con su horario y la lista de compras. Sin adivinar, sin improvisar." },
  { q: "¿Estoy progresando?", a: "Cargás tu peso y medidas; Braian ve tu evolución en tiempo real y ajusta el plan." },
  { q: "¿Y el cardio?", a: "Programado: cuándo, cuánto y a qué intensidad. Para que sumes sin quemarte." },
  { q: "¿Funciona en iPhone y Android?", a: "Sí, la app es compatible con ambos sistemas — todo desde el celular." },
];

export default function AppSection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-white/15 bg-[#080706] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <p className="reveal mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8413F]">Tu plan, siempre con vos</p>
        <h2 className="reveal d1 font-display mb-10 max-w-lg text-3xl font-black uppercase leading-[1.05] sm:text-4xl">
          Nada de PDFs perdidos ni rutinas en capturas.
        </h2>

        <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:items-start sm:gap-10">
          <div className="grayscale-photo reveal d2 mx-auto w-40 sm:mx-0 sm:w-full">
            <Image src="/mockup1cel.png" alt="App Cuatrouno" width={400} height={860} className="h-auto w-full" />
          </div>

          <div className="reveal d3">
            <p className="mb-6 max-w-md text-[15px] leading-relaxed text-zinc-400">
              Al arrancar con Braian recibís acceso a tu app personal: qué comer hoy, qué entrenar y cómo vas. Abrís el celular y está todo ahí.
            </p>
            <div className="border-t-2 border-white/15">
              {features.map((f) => (
                <div key={f.q} className="flex flex-col gap-1 border-b border-white/10 py-3.5 sm:flex-row sm:items-baseline sm:gap-4">
                  <p className="font-display shrink-0 text-[13px] font-black uppercase tracking-wide text-white sm:w-56">{f.q}</p>
                  <p className="text-[13px] leading-relaxed text-zinc-500">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-black uppercase tracking-widest text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
              >
                Ver la app
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-7 py-3.5 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.98]"
              >
                <WaIcon size={18} />
                Quiero mi plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
