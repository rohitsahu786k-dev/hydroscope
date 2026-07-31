"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { Activity, Bell, Cloud, Gauge, ShieldCheck } from "lucide-react";

const cards = [
  {
    badge: "Real-time",
    title: "Live dashboard visibility",
    description: "Track site status, dosing performance and water-quality signals from one operating view.",
    image: "/images/seo/hydrosure-iot-water-monitoring-system-product-shot.webp",
    Icon: Gauge
  },
  {
    badge: "AI-powered",
    title: "Smarter analytics",
    description: "Turn monitoring data into useful trends, alerts and reports for field and leadership teams.",
    image: "/images/seo/hydroscope-water-treatment-products-feature-collage.webp",
    Icon: Activity
  },
  {
    badge: "Automated",
    title: "Alerts that move fast",
    description: "Notify operators when dosing, tank-level or sensor conditions need attention.",
    image: "/images/seo/hydropure-field-inspection-iot-enabled-water-treatment-banner.webp",
    Icon: Bell
  },
  {
    badge: "Remote",
    title: "Control across sites",
    description: "Give distributed water networks a central layer for monitoring, escalation and review.",
    image: "/images/seo/hydropure-smart-chlorination-system-outdoor-utility-banner.webp",
    Icon: Cloud
  },
  {
    badge: "Secure",
    title: "Accountable operations",
    description: "Improve visibility for engineers, officials and administrators with reliable records.",
    image: "/images/seo/hydroscope-intelligent-water-safety-infrastructure-village-water-tanks-banner.webp",
    Icon: ShieldCheck
  }
];

const slotStyles = [
  { x: -340, y: 74, rotate: -20, scale: 0.78, z: 1, opacity: 0.82 },
  { x: -178, y: 36, rotate: -10, scale: 0.9, z: 2, opacity: 0.92 },
  { x: 0, y: 0, rotate: 0, scale: 1, z: 5, opacity: 1 },
  { x: 178, y: 36, rotate: 10, scale: 0.9, z: 2, opacity: 0.92 },
  { x: 340, y: 74, rotate: 20, scale: 0.78, z: 1, opacity: 0.82 }
];

function getOffset(index: number, activeIndex: number, total: number) {
  const raw = index - activeIndex;
  if (raw > total / 2) return raw - total;
  if (raw < -total / 2) return raw + total;
  return raw;
}

export function WhyHydroscopeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const orderedCards = useMemo(
    () =>
      cards.map((card, index) => {
        const offset = getOffset(index, activeIndex, cards.length);
        return { card, index, offset, slot: slotStyles[Math.max(-2, Math.min(2, offset)) + 2] };
      }),
    [activeIndex]
  );

  function move(direction: "next" | "previous") {
    setActiveIndex((current) => (direction === "next" ? (current + 1) % cards.length : (current - 1 + cards.length) % cards.length));
  }

  function handlePointerUp(clientX: number) {
    if (startX.current === null) return;
    const delta = clientX - startX.current;
    startX.current = null;

    if (Math.abs(delta) < 36) return;
    move(delta < 0 ? "next" : "previous");
  }

  return (
    <section className="hydro-section overflow-hidden bg-white">
      <div className="mx-auto w-[90%]">
        <div className="mx-auto mb-8 max-w-[780px] text-center">
          <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">Why Hydroscope</span>
          <h2 className="m-0 text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.08] tracking-[-0.04em] text-hydro-ink">
            Water intelligence designed for operating teams
          </h2>
        </div>

        <div
          className="relative mx-auto hidden h-[520px] max-w-6xl select-none items-center justify-center lg:flex"
          onPointerDown={(event) => {
            startX.current = event.clientX;
          }}
          onPointerUp={(event) => handlePointerUp(event.clientX)}
          onPointerCancel={() => {
            startX.current = null;
          }}
        >
          {orderedCards.map(({ card, index, offset, slot }) => {
            const isActive = offset === 0;
            const Icon = card.Icon;

            return (
              <button
                key={card.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="absolute left-1/2 top-10 h-[390px] w-[280px] cursor-pointer overflow-hidden rounded-2xl bg-hydro-navy text-left text-white shadow-[0_24px_60px_rgba(9,36,76,0.22)] transition-all duration-500 ease-out focus:outline-none focus:ring-4 focus:ring-hydro-blue/20"
                style={{
                  zIndex: slot.z,
                  opacity: slot.opacity,
                  transform: `translateX(calc(-50% + ${slot.x}px)) translateY(${slot.y}px) rotate(${slot.rotate}deg) scale(${slot.scale})`
                }}
                aria-label={`Show ${card.title}`}
              >
                <Image src={card.image} alt="" width={900} height={1100} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.72)_34%,rgba(255,255,255,0.96)_68%,#ffffff_100%)]" />
                <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-hydro-ink">
                  <Icon aria-hidden="true" size={13} className="text-hydro-blue" />
                  {card.badge}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-hydro-ink">
                  <h3 className="text-[20px] font-extrabold leading-[1.14] tracking-[-0.035em]">{card.title}</h3>
                  <p className={`mt-2 text-[13px] leading-5 text-hydro-muted transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-75"}`}>
                    {card.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 lg:hidden">
          {cards.map(({ Icon, ...card }) => (
            <article key={card.title} className="relative min-h-[310px] overflow-hidden rounded-2xl bg-hydro-navy p-6 text-white shadow-hydro">
              <Image src={card.image} alt="" width={900} height={700} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-[64%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.74)_34%,rgba(255,255,255,0.96)_68%,#ffffff_100%)]" />
              <div className="relative z-10 flex h-full min-h-[262px] flex-col justify-between">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-hydro-ink">
                  <Icon aria-hidden="true" size={13} className="text-hydro-blue" />
                  {card.badge}
                </span>
                <div className="text-hydro-ink">
                  <h3 className="text-[20px] font-extrabold leading-[1.14] tracking-[-0.035em]">{card.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-hydro-muted">{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-2 hidden items-center justify-center gap-2 lg:flex">
          {cards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-8 bg-hydro-blue" : "w-2 bg-[#cdd9e6]"}`}
              aria-label={`Show ${card.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
