import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { getSupabaseAdmin } from "@/lib/supabase";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "formularios.jsonl");

const FIELD_MAP: Record<string, string> = {
  nombre: "nombre",
  edad: "edad",
  telefono: "telefono",
  email: "email",
  altura: "altura",
  peso: "peso",
  lesiones: "lesiones",
  cirugias: "cirugias",
  medicacion: "medicacion",
  habitos: "habitos",
  suplementacion: "suplementacion",
  comidasPorDia: "comidas_por_dia",
  alergias: "alergias",
  preferenciasComida: "preferencias_comida",
  dietaActual: "dieta_actual",
  notasAlimentacion: "notas_alimentacion",
  objetivo: "objetivo",
  experiencia: "experiencia",
  diasDisponibles: "dias_disponibles",
  lugarEntrenamiento: "lugar_entrenamiento",
};

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body || typeof body.nombre !== "string" || !body.nombre.trim()) {
    return NextResponse.json({ error: "Falta el nombre" }, { status: 400 });
  }

  const row: Record<string, string> = {};
  for (const [key, column] of Object.entries(FIELD_MAP)) {
    if (body[key]) row[column] = body[key];
  }

  let savedToSupabase = false;
  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("formularios").insert(row);
    if (error) throw error;
    savedToSupabase = true;
  } catch (err) {
    console.error("No se pudo guardar en Supabase:", err);
  }

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.appendFile(
      DATA_FILE,
      JSON.stringify({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, recibidoEn: new Date().toISOString(), ...body }) + "\n",
      "utf8"
    );
  } catch {
    // respaldo best-effort en disco; Supabase es la fuente principal
  }

  if (!savedToSupabase) {
    return NextResponse.json({ error: "No se pudo guardar en la base de datos" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
