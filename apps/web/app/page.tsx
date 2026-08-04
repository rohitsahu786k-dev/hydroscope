import { CapabilityMarquee } from "@/components/capability-marquee";
import { HeroSection } from "@/components/hero-section";
import { HydroVerseEcosystemSection } from "@/components/hydroverse-ecosystem-section";
import { IndustryAdoptionSection } from "@/components/industry-adoption-section";
import { FaqSchema } from "@/components/json-ld";
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

/* Homepage order follows the content guide: hero, sector strip, solutions,
   ecosystem, why choose us, capability marquee, industry adoption, FAQ and the
   closing consultation call.

   The sections the feedback document asked to drop - Testimonials, SEO
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
      <HydroVerseEcosystemSection />
      <WhyChooseUsSection />
      <CapabilityMarquee />
      <IndustryAdoptionSection />
      <section className="hydro-section">
        <Container>
          <FaqMonochrome items={faqs} />
        </Container>
      </section>
      <RequestConsultationSection />
      <FaqSchema faqs={faqs} />
    </main>
  );
}
