"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { WA_PHONE } from "../components/icons";
import CelebrationOverlay from "./CelebrationOverlay";

type FormData = {
  nombre: string;
  edad: string;
  telefono: string;
  email: string;
  altura: string;
  peso: string;
  lesiones: string;
  cirugias: string;
  medicacion: string;
  habitos: string;
  suplementacion: string;
  comidasPorDia: string;
  alergias: string;
  preferenciasComida: string;
  dietaActual: string;
  notasAlimentacion: string;
  objetivo: string;
  experiencia: string;
  diasDisponibles: string;
  lugarEntrenamiento: string;
};

const initial: FormData = {
  nombre: "",
  edad: "",
  telefono: "",
  email: "",
  altura: "",
  peso: "",
  lesiones: "",
  cirugias: "",
  medicacion: "",
  habitos: "",
  suplementacion: "",
  comidasPorDia: "",
  alergias: "",
  preferenciasComida: "",
  dietaActual: "",
  notasAlimentacion: "",
  objetivo: "",
  experiencia: "",
  diasDisponibles: "",
  lugarEntrenamiento: "",
};

const inputClass =
  "w-full rounded-md border border-white/10 bg-black/25 backdrop-blur-sm px-4 py-3 text-[14px] text-white placeholder:text-zinc-500 transition-colors focus:border-[#E23A3A]/60 focus:bg-black/35 focus:outline-none";

const labelClass = "mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-zinc-400";

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label} {required && <span className="text-[#E23A3A]">*</span>}
      </span>
      {children}
    </label>
  );
}

