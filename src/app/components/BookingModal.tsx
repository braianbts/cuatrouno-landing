"use client";

import { useMemo, useState } from "react";
import { WA_PHONE } from "./icons";

const DIAS = ["LU", "MA", "MI", "JU", "VI", "SA", "DO"];
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const HORARIOS = ["08:00", "09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

function buildMonthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  const firstWeekday = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstWeekday).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export default function BookingModal({ onClose }: { onClose: () => void }) {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const cells = useMemo(() => buildMonthGrid(viewYear, viewMonth), [viewYear, viewMonth]);
  const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();
  const isPast = (day: number) => new Date(viewYear, viewMonth, day) < today;

  const changeMonth = (delta: number) => {
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const formattedDate = selectedDay ? `${selectedDay} de ${MESES[viewMonth]}` : "";

  const handleConfirm = () => {
    if (!selectedDay || !selectedTime) return;
    const msg = `¡Hola! Quiero reservar una sesión${name.trim() ? ` a nombre de ${name.trim()}` : ""} para el ${formattedDate} a las ${selectedTime}hs.${phone.trim() ? ` Mi WhatsApp: ${phone.trim()}.` : ""}`;
    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b0a]" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        {done ? (
          <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </div>
            <h3 className="font-display text-2xl uppercase text-white">¡Casi listo!</h3>
            <p className="max-w-sm text-[14px] leading-relaxed text-zinc-400">
              Te llevamos a WhatsApp para confirmar el turno del <strong className="text-white">{formattedDate}</strong> a las <strong className="text-white">{selectedTime}hs</strong> directamente con Braian.
            </p>
            <button onClick={onClose} className="mt-2 rounded-md border border-white/15 px-6 py-3 text-[12px] font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-white/30 hover:text-white">
              Cerrar
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-[1.1fr_1fr]">
            {/* calendar */}
            <div className="border-b border-white/8 p-6 sm:border-b-0 sm:border-r sm:p-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C41A1A]">Reservar sesión</p>
              <div className="mb-4 flex items-center justify-between">
                <button
                  aria-label="Mes anterior"
                  onClick={() => changeMonth(-1)}
                  disabled={isCurrentMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors enabled:hover:border-white/30 enabled:hover:text-white disabled:opacity-25"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <p className="font-display text-lg uppercase text-white">{MESES[viewMonth]} {viewYear}</p>
                <button
                  aria-label="Mes siguiente"
                  onClick={() => changeMonth(1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {DIAS.map((d) => (
                  <span key={d} className="py-1 text-[10px] font-bold text-zinc-600">{d}</span>
                ))}
                {cells.map((day, i) => {
                  if (day === null) return <span key={`empty-${i}`} />;
                  const disabled = isPast(day);
                  const selected = selectedDay === day;
                  return (
                    <button
                      key={day}
                      disabled={disabled}
                      onClick={() => { setSelectedDay(day); setSelectedTime(null); }}
                      className={`aspect-square rounded-lg text-[13px] font-semibold transition-colors ${
                        selected ? "bg-[#C41A1A] text-white" : disabled ? "cursor-not-allowed text-zinc-700" : "text-zinc-300 hover:bg-white/8"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* details */}
            <div className="p-6 sm:p-7">
              {selectedDay ? (
                <>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">Fecha elegida</p>
                  <p className="mb-5 font-display text-xl uppercase text-white">{formattedDate}</p>
                </>
              ) : (
                <p className="mb-5 text-[13px] leading-relaxed text-zinc-500">Elegí un día en el calendario para ver los horarios disponibles.</p>
              )}

              {selectedDay && (
                <>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">Horarios disponibles</p>
                  <div className="mb-6 grid grid-cols-3 gap-2">
                    {HORARIOS.map((h) => (
                      <button
                        key={h}
                        onClick={() => setSelectedTime(h)}
                        className={`rounded-md border py-2 text-[12px] font-bold transition-colors ${
                          selectedTime === h ? "border-[#C41A1A] bg-[#C41A1A] text-white" : "border-white/10 text-zinc-300 hover:border-white/25"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {selectedDay && selectedTime && (
                <div className="space-y-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre completo"
                    className="w-full rounded-md border border-white/10 bg-[#080706] px-4 py-3 text-[13px] text-white placeholder:text-zinc-600 focus:border-[#C41A1A]/50 focus:outline-none"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Tu WhatsApp (opcional)"
                    className="w-full rounded-md border border-white/10 bg-[#080706] px-4 py-3 text-[13px] text-white placeholder:text-zinc-600 focus:border-[#C41A1A]/50 focus:outline-none"
                  />
                  <button
                    onClick={handleConfirm}
                    disabled={!name.trim()}
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] py-3.5 text-[12px] font-black uppercase tracking-wider text-white transition-all enabled:hover:bg-[#1ebe5d] enabled:active:scale-[.98] disabled:opacity-40"
                  >
                    Confirmar por WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
