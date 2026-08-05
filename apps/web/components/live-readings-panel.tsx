"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Reading = {
  label: string;
  /** Shown when the panel is not animating - also what the server renders. */
  value: string;
  /** Numeric band the value drifts within, for readings that are measured. */
  range?: [number, number];
  decimals?: number;
  unit?: string;
};

const READINGS: Reading[] = [
  { label: "Device", value: "Active" },
  { label: "Updated", value: "Just now" },
  { label: "Chlorine", value: "0.82", range: [0.74, 0.9], decimals: 2 },
  { label: "Water supplied", value: "136.25", range: [134.8, 138.6], decimals: 2, unit: " KL" },
  { label: "Alerts", value: "1" }
];

const TICK_MS = 2600;

/* A standing panel of numbers next to a screenshot reads as a still image. This
   nudges the two measured readings within a narrow band on a timer and flashes
   the row as it changes, so the block behaves like the live feed it is
   illustrating.
 *
 * The drift is small and clearly bounded, and the panel says outright that the
 * figures are illustrative - it is a demonstration of the interface, not a
 * claim about a real site.
 *
 * Server and first client render both emit the authored values, so hydration
 * matches; the drift only starts once the timer runs. Nothing moves at all
 * under a reduced-motion preference. */
export function LiveReadingsPanel() {
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState(() => READINGS.map((r) => r.value));
  const [pulsing, setPulsing] = useState<number | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const drifting = READINGS.map((r, i) => (r.range ? i : -1)).filter((i) => i >= 0);
    let step = 0;

    const timer = window.setInterval(() => {
      const index = drifting[step % drifting.length];
      step += 1;

      const reading = READINGS[index];
      if (!reading?.range) return;

      const [min, max] = reading.range;
      const next = min + Math.random() * (max - min);

      setValues((current) => {
        const copy = [...current];
        copy[index] = next.toFixed(reading.decimals ?? 2);
        return copy;
      });
      setPulsing(index);
      window.setTimeout(() => setPulsing(null), 700);
    }, TICK_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div>
      <ul className="grid gap-3">
        {READINGS.map((reading, index) => (
          <li
            key={reading.label}
            className={`flex items-center justify-between rounded-xl border px-6 py-5 transition-colors duration-500 ${
              pulsing === index ? "border-hydro-blue2 bg-[#eaf3fd]" : "border-hydro-line bg-[#f7fbff]"
            }`}
          >
            <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-hydro-muted">
              {reading.label}
            </span>
            <span className="flex items-center gap-2">
              {reading.range ? (
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                    pulsing === index ? "bg-hydro-blue2" : "bg-[#c9dcef]"
                  }`}
                />
              ) : null}
              {/* aria-live so a screen reader hears the value settle rather
                  than every intermediate frame. */}
              <span aria-live="polite" className="text-lg font-normal tabular-nums text-hydro-navy">
                {values[index]}
                {reading.unit ?? ""}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-hydro-muted">
        Illustrative readings, shown to demonstrate the live view. Not data from a deployed site.
      </p>
    </div>
  );
}
