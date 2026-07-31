"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Container as ContainerIcon,
  Droplets,
  House,
  PlugZap,
  SunMedium,
  Syringe,
  Wrench,
  Zap,
  type LucideIcon
} from "lucide-react";
import styles from "./hydropure-village-setup-section.module.css";

/* --------------------------------------------------------------------------
 * Base image.
 *
 * Replace this one file to change the artwork:
 *   apps/web/public/images/hydropure-infographic/hydropure-village-tank-setup.png
 *
 * It must contain NO text - every word in this section is HTML below. If the
 * replacement has a different aspect ratio, update --hydropure-infographic-media-ratio
 * in the CSS module and re-check the connector coordinates.
 * ---------------------------------------------------------------------- */
const baseImage = {
  src: "/images/hydropure-infographic/hydropure-village-tank-setup.png",
  width: 1536,
  height: 1024,
  alt: "HydroPure village tank installation showing the HP-100 electrochlorinator, the HP-200/500/1000 cabinet unit, the HP-1600/2000 framed unit and the HydroScope water-quality sensor"
};

type Callout = {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
  side: "left" | "right";
  /** vertical placement over the base image, desktop only */
  top: string;
  /** elbow authored in the base image's coordinate space (0 0 1536 1024) */
  connector: string;
  /** where the elbow lands, same coordinate space */
  dot: [number, number];
};

const callouts: Callout[] = [
  {
    id: "salt-solution-tank",
    title: "Salt solution tank",
    text: "Auto preparation of saturated brine solution.",
    icon: ContainerIcon,
    side: "left",
    top: "20%",
    connector: "M 370 300 H 498 V 548",
    dot: [498, 548]
  },
  {
    id: "injection-line",
    title: "Injection line",
    text: "Safe and accurate chlorine dosing into the water line.",
    icon: Syringe,
    side: "left",
    top: "50%",
    connector: "M 370 592 H 648 V 664",
    dot: [648, 664]
  },
  {
    id: "electrochlorination-unit",
    title: "Electrochlorination unit",
    text: "On-site chlorine generation through electrolysis.",
    icon: Droplets,
    side: "right",
    top: "20%",
    connector: "M 1166 300 H 960 V 508",
    dot: [960, 508]
  },
  {
    id: "water-distribution",
    title: "Water distribution",
    text: "Treated water moves toward homes and storage.",
    icon: House,
    side: "right",
    top: "50%",
    connector: "M 1166 592 H 1114 V 636",
    dot: [1114, 636]
  }
];

const benefits: Array<{ id: string; title: string; text: string; icon: LucideIcon }> = [
  {
    id: "solar-compatible",
    title: "Solar compatible",
    text: "Works efficiently with solar energy.",
    icon: SunMedium
  },
  {
    id: "low-power-consumption",
    title: "Low power consumption",
    text: "Energy efficient system designed for savings.",
    icon: Zap
  },
  {
    id: "low-maintenance",
    title: "Low maintenance",
    text: "Minimal upkeep and easy operation.",
    icon: Wrench
  },
  {
    id: "plug-and-play-setup",
    title: "Plug and play setup",
    text: "Easy to install and ready to use.",
    icon: PlugZap
  }
];

/** Decorative floating droplets, positioned inside the media box. */
const droplets = [
  { id: "d1", x: "9%", y: "16%", size: "22px" },
  { id: "d2", x: "16%", y: "31%", size: "12px" },
  { id: "d3", x: "5%", y: "46%", size: "9px" },
  { id: "d4", x: "88%", y: "18%", size: "26px" },
  { id: "d5", x: "83%", y: "30%", size: "11px" },
  { id: "d6", x: "94%", y: "45%", size: "14px" }
];