function Section({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-7"
      style={{
        background: "linear-gradient(155deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.015) 45%, rgba(255,255,255,0.03) 100%)",
      }}
    >
      {/* top glass sheen */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)" }}
      />
      {/* soft inner highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 40px rgba(255,255,255,0.02)" }}
      />

      <p className="relative mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#E23A3A]">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C41A1A]/20 text-[10px] text-[#E23A3A] ring-1 ring-white/10">{step}</span>
        {title}
      </p>
      <div className="relative grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function buildWaMessage(d: FormData) {
  const lines = [
    "*Nueva ficha de alumno* 📋",
    "",
    `*Nombre:* ${d.nombre}`,
    d.edad && `*Edad:* ${d.edad}`,
    d.telefono && `*Teléfono:* ${d.telefono}`,
    d.email && `*Email:* ${d.email}`,
    (d.altura || d.peso) && `*Altura/Peso:* ${d.altura || "-"} / ${d.peso || "-"}`,
    "",
    "*Salud*",
    `Lesiones o condiciones: ${d.lesiones || "-"}`,
    `Cirugías / intervenciones: ${d.cirugias || "-"}`,
    `Medicación: ${d.medicacion || "-"}`,
    `Hábitos (fuma/alcohol): ${d.habitos || "-"}`,
    `Suplementación: ${d.suplementacion || "-"}`,
    "",
    "*Alimentación*",
    `Comidas por día: ${d.comidasPorDia || "-"}`,
    `Alergias/intolerancias: ${d.alergias || "-"}`,
    `Preferencias / no come: ${d.preferenciasComida || "-"}`,
    `Dieta actual: ${d.dietaActual || "-"}`,
    d.notasAlimentacion && `Algo más que deba saber: ${d.notasAlimentacion}`,
    "",
    "*Entrenamiento*",
    `Objetivo: ${d.objetivo || "-"}`,
    `Experiencia: ${d.experiencia || "-"}`,
    `Días disponibles: ${d.diasDisponibles || "-"}`,
    `Lugar: ${d.lugarEntrenamiento || "-"}`,
  ].filter(Boolean);
  return lines.join("\n");
}

export default function FormularioForm() {
  const [data, setData] = useState<FormData>(initial);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof FormData>(key: K) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleCelebrationDone = () => {
    setCelebrating(false);
    const msg = buildWaMessage(data);
    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.nombre.trim()) {
      setError("Falta tu nombre completo.");
      return;
    }
    setError("");
    setSending(true);

    try {
      const res = await fetch("/api/formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
    } catch {
      setSending(false);
      setError("No se pudo guardar. Probá de nuevo en un momento.");
      return;
    }

    setSending(false);
    setDone(true);
    setCelebrating(true);
  };

  if (done) {
    return (
      <>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h2 className="font-display text-2xl uppercase text-white">¡Listo, {data.nombre.split(" ")[0]}!</h2>
          <p className="max-w-sm text-[14px] leading-relaxed text-zinc-400">
            Tu ficha quedó guardada y te llevamos a WhatsApp para enviársela directo a Braian. Si no se abrió, escribí igual —
            ya tiene tus datos.
          </p>
        </div>
        <AnimatePresence>
          {celebrating && <CelebrationOverlay name={data.nombre} onContinue={handleCelebrationDone} />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl flex-col gap-5">
      <Section step="1" title="Datos personales">
        <Field label="Nombre completo" required>
          <input className={inputClass} value={data.nombre} onChange={set("nombre")} placeholder="Juan Pérez" required />
        </Field>
        <Field label="Edad">
          <input className={inputClass} value={data.edad} onChange={set("edad")} placeholder="28" inputMode="numeric" />
        </Field>
        <Field label="WhatsApp">
          <input className={inputClass} value={data.telefono} onChange={set("telefono")} placeholder="+54 9 ..." />
        </Field>
        <Field label="Email (opcional)">
          <input className={inputClass} value={data.email} onChange={set("email")} placeholder="tu@email.com" type="email" />
        </Field>
        <Field label="Altura (cm)">
          <input className={inputClass} value={data.altura} onChange={set("altura")} placeholder="175" inputMode="numeric" />
        </Field>
        <Field label="Peso actual (kg)">
          <input className={inputClass} value={data.peso} onChange={set("peso")} placeholder="80" inputMode="numeric" />
        </Field>
      </Section>

      <Section step="2" title="Salud">
        <div className="sm:col-span-2">
          <Field label="Lesiones o condiciones médicas relevantes">
            <textarea className={inputClass} value={data.lesiones} onChange={set("lesiones")} placeholder="Ninguna / detallá cuáles" rows={2} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="¿Tuviste alguna cirugía o intervención? ¿Cuál?">
            <textarea className={inputClass} value={data.cirugias} onChange={set("cirugias")} placeholder="Ninguna / tipo de cirugía y nombre" rows={2} />
          </Field>
        </div>
        <Field label="¿Tomás alguna medicación?">
          <input className={inputClass} value={data.medicacion} onChange={set("medicacion")} placeholder="No / cuál" />
        </Field>
        <Field label="¿Fumás o tomás alcohol regularmente?">
          <select className={inputClass} value={data.habitos} onChange={set("habitos")}>
            <option value="">Elegí una opción</option>
            <option value="No">No</option>
            <option value="Ocasional">Ocasional</option>
            <option value="Sí, con frecuencia">Sí, con frecuencia</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="¿Consumiste o consumís suplementos? ¿Cuáles?">
            <input className={inputClass} value={data.suplementacion} onChange={set("suplementacion")} placeholder="No / proteína, creatina, etc." />
          </Field>
        </div>
      </Section>

      <Section step="3" title="Alimentación">
        <Field label="¿Cuántas comidas hacés por día?">
          <select className={inputClass} value={data.comidasPorDia} onChange={set("comidasPorDia")}>
            <option value="">Elegí una opción</option>
            <option value="1-2">1-2</option>
            <option value="3">3</option>
            <option value="4-5">4-5</option>
            <option value="6+">6 o más</option>
          </select>
        </Field>
        <Field label="Dieta actual">
          <select className={inputClass} value={data.dietaActual} onChange={set("dietaActual")}>
            <option value="">Elegí una opción</option>
            <option value="Ninguna en particular">Ninguna en particular</option>
            <option value="Vegetariana">Vegetariana</option>
            <option value="Vegana">Vegana</option>
            <option value="Keto / baja en carbos">Keto / baja en carbos</option>
            <option value="Otra">Otra</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Alergias o intolerancias alimentarias">
            <input className={inputClass} value={data.alergias} onChange={set("alergias")} placeholder="Ninguna / detallá cuáles" />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Preferencias o alimentos que no comés">
            <input className={inputClass} value={data.preferenciasComida} onChange={set("preferenciasComida")} placeholder="Ninguna / no como pescado, no me gusta..." />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Algo más que deba saber">
            <textarea className={inputClass} value={data.notasAlimentacion} onChange={set("notasAlimentacion")} placeholder="Horarios complicados, trabajo, viajes, etc." rows={2} />
          </Field>
        </div>
      </Section>

      <Section step="4" title="Entrenamiento">
        <Field label="Objetivo principal">
          <select className={inputClass} value={data.objetivo} onChange={set("objetivo")}>
            <option value="">Elegí una opción</option>
            <option value="Bajar grasa">Bajar grasa</option>
            <option value="Ganar músculo">Ganar músculo</option>
            <option value="Salud general">Salud general</option>
            <option value="Rendimiento deportivo">Rendimiento deportivo</option>
          </select>
        </Field>
        <Field label="Experiencia entrenando">
          <select className={inputClass} value={data.experiencia} onChange={set("experiencia")}>
            <option value="">Elegí una opción</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </Field>
        <Field label="Días disponibles por semana">
          <select className={inputClass} value={data.diasDisponibles} onChange={set("diasDisponibles")}>
            <option value="">Elegí una opción</option>
            {[2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={String(n)}>{n} días</option>
            ))}
          </select>
        </Field>
        <Field label="Lugar de entrenamiento">
          <select className={inputClass} value={data.lugarEntrenamiento} onChange={set("lugarEntrenamiento")}>
            <option value="">Elegí una opción</option>
            <option value="Gimnasio">Gimnasio</option>
            <option value="Casa">Casa</option>
            <option value="Ambos">Ambos</option>
          </select>
        </Field>
      </Section>

      {error && <p className="text-center text-[13px] font-semibold text-[#E23A3A]">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] py-4 text-[13px] font-black uppercase tracking-wider text-white transition-all enabled:hover:bg-[#1ebe5d] enabled:active:scale-[.98] disabled:opacity-40"
      >
        {sending ? "Enviando..." : "Guardar y enviar"}
      </button>
    </form>
  );
}
