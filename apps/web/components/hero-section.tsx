import Image from "next/image";
import { ArrowRight, Activity, Droplets, ShieldCheck } from "lucide-react";
import { Container } from "./ui/container";
import { heroContent } from "@/lib/solutions-content";

/* One icon per hero card, in the same order the guide lists them. */
const cardIcons = [Droplets, Activity, ShieldCheck];

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
  /* The hero copy is fixed by the content guide, so the CMS hero fields are not
     read here. They stay in the signature so the CMS shape does not have to
     change while the guide is being rolled out. */
  void props;

  const { eyebrow, title, subtitle, ctaLabel, ctaHref, cards } = heroContent;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eef5fb_0%,#f7fbff_38%,#e8f1f9_100%)]">
      <div className="hydro-network pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />

      <Container className="relative">
        <div className="grid grid-cols-[1.05fr_1fr] items-center gap-12 py-16 max-lg:grid-cols-1 max-lg:gap-10 max-lg:py-12">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-hydro-blue">{eyebrow}</p>

            {/* Two lines, matching the banner: the first sits in ink and the
                rest carries the brand blue. */}
            <h1 className="mt-5 text-[clamp(38px,5vw,68px)] font-normal leading-[1.02] tracking-[-0.045em] text-hydro-ink">
              Empowering.
              <span className="block text-hydro-blue">Smarter Water</span>
              <span className="block text-hydro-blue">Management.</span>
            </h1>
            <span className="sr-only">{title}</span>

            <p className="mt-6 max-w-[540px] text-base leading-7 text-hydro-muted">{subtitle}</p>

            <a
              href={ctaHref}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-hydro-blue px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-hydro-navy"
            >
              {ctaLabel}
              <ArrowRight aria-hidden="true" size={16} />
            </a>

            <ul className="mt-10 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {cards.map((card, index) => {
                const Icon = cardIcons[index] ?? Droplets;
                return (
                  <li
                    key={card.title}
                    className="flex items-center gap-3 rounded-xl border border-white bg-white/80 px-4 py-3 shadow-[0_16px_40px_-28px_rgba(9,36,76,0.7)] backdrop-blur"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-hydro-blue" strokeWidth={1.7} />
                    <div className="min-w-0">
                      <p className="text-[13px] font-extrabold leading-tight text-hydro-navy">{card.title}</p>
                      <p className="mt-0.5 text-[11.5px] leading-tight text-hydro-muted">{card.subtitle}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right side is the product story the guide asks for: the live
              dashboard next to the electrochlorinator it controls. */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-[0_40px_90px_-50px_rgba(9,36,76,0.8)]">
              <Image
                src="/images/hydrosure-dashboard/hydrosure-dashboard-cinematic.webp"
                alt="HydroSure dashboard showing the assigned devices map, device counts, water quality, flow monitoring and active alerts"
                width={1600}
                height={900}
                priority
                draggable={false}
                className="pointer-events-none h-auto w-full select-none"
              />
            </div>

            <div className="absolute -bottom-6 -right-2 w-[34%] max-sm:static max-sm:mt-5 max-sm:w-1/2">
              <Image
                src="/images/hydroscope-products/hydropure-hp-100.webp"
                alt="HydroPure HP-100 electrochlorinator unit"
                width={800}
                height={1000}
                priority
                draggable={false}
                className="pointer-events-none h-auto w-full select-none drop-shadow-[0_30px_50px_rgba(9,36,76,0.35)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
