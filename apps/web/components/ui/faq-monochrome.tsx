"use client";

import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import styles from "./faq-monochrome.module.css";

export type FaqMonochromeItem = {
  question: string;
  answer: string;
  /** optional category chip shown beside the question */
  meta?: string;
};

type FaqMonochromeProps = {
  items: FaqMonochromeItem[];
  introLabel?: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  /** index open on first render; pass -1 to start fully collapsed */
  defaultOpenIndex?: number;
};

export function FaqMonochrome({
  items,
  introLabel = "Hydroscope FAQ",
  eyebrow = "Questions",
  heading = "Common questions",
  description = "Everything worth knowing about HydroPure, HydroSense and HydroSure before a deployment - answered plainly.",
  defaultOpenIndex = 0
}: FaqMonochromeProps) {
  const baseId = useId();
  const [introReady, setIntroReady] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(defaultOpenIndex);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    let timeout: number | undefined;

    const start = () => {
      timeout = window.setTimeout(() => setHasEntered(true), 120);
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      window.removeEventListener("load", start);
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  const toggle = (index: number) => setActiveIndex((prev) => (prev === index ? -1 : index));

  /* Panels animate to their measured height rather than a hard max-h value, so a
     long answer is never clipped mid-sentence. */
  const panelHeight = (index: number) =>
    activeIndex === index ? `${panelRefs.current[index]?.scrollHeight ?? 0}px` : "0px";

  const trackGlow = (event: MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearGlow = (event: MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[24px] border border-[#d7e8fa] bg-[linear-gradient(160deg,#ffffff_0%,#f5faff_58%,#eef6ff_100%)] ${
        hasEntered ? styles.fadeReady : styles.fade
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(18, 88, 182, 0.09), transparent 68%)"
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 lg:max-w-5xl lg:px-12 lg:py-20">
        <div className={`${styles.intro} ${introReady ? styles.introActive : ""}`}>
          <span className={styles.beam} aria-hidden="true" />
          <span className={styles.ping} aria-hidden="true" />
          <span className={styles.label}>{introLabel}</span>
          <span className={styles.meter} aria-hidden="true" />
          <span className={styles.tick} aria-hidden="true" />
        </div>

        <header className="space-y-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-hydro-blue">{eyebrow}</p>
          <h2 className="text-[clamp(30px,3.6vw,52px)] font-semibold leading-tight tracking-[-0.03em] text-hydro-navy">
            {heading}
          </h2>
          <p className="max-w-xl text-base leading-7 text-hydro-muted">{description}</p>
        </header>

        <ul className="space-y-4">
          {items.map((item, index) => {
            const open = activeIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-trigger-${index}`;

            return (
              <li
                key={item.question}
                className="group relative overflow-hidden rounded-3xl border border-[#d7e8fa] bg-white/70 shadow-[0_26px_90px_-60px_rgba(9,36,76,0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5"
                onMouseMove={trackGlow}
                onMouseLeave={clearGlow}
              >
                <div
                  className={`${styles.glow} ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  aria-hidden="true"
                />

                {/* The trigger holds only the question and chip. The answer panel is a
                    sibling, not a child - nesting a region inside the button would fold
                    the whole answer into the button's accessible name. */}
                <h3 className="relative">
                  <button
                    type="button"
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={open}
                    onClick={() => toggle(index)}
                    className="flex w-full items-start gap-5 px-6 py-6 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-hydro-blue sm:gap-6 sm:px-8 sm:py-7"
                  >
                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cfe3fa] bg-[#eff6ff] transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-12">
                      <svg
                        className={`h-5 w-5 text-hydro-blue transition-transform duration-500 ${open ? "rotate-45" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <span className="text-lg font-medium leading-snug text-hydro-navy sm:text-xl">
                        {item.question}
                      </span>
                      {item.meta ? (
                        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-[#d7e8fa] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-hydro-muted sm:ml-auto">
                          {item.meta}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  ref={(node) => {
                    panelRefs.current[index] = node;
                  }}
                  className={styles.panel}
                  style={{ maxHeight: panelHeight(index) }}
                >
                  <p className="px-6 pb-6 pl-[4.25rem] text-sm leading-relaxed text-hydro-muted sm:px-8 sm:pb-7 sm:pl-[5.5rem]">
                    {item.answer}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FaqMonochrome;
