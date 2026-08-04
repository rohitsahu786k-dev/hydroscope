import Image from "next/image";
import { Activity, Check, Database, Lock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import {
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
  hydroSureDeployments,
  hydroSureIntelligence,
  hydroSureSecurity
} from "@/lib/solutions-content";

const entry = findSolutionEntry("hydrosure")!;
const capabilityIcons = [Lock, MapPin, Database, Activity];

export const metadata = createMetadata({
  title: "HydroSure | AI-Powered Cloud Water Management Platform",
  description:
    "HydroSure is a secure, cloud-native IoT platform for real-time device monitoring, AI-powered analytics, automated alerts and multi-site water network management.",
  path: "/solutions/hydrosure"
});

export default function HydroSurePage() {
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

      <section className="hydro-section bg-white">
        <Container>
          <SectionHeading eyebrow={hydroSureIntelligence.eyebrow} title={hydroSureIntelligence.title} />
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {hydroSureIntelligence.items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-hydro-line bg-white p-7">
                <h3 className="text-lg font-normal leading-snug text-hydro-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-hydro-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ---- Security and access control ---- */}
      <section className="hydro-section bg-[#f7fbff]">
        <Container>
          <SectionHeading
            eyebrow={hydroSureSecurity.eyebrow}
            title={hydroSureSecurity.title}
            text={hydroSureSecurity.subtitle}
          />

          <ul className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {hydroSureSecurity.ticks.map((tick) => (
              <li
                key={tick}
                className="inline-flex items-center gap-2 rounded-full border border-hydro-line bg-white px-4 py-2.5 text-[13px] font-extrabold text-hydro-navy"
              >
                <Check aria-hidden="true" className="h-4 w-4 text-hydro-blue" strokeWidth={2.4} />
                {tick}
              </li>
            ))}
          </ul>

          <p className="mb-6 text-center text-base leading-7 text-hydro-muted">{hydroSureSecurity.capabilityIntro}</p>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {hydroSureSecurity.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index] ?? Lock;
              return (
                <article key={capability.title} className="rounded-2xl border border-hydro-line bg-white p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eaf3fd] text-hydro-blue">
                    <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-base font-normal text-hydro-navy">{capability.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-hydro-muted">{capability.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---- Real-time monitoring: dashboard on the left, the live signals it
             surfaces on the right. ---- */}
      <section className="hydro-section bg-white">
        <Container>
          <SectionHeading
            eyebrow="Real-time monitoring"
            title="Monitor every device. Every parameter. Every second."
          />
          <div className="grid grid-cols-[1.35fr_1fr] items-center gap-9 max-lg:grid-cols-1">
            <div className="overflow-hidden rounded-2xl border border-hydro-line bg-white p-3">
              <Image
                src="/images/hydrosure-dashboard/hydrosure-dashboard-full.webp"
                alt="HydroSure real-time overview: tanks online, warnings, attention alerts, residual chlorine, water usage, the assigned devices map, device analytics and chlorination trend charts"
                width={1672}
                height={941}
                draggable={false}
                className="pointer-events-none h-auto w-full select-none rounded-lg"
              />
            </div>

            <ul className="grid gap-3">
              {[
                ["Device", "Active"],
                ["Updated", "1 minute ago"],
                ["Chlorine", "0.48"],
                ["Alerts", "1"]
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-hydro-line bg-[#f7fbff] px-6 py-5"
                >
                  <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-hydro-muted">
                    {label}
                  </span>
                  <span className="text-lg font-normal text-hydro-navy">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-hydro-muted">
            Values shown are an illustrative snapshot of the dashboard layout, not live site data.
          </p>
        </Container>
      </section>

      <IconGrid
        eyebrow={hydroSureDeployments.eyebrow}
        title={hydroSureDeployments.title}
        subtitle={hydroSureDeployments.subtitle}
        items={hydroSureDeployments.items}
      />

      <CtaBand title="Ready to Take Control of Your Water Operations?" />
      <RelatedSolutions exclude="hydrosure" />
    </main>
  );
}
