"use client";

import { useMemo, useState, type ReactNode } from "react";
import { WaIcon, WA_PHONE } from "./icons";
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
      className={`rounded-md px-4 py-2.5 text-[13px] font-bold transition-colors ${
        active ? "bg-[#C41A1A] text-white" : "border border-white/15 text-zinc-300 hover:border-white/30 hover:text-white"
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
    <section id="diagnostico" className="relative overflow-hidden bg-[#080706] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 20% 15%, rgba(196,26,26,.16) 0%, transparent 65%)" }} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
        <div className="reveal mb-10 max-w-lg">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Diagnóstico en 3 toques</p>
          <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">Decime dónde estás y te digo cómo se ve tu plan.</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-zinc-400">Sin formularios largos. Elegí tres cosas y ves el programa que te armamos, con precio y qué incluye.</p>
        </div>

        <div className="reveal grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-2">
          {/* chips */}
          <div className="flex flex-col gap-6 bg-[#0c0b0a] p-6 sm:p-8">
            <div>
              <p className="mb-2.5 text-[10px] font-black uppercase tracking-wider text-zinc-500">01 · Tu objetivo</p>
              <div className="flex flex-wrap gap-2">
                {GOALS.map((g) => (
                  <Chip key={g} active={goal === g} onClick={() => setGoal(g)}>{g}</Chip>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2.5 text-[10px] font-black uppercase tracking-wider text-zinc-500">02 · Tu experiencia</p>
              <div className="flex flex-wrap gap-2">
                {EXPS.map((x) => (
                  <Chip key={x} active={exp === x} onClick={() => setExp(x)}>{x}</Chip>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2.5 text-[10px] font-black uppercase tracking-wider text-zinc-500">03 · Dónde entrenás</p>
              <div className="flex flex-wrap gap-2">
                {PLACES.map((pl) => (
                  <Chip key={pl} active={place === pl} onClick={() => setPlace(pl)}>{pl}</Chip>
                ))}
              </div>
            </div>
          </div>

          {/* result */}
          <div className="bg-[#0f0808] p-6 sm:p-8">
            <p className="mb-1 text-[10px] font-black uppercase tracking-wider text-[#E8413F]">Tu plan sugerido</p>
            <h3 className="font-display text-3xl font-black uppercase text-white transition-opacity duration-200">{plan.name}</h3>
            <p className="mt-2 min-h-[3.5rem] text-[14px] leading-relaxed text-zinc-400">{why}</p>

            <div className="mt-4 grid grid-cols-2 border-t border-white/10">
              <div className="border-b border-r border-white/10 py-3 pr-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Duración</p>
                <p className="mt-0.5 font-display text-lg font-black text-white">{duracion}</p>
              </div>
              <div className="border-b border-white/10 py-3 pl-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Al contado</p>
                <p className="mt-0.5 font-display text-lg font-black text-[#E8413F]">{plan.contado}</p>
              </div>
              <div className="border-r border-white/10 py-3 pr-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">En cuotas</p>
                <p className="mt-0.5 font-display text-lg font-black text-white">{plan.cuotas}</p>
              </div>
              <div className="py-3 pl-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Empezás en</p>
                <p className="mt-0.5 font-display text-lg font-black text-white">5 días hábiles</p>
              </div>
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-zinc-400">Incluye rutina y alimentación personalizadas, app con escáner de porciones y control de peso, videollamada de bienvenida y seguimiento por WhatsApp con Braian.</p>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-md bg-[#25D366] py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#1ebe5d] active:scale-[.98]"
            >
              <WaIcon size={18} />
              Quiero el {plan.name.replace("Plan ", "plan ")}
            </a>
            <p className="mt-2 text-center text-[11px] text-zinc-600">Se abre WhatsApp con tu diagnóstico ya escrito. Cupo: 5 alumnos nuevos por mes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
