"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const IMG = "/images/how-it-works";

/* The seven-step workflow. `icon` is the flat line icon used in the step cards,
   `render` is the product shot used in the flow diagram below them. Copy is the
   step list that already existed on this page - unchanged. */
const steps = [
  {
    n: "01",
    label: "Softened Water",
    text: "Softened water is used to prepare brine with salt.",
    caption: "Brine is prepared with softened water and salt.",
    icon: `${IMG}/01-softened-water-icon.webp`,
    render: `${IMG}/08-softened-water-system.webp`,
    alt: "Water softener and brine tank preparing softened water for HydroPure"
  },
  {
    n: "02",
    label: "Electrolytic Cell",
    text: "Brine enters the electrolytic cell.",
    caption: "Brine enters the electrolytic cell.",
    icon: `${IMG}/02-electrolytic-cell-icon.webp`,
    render: `${IMG}/09-electrolytic-cell.webp`,
    alt: "HydroPure electrolytic cell with anode and cathode plates in brine"
  },
  {
    n: "03",
    label: "Electrolysis",
    text: "Electric current converts brine into sodium hypochlorite.",
    caption: "Electric current converts brine into sodium hypochlorite.",
    icon: `${IMG}/03-electric-current-icon.webp`,
    render: `${IMG}/10-electrolysis-process.webp`,
    alt: "Electrolysis converting brine into sodium hypochlorite inside the cell"
  },
  {
    n: "04",
    label: "Storage Tank",
    text: "Generated solution is stored safely in the system.",
    caption: "Generated solution is stored safely in the system.",
    icon: `${IMG}/04-storage-tank-icon.webp`,
    render: `${IMG}/11-storage-tank.webp`,
    alt: "Sodium hypochlorite storage tank in the HydroPure system"
  },
  {
    n: "05",
    label: "Dosing Pump",
    text: "Dosing pumps inject disinfectant into the water line.",
    caption: "Dosing pumps inject disinfectant into the water line.",
    icon: `${IMG}/05-dosing-pump-icon.webp`,
    render: `${IMG}/12-dosing-pump.webp`,
    alt: "Precision dosing pump injecting disinfectant into the water line"
  },
  {
    n: "06",
    label: "Sensors",
    text: "Sensors monitor chlorine, flow and system status.",
    caption: "Sensors monitor chlorine, flow and system status.",
    icon: `${IMG}/06-sensor-monitoring-icon.webp`,
    render: `${IMG}/13-water-sensor-probe.webp`,
    alt: "HydroSense inline sensor probe measuring residual chlorine and flow"
  },
  {
    n: "07",
    label: "Cloud Dashboard",
    text: "HydroSure dashboard displays data, alerts and reports.",
    caption: "HydroSure dashboard displays data, alerts and reports.",
    icon: `${IMG}/07-cloud-dashboard-icon.webp`,
    render: `${IMG}/14-cloud-dashboard-devices.webp`,
    alt: "HydroSure cloud dashboard on desktop and mobile showing live water data"
  }
];

const whyItMatters = [
  "Consistent, accurate dosing for better water quality",
  "Fewer site visits and reduced operator intervention",
  "Real-time insights to respond faster and with confidence",
  "Built-in safety, logging and compliance reporting"
];

const walkthrough = [
  "Electrolysis using inert, long-life electrodes",
  "Smart dosing logic based on flow and demand",
  "Continuous sensor feedback for residual chlorine",
  "Secure cloud dashboard with alerts and reports"
];

const includes = [
  {
    title: "Brine Tank & Preparation",
    text: "Creates high-quality brine using softened water and salt for optimal performance.",
    icon: `${IMG}/16-brine-tank-preparation.webp`
  },
  {
    title: "Electrolyser Cell",
    text: "Converts brine into sodium hypochlorite using safe, low-voltage electrolysis.",
    icon: `${IMG}/17-electrolyser-cell.webp`
  },
  {
    title: "Dosing Pump",
    text: "Precision dosing pump injects disinfectant into the water line automatically.",
    icon: `${IMG}/18-dosing-pump-system.webp`
  },
  {
    title: "Sensors & Feedback",
    text: "Monitors chlorine residual, flow and system health in real time.",
    icon: `${IMG}/19-sensors-feedback.webp`
  },
  {
    title: "Dashboard Visibility",
    text: "HydroSure dashboard provides real-time alerts, analytics and historical reports.",
    icon: `${IMG}/20-dashboard-visibility.webp`
  }
];

