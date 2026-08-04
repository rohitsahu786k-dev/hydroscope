"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the element travels in from. */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Seconds to wait before starting - use to stagger a row by index. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

const OFFSET = 28;

const offsets = {
  up: { y: OFFSET, x: 0 },
  down: { y: -OFFSET, x: 0 },
  left: { y: 0, x: -OFFSET },
  right: { y: 0, x: OFFSET },
  none: { y: 0, x: 0 }
};

/* One scroll-reveal wrapper for the whole About page.
 *
 * `whileInView` with `once` means an element animates the first time it crosses
 * the viewport and then stays put - unlike the GSAP ScrollTrigger setup used on
 * How It Works, it re-measures itself, so an image finishing its decode after
 * the trigger was created cannot leave a section stranded at opacity 0.
 *
 * useReducedMotion collapses the travel and duration to nothing, so the content
 * is simply there for anyone who has asked the OS for less motion. */
export function Reveal({ children, className, from = "up", delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];
  const offset = reduceMotion ? offsets.none : offsets[from];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* Card/grid items that should lift slightly under the pointer. Kept separate
   from Reveal so a plain block of copy does not become interactive-looking. */
export function RevealCard({ children, className, delay = 0 }: Omit<RevealProps, "from" | "as">) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
