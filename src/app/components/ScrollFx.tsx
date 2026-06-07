"use client";

import { useEffect } from "react";

/**
 * Client-only side effects:
 *  - reveal-on-scroll (.reveal -> .in)
 *  - sticky mobile CTA visibility (hidden over the hero, shown after it)
 * Renders nothing.
 */
export default function ScrollFx() {
  useEffect(() => {
    // reveal on scroll
    const reveals = document.querySelectorAll(".reveal");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((r) => io!.observe(r));
    } else {
      reveals.forEach((r) => r.classList.add("in"));
    }

    // sticky CTA: show after hero
    const sticky = document.getElementById("sticky-cta");
    const hero = document.getElementById("inicio");
    let hObs: IntersectionObserver | null = null;
    if (sticky && hero && "IntersectionObserver" in window) {
      hObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            sticky.classList.toggle("translate-y-full", e.isIntersecting);
          });
        },
        { threshold: 0.15 }
      );
      hObs.observe(hero);
    }

    return () => {
      io?.disconnect();
      hObs?.disconnect();
    };
  }, []);

  return null;
}
