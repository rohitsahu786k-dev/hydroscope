import Image from "next/image";
import { Activity, ArrowRight, Bell, ChevronDown, MapPin } from "lucide-react";

/* The physical scheme behind HydroVerse: what a customer actually installs, in
 * the order the water moves through it.
 *
 * This replaces a single generated banner that showed an electrochlorinator we
 * do not sell and hid every other product behind it - the same failure the
 * HydroPure diagram hit, so it takes the same fix. Each stage carries the
 * approved product photograph, and every label is markup rather than baked-in
 * artwork, so no name is left to an illustrator to spell.
 *
 * The reservoir is a stage in its own right even though we do not sell it: it
 * is what puts HydroEdge and HydroSense in the right place, and without it the
 * run reads as five products rather than one scheme. */
const stages = [
  {
    step: "01",
    tag: "HydroPure",
    title: "Disinfection at the source",
    body: "Treated water arrives from the plant and feeds HydroPure, which generates sodium hypochlorite on site and doses it to hold the target residual before anything enters the network.",
    image: {
      src: "/images/hydroscope-products/hydropure-hp-100.webp",
      alt: "A HydroPure electrochlorinator installed beside process pipework"
    }
  },
  {
    step: "02",
    tag: "HydroPilot",
    title: "The line opens itself",
    body: "HydroPilot drives the motorised valve on the outgoing main and opens it on schedule or on demand. The inline flow meter records every litre that passes.",
    image: {
      src: "/images/solutions/hydropilot-automatic-valve-and-flow-meter-assembly.webp",
      alt: "An inline flow meter and motorised valve assembly on a distribution main"
    }
  },
  {
    step: "03",
    tag: "Elevated Service Reservoir",
    title: "Chlorinated water is stored",
    body: "The main runs straight to the ESR, where the dosed water is held at residual until the scheme draws on it.",
    image: {
      src: "/images/about/industry-rural-water-scheme-village-overhead-tank.webp",
      alt: "An elevated service reservoir standing over the village it supplies"
    }
  },
  {
    step: "04",
    tag: "HydroEdge",
    title: "Level, read off the tank",
    body: "A HydroEdge probe hangs inside the reservoir and the module on the tank reports how full it is, so a refill is called before the tank ever runs dry.",
    image: {
      src: "/images/solutions/hydroedge-water-tank-level-module-installed.webp",
      alt: "A HydroEdge level module mounted on a water tank, showing the level as a percentage"
    }
  },
  {
    step: "05",
    tag: "HydroSense",
    title: "Quality checked before the tap",
    body: "Distribution mains carry the water back out of the ESR. A HydroSense sensor sits on each branch and reads the parameters on the way to every home.",
    image: {
      src: "/images/hydroscope-products/hydrosense-water-quality-sensor.webp",
      alt: "A HydroSense multi-parameter water quality sensor"
    }
  }
] as const;

/* What HydroSure reads off the five stages above. */
const telemetry = [
  { label: "Live readings", icon: Activity },
  { label: "Alarms", icon: Bell },
  { label: "Every device on one map", icon: MapPin }
];

function StageCard({ stage }: { stage: (typeof stages)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-hydro-line bg-white p-5 shadow-[0_16px_38px_-30px_rgba(9,36,76,0.55)]">
      {/* A ratio rather than a fixed height, so all five photographs are the
          same shape at every breakpoint, and object-cover so each fills its
          frame edge to edge instead of floating on a coloured backing. */}
      <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-xl bg-hydro-soft">
        <Image
          src={stage.image.src}
          alt={stage.image.alt}
          fill
          sizes="(min-width: 1280px) 18vw, (min-width: 640px) 44vw, 88vw"
          className="object-cover"
        />
      </div>

      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-hydro-blue2">
        Step {stage.step} &middot; {stage.tag}
      </span>
      <h3 className="mt-1.5 text-lg font-bold leading-tight text-hydro-navy">{stage.title}</h3>
      <p className="mt-2 text-sm leading-6 text-hydro-muted">{stage.body}</p>
    </div>
  );
}

export function HydroVerseSchemeDiagram() {
  return (
    <figure className="m-0">
      {/* The arrows are decoration: the stages are numbered and in document
          order, so the flow survives without them. */}
      <ol className="grid list-none grid-cols-1 gap-x-3 gap-y-9 p-0 sm:grid-cols-2 xl:grid-cols-5">
        {stages.map((stage, index) => (
          <li key={stage.step} className="relative flex">
            <StageCard stage={stage} />

            {index < stages.length - 1 ? (
              <>
                {/* Between columns on the wide grid... */}
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-hydro-blue2 text-white shadow-[0_6px_16px_-6px_rgba(18,88,182,0.9)] xl:grid"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                </span>
                {/* ...and between rows once the grid has wrapped, where the
                    next card is below rather than beside. */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-9 left-1/2 z-10 grid h-7 w-7 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-hydro-blue2 text-white shadow-[0_6px_16px_-6px_rgba(18,88,182,0.9)] xl:hidden"
                >
                  <ChevronDown className="h-4 w-4" strokeWidth={2.4} />
                </span>
              </>
            ) : null}
          </li>
        ))}
      </ol>

      {/* HydroSure reads all five stages rather than following any one of them,
          so it sits under the run on its own rail instead of as a sixth card. */}
      <div className="mt-9 rounded-2xl border border-dashed border-hydro-blue2/40 bg-[#f4f9ff] p-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
          <div className="min-w-[260px] flex-1">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-hydro-blue2">
              Across every stage &middot; HydroSure
            </span>
            <h3 className="mt-1.5 text-lg font-bold leading-tight text-hydro-navy">
              One dashboard over the whole scheme
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-hydro-muted">
              Dosing, flow, tank level and water quality all report to HydroSure, so an operator can see the entire
              ecosystem - and act on it - without a site visit. Buy the products together and they arrive already
              talking to one another.
            </p>

            <ul className="mt-4 flex list-none flex-wrap gap-2.5 p-0">
              {telemetry.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-hydro-line bg-white px-4 py-2 text-[13px] font-bold text-hydro-navy"
                >
                  <Icon className="h-4 w-4 text-hydro-blue2" strokeWidth={1.8} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[16/9] w-full max-w-md overflow-hidden rounded-xl border border-hydro-line bg-hydro-soft lg:w-[38%]">
            <Image
              src="/images/hydrosure-dashboard/hydrosure-dashboard-cinematic.webp"
              alt="The HydroSure dashboard showing devices, water quality and flow for a deployment site"
              fill
              sizes="(min-width: 1024px) 38vw, 88vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </figure>
  );
}
