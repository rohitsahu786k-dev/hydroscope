"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/* Counts a figure up from zero the first time it scrolls into view.
 *
 * The value arrives as the string it should end on ("1,256", "0.72", "128.5"),
 * and the formatting is derived from that string - grouping and decimal places
 * both come from how the copy was written, so a figure can never be displayed
 * in a shape its author did not choose.
 *
 * The server and the first client render both emit the final value. That keeps
 * hydration identical, leaves the real number in the HTML for search engines and
 * for anyone without JavaScript, and only then does an effect reset it to zero
 * to start the count. */
export function NumberTicker({
  value,
  className,
  duration = 1.6
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  /* Split "1,250+" into the number and whatever trails it, so a figure written
     with a unit or a plus still counts - the suffix simply rides along. */
  const match = /^([\d.,]+)(.*)$/.exec(value.trim());
  const numberPart = match?.[1] ?? value;
  const suffix = match?.[2] ?? "";

  const numeric = Number(numberPart.replace(/,/g, ""));
  const decimals = numberPart.includes(".") ? (numberPart.split(".")[1]?.length ?? 0) : 0;
  const grouped = numberPart.includes(",");
  const animatable = Number.isFinite(numeric) && numberPart !== "" && !reduceMotion;

  useEffect(() => {
    if (!animatable) return;
    const format = (n: number) =>
      (grouped
        ? n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        : n.toFixed(decimals)) + suffix;

    if (!inView) {
      /* Not reached yet - park it at zero so the count has somewhere to start. */
      setDisplay(format(0));
      return;
    }

    const controls = animate(0, numeric, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(format(latest)),
      /* Snap to the authored string at the end so the final frame is exactly
         the copy, not a rounding of it. */
      onComplete: () => setDisplay(value)
    });

    return () => controls.stop();
  }, [animatable, inView, numeric, decimals, grouped, suffix, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
