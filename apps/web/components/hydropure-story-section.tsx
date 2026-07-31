"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ArrowRight,
  CircleCheck,
  Eye,
  FileCheck2,
  Pipette,
  RadioTower,
  ShieldCheck,
  TriangleAlert,
  X,
  type LucideIcon
} from "lucide-react";
import styles from "./hydropure-story-section.module.css";

/* --------------------------------------------------------------------------
 * Hero artwork.
 *
 * Replace this one file to change the scene:
 *   apps/web/public/images/hydropure-infographic/hydropure-village-tank-hero.png
 *
 * No text is baked in - every word is HTML below. width/height must match the
 * file's real pixel size; they reserve the ratio so nothing shifts on load.
 * ---------------------------------------------------------------------- */
const heroImage = {
  src: "/images/hydropure-infographic/hydropure-village-tank-hero.png",
  alt: "HydroPure automated village water-tank chlorination installation with solar-compatible equipment and IoT monitoring.",
  width: 1448,
  height: 1086
};

const metrics: Array<{ id: string; value: string; label: string }> = [
  { id: "chlorine", value: "0.35", label: "mg/L chlorine" },
  { id: "flow", value: "12.5", label: "kL/hr flow" },
  { id: "status", value: "Live", label: "Tank status" },
  { id: "dosing", value: "Auto", label: "Dosing control" }
];

const problems: string[] = [
  "Aging water infrastructure and leakages",
  "Inconsistent chlorination practices",
  "Manual handling and human error",
  "No real-time monitoring or visibility",
  "Health risks and waterborne diseases"
];

const traditionalPractice: string[] = [
  "Manual chlorination",
  "Inconsistent dosing",
  "No monitoring",
  "Health risks"
];

const solutionFeatures: Array<{ id: string; title: string; icon: LucideIcon }> = [
  { id: "accurate-dosing", title: "Accurate Dosing", icon: Pipette },
  { id: "real-time-visibility", title: "Real-Time Visibility", icon: Eye },
  { id: "audit-ready-reporting", title: "Audit-Ready Reporting", icon: FileCheck2 },
  { id: "safer-disinfection", title: "Safer Disinfection", icon: ShieldCheck }
];

const summaryCards: Array<{ id: string; title: string; text: string; icon: LucideIcon; tone: "red" | "blue" | "green" }> = [
  { id: "manual-gap", title: "Manual gap", text: "Irregular field dosing", icon: TriangleAlert, tone: "red" },
  { id: "smart-unit", title: "Smart unit", text: "Automated HydroPure control", icon: Activity, tone: "blue" },
  { id: "live-proof", title: "Live proof", text: "Dashboard-ready reporting", icon: CircleCheck, tone: "green" }
];

type HydroPureStorySectionProps = {
  primaryHref?: string;
  secondaryHref?: string;
};

