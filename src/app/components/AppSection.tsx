import Image from "next/image";
import { WaIcon, WA_LINK } from "./icons";

const features = [
  {
    q: "¿Qué entreno hoy?",
    a: "El día, cada ejercicio, las series y la técnica. Sin buscar videos ni improvisar.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4v16M18 4v16M2 9h4M18 9h4M2 15h4M18 15h4M6 9h12M6 15h12" />
      </svg>
    ),
  },
  {
    q: "¿Qué como hoy?",
    a: "Cada comida con su horario y la lista de compras. Sin adivinar, sin improvisar.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    q: "¿Estoy progresando?",
    a: "Cargás tu peso y medidas; Braian ve tu evolución en tiempo real y ajusta el plan.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    q: "¿Y el cardio?",
    a: "Programado: cuándo, cuánto y a qué intensidad. Para que sumes sin quemarte.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
  },
];

export default function AppSection() {
  return (
    <section className="relative overflow-hidden bg-[#080706] py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(196,26,26,.08), transparent 60%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">

        {/* header */}
        <div className="reveal mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">
            Tu plan, siempre con vos
          </p>
          <h2 className="font-display text-3xl font-black uppercase leading-[1.05] sm:text-4xl lg:text-5xl">
            Nada de PDFs perdidos<br />
            <span className="text-[#C41A1A]">ni rutinas en capturas.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-zinc-400">
            Al arrancar con Braian recibís acceso a tu app personal: qué comer hoy, qué entrenar y cómo vas. Abrís el celular y está todo ahí.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* phones */}
          <div className="reveal relative order-1 mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:mx-0">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(ellipse at center, rgba(196,26,26,.24), transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute bottom-[5%] left-1/2 h-6 w-[60%] -translate-x-1/2 rounded-[50%]"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,.55), transparent 72%)", filter: "blur(9px)" }}
            />
            <div className="app-float relative" style={{ perspective: "1200px" }}>
              {/* back: plan desplegado */}
              <Image
                src="/mockup1cel.png"
                alt="App Cuatrouno — plan del día desplegado"
                width={968}
                height={2000}
                className="absolute right-[-3%] top-[-4%] w-[56%]"
                style={{ transform: "rotate(6deg)", zIndex: 1, filter: "drop-shadow(0 22px 32px rgba(0,0,0,.55))", height: "auto" }}
              />
              {/* front: rutina del día */}
              <Image
                src="/mockup2cel.png"
                alt="App Cuatrouno — rutina del día"
                width={794}
                height={1824}
                priority
                className="relative ml-[2%] w-[62%]"
                style={{ transform: "rotate(-4deg)", zIndex: 2, filter: "drop-shadow(0 26px 38px rgba(0,0,0,.6))", height: "auto" }}
              />
            </div>
          </div>

          {/* features */}
          <div className="order-2 w-full">
            <div className="grid gap-3.5 sm:grid-cols-2">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`reveal d${i + 1} rounded-2xl border border-white/8 bg-white/[.02] p-5 transition-colors hover:border-[#C41A1A]/30 hover:bg-white/[.035]`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C41A1A]/10 text-[#E8413F]">
                    {f.icon}
                  </div>
                  <p className="font-display text-[14px] font-black uppercase tracking-wide text-white">{f.q}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="reveal mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-[13px] leading-relaxed text-zinc-500">
                No entrenás solo — hay alguien mirando los números con vos.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-shrink-0 items-center justify-center gap-3 rounded-md bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.98]"
              >
                <WaIcon size={18} />
                Quiero mi plan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* float animation (reduced-motion safe) */}
      <style>{`
        @keyframes app-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .app-float { animation: app-float 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .app-float { animation: none; } }
      `}</style>
    </section>
  );
}
