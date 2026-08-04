import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { SolutionsSection } from "@/components/solutions-section";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import { hydroVerse, otherIotSolutions } from "@/lib/solutions-content";

export const metadata = createMetadata({
  title: "HYDROscope Solutions | HydroPure, HydroSense, HydroSure and HydroVerse",
  description:
    "Explore the HYDROscope range: HydroPure electrochlorination, HydroSense water-quality sensing, the HydroSure cloud platform and the HydroVerse ecosystem.",
  path: "/solutions"
});

/* The guide folds Products into Solutions, so this page is the range index:
   the same three-card row the homepage shows, plus the smaller IoT modules and
   the HydroVerse ecosystem. */
export default function SolutionsPage() {
  return (
    <main>
      <section className="pt-10">
        <Container>
          <Breadcrumbs items={[{ label: "Solutions" }]} />
        </Container>
      </section>

      <SolutionsSection />

      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <SectionHeading
            eyebrow="Smart IoT solutions"
            title="Other Related IoT Solutions"
            text="Explore our range of innovative IoT solutions designed to solve diverse industry challenges in our smart water management."
          />
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {otherIotSolutions.map((solution) => (
              <article
                key={solution.slug}
                className="flex flex-col rounded-2xl border border-hydro-line bg-white p-7 transition hover:-translate-y-1 hover:border-hydro-blue"
              >
                <h3 className="text-xl font-normal tracking-[-0.02em] text-hydro-navy">{solution.title}</h3>
                <p className="mt-2 text-sm text-hydro-blue">{solution.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-hydro-muted">{solution.overview}</p>
                <Link
                  href={`/solutions/other-iot-solutions#${solution.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold text-hydro-blue"
                >
                  Explore
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </article>
            ))}

            <article className="flex flex-col rounded-2xl border border-hydro-blue bg-white p-7 transition hover:-translate-y-1">
              <h3 className="text-xl font-normal tracking-[-0.02em] text-hydro-navy">{hydroVerse.title}</h3>
              <p className="mt-2 text-sm text-hydro-blue">Complete intelligent water ecosystem</p>
              <p className="mt-4 text-sm leading-6 text-hydro-muted">{hydroVerse.subtitle}</p>
              <Link
                href="/solutions/hydroverse"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold text-hydro-blue"
              >
                Explore
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
