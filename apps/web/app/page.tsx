import { CapabilityMarquee } from "@/components/capability-marquee";
import { HeroSection } from "@/components/hero-section";
import { HydroSureDashboardShowcase } from "@/components/hydrosure-dashboard-showcase";
import { HydroVerseEcosystemSection } from "@/components/hydroverse-ecosystem-section";
import { IndustryAdoptionSection } from "@/components/industry-adoption-section";
import { FaqSchema } from "@/components/json-ld";
import { ProudlySupportsMarquee } from "@/components/proudly-supports-marquee";
import { RequestConsultationSection } from "@/components/request-consultation-section";
import { SectorNavigation } from "@/components/sector-navigation";
import { SolutionsSection } from "@/components/solutions-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { FaqMonochrome } from "@/components/ui/faq-monochrome";
import { Container } from "@/components/ui/container";
import { faqs } from "@/lib/content";
import { getHomeData } from "@/lib/cms/globals";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HYDROscope | Smarter Water Management with IoT and AI",
  description:
    "HYDROscope delivers IoT-enabled, fully automated water management - HydroPure electrochlorination, HydroSense water-quality sensing and the HydroSure cloud platform.",
  path: "/"
});

/* Homepage order, as set by the website review:
     hero, sector strip, solutions, the HydroSure screen, the capability
     marquee, the ecosystem, why choose us, FAQ, industry adoption, the
     programme marquee, and the closing consultation call.

   Two placements come straight from that review: the capability marquee sits
   between the HydroSure screen and the ecosystem block, and Proudly Supports
   runs directly above Request a Consultation.

   The sections the earlier feedback document asked to drop - Testimonials, SEO
   Resources, Risk Removed, From Enquiry to Running Site, Applications, the old
   Solutions carousel, Stakeholders, Key Features, Use Cases, Challenges,
   Current Process and The HydroPure Solution - are no longer rendered here.
   Their components still exist and are used by the deeper product pages. */
export default async function HomePage() {
  await getHomeData();

  return (
    <main>
      <HeroSection />
      <SectorNavigation />
      <SolutionsSection />
      <HydroSureDashboardShowcase />
      <CapabilityMarquee />
      <HydroVerseEcosystemSection />
      <WhyChooseUsSection />
      <section className="hydro-section">
        <Container>
          <FaqMonochrome items={faqs} />
        </Container>
      </section>
      <IndustryAdoptionSection />
      <ProudlySupportsMarquee />
      <RequestConsultationSection />
      <FaqSchema faqs={faqs} />
    </main>
  );
}