export function HowItWorksContent() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    /* Registered only for visitors who have not asked for reduced motion, so
       everyone else gets the page fully rendered and static - nothing to undo. */
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const pick = (name: string) => Array.from(root.querySelectorAll<HTMLElement>(`[data-hiw="${name}"]`));

      /* fromTo, not from: `from` leaves the element on its start values if the
         trigger never fires, which is how whole sections ended up stuck at
         opacity 0. Here the end state is written explicitly, so the worst case
         is an element that appears without animating rather than one that never
         appears at all. */
      const reveal = (targets: HTMLElement[], vars: gsap.TweenVars, trigger?: Element) => {
        if (!targets.length) return;
        const { opacity, x, y, scale, ...rest } = vars;
        gsap.fromTo(
          targets,
          { opacity: opacity ?? 0, x: x ?? 0, y: y ?? 0, scale: scale ?? 1 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            ease: "power2.out",
            duration: 0.7,
            ...rest,
            scrollTrigger: {
              trigger: trigger ?? targets[0],
              start: "top 92%",
              once: true,
              invalidateOnRefresh: true
            }
          }
        );
      };

      reveal(pick("eyebrow"), { opacity: 0, y: 16, duration: 0.5 }, root);
      reveal(pick("heading"), { opacity: 0, y: 26, duration: 0.8, delay: 0.08 }, root);
      reveal(pick("lede"), { opacity: 0, y: 18, delay: 0.2 }, root);

      reveal(pick("step-card"), { opacity: 0, y: 26, stagger: 0.07 });

      /* The flow reads left to right, so each node and the arrow after it come
         in one after the other rather than all at once. */
      const flowNodes = pick("flow-node");
      reveal(flowNodes, { opacity: 0, y: 20, scale: 0.96, duration: 0.55, stagger: 0.12 });

      const arrows = pick("flow-arrow");
      if (arrows.length) {
        gsap.fromTo(
          arrows,
          { opacity: 0, scaleX: 0 },
          {
            opacity: 1,
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.4,
            ease: "power1.out",
            stagger: 0.12,
            delay: 0.15,
            scrollTrigger: {
              trigger: flowNodes[0] ?? arrows[0],
              start: "top 92%",
              once: true,
              invalidateOnRefresh: true
            }
          }
        );
      }

      reveal(pick("why-card"), { opacity: 0, x: -28 });
      reveal(pick("why-item"), { opacity: 0, y: 14, stagger: 0.08 });
      reveal(pick("tech-card"), { opacity: 0, x: 28 });
      reveal(pick("tech-item"), { opacity: 0, y: 14, stagger: 0.08 });
      reveal(pick("include-card"), { opacity: 0, y: 24, stagger: 0.08 });
      reveal(pick("cta"), { opacity: 0, y: 22 });

      /* ScrollTrigger measures start positions when the triggers are created.
         This page is mostly images, so the document grows as they decode and
         every cached position below the fold ends up wrong - which is why the
         lower sections never fired and stayed invisible. Re-measure once each
         image settles, and again on window load. */
      const images = Array.from(root.querySelectorAll("img"));
      const pending = images.filter((img) => !img.complete);
      let outstanding = pending.length;

      const settle = () => {
        outstanding -= 1;
        if (outstanding <= 0) ScrollTrigger.refresh();
      };

      pending.forEach((img) => {
        img.addEventListener("load", settle, { once: true });
        img.addEventListener("error", settle, { once: true });
      });

      const onWindowLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onWindowLoad);

      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener("load", onWindowLoad);
        pending.forEach((img) => {
          img.removeEventListener("load", settle);
          img.removeEventListener("error", settle);
        });
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={rootRef}>
      {/* ---- Intro ---- */}
      <div className="text-center">
        <p
          data-hiw="eyebrow"
          className="text-xs font-extrabold uppercase tracking-[0.22em] text-hydro-blue"
        >
          How electrochlorination works
        </p>
        <h1
          data-hiw="heading"
          className="mx-auto mt-4 max-w-[820px] text-[clamp(30px,3.4vw,48px)] font-normal leading-[1.14] tracking-[-0.03em] text-hydro-navy"
        >
          Brine electrolysis, automatic dosing and cloud visibility in one workflow
        </h1>
        <p data-hiw="lede" className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-hydro-muted">
          HydroScope combines brine electrolysis, dosing pumps, sensing and cloud dashboards into one
          practical disinfection workflow.
        </p>
      </div>

      {/* ---- Seven step cards ---- */}
      <ol className="mt-12 grid grid-cols-7 gap-4 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {steps.map((step) => (
          <li
            key={step.n}
            data-hiw="step-card"
            className="group relative rounded-2xl border border-[#dcebfa] bg-white p-5 text-center shadow-[0_16px_40px_-30px_rgba(9,36,76,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[#b7d7f6] hover:shadow-[0_22px_50px_-28px_rgba(9,36,76,0.5)]"
          >
            <span className="absolute left-4 top-4 grid h-7 w-7 place-items-center rounded-full bg-hydro-blue text-[11px] font-extrabold text-white">
              {step.n}
            </span>
            <span className="mx-auto mt-6 block h-24 w-24">
              <Image
                src={step.icon}
                alt=""
                width={400}
                height={400}
                loading="lazy"
                draggable={false}
                className="h-full w-full select-none object-contain transition duration-500 group-hover:scale-110"
              />
            </span>
            <p className="mt-5 text-sm leading-6 text-hydro-ink">{step.text}</p>
          </li>
        ))}
      </ol>

      {/* ---- Flow diagram ---- */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-[#dcebfa] bg-white p-6 shadow-[0_18px_50px_-36px_rgba(9,36,76,0.5)] max-lg:p-4">
        {/* Scrolls horizontally rather than squashing on narrow screens - the
            left-to-right reading order is the whole point of this diagram. */}
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[1380px] items-stretch gap-2">
            {steps.map((step, index) => (
              <div key={step.label} className="flex flex-1 items-stretch gap-2">
                <div data-hiw="flow-node" className="flex min-w-0 flex-1 flex-col items-center text-center">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-hydro-navy">
                    {step.label}
                  </p>
                  <div className="relative mt-4 aspect-[4/3] w-full">
                    <Image
                      src={step.render}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1280px) 18vw, 220px"
                      loading="lazy"
                      draggable={false}
                      className="select-none object-contain"
                    />
                  </div>
                  <p className="mt-3 flex items-start gap-2 text-left text-[11px] leading-5 text-hydro-muted">
                    <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full bg-hydro-blue text-[9px] font-extrabold text-white">
                      {index + 1}
                    </span>
                    {step.caption}
                  </p>
                </div>

                {index < steps.length - 1 ? (
                  <div
                    data-hiw="flow-arrow"
                    aria-hidden="true"
                    className="mt-12 h-px w-8 shrink-0 self-start bg-[linear-gradient(90deg,#9fc9f2,#1258b6)]"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Why this matters / Technical walkthrough ---- */}
      <div className="mt-6 grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        <div
          data-hiw="why-card"
          className="rounded-2xl border border-[#dcebfa] bg-white p-7 shadow-[0_18px_50px_-36px_rgba(9,36,76,0.5)]"
        >
          <h2 className="text-2xl font-normal tracking-[-0.02em] text-hydro-navy">Why this matters</h2>
          <span className="mt-3 block h-1 w-10 rounded-full bg-hydro-blue" aria-hidden="true" />
          <p className="mt-6 text-sm leading-7 text-hydro-muted">
            Automating disinfection with electrochlorination reduces risks and manual errors while giving
            your team complete visibility.
          </p>
          <ul className="mt-6 grid gap-4">
            {whyItMatters.map((item, index) => (
              <li key={item} data-hiw="why-item" className="flex items-start gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#eaf3fd] text-[11px] font-extrabold text-hydro-blue">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-hydro-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-hiw="tech-card"
          className="relative overflow-hidden rounded-2xl border border-[#dcebfa] bg-white p-7 shadow-[0_18px_50px_-36px_rgba(9,36,76,0.5)]"
        >
          <h2 className="text-2xl font-normal tracking-[-0.02em] text-hydro-navy">Technical walkthrough</h2>
          <span className="mt-3 block h-1 w-10 rounded-full bg-hydro-blue" aria-hidden="true" />

          <div className="mt-6 grid grid-cols-[1.15fr_0.85fr] items-center gap-5 max-sm:grid-cols-1">
            <div>
              <ul className="grid gap-4">
                {walkthrough.map((item) => (
                  <li key={item} data-hiw="tech-item" className="flex items-start gap-3">
                    <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-hydro-blue" />
                    <span className="text-sm leading-6 text-hydro-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/request-demo"
                className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg bg-hydro-navy px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-hydro-blue"
              >
                Request technical walkthrough <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src={`${IMG}/15-technical-blueprint.webp`}
                alt="Technical blueprint of the HydroPure brine tank, electrolytic cell, dosing pump and sensor layout"
                fill
                sizes="(min-width: 1024px) 28vw, 45vw"
                loading="lazy"
                draggable={false}
                className="pointer-events-none select-none object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---- What the system includes ---- */}
      <div className="mt-14 text-center">
        <h2 className="text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.02em] text-hydro-navy">
          What the system includes
        </h2>
        <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-hydro-blue" aria-hidden="true" />
      </div>
      <div className="mt-8 grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {includes.map((item) => (
          <article
            key={item.title}
            data-hiw="include-card"
            className="group rounded-2xl border border-[#dcebfa] bg-white p-6 text-center shadow-[0_16px_40px_-32px_rgba(9,36,76,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[#b7d7f6]"
          >
            {/* Full-width 4:3 block rather than a small icon box - these are
                product renders, so they need the room to read. */}
            <span className="relative mx-auto block aspect-[4/3] w-full">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                sizes="(min-width: 1280px) 18vw, (min-width: 768px) 30vw, 80vw"
                loading="lazy"
                draggable={false}
                className="select-none object-contain transition duration-500 group-hover:scale-105"
              />
            </span>
            <h3 className="mt-5 text-base font-extrabold leading-snug text-hydro-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-hydro-muted">{item.text}</p>
          </article>
        ))}
      </div>

      {/* ---- Closing CTA ---- */}
      <div
        data-hiw="cta"
        className="mt-14 grid grid-cols-[auto_1fr_auto] items-center gap-8 rounded-2xl border border-[#dcebfa] bg-[linear-gradient(120deg,#f4f9ff_0%,#eaf4ff_100%)] p-8 max-lg:grid-cols-1 max-lg:gap-6"
      >
        <span className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl bg-white shadow-[0_14px_34px_-24px_rgba(9,36,76,0.6)]">
          <Image
            src={`${IMG}/21-support-consultation-icon.webp`}
            alt=""
            width={400}
            height={400}
            loading="lazy"
            draggable={false}
            className="h-20 w-20 select-none object-contain"
          />
        </span>
        <div>
          <h2 className="text-2xl font-normal tracking-[-0.02em] text-hydro-blue">See it in action.</h2>
          <p className="mt-2 max-w-[520px] text-sm leading-6 text-hydro-muted">
            Request a technical walkthrough or speak with our team to find the right solution for your site.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/request-demo"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-hydro-navy px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-hydro-blue"
          >
            Request technical walkthrough <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-hydro-blue bg-white px-5 text-sm font-extrabold text-hydro-blue transition hover:-translate-y-0.5 hover:bg-[#f2f8ff]"
          >
            Contact our team <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
