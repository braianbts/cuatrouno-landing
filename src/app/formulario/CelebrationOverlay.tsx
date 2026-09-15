"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "motion/react";

const EMBERS = [
  { top: "14%", left: "12%", size: 10, delay: 1.2, dur: 4.2 },
  { top: "22%", left: "88%", size: 14, delay: 1.7, dur: 4.8 },
  { top: "75%", left: "9%", size: 12, delay: 2.1, dur: 4.4 },
  { top: "82%", left: "90%", size: 9, delay: 1.4, dur: 4.6 },
  { top: "10%", left: "50%", size: 8, delay: 2.4, dur: 4 },
  { top: "55%", left: "5%", size: 9, delay: 2.8, dur: 5 },
  { top: "48%", left: "95%", size: 11, delay: 1.9, dur: 4.5 },
];

function Ember({ top, left, size, delay, dur }: { top: string; left: string; size: number; delay: number; dur: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="absolute text-[#E23A3A]"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.9, 0.9, 0], scale: [0, 1, 1, 0.5], y: [0, -18] }}
      transition={{ duration: dur, delay, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
    >
      <path d="M12 0 C12 6 14 10 20 12 C14 14 12 18 12 24 C12 18 10 14 4 12 C10 10 12 6 12 0Z" fill="currentColor" />
    </motion.svg>
  );
}

function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function CelebrationOverlay({ name }: { name: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const firstName = name.trim().split(" ")[0] || "campeón";

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, transition: { duration: 0.45, ease: "easeIn" } }}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#050403]"
    >
      {/* letterbox bars — cine frame */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0, transition: { duration: 0.35, delay: 0.1 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "top" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[6vh] min-h-[22px] bg-black"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0, transition: { duration: 0.35, delay: 0.1 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "bottom" }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[6vh] min-h-[22px] bg-black"
      />

      {/* impact flash */}
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(196,26,26,0.5) 35%, transparent 70%)" }}
      />

      {/* ambient pulsing glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[75vh] w-[75vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(196,26,26,0.32) 0%, rgba(196,26,26,0.06) 45%, transparent 72%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.65) 100%)" }}
      />

      <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" />

      {EMBERS.map((s, i) => (
        <Ember key={i} {...s} />
      ))}

      <div className="relative flex max-w-md flex-col items-center gap-6 px-6 text-center">
        {/* logo — cinematic zoom/blur reveal + light sweep */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 1.5, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/assets/logo.png"
            alt="Cuatrouno Training Club"
            width={300}
            height={113}
            className="h-14 w-auto object-contain drop-shadow-[0_0_30px_rgba(196,26,26,0.6)] sm:h-20"
          />
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(75deg, transparent 40%, rgba(255,255,255,0.85) 50%, transparent 60%)", mixBlendMode: "overlay" }}
            initial={{ x: "-140%" }}
            animate={{ x: "140%" }}
            transition={{ duration: 0.9, delay: 1.05, ease: "easeInOut" }}
          />
        </motion.div>

        <h2 className="font-heading text-3xl uppercase leading-[1.05] text-white sm:text-4xl">
          <RevealLine delay={0.85}>¡Felicidades por unirte</RevealLine>
          <RevealLine delay={0.98}>
            al club, <span className="text-[#E23A3A]">{firstName}</span>!
          </RevealLine>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 text-lg font-bold uppercase tracking-wide text-zinc-200 sm:text-xl"
        >
          Ahora subamos al siguiente nivel
          <motion.span
            animate={{ scale: [1, 1.25, 1], rotate: [0, -8, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.4, delay: 1.4 }}
            className="inline-block text-2xl sm:text-3xl"
          >
            🔥
          </motion.span>
        </motion.p>
      </div>
    </motion.div>,
    document.body
  );
}
