import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import {
  ComparisonSection,
  CoreFeaturesSection,
  CtaBand,
  IconGrid,
  OverviewSection,
  RelatedSolutions,
  SolutionHero
} from "@/components/solution-page-blocks";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import {
  findSolutionEntry,
  hydroSenseApplications,
  hydroSenseComparison,
  hydroSenseFlow
} from "@/lib/solutions-content";

const entry = findSolutionEntry("hydrosense")!;

export const metadata = createMetadata({
  title: "HydroSense Water Quality Sensor | Real-Time Multi-Parameter Monitoring",
  description:
    "HydroSense is an industrial-grade, IoT-enabled multi-parameter water quality sensing platform for in-line, bypass and portable deployment.",
  path: "/solutions/hydrosense"
});

export default function HydroSensePage() {
  return (
    <main>
      <SolutionHero
        breadcrumb={entry.title}
        eyebrow={entry.eyebrow}
        title={entry.title}
        subtitle={entry.heroSubtitle}
        image={entry.heroImage}
        imageAlt={entry.heroImageAlt}
      />

      <OverviewSection paragraphs={entry.overview} />
      <CoreFeaturesSection features={entry.coreFeatures} />

      <ComparisonSection
        title={hydroSenseComparison.title}
        subtitle={hydroSenseComparison.subtitle}
        conventionalLabel={hydroSenseComparison.conventionalLabel}
        conventional={hydroSenseComparison.conventional}
        productLabel={hydroSenseComparison.productLabel}
        product={hydroSenseComparison.product}
      />

      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <SectionHeading eyebrow="In-line | Bypass | Portable" title="How HydroSense works" />

          <div className="overflow-hidden rounded-2xl border border-hydro-line bg-white p-3">
            <Image
              src="/images/how-it-works/13-water-sensor-probe.webp"
              alt="HydroSense multi-parameter sensor installed in-line on a flanged pipe section, with bypass and portable installation options"
              width={1600}
              height={900}
              draggable={false}
              className="pointer-events-none h-auto w-full select-none rounded-lg"
            />
          </div>

          {/* Five steps as a flow: numbered, left to right on wide screens and
              stacked below lg. */}
          {/* Hover lifts the card, warms its border and pulls the step number
              up to full size - enough to feel responsive without moving the
              copy under the pointer. */}
          <ol className="mt-9 grid grid-cols-5 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {hydroSenseFlow.map((step) => (
              <li
                key={step.number}
                className="group rounded-2xl border border-hydro-line bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-hydro-blue2 hover:shadow-[0_26px_56px_-38px_rgba(9,36,76,0.7)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-[#eaf3fd] text-xs font-extrabold tracking-[0.08em] text-hydro-blue2 transition duration-300 group-hover:bg-hydro-blue2 group-hover:text-white">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-normal text-hydro-navy">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-hydro-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <IconGrid
        eyebrow="Industry application"
        title="One intelligent sensing platform for every water monitoring challenge."
        items={hydroSenseApplications}
      />

      <CtaBand title="Ready to Transform Your Water Quality Monitoring?" />
      <RelatedSolutions exclude="hydrosense" />
    </main>
  );
}
