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
    q: "¿Hacen asesoría presencial en Buenos Aires?",
    a: "Sí, contamos con modalidad presencial, online e híbrida. Podés entrenar en el local de Cuatrouno Training Club o recibir tu plan de forma remota.",
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
    <section className="bg-[#0d0b09] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-4xl font-black uppercase text-[#D42020] sm:text-5xl">
          PREGUNTAS FRECUENTES
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full cursor-pointer items-center gap-4 bg-[#C41A1A] px-5 py-4 text-left font-bold uppercase text-white transition-colors hover:bg-[#D42020]"
              >
                <span className="text-xl font-black leading-none">{open === i ? "−" : "+"}</span>
                <span className="text-sm leading-tight">{faq.q}</span>
              </button>
              {open === i && (
                <div className="bg-[#1a1410] px-5 py-4 text-sm leading-relaxed text-zinc-300">
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