export function HydroPureStorySection({
  primaryHref = "/products/hydropure-intelligent-electrochlorinator",
  secondaryHref = "/dashboard-platform"
}: HydroPureStorySectionProps = {}) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // Registered only for visitors who have not asked for reduced motion, so the
    // static section is what everyone else gets - nothing to undo.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const pick = (name: string) => Array.from(root.querySelectorAll<HTMLElement>(`[data-story="${name}"]`));

      const reveal = (targets: HTMLElement[], vars: gsap.TweenVars, trigger?: Element) => {
        if (!targets.length) return;
        gsap.from(targets, {
          ease: "power2.out",
          duration: 0.7,
          ...vars,
          scrollTrigger: { trigger: trigger ?? targets[0], start: "top 88%", once: true }
        });
      };

      reveal(pick("intro-eyebrow"), { opacity: 0, y: 18, duration: 0.55 }, root);
      reveal(pick("intro-heading"), { opacity: 0, y: 26, duration: 0.8, delay: 0.1 }, root);
      reveal(pick("intro-lede"), { opacity: 0, y: 18, delay: 0.24 }, root);

      const hero = pick("hero-image");
      if (hero.length) {
        gsap.from(hero, {
          opacity: 0,
          scale: 0.97,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: hero[0], start: "top 88%", once: true }
        });
      }

      reveal(pick("hero-copy"), { opacity: 0, y: 22, delay: 0.2 }, hero[0]);
      reveal(pick("metric"), { opacity: 0, y: 18, stagger: 0.09, delay: 0.35 }, hero[0]);

      reveal(pick("column-challenge"), { opacity: 0, x: -34 });
      reveal(pick("column-traditional"), { opacity: 0, y: 30 });
      reveal(pick("column-solution"), { opacity: 0, x: 34 });
      reveal(pick("summary-card"), { opacity: 0, y: 24, stagger: 0.1 });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="village-water-story"
      aria-labelledby="village-water-story-heading"
      className={styles["hydropure-story-section"]}
    >
      <div className={styles["hydropure-story-shell"]}>
        {/* 1. intro heading area */}
        <header className={styles["hydropure-story-intro"]}>
          <p className={styles["hydropure-story-eyebrow"]} data-story="intro-eyebrow">
            <RadioTower size={15} aria-hidden="true" />
            Smart Jal Suraksha
          </p>
          <h2
            id="village-water-story-heading"
            className={styles["hydropure-story-heading"]}
            data-story="intro-heading"
          >
            One monitored layer for safer village{" "}
            <span className={styles["hydropure-story-highlight"]}>water tanks</span>
          </h2>
          <p className={styles["hydropure-story-lede"]} data-story="intro-lede">
            HydroPure brings field installation, dosing automation and live dashboard visibility into one clear
            operating story.
          </p>
        </header>

        {/* 2. hero visual. DOM order is the mobile order: image, then copy, then metrics. */}
        <div className={styles["hydropure-story-hero"]}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            sizes="(min-width: 1200px) 1180px, 100vw"
            loading="lazy"
            className={styles["hydropure-story-hero-image"]}
            data-story="hero-image"
          />

          <div className={styles["hydropure-story-hero-copy"]} data-story="hero-copy">
            <p className={styles["hydropure-story-hero-eyebrow"]}>Automated dosing • Live monitoring</p>
            <h3 className={styles["hydropure-story-hero-heading"]}>Smart disinfection with proof on screen</h3>
            <p className={styles["hydropure-story-hero-text"]}>
              HydroPure turns every tank into a measurable water-safety node with accurate dosing, dashboard
              visibility, alerts and audit-ready reporting.
            </p>
            <div className={styles["hydropure-story-actions"]}>
              <Link
                href={primaryHref}
                className={`${styles["hydropure-story-button"]} ${styles["hydropure-story-button-primary"]}`}
              >
                Explore HydroPure
              </Link>
              <Link
                href={secondaryHref}
                className={`${styles["hydropure-story-button"]} ${styles["hydropure-story-button-secondary"]}`}
              >
                View Live Dashboard
              </Link>
            </div>
          </div>

          <ul className={styles["hydropure-story-metrics"]}>
            {metrics.map((metric) => (
              <li key={metric.id} className={styles["hydropure-story-metric"]} data-story="metric">
                <p className={styles["hydropure-story-metric-value"]}>{metric.value}</p>
                <p className={styles["hydropure-story-metric-label"]}>{metric.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. challenge / traditional practice / what changes */}
        <div className={styles["hydropure-story-comparison"]}>
          <article
            className={`${styles["hydropure-story-column"]} ${styles["hydropure-story-column-challenge"]}`}
            data-story="column-challenge"
          >
            <p
              className={`${styles["hydropure-story-column-eyebrow"]} ${styles["hydropure-story-column-eyebrow-challenge"]}`}
            >
              <TriangleAlert size={15} aria-hidden="true" />
              The challenge
            </p>
            <h3 className={styles["hydropure-story-column-heading"]}>Manual operation creates blind spots</h3>
            <p className={styles["hydropure-story-column-text"]}>
              Even treated water can become unsafe when storage, dosing and field reporting depend on irregular
              manual checks.
            </p>
            <ul className={styles["hydropure-story-list"]}>
              {problems.map((problem) => (
                <li key={problem} className={styles["hydropure-story-list-item"]}>
                  <span className={styles["hydropure-story-marker"]} aria-hidden="true" />
                  <span className={styles["hydropure-story-body"]}>{problem}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            className={`${styles["hydropure-story-column"]} ${styles["hydropure-story-column-traditional"]}`}
            data-story="column-traditional"
          >
            <h3 className={styles["hydropure-story-traditional-heading"]}>Traditional practice</h3>
            <span className={styles["hydropure-story-arrow"]} aria-hidden="true">
              <ArrowRight size={20} />
            </span>
            <ul className={styles["hydropure-story-traditional-list"]}>
              {traditionalPractice.map((item) => (
                <li key={item} className={styles["hydropure-story-traditional-item"]}>
                  <span className={styles["hydropure-story-cross"]} aria-hidden="true">
                    <X size={16} strokeWidth={3} />
                  </span>
                  <span className={styles["hydropure-story-body"]}>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            className={`${styles["hydropure-story-column"]} ${styles["hydropure-story-column-solution"]}`}
            data-story="column-solution"
          >
            <p
              className={`${styles["hydropure-story-column-eyebrow"]} ${styles["hydropure-story-column-eyebrow-solution"]}`}
            >
              What changes
            </p>
            <h3 className={styles["hydropure-story-column-heading"]}>
              A monitored dosing layer built for distributed water tanks
            </h3>
            <p className={styles["hydropure-story-column-text"]}>
              The operator no longer waits for manual reports. HydroPure creates a live operating picture with
              dosing accuracy, health status and proof for review.
            </p>
            <ul className={styles["hydropure-story-features"]}>
              {solutionFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <li key={feature.id} className={styles["hydropure-story-feature"]}>
                    <span className={styles["hydropure-story-feature-icon"]}>
                      <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <p className={styles["hydropure-story-feature-title"]}>{feature.title}</p>
                  </li>
                );
              })}
            </ul>
            <p className={styles["hydropure-story-flowstrip"]}>
              <CircleCheck size={19} className={styles["hydropure-story-flowstrip-icon"]} aria-hidden="true" />
              <span className={styles["hydropure-story-body"]}>
                Village Tank Problem → Manual Practice Gap → HydroPure Smart Solution
              </span>
            </p>
          </article>
        </div>

        {/* 4. summary strip */}
        <ul className={styles["hydropure-story-summary"]}>
          {summaryCards.map((card) => {
            const Icon = card.icon;

            return (
              <li key={card.id} className={styles["hydropure-story-summary-card"]} data-story="summary-card">
                <span
                  className={`${styles["hydropure-story-summary-icon"]} ${
                    styles[`hydropure-story-summary-icon-${card.tone}`]
                  }`}
                >
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className={styles["hydropure-story-body"]}>
                  <h3 className={styles["hydropure-story-summary-title"]}>{card.title}</h3>
                  <p className={styles["hydropure-story-summary-text"]}>{card.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
