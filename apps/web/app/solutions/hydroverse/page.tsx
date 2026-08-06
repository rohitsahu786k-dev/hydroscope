import Link from "next/link";
import { ArrowRight, Check, Cloud, Droplets, Gauge, Settings, Waves } from "lucide-react";
import { HydroVerseSchemeDiagram } from "@/components/hydroverse-scheme-diagram";
import { SectionHeading } from "@/components/section-heading";
import { ComparisonSection, CtaBand, OverviewSection, SolutionHero } from "@/components/solution-page-blocks";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import { hydroVerse } from "@/lib/solutions-content";

export const metadata = createMetadata({
  title: "HydroVerse | HYDROscope's Unified Water Management Ecosystem",
  description:
    "HydroVerse unifies HydroPilot, HydroEdge, HydroSense, HydroPure and HydroSure into one connected, cloud-monitored water management ecosystem.",
  path: "/solutions/hydroverse"
});

/* Matches the order of hydroVerse.integrated: HydroPilot, HydroEdge,
   HydroSense, HydroPure, HydroSure. */
const integratedIcons = [Settings, Waves, Gauge, Droplets, Cloud];

export default function HydroVersePage() {
  return (
    <main>
      <SolutionHero
        breadcrumb="HydroVerse"
        eyebrow={hydroVerse.eyebrow}
        title={hydroVerse.title}
        subtitle={hydroVerse.subtitle}
        image="/images/seo/hydroscope-water-treatment-products-feature-collage.webp"
        imageAlt="The HydroVerse ecosystem: pumps, sensors, chlorination and a cloud dashboard connected as one platform"
      />

      <OverviewSection paragraphs={[hydroVerse.overview]} />

      {/* Five products as one connected run rather than five loose cards: a
          rule threads through the icon row so the set reads as an ecosystem a
          customer buys together, not a menu to pick one item from. */}
      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <SectionHeading title="HydroVerse Integrated Solutions" />
          <div className="relative">
            {/* The connector. Hidden below xl, where the cards stack and a
                horizontal rule would run through empty space. */}
            <span
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-[62px] hidden h-px bg-[linear-gradient(90deg,transparent,#a9cdf2_12%,#a9cdf2_88%,transparent)] xl:block"
            />
            <div className="relative grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-1">
              {hydroVerse.integrated.map((item, index) => {
                const Icon = integratedIcons[index] ?? Droplets;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex flex-col items-center rounded-2xl border border-hydro-line bg-white p-6 text-center transition hover:-translate-y-1 hover:border-hydro-blue2 hover:shadow-[0_28px_60px_-40px_rgba(9,36,76,0.7)]"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-hydro-line bg-[#eaf3fd] text-hydro-blue2 transition group-hover:border-hydro-blue2 group-hover:bg-hydro-blue2 group-hover:text-white">
                      <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 text-lg font-normal tracking-[-0.02em] text-hydro-navy">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-hydro-muted">{item.subtitle}</p>
                    <ArrowRight aria-hidden="true" size={16} className="mt-auto pt-5 text-hydro-blue2" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Where those five products sit on a real scheme. The banner that
              used to close this section showed an electrochlorinator we do not
              sell and none of the other four products, which left the row above
              as the only evidence the set connects. */}
          <div className="mt-14">
            <h3 className="text-center text-xl font-normal tracking-[-0.02em] text-hydro-navy">
              One ecosystem, from the source to the tap
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-center text-base leading-7 text-hydro-muted">
              Every product has a place on the same scheme, in the order the water reaches it.
            </p>

            <div className="mt-9">
              <HydroVerseSchemeDiagram />
            </div>
          </div>
        </Container>
      </section>

      <section className="hydro-section bg-white">
        <Container>
          <SectionHeading title="Features" />
          <ul className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {hydroVerse.features.map((feature) => (
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

      <ComparisonSection
        title={hydroVerse.comparison.title}
        conventionalLabel={hydroVerse.comparison.conventionalLabel}
        conventional={hydroVerse.comparison.conventional}
        productLabel={hydroVerse.comparison.productLabel}
        product={hydroVerse.comparison.product}
      />

      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <SectionHeading title="Applications" />
          <ul className="grid grid-cols-5 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {hydroVerse.applications.map((application) => (
              <li
                key={application}
                className="rounded-xl border border-hydro-line bg-white px-5 py-6 text-center text-sm font-extrabold text-hydro-navy"
              >
                {application}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-hydro-line bg-white p-8 text-center">
            <h2 className="text-2xl font-normal tracking-[-0.02em] text-hydro-navy">Future Ready</h2>
            <p className="mt-4 text-base leading-7 text-hydro-muted">{hydroVerse.futureReady}</p>
          </div>
        </Container>
      </section>

      <CtaBand title="Transform Your Water Infrastructure with HydroVerse" label="Talk to an expert" />
    </main>
  );
}
