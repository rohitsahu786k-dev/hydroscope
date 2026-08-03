import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { HydroPureDashboardHero } from "@/components/hydropure-dashboard-hero";
import { HydroPureStorySection } from "@/components/hydropure-story-section";
import { HydroPureProcessInfographic } from "@/components/HydroPureProcessInfographic";
import { HydroPureInstallationSection } from "@/components/hydropure-installation-section";
import { HydroPureUseCasesSection } from "@/components/hydropure-use-cases-section";
import { IndustryAdoptionSection } from "@/components/industry-adoption-section";
import { KeyFeaturesCarousel } from "@/components/key-features-carousel";
import { SectionHeading } from "@/components/section-heading";
import { StakeholdersCarousel } from "@/components/stakeholders-carousel";

const platformStats = [
  ["1,256", "Tanks online", "+20.1%", "up"],
  ["142", "Warnings", "-2%", "down"],
  ["0.72", "Residual chlorine mg/L", "+8%", "up"],
  ["128.5", "Water usage KL", "+2%", "up"]
];

/* The use-case and industry lists moved out of this file: they are now the
   HydroPureUseCasesSection artwork block and the IndustryAdoptionSection
   marquee, both rendered full width below the key-features carousel. */

const capacities = [
  ["HP-100", "100 g/day", "1,00,000 litres/day"],
  ["HP-200", "200 g/day", "2,00,000 litres/day"],
  ["HP-500", "500 g/day", "5,00,000 litres/day"],
  ["HP-1000", "1000 g/day", "10,00,000 litres/day"],
  ["HP-2000", "2000 g/day", "20,00,000 litres/day"]
];

export function HydroPureProofSection() {
  return (
    <section className="hydro-section bg-white">
      <Container>
        <SectionHeading
          eyebrow="HydroPure feature system"
          title="Complete automated chlorination infrastructure for village water tanks"
          text="Designed from your provided reference content: product overview, village-tank deployment, working principle, monitoring, features, benefits, model range and stakeholders."
        />

        <Card className="border-transparent bg-white px-0 py-8 shadow-none">
          <div className="grid min-h-[430px] grid-cols-[0.95fr_1.05fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-9">
            <div className="max-w-[560px]">
              <span className="inline-flex rounded-full bg-hydro-ink px-3 py-1 text-[11px] font-extrabold text-white">Platform</span>
              <h3 className="mt-5 text-[clamp(36px,4vw,58px)] font-normal leading-[1.02] tracking-[-0.04em] text-hydro-ink">
                From Har Ghar Jal to Har Ghar Swachh Jal.
              </h3>
              <p className="mt-4 max-w-[470px] text-lg leading-8 text-[#6b7280] max-sm:text-base max-sm:leading-7">
                HydroPure is a next-generation, IoT-enabled electrochlorination system designed for complete autonomy and reliability. It continuously senses, adapts and safeguards water quality in real time using advanced sensors and automated precision dosing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {platformStats.map(([value, label, delta, direction]) => {
                const Icon = direction === "down" ? ArrowDownLeft : ArrowUpRight;
                const isDown = direction === "down";

                return (
                  <div key={label} className="flex min-h-[138px] flex-col justify-between rounded-md border border-[#dedede] bg-white p-6">
                    <Icon aria-hidden="true" className={isDown ? "text-[#ef4444]" : "text-black"} size={18} strokeWidth={1.8} />
                    <div>
                      <div className="flex items-baseline gap-3">
                        <p className="text-[clamp(34px,3vw,44px)] font-normal leading-none tracking-[-0.04em] text-hydro-ink">{value}</p>
                        <span className="text-sm text-[#6b7280]">{delta}</span>
                      </div>
                      <p className="mt-2 text-base leading-none text-[#6b7280]">{label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        <div className="mt-8">
          <HydroPureStorySection />
        </div>

        <HydroPureProcessInfographic />

        <div className="mt-8">
          <HydroPureInstallationSection />
        </div>

        <div className="mt-8">
          <HydroPureDashboardHero />
        </div>

        <section aria-labelledby="key-features-heading" className="mt-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-hydro-blue">Key features</p>
            <h3
              id="key-features-heading"
              className="mt-3 text-[clamp(30px,4vw,56px)] font-normal tracking-tighter text-hydro-ink"
            >
              Key features.
            </h3>
          </div>
          <KeyFeaturesCarousel />
        </section>

        <div className="mt-8">
          <HydroPureUseCasesSection />
        </div>

        <IndustryAdoptionSection />

        <div className="mt-12">
          <StakeholdersCarousel />
        </div>

        <div className="mt-12">
          <Card className="border-[#dbe8f5] bg-white p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-hydro-blue">Model capacity range</p>
            <div className="mt-5 overflow-hidden border border-[#d4e3f2]">
              <div className="grid grid-cols-3 bg-hydro-navy px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                <span>Model</span>
                <span>Daily chlorine</span>
                <span>Water treated</span>
              </div>
              {capacities.map(([model, chlorine, water]) => (
                <div key={model} className="grid grid-cols-3 border-t border-[#dbe8f5] px-4 py-3 text-xs font-bold text-hydro-ink">
                  <span>{model}</span>
                  <span>{chlorine}</span>
                  <span>{water}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-hydro-muted">
              Considering runtime of 16 hours. The system is capable of continuous 24-hour operation.
            </p>
          </Card>
        </div>

      </Container>
    </section>
  );
}
