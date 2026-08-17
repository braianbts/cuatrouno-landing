import Image from "next/image";
import Navbar from "./components/Navbar";
import FAQSection from "./components/FAQ";
import Pricing from "./components/Pricing";
import AppSection from "./components/AppSection";
import CredBadges from "./components/CredBadges";
import ScrollFx from "./components/ScrollFx";
import Diagnostico from "./components/Diagnostico";
import { WaIcon, IgIcon, WA_LINK, WA_LINK_MSG } from "./components/icons";

const paymentLogos = [
  { src: "/assets/mercadopago-nuevo-logo.webp", name: "Mercado Pago", h: "h-7" },
  { src: "/assets/brubank-logo.png", name: "Brubank", h: "h-6" },
  { src: "/assets/galicia-logo.png", name: "Galicia", h: "h-6" },
  { src: "/assets/santander-logo.png", name: "Santander", h: "h-6" },
  { src: "/assets/bna-logo.png", name: "BNA+", h: "h-7" },
];

const shortQuotes = [
  { text: "La parte de alimentación me cambió la cabeza.", author: "Carla G." },
  { text: "La videollamada inicial me abrió los ojos.", author: "Matías F." },
  { text: "El seguimiento por WhatsApp hace toda la diferencia.", author: "Florencia A." },
];

