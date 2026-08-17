export type Plan = {
  key: "mensual" | "trimestral" | "semestral";
  name: string;
  weeks: string;
  featured?: boolean;
  badge?: string;
  cuotas: string;
  contado: string;
  subCuotas: string;
  subContado: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    key: "mensual",
    name: "Plan Mensual",
    weeks: "1 mes · 4 semanas",
    cuotas: "2x $59.990",
    contado: "$109.990",
    subCuotas: "o $109.990 al contado",
    subContado: "o 2x de $59.990",
    features: ["Rutina completa personalizada", "Plan de alimentación estructurado", "Guía de alimentación práctica y de suplementación", "App personalizada con rutina, alimentación, escáner de porciones, control de peso y guía de compras", "Videollamada de bienvenida", "Soporte por WhatsApp"],
  },
  {
    key: "trimestral",
    name: "Plan Trimestral",
    weeks: "3 meses · 12 semanas",
    featured: true,
    badge: "Recomendado",
    cuotas: "3x $74.990",
    contado: "$199.990",
    subCuotas: "o $199.990 al contado",
    subContado: "o 3x de $74.990",
    features: ["Todo lo del Plan Mensual", "Protocolo de entrenamiento progresivo", "Guía de alimentación práctica y de suplementación", "App personalizada con rutina, alimentación, escáner de porciones, control de peso y guía de compras", "Soporte individual por WhatsApp", "Descuentos en Cuatrouno Suplementos"],
  },
  {
    key: "semestral",
    name: "Plan Semestral",
    weeks: "6 meses · 24 semanas",
    cuotas: "3x $124.990",
    contado: "$329.990",
    subCuotas: "o $329.990 al contado",
    subContado: "o 3x de $124.990",
    features: ["Todo lo del Plan Trimestral", "KIT inicial de suplementación ¡GRATIS!", "Indumentaria oficial Training Club", "App personalizada con rutina, alimentación, escáner de porciones, control de peso y guía de compras", "Videollamada cada 30 días", "Seguimiento continuo del progreso", "Descuentos en Cuatrouno Suplementos"],
  },
];
