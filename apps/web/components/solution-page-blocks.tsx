import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Breadcrumbs } from "./breadcrumbs";
import { SectionHeading } from "./section-heading";
import { Container } from "./ui/container";
import { solutionEntries } from "@/lib/solutions-content";

/* Shared building blocks for the five solution pages, so HydroPure,
   HydroSense, HydroSure, the smaller IoT modules and HydroVerse all read as one
   family instead of five one-off layouts. */

export function SolutionHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumb
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hydro-navy text-white">
      {/* Full-bleed vignette: the artwork sits behind the copy and is darkened
          by the two gradients so the type keeps its contrast at every width. */}
      <Image
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        priority
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(9,36,76,0.25)_0%,rgba(9,36,76,0.85)_70%,rgba(9,36,76,0.96)_100%)]"
      />

      <Container className="relative">
        <div className="py-16 max-lg:py-12">
          {/* Breadcrumbs are styled for light pages, so recolour them here
              rather than branching inside the shared component. */}
          <div className="[&_a]:text-[#8dc6ff] [&_nav]:text-[#cfe4ff]">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: breadcrumb }]} />
          </div>
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#8dc6ff]">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-[clamp(38px,4.6vw,66px)] font-normal leading-[1.03] tracking-[-0.045em]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#cfe4ff]">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
}

export function OverviewSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="hydro-section bg-white">
      <Container>
        <SectionHeading title="Overview" align="left" />
        <div className="grid max-w-4xl gap-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base leading-7 text-hydro-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CoreFeaturesSection({ features }: { features: string[] }) {
  return (
    <section className="hydro-section bg-[#f7fbff]">
      <Container>
        <SectionHeading eyebrow="Core features" title="Built to run without supervision" />
        <ul className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-hydro-line bg-white px-5 py-5 text-sm font-extrabold text-hydro-navy"
            >
              <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-hydro-blue" strokeWidth={2.4} />
              {feature}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* Side-by-side comparison. The left column is what the market does today and
   gets crosses; the right column is the HYDROscope product and gets ticks. */
export function ComparisonSection({
  title,
  subtitle,
  conventionalLabel,
  conventional,
  productLabel,
  product
}: {
  title: string;
  subtitle?: string;
  conventionalLabel: string;
  conventional: string[];
  productLabel: string;
  product: string[];
}) {
  return (
    <section className="hydro-section bg-white">
      <Container>
        <SectionHeading title={title} text={subtitle} />
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <div className="rounded-2xl border border-hydro-line bg-[#fbfbfc] p-7">
            <h3 className="text-lg font-normal text-hydro-ink">{conventionalLabel}</h3>
            <ul className="mt-5 grid gap-3">
              {conventional.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-hydro-muted">
                  <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#c2554f]" strokeWidth={2.4} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-hydro-blue bg-[#f4f9ff] p-7">
            <h3 className="text-lg font-normal text-hydro-navy">{productLabel}</h3>
            <ul className="mt-5 grid gap-3">
              {product.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-hydro-ink">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-hydro-blue" strokeWidth={2.4} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CtaBand({ title, label = "Talk to an Expert" }: { title: string; label?: string }) {
  return (
    <section className="relative overflow-hidden bg-hydro-navy py-16 text-center text-white">
      <div className="hydro-network absolute inset-0 opacity-10" aria-hidden="true" />
      <Container className="relative">
        <h2 className="mx-auto max-w-3xl text-[clamp(28px,3.2vw,44px)] font-normal leading-[1.08] tracking-[-0.04em]">
          {title}
        </h2>
        <a
          href="/contact"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-hydro-navy transition hover:-translate-y-0.5 hover:bg-[#eaf3fd]"
        >
          {label}
          <ArrowRight aria-hidden="true" size={16} />
        </a>
      </Container>
    </section>
  );
}

/* Related solutions row. `exclude` drops the page you are already on, and the
   extra `others` entry is the catch-all card for the smaller IoT modules. */
export function RelatedSolutions({ exclude, includeOther = true }: { exclude: string; includeOther?: boolean }) {
  const related = solutionEntries.filter((entry) => entry.slug !== exclude);

  const cards = [
    ...related.map((entry) => ({
      title: entry.title,
      text:
        entry.slug === "hydropure"
          ? "A fully automated smart IoT enabled electrochlorinator"
          : entry.slug === "hydrosense"
            ? "A complete solution of sensors for water quality monitoring."
            : "AI-powered real time monitoring system",
      href: `/solutions/${entry.slug}`
    })),
    ...(includeOther
      ? [
          {
            title: "Other IoT solutions",
            text: "Intelligent and reliable control and monitoring system",
            href: "/solutions/other-iot-solutions"
          }
        ]
      : [])
  ];

  return (
    <section className="hydro-section bg-[#f7fbff]">
      <Container>
        <SectionHeading title="Related Solutions" />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {cards.map((card) => (
            <article
              key={card.href}
              className="flex flex-col rounded-2xl border border-hydro-line bg-white p-7 transition hover:-translate-y-1 hover:border-hydro-blue"
            >
              <h3 className="text-xl font-normal tracking-[-0.02em] text-hydro-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-hydro-muted">{card.text}</p>
              <Link
                href={card.href}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold text-hydro-blue"
              >
                Explore
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IconGrid({
  eyebrow,
  title,
  subtitle,
  items
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: Array<{ title: string; text?: string; image?: string }>;
}) {
  return (
    <section className="hydro-section bg-white">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} text={subtitle} />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col overflow-hidden rounded-2xl border border-hydro-line bg-white">
              {item.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eef7ff]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    draggable={false}
                    className="select-none object-cover"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-normal leading-snug text-hydro-navy">{item.title}</h3>
                {item.text ? <p className="mt-3 text-sm leading-6 text-hydro-muted">{item.text}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-4xl text-base leading-7 text-hydro-muted">{children}</div>;
}
