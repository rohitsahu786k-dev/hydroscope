import Image from "next/image";
import { Boxes, Cloud, Gauge, Layers, Radar, Sparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Container } from "./ui/container";
import { whyChooseUs } from "@/lib/solutions-content";

const cardIcons = [Layers, Gauge, Sparkles, Radar, Cloud, Boxes];

/* Why Choose Us. Four credibility figures across the top, then six cards that
   show icon and title first and reveal the description on flip - hover on a
   pointer, keyboard focus otherwise, so the copy is reachable without a mouse. */
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

        <ul className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {whyChooseUs.cards.map((card, index) => {
            const Icon = cardIcons[index] ?? Layers;
            return (
              <li key={card.title} className="group h-[190px] [perspective:1200px]">
                <div
                  tabIndex={0}
                  className="relative h-full w-full rounded-2xl outline-none transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] motion-reduce:transition-none"
                >
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col justify-center gap-4 rounded-2xl border border-hydro-line bg-white p-7 shadow-[0_20px_54px_-42px_rgba(9,36,76,0.8)] [backface-visibility:hidden]">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf3fd] text-hydro-blue">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="text-lg font-normal leading-snug text-hydro-navy">{card.title}</h3>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col justify-center rounded-2xl bg-hydro-navy p-7 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="text-base font-normal leading-snug">{card.title}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#cfe4ff]">{card.text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
