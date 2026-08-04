import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplet, Users } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Container } from "./ui/container";
import { solutionEntries } from "@/lib/solutions-content";

/* The homepage solutions row. Three cards - HydroPure, HydroSense, HydroSure -
   each carrying the tag, product name, description, three checks, who it is
   best for, two speciality claims and the explore link, in the order the
   content guide sets out. */
export function SolutionsSection() {
  return (
    <section id="solutions" className="hydro-section bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our innovative solutions"
          title="Transforming Water Infrastructure with Pure Intelligence"
          text="An integrated ecosystem delivering real-time monitoring, automated water treatment, and intelligent infrastructure performance."
        />

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {solutionEntries.map((entry) => (
            <article
              key={entry.slug}
              className="flex flex-col rounded-2xl border border-hydro-line bg-white p-6 shadow-[0_24px_60px_-42px_rgba(9,36,76,0.7)] transition hover:-translate-y-1 hover:shadow-[0_34px_70px_-40px_rgba(9,36,76,0.6)]"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#eaf3fd] px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-hydro-blue">
                <Droplet aria-hidden="true" className="h-3 w-3" strokeWidth={2} />
                {entry.tag}
              </span>

              <div className="mt-5 grid grid-cols-[96px_1fr] items-center gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f2f8ff]">
                  <Image
                    src={entry.cardImage}
                    alt={entry.cardImageAlt}
                    fill
                    sizes="96px"
                    draggable={false}
                    className="select-none object-contain p-1"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-normal tracking-[-0.02em] text-hydro-navy">{entry.title}</h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-hydro-muted">{entry.subtitle}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-hydro-muted">{entry.description}</p>

              <ul className="mt-5 grid gap-2.5">
                {entry.checks.map((check) => (
                  <li key={check} className="flex gap-2.5 text-[13px] leading-5 text-hydro-ink">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-hydro-blue" strokeWidth={2.4} />
                    {check}
                  </li>
                ))}
              </ul>

              {/* mt-auto pins everything below to the card foot so the three
                  cards line up whatever the description length. */}
              <div className="mt-auto pt-6">
                <div className="flex gap-3 rounded-xl bg-[#f4f9ff] px-4 py-3">
                  <Users aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-hydro-blue" strokeWidth={1.8} />
                  <p className="text-[12.5px] leading-5 text-hydro-muted">
                    <span className="font-extrabold text-hydro-navy">Best for: </span>
                    {entry.bestFor}
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-2 divide-x divide-hydro-line rounded-xl bg-[#f4f9ff]">
                  {entry.speciality.map((item) => (
                    <p key={item} className="px-4 py-3 text-center text-[12px] font-extrabold leading-4 text-hydro-navy">
                      {item}
                    </p>
                  ))}
                </div>

                <Link
                  href={`/solutions/${entry.slug}`}
                  className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-hydro-blue text-sm font-bold text-white transition hover:bg-hydro-navy"
                >
                  Explore Solution
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
