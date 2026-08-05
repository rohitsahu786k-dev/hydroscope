import Image from "next/image";
import { Boxes, Check, ShieldCheck, SlidersHorizontal, TrendingUp } from "lucide-react";
import { HydroPureFlowDiagram } from "@/components/hydropure-flow-diagram";
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
  hydroPureComparison,
  hydroPureHowItWorks,
  hydroPureIndustryApplications,
  hydroPureTrustBadge,
  hydroPureVariants
} from "@/lib/solutions-content";

const entry = findSolutionEntry("hydropure")!;
/* Scalable, Customizable, Modular - in the order hydroPureVariants.badges
   lists them. */
const variantBadgeIcons = [TrendingUp, SlidersHorizontal, Boxes];

export const metadata = createMetadata({
  title: "HydroPure Electrochlorinator | Automated On-Site Chlorination",
  description:
    "HydroPure is a fully automated, IoT enabled electrochlorination system with on-site chlorine generation, adaptive dosing and real-time monitoring. HP-100 to HP-2000.",
  path: "/solutions/hydropure"
});

export default function HydroPurePage() {
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
        title={hydroPureComparison.title}
        subtitle={hydroPureComparison.subtitle}
        conventionalLabel={hydroPureComparison.conventionalLabel}
        conventional={hydroPureComparison.conventional}
        productLabel={hydroPureComparison.productLabel}
        product={hydroPureComparison.product}
      />

      {/* The supplied workflow artwork, followed by the standards badge. */}
      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <SectionHeading
            eyebrow="The HydroPure solution"
            title="Automated, intelligent and reliable chlorination workflow"
          />
          {/* The real unit, not a generic diagrammed one. The workflow it used
              to illustrate is now the flow diagram further down the page. */}
          <div className="overflow-hidden rounded-2xl border border-hydro-line bg-white p-3">
            <Image
              src="/images/hydroscope-products/hydropure-hp-100.webp"
              alt="HydroPure HP-100 electrochlorinator installed beside process pipework, generating and dosing sodium hypochlorite on site"
              width={1672}
              height={941}
              draggable={false}
              className="pointer-events-none h-auto w-full select-none rounded-lg"
            />
          </div>

          <div className="mx-auto mt-8 flex max-w-2xl items-center gap-4 rounded-2xl border border-hydro-blue bg-white px-7 py-6 max-sm:flex-col max-sm:text-center">
            <ShieldCheck aria-hidden="true" className="h-8 w-8 shrink-0 text-hydro-blue" strokeWidth={1.6} />
            <div>
              <p className="text-sm leading-6 text-hydro-muted">{hydroPureTrustBadge.title}</p>
              <p className="mt-1 text-sm font-extrabold text-hydro-navy">{hydroPureTrustBadge.text}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="hydro-section bg-white">
        <Container>
          <SectionHeading title="How HydroPure works" align="left" />
          <p className="max-w-4xl text-base leading-7 text-hydro-muted">{hydroPureHowItWorks}</p>

          {/* A flow diagram rather than a product photo: this section answers
              "where does the unit sit in the network", which a photograph of
              the unit cannot. Treated water arrives from the plant, HydroPure
              doses it, the dosed water fills the ESR, and the distribution
              mains carry it to each house - with HydroSure reading every
              stage. */}
          <div className="mt-9">
            <HydroPureFlowDiagram />
          </div>
        </Container>
      </section>

      <IconGrid
        eyebrow="Industry applications"
        title="Where HydroPure runs"
        items={hydroPureIndustryApplications.map((title) => ({ title }))}
      />

      {/* ---- Model range. Figures are exactly the supplied table; no row is
             interpolated between the published models. ---- */}
      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <SectionHeading title="HydroPure Variants" text={hydroPureVariants.subtitle} />
          <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-7 text-hydro-muted">
            {hydroPureVariants.intro}
          </p>

          <div className="overflow-x-auto rounded-2xl border border-hydro-line bg-white">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-hydro-navy text-white">
                  <th scope="col" className="px-5 py-4 text-left font-extrabold">
                    Model
                  </th>
                  {hydroPureVariants.models.map((model) => (
                    <th key={model} scope="col" className="px-5 py-4 text-center font-extrabold">
                      {model}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hydroPureVariants.rows.map((row) => (
                  <tr key={row.label} className="border-t border-hydro-line">
                    <th scope="row" className="px-5 py-4 text-left font-extrabold text-hydro-navy">
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${hydroPureVariants.models[index]}`} className="px-5 py-4 text-center text-hydro-ink">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
                {hydroPureVariants.ticks.map((tick) => (
                  <tr key={tick} className="border-t border-hydro-line bg-[#f7fbff]">
                    <th scope="row" className="px-5 py-4 text-left font-extrabold text-hydro-navy">
                      {tick}
                    </th>
                    {hydroPureVariants.models.map((model) => (
                      <td key={`${tick}-${model}`} className="px-5 py-4 text-center">
                        <Check
                          aria-label={`${tick} available on ${model}`}
                          className="mx-auto h-4 w-4 text-hydro-blue"
                          strokeWidth={2.6}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-6 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            {hydroPureVariants.badges.map((badge, index) => {
              const Icon = variantBadgeIcons[index] ?? Boxes;
              return (
                <li
                  key={badge}
                  className="flex items-center justify-center gap-3 rounded-xl border border-hydro-line bg-white px-5 py-5 text-center text-sm font-extrabold text-hydro-navy transition hover:-translate-y-1 hover:border-hydro-blue2"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eaf3fd] text-hydro-blue2">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  {badge}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CtaBand title="Ready to modernize your water infrastructure" />
      <RelatedSolutions exclude="hydropure" />
    </main>
  );
}
