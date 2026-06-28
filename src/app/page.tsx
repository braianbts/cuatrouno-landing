import Image from "next/image";
import Navbar from "./components/Navbar";
import FAQSection from "./components/FAQ";
import Pricing from "./components/Pricing";
import AppSection from "./components/AppSection";
import DiplomasSection from "./components/DiplomasSection";
import ScrollFx from "./components/ScrollFx";
import { WaIcon, IgIcon, WA_LINK } from "./components/icons";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TracingBeam } from "@/components/ui/tracing-beam";
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

const movingTestimonials = testimonials.map(t => ({
  quote: t.text,
  name: t.name,
  title: t.location,
}));

const steps = [
  { num: "1", text: "Elegí el plan ideal para vos", img: "/assets/cf-1.jpg" },
  { num: "2", text: "Completá tu ficha de evaluación", img: "/assets/cf-2.avif" },
  { num: "3", text: "Enviá tus fotos para evaluación postural", img: "/assets/cf-3.webp" },
  { num: "4", text: "Preparación de tu entrenamiento personalizado", img: "/assets/cf-4.jpg" },
  { num: "5", text: "Videollamada de bienvenida con Braian", img: "/assets/cf-5.webp" },
  { num: "6", text: "Envío de materiales y acompañamiento", img: "/assets/cf-6.jpeg" },
];

const benefits = [
  {
    n: "01", title: "Videollamada inicial de alineamiento",
    text: "Un análisis completo de tu entrenamiento, alimentación y salud para orientarte de forma 100% asertiva.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
      </svg>
    ),
    bg: "from-[#C41A1A]/15 to-transparent",
  },
  {
    n: "02", title: "Evaluaciones mensuales",
    text: "Entendé cómo va tu proceso y cuáles fueron los resultados que alcanzaste mes a mes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    bg: "from-[#E8B830]/10 to-transparent",
  },
  {
    n: "03", title: "Prescripción de entrenamiento individual",
    text: "Sin rutinas genéricas. Recibí un entrenamiento específico para tu objetivo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 12h11M6.5 17.5h6M3 3h18v18H3z" strokeLinejoin="round"/>
        <path d="M15 15l2 2 4-4" strokeWidth="2"/>
      </svg>
    ),
    bg: "from-[#C41A1A]/15 to-transparent",
  },
  {
    n: "04", title: "Soporte individual por WhatsApp",
    text: "Acceso directo para resolver tus dudas en tiempo real y recibir feedback inmediato.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.428a.5.5 0 00.612.612l5.583-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.502-5.24-1.38l-.376-.213-3.895 1.026 1.026-3.895-.213-.376A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    bg: "from-[#25D366]/10 to-transparent",
  },
  {
    n: "05", title: "Guía de alimentación complementaria",
    text: "Orientación nutricional adaptada a tus objetivos y rutina, incluida en tu plan.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5.5 5 9c0 2.4 1.2 4.5 3 5.7V17h8v-2.3c1.8-1.2 3-3.3 3-5.7 0-3.5-3-7-7-7z"/>
        <path d="M9 17v2a3 3 0 006 0v-2"/>
        <path d="M12 6v6M9 9h6"/>
      </svg>
    ),
    bg: "from-[#E8B830]/10 to-transparent",
  },
  {
    n: "06", title: "App personalizada con tu plan",
    text: "Acceso a tu app con rutina, alimentación, cardio y seguimiento. Todo organizado en tu celular, siempre disponible.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M12 18h.01"/>
        <path d="M9 7h6M9 11h4"/>
      </svg>
    ),
    bg: "from-[#C41A1A]/15 to-transparent",
  },
];

