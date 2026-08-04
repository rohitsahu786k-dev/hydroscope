import Image from "next/image";
import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import {
  Award,
  Cpu,
  Droplet,
  Eye,
  Gauge,
  Handshake,
  Headphones,
  Home,
  Lightbulb,
  MapPin,
  Network,
  ShieldCheck,
  TrendingUp,
  Users,
  Waves
} from "lucide-react";
import { ProudlySupportsMarquee } from "@/components/proudly-supports-marquee";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import {
  aboutHero,
  howWeThink,
  impact,
  industriesWeServe,
  whatWeBuild,
  whoWeAre,
  whyHydroscope
} from "@/lib/about-content";

export const metadata = createMetadata({
  title: "About HYDROscope | Water Technology Company",
  description:
    "Hydroscope Technology Pvt. Ltd. builds fully automated electrochlorination, intelligent water quality sensing, industrial automation and cloud monitoring as one connected ecosystem.",
  path: "/about"
});

/* Section heading. The section's own name is the large navy line; the
   descriptive sentence, where there is one, sits under it as the small blue
   kicker. Matches components/section-heading.tsx, which the rest of the site
   uses. */
function SectionTitle({ name, kicker }: { name: string; kicker?: string }) {
  return (
    <>
      <h2 className="m-0 text-[clamp(25px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.035em] text-hydro-navy">
        {name}
      </h2>
      {kicker ? (
        <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-hydro-blue2">{kicker}</p>
      ) : null}
    </>
  );
}

/* The hero keeps a small blue lead-in above its h1: there the page title is
   already the largest thing on the screen. */
function Eyebrow({ children }: { children: string }) {
  return <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-hydro-blue2">{children}</p>;
}

function Reveal({
  children,
  className,
  as
}: {
  children: ReactNode;
  className?: string;
  from?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  as?: ElementType;
}) {
  const Tag = as ?? "div";
  return <Tag className={className}>{children}</Tag>;
}

function RevealCard({ children, className }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}

