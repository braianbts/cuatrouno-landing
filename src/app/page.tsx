import Image from "next/image";
import FAQSection from "./components/FAQ";
import Navbar from "./components/Navbar";

const WA_LINK = "https://wa.me/5493484689931";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#3a1010] bg-[#1a1010] px-5 py-4 text-sm leading-relaxed text-zinc-200">
      {children}
    </div>
  );
}

function WaIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="18"
      height="18"
      className="flex-shrink-0"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Deco({
  char = "×",
  className = "",
  blur = false,
}: {
  char?: "×" | "+";
  className?: string;
  blur?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute select-none font-black leading-none text-[#C41A1A] ${className}`}
      style={blur ? { filter: "blur(1.5px)" } : undefined}
    >
      {char}
    </span>
  );
}

function BrandWatermark({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none font-black uppercase leading-none ${className}`}
      style={{ color: "transparent", WebkitTextStroke: "1px rgba(196,26,26,0.07)" }}
    >
      {text}
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-clip bg-[#0d0b09] text-white">

      {/* ─── NAVBAR ─── */}
      <Navbar />

      <main>

        {/* ─── HERO ─── */}
        <section id="inicio" className="relative flex min-h-[90vh] items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_0%_50%,_rgba(196,26,26,0.35),_transparent)]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 flex select-none flex-col justify-center overflow-hidden">
            <div className="whitespace-nowrap text-[13vw] font-black uppercase leading-none text-[#C41A1A]/[0.05]">TRANSFORMA</div>
            <div className="ml-[8%] whitespace-nowrap text-[13vw] font-black uppercase leading-none text-[#C41A1A]/[0.05]">TU CUERPO</div>
            <div className="whitespace-nowrap text-[13vw] font-black uppercase leading-none text-[#C41A1A]/[0.05]">ENTRENA</div>
          </div>
          <Deco char="×" className="right-[52%] top-10 text-5xl opacity-50" />
          <Deco char="+" className="right-12 top-16 text-6xl opacity-40" blur />
          <Deco char="×" className="right-8 bottom-24 text-8xl opacity-30" />
          <Deco char="×" className="left-6 bottom-16 text-4xl opacity-35" blur />
          <Deco char="+" className="left-20 top-20 text-3xl opacity-25" />
          <BrandWatermark text="41" className="right-[-2vw] top-1/2 -translate-y-1/2 text-[40vw]" />

          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-[2.75rem] xl:text-5xl">
                TRANSFORMA TU CUERPO,{" "}
                <span className="text-[#D42020]">ASESORÍA</span>{" "}
                PERSONALIZADA Y DEPORTIVA.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-300">
                Accedé a un plan individualizado de entrenamiento para desarrollar más masa
                muscular, mejorar tu composición corporal y alcanzar tu mejor versión.
              </p>
              <div className="mt-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
                >
                  <WaIcon />
                  ¡QUIERO EMPEZAR AHORA!
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/braian-hero.jpg"
                    alt="Braian Barrientos — Entrenador Personal"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-16 left-0 flex -translate-x-4 items-center gap-3 rounded-xl border border-[#3a1010] bg-[#1a1010]/95 p-4 shadow-xl backdrop-blur">
                  <span className="text-2xl">💪</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-400">Alumnos activos</p>
                    <p className="text-xl font-black text-white">30+</p>
                  </div>
                </div>
                <div className="absolute right-0 top-8 translate-x-4 rounded-xl border border-[#3a1010] bg-[#1a1010]/95 p-4 shadow-xl backdrop-blur">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-400">Satisfacción</p>
                  <p className="text-xl font-black text-white">98%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="relative overflow-hidden py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 85% at 50% 50%, rgba(140,10,10,0.65) 0%, rgba(90,10,10,0.4) 45%, rgba(13,11,9,1) 80%)",
            }}
          />
          <Deco char="×" className="left-4 top-8 text-5xl opacity-35" />
          <Deco char="+" className="left-10 bottom-10 text-7xl opacity-25" blur />
          <Deco char="×" className="right-6 top-12 text-4xl opacity-40" blur />
          <Deco char="×" className="right-14 bottom-8 text-6xl opacity-30" />
          <div aria-hidden className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 select-none xl:block">
            <div className="text-[3.2vw] font-black uppercase leading-snug text-white/[0.06]">
              <div>COMO</div><div>FUNCIONA</div>
            </div>
          </div>
          <div aria-hidden className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 select-none text-right xl:block">
            <div className="text-[3.2vw] font-black uppercase leading-snug text-white/[0.06]">
              <div>COMO</div><div>FUNCIONA</div>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-4xl font-black uppercase text-[#D42020] sm:text-5xl">
              ¿CÓMO FUNCIONA?
            </h2>
            <div className="grid grid-cols-2 gap-2 lg:gap-3">
              {[
                { num: "1", text: "Elegí el plan ideal para vos", img: "/assets/cf-1.jpg" },
                { num: "2", text: "Completá tu ficha de evaluación", img: "/assets/cf-2.avif" },
                { num: "3", text: "Enviá tus fotos para evaluación postural", img: "/assets/cf-3.webp" },
                { num: "4", text: "Preparación de tu entrenamiento personalizado", img: "/assets/cf-4.jpg" },
                { num: "5", text: "Videollamada de bienvenida con Braian", img: "/assets/cf-5.webp" },
                { num: "6", text: "Envío de materiales y acompañamiento", img: "/assets/cf-6.jpeg" },
              ].map((step) => (
                <div key={step.num} className="group relative aspect-[16/10] cursor-default overflow-hidden rounded-lg">
                  <Image src={step.img} alt={step.text} fill className="scale-105 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#7a1010]/30 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
                  <div className="absolute bottom-2 right-3">
                    <span className="font-black italic leading-none text-[#C41A1A]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
                      {step.num}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4" style={{ right: "clamp(3.5rem, 9vw, 6rem)" }}>
                    <p className="text-sm font-black italic leading-tight text-white lg:text-base">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHATSAPP CTA ─── */}
        <section className="bg-[#0d0b09] py-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-sm bg-[#25D366] py-6 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
            >
              <WaIcon />
              ENTRAR EN CONTACTO POR WHATSAPP
            </a>
          </div>
        </section>

        {/* ─── MEET THE TRAINER ─── */}
        <section className="relative overflow-hidden bg-[#0d0b09] py-20">
          <Deco char="+" className="right-8 top-10 text-8xl opacity-20" blur />
          <Deco char="×" className="left-4 bottom-16 text-6xl opacity-25" />
          <Deco char="×" className="right-20 bottom-10 text-3xl opacity-30" blur />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Columna izquierda — foto principal + card superpuesta */}
              <div className="relative">
                <div aria-hidden className="pointer-events-none absolute inset-0 flex select-none flex-col justify-center overflow-hidden">
                  {["BRAIAN BARRIENTOS", "BRAIAN BARRIENTOS", "BRAIAN BARRIENTOS"].map((t, i) => (
                    <div key={i} className="whitespace-nowrap text-[6vw] font-black uppercase leading-tight text-white/[0.04]">{t}</div>
                  ))}
                </div>

                {/* Foto principal */}
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/braian-diploma.jpg"
                    alt="Braian Barrientos con diploma y profesores"
                    width={500}
                    height={600}
                    className="h-[520px] w-full object-cover object-center"
                  />
                </div>

                {/* Card flotando — mobile: dentro del marco / desktop: sale del marco */}
                <div className="absolute bottom-4 right-4 z-10 w-28 overflow-hidden rounded-xl border-2 border-[#C41A1A] shadow-2xl sm:w-32 lg:bottom-0 lg:right-0 lg:w-36 lg:translate-x-1/3 lg:translate-y-1/4">
                  <Image
                    src="/assets/yohace10.jpg"
                    alt="Braian Barrientos en el gym — 2016"
                    width={483}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Columna derecha — texto */}
              <div className="space-y-4">
                <h2 className="text-3xl font-black uppercase text-[#D42020] sm:text-4xl">
                  CONOCÉ A TU ENTRENADOR
                </h2>
                <InfoBox>
                  Hola, soy Braian Barrientos, especialista en entrenamiento personalizado y
                  suplementación deportiva, con más de 10 años en el rubro trabajando con
                  principiantes, intermedios y avanzados.
                </InfoBox>
                <InfoBox>
                  Empecé en el gym en 2016, sin guía, sin método y cometiendo todos los errores
                  posibles. Esa experiencia me dio algo que ningún libro enseña: entender de
                  verdad lo que vive alguien que empieza desde cero. Hoy la transformo en
                  resultados reales para mis alumnos.
                </InfoBox>
                <InfoBox>
                  A lo largo de los años fui certificándome, creando Cuatrouno Training Club y
                  fundando Cuatrouno Suplementos. Todo ese recorrido lo pongo al servicio de
                  tu progreso, para que vos no pierdas el tiempo que yo perdí y llegues más
                  rápido a donde querés estar.
                </InfoBox>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CUATROUNO SUPLEMENTOS ─── */}
        <section className="relative overflow-hidden bg-[#0d0b09] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,_rgba(196,26,26,0.18),_transparent)]" />
          <Deco char="×" className="left-8 top-10 text-7xl opacity-30" />
          <Deco char="+" className="left-24 bottom-12 text-5xl opacity-25" blur />
          <Deco char="×" className="right-10 bottom-20 text-4xl opacity-35" blur />
          <BrandWatermark text="41" className="left-[-5vw] top-1/2 -translate-y-1/2 text-[35vw]" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#C41A1A]">Más que un entrenador</p>
              <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                SOY FUNDADOR DE{" "}
                <span className="text-[#D42020]">CUATROUNO SUPLEMENTOS</span>
              </h2>
            </div>

            {/* 3-col layout: imagen | texto | mapa */}
            <div className="grid items-stretch gap-6 lg:grid-cols-3">

              {/* Imagen del local */}
              <div className="relative h-[380px] overflow-hidden rounded-2xl lg:h-auto">
                <Image
                  src="/assets/cuatro-uno-local.jpg"
                  alt="Frente Cuatrouno Suplementos"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-[#3a1010] bg-[#0d0b09]/90 p-3 backdrop-blur">
                  <Image
                    src="/assets/logo-suplementos.jpg"
                    alt="Cuatrouno Suplementos"
                    width={70}
                    height={35}
                    className="h-7 w-auto rounded object-contain"
                  />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Tienda física</span>
                </div>
              </div>

              {/* Texto */}
              <div className="flex flex-col justify-center space-y-4">
                <InfoBox>
                  Tengo una tienda física especializada en suplementación deportiva en Buenos Aires.
                  Me permite asesorarte con honestidad sobre qué tomar, cuándo y en qué dosis —
                  sin humo, sin comisiones, sin intereses ocultos.
                </InfoBox>
                <InfoBox>
                  Combinando tu plan de entrenamiento con la suplementación correcta podés acelerar
                  significativamente tus resultados. Te guío en ambas cosas: lo que hacés en el gym
                  y lo que ponés en tu cuerpo fuera de él.
                </InfoBox>
                <InfoBox>
                  Esta experiencia me diferencia de cualquier entrenador que solo conoce el gimnasio:
                  yo entiendo el ecosistema completo de la transformación física.
                </InfoBox>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
                >
                  <WaIcon />
                  QUIERO ASESORÍA COMPLETA
                </a>
              </div>

              {/* Mapa Google Maps */}
              <div className="overflow-hidden rounded-2xl" style={{ minHeight: "380px" }}>
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
        </section>

        {/* ─── PARA QUIÉN ES ─── */}
        <section className="relative overflow-hidden bg-[#0d0b09] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_0%_50%,_rgba(196,26,26,0.12),_transparent)]" />
          <Deco char="×" className="left-6 top-14 text-5xl opacity-60" />
          <Deco char="×" className="left-16 top-[45%] text-3xl opacity-45" blur />
          <Deco char="×" className="left-8 bottom-20 text-6xl opacity-50" />
          <Deco char="+" className="left-28 top-28 text-4xl opacity-35" blur />
          <Deco char="×" className="right-8 top-16 text-6xl opacity-55" />
          <Deco char="×" className="right-20 bottom-24 text-4xl opacity-40" blur />
          <Deco char="+" className="right-6 top-[38%] text-5xl opacity-35" blur />
          <div aria-hidden className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 select-none rounded-full border border-[#C41A1A]/20" />
          <div aria-hidden className="pointer-events-none absolute -right-10 top-1/2 h-48 w-48 -translate-y-1/2 select-none rounded-full border border-[#C41A1A]/12" />
          <div aria-hidden className="pointer-events-none absolute left-8 top-1/2 h-10 w-6 select-none rounded-full border-2 border-[#C41A1A]/25" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-4xl font-black uppercase text-[#D42020] sm:text-5xl">
              ¿PARA QUIÉN ES?
            </h2>

            <div className="grid items-start gap-8 lg:grid-cols-2">

              {/* Collage — mosaic: izquierda alta + derecha dos apiladas */}
              <div className="relative h-[520px]">
                {/* Izquierda — imagen alta */}
                <div className="absolute bottom-0 left-0 top-0 overflow-hidden rounded-2xl" style={{ width: "47%" }}>
                  <Image src="/assets/hombre-panza-gym.webp" alt="Entrenamiento" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Derecha arriba */}
                <div className="absolute right-0 top-0 overflow-hidden rounded-2xl" style={{ width: "50%", height: "49%" }}>
                  <Image src="/assets/rollo2.avif" alt="Entrenamiento" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                </div>
                {/* Derecha abajo */}
                <div className="absolute bottom-0 right-0 overflow-hidden rounded-2xl" style={{ width: "50%", height: "49%" }}>
                  <Image src="/assets/rollo3.avif" alt="Entrenamiento" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2">
                {[
                  { label: "Para principiantes:", text: "Personas que todavía no hacen ejercicio o llevan menos de 6 meses y quieren empezar de la manera correcta, con orientación." },
                  { label: "Para intermedios:", text: "Personas que entrenan hace al menos 6 meses, pero se sienten estancadas, sin grandes resultados visibles." },
                  { label: "Para avanzados:", text: "Personas que ya entrenan hace más de un año y están buscando más rendimiento y resultados aún mejores y más rápidos." },
                  { label: null, text: "Para personas que ya no se reconocen al mirarse al espejo, que necesitan ayuda para bajar de peso y recuperar la autoestima." },
                  { label: null, text: "Para personas que tienen mucha dificultad para ganar masa muscular, que sus piernas y glúteos, por ejemplo, nunca crecen." },
                  { label: null, text: "Para personas que buscan un abdomen más marcado, que están en la lucha por más definición muscular y menos flacidez." },
                  { label: null, text: "Para personas que tienen dificultad para ser constantes con el ejercicio y quieren un soporte ágil y eficiente." },
                  { label: null, text: "Para personas que tienen una rutina agitada y necesitan el entrenamiento justo adaptado a su ritmo de vida." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-[#2a1010] bg-[#110808]/70 px-4 py-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm bg-[#C41A1A]">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden>
                        <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {item.label && <span className="font-bold text-[#C41A1A]">{item.label} </span>}
                      {item.text}
                    </p>
                  </div>
                ))}
                <div className="pt-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
                  >
                    <WaIcon />
                    ¡SOY CANDIDATO, EMPEZAR!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT YOU GET ─── */}
        <section className="relative overflow-hidden bg-[#0d0b09] py-20">
          <Deco char="×" className="left-4 top-10 text-4xl opacity-40" blur />
          <Deco char="+" className="left-16 bottom-12 text-8xl opacity-20" />
          <Deco char="×" className="right-10 top-24 text-6xl opacity-30" />
          <Deco char="×" className="right-6 bottom-8 text-3xl opacity-35" blur />
          <div aria-hidden className="pointer-events-none absolute bottom-1/4 left-8 h-12 w-6 select-none rounded-full border-2 border-[#C41A1A]/30" />
          <BrandWatermark text="41" className="right-0 top-0 text-[25vw]" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-black uppercase text-[#D42020] sm:text-4xl lg:text-5xl">
              VE TODO LO QUE VAS A TENER ACCESO
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🎥", title: "VIDEOLLAMADA INICIAL DE ALINEAMIENTO", text: "Un análisis completo de tu entrenamiento, alimentación y salud para orientarte de forma 100% asertiva." },
                { icon: "📊", title: "EVALUACIONES MENSUALES PARA IDENTIFICAR TU PROGRESO", text: "Entendé cómo va tu proceso y cuáles fueron los resultados que alcanzaste mes a mes." },
                { icon: "📋", title: "PRESCRIPCIÓN DE ENTRENAMIENTO INDIVIDUAL", text: "Sin rutinas genéricas. Recibí un entrenamiento específico para tu objetivo que te haga evolucionar mucho más rápido." },
                { icon: "📱", title: "SOPORTE INDIVIDUAL", text: "Acceso directo por WhatsApp para resolver tus dudas en tiempo real y recibir feedback inmediato." },
                { icon: "🥗", title: "GUÍA DE ALIMENTACIÓN COMPLEMENTARIA", text: "Al contratar la asesoría también recibirás orientación nutricional adaptada a tus objetivos y rutina." },
                { icon: "📄", title: "MATERIALES DE APOYO", text: "Además del acompañamiento recibirás todo el material de apoyo en PDF para maximizar tus resultados." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center">
                  <span className="text-5xl">{item.icon}</span>
                  <h3 className="text-sm font-black uppercase leading-tight text-[#C41A1A]">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SISTEMA COMPLETO ─── */}
        <section className="relative overflow-hidden bg-[#0d0b09] py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_rgba(196,26,26,0.08),_transparent)]" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-black uppercase text-white sm:text-3xl">
              NO ES SOLO ENTRENAR.{" "}
              <span className="text-[#D42020]">ES UN SISTEMA COMPLETO.</span>
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "🏋️", title: "Entrenamiento estructurado" },
                { icon: "🥗", title: "Alimentación organizada" },
                { icon: "📊", title: "Seguimiento real" },
                { icon: "🧠", title: "Estrategia de progreso" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 rounded-xl border border-[#2a1010] bg-[#111111] px-5 py-4">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="font-black uppercase leading-tight text-[#D42020] text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ALIMENTACIÓN INTELIGENTE ─── */}
        <section className="relative overflow-hidden bg-[#0d0b09] py-14">
          <Deco char="+" className="left-8 top-12 text-7xl opacity-20" blur />
          <Deco char="×" className="right-6 top-16 text-5xl opacity-25" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-[#C41A1A]">Incluido en tu plan</p>
            <h2 className="mb-8 text-center text-2xl font-black uppercase text-white sm:text-3xl">
              ALIMENTACIÓN INTELIGENTE,{" "}
              <span className="text-[#D42020]">SIN COMPLICACIONES.</span>
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { emoji: "📋", label: "Guía de alimentos según tu objetivo" },
                { emoji: "🍽️", label: "Ejemplos de comidas reales y sostenibles" },
                { emoji: "🛒", label: "Checklist de compras para el super" },
                { emoji: "📅", label: "Organización práctica semanal" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-xl border border-[#2a1010] bg-[#111111] px-5 py-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <p className="font-bold text-white text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="planes" className="relative overflow-hidden bg-[#0d0b09] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,_rgba(196,26,26,0.1),_transparent)]" />
          <Deco char="×" className="left-6 top-16 text-5xl opacity-30" />
          <Deco char="+" className="left-10 bottom-8 text-7xl opacity-20" blur />
          <Deco char="×" className="right-8 top-10 text-4xl opacity-35" blur />
          <Deco char="×" className="right-20 bottom-16 text-6xl opacity-25" />
          <BrandWatermark text="PLANES" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw]" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-[#C41A1A]">Programas Cuatrouno</p>
            <h2 className="mb-3 text-center text-4xl font-black uppercase text-white sm:text-5xl">
              ELEGÍ TU PLAN
            </h2>
            <p className="mb-12 text-center text-base text-zinc-400">
              Todos los planes incluyen entrenamiento, materiales de apoyo y acompañamiento.<br className="hidden sm:block" />
              Cuanto más largo el plan, más completo el sistema.
            </p>

            <div className="grid items-end gap-4 md:grid-cols-3">

              {/* PLAN BÁSICO */}
              <div className="overflow-hidden rounded-xl bg-[#111111] shadow-xl">
                <div className="relative bg-zinc-600 px-6 pb-5 pt-4 text-center">
                  <span className="absolute right-4 top-3 text-[10px] font-black uppercase tracking-widest text-zinc-300">12 semanas</span>
                  <h3 className="mt-3 text-2xl font-black uppercase text-white">Plan Básico</h3>
                </div>
                <div className="px-6 pb-6 pt-5">
                  <div className="mb-5 text-center">
                    <p className="text-2xl font-black text-white">3x de $43.330</p>
                    <p className="mt-1 text-sm text-zinc-400">o $129.990 al contado</p>
                  </div>
                  <ul>
                    {[
                      "Acceso al sistema de entrenamiento",
                      "Rutina completa estructurada",
                      "Materiales de apoyo en PDF",
                      "Videollamada de bienvenida",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-zinc-800 py-3 text-sm text-zinc-300">
                        <svg className="flex-shrink-0" width="14" height="11" viewBox="0 0 12 9" fill="none" aria-hidden>
                          <path d="M1 4L4.5 7.5L11 1" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-zinc-600 py-3.5 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-zinc-500">
                    <WaIcon />EMPEZAR AHORA
                  </a>
                </div>
              </div>

              {/* PLAN COMPLETO — destacado */}
              <div className="overflow-hidden rounded-xl bg-[#111111] shadow-2xl ring-2 ring-[#D4A843]/60 md:-mt-6">
                <div className="relative px-6 pb-6 pt-5 text-center bg-[linear-gradient(135deg,#3D2900_0%,#A07010_25%,#E8B830_50%,#A07010_75%,#3D2900_100%)]">
                  {/* Shimmer line */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.12)_50%,transparent_65%)]" />
                  <span className="absolute right-3 top-3 z-10 rounded bg-black/50 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#F0C040]">
                    RECOMENDADO
                  </span>
                  <div className="relative z-10 text-4xl leading-none">🏆</div>
                  <p className="relative z-10 mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">24 semanas</p>
                  <h3 className="relative z-10 mt-1 text-2xl font-black uppercase text-white drop-shadow-md">Plan Completo</h3>
                </div>
                <div className="px-6 pb-6 pt-5">
                  <div className="mb-5 text-center">
                    <p className="text-2xl font-black text-white">3x de $83.330</p>
                    <p className="mt-1 text-sm text-zinc-400">o $249.990 al contado</p>
                  </div>
                  <ul>
                    {[
                      "Todo lo del Plan Básico",
                      "Protocolo completo de entrenamiento",
                      "Guía de alimentación práctica",
                      "Checklist de compras y ejemplos de comidas",
                      "Soporte individual por WhatsApp",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-zinc-800 py-3 text-sm text-zinc-300">
                        <svg className="flex-shrink-0" width="14" height="11" viewBox="0 0 12 9" fill="none" aria-hidden>
                          <path d="M1 4L4.5 7.5L11 1" stroke="#D4A843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-[linear-gradient(135deg,#A07010,#E8B830,#A07010)] py-3.5 text-sm font-black uppercase tracking-wider text-black transition-opacity hover:opacity-90">
                    EMPEZAR AHORA
                  </a>
                  <p className="mt-2 text-center text-xs font-bold text-[#D4A843]">¡El más elegido!</p>
                </div>
              </div>

              {/* PLAN PREMIUM */}
              <div className="overflow-hidden rounded-xl bg-[#111111] shadow-xl">
                <div className="relative border-b border-zinc-800 bg-[#0a0a0a] px-6 pb-5 pt-4 text-center">
                  <span className="absolute right-4 top-3 text-[10px] font-black uppercase tracking-widest text-zinc-500">48 semanas</span>
                  <h3 className="mt-3 text-2xl font-black uppercase text-white">Plan Premium</h3>
                </div>
                <div className="px-6 pb-6 pt-5">
                  <div className="mb-5 text-center">
                    <p className="text-2xl font-black text-white">3x de $149.997</p>
                    <p className="mt-1 text-sm text-zinc-400">o $449.990 al contado</p>
                  </div>
                  <ul>
                    {[
                      "Todo lo del Plan Completo",
                      "Acompañamiento personalizado",
                      "Videollamada cada 30 días",
                      "Seguimiento continuo del progreso",
                      "Descuentos en Cuatrouno Suplementos",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-zinc-800 py-3 text-sm text-zinc-300">
                        <svg className="flex-shrink-0" width="14" height="11" viewBox="0 0 12 9" fill="none" aria-hidden>
                          <path d="M1 4L4.5 7.5L11 1" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded border border-zinc-700 bg-[#0a0a0a] py-3.5 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-zinc-900">
                    <WaIcon />EMPEZAR AHORA
                  </a>
                </div>
              </div>

            </div>

            {/* Beneficio pago al contado */}
            <div className="mt-8 flex items-start gap-4 rounded-xl border border-[#C41A1A]/30 bg-[#1a0808] px-6 py-5">
              <span className="mt-0.5 text-2xl">💥</span>
              <div>
                <p className="font-black uppercase text-white">Mejor precio pagando al contado</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  Abonando el programa completo en un solo pago accedés a un precio especial.
                  Más compromiso con el proceso, menos costo total — y los resultados llegan antes.
                </p>
              </div>
            </div>

            {/* Payment logos */}
            <div className="mt-10 flex flex-col items-center gap-6">
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Medios de pago aceptados</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { src: "/assets/mercadopago-nuevo-logo.webp", name: "Mercado Pago" },
                  { src: "/assets/brubank-logo.png",            name: "Brubank" },
                  { src: "/assets/galicia-logo.png",            name: "Galicia" },
                  { src: "/assets/santander-logo.png",          name: "Santander" },
                  { src: "/assets/bna-logo.png",                name: "BNA+" },
                ].map(({ src, name }) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <div className="relative h-10 w-24">
                      <Image src={src} alt={name} fill className="object-contain" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMMITMENT ─── */}
        <section className="relative overflow-hidden bg-[#0d0b09] py-20">
          <Deco char="×" className="left-4 top-12 text-5xl opacity-30" blur />
          <Deco char="+" className="right-8 bottom-10 text-6xl opacity-25" />
          <Deco char="×" className="right-6 top-8 text-3xl opacity-35" blur />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-5">
                <h2 className="text-3xl font-black uppercase text-[#D42020] sm:text-4xl">
                  MI COMPROMISO ES CON TU RESULTADO
                </h2>
                <InfoBox>
                  Durante tu plan tendrás soporte disponible para garantizar que ejecutes toda la
                  planificación: <strong>EL ÉXITO DEL ALUMNO.</strong>
                </InfoBox>
                <InfoBox>
                  Voy a motivarte, ayudarte a romper las barreras del día a día que te alejan de
                  tus objetivos y a hacer los ajustes necesarios para que tu plan sea el más
                  perfecto posible para tu realidad, rutina y hábitos.
                </InfoBox>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                <video
                  src="/assets/compromiso-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0d0b09]/20" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQSection />

        {/* ─── FINAL CTA ─── */}
        <section className="bg-[#0d0b09] py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-sm bg-[#25D366] py-6 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
            >
              <WaIcon />
              ENTRAR EN CONTACTO POR WHATSAPP
            </a>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#1f0808] bg-[#0d0b09] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <Image
            src="/assets/logo-superior-web.png"
            alt="Cuatrouno Training Club"
            width={140}
            height={55}
            className="h-12 w-auto object-contain"
          />
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Cuatrouno Training Club. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