const forwhom = [
  { label: "Para principiantes:", text: "que todavía no entrenan o llevan menos de 6 meses y quieren empezar de la manera correcta." },
  { label: "Para intermedios:", text: "que entrenan hace al menos 6 meses pero se sienten estancados, sin grandes resultados visibles." },
  { label: "Para avanzados:", text: "que entrenan hace más de un año y buscan más rendimiento y resultados más rápidos." },
  { label: null, text: "Para personas que ya no se reconocen al mirarse al espejo y necesitan ayuda para bajar de peso y recuperar la autoestima." },
  { label: null, text: "Para quienes tienen mucha dificultad para ganar masa muscular." },
  { label: null, text: "Para personas con una rutina agitada que necesitan el entrenamiento adaptado a su ritmo de vida." },
];

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
        <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#080706] pt-20 pb-12 lg:pt-16">
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
              <h1 className="font-display text-[2.7rem] font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-[4.4rem]">
                Transforma<br />tu cuerpo,<br />
                <span className="text-[#C41A1A]">Alcanzá tu<br />mejor versión.</span>
              </h1>

              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-300 sm:text-base">
                Plan de entrenamiento <strong className="text-white">100% individualizado</strong> para ganar masa muscular, mejorar tu composición corporal y sostener el progreso — con seguimiento real, no rutinas genéricas.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#E8B830]">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.783 1.401 8.171L12 18.896l-7.335 3.869 1.401-8.171L.132 9.211l8.2-1.193z" /></svg>
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-zinc-300">+30 alumnos activos</span>
                </div>
                <div className="h-4 w-px bg-white/15" />
                <span className="text-[12px] font-semibold text-zinc-300">10 años de experiencia</span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#1ebe5d] hover:shadow-[#25D366]/30 active:scale-[.98]">
                  <WaIcon size={20} />
                  Quiero empezar ahora
                </a>
                <a href="#planes" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-widest text-zinc-200 transition-colors hover:border-white/30 hover:text-white">
                  Ver planes
                </a>
              </div>

              <p className="mt-4 text-[12px] text-zinc-400">
                Desde <strong className="text-white">2x de $59.990</strong> o <strong className="text-white">$109.990</strong> al contado
              </p>
            </div>
          </div>

          <BackgroundBeams className="absolute inset-0 z-[1] opacity-30" />

          <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce opacity-30 lg:block">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </section>

        {/* ─── TRUST STRIP ─── */}
        <section className="border-y border-white/5 bg-[#060504] py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between sm:px-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500">Detrás de Cuatrouno</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
              <span>Cuatrouno Training Club</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span>Cuatrouno Suplementos</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span>Tienda física · Zona Norte</span>
            </div>
          </div>
        </section>

        {/* ─── SOBRE BRAIAN ─── */}
        <section id="sobre" className="relative overflow-hidden bg-[#080706]">
          <div className="flex min-h-[80vh] flex-col lg:flex-row">
            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:w-1/2">
              {/* mobile: crossfade between both images */}
              <Image src="/assets/braian-hero.jpg" alt="Braian Barrientos" fill className="img-fade-a object-cover object-[58%_16%] lg:hidden" />
              <Image src="/assets/braian-diploma.jpg" alt="Braian Barrientos" fill className="img-fade-b object-cover object-center lg:hidden" />
              {/* desktop: diploma only */}
              <Image src="/assets/braian-diploma.jpg" alt="Braian Barrientos" fill className="hidden object-cover object-center lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/30 to-transparent lg:hidden" />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#080706] lg:block" />
            </div>

            <div className="relative flex flex-col justify-center px-6 py-14 sm:px-12 lg:w-1/2 lg:px-16 xl:px-20">
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
              <div className="reveal d4 mt-8">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-md bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.98]">
                  <WaIcon size={18} />
                  Quiero trabajar con Braian
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DIPLOMAS ─── */}
        <DiplomasSection />

        {/* ─── TESTIMONIOS ─── */}
        <section className="relative overflow-hidden bg-[#060504] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(196,26,26,.10), transparent)" }} />
          <div className="reveal mb-10 px-6 sm:px-12 lg:px-24">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Resultados reales</p>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">Lo que dicen<br />mis alumnos</h2>
          </div>
          <InfiniteMovingCards
            items={movingTestimonials}
            direction="left"
            speed="slow"
            pauseOnHover
          />
        </section>

        {/* ─── CÓMO FUNCIONA + QUÉ INCLUYE ─── */}
        <section id="funciona" className="relative overflow-hidden bg-[#080706] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(140,10,10,.18) 0%, transparent 70%)" }} />

          <div className="relative z-10 mx-auto max-w-[90rem] px-6 sm:px-12 lg:px-20">

            {/* ── MOBILE: stacked ── */}
            <div className="lg:hidden">
              <div className="reveal mb-10 text-center">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">El proceso</p>
                <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">¿Cómo funciona?</h2>
                <p className="mx-auto mt-3 max-w-md text-[14px] text-zinc-400">Seis pasos simples desde que entrás hasta que arrancás a entrenar con tu plan en la mano.</p>
              </div>
              <div className="space-y-8">
                {steps.map((s, i) => (
                  <div key={s.num} className={`reveal d${(i % 3) + 1} flex flex-col gap-4`}>
                    <div className="group relative h-44 w-full overflow-hidden rounded-xl">
                      <Image src={s.img} alt="" fill className="scale-105 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#C41A1A]/40 bg-[#C41A1A]/10 text-xs font-black text-[#E8413F]">{s.num}</span>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-[#E8413F]">Paso {s.num}</p>
                        <p className="mt-0.5 text-[15px] font-bold leading-snug text-white">{s.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-14 reveal">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Incluido en tu plan</p>
                <h2 className="mb-8 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">Todo lo que vas<br />a tener acceso</h2>
                <BentoGrid className="max-w-full md:auto-rows-[16rem]">
                  {benefits.map((b, i) => (
                    <BentoGridItem
                      key={b.n}
                      className={["border-white/8 bg-[#0a0908] hover:border-[#C41A1A]/30 overflow-hidden", i === 0 || i === 3 ? "md:col-span-2" : ""].join(" ")}
                      title={<span className="text-[13px] font-black uppercase leading-tight text-white">{b.title}</span>}
                      description={<span className="text-[12px] leading-relaxed text-zinc-500">{b.text}</span>}
                      header={<div className={`relative flex items-end justify-between rounded-lg bg-gradient-to-br ${b.bg} p-4 h-20 border border-white/5`}><span className="font-display text-4xl font-black text-white/5 select-none">{b.n}</span><span className="text-[#C41A1A]">{b.icon}</span></div>}
                    />
                  ))}
                </BentoGrid>
              </div>
            </div>

            {/* ── DESKTOP: side by side ── */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:items-start">

              {/* LEFT — Cómo funciona */}
              <div>
                <div className="reveal mb-8">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">El proceso</p>
                  <h2 className="font-display text-4xl font-black uppercase leading-tight xl:text-5xl">¿Cómo<br />funciona?</h2>
                  <p className="mt-3 text-[14px] text-zinc-400">Seis pasos simples desde que entrás hasta que arrancás a entrenar con tu plan en la mano.</p>
                </div>
                <TracingBeam>
                  <div className="space-y-8 pl-4">
                    {steps.map((s, i) => (
                      <div key={s.num} className={`reveal d${(i % 3) + 1} flex items-center gap-5`}>
                        <div className="group relative h-24 w-36 flex-shrink-0 overflow-hidden rounded-xl">
                          <Image src={s.img} alt="" fill className="scale-105 object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                        </div>
                        <div>
                          <div className="mb-1.5 flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C41A1A]/40 bg-[#C41A1A]/10 text-[10px] font-black text-[#E8413F]">{s.num}</span>
                            <span className="text-[9px] font-black uppercase tracking-wider text-[#E8413F]">Paso {s.num}</span>
                          </div>
                          <p className="text-[14px] font-bold leading-snug text-white">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TracingBeam>
              </div>

              {/* RIGHT — Qué incluye */}
              <div>
                <div className="reveal mb-8">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Incluido en tu plan</p>
                  <h2 className="font-display text-4xl font-black uppercase leading-tight xl:text-5xl">Todo lo que<br />vas a tener</h2>
                </div>
                <BentoGrid className="max-w-full md:auto-rows-auto">
                  {benefits.map((b, i) => (
                    <BentoGridItem
                      key={b.n}
                      className={["border-white/8 bg-[#0a0908] hover:border-[#C41A1A]/30 overflow-hidden", i === 0 || i === 3 ? "md:col-span-2" : ""].join(" ")}
                      title={<span className="text-[12px] font-black uppercase leading-tight text-white">{b.title}</span>}
                      description={<span className="text-[11px] leading-relaxed text-zinc-500">{b.text}</span>}
                      header={<div className={`relative flex items-end justify-between rounded-lg bg-gradient-to-br ${b.bg} p-3 h-14 border border-white/5`}><span className="font-display text-3xl font-black text-white/5 select-none">{b.n}</span><span className="text-[#C41A1A] scale-90">{b.icon}</span></div>}
                    />
                  ))}
                </BentoGrid>
              </div>

            </div>
          </div>
        </section>

        {/* ─── PARA QUIÉN ─── */}
        <section className="relative overflow-hidden bg-[#080706] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(196,26,26,.10), transparent)" }} />
          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="reveal relative h-[360px] flex-shrink-0 sm:h-[460px] lg:w-[42%]">
                <div className="absolute bottom-0 left-0 top-0 overflow-hidden rounded-2xl" style={{ width: "47%" }}>
                  <Image src="/assets/hombre-panza-gym.webp" alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute right-0 top-0 overflow-hidden rounded-2xl" style={{ width: "50%", height: "49%" }}>
                  <Image src="/assets/rollo2.avif" alt="" fill className="object-cover object-center" />
                </div>
                <div className="absolute bottom-0 right-0 overflow-hidden rounded-2xl" style={{ width: "50%", height: "49%" }}>
                  <Image src="/assets/rollo3.avif" alt="" fill className="object-cover object-top" />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="reveal mb-7 font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">¿Para quién<br /><span className="text-[#C41A1A]">es esto?</span></h2>
                <div className="space-y-1">
                  {forwhom.map((f, i) => (
                    <div key={i} className="reveal flex items-start gap-4 border-b border-white/8 py-3.5">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-[#C41A1A]">
                        <svg width="11" height="9" viewBox="0 0 12 9" fill="none"><path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <p className="text-[14px] leading-relaxed text-zinc-300">
                        {f.label && <span className="font-bold text-white">{f.label} </span>}
                        {f.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="reveal mt-8">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-md bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.98]">
                    <WaIcon size={18} />
                    ¡Soy candidato, empezar!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SUPLEMENTOS ─── */}
        <section className="relative overflow-hidden bg-[#060504] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(196,26,26,.10), transparent)" }} />
          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="reveal flex-1 space-y-6 lg:max-w-[42%]">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Más que un entrenador</p>
                <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">Soy fundador de <span className="text-[#C41A1A]">Cuatrouno Suplementos</span></h2>
                <div className="space-y-4 text-[14px] leading-relaxed text-zinc-400">
                  <p>Tengo una tienda física especializada en suplementación deportiva. Me permite asesorarte con honestidad sobre qué tomar, cuándo y en qué dosis — <strong className="text-white">sin humo, sin comisiones, sin nada raro.</strong></p>
                  <p>Combinando tu plan de entrenamiento con la suplementación correcta podés <strong className="text-white">acelerar significativamente tus resultados</strong>.</p>
                  <p>Yo entiendo el <strong className="text-white">ecosistema completo de la transformación física.</strong></p>
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-md bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.98]">
                  <WaIcon size={18} />
                  Quiero asesoría completa
                </a>
              </div>
              <div className="flex flex-1 flex-col gap-4 sm:flex-row">
                <div className="reveal d1 relative min-h-[300px] flex-1 overflow-hidden rounded-2xl sm:min-h-[380px]">
                  <Image src="/assets/cuatro-uno-local.jpg" alt="Cuatrouno Suplementos" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060504]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/10 bg-black/70 p-3 backdrop-blur">
                    <Image src="/assets/logo-suplementos.jpg" alt="" width={40} height={24} className="h-6 w-auto rounded" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Tienda física</span>
                  </div>
                </div>
                <div className="reveal d2 relative min-h-[300px] flex-1 overflow-hidden rounded-2xl sm:min-h-[380px]">
                  <iframe src="https://maps.google.com/maps?q=-34.348825,-58.794437&z=16&output=embed" width="100%" height="100%" style={{ border: 0, minHeight: "300px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Cuatrouno Suplementos — ubicación" />
                </div>
              </div>
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

      {/* ─── STICKY MOBILE CTA ─── */}
      <div id="sticky-cta" className="fixed inset-x-0 bottom-0 z-40 translate-y-full border-t border-white/10 bg-[#0d0b09]/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 lg:hidden" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Plan desde</p>
            <p className="text-sm font-black text-white">2x de $59.990 <span className="font-medium text-zinc-500">/ contado $109.990</span></p>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-[13px] font-black uppercase tracking-wider text-white active:scale-[.97]">
            <WaIcon size={18} />
            Empezar
          </a>
        </div>
      </div>

      <ScrollFx />
    </div>
  );
}
