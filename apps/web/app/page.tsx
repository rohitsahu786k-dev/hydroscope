import Image from "next/image";
import { ApplicationCard, BlogCard } from "@/components/cards";
import { FaqMonochrome } from "@/components/ui/faq-monochrome";
import { HeroSection } from "@/components/hero-section";
import { HydroPureProofSection } from "@/components/hydropure-proof-section";
import { HydroscopeProductLineup } from "@/components/hydroscope-product-lineup";
import { FaqSchema } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SolutionsShowcase } from "@/components/solutions-showcase";
import { TestimonialsSection } from "@/components/testimonials";
import { WhyHydroscopeCarousel } from "@/components/why-hydroscope-carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { applications, blogPosts, faqs, solutions } from "@/lib/content";
import { getHomeData } from "@/lib/cms/globals";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HydroPure Electrochlorinator | IoT Enabled Water Chlorination System",
  description:
    "HydroPure by Hydroscope is an IoT-enabled electrochlorination system for on-site chlorine generation, automatic dosing, solar-compatible deployment and real-time monitoring.",
  path: "/"
});

export default async function HomePage() {
  const home = await getHomeData();

  return (
    <main>
      <HeroSection {...home.hero} />
      <section className="hydro-section">
        <Container>
          <SectionHeading
            eyebrow="Hydroscope integrated solution"
            title="HydroPure and HydroSense"
            text="On-site chlorine generation paired with real-time water-quality sensing - one range that treats the water and measures the result."
          />
          <HydroscopeProductLineup showHeading={false} />
        </Container>
      </section>
      <HydroPureProofSection />
      <section className="hydro-section bg-hydro-soft">
        <Container>
          <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-12 max-lg:grid-cols-1">
            <div>
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">From enquiry to running site</span>
              <h2 className="text-[clamp(34px,4vw,56px)] font-normal leading-[1.08] tracking-[-0.045em]">
                Know exactly what your deployment involves.
              </h2>
              <p className="mt-5 text-hydro-muted">
                No guesswork between the first call and a tank that chlorinates itself. Four steps, and you know the scope, the model and the running commitment before anything is ordered.
              </p>
              <div className="mt-7 grid gap-4">
                {[
                  ["01", "Site assessment", "Share tank capacity, daily water volume and monitoring needs. The site is mapped before anything is recommended."],
                  ["02", "Model sizing", "HP-100 to HP-2000, matched to your daily volume at a 16-hour runtime, with headroom for 24-hour operation."],
                  ["03", "Installation and commissioning", "A skid-mounted unit beside the tank, injection into the outgoing main. Plug and play, solar compatible, no civil rework at most sites."],
                  ["04", "Handover and remote support", "Operators learn salt refill and dashboard checks. After that, device health and faults arrive as alerts, not surprises."]
                ].map(([number, title, text]) => (
                  <article key={number} className="flex gap-4">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#e8f3ff] text-xs font-extrabold text-hydro-blue">{number}</span>
                    <div>
                      <h3 className="font-normal">{title}</h3>
                      <p className="text-sm text-hydro-muted">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <Card className="overflow-hidden p-3">
              <Image
                src="/images/seo/hydropure-electrochlorinator-product-only-outdoor-shot.webp"
                alt="HydroPure electrochlorinator unit installed outdoors at a deployment site"
                width={1916}
                height={821}
                className="h-auto w-full rounded-lg"
              />
            </Card>
          </div>
        </Container>
      </section>
      <SolutionsShowcase solutions={solutions} />
      <section className="hydro-section bg-hydro-soft">
        <Container>
          <SectionHeading eyebrow="Applications" title="Rural, municipal, institutional and industrial water networks" />
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {applications.map((application) => (
              <ApplicationCard key={application.slug} application={application} />
            ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section">
        <Container>
          <SectionHeading
            eyebrow="Risk removed"
            title="Four things you stop worrying about."
            text="Manual chlorination puts the burden on chemicals, people and site visits. Each one moves off your plate."
          />
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              {
                title: "No chlorine cylinders on site",
                text: "The disinfectant is made where it is dosed, so there is no chlorine gas cylinder or bleach stock to transport, store or handle.",
                image: "/images/risk-removed/no-chlorine-cylinders.webp",
                alt: "HydroPure units and a salt bin beside a village water tank, with no chlorine cylinders on site"
              },
              {
                title: "Salt refill, not service calls",
                text: "The self-cleaning electrolyser keeps scaling down and extends electrode life, so routine attention is mostly topping up salt.",
                image: "/images/risk-removed/salt-refill.webp",
                alt: "An operator topping up salt in a HydroPure electrochlorinator"
              },
              {
                title: "Runs where the grid does not",
                text: "Solar-compatible, low-power operation designed for rural, distributed and off-grid deployments.",
                image: "/images/risk-removed/off-grid-solar.webp",
                alt: "A solar panel powering a HydroPure unit at a village overhead tank"
              },
              {
                title: "Faults find you first",
                text: "Device health and dosing problems surface as dashboard alerts instead of waiting for the next site visit to be discovered.",
                image: "/images/risk-removed/faults-find-you-first.webp",
                alt: "An engineer reviewing live HydroSure dashboard alerts for a connected village tank"
              }
            ].map((item) => (
              <Card key={item.title} className="group flex flex-col overflow-hidden p-0">
                {/* Fixed 4:3 box so all four cards line up and the row does not
                    shift as the images decode. */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eef7ff]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    draggable={false}
                    className="select-none object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-normal leading-snug text-hydro-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-hydro-muted">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <WhyHydroscopeCarousel />
      <TestimonialsSection />
      <section className="hydro-section">
        <Container>
          <SectionHeading eyebrow="SEO resources" title="Guides for smart water decisions" />
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section">
        <Container>
          <FaqMonochrome items={faqs} />
        </Container>
      </section>
      <section className="relative overflow-hidden bg-hydro-navy py-20 text-center text-white">
        <div className="hydro-network absolute inset-0 opacity-10" />
        <Container className="relative">
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#bde8ff]">Automate chlorination and monitoring</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-[clamp(34px,4vw,58px)] font-normal leading-[1.05] tracking-[-0.045em]">
            Share your water demand, tank capacity and monitoring requirement.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#cfe4ff]">Hydroscope will recommend the right HydroPure model, sensing layer and deployment plan.</p>
          <Button href="/request-demo" className="mt-7">
            Request demo
          </Button>
        </Container>
      </section>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
