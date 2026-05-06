import Image from "next/image";
import FAQSection from "./components/FAQ";
import Navbar from "./components/Navbar";

const WA_LINK = "https://wa.me/5493484689931";

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width={size} height={size} className="flex-shrink-0" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const testimonials = [
  {
    name: "Lucía Martínez",
    location: "Caballito, CABA",
    initials: "LM",
    color: "#C41A1A",
    time: "21:14",
    text: "En 3 meses con Braian tuve más cambios que en años entrenando sola. Lo mejor es que no te deja tirada nunca, le escribís y te responde. Se nota que le interesa de verdad.",
  },
  {
    name: "Rodrigo Palacios",
    location: "Escobar, Zona Norte",
    initials: "RP",
    color: "#1a6bc4",
    time: "20:48",
    text: "Arranqué literalmente de cero y me daba hasta vergüenza entrar al gym. Braian me armó algo re llevadero y hoy ya estoy muchísimo más fuerte y marcado. Un antes y un después.",
  },
  {
    name: "Carla González",
    location: "Belgrano, CABA",
    initials: "CG",
    color: "#1ac47a",
    time: "19:33",
    text: "La parte de alimentación me cambió la cabeza. Antes no entendía nada y vivía haciendo dietas falopa. Ahora como bien, entreno mejor y encima disfruto el proceso.",
  },
  {
    name: "Matías Fernández",
    location: "Maschwitz, Zona Norte",
    initials: "MF",
    color: "#c4a41a",
    time: "22:05",
    text: "Estaba re estancado hace más de un año. La videollamada inicial con Braian me abrió los ojos en un montón de cosas que hacía mal. En pocas semanas ya empecé a notar cambios.",
  },
  {
    name: "Valentina Ríos",
    location: "Tigre, Zona Norte",
    initials: "VR",
    color: "#c41a7a",
    time: "18:21",
    text: "Entreno desde casa y siempre se me complicó ver cambios. Me adaptó todo a lo que tenía y aun así cambió muchísimo mi físico. Súper conforme con el acompañamiento.",
  },
  {
    name: "Sebastián Herrera",
    location: "Benavídez, Zona Norte",
    initials: "SH",
    color: "#7a1ac4",
    time: "09:47",
    text: "Entré queriendo bajar unos kilos y terminé mejorando el físico completo. Lo que más destaco es que no te vende humo ni cosas imposibles. Todo es serio y sostenible.",
  },
  {
    name: "Florencia Aguilar",
    location: "Palermo, CABA",
    initials: "FA",
    color: "#c47a1a",
    time: "17:02",
    text: "El seguimiento por WhatsApp hace toda la diferencia. Sentís que realmente alguien está atrás tuyo ayudándote a progresar o corriendote continuamente (es lo que me hacia falta). Hoy me veo al espejo y estoy super conforme con mi cambio.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-clip bg-[#080706] text-white">
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
<section
  id="inicio"
  className="relative flex h-screen min-h-[650px] items-center overflow-hidden bg-[#080706]"
>
  {/* Imagen hero con degradé/máscara lateral */}
  <div
    className="absolute inset-y-0 right-0 w-[50%] pointer-events-none"
    style={{
      backgroundImage: "url('/assets/braian-hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 16%, black 76%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, transparent 0%, black 16%, black 76%, transparent 100%)",
    }}
  />

  {/* Oscurece imagen */}
  <div className="absolute inset-0 bg-black/35 pointer-events-none" />

  {/* Integración fuerte izquierda */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(to right, #080706 0%, #080706 35%, rgba(8,7,6,0.92) 48%, rgba(8,7,6,0.45) 62%, transparent 78%)",
    }}
  />

  {/* Integración derecha */}
  <div
    className="absolute inset-y-0 right-0 w-[38%] pointer-events-none"
    style={{
      background:
        "linear-gradient(to left, #080706 0%, rgba(8,7,6,0.85) 25%, rgba(8,7,6,0.35) 58%, transparent 100%)",
    }}
  />

  {/* Borde inferior */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(to top, #080706 0%, rgba(8,7,6,0.75) 12%, transparent 32%)",
    }}
  />

  {/* Borde superior */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(to bottom, rgba(8,7,6,0.85) 0%, transparent 22%)",
    }}
  />

  {/* Dot pattern texture */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
      backgroundSize: "22px 22px",
    }}
  />

  {/* Red glow — left */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse 55% 75% at 0% 55%, rgba(196,26,26,0.36), transparent 58%)",
    }}
  />

  <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20">
    <div className="w-full lg:max-w-[46%]">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#C41A1A]">
        Asesoría Personalizada y Deportiva
      </p>

      <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-[4vw]">
        TRANSFORMA<br />
        TU CUERPO,<br />
        <span className="text-[#C41A1A]">
          ALCANZÁ TU<br />MEJOR VERSIÓN.
        </span>
      </h1>

      <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-zinc-300">
        Plan individualizado de entrenamiento para ganar masa muscular, mejorar tu composición corporal y llegar a donde querés estar.
      </p>

      <div className="mt-6">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded bg-[#25D366] px-9 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
        >
          <WaIcon size={20} />
          ¡QUIERO EMPEZAR AHORA!
        </a>
      </div>

      <p className="mt-4 text-[11px] text-zinc-500">
        Desde{" "}
        <span className="line-through">$449.990</span>{" "}
        por solo{" "}
        <strong className="text-white">3x de $43.330</strong>{" "}
        o{" "}
        <strong className="text-white">$129.990</strong>{" "}
        al contado
      </p>
    </div>
  </div>

  <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce opacity-30">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</section>

        {/* ─── ABOUT BRAIAN ─── */}
        <section className="relative overflow-hidden bg-[#080706]">
          <div className="flex min-h-[80vh] flex-col lg:flex-row">

            {/* Photo */}
            <div className="relative h-[60vw] max-h-[700px] min-h-[380px] lg:h-auto lg:w-1/2">
              <Image
                src="/assets/braian-diploma.jpg"
                alt="Braian Barrientos"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/30 to-transparent lg:hidden" />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#080706] lg:block" />
            </div>

            {/* Text */}
            <div className="relative flex flex-col justify-center px-8 py-16 sm:px-14 lg:w-1/2 lg:px-16 xl:px-20">
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(ellipse 90% 60% at 100% 40%, rgba(196,26,26,0.12), transparent)" }}
              />

              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl xl:text-[2.8rem]">
                EMPECÉ EN EL GYM EN 2016 SIN GUÍA,{" "}
                <span className="text-[#C41A1A]">HOY AYUDO A PERSONAS A ENTRENAR CON ESTRUCTURA Y RESULTADOS.</span>
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-zinc-400">
                <p>
  Hola, soy{" "}
  <strong className="text-white">Braian Barrientos</strong>, especialista en entrenamiento personalizado y suplementación deportiva, con{" "}
  <strong className="text-white">10 años en el rubro</strong>{" "}
  ayudando a personas a transformar su físico, mejorar su rendimiento y construir hábitos sostenibles.
</p>
                <p>
                  Empecé en el gym en 2016 cometiendo todos los errores posibles. Esa experiencia me dio algo que ningún libro enseña:{" "}
                  <strong className="text-white">entender de verdad lo que vive alguien que empieza desde cero</strong>. Hoy la transformo en resultados reales para mis alumnos.
                </p>
                <p>
                  Fundé{" "}
                  <strong className="text-white">Cuatrouno Training Club</strong>{" "}
                  y{" "}
                  <strong className="text-white">Cuatrouno Suplementos</strong>. Todo ese recorrido lo pongo al servicio de tu progreso, para que vos no pierdas el tiempo que yo perdí.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#1f1f1f] pt-8">
                {[
                  { val: "10", label: "Años de exp." },
                  { val: "30+", label: "Alumnos activos" },
                  { val: "98%", label: "Satisfacción" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-4xl font-black text-[#C41A1A]">{s.val}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-600">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded bg-[#25D366] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
                >
                  <WaIcon />
                  QUIERO TRABAJAR CON BRAIAN
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="relative overflow-hidden bg-[#060504] py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(196,26,26,0.1), transparent)" }}
          />

          <div className="mb-12 px-6 sm:px-12 lg:px-20">
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              LO QUE DICEN<br />MIS ALUMNOS:
            </h2>
          </div>

          <div
            className="flex gap-4 overflow-x-auto pb-4 pl-6 pr-6 sm:pl-12 sm:pr-12 lg:pl-20"
            style={{ scrollbarWidth: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[280px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#0e0d0c] sm:w-[300px]"
              >
                <div className="flex items-center gap-3 border-b border-[#1a1a1a] bg-[#0a0908] px-4 py-3">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight text-white">{t.name}</p>
                    <p className="text-[10px] text-zinc-500">{t.location}</p>
                  </div>
                </div>
                <div className="px-4 py-5">
                  <div className="rounded-2xl rounded-tl-sm bg-[#1a1a1a] px-4 py-4">
                    <p className="text-[13px] leading-relaxed text-zinc-200">{t.text}</p>
                    <p className="mt-2 text-right text-[10px] text-zinc-600">{t.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="relative overflow-hidden bg-[#080706] py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(140,10,10,0.35) 0%, rgba(90,10,10,0.15) 55%, rgba(8,7,6,1) 85%)" }}
          />

          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

              {/* Title */}
              <div className="flex-shrink-0 lg:w-44 xl:w-52 lg:pt-2">
                <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                  ¿CÓMO<br />FUNCIONA?
                </h2>
              </div>

              {/* Steps */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    { num: "1", text: "Elegí el plan ideal para vos", img: "/assets/cf-1.jpg" },
                    { num: "2", text: "Completá tu ficha de evaluación", img: "/assets/cf-2.avif" },
                    { num: "3", text: "Enviá tus fotos para evaluación postural", img: "/assets/cf-3.webp" },
                  ].map((step) => (
                    <div key={step.num} className="group relative aspect-[4/3] cursor-default overflow-hidden rounded-xl">
                      <Image src={step.img} alt={step.text} fill className="scale-105 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-[10px] font-black uppercase tracking-wider text-[#C41A1A]">Paso {step.num}</p>
                        <p className="text-xs font-bold leading-tight text-white">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connecting line */}
                <div className="relative my-3 flex items-center gap-0">
                  <div className="h-px flex-1 bg-[#C41A1A]" />
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="mx-[9%] h-2 w-2 flex-shrink-0 rounded-full bg-[#C41A1A]" />
                  ))}
                  <div className="h-px flex-1 bg-[#C41A1A]" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    { num: "4", text: "Preparación de tu entrenamiento personalizado", img: "/assets/cf-4.jpg" },
                    { num: "5", text: "Videollamada de bienvenida con Braian", img: "/assets/cf-5.webp" },
                    { num: "6", text: "Envío de materiales y acompañamiento", img: "/assets/cf-6.jpeg" },
                  ].map((step) => (
                    <div key={step.num} className="group relative aspect-[4/3] cursor-default overflow-hidden rounded-xl">
                      <Image src={step.img} alt={step.text} fill className="scale-105 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-[10px] font-black uppercase tracking-wider text-[#C41A1A]">Paso {step.num}</p>
                        <p className="text-xs font-bold leading-tight text-white">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT YOU GET ─── */}
        <section className="relative bg-[#060504] py-20">
          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Incluido en tu plan</p>
            <h2 className="mb-12 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
              VE TODO LO QUE VAS<br />A TENER ACCESO
            </h2>
            <div className="grid grid-cols-1 gap-px bg-[#141414] sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🎥", title: "VIDEOLLAMADA INICIAL DE ALINEAMIENTO", text: "Un análisis completo de tu entrenamiento, alimentación y salud para orientarte de forma 100% asertiva." },
                { icon: "📊", title: "EVALUACIONES MENSUALES", text: "Entendé cómo va tu proceso y cuáles fueron los resultados que alcanzaste mes a mes." },
                { icon: "📋", title: "PRESCRIPCIÓN DE ENTRENAMIENTO INDIVIDUAL", text: "Sin rutinas genéricas. Recibí un entrenamiento específico para tu objetivo." },
                { icon: "📱", title: "SOPORTE INDIVIDUAL", text: "Acceso directo por WhatsApp para resolver tus dudas en tiempo real y recibir feedback inmediato." },
                { icon: "🥗", title: "GUÍA DE ALIMENTACIÓN COMPLEMENTARIA", text: "Orientación nutricional adaptada a tus objetivos y rutina, incluida en tu plan." },
                { icon: "📄", title: "MATERIALES DE APOYO EN PDF", text: "Todo el material de apoyo para maximizar tus resultados a lo largo del proceso." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 bg-[#0a0908] px-8 py-8 transition-colors hover:bg-[#0f0e0c]">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="text-sm font-black uppercase leading-tight text-[#C41A1A]">{item.title}</h3>
                  <p className="text-[13px] leading-relaxed text-zinc-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOR WHOM ─── */}
        <section className="relative overflow-hidden bg-[#080706] py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(196,26,26,0.1), transparent)" }}
          />

          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-16 lg:flex-row lg:items-center">

              {/* Collage */}
              <div className="relative h-[480px] flex-shrink-0 lg:w-[42%]">
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

              {/* List */}
              <div className="flex-1">
                <h2 className="mb-8 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
                  ¿PARA QUIÉN<br />
                  <span className="text-[#C41A1A]">ES ESTO?</span>
                </h2>
                <div className="space-y-1">
                  {[
                    { label: "Para principiantes:", text: "Que todavía no hacen ejercicio o llevan menos de 6 meses y quieren empezar de la manera correcta." },
                    { label: "Para intermedios:", text: "Que entrenan hace al menos 6 meses, pero se sienten estancados, sin grandes resultados visibles." },
                    { label: "Para avanzados:", text: "Que ya entrenan hace más de un año y buscan más rendimiento y resultados más rápidos." },
                    { label: null, text: "Para personas que ya no se reconocen al mirarse al espejo y necesitan ayuda para bajar de peso y recuperar la autoestima." },
                    { label: null, text: "Para personas que tienen mucha dificultad para ganar masa muscular." },
                    { label: null, text: "Para personas con una rutina agitada que necesitan el entrenamiento adaptado a su ritmo de vida." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 border-b border-[#141414] py-3.5">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-[#C41A1A]">
                        <svg width="10" height="8" viewBox="0 0 12 9" fill="none" aria-hidden>
                          <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-[14px] leading-relaxed text-zinc-300">
                        {item.label && <span className="font-bold text-white">{item.label} </span>}
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded bg-[#25D366] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
                  >
                    <WaIcon />
                    ¡SOY CANDIDATO, EMPEZAR!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CUATROUNO SUPLEMENTOS ─── */}
        <section className="relative overflow-hidden bg-[#060504] py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(196,26,26,0.1), transparent)" }}
          />

          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-6 lg:max-w-[40%]">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Más que un entrenador</p>
                <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                  SOY FUNDADOR DE{" "}
                  <span className="text-[#C41A1A]">CUATROUNO SUPLEMENTOS</span>
                </h2>
                <div className="space-y-4 text-[14px] leading-relaxed text-zinc-400">
                  <p>Tengo una tienda física especializada en suplementación deportiva. Me permite asesorarte con honestidad sobre qué tomar, cuándo y en qué dosis —{" "}
                    <strong className="text-white">sin humo, sin comisiones, sin nada raro. El objetivo principal es ayudarte.</strong>
                  </p>
                  <p>Combinando tu plan de entrenamiento con la suplementación correcta podés{" "}
                    <strong className="text-white">acelerar significativamente tus resultados</strong>.
                  </p>
                  <p>Esta experiencia me diferencia de cualquier entrenador:{" "}
                    <strong className="text-white">yo entiendo el ecosistema completo de la transformación física.</strong>
                  </p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded bg-[#25D366] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
                >
                  <WaIcon />
                  QUIERO ASESORÍA COMPLETA
                </a>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-1">
                <div className="relative min-h-[380px] flex-1 overflow-hidden rounded-2xl">
                  <Image src="/assets/cuatro-uno-local.jpg" alt="Cuatrouno Suplementos" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060504]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/10 bg-black/80 p-3 backdrop-blur">
                    <Image src="/assets/logo-suplementos.jpg" alt="" width={60} height={30} className="h-6 w-auto rounded" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">Tienda física</span>
                  </div>
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl" style={{ minHeight: "380px" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=-34.348825,-58.794437&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "380px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cuatrouno Suplementos — ubicación"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMMITMENT ─── */}
        <section className="relative overflow-hidden bg-[#080706] py-20">
          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-black uppercase leading-tight text-[#C41A1A] sm:text-4xl">
                  MI COMPROMISO ES<br />CON TU RESULTADO
                </h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-zinc-400">
                  <p>Durante tu plan tendrás soporte disponible para garantizar que ejecutes toda la planificación:{" "}
                    <strong className="text-white">EL ÉXITO DEL ALUMNO.</strong>
                  </p>
                  <p>Voy a motivarte, ayudarte a romper las barreras del día a día que te alejan de tus objetivos y a hacer los ajustes necesarios para que tu plan sea el más perfecto posible para tu realidad, rutina y hábitos.</p>
                </div>
              </div>
              <div className="relative h-[360px] flex-1 overflow-hidden rounded-2xl lg:max-w-[50%]">
                <video
                  src="/assets/compromiso-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080706]/20" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="planes" className="relative overflow-hidden bg-[#050404] py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 40% 70% at 0% 50%, rgba(196,26,26,0.22), transparent 60%)" }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 30% 50% at 100% 50%, rgba(26,90,196,0.07), transparent 60%)" }}
          />

          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">
              Programas Cuatrouno
            </p>
            <h2 className="mb-3 text-center text-4xl font-black uppercase sm:text-5xl">ELEGÍ TU PLAN</h2>
            <p className="mb-14 text-center text-[15px] text-zinc-500">
              Todos los planes incluyen entrenamiento, materiales de apoyo y acompañamiento.
            </p>

            <div className="grid items-end gap-4 md:grid-cols-3">

              {/* PLAN BÁSICO */}
              <div className="overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0c0b0a]">
                <div className="bg-zinc-700/40 px-6 pb-5 pt-5 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">12 semanas</span>
                  <h3 className="mt-2 text-xl font-black uppercase text-white">Plan Básico</h3>
                </div>
                <div className="px-7 pb-7 pt-6">
                  <div className="mb-6 text-center">
                    <p className="text-2xl font-black text-white">3x de $43.330</p>
                    <p className="mt-1 text-[13px] text-zinc-500">o $129.990 al contado</p>
                  </div>
                  <ul>
                    {[
                      "Acceso al sistema de entrenamiento",
                      "Rutina completa estructurada",
                      "Materiales de apoyo en PDF",
                      "Videollamada de bienvenida",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-[#1a1a1a] py-3 text-[13px] text-zinc-400">
                        <svg className="flex-shrink-0" width="12" height="10" viewBox="0 0 12 9" fill="none" aria-hidden>
                          <path d="M1 4L4.5 7.5L11 1" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-zinc-700 py-3.5 text-[13px] font-black uppercase tracking-wider text-white transition-colors hover:bg-zinc-600"
                  >
                    <WaIcon size={16} />
                    EMPEZAR AHORA
                  </a>
                </div>
              </div>

              {/* PLAN COMPLETO — destacado */}
              <div className="overflow-hidden rounded-2xl ring-2 ring-[#D4A843]/60 md:-mt-6">
                <div className="relative px-6 pb-6 pt-5 text-center bg-[linear-gradient(135deg,#3D2900_0%,#A07010_25%,#E8B830_50%,#A07010_75%,#3D2900_100%)]">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.12)_50%,transparent_65%)]" />
                  <span className="absolute right-3 top-3 z-10 rounded bg-black/40 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#F0C040]">
                    RECOMENDADO
                  </span>
                  <div className="relative z-10 text-4xl leading-none">🏆</div>
                  <p className="relative z-10 mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                    24 semanas
                  </p>
                  <h3 className="relative z-10 mt-1 text-xl font-black uppercase text-white drop-shadow-md">
                    Plan Completo
                  </h3>
                </div>
                <div className="bg-[#0c0b0a] px-7 pb-7 pt-6">
                  <div className="mb-6 text-center">
                    <p className="text-2xl font-black text-white">3x de $83.330</p>
                    <p className="mt-1 text-[13px] text-zinc-500">o $249.990 al contado</p>
                  </div>
                  <ul>
                    {[
                      "Todo lo del Plan Básico",
                      "Protocolo completo de entrenamiento",
                      "Guía de alimentación práctica",
                      "Checklist de compras y comidas",
                      "Soporte individual por WhatsApp",
                      "Descuentos en Cuatrouno Suplementos",
                      "Indumentaria oficial Cuatrouno Training Club"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-[#1a1a1a] py-3 text-[13px] text-zinc-400">
                        <svg className="flex-shrink-0" width="12" height="10" viewBox="0 0 12 9" fill="none" aria-hidden>
                          <path d="M1 4L4.5 7.5L11 1" stroke="#D4A843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-[linear-gradient(135deg,#A07010,#E8B830,#A07010)] py-3.5 text-[13px] font-black uppercase tracking-wider text-black transition-opacity hover:opacity-90"
                  >
                    EMPEZAR AHORA
                  </a>
                  <p className="mt-2 text-center text-[11px] font-bold text-[#D4A843]">¡El más elegido!</p>
                </div>
              </div>

              {/* PLAN PREMIUM */}
              <div className="overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0c0b0a]">
                <div className="border-b border-[#1a1a1a] bg-[#080706] px-6 pb-5 pt-5 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">48 semanas</span>
                  <h3 className="mt-2 text-xl font-black uppercase text-white">Plan Premium</h3>
                </div>
                <div className="px-7 pb-7 pt-6">
                  <div className="mb-6 text-center">
                    <p className="text-2xl font-black text-white">3x de $149.997</p>
                    <p className="mt-1 text-[13px] text-zinc-500">o $449.990 al contado</p>
                  </div>
                  <ul>
                    {[
                      "Todo lo del Plan Completo",
                      "KIT inicial suplementación básica ¡GRATIS!",
                      "Indumentaria oficial Cuatrouno Training Club",
                      "Acompañamiento personalizado",
                      "Videollamada cada 30 días",
                      "Seguimiento continuo del progreso",
                      "Descuentos en Cuatrouno Suplementos",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-[#1a1a1a] py-3 text-[13px] text-zinc-400">
                        <svg className="flex-shrink-0" width="12" height="10" viewBox="0 0 12 9" fill="none" aria-hidden>
                          <path d="M1 4L4.5 7.5L11 1" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded border border-zinc-700 bg-[#080706] py-3.5 text-[13px] font-black uppercase tracking-wider text-white transition-colors hover:bg-[#111]"
                  >
                    <WaIcon size={16} />
                    EMPEZAR AHORA
                  </a>
                </div>
              </div>
            </div>

            {/* Cash benefit */}
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#C41A1A]/20 bg-[#0f0808] px-7 py-6">
              <span className="mt-0.5 text-2xl">💥</span>
              <div>
                <p className="font-black uppercase text-white">Mejor precio pagando al contado</p>
                <p className="mt-1 text-[13px] leading-relaxed text-zinc-500">
                  Abonando el programa completo en un solo pago accedés a un precio especial. Más compromiso con el proceso, menos costo total — y los resultados llegan antes.
                </p>
              </div>
            </div>

            {/* Payment logos */}
            <div className="mt-12 flex flex-col items-center gap-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">Medios de pago aceptados</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { src: "/assets/mercadopago-nuevo-logo.webp", name: "Mercado Pago" },
                  { src: "/assets/brubank-logo.png", name: "Brubank" },
                  { src: "/assets/galicia-logo.png", name: "Galicia" },
                  { src: "/assets/santander-logo.png", name: "Santander" },
                  { src: "/assets/bna-logo.png", name: "BNA+" },
                ].map(({ src, name }) => (
                  <div key={name} className="relative h-8 w-20">
                    <Image
                      src={src}
                      alt={name}
                      fill
                      className="object-contain opacity-50 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQSection />

        {/* ─── FINAL CTA ─── */}
        <section className="bg-[#060504] py-10">
          <div className="mx-auto max-w-6xl px-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded bg-[#25D366] py-6 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
            >
              <WaIcon size={20} />
              ENTRAR EN CONTACTO POR WHATSAPP
            </a>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#111] bg-[#060504] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <Image
            src="/assets/logo-superior-web.png"
            alt="Cuatrouno Training Club"
            width={140}
            height={55}
            className="h-12 w-auto object-contain"
          />
          <p className="text-[13px] text-zinc-600">
            © {new Date().getFullYear()} Cuatrouno Training Club. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
