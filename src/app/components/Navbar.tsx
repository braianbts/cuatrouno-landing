"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WaIcon, WA_LINK } from "./icons";

const links = [
  { href: "#sobre", label: "Sobre mí" },
  { href: "#funciona", label: "Cómo funciona" },
  { href: "#planes", label: "Planes" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-black/8 bg-white/90 backdrop-blur-xl shadow-sm"
          : "border-black/5 bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10 lg:px-14">
        <a href="#inicio" className="flex items-center gap-2">
          <Image src="/assets/logo-superior-web.png" alt="Cuatrouno Training Club" width={180} height={70} priority className="h-11 w-auto object-contain sm:h-14" />
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-semibold uppercase tracking-wider text-zinc-600 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link transition-colors hover:text-[#0f0e0d]">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#C41A1A] px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#a81616] hover:shadow-md hover:shadow-[#C41A1A]/20 sm:flex"
          >
            <WaIcon size={16} />
            WhatsApp
          </a>
          <button
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-zinc-700 lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wider text-zinc-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 transition-colors hover:bg-zinc-50 hover:text-[#C41A1A]">{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