export default function Home() {
  return (
    <div className="overflow-x-clip bg-[#080706] text-white">
      <Navbar />
      <main>

        {/* ─── HERO + DIAGNÓSTICO ─── */}
        <Diagnostico />

        {/* ─── BANDA DE PRUEBA ─── */}
        <div className="grid border-b-2 border-white/15 sm:grid-cols-3">
          <div className="grayscale-photo relative h-[220px] border-b-2 border-white/15 sm:h-[300px] sm:border-b-0 sm:border-r-2">
            <Image src="/assets/braian-hero.jpg" alt="Braian entrenando" fill className="object-cover" style={{ objectPosition: "58% 16%" }} />
          </div>
          <div className="grayscale-photo relative h-[220px] border-b-2 border-white/15 sm:h-[300px] sm:border-b-0 sm:border-r-2">
            <Image src="/assets/cuatro-uno-local.jpg" alt="Cuatrouno Training Club" fill className="object-cover" />
          </div>
          <div className="grid grid-rows-2">
            <div className="flex flex-col justify-center border-b-2 border-white/15 px-6 py-6 sm:px-8">
              <p className="font-display text-4xl font-black leading-none text-[#E8413F]">30+</p>
              <p className="mt-1.5 text-[13px] text-zinc-400">alumnos entrenando ahora, con seguimiento semanal</p>
            </div>
            <div className="flex flex-col justify-center px-6 py-6 sm:px-8">
              <p className="font-display text-4xl font-black leading-none text-[#E8413F]">98%</p>
              <p className="mt-1.5 text-[13px] text-zinc-400">de satisfacción entre quienes terminaron su programa</p>
            </div>
          </div>
        </div>

        {/* ─── SOBRE BRAIAN ─── */}
        <section id="sobre" className="relative overflow-hidden border-b-2 border-white/15 bg-[#080706]">
          <div className="flex flex-col lg:flex-row">
            <div className="grayscale-photo relative aspect-[4/5] w-full border-b-2 border-white/15 lg:aspect-auto lg:min-h-[600px] lg:w-1/2 lg:border-b-0 lg:border-r-2">
              <Image src="/assets/braian-diploma.jpg" alt="Braian Barrientos" fill className="object-cover object-center" />
            </div>

            <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:w-1/2 lg:px-16 lg:py-20 xl:px-20">
              <p className="reveal mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8413F]">Quién soy</p>
              <h2 className="reveal d1 font-display text-[1.7rem] font-black uppercase leading-[1.05] sm:text-4xl xl:text-[2.5rem]">
                Empecé en 2016 sin guía.
                <span className="text-[#E8413F]"> Hoy ayudo a entrenar con estructura y resultados.</span>
              </h2>
              <div className="reveal d2 mt-7 space-y-5 text-[15px] leading-relaxed text-zinc-400">
                <p>Hola, soy <strong className="text-white">Braian Barrientos</strong>, especialista en entrenamiento personalizado y suplementación deportiva, con <strong className="text-white">10 años en el rubro</strong> ayudando a personas a transformar su físico y construir hábitos sostenibles.</p>
                <p>Empecé en el gym cometiendo todos los errores posibles. Esa experiencia me dio algo que ningún libro enseña: <strong className="text-white">entender de verdad lo que vive alguien que arranca de cero</strong>.</p>
                <p>Fundé <strong className="text-white">Cuatrouno Training Club</strong> y <strong className="text-white">Cuatrouno Suplementos</strong>. Todo ese recorrido lo pongo al servicio de tu progreso.</p>
              </div>
              <div className="reveal d3 mt-9 grid grid-cols-3 gap-4 border-t-2 border-white/15 pt-8">
                <div><p className="font-display text-3xl font-black text-[#E8413F] sm:text-4xl">10</p><p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">Años de exp.</p></div>
                <div><p className="font-display text-3xl font-black text-[#E8413F] sm:text-4xl">30+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">Alumnos activos</p></div>
                <div><p className="font-display text-3xl font-black text-[#E8413F] sm:text-4xl">98%</p><p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">Satisfacción</p></div>
              </div>
              <CredBadges />
            </div>
          </div>
        </section>

        {/* ─── UN CASO, ENTERO ─── */}
        <section className="relative overflow-hidden border-b-2 border-white/15 bg-[#080706] py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-0 lg:divide-x-2 lg:divide-white/15 lg:px-20">
            <div className="lg:pr-14">
              <p className="reveal mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8413F]">Testimonios</p>
              <h2 className="reveal d1 font-display mb-6 text-3xl font-black uppercase leading-tight sm:text-4xl">Un caso, entero</h2>
              <p className="reveal d2 max-w-xl text-[20px] leading-[1.45] text-zinc-200 sm:text-[22px]">
                «Arranqué literalmente de cero y me daba vergüenza entrar al gym. Braian me armó algo re llevadero y hoy estoy muchísimo más fuerte. Un antes y un después.»
              </p>
              <p className="reveal d3 mt-4 font-bold text-white">Rodrigo Palacios <span className="font-normal text-zinc-500">— Escobar, Zona Norte · 6 meses</span></p>
            </div>
            <div className="reveal d4 mt-10 border-t-2 border-white/15 pt-8 lg:mt-0 lg:border-t-0 lg:pl-14 lg:pt-0">
              {shortQuotes.map((q) => (
                <p key={q.author} className="border-b border-white/10 py-4 text-[15px] leading-relaxed text-zinc-300 first:pt-0 last:border-b-0">
                  «{q.text}» <span className="text-zinc-500">{q.author}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ─── APP ─── */}
        <AppSection />

        {/* ─── PRECIOS ─── */}
        <section id="planes" className="relative overflow-hidden border-b-2 border-white/15 bg-[#080706] py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
            <div className="reveal mb-8">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8413F]">Programas Cuatrouno</p>
              <h2 className="font-display text-4xl font-black uppercase sm:text-5xl">Elegí tu plan</h2>
              <p className="mt-3 max-w-md text-[14px] text-zinc-400">Los tres incluyen rutina, alimentación y acompañamiento personalizado — la diferencia está en cuánto tiempo querés sostenerlo.</p>
            </div>

            <Pricing />

            <div className="reveal mt-8 flex items-start gap-4 border-2 border-white/15 px-6 py-5">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center bg-[#C41A1A]/15 text-[#E8413F]">
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
                  <Image key={l.name} src={l.src} alt={l.name} width={90} height={32} className={`grayscale-photo ${l.h} w-auto object-contain opacity-60 transition-opacity hover:opacity-100`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQSection />

        {/* ─── CTA FINAL / STATS BAND ─── */}
        <section className="relative overflow-hidden border-b-2 border-white/15 bg-[#080706] py-20 sm:py-28">
          <p aria-hidden className="font-display pointer-events-none absolute left-1/2 top-4 w-full -translate-x-1/2 whitespace-nowrap text-center text-[20vw] uppercase leading-none text-[#C41A1A]/10 sm:top-0 sm:text-[13vw]">
            Cuatrouno
          </p>

          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
            <h2 className="reveal font-display text-3xl uppercase leading-tight sm:text-4xl">¿Listo para tu<br /><span className="text-[#E8413F]">mejor versión?</span></h2>
            <p className="reveal d1 mx-auto mt-4 max-w-md text-[15px] text-zinc-400">Escribime por WhatsApp y armamos juntos el plan ideal para tu objetivo, tu rutina y tu realidad.</p>
            <div className="reveal d2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-8 py-5 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.99]">
                <WaIcon size={20} />
                WhatsApp
              </a>
              <a href="#diagnostico" className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-5 text-sm font-bold uppercase tracking-widest text-zinc-200 transition-colors hover:border-white/40 hover:text-white">
                Hacé el diagnóstico
              </a>
            </div>
          </div>

          <div className="reveal d3 relative z-10 mx-auto mt-16 grid max-w-4xl grid-cols-2 divide-x-2 divide-white/15 border-y-2 border-white/15 px-6 sm:grid-cols-4 sm:px-0">
            {[
              { n: "10", label: "Años de experiencia" },
              { n: "30+", label: "Alumnos activos" },
              { n: "7", label: "Certificaciones" },
              { n: "98%", label: "Satisfacción" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-7 text-center">
                <span className="font-display text-3xl uppercase text-[#E8413F] sm:text-4xl">{s.n}</span>
                <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#080706] py-10 pb-24 lg:pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between">
            <Image src="/assets/logo-superior-web.png" alt="Cuatrouno Training Club" width={140} height={55} className="grayscale-photo h-10 w-auto object-contain" />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="https://www.instagram.com/braianbarrientos__/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 border border-white/20 px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-[#C41A1A] hover:text-white">
                <IgIcon size={18} className="text-[#E8413F]" />
                @braianbarrientos__
              </a>
              <a href="https://www.instagram.com/cuatrouno_suplementos/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 border border-white/20 px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-[#C41A1A] hover:text-white">
                <IgIcon size={18} className="text-[#E8413F]" />
                @cuatrouno_suplementos
              </a>
            </div>
          </div>
          <p className="mt-8 border-t-2 border-white/15 pt-6 text-center text-[13px] text-zinc-600">© {new Date().getFullYear()} Cuatrouno Training Club. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* ─── FLOATING WA BUTTON (desktop only) ─── */}
      <a
        href={WA_LINK_MSG}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-8 right-8 z-50 hidden h-14 w-14 items-center justify-center bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform duration-200 hover:scale-105 active:scale-95 lg:flex"
      >
        <WaIcon size={26} />
      </a>

      <ScrollFx />
    </div>
  );
}
