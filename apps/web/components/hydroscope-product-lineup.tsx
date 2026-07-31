import Image from "next/image";

/* The four physical units that make up a HydroPure installation, in process
   order: brine is stored, chlorine is generated, dosing is controlled, water is
   measured. Descriptions are drawn from the product copy in lib/content.ts -
   nothing here claims a spec the site does not already state. */
const lineup = [
  {
    id: "salt-solution-tank",
    name: "Salt Solution Tank",
    description: "Stores the brine solution that feeds the electrolytic cell.",
    image: "/images/hydroscope-products/hydroscope-salt-solution-tank.webp",
    alt: "HydroScope salt solution tank unit installed in a water treatment plant"
  },
  {
    id: "electrochlorination-unit",
    name: "Electrochlorination Unit",
    description: "Generates sodium hypochlorite on site from salt, water and electricity.",
    image: "/images/hydroscope-products/hydroscope-electrochlorination-unit.webp",
    alt: "HydroScope electrochlorination unit generating sodium hypochlorite on site"
  },
  {
    id: "control-unit",
    name: "Control Unit",
    description: "Automated dosing control with IoT-enabled remote monitoring.",
    image: "/images/hydroscope-products/hydroscope-control-unit.webp",
    alt: "HydroScope control unit with automated dosing controls and status display"
  },
  {
    id: "water-quality-sensor",
    name: "Water Quality Sensor",
    description: "Continuous measurement of critical water-quality parameters.",
    image: "/images/hydroscope-products/hydroscope-water-quality-sensor.webp",
    alt: "HydroScope handheld water quality sensor displaying a live reading in a laboratory"
  }
];

export function HydroscopeProductLineup() {
  return (
    <section aria-labelledby="hydroscope-product-lineup-heading">
      <div className="mb-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-hydro-blue">
          The HydroScope system
        </p>
        <h3
          id="hydroscope-product-lineup-heading"
          className="mt-3 text-[clamp(26px,3vw,40px)] font-bold tracking-tighter text-hydro-ink"
        >
          Four units, one installation.
        </h3>
      </div>

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
              <h4 className="text-base font-extrabold leading-snug text-hydro-ink">{unit.name}</h4>
              <p className="mt-2 text-sm leading-6 text-hydro-muted">{unit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
