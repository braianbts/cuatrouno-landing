"use client";

import { useState, useEffect } from "react";
import { WaIcon, WA_LINK } from "./icons";
import { plans } from "./plansData";

const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const mesActual = () => MESES[new Date().getMonth()];

function Check({ accent }: { accent?: boolean }) {
  return (
    <svg className="mt-0.5 flex-shrink-0" width="13" height="11" viewBox="0 0 12 9" fill="none">
      <path d="M1 4L4.5 7.5L11 1" stroke={accent ? "#E8413F" : "#6b6b70"} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [mode, setMode] = useState<"cuotas" | "contado">("cuotas");

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", {
        content_name: "Planes Cuatrouno Training",
        content_category: "Entrenamiento Personal",
      });
    }
  }, []);

  return (
    <>
      {/* payment toggle */}
      <div className="reveal mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse bg-[#C41A1A]" />
          <p className="text-[13px] font-bold text-white/90">
            Acepto <span className="text-[#E8413F]">máximo 5 alumnos nuevos por mes</span> — quedan <span className="text-[#E8413F]">2 lugares</span> en {mesActual()}
          </p>
        </div>
        <div className="flex flex-shrink-0 border-2 border-white/15">
          <button onClick={() => setMode("cuotas")} className={`px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-colors ${mode === "cuotas" ? "bg-[#C41A1A] text-white" : "text-zinc-400 hover:text-white"}`}>En cuotas</button>
          <button onClick={() => setMode("contado")} className={`border-l-2 border-white/15 px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-colors ${mode === "contado" ? "bg-[#C41A1A] text-white" : "text-zinc-400 hover:text-white"}`}>Al contado</button>
        </div>
      </div>

      <div className="reveal grid gap-px border-2 border-white/15 bg-white/15 md:grid-cols-3">
        {plans.map((p) => {
          const price = mode === "contado" ? p.contado : p.cuotas;
          const sub = mode === "contado" ? p.subContado : p.subCuotas;

          return (
            <div key={p.name} className={`flex flex-col bg-[#0c0b0a] px-7 py-7 ${p.featured ? "border-t-4 border-[#E8413F]" : ""}`}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{p.weeks}</p>
              <h3 className="mt-1 font-display text-2xl font-black uppercase text-white">{p.name}</h3>
              {p.featured && <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#E8413F]">Recomendado — el más elegido</p>}

              <div className="mb-5 mt-5">
                <p className="font-display text-3xl font-black text-white">{price}</p>
                <p className="mt-1 text-[12px] text-zinc-500">{sub}</p>
              </div>
              <ul className="flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 border-b border-white/10 py-2.5 text-[13px] leading-snug text-zinc-300"><Check accent={p.featured} /><span>{f}</span></li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 flex w-full items-center justify-center gap-2 py-3.5 text-[13px] font-black uppercase tracking-wider transition-all active:scale-[.98] ${
                  p.featured ? "bg-[#25D366] text-white hover:bg-[#1ebe5d]" : "border border-white/20 text-white hover:border-white/40"
                }`}
              >
                <WaIcon size={16} />
                Empezar ahora
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
