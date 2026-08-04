import Image from "next/image";
import { ArrowRight, Activity, Droplets, ShieldCheck } from "lucide-react";
import { Container } from "./ui/container";
import { heroContent } from "@/lib/solutions-content";

/* One icon per hero card, in the same order the guide lists them. */
const cardIcons = [Droplets, Activity, ShieldCheck];

const DESKTOP_BANNER = "/images/hero/hero-hydroscope-banner-desktop.webp";
const MOBILE_BANNER = "/images/hero/hero-hydroscope-banner-mobile.webp";
const BANNER_ALT =
  "HydroPure electrochlorinator and a HydroSense handheld sensor on a plant bench, with the HydroSure dashboard on a screen behind them";

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

  const { eyebrow, subtitle, ctaLabel, ctaHref, cards } = heroContent;

  const eyebrowLine = (
    <p className="text-[clamp(11px,0.85vw,14px)] font-semibold uppercase tracking-[0.24em] text-hydro-blue2">
      {eyebrow}
    </p>
  );

  const heading = (
    <h1 className="mt-4 text-[clamp(29px,4.2vw,60px)] font-normal leading-[1.06] tracking-[-0.04em] text-hydro-navy sm:mt-5">
      Empowering. Smarter
      <span className="block">Water Management.</span>
    </h1>
  );

  const cta = (
    <a
      href={ctaHref}
      className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-hydro-blue2 px-7 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-hydro-navy sm:mt-8"
    >
      {ctaLabel}
      <ArrowRight aria-hidden="true" size={16} />
    </a>
  );

  const featureCards = (
    <ul className="grid max-w-[620px] grid-cols-3 gap-3 sm:gap-4 max-sm:grid-cols-1">
      {cards.map((card, index) => {
        const Icon = cardIcons[index] ?? Droplets;
        return (
          <li
            key={card.title}
            className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/85 px-4 py-3 text-left shadow-[0_18px_44px_-30px_rgba(9,36,76,0.8)] backdrop-blur sm:flex-col sm:px-5 sm:py-4 sm:text-center"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e8f1fd] text-hydro-blue2">
              <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </span>
            <div className="min-w-0 sm:mt-3">
              <p className="text-[14.5px] font-extrabold leading-tight text-hydro-navy sm:text-[15px]">
                {card.title}
              </p>
              <p className="mt-0.5 text-[12px] leading-tight text-hydro-muted sm:mt-1">{card.subtitle}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="bg-white">
      {/* ---- lg and up: the wide banner fills the section and the copy sits in
             the clear left band the artwork was drawn with. object-right keeps
             the unit, the sensor and the dashboard in frame at every width -
             only the empty left area is ever trimmed, and the copy covers
             that. ---- */}
      <div className="relative isolate overflow-hidden max-lg:hidden">
        <Image
          src={DESKTOP_BANNER}
          alt={BANNER_ALT}
          fill
          sizes="100vw"
          priority
          draggable={false}
          className="pointer-events-none -z-10 select-none object-cover object-right"
        />
        <Container>
          <div className="flex min-h-[clamp(560px,43vw,821px)] flex-col justify-center py-14">
            <div className="max-w-[46%] max-xl:max-w-[52%]">
              {eyebrowLine}
              {heading}
              <p className="mt-6 max-w-[520px] text-[clamp(14px,1.05vw,17px)] leading-[1.7] text-hydro-muted">
                {subtitle}
              </p>
              {cta}
              <div className="mt-9">{featureCards}</div>
            </div>
          </div>
        </Container>
      </div>

      {/* ---- Below lg the copy sits on the banner itself. The portrait crop
             was shot with its top 40% almost empty, so the headline lands
             there; object-bottom keeps the unit and the dashboard anchored to
             the foot of the frame however tall the box ends up.

             The paragraph is dropped at this width on purpose: it is five
             lines on a phone, which would push the headline down onto the
             machine and leave nothing legible. The three cards move below the
             image, where they have a plain background to sit on. ---- */}
      <div className="lg:hidden">
        <div className="relative isolate overflow-hidden bg-[#eef5fb]">
          <Image
            src={MOBILE_BANNER}
            alt={BANNER_ALT}
            fill
            sizes="100vw"
            priority
            draggable={false}
            className="pointer-events-none -z-10 select-none object-cover object-bottom"
          />
          {/* Fades from near-solid at the top to clear before it reaches the
              machine, so the type always has a background and the artwork is
              never washed out. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(238,245,251,0.97)_0%,rgba(238,245,251,0.93)_26%,rgba(238,245,251,0.7)_44%,rgba(238,245,251,0.25)_60%,rgba(238,245,251,0)_74%)]"
          />

          <Container>
            {/* Tracks the artwork's own 1122:1402 ratio, so the machine sits at
                the foot of the frame rather than being cropped away. */}
            <div className="flex min-h-[min(125vw,640px)] flex-col pt-9">
              {eyebrowLine}
              {heading}
              {cta}
            </div>
          </Container>
        </div>

        <Container>
          <div className="py-8">{featureCards}</div>
        </Container>
      </div>
    </section>
  );
}
