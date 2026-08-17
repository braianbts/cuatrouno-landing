"use client";

import type { ReactNode } from "react";
import { useBooking } from "./BookingContext";

export default function ReservarButton({ className, children }: { className?: string; children: ReactNode }) {
  const { open } = useBooking();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
