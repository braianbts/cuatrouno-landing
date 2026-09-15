import { promises as fs } from "fs";
import path from "path";
import { getSupabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const DATA_FILE = path.join(process.cwd(), "data", "formularios.jsonl");
const ADMIN_KEY = process.env.ADMIN_KEY || "cuatrouno";

type Entry = Record<string, string> & { id: string; recibidoEn: string };

async function readFromSupabase(): Promise<Entry[] | null> {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("formularios")
      .select("*")
      .order("recibido_en", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => ({
      ...row,
      id: row.id,
      recibidoEn: row.recibido_en,
      comidasPorDia: row.comidas_por_dia,
      preferenciasComida: row.preferencias_comida,
      dietaActual: row.dieta_actual,
      notasAlimentacion: row.notas_alimentacion,
      diasDisponibles: row.dias_disponibles,
      lugarEntrenamiento: row.lugar_entrenamiento,
    }));
  } catch {
    return null;
  }
}

async function readFromFile(): Promise<Entry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return raw
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line))
      .reverse();
  } catch {
    return [];
  }
}

const FIELD_LABELS: Record<string, string> = {
  edad: "Edad", telefono: "WhatsApp", email: "Email", altura: "Altura", peso: "Peso",
  lesiones: "Lesiones/condiciones", cirugias: "Cirugías/intervenciones", medicacion: "Medicación", habitos: "Hábitos",
  suplementacion: "Suplementación", comidasPorDia: "Comidas/día", alergias: "Alergias",
  preferenciasComida: "Preferencias/no come", dietaActual: "Dieta actual", notasAlimentacion: "Algo más que deba saber",
  objetivo: "Objetivo", experiencia: "Experiencia", diasDisponibles: "Días disponibles",
  lugarEntrenamiento: "Lugar",
};

export default async function AdminFormulariosPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;

  if (key !== ADMIN_KEY) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080706] px-6 text-center text-white">
        <div>
          <h1 className="font-display text-xl uppercase">Acceso restringido</h1>
          <p className="mt-2 text-sm text-zinc-400">Agregá <code className="text-zinc-300">?key=TU_CLAVE</code> a la URL.</p>
        </div>
      </div>
    );
  }

  const fromSupabase = await readFromSupabase();
  const entries = fromSupabase ?? (await readFromFile());
  const source = fromSupabase ? "Supabase" : "archivo local (Supabase no configurado)";

  return (
    <div className="min-h-screen bg-[#080706] px-4 py-10 text-white sm:px-8">
      <h1 className="font-display mb-1 text-2xl uppercase">Fichas recibidas ({entries.length})</h1>
      <p className="mb-6 text-xs text-zinc-500">Fuente: {source}</p>

      {entries.length === 0 && <p className="text-zinc-400">Todavía no hay fichas guardadas.</p>}

      <div className="flex flex-col gap-4">
        {entries.map((entry) => (
          <div key={entry.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-lg uppercase text-white">{entry.nombre || "(sin nombre)"}</h2>
              <span className="text-xs text-zinc-500">{new Date(entry.recibidoEn).toLocaleString("es-AR")}</span>
            </div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-1 text-[13px] sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(FIELD_LABELS).map(([key, label]) =>
                entry[key] ? (
                  <div key={key} className="flex gap-1">
                    <dt className="font-semibold text-zinc-400">{label}:</dt>
                    <dd className="text-zinc-200">{entry[key]}</dd>
                  </div>
                ) : null
              )}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
