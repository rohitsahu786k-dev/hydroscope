"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Gauge, ShieldCheck, Wifi } from "lucide-react";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Container } from "./ui/container";

const slides = [
  {
    image: "/images/seo/hydropure-field-inspection-iot-enabled-water-treatment-banner.webp",
    alt: "HydroPure IoT enabled water treatment system field inspection with village tank background",
    eyebrow: "IOT ENABLED WATER TREATMENT",
    title: "Field-ready chlorination with live monitoring.",
    text: "HydroPure supports on-site chlorine generation, automated dosing and field inspection workflows for distributed water infrastructure.",
    primary: { label: "Request Demo", href: "/request-demo" },
    secondary: { label: "Explore Products", href: "/products" }
  },
  {
    image: "/images/seo/hydropure-installation-engineers-village-water-tank-banner.webp",
    alt: "HydroPure installation with engineers inspecting automated chlorination system near village water tank",
    eyebrow: "VILLAGE TANK INSTALLATION",
    title: "Automated water safety for village tanks.",
    text: "Replace manual dosing with HydroPure installation, sensor feedback and HydroSure dashboard visibility.",
    primary: { label: "Explore Rural Solution", href: "/solutions/rural-water-supply-chlorination" },
    secondary: { label: "Request Site Assessment", href: "/installation-maintenance" }
  },
  {
    image: "/images/seo/hydropure-water-treatment-facility-village-tank-banner.webp",
    alt: "HydroPure water treatment facility with village tank and solar powered chlorination setup",
    eyebrow: "SOLAR COMPATIBLE CHLORINATION",
    title: "On-site sodium hypochlorite generation.",
    text: "Generate disinfectant using salt, water and electricity for rural, municipal, institutional and industrial water systems.",
    primary: { label: "View HydroPure", href: "/products/hydropure-intelligent-electrochlorinator" },
    secondary: { label: "How It Works", href: "/how-it-works" }
  },
  {
    image: "/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp",
    alt: "Hydroscope HydroPure HydroSense and HydroSure integrated rural water treatment and monitoring banner",
    eyebrow: "HYDROPURE + HYDROSENSE + HYDROSURE",
    title: "One ecosystem for treatment, sensing and control.",
    text: "Combine chlorination, parameter sensing, dashboards, alerts and reports for accountable source-to-tap operations.",
    primary: { label: "View Dashboard", href: "/dashboard-platform" },
    secondary: { label: "Compare Products", href: "/products" }
  },
  {
    image: "/images/seo/hydropure-smart-chlorination-system-outdoor-utility-banner.webp",
    alt: "HydroPure smart chlorination system installed at outdoor water utility site",
    eyebrow: "SMART WATER INFRASTRUCTURE",
    title: "Reliable chlorination for operating teams.",
    text: "Give field teams cleaner dosing control, dashboard-backed visibility and a practical path away from manual chlorination.",
    primary: { label: "Talk to Technical Team", href: "/contact" },
    secondary: { label: "Download Resources", href: "/resources" }
  }
];

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
  void props;

  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  function move(direction: 1 | -1) {
    setActive((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section className="relative isolate min-h-[calc(100vh-88px)] overflow-hidden bg-hydro-navy text-white">
      {slides.map((item, index) => (
        <Image
          key={item.image}
          src={item.image}
          alt={item.alt}
          width={1916}
          height={821}
          priority={index === 0}
          className={clsx(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            index === active ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,13,27,0.9)_0%,rgba(8,25,47,0.72)_33%,rgba(8,25,47,0.2)_66%,rgba(8,25,47,0)_100%)]" />

      <Container className="relative z-10 flex min-h-[calc(100vh-88px)] items-center py-20">
        <div className="max-w-[680px]">
          <span className="inline-flex border-l-4 border-[#44c8ef] pl-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#bde8ff]">
            {slide.eyebrow}
          </span>
          <h1 className="mt-5 text-[clamp(42px,5vw,76px)] font-extrabold leading-none">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#dcecff] max-sm:text-sm max-sm:leading-7">
            {slide.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <HeroButton href={slide.primary.href}>{slide.primary.label}</HeroButton>
            <HeroButton href={slide.secondary.href} variant="outline">
              {slide.secondary.label}
            </HeroButton>
          </div>
          <div className="mt-9 grid max-w-[640px] grid-cols-3 gap-3 max-sm:grid-cols-1">
            {[
              ["Automated", "Dosing", ShieldCheck],
              ["Remote", "Monitoring", Wifi],
              ["Smart", "Reports", Gauge]
            ].map(([label, value, Icon]) => (
              <div key={label as string} className="border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <Icon aria-hidden="true" size={18} className="mb-3 text-[#67d6ff]" />
                <strong className="block text-sm">{label as string}</strong>
                <span className="text-xs text-[#bfd2ea]">{value as string}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={clsx(
              "h-2.5 rounded-full transition-all",
              index === active ? "w-10 bg-white" : "w-2.5 bg-white/45 hover:bg-white/75"
            )}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => move(-1)}
        className="absolute bottom-6 right-24 z-20 grid h-11 w-11 place-items-center border border-white/35 bg-black/25 text-white backdrop-blur transition hover:bg-white hover:text-hydro-blue"
      >
        <ChevronLeft aria-hidden="true" size={20} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => move(1)}
        className="absolute bottom-6 right-10 z-20 grid h-11 w-11 place-items-center border border-white/35 bg-black/25 text-white backdrop-blur transition hover:bg-white hover:text-hydro-blue"
      >
        <ChevronRight aria-hidden="true" size={20} />
      </button>
    </section>
  );
}

function HeroButton({ href, children, variant = "primary" }: { href: string; children: string; variant?: "primary" | "outline" }) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-[7px] border px-5 text-sm font-bold transition hover:-translate-y-0.5",
        variant === "primary" && "border-[#2b8cff] bg-[#2167d8] text-white shadow-[0_16px_36px_rgba(33,103,216,0.32)]",
        variant === "outline" && "border-white/55 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-hydro-blue"
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  );
}
