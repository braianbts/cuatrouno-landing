import Image from "next/image";
import Navbar from "./components/Navbar";
import FAQSection from "./components/FAQ";
import Pricing from "./components/Pricing";
import AppSection from "./components/AppSection";
import CredBadges from "./components/CredBadges";
import ScrollFx from "./components/ScrollFx";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { WaIcon, IgIcon, WA_LINK, WA_LINK_MSG } from "./components/icons";
import { BackgroundBeams } from "@/components/ui/background-beams";

const testimonials = [
  { name: "Lucía Martínez", location: "Caballito, CABA", initials: "LM", color: "#C41A1A", time: "21:14", text: "En 3 meses con Braian tuve más cambios que en años entrenando sola. Le escribís y te responde. Se nota que le interesa de verdad." },
  { name: "Rodrigo Palacios", location: "Escobar, Zona Norte", initials: "RP", color: "#1a6bc4", time: "20:48", text: "Arranqué literalmente de cero y me daba vergüenza entrar al gym. Braian me armó algo re llevadero y hoy estoy muchísimo más fuerte. Un antes y un después." },
  { name: "Carla González", location: "Belgrano, CABA", initials: "CG", color: "#1ac47a", time: "19:33", text: "La parte de alimentación me cambió la cabeza. Ahora como bien, entreno mejor y encima disfruto el proceso." },
  { name: "Matías Fernández", location: "Maschwitz, Zona Norte", initials: "MF", color: "#c4a41a", time: "22:05", text: "Estaba re estancado hace más de un año. La videollamada inicial me abrió los ojos en un montón de cosas que hacía mal." },
  { name: "Valentina Ríos", location: "Tigre, Zona Norte", initials: "VR", color: "#c41a7a", time: "18:21", text: "Entreno desde casa y siempre se me complicó ver cambios. Me adaptó todo a lo que tenía y aun así cambió muchísimo mi físico." },
  { name: "Sebastián Herrera", location: "Benavídez, Zona Norte", initials: "SH", color: "#7a1ac4", time: "09:47", text: "Entré queriendo bajar unos kilos y terminé mejorando el físico completo. No te vende humo ni cosas imposibles. Todo serio y sostenible." },
  { name: "Florencia Aguilar", location: "Palermo, CABA", initials: "FA", color: "#c47a1a", time: "17:02", text: "El seguimiento por WhatsApp hace toda la diferencia. Sentís que alguien está atrás tuyo ayudándote. Hoy me veo al espejo y estoy súper conforme." },
];


const steps = [
  { num: "1", text: "Elegí el plan que se adapta a tu objetivo", img: "/assets/cf-1.jpg" },
  { num: "2", text: "Videollamada con Braian para armar tu planilla personalizada", img: "/assets/cf-5.webp" },
  { num: "3", text: "Activación de tu app con toda tu rutina, alimentación y seguimiento", img: "/assets/cf-6.jpeg" },
];


const movingTestimonials = testimonials.map(t => ({ quote: t.text, name: t.name, title: t.location }));

const paymentLogos = [
  { src: "/assets/mercadopago-nuevo-logo.webp", name: "Mercado Pago", h: "h-7" },
  { src: "/assets/brubank-logo.png", name: "Brubank", h: "h-6" },
  { src: "/assets/galicia-logo.png", name: "Galicia", h: "h-6" },
  { src: "/assets/santander-logo.png", name: "Santander", h: "h-6" },
  { src: "/assets/bna-logo.png", name: "BNA+", h: "h-7" },
];

