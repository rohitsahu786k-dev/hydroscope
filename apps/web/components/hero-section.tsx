"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

/* The hero is now the supplied banner artwork. All copy is baked into the
   images, so nothing is overlaid on top of them - each slide just needs an alt
   that carries the same message for screen readers and search engines.
 *
 * Every slide ships two crops: a 1916x821 wide file for desktop and a square
 * 1254x1254 file for phones, picked with <source media> so only the needed one
 * is fetched. */
const slides = [
  {
    id: "manual-dosing-to-measured-water-safety",
    desktop: "/images/hero/hero-manual-dosing-desktop.webp",
    mobile: "/images/hero/hero-manual-dosing-mobile.webp",
    alt: "From manual dosing to measured water safety. HydroPure automates chlorination and HydroSense verifies water quality in real time, shown with the HP-100, HP-200/500/1000 and HP-1600/2000 models beside a village water tank."
  },
  {
    id: "water-risk-to-daily-water-confidence",
    desktop: "/images/hero/hero-water-confidence-desktop.webp",
    mobile: "/images/hero/hero-water-confidence-mobile.webp",
    alt: "From water risk to daily water confidence. Manual dosing, irregular chlorination and no real-time visibility replaced by automated HydroPure chlorination with live HydroSense quality checks."
  }
];

const SLIDE_MS = 6000;

type HeroSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
};

export function HeroSection(props: HeroSectionProps) {
  /* The CMS hero fields are unused while the banners carry their own copy. */
  void props;

  const [active, setActive] = useState(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, SLIDE_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section aria-roledescription="carousel" aria-label="HYDROscope highlights" className="relative bg-white">
      {/* Aspect ratio is reserved per breakpoint so the page never jumps while
          the banner decodes: square on phones, 1916:821 from md up. */}
      <div className="relative aspect-square w-full overflow-hidden md:aspect-[1916/821]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-hidden={index !== active}
            className={clsx(
              "absolute inset-0 transition-opacity duration-700",
              index === active ? "opacity-100" : "opacity-0"
            )}
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={slide.desktop} />
              <Image
                src={slide.mobile}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={index === 0}
                /* Background artwork: not a control and not a link, so it must
                   not react to clicks or be draggable out of the page. */
                draggable={false}
                className="pointer-events-none select-none object-cover"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Dots are the only interactive part of the hero. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-2 md:bottom-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === active}
            className={clsx(
              "pointer-events-auto h-2 rounded-full transition-all duration-300",
              index === active ? "w-7 bg-white" : "w-2 bg-white/55 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </section>
  );
}
