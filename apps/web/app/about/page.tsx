import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal, RevealCard } from "@/components/motion/reveal";
import { NumberTicker } from "@/components/motion/number-ticker";
import { ProudlySupportsGrid } from "@/components/proudly-supports-grid";
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

/* Section eyebrow, used identically in six places. */
function Eyebrow({ children }: { children: string }) {
  return <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-hydro-blue2">{children}</p>;
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ---- Hero. The banner runs full width behind the copy, which sits in
             the clear left band the artwork was drawn with. ---- */}
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
        {/* Weights the left band so the type keeps its contrast wherever the
            banner is cropped. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(238,245,251,0.97)_0%,rgba(238,245,251,0.86)_38%,rgba(238,245,251,0.25)_70%,rgba(238,245,251,0)_100%)]"
        />

        <Container>
          <div className="flex min-h-[clamp(460px,38vw,660px)] flex-col justify-center py-14">
            <Breadcrumbs items={[{ label: "About Us" }]} />
            <Reveal className="max-w-[54%] max-lg:max-w-none">
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

      {/* ---- Who we are ---- */}
      <section className="hydro-section bg-white">
        <Container>
          <div className="grid grid-cols-[1fr_1fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-9">
            <Reveal from="left">
              <Eyebrow>{whoWeAre.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[clamp(28px,3.2vw,44px)] font-normal leading-[1.1] tracking-[-0.035em] text-hydro-navy">
                {whoWeAre.title}
              </h2>
              <div className="mt-6 grid gap-5">
                {whoWeAre.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-[15px] leading-7 text-hydro-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal from="right">
              <div className="overflow-hidden rounded-2xl shadow-[0_34px_80px_-46px_rgba(9,36,76,0.75)]">
                <Image
                  src={whoWeAre.image}
                  alt={whoWeAre.imageAlt}
                  width={1600}
                  height={596}
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none h-auto w-full select-none"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---- Impact band ---- */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#e9f3fc_0%,#f4f9fe_100%)] py-16">
        <div className="hydro-network pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
        <Container className="relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(26px,3vw,42px)] font-normal leading-[1.12] tracking-[-0.035em] text-hydro-navy">
              {impact.title} <span className="text-hydro-blue2">{impact.titleAccent}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-hydro-muted">{impact.subtitle}</p>
          </Reveal>

          <dl className="mt-12 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {impact.stats.map((stat, index) => (
              <RevealCard key={stat.label} delay={index * 0.07} className="text-center">
                <Image
                  src={stat.icon}
                  alt=""
                  width={256}
                  height={276}
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none mx-auto h-12 w-auto select-none object-contain"
                />
                <dd className="mt-4">
                  <NumberTicker
                    value={stat.value}
                    className="block text-[clamp(30px,3.4vw,46px)] font-normal leading-none tracking-[-0.04em] text-hydro-blue2"
                  />
                </dd>
                <dt className="mt-2 text-[13px] leading-5 text-hydro-muted">{stat.label}</dt>
              </RevealCard>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---- What we build. Dark product panels: all five renders are lit on
             the same dark studio background, so a light panel would show five
             grey rectangles instead of five products. ---- */}
      <section className="hydro-section bg-white">
        <Container>
          <Reveal className="mb-10 text-center">
            <Eyebrow>{whatWeBuild.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[clamp(26px,3vw,42px)] font-normal leading-[1.12] tracking-[-0.035em] text-hydro-navy">
              {whatWeBuild.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-5 gap-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {whatWeBuild.items.map((item, index) => (
              <RevealCard key={item.title} delay={index * 0.06}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hydro-line bg-white transition hover:border-hydro-blue2 hover:shadow-[0_28px_60px_-40px_rgba(9,36,76,0.7)]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#2b2f34]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
                      loading="lazy"
                      draggable={false}
                      className="select-none object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[14.5px] font-normal leading-snug text-hydro-navy">{item.title}</h3>
                    <ArrowRight aria-hidden="true" size={15} className="mt-auto pt-4 text-hydro-blue2" />
                  </div>
                </Link>
              </RevealCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ---- Why HydroScope ---- */}
      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <Reveal className="mb-10 text-center">
            <Eyebrow>{whyHydroscope.eyebrow}</Eyebrow>
            <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-hydro-muted">{whyHydroscope.intro}</p>
          </Reveal>

          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {whyHydroscope.cards.map((card, index) => (
              <RevealCard
                key={card.title}
                delay={index * 0.06}
                className="h-full rounded-2xl border border-hydro-line bg-white p-7 text-center"
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={280}
                  height={292}
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none mx-auto h-14 w-auto select-none object-contain"
                />
                <h3 className="mt-5 text-lg font-normal leading-snug text-hydro-navy">{card.title}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-hydro-muted">{card.text}</p>
              </RevealCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ---- Industries we serve ---- */}
      <section className="hydro-section bg-white">
        <Container>
          <Reveal className="mb-10 text-center">
            <Eyebrow>{industriesWeServe.eyebrow}</Eyebrow>
          </Reveal>

          <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {industriesWeServe.items.map((item, index) => (
              <RevealCard key={item.title} delay={index * 0.04}>
                <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#eef7ff]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    loading="lazy"
                    draggable={false}
                    className="select-none object-cover"
                  />
                  {/* Label sits bottom-left over a dark foot gradient, as the
                      mockup sets it. The gradient is only as tall as it needs
                      to be, so it never covers the subject of the photo. */}
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

      {/* ---- How we think ---- */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#e9f3fc_0%,#f4f9fe_100%)] py-16">
        <div className="hydro-network pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
        <Container className="relative">
          <Reveal className="mb-10 text-center">
            <Eyebrow>{howWeThink.eyebrow}</Eyebrow>
          </Reveal>

          <ul className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {howWeThink.items.map((item, index) => (
              <RevealCard key={item.title} delay={index * 0.07} className="text-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={256}
                  height={288}
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none mx-auto h-14 w-auto select-none object-contain"
                />
                <h3 className="mt-4 text-lg font-normal text-hydro-navy">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-[260px] text-[13.5px] leading-6 text-hydro-muted">{item.text}</p>
              </RevealCard>
            ))}
          </ul>
        </Container>
      </section>

      <ProudlySupportsGrid />
    </main>
  );
}
