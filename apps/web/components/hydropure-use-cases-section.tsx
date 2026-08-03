"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, FlaskConical, Pill, Snowflake, Waves } from "lucide-react";
import styles from "./hydropure-use-cases-section.module.css";

/* --------------------------------------------------------------------------
 * Background artwork.
 *
 * Save the supplied file here, unmodified:
 *   apps/web/public/images/hydropure-use-cases/hydropure-use-cases-background.webp
 *
 * No text is baked into the file - every word below is HTML laid over it.
 * `width`/`height` must equal the file's real pixel size: they reserve the
 * aspect ratio (no layout shift), and a mismatch letterboxes the image, which
 * would slide every overlay anchor off its blank card.
 * ---------------------------------------------------------------------- */
const backgroundImage = {
  src: "/images/hydropure-use-cases/hydropure-use-cases-background.webp",
  alt: "HydroPure water-treatment use cases including drinking water, wastewater, cooling systems, bleaching and pharmaceutical manufacturing.",
  width: 1535,
  height: 1024
};

export type HydroPureUseCase = {
  id: string;
  heading: string;
  description: string;
  Icon: typeof Droplets;
};

/* Reusable data array - the five cards render from this, in this order. */
export const hydroPureUseCases: HydroPureUseCase[] = [
  {
    id: "drinking-water-treatment",
    heading: "Drinking Water Treatment",
    description: "Ensure microbiologically safe and clean drinking water for communities and facilities.",
    Icon: Droplets
  },
  {
    id: "wastewater-treatment",
    heading: "Wastewater Treatment",
    description: "Effective disinfection for sewage and industrial wastewater before safe discharge or reuse.",
    Icon: Waves
  },
  {
    id: "cooling-water-systems",
    heading: "Cooling Water Systems",
    description: "Prevent biofouling and microbial growth in cooling towers and recirculating systems.",
    Icon: Snowflake
  },
  {
    id: "bleaching-processes",
    heading: "Bleaching Processes",
    description: "Reliable disinfection for bleaching applications across textile, pulp and paper industries.",
    Icon: FlaskConical
  },
  {
    id: "pharmaceutical-manufacturing",
    heading: "Pharmaceutical Manufacturing",
    description: "Maintain stringent hygiene standards and process-water quality in pharmaceutical production.",
    Icon: Pill
  }
];

type HydroPureUseCasesSectionProps = {
  /* "overlay" (default) pins the eyebrow/heading/description into the artwork's
     blank top band on desktop, from the --hydropure-use-cases-header-*
     variables. That band is clear down to the dotted connector at ~21% of the
     image height, and the overlay type is sized to stop above it.
     "above" renders the same block as normal flow HTML above the artwork - use
     it if you swap in artwork whose top band is occupied, or if the heading
     ever wraps to two lines and crowds the connector. */
  headerPlacement?: "above" | "overlay";
  /* Set true only if this section renders above the fold; otherwise the image
     stays lazy-loaded. */
  priority?: boolean;
};

export function HydroPureUseCasesSection({
  headerPlacement = "overlay",
  priority = false
}: HydroPureUseCasesSectionProps = {}) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // Registered only for visitors who have not asked for reduced motion, so
    // everyone else simply gets the static section - nothing to undo.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const pick = (name: string) =>
        Array.from(root.querySelectorAll<HTMLElement>(`[data-use-cases="${name}"]`));

      const reveal = (targets: HTMLElement[], vars: gsap.TweenVars, trigger?: Element) => {
        if (!targets.length) return;
        gsap.from(targets, {
          ease: "power2.out",
          duration: 0.7,
          ...vars,
          scrollTrigger: { trigger: trigger ?? targets[0], start: "top 88%", once: true }
        });
      };

      reveal(pick("eyebrow"), { opacity: 0, y: 18, duration: 0.55 }, root);
      reveal(pick("heading"), { opacity: 0, y: 26, duration: 0.8, delay: 0.1 }, root);
      reveal(pick("description"), { opacity: 0, y: 18, delay: 0.24 }, root);

      const visual = pick("visual");
      if (visual.length) {
        gsap.from(visual, {
          opacity: 0,
          scale: 0.98,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: visual[0], start: "top 88%", once: true }
        });
      }

      reveal(pick("card"), { opacity: 0, y: 24, stagger: 0.1, delay: 0.15 }, visual[0]);
    });

    return () => {
      mm.revert();
    };
  }, []);

  const header = (
    <div
      className={`${styles["hydropure-use-cases-header"]} ${
        headerPlacement === "overlay"
          ? styles["hydropure-use-cases-header-overlay"]
          : styles["hydropure-use-cases-header-above"]
      }`}
    >
      <p className={styles["hydropure-use-cases-eyebrow"]} data-use-cases="eyebrow">
        USE CASES
      </p>
      <h2
        id="hydropure-use-cases-heading"
        className={styles["hydropure-use-cases-heading"]}
        data-use-cases="heading"
      >
        Built for{" "}
        <span className={styles["hydropure-use-cases-highlight"]}>Multiple Water Challenges</span>
      </h2>
      <p className={styles["hydropure-use-cases-description"]} data-use-cases="description">
        HydroPure adapts to a wide range of environments where safe, reliable and continuous
        disinfection is critical.
      </p>
    </div>
  );

  const cards = (
    <ul className={styles["hydropure-use-cases-cards"]}>
      {hydroPureUseCases.map(({ id, heading, description, Icon }) => (
        <li key={id} className={styles["hydropure-use-cases-card"]} data-use-cases="card">
          {/* Decorative on tablet/mobile only - the artwork already carries the
              icons on desktop, where this is hidden. The heading carries the
              meaning, so the icon stays out of the accessibility tree. */}
          <span className={styles["hydropure-use-cases-card-icon"]} aria-hidden="true">
            <Icon className={styles["hydropure-use-cases-card-glyph"]} strokeWidth={1.6} />
          </span>
          <h3 className={styles["hydropure-use-cases-card-heading"]}>{heading}</h3>
          <span className={styles["hydropure-use-cases-card-divider"]} aria-hidden="true" />
          <p className={styles["hydropure-use-cases-card-description"]}>{description}</p>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      ref={rootRef}
      id="hydropure-use-cases"
      aria-labelledby="hydropure-use-cases-heading"
      className={styles["hydropure-use-cases-section"]}
    >
      {/* DOM order is already the required mobile order: eyebrow, heading,
          description, image, then the five cards. Desktop only repositions. */}
      {headerPlacement === "above" ? header : null}

      <div className={styles["hydropure-use-cases-visual"]} data-use-cases="visual">
        {headerPlacement === "overlay" ? header : null}

        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          width={backgroundImage.width}
          height={backgroundImage.height}
          sizes="(min-width: 1440px) 1440px, 100vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          /* Background artwork, not a control: clicks and drags do nothing. */
          draggable={false}
          className={`${styles["hydropure-use-cases-image"]} pointer-events-none select-none`}
        />

        {cards}
      </div>
    </section>
  );
}
