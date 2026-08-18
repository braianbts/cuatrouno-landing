"use client";

import { useState, useEffect, useMemo } from "react";
import { WaIcon, WA_PHONE } from "./icons";

const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const mesActual = () => MESES[new Date().getMonth()];

type DurationKey = "mensual" | "trimestral" | "semestral";

type Duration = {
  key: DurationKey;
  label: string;
  name: string;
  weeks: string;
  cuotas: string;
  contado: string;
  subCuotas: string;
  subContado: string;
};

const DURATIONS: Duration[] = [
  { key: "mensual", label: "1 mes", name: "Plan Mensual", weeks: "4 semanas", cuotas: "2x $59.990", contado: "$109.990", subCuotas: "o $109.990 al contado", subContado: "o 2x de $59.990" },
  { key: "trimestral", label: "3 meses", name: "Plan Trimestral", weeks: "12 semanas", cuotas: "3x $74.990", contado: "$199.990", subCuotas: "o $199.990 al contado", subContado: "o 3x de $74.990" },
  { key: "semestral", label: "6 meses", name: "Plan Semestral", weeks: "24 semanas", cuotas: "3x $124.990", contado: "$329.990", subCuotas: "o $329.990 al contado", subContado: "o 3x de $124.990" },
];

const COMMON_FEATURES = [
  "Rutina completa personalizada",
  "Plan de alimentación estructurado",
  "Guía de alimentación práctica y de suplementación",
  "App personalizada con rutina, alimentación, escáner de porciones, control de peso y guía de compras",
  "Videollamada de bienvenida",
  "Soporte continuo por WhatsApp / Meet",
];

const SEMESTRAL_BONUS = ["Kit de bienvenida: creatina 300g + proteína 2lbs", "Indumentaria oficial Training Club"];

function Check({ gold }: { gold?: boolean }) {
  return (
    <svg className="mt-0.5 flex-shrink-0" width="13" height="11" viewBox="0 0 12 9" fill="none">
      <path d="M1 4L4.5 7.5L11 1" stroke={gold ? "#E8B830" : "#6b6b70"} strokeWidth={gold ? 2.4 : 2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [duration, setDuration] = useState<DurationKey>("trimestral");
  const [mode, setMode] = useState<"cuotas" | "contado">("cuotas");

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", {
        content_name: "Planes Cuatrouno Training",
        content_category: "Entrenamiento Personal",
      });
    }
  }, []);

  const d = DURATIONS.find((x) => x.key === duration)!;
  const price = mode === "contado" ? d.contado : d.cuotas;
  const sub = mode === "contado" ? d.subContado : d.subCuotas;
  const isSemestral = duration === "semestral";
  const features = isSemestral ? [...COMMON_FEATURES, ...SEMESTRAL_BONUS] : COMMON_FEATURES;

  const waHref = useMemo(() => {
    const msg = `¡Hola Braian! Quiero arrancar con el ${d.name} (${d.weeks}), ${price}.`;
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
  }, [d, price]);

  return (
    <div className="reveal mx-auto max-w-2xl">
      {/* duration selector */}
      <div className="mb-6 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-[#0c0b0a] p-1.5">
        {DURATIONS.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setDuration(opt.key)}
            className={`relative flex flex-col items-center rounded-lg py-3 text-center transition-colors ${
              duration === opt.key ? "bg-[#C41A1A] text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            {opt.key === "trimestral" && (
              <span className={`mb-1 text-[9px] font-black uppercase tracking-wider ${duration === opt.key ? "text-white/80" : "text-[#E8413F]"}`}>Recomendado</span>
            )}
            <span className="font-display text-lg font-black uppercase">{opt.label}</span>
          </button>
        ))}
      </div>

      {/* urgency banner */}
      <div className="mb-6 flex items-center justify-center gap-3 rounded-xl border border-[#C41A1A]/30 bg-[#C41A1A]/8 px-5 py-3.5">
        <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[#C41A1A]" />
        <p className="text-center text-[13px] font-bold text-white/90">
          Acepto <span className="text-[#C41A1A]">máximo 5 alumnos nuevos por mes</span> — quedan <span className="text-[#C41A1A]">2 lugares disponibles</span> en {mesActual()}
        </p>
      </div>

      {/* the one card */}
      <div className={`overflow-hidden rounded-2xl ${isSemestral ? "ring-2 ring-[#E8B830]/60" : "border border-white/10"}`}>
        {isSemestral && (
          <div className="gold-foil relative px-6 py-2.5 text-center">
            <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(105deg,transparent 35%,rgba(255,255,255,.18) 50%,transparent 65%)" }} />
            <span className="relative z-10 text-[11px] font-black uppercase tracking-widest text-[#3D2900]">Kit de bienvenida + indumentaria incluidos</span>
          </div>
        )}
        <div className="bg-[#0c0b0a] px-7 py-8 sm:px-10">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">{d.name} · {d.weeks}</p>
              <p className="mt-1 font-display text-4xl font-black text-white">{price}</p>
              <p className="mt-1 text-[12px] text-zinc-500">{sub}</p>
            </div>
            <div className="mt-4 flex w-full flex-shrink-0 sm:mt-0 sm:w-auto">
              <div className="flex w-full border border-white/10 sm:w-auto">
                <button onClick={() => setMode("cuotas")} className={`flex-1 rounded-md px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-colors ${mode === "cuotas" ? "bg-[#C41A1A] text-white" : "text-zinc-500 hover:text-white"}`}>En cuotas</button>
                <button onClick={() => setMode("contado")} className={`flex-1 rounded-md px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-colors ${mode === "contado" ? "bg-[#C41A1A] text-white" : "text-zinc-500 hover:text-white"}`}>Al contado</button>
              </div>
            </div>
          </div>

          <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 border-b border-white/6 py-2 text-[13px] leading-snug text-zinc-300">
                <Check gold={isSemestral && SEMESTRAL_BONUS.includes(f)} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-7 flex w-full items-center justify-center gap-2 rounded-md py-4 text-[14px] font-black uppercase tracking-wider transition-all active:scale-[.98] ${
              isSemestral ? "gold-foil text-[#1a1206] hover:opacity-90" : "bg-[#25D366] text-white hover:bg-[#1ebe5d]"
            }`}
          >
            {!isSemestral && <WaIcon size={18} />}
            Empezar ahora
          </a>
        </div>
      </div>
    </div>
  );
}
