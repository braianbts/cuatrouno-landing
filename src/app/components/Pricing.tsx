"use client";

import { useState } from "react";
import { WaIcon, WA_LINK } from "./icons";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type Plan = {
  name: string;
  weeks: string;
  featured?: boolean;
  badge?: string;
  cuotas: string;
  contado: string;
  subCuotas: string;
  subContado: string;
  perWeek: string;
  perMonth: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Plan Mensual",
    weeks: "1 mes · 4 semanas",
    cuotas: "2x $59.990",
    contado: "$109.990",
    subCuotas: "o $109.990 al contado",
    subContado: "o 2x de $59.990",
    perWeek: "≈ $27.497 / semana",
    perMonth: "≈ $109.990 / mes",
    features: ["Rutina completa personalizada", "Plan de alimentación estructurado", "Materiales de apoyo en PDF", "Videollamada de bienvenida", "Soporte por WhatsApp"],
  },
  {
    name: "Plan Trimestral",
    weeks: "3 meses · 12 semanas",
    featured: true,
    badge: "Recomendado",
    cuotas: "3x $74.990",
    contado: "$199.990",
    subCuotas: "o $199.990 al contado",
    subContado: "o 3x de $74.990",
    perWeek: "≈ $15.384 / semana",
    perMonth: "≈ $66.663 / mes",
    features: ["Todo lo del Plan Mensual", "Protocolo de entrenamiento progresivo", "Guía de alimentación práctica", "Checklist de compras y comidas", "Soporte individual por WhatsApp", "Descuentos en Cuatrouno Suplementos"],
  },
  {
    name: "Plan Semestral",
    weeks: "6 meses · 24 semanas",
    cuotas: "3x $124.990",
    contado: "$329.990",
    subCuotas: "o $329.990 al contado",
    subContado: "o 3x de $124.990",
    perWeek: "≈ $12.692 / semana · mejor valor",
    perMonth: "≈ $54.998 / mes · mejor valor",
    features: ["Todo lo del Plan Trimestral", "KIT inicial de suplementación ¡GRATIS!", "Indumentaria oficial Training Club", "Acompañamiento personalizado", "Videollamada cada 30 días", "Seguimiento continuo del progreso", "Descuentos en Cuatrouno Suplementos"],
  },
];

function Check({ gold }: { gold?: boolean }) {
  return (
    <svg className="mt-0.5 flex-shrink-0" width="13" height="11" viewBox="0 0 12 9" fill="none">
      <path d="M1 4L4.5 7.5L11 1" stroke={gold ? "#E8B830" : "#6b6b70"} strokeWidth={gold ? 2.4 : 2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [mode, setMode] = useState<"cuotas" | "contado">("cuotas");

  return (
    <>
      {/* payment toggle */}
      <div className="reveal mb-10 flex justify-center">
        <div className="relative flex w-[280px] rounded-full border border-white/10 bg-[#0c0b0a] p-1 text-[12px] font-bold uppercase tracking-wider">
          <div
            className="absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-[#C41A1A] transition-transform duration-300"
            style={{ transform: mode === "contado" ? "translateX(100%)" : "translateX(0)" }}
          />
          <button onClick={() => setMode("cuotas")} className={`relative z-10 flex-1 rounded-full py-2 ${mode === "cuotas" ? "text-white" : "text-zinc-500"}`}>En cuotas</button>
          <button onClick={() => setMode("contado")} className={`relative z-10 flex-1 rounded-full py-2 ${mode === "contado" ? "text-white" : "text-zinc-500"}`}>Al contado</button>
        </div>
      </div>

      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {plans.map((p) => {
          const price = mode === "contado" ? p.contado : p.cuotas;
          const sub = mode === "contado" ? p.subContado : p.subCuotas;

          if (p.featured) {
            return (
              <div key={p.name} className="reveal d1 relative flex flex-col overflow-hidden rounded-2xl ring-2 ring-[#E8B830]/60 md:-mt-4">
                <GlowingEffect disabled={false} spread={40} proximity={80} />
                <div className="gold-foil relative px-6 pb-6 pt-6 text-center">
                  <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(105deg,transparent 35%,rgba(255,255,255,.18) 50%,transparent 65%)" }} />
                  <span className="absolute right-3 top-3 z-10 rounded bg-black/40 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#3D2900]">{p.badge}</span>
                  <p className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-black/70">{p.weeks}</p>
                  <h3 className="relative z-10 mt-1 font-display text-2xl font-black uppercase text-[#1a1206] drop-shadow-sm">{p.name}</h3>
                </div>
                <div className="flex flex-1 flex-col bg-[#0c0b0a] px-7 pb-7 pt-7">
                  <div className="mb-1 text-center">
                    <p className="font-display text-3xl font-black text-white">{price}</p>
                    <p className="mt-1 text-[12px] text-zinc-500">{sub}</p>
                  </div>
                  <p className="text-center text-[12px] font-bold uppercase tracking-wide text-[#E8B830]">{p.perWeek}</p>
                  <p className="mb-5 mt-0.5 text-center text-[11px] uppercase tracking-wide text-[#E8B830]/60">{p.perMonth}</p>
                  <ul className="flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 border-b border-white/6 py-2.5 text-[13px] leading-snug text-zinc-300"><Check gold /><span>{f}</span></li>
                    ))}
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="gold-foil mt-6 flex w-full items-center justify-center gap-2 rounded-md py-3.5 text-[13px] font-black uppercase tracking-wider text-[#1a1206] transition-opacity hover:opacity-90 active:scale-[.98]">Empezar ahora</a>
                  <p className="mt-2 text-center text-[11px] font-bold text-[#E8B830]">¡El más elegido!</p>
                </div>
              </div>
            );
          }

          return (
            <div key={p.name} className="reveal relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b0a]">
              <GlowingEffect disabled={false} spread={30} proximity={60} />
              <div className="border-b border-white/8 bg-[#080706] px-6 pb-5 pt-6 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{p.weeks}</p>
                <h3 className="mt-1 font-display text-2xl font-black uppercase text-white">{p.name}</h3>
              </div>
              <div className="flex flex-1 flex-col px-7 pb-7 pt-7">
                <div className="mb-1 text-center">
                  <p className="font-display text-3xl font-black text-white">{price}</p>
                  <p className="mt-1 text-[12px] text-zinc-500">{sub}</p>
                </div>
                <p className="text-center text-[12px] font-bold uppercase tracking-wide text-zinc-500">{p.perWeek}</p>
                <p className="mb-5 mt-0.5 text-center text-[11px] uppercase tracking-wide text-zinc-600">{p.perMonth}</p>
                <ul className="flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 border-b border-white/6 py-2.5 text-[13px] leading-snug text-zinc-300"><Check /><span>{f}</span></li>
                  ))}
                </ul>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-[#080706] py-3.5 text-[13px] font-black uppercase tracking-wider text-white transition-colors hover:bg-white/5 active:scale-[.98]"><WaIcon size={16} />Empezar ahora</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
