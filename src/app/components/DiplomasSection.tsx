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
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (1).png", label: "Muscular Hypertrophy",            inst: "IAF Fitness · Internacional" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (5).png", label: "Coach Bodybuilding & Fitness",    inst: "IAF Fitness · Internacional" },
];

const all = [...nacionales, ...internacionales];

function DiplomaCard({ d, idx, onClick }: { d: typeof nacionales[0]; idx: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative h-52 w-72 flex-shrink-0 overflow-hidden rounded-xl border border-white/8 bg-[#0a0908] transition-all duration-300 hover:border-[#C41A1A]/40 hover:shadow-lg hover:shadow-[#C41A1A]/10 sm:h-60 sm:w-80"
    >
      <Image
        src={d.src}
        alt={d.label}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="320px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3.5">
        <p className="text-[11px] font-black uppercase leading-tight text-white drop-shadow">{d.label}</p>
        <p className="mt-0.5 text-[10px] text-zinc-400">{d.inst}</p>
      </div>
      <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#C41A1A]/80 opacity-0 transition-opacity group-hover:opacity-100">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      </div>
    </button>
  );
}

function ScrollRow({ items, startIdx, onOpen }: { items: typeof nacionales; startIdx: number; onOpen: (i: number) => void }) {
  return (
    <div className="no-bar flex gap-4 overflow-x-auto pb-2">
      {items.map((d, i) => (
        <DiplomaCard key={i} d={d} idx={startIdx + i} onClick={() => onOpen(startIdx + i)} />
      ))}
    </div>
  );
}

export default function DiplomasSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + all.length) % all.length)), []);
  const next = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % all.length)), []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#060504] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,26,26,.10), transparent)" }} />

        <div className="relative z-10 mb-10 px-6 sm:px-12 lg:px-20">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Formación y certificaciones</p>
          <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
            Mi respaldo<br /><span className="text-[#C41A1A]">académico</span>
          </h2>
          <p className="mt-3 max-w-md text-[14px] text-zinc-500">No improviso. Cada plan está respaldado por formación nacional e internacional.</p>
        </div>

        {/* Nacionales */}
        <div className="relative z-10 mb-10">
          <div className="mb-4 flex items-center gap-4 px-6 sm:px-12 lg:px-20">
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#C41A1A]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z"/></svg>
            </span>
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-white">Nacionales</p>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="px-6 sm:px-12 lg:px-20">
            <ScrollRow items={nacionales} startIdx={0} onOpen={setLightbox} />
          </div>
        </div>

        {/* Internacionales */}
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-4 px-6 sm:px-12 lg:px-20">
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#E8B830]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#1a1206"><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 2c.9 0 2 .8 2.8 2.5H9.2C10 4.8 11.1 4 12 4zm-7.8 6h3.4a16 16 0 000 4H4.2a8 8 0 010-4zm1.2 6h2.4c.3.9.7 1.7 1.2 2.3A8 8 0 015.4 16zm5.6 4c-.9 0-2-.8-2.8-2.5h5.6C13 19.2 11.9 20 12 20zm0 0"/></svg>
            </span>
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#E8B830]">Internacionales</p>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="px-6 sm:px-12 lg:px-20">
            <ScrollRow items={internacionales} startIdx={nacionales.length} onOpen={setLightbox} />
          </div>
        </div>

        <p className="mt-5 px-6 text-center text-[11px] text-zinc-600 lg:hidden">Deslizá para ver todos →</p>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0908]">
              <Image
                src={all[lightbox].src}
                alt={all[lightbox].label}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
            <button onClick={prev} className="absolute -left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 sm:-left-14">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={next} className="absolute -right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 sm:-right-14">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="text-[12px] text-zinc-500">{lightbox + 1} / {all.length}</span>
              <button onClick={() => setLightbox(null)} className="text-[12px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white">Cerrar ✕</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
