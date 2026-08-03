import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

/* The HydroPure model range plus the HydroSense sensor, ordered by capacity.
   Model names follow the supplied product artwork: HP-100, HP-200/500/1000 and
   HP-1600/2000 share a chassis per group, so one card covers each group.
 *
 * Sizing lines come from the `parameters` list and capacity table in
 * lib/content.ts; feature lines come from the products' `features` arrays.
 * Card 3 is deliberately written as "up to 2000 g/day" - the site documents
 * 2000 g/day but has no published figure for HP-1600. */
const lineup = [
  {
    id: "hp-100",
    name: "HydroPure HP-100",
    description: "Small village tanks, compact institutions and low-demand sites.",
    features: ["100 g/day chlorine output", "Treats about 1,00,000 litres/day", "On-site chlorine generation"],
    image: "/images/hydroscope-products/hydropure-hp-100.webp",
    alt: "HydroPure HP-100 electrochlorinator model installed at a water treatment site"
  },
  {
    id: "hp-200-500-1000",
    name: "HydroPure HP-200 / 500 / 1000",
    description: "Larger villages, residential and institutional blocks, and municipal or campus networks.",
    features: ["200 to 1000 g/day output", "Treats 2,00,000 to 10,00,000 litres/day", "Self-cleaning electrolyser"],
    image: "/images/hydroscope-products/hydropure-hp-200-500-1000.webp",
    alt: "HydroPure HP-200, HP-500 and HP-1000 electrochlorinator model installed at a water treatment plant"
  },
  {
    id: "hp-1600-2000",
    name: "HydroPure HP-1600 / 2000",
    description: "Large water-supply schemes and multi-site infrastructure projects.",
    features: ["Up to 2000 g/day output", "Treats up to 20,00,000 litres/day", "PLC and SCADA integration"],
    image: "/images/hydroscope-products/hydropure-hp-1600-2000.webp",
    alt: "HydroPure HP-1600 and HP-2000 electrochlorinator model installed in an industrial water plant"
  },
  {
    id: "hydrosense-water-quality-sensor",
    name: "HydroSense Water Quality Sensor",
    description: "Real-time monitoring of the parameters that prove your water is safe.",
    features: ["Active chlorine monitoring", "pH and conductivity monitoring", "TDS and temperature monitoring"],
    image: "/images/hydroscope-products/hydrosense-water-quality-sensor.webp",
    alt: "HydroSense handheld water quality sensor displaying a live reading in a laboratory"
  }
];

type HydroscopeProductLineupProps = {
  /* Turn off when the surrounding section already carries a heading, so the
     page does not stack two titles on top of each other. */
  showHeading?: boolean;
};

export function HydroscopeProductLineup({ showHeading = true }: HydroscopeProductLineupProps = {}) {
  return (
    <section
      aria-labelledby={showHeading ? "hydroscope-product-lineup-heading" : undefined}
      aria-label={showHeading ? undefined : "HydroPure model range and HydroSense sensor"}
    >
      {showHeading ? (
        <div className="mb-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-hydro-blue">
            The HydroScope range
          </p>
          <h3
            id="hydroscope-product-lineup-heading"
            className="mt-3 text-[clamp(26px,3vw,40px)] font-normal tracking-tighter text-hydro-ink"
          >
            One model for every tank size.
          </h3>
        </div>
      ) : null}

      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {lineup.map((unit) => (
          <article
            key={unit.id}
            className="group flex flex-col overflow-hidden border border-hydro-line bg-white shadow-hydro transition hover:-translate-y-1 hover:border-[#b7d7f6] hover:shadow-hydroHover"
          >
            {/* Fixed aspect box so all four line up regardless of crop, and the
                reserved space stops the row shifting as images decode. */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f2f8ff]">
              <Image
                src={unit.image}
                alt={unit.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h4 className="text-[19px] font-normal leading-snug tracking-[-0.02em] text-hydro-ink">
                {unit.name}
              </h4>
              <p className="mt-2 text-base leading-7 text-hydro-muted">{unit.description}</p>
              {/* mt-auto pins the list to the card bottom, so the bullets line
                  up across all four cards even when a description wraps to a
                  different number of lines. */}
              <ul className="mt-auto grid gap-2 pt-4">
                {unit.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-hydro-ink">
                    <CheckCircle2
                      aria-hidden="true"
                      size={16}
                      className="mt-0.5 shrink-0 text-hydro-blue"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