export function HydroPureVillageSetupSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Everything is registered inside matchMedia, so visitors who prefer reduced
    // motion get the fully rendered static section and nothing is ever animated.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const pick = <T extends Element>(name: string) =>
        Array.from(root.querySelectorAll<T>(`[data-hp-animate="${name}"]`));

      const media = pick<HTMLElement>("media");
      const leftCards = pick<HTMLElement>("card-left");
      const rightCards = pick<HTMLElement>("card-right");
      const benefitItems = pick<HTMLElement>("benefit");
      const paths = pick<SVGPathElement>("connector");
      const dots = pick<SVGCircleElement>("connector-dot");
      const dropletEls = pick<HTMLElement>("droplet");

      const reveal = {
        trigger: root,
        start: "top 78%",
        once: true
      } satisfies ScrollTrigger.Vars;

      if (media.length) {
        gsap.from(media, {
          opacity: 0,
          scale: 0.94,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: reveal
        });
      }

      if (leftCards.length) {
        gsap.from(leftCards, {
          opacity: 0,
          x: -44,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.15,
          scrollTrigger: reveal
        });
      }

      if (rightCards.length) {
        gsap.from(rightCards, {
          opacity: 0,
          x: 44,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.15,
          scrollTrigger: reveal
        });
      }

      if (paths.length) {
        gsap.fromTo(
          paths,
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            duration: 0.9,
            ease: "power1.inOut",
            stagger: 0.14,
            delay: 0.3,
            scrollTrigger: reveal
          }
        );
      }

      if (dots.length) {
        gsap.from(dots, {
          opacity: 0,
          duration: 0.4,
          stagger: 0.14,
          delay: 0.9,
          scrollTrigger: reveal
        });
      }

      if (benefitItems.length) {
        gsap.from(benefitItems, {
          opacity: 0,
          y: 26,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: benefitItems[0],
            start: "top 92%",
            once: true
          }
        });
      }

      // gentle continuous float
      if (dropletEls.length) {
        gsap.to(dropletEls, {
          y: -12,
          duration: 2.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.35, from: "random" }
        });

        // subtle parallax as the section passes through the viewport
        gsap.to(dropletEls, {
          yPercent: -55,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="village-tank-setup"
      aria-labelledby="village-tank-setup-heading"
      className={styles["hydropure-infographic-section"]}
    >
      <header className={styles["hydropure-infographic-header"]}>
        <p className={styles["hydropure-infographic-eyebrow"]}>HydroPure installation</p>
        <h2 id="village-tank-setup-heading" className={styles["hydropure-infographic-heading"]}>
          Village tank <em>setup</em>
        </h2>
        <hr className={styles["hydropure-infographic-rule"]} />
        <p className={styles["hydropure-infographic-description"]}>
          A complete and sustainable water-treatment solution for villages.
        </p>
      </header>

      <div className={styles["hydropure-infographic-stage"]}>
        <figure className={styles["hydropure-infographic-media"]} data-hp-animate="media">
          <Image
            src={baseImage.src}
            alt={baseImage.alt}
            fill
            sizes="(min-width: 1180px) 1200px, 100vw"
            loading="lazy"
            className={styles["hydropure-infographic-image"]}
          />

          <svg
            className={styles["hydropure-infographic-connectors"]}
            viewBox={`0 0 ${baseImage.width} ${baseImage.height}`}
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            {callouts.map((callout) => (
              <g key={callout.id}>
                <path
                  d={callout.connector}
                  pathLength={1}
                  className={styles["hydropure-infographic-connector-path"]}
                  data-hp-animate="connector"
                />
                <circle
                  cx={callout.dot[0]}
                  cy={callout.dot[1]}
                  r={7}
                  className={styles["hydropure-infographic-connector-dot"]}
                  data-hp-animate="connector-dot"
                />
              </g>
            ))}
          </svg>

          <div className={styles["hydropure-infographic-droplets"]} aria-hidden="true">
            {droplets.map((droplet) => (
              <span
                key={droplet.id}
                className={styles["hydropure-infographic-droplet"]}
                data-hp-animate="droplet"
                style={{
                  ["--hydropure-infographic-droplet-x" as string]: droplet.x,
                  ["--hydropure-infographic-droplet-y" as string]: droplet.y,
                  ["--hydropure-infographic-droplet-size" as string]: droplet.size
                }}
              />
            ))}
          </div>
        </figure>

        <ul className={styles["hydropure-infographic-callouts"]}>
          {callouts.map((callout) => {
            const Icon = callout.icon;

            return (
              <li
                key={callout.id}
                data-hp-animate={callout.side === "left" ? "card-left" : "card-right"}
                className={`${styles["hydropure-infographic-card"]} ${
                  callout.side === "left"
                    ? styles["hydropure-infographic-card-left"]
                    : styles["hydropure-infographic-card-right"]
                }`}
                style={{ ["--hydropure-infographic-card-top" as string]: callout.top }}
              >
                <span className={styles["hydropure-infographic-card-icon"]}>
                  <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <div className={styles["hydropure-infographic-card-body"]}>
                  <h3 className={styles["hydropure-infographic-card-title"]}>{callout.title}</h3>
                  <p className={styles["hydropure-infographic-card-text"]}>{callout.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className={styles["hydropure-infographic-benefits"]}>
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <li key={benefit.id} className={styles["hydropure-infographic-benefit"]} data-hp-animate="benefit">
              <span className={styles["hydropure-infographic-benefit-icon"]}>
                <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <div className={styles["hydropure-infographic-benefit-body"]}>
                <h3 className={styles["hydropure-infographic-benefit-title"]}>{benefit.title}</h3>
                <p className={styles["hydropure-infographic-benefit-text"]}>{benefit.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
