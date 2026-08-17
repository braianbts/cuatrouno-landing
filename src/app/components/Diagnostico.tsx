"use client";

import { useMemo, useState, type ReactNode } from "react";
import { WaIcon, WA_LINK_MSG, WA_PHONE } from "./icons";
import { plans } from "./plansData";

type Goal = "Bajar grasa" | "Ganar masa" | "Fuerza y salud";
type Exp = "Arranco de cero" | "Vuelvo después de parar" | "Entreno pero estoy estancado";
type Place = "Gimnasio" | "En casa";

const GOALS: Goal[] = ["Bajar grasa", "Ganar masa", "Fuerza y salud"];
const EXPS: Exp[] = ["Arranco de cero", "Vuelvo después de parar", "Entreno pero estoy estancado"];
const PLACES: Place[] = ["Gimnasio", "En casa"];

function recommend(goal: Goal, exp: Exp, place: Place) {
  let key: "mensual" | "trimestral" | "semestral" = "trimestral";
  let why = "Doce semanas es el mínimo para ver cambios sostenidos y ajustar el plan dos veces en el camino.";

  if (exp === "Arranco de cero" && goal === "Fuerza y salud") {
    key = "mensual";
    why = "Empezamos con cuatro semanas para instalar técnica y hábito sin que se te haga cuesta arriba.";
  }
  if (goal === "Ganar masa") {
    key = "semestral";
    why = "Ganar masa es el objetivo más lento: seis meses con kit de suplementación y videollamada cada 30 días.";
  }
  if (exp === "Entreno pero estoy estancado" && goal === "Bajar grasa") {
    key = "trimestral";
    why = "Estancado no es falta de esfuerzo: doce semanas con progresión programada y ajuste de alimentación.";
  }
  if (place === "En casa") why += " Adaptado al equipamiento que tengas en casa.";

  return { plan: plans.find((p) => p.key === key)!, why };
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 text-[13px] font-bold transition-colors ${
        active ? "bg-[#C41A1A] text-white" : "border border-white/20 text-zinc-300 hover:border-white/40 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default function Diagnostico() {
  const [goal, setGoal] = useState<Goal>("Bajar grasa");
  const [exp, setExp] = useState<Exp>("Arranco de cero");
  const [place, setPlace] = useState<Place>("Gimnasio");

  const { plan, why } = useMemo(() => recommend(goal, exp, place), [goal, exp, place]);
  const duracion = plan.weeks.split(" · ")[1] ?? plan.weeks;

  const waMsg = `¡Hola Braian! Quiero el ${plan.name}. Objetivo: ${goal}. Experiencia: ${exp}. Entreno en: ${place}.`;
  const waHref = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waMsg)}`;

  return (
    <section id="inicio" className="relative overflow-hidden border-b-2 border-white/15 bg-[#080706] pt-24">
      <div className="mx-auto grid max-w-6xl border-b-2 border-white/15 lg:grid-cols-2 lg:divide-x-2 lg:divide-white/15">
        {/* left: headline + diagnóstico */}
        <div className="flex flex-col gap-6 px-6 py-12 sm:px-12 sm:py-16 lg:px-14 lg:py-20">
          <div>
            <h1 className="font-display text-[2.1rem] font-black uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.1rem]">
              ¿Cuánto tiempo más sin ver el cuerpo que querés?
            </h1>
            <p className="mt-2 font-display text-[1.4rem] font-black uppercase leading-tight tracking-tight text-[#E8413F] sm:text-3xl">
              Hoy empieza a cambiar.
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-300">
              Entrenamiento 100% personalizado + <strong className="text-white">app con tu rutina, alimentación y seguimiento</strong> — sin rutinas genéricas ni PDFs abandonados.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-semibold text-zinc-400">
              <span>7 certificaciones internacionales</span>
              <span className="h-3 w-px bg-white/20" />
              <span>En el gym desde 2016</span>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={WA_LINK_MSG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-6 py-3.5 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]">
                <WaIcon size={18} />
                Quiero empezar ahora
              </a>
              <a href="#planes" className="text-sm font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-white">
                Ver planes →
              </a>
            </div>
          </div>

          <div id="diagnostico" className="border-t-2 border-white/15 pt-6">
            <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#E8413F]">Diagnóstico en 3 toques</p>
            <p className="mb-5 text-[14px] leading-relaxed text-zinc-400">Sin formularios largos. Elegí tres cosas y te mostramos el plan sugerido, con precio y qué incluye.</p>

            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-wider text-zinc-500">01 · Tu objetivo</p>
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => (
                    <Chip key={g} active={goal === g} onClick={() => setGoal(g)}>{g}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-wider text-zinc-500">02 · Tu experiencia</p>
                <div className="flex flex-wrap gap-2">
                  {EXPS.map((x) => (
                    <Chip key={x} active={exp === x} onClick={() => setExp(x)}>{x}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-wider text-zinc-500">03 · Dónde entrenás</p>
                <div className="flex flex-wrap gap-2">
                  {PLACES.map((pl) => (
                    <Chip key={pl} active={place === pl} onClick={() => setPlace(pl)}>{pl}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right: result panel */}
        <div className="flex flex-col justify-center bg-[#0c0b0a] px-6 py-12 sm:px-12 sm:py-16 lg:px-14 lg:py-20">
          <p className="mb-1 text-[10px] font-black uppercase tracking-wider text-[#E8413F]">Tu plan sugerido</p>
          <h2 className="font-display text-3xl font-black uppercase text-white transition-opacity duration-200 sm:text-4xl">{plan.name}</h2>
          <p className="mt-2 min-h-[3.5rem] max-w-md text-[14px] leading-relaxed text-zinc-400">{why}</p>

          <div className="mt-4 border-t-2 border-white/15 pt-4">
            <p className="font-display text-3xl font-black text-white">{plan.cuotas}</p>
            <p className="mt-1 text-[12px] text-zinc-500">{plan.subCuotas}</p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500">{duracion} · Empezás en 5 días hábiles</p>
          </div>

          <p className="mt-4 max-w-md text-[13px] leading-relaxed text-zinc-400">Incluye rutina y alimentación personalizadas, app con escáner de porciones y control de peso, videollamada de bienvenida y seguimiento por WhatsApp con Braian.</p>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full max-w-[420px] items-center justify-center gap-3 bg-[#25D366] py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.98]"
          >
            <WaIcon size={18} />
            Quiero el {plan.name.replace("Plan ", "plan ")}
          </a>
          <p className="mt-2 text-[11px] text-zinc-600">Se abre WhatsApp con tu diagnóstico ya escrito. Cupo: 5 alumnos nuevos por mes.</p>
        </div>
      </div>
    </section>
  );
}
