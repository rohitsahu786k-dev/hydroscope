import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { CarouselStacked } from "./ui/carousel-07";
import { Container } from "./ui/container";
import { whyChooseUs } from "@/lib/solutions-content";

/* Why Choose Us. Four credibility figures across the top, then the six reasons
   as a stacked drag carousel - drag it, or use the arrows. */
export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="hydro-section bg-[#f7fbff]">
      <Container>
        <SectionHeading eyebrow={whyChooseUs.eyebrow} title={whyChooseUs.title} text={whyChooseUs.text} />

        <div className="mx-auto max-w-[760px] overflow-hidden rounded-2xl border border-hydro-line bg-white shadow-[0_28px_70px_-50px_rgba(9,36,76,0.8)]">
          <Image
            src="/images/seo/hydroscope-water-treatment-products-feature-collage.webp"
            alt="HydroPure, HydroSense and HydroSure shown together as one water intelligence platform"
            width={1600}
            height={900}
            draggable={false}
            className="pointer-events-none h-auto w-full select-none"
          />
        </div>

        <dl className="mt-10 grid grid-cols-4 divide-x divide-hydro-line rounded-2xl border border-hydro-line bg-white max-md:grid-cols-2 max-md:divide-x-0">
          {whyChooseUs.stats.map((stat) => (
            <div key={stat.label} className="px-5 py-7 text-center max-md:border-b max-md:border-hydro-line">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[clamp(28px,3vw,40px)] font-normal leading-none tracking-[-0.04em] text-hydro-navy">
                  {stat.value}
                </span>
                <span className="mt-2 block text-[12.5px] leading-5 text-hydro-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Full width rather than inside the container: the stack fans out well
          past the centre card, and clipping it would cut the fan in half. */}
      <CarouselStacked
        slides={whyChooseUs.cards.map((card) => ({
          image: card.image,
          title: card.title,
          description: card.text,
          badge: card.badge
        }))}
      />

      <p className="text-center text-xs text-hydro-muted">Drag the cards, or use the arrows.</p>
    </section>
  );
}
