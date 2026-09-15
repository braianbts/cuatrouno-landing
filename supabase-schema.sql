create table if not exists formularios (
  id uuid primary key default gen_random_uuid(),
  recibido_en timestamptz not null default now(),
  nombre text not null,
  edad text,
  telefono text,
  email text,
  altura text,
  peso text,
  lesiones text,
  cirugias text,
  medicacion text,
  habitos text,
  suplementacion text,
  comidas_por_dia text,
  alergias text,
  preferencias_comida text,
  dieta_actual text,
  notas_alimentacion text,
  objetivo text,
  experiencia text,
  dias_disponibles text,
  lugar_entrenamiento text
);

alter table formularios enable row level security;