export default function Home() {
  return (
    <div className="overflow-x-clip bg-[#080706] text-white">
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
        <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#080706] pt-24 pb-12 lg:pt-28">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[82%] lg:w-[60%]"
            style={{
              backgroundImage: "url('/assets/braian-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "58% 16%",
              WebkitMaskImage: "linear-gradient(to right,transparent 0%,#000 24%,#000 88%,transparent 100%)",
              maskImage: "linear-gradient(to right,transparent 0%,#000 24%,#000 88%,transparent 100%)",
            }}
          />
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
          {/* mobile: heavy dark overlay so text is readable */}
          <div className="pointer-events-none absolute inset-0 sm:hidden" style={{ background: "rgba(8,7,6,.82)" }} />
          <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to right,#080706 0%,#080706 23%,rgba(8,7,6,.80) 43%,rgba(8,7,6,.32) 62%,rgba(8,7,6,0) 82%)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[24%]" style={{ background: "linear-gradient(to left,#080706 0%,transparent 100%)" }} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 lg:h-40" style={{ background: "linear-gradient(to top,#080706 0%,rgba(8,7,6,.45) 32%,transparent 100%)" }} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24" style={{ background: "linear-gradient(to bottom,rgba(8,7,6,.7) 0%,transparent 100%)" }} />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 75% at 0% 55%, rgba(196,26,26,.28), transparent 58%)" }} />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-12 lg:px-20">
            <div className="max-w-xl lg:max-w-[52%]">
<h1 className="font-display text-[2.1rem] font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-[3.6rem]">
                ¿Cuánto tiempo más<br />sin ver el cuerpo<br />que querés?
              </h1>
              <p className="mt-3 font-display text-[1.6rem] font-black uppercase leading-tight tracking-tight text-[#C41A1A] sm:text-4xl lg:text-[2.8rem]">
                Hoy empieza a cambiar.
              </p>

              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-300 sm:text-base">
                Entrenamiento 100% personalizado + <strong className="text-white">app con tu rutina, alimentación y seguimiento</strong> — sin rutinas genéricas ni PDFs abandonados.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#E8B830]">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.783 1.401 8.171L12 18.896l-7.335 3.869 1.401-8.171L.132 9.211l8.2-1.193z" /></svg>
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-zinc-300">7 certificaciones internacionales</span>
                </div>
                <div className="h-4 w-px bg-white/15" />
                <span className="text-[12px] font-semibold text-zinc-300">En el gym desde 2016</span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={WA_LINK_MSG} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#1ebe5d] hover:shadow-[#25D366]/30 active:scale-[.98]">
                  <WaIcon size={20} />
                  Quiero empezar ahora
                </a>
                <a href="#planes" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-widest text-zinc-200 transition-colors hover:border-white/30 hover:text-white">
                  Ver planes
                </a>
              </div>
            </div>
          </div>

          <BackgroundBeams className="absolute inset-0 z-[1] opacity-30" />

          <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce opacity-30 lg:block">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </section>

        {/* ─── STATS STRIP ─── */}
        <div className="border-y border-white/[0.06] bg-[#0d0c0b]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.06] px-6 sm:grid-cols-4 sm:px-12 lg:px-20">
            {[
              { n: "10",  label: "Años de experiencia" },
              { n: "30+", label: "Alumnos activos" },
              { n: "7",   label: "Certificaciones internacionales" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-7 text-center">
                <span className="font-display text-[2.2rem] font-black leading-none text-[#C41A1A] sm:text-[2.6rem]">{s.n}</span>
                <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">{s.label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center py-7 text-center">
              <span className="font-display text-[2.2rem] font-black leading-none text-[#C41A1A] sm:text-[2.6rem]">2</span>
              <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Marcas propias</span>
              <div className="mt-2 flex gap-3">
                <a href="https://www.instagram.com/cuatrouno_suplementos/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold text-zinc-600 transition-colors hover:text-[#C41A1A]">@cuatrouno_suplementos</a>
                <a href="https://www.instagram.com/cuatrouno_trainingclub/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold text-zinc-600 transition-colors hover:text-[#C41A1A]">@cuatrouno_trainingclub</a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── SOBRE BRAIAN ─── */}
        <section id="sobre" className="relative overflow-hidden bg-[#080706]">
          <div className="flex flex-col lg:flex-row">
            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:min-h-[700px] lg:w-1/2">
              {/* mobile: crossfade between both images */}
              <Image src="/assets/braian-hero.jpg" alt="Braian Barrientos" fill className="img-fade-a object-cover object-[58%_16%] lg:hidden" />
              <Image src="/assets/braian-diploma.jpg" alt="Braian Barrientos" fill className="img-fade-b object-cover object-center lg:hidden" />
              {/* desktop: diploma only */}
              <Image src="/assets/braian-diploma.jpg" alt="Braian Barrientos" fill className="hidden object-cover object-center lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/30 to-transparent lg:hidden" />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#080706] lg:block" />
            </div>

            <div className="relative flex flex-col justify-center px-6 py-14 sm:px-12 lg:w-1/2 lg:px-16 lg:py-20 xl:px-20">
              <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 60% at 100% 40%, rgba(196,26,26,.12), transparent)" }} />
              <p className="reveal mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Quién soy</p>
              <h2 className="reveal d1 font-display text-[1.7rem] font-black uppercase leading-[1.05] sm:text-4xl xl:text-[2.7rem]">
                Empecé en 2016 sin guía.
                <span className="text-[#C41A1A]"> Hoy ayudo a entrenar con <span className="text-white">estructura y resultados.</span></span>
              </h2>
              <div className="reveal d2 mt-7 space-y-5 text-[15px] leading-relaxed text-zinc-400">
                <p>Hola, soy <strong className="text-white">Braian Barrientos</strong>, especialista en entrenamiento personalizado y suplementación deportiva, con <strong className="text-white">10 años en el rubro</strong> ayudando a personas a transformar su físico y construir hábitos sostenibles.</p>
                <p>Empecé en el gym cometiendo todos los errores posibles. Esa experiencia me dio algo que ningún libro enseña: <strong className="text-white">entender de verdad lo que vive alguien que arranca de cero</strong>.</p>
                <p>Fundé <strong className="text-white">Cuatrouno Training Club</strong> y <strong className="text-white">Cuatrouno Suplementos</strong>. Todo ese recorrido lo pongo al servicio de tu progreso.</p>
              </div>
              <div className="reveal d3 mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div><p className="font-display text-3xl font-black text-[#C41A1A] sm:text-4xl">10</p><p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">Años de exp.</p></div>
                <div><p className="font-display text-3xl font-black text-[#C41A1A] sm:text-4xl">30+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">Alumnos activos</p></div>
                <div><p className="font-display text-3xl font-black text-[#C41A1A] sm:text-4xl">98%</p><p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">Satisfacción</p></div>
              </div>
              <CredBadges />
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIOS ─── */}
        <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(to bottom, #060504 0%, #0f0404 50%, #1c0505 100%)" }}>
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(196,26,26,.30), transparent 70%)" }} />
          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
            <div className="reveal mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Testimonios
              </span>
              <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                Lo que dicen<br /><span className="text-[#C41A1A]">mis alumnos</span>
              </h2>
            </div>
          </div>
          <InfiniteMovingCards items={movingTestimonials} direction="left" speed="slow" pauseOnHover className="mx-auto" />
        </section>

        {/* ─── CÓMO FUNCIONA ─── */}
        <section id="funciona" className="relative overflow-hidden bg-[#080706] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(140,10,10,.18) 0%, transparent 70%)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
            <div className="reveal mb-12 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">El proceso</p>
              <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-5xl">¿Cómo funciona?</h2>
              <p className="mx-auto mt-3 max-w-md text-[14px] text-zinc-400">Tres pasos simples desde que entrás hasta que arrancás a entrenar con tu plan en la mano.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.num} className={`reveal d${i + 1} flex flex-col gap-4 rounded-2xl border border-white/8 bg-[#0c0b0a] overflow-hidden`}>
                  <div className="group relative h-44 w-full overflow-hidden">
                    <Image src={s.img} alt="" fill className="scale-105 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                    <span className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#C41A1A]/50 bg-[#C41A1A]/15 text-xs font-black text-[#E8413F]">{s.num}</span>
                  </div>
                  <div className="px-5 pb-5">
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#E8413F]">Paso {s.num}</p>
                    <p className="mt-1 text-[15px] font-bold leading-snug text-white">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── APP ─── */}
        <AppSection />

        {/* ─── PRECIOS ─── */}
        <section id="planes" className="relative overflow-hidden bg-[#050404] py-20 sm:py-24">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 70% at 0% 50%, rgba(196,26,26,.20), transparent 60%)" }} />
          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
            <div className="reveal mb-8 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Programas Cuatrouno</p>
              <h2 className="font-display text-4xl font-black uppercase sm:text-5xl">Elegí tu plan</h2>
              <p className="mx-auto mt-3 max-w-md text-[14px] text-zinc-400">Todos incluyen entrenamiento personalizado, materiales de apoyo y acompañamiento. Elegí según cuánto querés sostener el proceso.</p>
            </div>

            <Pricing />

            <div className="reveal mt-7 flex items-start gap-4 rounded-2xl border border-[#C41A1A]/20 bg-[#0f0808] px-6 py-5">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#C41A1A]/15 text-[#E8413F]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7v8l10-12h-7z" /></svg>
              </div>
              <div>
                <p className="font-display font-black uppercase text-white">Mejor precio pagando al contado</p>
                <p className="mt-1 text-[13px] leading-relaxed text-zinc-400">Abonando el programa completo en un solo pago accedés a un precio especial. Más compromiso con el proceso, menos costo total — y los resultados llegan antes.</p>
              </div>
            </div>

            <div className="reveal mt-12 flex flex-col items-center gap-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">Medios de pago aceptados</p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {paymentLogos.map((l) => (
                  <Image key={l.name} src={l.src} alt={l.name} width={90} height={32} className={`${l.h} w-auto object-contain opacity-50 transition-opacity hover:opacity-100`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQSection />

        {/* ─── CTA FINAL ─── */}
        <section className="relative overflow-hidden bg-[#060504] py-16">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(196,26,26,.18), transparent 70%)" }} />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
            <h2 className="reveal font-display text-3xl font-black uppercase leading-tight sm:text-4xl">¿Listo para tu<br /><span className="text-[#C41A1A]">mejor versión?</span></h2>
            <p className="reveal d1 mx-auto mt-4 max-w-md text-[15px] text-zinc-400">Escribime por WhatsApp y armamos juntos el plan ideal para tu objetivo, tu rutina y tu realidad.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="reveal d2 mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#25D366] py-5 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#1ebe5d] active:scale-[.99] sm:w-auto sm:px-12">
              <WaIcon size={20} />
              Entrar en contacto por WhatsApp
            </a>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 bg-[#060504] py-10 pb-24 lg:pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between">
            <Image src="/assets/logo-superior-web.png" alt="Cuatrouno Training Club" width={140} height={55} className="h-12 w-auto object-contain" />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="https://www.instagram.com/braianbarrientos__/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2.5 rounded-md border border-white/15 px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-[#C41A1A] hover:text-white">
                <IgIcon size={18} className="text-[#E8413F]" />
                @braianbarrientos__
              </a>
              <a href="https://www.instagram.com/cuatrouno_suplementos/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2.5 rounded-md border border-white/15 px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-[#C41A1A] hover:text-white">
                <IgIcon size={18} className="text-[#E8413F]" />
                @cuatrouno_suplementos
              </a>
            </div>
          </div>
          <p className="mt-8 border-t border-white/5 pt-6 text-center text-[13px] text-zinc-600">© {new Date().getFullYear()} Cuatrouno Training Club. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* ─── FLOATING WA BUTTON (desktop only) ─── */}
      <a
        href={WA_LINK_MSG}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-8 right-8 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50 active:scale-95 lg:flex"
      >
        <WaIcon size={26} />
      </a>

      <ScrollFx />
    </div>
  );
}
