"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const diplomas = [
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS.png", alt: "Diploma Braian Barrientos" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (1).png", alt: "Diploma Braian Barrientos" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (2).png", alt: "Diploma Braian Barrientos" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (3).png", alt: "Diploma Braian Barrientos" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (4).png", alt: "Diploma Braian Barrientos" },
  { src: "/diplomas/BRAIAN YAMIL BARRIENTOS (5).png", alt: "Diploma Braian Barrientos" },
];

export default function DiplomasSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + diplomas.length) % diplomas.length)), []);
  const next = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % diplomas.length)), []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#060504] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,26,26,.10), transparent)" }} />

        <div className="relative z-10 mb-10 px-6 sm:px-12 lg:px-20">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C41A1A]">Formación y certificaciones</p>
          <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
            Mi respaldo<br /><span className="text-[#C41A1A]">académico</span>
          </h2>
          <p className="mt-3 max-w-md text-[14px] text-zinc-500">No improviso. Cada plan que armo está respaldado por años de formación continua.</p>
        </div>

        {/* horizontal scroll strip */}
        <div className="no-bar flex gap-4 overflow-x-auto px-6 pb-2 sm:px-12 lg:px-20">
          {diplomas.map((d, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative h-52 w-72 flex-shrink-0 overflow-hidden rounded-xl border border-white/8 bg-[#0a0908] transition-all duration-300 hover:border-[#C41A1A]/40 hover:shadow-lg hover:shadow-[#C41A1A]/10 sm:h-60 sm:w-80"
            >
              <Image
                src={d.src}
                alt={d.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80">Ver diploma</span>
              </div>
              <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#C41A1A]/80 text-[10px] font-black text-white">
                {i + 1}
              </div>
            </button>
          ))}

          {/* PDF card */}
          <a
            href="/diplomas/EGRESADO 2026-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-52 w-72 flex-shrink-0 flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-[#C41A1A]/25 bg-[#0d0807] transition-all duration-300 hover:border-[#C41A1A]/50 hover:bg-[#110909] sm:h-60 sm:w-80"
          >
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(196,26,26,.08), transparent)" }} />
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C41A1A]/30 bg-[#C41A1A]/10 text-[#E8413F] transition-transform duration-300 group-hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <path d="M9 13h6M9 17h4"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[13px] font-black uppercase tracking-wide text-white">Certificado de egreso</p>
              <p className="mt-1 text-[11px] text-zinc-500">2026 · Ver PDF</p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C41A1A] opacity-0 transition-opacity group-hover:opacity-100">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              Abrir PDF
            </div>
          </a>
        </div>

        <p className="mt-4 px-6 text-center text-[11px] text-zinc-600 sm:px-12 lg:hidden">
          Deslizá para ver todos →
        </p>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[90svh] max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0908]">
              <Image
                src={diplomas[lightbox].src}
                alt={diplomas[lightbox].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
            {/* nav */}
            <button onClick={prev} className="absolute -left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/20 sm:-left-14">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={next} className="absolute -right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/20 sm:-right-14">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            {/* counter + close */}
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="text-[12px] text-zinc-500">{lightbox + 1} / {diplomas.length}</span>
              <button onClick={() => setLightbox(null)} className="text-[12px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white">Cerrar ✕</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
