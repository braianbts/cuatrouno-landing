import Image from "next/image";
import { WaIcon, WA_LINK } from "./icons";

const features = [
  {
    q: "¿Qué como hoy?",
    a: "Está todo ahí. Cada comida, cada horario, con lo que tenés que comprar. Sin adivinar, sin improvisar.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    q: "¿Qué entreno hoy?",
    a: "Abrís la app y encontrás el día, cada ejercicio, cuántas series y cómo hacerlo bien. Sin buscar videos, sin inventar.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4v16M18 4v16M2 9h4M18 9h4M2 15h4M18 15h4M6 9h12M6 15h12" />
      </svg>
    ),
  },
  {
    q: "¿Estoy progresando?",
    a: "Registrás tu peso y medidas directamente en la app. Braian ve tu evolución en tiempo real y ajusta el plan si algo no está funcionando. No entrenás solo — hay alguien mirando los números con vos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    q: "¿Y el cardio?",
    a: "Programado. Cuándo, cuánto y a qué intensidad. Todo pensado para que sumes sin quemarte.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
  },
];

/* ─── Phone mockup images ─── */
function PhoneMockups() {
  return (
    <div className="relative flex-shrink-0 flex items-end justify-center gap-4 w-full lg:w-auto">
      {/* red glow */}
      <div
        className="pointer-events-none absolute -inset-8"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(196,26,26,.22), transparent 70%)" }}
      />
      {/* back phone — more tilted */}
      <div
        className="relative w-[160px] sm:w-[180px] lg:w-[190px] mb-6 flex-shrink-0"
        style={{ transform: "perspective(900px) rotateY(-14deg) rotateX(5deg) scale(0.92)", zIndex: 1 }}
      >
        <Image
          src="/mockup1cel.png"
          alt="App Cuatrouno — pantalla dieta"
          width={400}
          height={800}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>
      {/* front phone — slight tilt */}
      <div
        className="relative w-[180px] sm:w-[200px] lg:w-[215px] flex-shrink-0"
        style={{ transform: "perspective(900px) rotateY(-6deg) rotateX(3deg)", zIndex: 2 }}
      >
        <Image
          src="/mockup2cel.png"
          alt="App Cuatrouno — pantalla principal"
          width={400}
          height={800}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

/* ─── Screens shown inside the animated phone ─── */
function ScreenHoy() {
  return (
    <div className="px-3 pt-3 pb-2 space-y-2">
      <div className="rounded-xl border border-[#C41A1A]/25 bg-[#0f0808] p-3 text-center">
        <p style={{ fontSize: "7px" }} className="uppercase tracking-widest text-zinc-500 mb-1">Día del plan</p>
        <p className="font-display text-3xl font-black text-[#C41A1A] leading-none">12</p>
        <p style={{ fontSize: "7px" }} className="uppercase tracking-widest text-zinc-500 mt-1">de 84 · 72 días restantes</p>
      </div>
      <p style={{ fontSize: "8px" }} className="font-black uppercase tracking-widest text-[#C41A1A] px-1 pt-1">Entrenamiento de hoy</p>
      {["Sentadilla — 4×8", "Press banca — 4×10", "Remo — 3×12"].map((ex) => (
        <div key={ex} className="flex items-center justify-between rounded-lg border border-white/6 bg-[#111] px-2.5 py-2">
          <span style={{ fontSize: "8px" }} className="font-semibold text-zinc-200">{ex}</span>
          <div className="h-1.5 w-1.5 rounded-full bg-[#C41A1A]" />
        </div>
      ))}
      <p style={{ fontSize: "8px" }} className="font-black uppercase tracking-widest text-[#C41A1A] px-1 pt-1">Próxima comida</p>
      <div className="rounded-lg border border-white/6 bg-[#111] px-2.5 py-2">
        <p style={{ fontSize: "8px" }} className="font-bold text-white">Almuerzo · 13:00</p>
        <p style={{ fontSize: "7px" }} className="text-zinc-500 mt-0.5">Arroz · Pollo · Ensalada</p>
        <div className="mt-1.5 flex gap-1.5">
          {["P 42g", "C 68g", "G 12g"].map((m) => (
            <span key={m} style={{ fontSize: "6px" }} className="rounded bg-[#1a1a1a] px-1.5 py-0.5 font-bold uppercase text-zinc-400">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenDieta() {
  const meals = [
    { name: "Desayuno · 8:00", items: "Avena · Huevos · Fruta", macros: ["P 28g", "C 55g", "G 9g"] },
    { name: "Almuerzo · 13:00", items: "Arroz · Pollo · Ensalada", macros: ["P 42g", "C 68g", "G 12g"] },
    { name: "Merienda · 17:00", items: "Yogur · Frutos secos", macros: ["P 18g", "C 22g", "G 14g"] },
    { name: "Cena · 20:30", items: "Pescado · Batata · Verduras", macros: ["P 38g", "C 40g", "G 8g"] },
  ];
  return (
    <div className="px-3 pt-3 pb-2 space-y-2">
      <div className="flex gap-2 mb-2">
        {["2.450 kcal", "P 126g", "C 185g"].map((v) => (
          <div key={v} style={{ fontSize: "7px" }} className="flex-1 rounded-lg bg-[#111] border border-white/6 px-1.5 py-2 text-center font-bold text-[#C41A1A]">{v}</div>
        ))}
      </div>
      {meals.map((m) => (
        <div key={m.name} className="rounded-lg border border-white/6 bg-[#111] px-2.5 py-2">
          <p style={{ fontSize: "8px" }} className="font-bold text-white">{m.name}</p>
          <p style={{ fontSize: "7px" }} className="text-zinc-500 mt-0.5">{m.items}</p>
          <div className="mt-1 flex gap-1">
            {m.macros.map((macro) => (
              <span key={macro} style={{ fontSize: "6px" }} className="rounded bg-[#1a1a1a] px-1.5 py-0.5 font-bold uppercase text-zinc-400">{macro}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ScreenRutina() {
  const exercises = [
    { name: "Sentadilla trasera", badge: "Principal", sets: "4", reps: "8", rest: "2 min" },
    { name: "Press de banca", badge: null, sets: "4", reps: "10", rest: "90 seg" },
    { name: "Remo con barra", badge: null, sets: "3", reps: "12", rest: "90 seg" },
    { name: "Peso muerto rumano", badge: "DROP", sets: "3", reps: "10+", rest: "2 min" },
  ];
  return (
    <div className="px-3 pt-3 pb-2 space-y-2">
      <div className="rounded border-l-2 border-[#C41A1A] bg-[#0f0808] px-2.5 py-2">
        <p style={{ fontSize: "8px" }} className="font-black uppercase text-[#C41A1A]">Día 3 · Lunes</p>
        <p style={{ fontSize: "7px" }} className="text-zinc-400 mt-0.5">Tren inferior + core</p>
      </div>
      {exercises.map((ex) => (
        <div key={ex.name} className="rounded-lg border border-white/6 bg-[#111] px-2.5 py-2">
          <div className="flex items-center justify-between mb-1.5">
            <p style={{ fontSize: "8px" }} className="font-bold text-white">{ex.name}</p>
            {ex.badge && (
              <span style={{ fontSize: "6px" }} className="rounded bg-[#C41A1A] px-1.5 py-0.5 font-black uppercase text-white">{ex.badge}</span>
            )}
          </div>
          <div className="flex gap-2">
            {[["Series", ex.sets], ["Reps", ex.reps], ["Descanso", ex.rest]].map(([lbl, val]) => (
              <div key={lbl} style={{ fontSize: "6px" }} className="flex-1 rounded bg-[#1a1a1a] px-1.5 py-1 text-center">
                <p className="text-zinc-500 uppercase">{lbl}</p>
                <p className="font-bold text-white mt-0.5">{val}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ScreenControl() {
  return (
    <div className="px-3 pt-3 pb-2 space-y-2">
      <p style={{ fontSize: "8px" }} className="font-black uppercase tracking-widest text-[#C41A1A] px-1">Tu evolución</p>
      <div className="grid grid-cols-2 gap-2">
        {[
          { lbl: "Peso", val: "82.4", unit: "kg", delta: "-1.8 kg", down: true },
          { lbl: "Cintura", val: "86", unit: "cm", delta: "-3 cm", down: true },
          { lbl: "Pecho", val: "98", unit: "cm", delta: "+2 cm", down: false },
          { lbl: "% Grasa", val: "18.2", unit: "%", delta: "-1.4%", down: true },
        ].map((m) => (
          <div key={m.lbl} className="rounded-lg border border-white/6 bg-[#111] px-2.5 py-2">
            <p style={{ fontSize: "7px" }} className="uppercase tracking-widest text-zinc-500">{m.lbl}</p>
            <p style={{ fontSize: "18px" }} className="font-black text-white leading-none mt-1">{m.val}<span style={{ fontSize: "8px" }} className="text-zinc-500 ml-1">{m.unit}</span></p>
            <p style={{ fontSize: "7px" }} className={`font-bold mt-1 ${m.down ? "text-[#4caf50]" : "text-[#C41A1A]"}`}>{m.delta}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-white/6 bg-[#111] px-2.5 py-2">
        <p style={{ fontSize: "7px" }} className="uppercase tracking-widest text-zinc-500 mb-1.5">Progreso semanas</p>
        <div className="flex items-end gap-1 h-8">
          {[40, 55, 48, 62, 70, 65, 80, 88].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 7 ? "#C41A1A" : "#2a2a2a" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const TABS = ["Hoy", "Dieta", "Rutina", "Cardio", "Control"];
const SCREEN_DURATION = 3000; // ms each screen shows
const SCREENS = [
  { tab: 0, content: <ScreenHoy /> },
  { tab: 1, content: <ScreenDieta /> },
  { tab: 2, content: <ScreenRutina /> },
  { tab: 4, content: <ScreenControl /> },
];

function AnimatedPhone() {
  const totalSec = SCREENS.length * (SCREEN_DURATION / 1000);

  // build keyframes: each screen fades in/out in its slot
  const keyframeCSS = SCREENS.map((_, idx) => {
    const slotSize = 100 / SCREENS.length;
    const start = idx * slotSize;
    const fadeIn = start + 1;
    const hold = start + slotSize - 5;
    const fadeOut = start + slotSize - 1;
    const end = start + slotSize;
    return `
      @keyframes sc${idx} {
        0%        { opacity: ${idx === 0 ? 1 : 0}; }
        ${start}% { opacity: 0; }
        ${fadeIn}% { opacity: 1; }
        ${hold}%  { opacity: 1; }
        ${fadeOut}% { opacity: 0; }
        100%      { opacity: ${idx === 0 ? 1 : 0}; }
      }
    `;
  }).join("\n");

  return (
    <div className="relative w-[230px] sm:w-[250px] flex-shrink-0">
      {/* red glow */}
      <div
        className="pointer-events-none absolute -inset-8"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(196,26,26,.25), transparent 70%)" }}
      />

      {/* phone shell — 3D tilt */}
      <div
        className="relative overflow-hidden rounded-[2.6rem] border-2 border-white/10 bg-[#0d0b09] shadow-2xl shadow-black/70"
        style={{ transform: "perspective(900px) rotateY(-8deg) rotateX(4deg)" }}
      >
        {/* notch */}
        <div className="flex items-center justify-center bg-black px-6 pt-3 pb-2">
          <div className="h-[18px] w-[88px] rounded-full bg-[#111]" />
        </div>

        {/* app header */}
        <div className="border-b border-white/8 bg-[#0d0d0d] px-4 py-2.5 text-center">
          <span className="font-display text-[13px] font-black uppercase tracking-widest text-white">CUATROUNO</span>
        </div>

        {/* screen stack — relative container, fixed height */}
        <div className="relative bg-black" style={{ height: "360px" }}>
          {SCREENS.map((screen, idx) => (
            <div
              key={idx}
              className="absolute inset-0 overflow-hidden"
              style={{
                opacity: idx === 0 ? 1 : 0,
                animation: `sc${idx} ${totalSec}s linear infinite`,
                animationDelay: idx === 0 ? "0s" : `${(idx * SCREEN_DURATION) / 1000}s`,
              }}
            >
              {/* tab bar */}
              <div className="flex border-b border-white/8 bg-[#000]">
                {TABS.map((t, i) => (
                  <div
                    key={t}
                    className="flex-1 py-2 text-center font-bold uppercase tracking-wider"
                    style={{
                      fontSize: "7px",
                      color: i === screen.tab ? "#fff" : "#52525b",
                      borderBottom: i === screen.tab ? "2px solid #C41A1A" : "2px solid transparent",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
              {/* content */}
              <div className="overflow-y-hidden">{screen.content}</div>
            </div>
          ))}
        </div>

        {/* home bar */}
        <div className="flex justify-center bg-black pb-3 pt-2">
          <div className="h-1 w-16 rounded-full bg-white/20" />
        </div>
      </div>

      <style>{keyframeCSS}</style>
    </div>
  );
}

export default function AppSection() {
  return (
    <section className="relative overflow-hidden bg-[#080706] py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(196,26,26,.08), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">

        {/* header */}
        <div className="reveal mb-12 lg:mb-16">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">
            Tu plan, siempre con vos
          </p>
          <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
            Nada de PDFs perdidos<br />
            <span className="text-[#C41A1A]">ni rutinas en capturas.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            Cuando arrancás con Braian, recibís acceso a tu app personal con todo organizado — qué comer hoy, qué entrenar, cómo va tu progreso. Abrís el celular y listo.
          </p>
        </div>

        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-start lg:gap-20">

          {/* phone mockups */}
          <PhoneMockups />

          {/* features */}
          <div className="flex-1 space-y-0 w-full">
            {features.map((f, i) => (
              <div
                key={i}
                className={`reveal d${i + 1} flex gap-5 border-b border-white/8 py-6 last:border-0`}
              >
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#C41A1A]/10 text-[#E8413F]">
                  {f.icon}
                </div>
                <div>
                  <p className="mb-1.5 font-display text-[15px] font-black uppercase tracking-wide text-white">
                    {f.q}
                  </p>
                  <p className="text-[14px] leading-relaxed text-zinc-400">{f.a}</p>
                </div>
              </div>
            ))}

            <div className="reveal pt-6">
              <p className="mb-5 text-[13px] leading-relaxed text-zinc-500 italic max-w-lg">
                Muchos de nuestros alumnos llegaron después de meses entrenando solos, frustrados, sin ver cambios. La diferencia no fue el esfuerzo — siempre lo tuvieron. Fue tener un plan claro y a alguien atrás que los guíe.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.98]"
              >
                <WaIcon size={18} />
                Quiero mi plan personalizado
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
