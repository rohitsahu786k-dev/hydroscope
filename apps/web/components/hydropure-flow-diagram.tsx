import Image from "next/image";
import { Activity, ArrowRight, Bell, ChevronDown, FileText } from "lucide-react";

/* Where HydroPure sits in a scheme, from the source to the tap.
 *
 * This used to be a single generated illustration. The artwork was only ever
 * supplied as a sketch of the idea, and its labels came out as garbled
 * lookalike words - "RAM WATER SOURCE", "OPTINIZED CHLARINEDOGNG". Baked-in
 * text also cannot be translated, searched, read by a screen reader or resized,
 * and it goes blurry on a phone. So the stages are markup.
 *
 * Every stage carries a photograph, not two photographs and two icons: mixing
 * the two made the row look like two finished cards and two waiting for art.
 * They share one aspect ratio and one fit, so all four crop to the same shape
 * whatever their sources measure. */

const stages = [
  {
    step: "01",
    title: "Raw Water Source",
    body: "Raw water from the source feeds the electrochlorinator for on-site chlorine generation.",
    image: {
      src: "/images/hydrosense/hydrosense-water-distribution-network-valve-chamber.webp",
      alt: "A large water main running through a valve chamber, feeding the scheme"
    }
  },
  {
    step: "02",
    title: "HydroPure",
    body: "Generates sodium hypochlorite on site from salt, water and electricity, then doses it to achieve the target chlorine residual.",
    image: {
      src: "/images/hydroscope-products/hydropure-hp-100.webp",
      alt: "A HydroPure electrochlorinator standing beside process pipework in a treatment hall"
    }
  },
  {
    step: "03",
    title: "Elevated Service Reservoir (ESR)",
    body: "Chlorinated water is stored in the ESR, where the target chlorine residual is maintained before distribution.",
    image: {
      src: "/images/about/industry-rural-water-scheme-village-overhead-tank.webp",
      alt: "An elevated service reservoir standing over a village it supplies"
    }
  },
  {
    step: "04",
    title: "Distribution to Homes",
    body: "Distribution mains deliver safe chlorinated water from the ESR to every household on the scheme.",
    image: {
      src: "/images/hydroscope-industries/residential-communities-water-infrastructure.webp",
      alt: "Houses on a residential scheme served by the distribution network"
    }
  }
] as const;

/* What HydroSure reads off the four stages above. */
const telemetry = [
  { label: "Analytics", icon: Activity },
  { label: "Alarms", icon: Bell },
  { label: "Reports", icon: FileText }
];

function StageCard({ stage }: { stage: (typeof stages)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-hydro-line bg-white p-5 shadow-[0_16px_38px_-30px_rgba(9,36,76,0.55)]">
      {/* A ratio rather than a fixed height, so the four photographs are the
          same shape at every breakpoint, and object-cover so each fills its
          frame edge to edge instead of floating on a coloured backing. */}
      <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-xl bg-hydro-soft">
        <Image
          src={stage.image.src}
          alt={stage.image.alt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 88vw"
          className="object-cover"
        />
      </div>

      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-hydro-blue2">
        Step {stage.step}
      </span>
      <h3 className="mt-1.5 text-lg font-bold leading-tight text-hydro-navy">{stage.title}</h3>
      <p className="mt-2 text-sm leading-6 text-hydro-muted">{stage.body}</p>
    </div>
  );
}

export function HydroPureFlowDiagram() {
  return (
    <figure className="m-0">
      {/* The arrows are decoration: the stages are numbered and in document
          order, so the flow survives without them. */}
      <ol className="grid list-none grid-cols-1 gap-x-3 gap-y-9 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <li key={stage.step} className="relative flex">
            <StageCard stage={stage} />

            {index < stages.length - 1 ? (
              <>
                {/* Between columns on the wide grid... */}
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-hydro-blue2 text-white shadow-[0_6px_16px_-6px_rgba(18,88,182,0.9)] lg:grid"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                </span>
                {/* ...and between rows once the grid has wrapped, where the
                    next card is below rather than beside. */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-9 left-1/2 z-10 grid h-7 w-7 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-hydro-blue2 text-white shadow-[0_6px_16px_-6px_rgba(18,88,182,0.9)] lg:hidden"
                >
                  <ChevronDown className="h-4 w-4" strokeWidth={2.4} />
                </span>
              </>
            ) : null}
          </li>
        ))}
      </ol>

      {/* HydroSure reads all four stages rather than following any one of them,
          so it sits under the row on its own rail instead of as a fifth card. */}
      <div className="relative mt-9 rounded-2xl border border-dashed border-hydro-blue2/40 bg-[#f4f9ff] p-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div className="min-w-[260px] flex-1">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-hydro-blue2">
              Across every stage
            </span>
            <h3 className="mt-1.5 text-lg font-bold leading-tight text-hydro-navy">
              Provides end-to-end visibility
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-hydro-muted">
              HydroSure brings together data from every stage of the treatment process - including flow, residual
              chlorine, dosing, and device health - enabling operators to monitor performance and make adjustments
              remotely without a site visit.
            </p>
          </div>

          <ul className="flex list-none flex-wrap gap-2.5 p-0">
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
      </div>
    </figure>
  );
}
