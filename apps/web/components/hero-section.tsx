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

  const { eyebrow, subtitle, ctaLabel, ctaHref, cards } = heroContent;

  const copy = (
    <>
      <p className="text-[clamp(11px,0.85vw,14px)] font-semibold uppercase tracking-[0.24em] text-hydro-blue2">
        {eyebrow}
      </p>

      {/* Two lines, exactly as the reference sets them. */}
      <h1 className="mt-5 text-[clamp(34px,4.2vw,60px)] font-normal leading-[1.06] tracking-[-0.04em] text-hydro-navy">
        Empowering. Smarter
        <span className="block">Water Management.</span>
      </h1>

      <p className="mt-6 max-w-[520px] text-[clamp(14px,1.05vw,17px)] leading-[1.7] text-hydro-muted">{subtitle}</p>

      <a
        href={ctaHref}
        className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-hydro-blue2 px-7 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-hydro-navy"
      >
        {ctaLabel}
        <ArrowRight aria-hidden="true" size={16} />
      </a>

      <ul className="mt-9 grid max-w-[620px] grid-cols-3 gap-4 max-sm:grid-cols-1">
        {cards.map((card, index) => {
          const Icon = cardIcons[index] ?? Droplets;
          return (
            <li
              key={card.title}
              className="rounded-xl bg-white/85 px-5 py-4 text-center shadow-[0_18px_44px_-30px_rgba(9,36,76,0.8)] backdrop-blur"
            >
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#e8f1fd] text-hydro-blue2">
                <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
              <p className="mt-3 text-[15px] font-extrabold leading-tight text-hydro-navy">{card.title}</p>
              <p className="mt-1 text-[12px] leading-tight text-hydro-muted">{card.subtitle}</p>
            </li>
          );
        })}
      </ul>
    </>
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
          src="/images/hero/hero-hydroscope-banner-desktop.webp"
          alt="HydroPure electrochlorinator and a HydroSense handheld sensor on a plant bench, with the HydroSure dashboard on a screen behind them"
          fill
          sizes="100vw"
          priority
          draggable={false}
          className="pointer-events-none -z-10 select-none object-cover object-right"
        />
        <Container>
          <div className="flex min-h-[clamp(560px,43vw,821px)] flex-col justify-center py-14">
            <div className="max-w-[46%] max-xl:max-w-[52%]">{copy}</div>
          </div>
        </Container>
      </div>

      {/* ---- Below lg the copy sits on white above the portrait crop. Overlaid
             on a phone the paragraph and the three cards would cover most of
             the artwork and land on the busy half of it, so the banner is shown
             whole underneath instead. ---- */}
      <div className="lg:hidden">
        <Container>
          <div className="py-12">{copy}</div>
        </Container>
        <Image
          src="/images/hero/hero-hydroscope-banner-mobile.webp"
          alt=""
          width={1122}
          height={1402}
          priority
          draggable={false}
          className="pointer-events-none h-auto w-full select-none"
        />
      </div>
    </section>
  );
}
