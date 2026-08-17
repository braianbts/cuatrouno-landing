"use client";

import { useState } from "react";
import Image from "next/image";

const certs = [
  { label: "Entrenador Fisicoculturismo", org: "IFBB", src: "/diplomas/BRAIAN YAMIL BARRIENTOS (4).png" },
  { label: "Experto en Suplementación",   org: "IFBB", src: "/diplomas/BRAIAN YAMIL BARRIENTOS (2).png" },
  { label: "Hipertrofia",                 org: "IFBB", src: "/diplomas/BRAIAN YAMIL BARRIENTOS.png"     },
  { label: "Coach Bodybuilding & Fitness",org: "IAF",  src: "/diplomas/BRAIAN YAMIL BARRIENTOS (5).png" },
  { label: "Muscular Hypertrophy",        org: "IAF",  src: "/diplomas/BRAIAN YAMIL BARRIENTOS (1).png" },
  { label: "Supplementation Expert",      org: "IAF",  src: "/diplomas/BRAIAN YAMIL BARRIENTOS (3).png" },
  { label: "Personal Trainer Internacional", org: "IAE", src: "/diplomas/egresado.png" },
];

export default function CredBadges() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="reveal d4 mt-7 border-t border-white/8 pt-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">Formación certificada</p>
        <div className="flex flex-wrap gap-2">
          {certs.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setOpen(i)}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 transition-colors hover:border-[#C41A1A]/40 hover:bg-[#C41A1A]/8"
            >
              <span className="text-[9px] font-black uppercase tracking-wider text-[#C41A1A]">{c.org}</span>
              <span className="h-2.5 w-px bg-white/15" />
              <span className="text-[11px] font-medium text-zinc-400">{c.label}</span>
              <svg className="ml-0.5 text-zinc-600" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setOpen(null)}
        >
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#C41A1A]">{certs[open].org} Academy</p>
              <p className="mt-0.5 text-[14px] font-black uppercase text-white">{certs[open].label}</p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0908]">
              <Image src={certs[open].src} alt={certs[open].label} fill className="object-contain" sizes="700px" priority />
            </div>
            <button
              onClick={() => setOpen(null)}
              className="mt-4 mx-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-white"
            >
              Cerrar ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