const statIcons = [Droplet, MapPin, Users, Waves];
const whyIcons = [ShieldCheck, Cpu, Network, Eye, TrendingUp, Headphones];
const thinkingIcons = [Lightbulb, Award, Droplet, Handshake];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#eef5fb]">
        <Image
          src={aboutHero.image}
          alt={aboutHero.imageAlt}
          fill
          sizes="100vw"
          priority
          draggable={false}
          className="pointer-events-none -z-10 select-none object-cover object-right"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(238,245,251,0.97)_0%,rgba(238,245,251,0.86)_38%,rgba(238,245,251,0.25)_70%,rgba(238,245,251,0)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[#eef5fb]/85 lg:hidden"
        />

        <Container>
          <div className="flex min-h-[clamp(420px,38vw,620px)] flex-col justify-center py-12 max-sm:min-h-[460px]">
            <Reveal className="max-w-[50%] max-lg:max-w-none">
              <Eyebrow>{aboutHero.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-[clamp(32px,3.9vw,56px)] font-normal leading-[1.08] tracking-[-0.04em] text-hydro-navy">
                {aboutHero.titleLead}{" "}
                <span className="text-hydro-blue2">{aboutHero.titleAccent}</span>
              </h1>
              <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-hydro-muted">{aboutHero.subtitle}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-10 max-lg:py-12">
        <Container className="relative z-10">
          <Reveal from="left" className="max-w-[42%] max-lg:max-w-none">
            <SectionTitle name={whoWeAre.eyebrow} />
            <div className="mt-5 grid gap-4">
              {whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[15px] leading-7 text-hydro-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>

        <div className="absolute right-0 top-1/2 hidden w-[54%] -translate-y-1/2 lg:block">
          <div className="overflow-hidden rounded-l-lg [transform:skewY(-5deg)]">
            <Image
              src={whoWeAre.image}
              alt={whoWeAre.imageAlt}
              width={2172}
              height={724}
              loading="lazy"
              draggable={false}
              className="pointer-events-none h-auto w-full scale-[1.12] select-none [transform:skewY(5deg)_scale(1.12)]"
            />
          </div>
        </div>

        <Container className="lg:hidden">
          <div className="mt-8 overflow-hidden rounded-lg">
            <Image
              src={whoWeAre.image}
              alt={whoWeAre.imageAlt}
              width={2172}
              height={724}
              loading="lazy"
              draggable={false}
              className="pointer-events-none h-auto w-full select-none"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white pb-4">
        <Container>
          <Reveal>
            <div className="grid grid-cols-[0.85fr_1.15fr] items-center gap-10 rounded-lg bg-[#eaf3fc] px-9 py-8 max-lg:grid-cols-1 max-lg:gap-8 max-sm:px-6">
              <div className="flex gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center text-hydro-blue2">
                  <Home aria-hidden="true" className="h-12 w-12 stroke-[1.8]" />
                </span>
                <div>
                  <h2 className="text-[clamp(20px,2.1vw,29px)] font-normal leading-[1.18] tracking-[-0.03em] text-hydro-navy">
                    {impact.titleLine1}
                    <span className="block">
                      {impact.titleLine2} <span className="text-hydro-blue2">{impact.titleAccent}</span>
                    </span>
                  </h2>
                  <p className="mt-3 max-w-[380px] text-[13px] leading-6 text-hydro-muted">{impact.subtitle}</p>
                </div>
              </div>

              <dl className="grid grid-cols-4 divide-x divide-[#c9dcef] max-md:grid-cols-2 max-md:gap-y-7 max-md:divide-x-0">
                {impact.stats.map((stat, index) => (
                  <RevealCard key={stat.label} delay={index * 0.07} className="px-4 text-center max-sm:px-2">
                    {(() => {
                      const Icon = statIcons[index] ?? Gauge;
                      return <Icon aria-hidden="true" className="mx-auto h-8 w-8 text-hydro-blue2 stroke-[1.8]" />;
                    })()}
                    <dd className="mt-3">
                      <span className="block text-[clamp(22px,2.2vw,31px)] font-normal leading-none tracking-[-0.04em] text-hydro-navy">
                        {stat.value}
                      </span>
                    </dd>
                    <dt className="mt-1.5 text-[12px] leading-4 text-hydro-muted">{stat.label}</dt>
                  </RevealCard>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <Reveal className="mb-5 text-center">
            <SectionTitle name={whatWeBuild.eyebrow} kicker={whatWeBuild.title} />
          </Reveal>

          <div className="grid grid-cols-5 gap-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:gap-4">
            {whatWeBuild.items.map((item, index) => (
              <RevealCard key={item.title} delay={index * 0.06}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col items-center rounded-lg border border-hydro-line bg-white p-6 text-center shadow-[0_8px_22px_rgba(9,36,76,0.05)] transition hover:border-hydro-blue2 hover:shadow-[0_28px_60px_-40px_rgba(9,36,76,0.7)]"
                >
                  <div className="relative h-40 w-1/2 min-w-[112px]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 9vw, (min-width: 768px) 15vw, 45vw"
                      loading="lazy"
                      draggable={false}
                      className="select-none object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 text-[13.5px] font-extrabold leading-snug text-hydro-navy">{item.title}</h3>
                </Link>
              </RevealCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-2 pb-8">
        <Container>
          <Reveal className="mb-6 text-center">
            <SectionTitle name={whyHydroscope.eyebrow} />
            <p className="mx-auto mt-4 max-w-3xl text-[14.5px] leading-7 text-hydro-muted">{whyHydroscope.intro}</p>
          </Reveal>

          <div className="grid grid-cols-6 gap-4 max-xl:grid-cols-3 max-md:grid-cols-2">
            {whyHydroscope.cards.map((card, index) => (
              <RevealCard
                key={card.title}
                delay={index * 0.06}
                className="h-full rounded-lg border border-hydro-line bg-white p-6 text-center shadow-[0_8px_22px_rgba(9,36,76,0.04)]"
              >
                {(() => {
                  const Icon = whyIcons[index] ?? ShieldCheck;
                  return <Icon aria-hidden="true" className="mx-auto h-11 w-11 text-hydro-blue2 stroke-[1.8]" />;
                })()}
                <h3 className="mt-4 text-[14px] font-extrabold leading-snug text-hydro-navy">{card.title}</h3>
                <p className="mt-3 text-[12.5px] leading-5 text-hydro-muted">{card.text}</p>
              </RevealCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-4 pb-8">
        <Container>
          <Reveal className="mb-5 text-center">
            <SectionTitle name={industriesWeServe.eyebrow} />
          </Reveal>

          <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {industriesWeServe.items.map((item, index) => (
              <RevealCard key={item.title} delay={index * 0.04}>
                <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#eef7ff]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    loading="lazy"
                    draggable={false}
                    className="select-none object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(6,22,45,0.86)_0%,rgba(6,22,45,0.6)_45%,rgba(6,22,45,0)_100%)] px-3 pb-3 pt-8">
                    <span className="text-[12.5px] font-extrabold leading-snug text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                      {item.title}
                    </span>
                  </figcaption>
                </figure>
              </RevealCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#e9f3fc_0%,#f4f9fe_100%)] py-8">
        <Container className="relative">
          <Reveal className="mb-6 text-center">
            <SectionTitle name={howWeThink.eyebrow} />
          </Reveal>

          <ul className="grid grid-cols-4 divide-x divide-[#c9dcef] max-lg:grid-cols-2 max-lg:gap-y-8 max-lg:divide-x-0 max-sm:grid-cols-1">
            {howWeThink.items.map((item, index) => (
              <RevealCard key={item.title} delay={index * 0.07} className="flex gap-4 px-6 max-sm:px-0">
                {(() => {
                  const Icon = thinkingIcons[index] ?? Lightbulb;
                  return <Icon aria-hidden="true" className="h-10 w-10 shrink-0 text-hydro-blue2 stroke-[1.8]" />;
                })()}
                <div>
                  <h3 className="text-[15px] font-extrabold leading-snug text-hydro-navy">{item.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-5 text-hydro-muted">{item.text}</p>
                </div>
              </RevealCard>
            ))}
          </ul>
        </Container>
      </section>

      <ProudlySupportsMarquee />
    </main>
  );
}
