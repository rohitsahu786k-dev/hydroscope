import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { CtaBand, OverviewSection, RelatedSolutions, SolutionHero } from "@/components/solution-page-blocks";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import { otherIotSolutions } from "@/lib/solutions-content";

export const metadata = createMetadata({
  title: "Other IoT Solutions | HydroPilot and HydroEdge",
  description:
    "HydroPilot automates valves and pumps and HydroEdge monitors water tank levels - IoT-enabled control and monitoring that plugs into the HydroVerse ecosystem.",
  path: "/solutions/other-iot-solutions"
});

export default function OtherIotSolutionsPage() {
  return (
    <main>
      <SolutionHero
        breadcrumb="Other IoT Solutions"
        eyebrow="Smart IoT solutions"
        title="Other Related IoT Solutions"
        subtitle="Explore our range of innovative IoT solutions designed to solve diverse industry challenges in our smart water management."
        image="/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp"
        imageAlt="HYDROscope IoT control and monitoring hardware installed across a water network"
      />

      <OverviewSection
        paragraphs={[
          "Our comprehensive IoT solutions provide water level sensors, and intelligent control systems to deliver real-time monitoring and seamless remote management. Designed to enhance operational efficiency and optimize water resource management, our solutions provide actionable insights through a centralized dashboard, enabling smarter, data-driven decision-making."
        ]}
      />

      {/* One block per module. The anchor ids match the nav dropdown links, so
          "HydroPilot" in the menu lands directly on its section. */}
      {otherIotSolutions.map((solution, index) => (
        <section
          key={solution.slug}
          id={solution.slug}
          className={`hydro-section scroll-mt-28 ${index % 2 === 0 ? "bg-[#f7fbff]" : "bg-white"}`}
        >
          <Container>
            <div className="grid grid-cols-[1fr_1.1fr] items-center gap-10 max-lg:grid-cols-1">
              <div className="overflow-hidden rounded-2xl border border-hydro-line bg-white p-3">
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  width={1200}
                  height={900}
                  draggable={false}
                  className="pointer-events-none h-auto w-full select-none rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-[clamp(28px,3vw,42px)] font-normal leading-[1.08] tracking-[-0.03em] text-hydro-navy">
                  {solution.title}
                </h2>
                <p className="mt-2 text-base text-hydro-blue">{solution.subtitle}</p>
                <p className="mt-5 text-base leading-7 text-hydro-muted">{solution.overview}</p>

                <h3 className="mt-8 text-lg font-normal text-hydro-navy">Features</h3>
                <ul className="mt-4 grid gap-2.5">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-hydro-ink">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-hydro-blue" strokeWidth={2.4} />
                      {/* The guide marks the HydroVerse mention as clickable. */}
                      {feature.includes("HydroVerse") ? (
                        <span>
                          Seamless integration with{" "}
                          <Link href="/solutions/hydroverse" className="font-extrabold text-hydro-blue underline">
                            HydroVerse
                          </Link>
                        </span>
                      ) : (
                        feature
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CtaBand title="Ready to Take Control of Your Water Infrastructure?" label="Talk to an expert" />
      <RelatedSolutions exclude="" includeOther={false} />
    </main>
  );
}
