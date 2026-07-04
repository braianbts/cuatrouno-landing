"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const nacionales = [
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (4).png", label: "Entrenador en Fisicoculturismo", inst: "IFBB Academy Argentina" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (2).png", label: "Experto en Suplementación",      inst: "IFBB Academy Argentina" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS.png",     label: "Hipertrofia IFBB",               inst: "IFBB Academy Argentina" },
];

const internacionales = [
  { src: "/diplomas/egresado.png",                    label: "Egresado 2026",                  inst: "IAF Fitness · Internacional" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (3).png", label: "Supplementation Expert",         inst: "IAF Fitness · Internacional" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (1).png", label: "Muscular Hypertrophy",           inst: "IAF Fitness · Internacional" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (5).png", label: "Coach Bodybuilding & Fitness",   inst: "IAF Fitness · Internacional" },
];

const all = [...nacionales, ...internacionales];

function DiplomaCard({ d, onClick }: { d: typeof nacionales[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-white/8 bg-[#0a0908] transition-all duration-300 hover:border-[#C41A1A]/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 sm:h-64 sm:w-96"
    >
      <Image
        src={d.src}
        alt={d.label}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="384px"
      />
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />
      {/* red glow on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(196,26,26,.25), transparent)" }} />

      {/* bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[12px] font-black uppercase leading-tight tracking-wide text-white">{d.label}</p>
        <p className="mt-1 text-[10px] font-medium text-zinc-500">{d.inst}</p>
      </div>

      {/* expand icon */}
      <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 opacity-0 backdrop-blur transition-all duration-200 group-hover:opacity-100 group-hover:bg-[#C41A1A]/80">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      </div>
    </button>
  );
}

function SectionLabel({ label, count, gold }: { label: string; count: number; gold?: boolean }) {
  return (
    <div className="mb-5 flex items-center gap-4 px-6 sm:px-12 lg:px-20">
      <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 ${gold ? "bg-[#E8B830]/15 border border-[#E8B830]/30" : "bg-[#C41A1A]/15 border border-[#C41A1A]/30"}`}>
        {gold ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#E8B830"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#E8413F"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
        )}
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${gold ? "text-[#E8B830]" : "text-[#E8413F]"}`}>{label}</span>
        <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-black ${gold ? "bg-[#E8B830] text-[#1a1206]" : "bg-[#C41A1A] text-white"}`}>{count}</span>
      </div>
      <div className={`h-px flex-1 ${gold ? "bg-[#E8B830]/15" : "bg-[#C41A1A]/15"}`} />
    </div>
  );
}

export default function DiplomasSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + all.length) % all.length)), []);
  const next = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % all.length)), []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#080706] py-16 sm:py-24">
        {/* bg decorations */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(196,26,26,.08), transparent)" }} />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C41A1A]/20 to-transparent" />

        {/* header */}
        <div className="relative z-10 mb-12 px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C41A1A]/25 bg-[#C41A1A]/8 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C41A1A]" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E8413F]">Formación y certificaciones</p>
              </div>
              <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
                Mi respaldo<br /><span className="text-[#C41A1A]">académico</span>
              </h2>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-zinc-500">No improviso. Cada plan está respaldado por formación continua — nacional e internacional.</p>
            </div>
            <div className="flex gap-6 lg:flex-col lg:items-end lg:gap-2">
              <div className="text-right">
                <p className="font-display text-3xl font-black text-white">{all.length}</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-600">Certificaciones</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nacionales */}
        <div className="relative z-10 mb-10">
          <SectionLabel label="Nacionales" count={nacionales.length} />
          <div className="no-bar flex gap-4 overflow-x-auto px-6 pb-1 sm:px-12 lg:px-20">
            {nacionales.map((d, i) => (
              <DiplomaCard key={i} d={d} onClick={() => setLightbox(i)} />
            ))}
          </div>
        </div>

        {/* Internacionales */}
        <div className="relative z-10">
          <SectionLabel label="Internacionales" count={internacionales.length} gold />
          <div className="no-bar flex gap-4 overflow-x-auto px-6 pb-1 sm:px-12 lg:px-20">
            {internacionales.map((d, i) => (
              <DiplomaCard key={i} d={d} onClick={() => setLightbox(nacionales.length + i)} />
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] text-zinc-700 lg:hidden">← Deslizá para ver todos →</p>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            {/* diploma name */}
            <div className="mb-3 text-center">
              <p className="text-[11px] font-black uppercase tracking-widest text-[#C41A1A]">{all[lightbox].inst}</p>
              <p className="mt-0.5 text-[15px] font-black uppercase text-white">{all[lightbox].label}</p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0908] shadow-2xl">
              <Image
                src={all[lightbox].src}
                alt={all[lightbox].label}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 780px"
                priority
              />
            </div>
            <button onClick={prev} className="absolute -left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 backdrop-blur hover:bg-white/15 sm:-left-14">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={next} className="absolute -right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 backdrop-blur hover:bg-white/15 sm:-right-14">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div className="mt-4 flex items-center justify-between px-1">
              <div className="flex gap-1.5">
                {all.map((_, i) => (
                  <button key={i} onClick={() => setLightbox(i)} className={`h-1.5 rounded-full transition-all duration-200 ${i === lightbox ? "w-5 bg-[#C41A1A]" : "w-1.5 bg-white/20 hover:bg-white/40"}`} />
                ))}
              </div>
              <button onClick={() => setLightbox(null)} className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-white">Cerrar ✕</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
