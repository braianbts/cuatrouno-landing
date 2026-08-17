"use client";

import { useState } from "react";

const faqs = [
  { q: "¿En cuánto tiempo recibo mi plan de entrenamiento?", a: "Lo recibirás en hasta 5 días hábiles una vez que completes la ficha de evaluación inicial y enviés tus fotos posturales." },
  { q: "¿Por cuánto tiempo tengo acceso al plan?", a: "Depende del plan elegido: Plan Mensual (4 semanas), Plan Trimestral (12 semanas) y Plan Semestral (24 semanas). Cada uno incluye evaluaciones periódicas y ajustes del plan." },
  { q: "¿Cómo funciona el seguimiento 1:1?", a: "Tenés acceso directo a Braian por WhatsApp para consultas en tiempo real, ajustes de rutina y feedback inmediato. No hay bots ni respuestas automáticas." },
  { q: "¿Necesito ir al gimnasio o puedo entrenar en casa?", a: "El plan se adapta a tu situación: gimnasio, casa con equipamiento o sin equipamiento. Lo definimos en la videollamada de bienvenida." },
  { q: "¿La app funciona en iPhone y Android?", a: "Sí, la app es compatible con ambos sistemas. Desde ahí vas a tener tu rutina, plan de alimentación, cardio, escáner de porciones, control de peso y guía de compras — todo en un solo lugar." },
  { q: "¿Puedo contratar si soy principiante absoluto?", a: "Sí, de hecho es uno de los perfiles que mejor responde al programa. Empezar bien desde el principio evita meses de esfuerzo mal dirigido." },
  { q: "¿Puedo pausar mi plan?", a: "Sí, coordinamos según tu situación. Escribinos por WhatsApp y lo resolvemos." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden border-b-2 border-white/15 bg-[#080706] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-12 lg:px-20">
        <p className="reveal mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8413F]">Preguntas frecuentes</p>
        <h2 className="reveal d1 font-display mb-10 text-3xl font-black uppercase leading-tight sm:text-4xl">
          Antes de escribirme
        </h2>
        <div className="reveal d2 border-t-2 border-white/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-white/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left transition-colors hover:text-[#E8413F]"
                >
                  <span className="text-[14px] font-bold leading-tight text-white">{faq.q}</span>
                  <span className={`flex-shrink-0 text-2xl font-light leading-none text-[#E8413F] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className="grid transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[14px] leading-relaxed text-zinc-400">{faq.a}</p>
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
