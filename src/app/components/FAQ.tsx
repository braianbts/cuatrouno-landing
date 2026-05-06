"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿En cuánto tiempo recibo mi plan de entrenamiento?",
    a: "Lo recibirás en hasta 5 días hábiles una vez que completes la ficha de evaluación inicial.",
  },
  {
    q: "¿Puedo contratar solo la asesoría de entrenamiento?",
    a: "Sí, podés elegir el módulo que más se adapte a tus objetivos. Consultanos por WhatsApp para conocer todas las opciones disponibles.",
  },
  {
    q: "¿Por cuánto tiempo tengo acceso al plan?",
    a: "Depende del plan elegido: Plan Básico 12 semanas, Plan Completo 24 semanas, y Plan Premium 48 semanas.",
  },
  {
    q: "¿Cómo funciona el seguimiento semanal?",
    a: "Hacemos control semanal de tus avances y realizamos ajustes para que no te estanques y sigas progresando constantemente hacia tu objetivo.",
  },
  {
    q: "¿Necesito ir al gimnasio o puedo entrenar en casa?",
    a: "Podemos adaptar el plan tanto para gimnasio como para entrenamiento en casa con o sin equipamiento. Lo definimos en la evaluación inicial.",
  },
  {
    q: "¿Cómo resuelvo mis dudas durante el plan?",
    a: "Tenés acceso directo a soporte individual vía WhatsApp para resolver tus dudas en tiempo real y recibir feedback inmediato.",
  },
  {
    q: "¿Puedo pausar mi plan?",
    a: "Sí, podemos pausar el plan de acuerdo a tus necesidades. Consultanos para coordinar los detalles según tu situación.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#080706] py-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
        <h2 className="mb-10 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
          PREGUNTAS<br />
          <span className="text-[#C41A1A]">FRECUENTES</span>
        </h2>
        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 border border-[#1a1a1a] bg-[#0e0d0c] px-6 py-4 text-left transition-colors hover:bg-[#141312]"
              >
                <span className="text-[14px] font-bold text-white leading-tight">{faq.q}</span>
                <span className="flex-shrink-0 text-xl font-black leading-none text-[#C41A1A]">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="border border-t-0 border-[#1a1a1a] bg-[#0a0908] px-6 py-4 text-[14px] leading-relaxed text-zinc-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
