"use client";

import { useState } from "react";

const faqs = [
  { q: "¿En cuánto tiempo recibo mi plan de entrenamiento?", a: "Lo recibirás en hasta 5 días hábiles una vez que completes la ficha de evaluación inicial." },
  { q: "¿Puedo contratar solo la asesoría de entrenamiento?", a: "Sí, podés elegir el módulo que más se adapte a tus objetivos. Consultanos por WhatsApp para conocer todas las opciones disponibles." },
  { q: "¿Por cuánto tiempo tengo acceso al plan?", a: "Depende del plan elegido: Plan Básico 12 semanas, Plan Completo 24 semanas, y Plan Premium 48 semanas." },
  { q: "¿Cómo funciona el seguimiento semanal?", a: "Hacemos control semanal de tus avances y realizamos ajustes para que no te estanques y sigas progresando hacia tu objetivo." },
  { q: "¿Necesito ir al gimnasio o puedo entrenar en casa?", a: "Podemos adaptar el plan tanto para gimnasio como para entrenamiento en casa, con o sin equipamiento. Lo definimos en la evaluación inicial." },
  { q: "¿Cómo resuelvo mis dudas durante el plan?", a: "Tenés acceso directo a soporte individual vía WhatsApp para resolver tus dudas en tiempo real y recibir feedback inmediato." },
  { q: "¿Puedo pausar mi plan?", a: "Sí, podemos pausar el plan de acuerdo a tus necesidades. Consultanos para coordinar los detalles según tu situación." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#080706] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-12 lg:px-20">
        <h2 className="reveal mb-10 font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
          Preguntas<br /><span className="text-[#C41A1A]">frecuentes</span>
        </h2>
        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-white/8 bg-[#0e0d0c]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] sm:px-6"
                >
                  <span className="text-[14px] font-bold leading-tight text-white">{faq.q}</span>
                  <span className={`flex-shrink-0 text-2xl font-light leading-none text-[#C41A1A] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className="grid transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-zinc-400 sm:px-6">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
