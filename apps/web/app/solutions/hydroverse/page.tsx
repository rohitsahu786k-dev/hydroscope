import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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

      {/* Five products, one card each, in parallel as the guide specifies. */}
      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <SectionHeading title="HydroVerse Integrated Solutions" />
          <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-1">
            {hydroVerse.integrated.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex flex-col rounded-2xl border border-hydro-line bg-white p-6 transition hover:-translate-y-1 hover:border-hydro-blue"
              >
                <h3 className="text-lg font-normal tracking-[-0.02em] text-hydro-navy">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-hydro-muted">{item.subtitle}</p>
                <ArrowRight aria-hidden="true" size={16} className="mt-auto pt-5 text-hydro-blue" />
              </Link>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-hydro-line bg-white p-3">
            <Image
              src="/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp"
              alt="Complete HydroVerse ecosystem connection across pumps, tanks, sensors, chlorination and the cloud dashboard"
              width={1600}
              height={900}
              draggable={false}
              className="pointer-events-none h-auto w-full select-none rounded-lg"
            />
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
