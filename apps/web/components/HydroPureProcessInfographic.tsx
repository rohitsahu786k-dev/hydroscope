import Image from "next/image";
import {
  Cloud,
  Eye,
  Settings2,
  ShieldCheck,
  TriangleAlert,
  Users,
  type LucideIcon
} from "lucide-react";

type FlowStep = [label: string, centerX: number];
type FlowNote = [label: string, icon: LucideIcon];

// centerX is the % offset of each illustrated circle inside its strip image,
// measured from the source artwork - keep in sync if the strips are re-cropped.
const manualSteps: FlowStep[] = [
  ["Source", 8.52],
  ["Treatment plant", 27.68],
  ["Village tank", 47.25],
  ["Manual chlorination", 68.68],
  ["Homes", 90.45]
];

const manualNotes: FlowNote[] = [
  ["Irregular dosing", TriangleAlert],
  ["No real-time monitoring", TriangleAlert],
  ["Over/under dosing risk", TriangleAlert]
];

const solutionSteps: FlowStep[] = [
  ["Water source", 7.49],
  ["HydroPure unit", 23.63],
  ["Automatic chlorination", 41.21],
  ["Sensors and monitoring", 57.97],
  ["Cloud dashboard", 75.27],
  ["Safe drinking water", 91.48]
];

const solutionNotes: FlowNote[] = [
  ["Accurate dosing every time", ShieldCheck],
  ["Automated chlorination", Settings2],
  ["Real-time monitoring", Eye],
  ["Cloud-based visibility", Cloud],
  ["Safe, reliable drinking water", Users]
];

const flowImages = {
  manual: {
    src: "/images/hydropure-infographic/hydropure-manual-process-flow.webp",
    alt: "Water flowing through source, treatment plant, village tank and manual chlorination before reaching homes",
    width: 1456,
    height: 160
  },
  solution: {
    src: "/images/hydropure-infographic/hydropure-automated-process-flow.webp",
    alt: "Water flowing through the HydroPure unit, automatic chlorination, sensors and cloud dashboard to safe drinking water",
    width: 1456,
    height: 158
  }
};

type FlowPanelProps = {
  eyebrow: string;
  title: string;
  steps: FlowStep[];
  notes: FlowNote[];
  tone: "manual" | "solution";
};

function FlowPanel({ eyebrow, title, steps, notes, tone }: FlowPanelProps) {
  const isManual = tone === "manual";
  const accentText = isManual ? "text-[#d64343]" : "text-hydro-blue";
  const badge = isManual ? "bg-[#d64343]" : "bg-hydro-blue";
  const noteWrap = isManual ? "bg-[#fff7f6]" : "bg-[#f4f9ff]";
  const noteIcon = isManual ? "text-[#d64343]" : "text-hydro-blue";
  const flow = isManual ? flowImages.manual : flowImages.solution;

  return (
    // min-w-0 lets this grid item shrink below the scroll track's min-content width,
    // so the flow row scrolls internally instead of widening the page.
    <div className="min-w-0 rounded-[14px] bg-white p-5 shadow-[0_18px_54px_rgba(35,69,111,0.08)] sm:p-7 lg:p-9">
      <p className={`text-[11px] font-extrabold uppercase tracking-[0.18em] ${accentText}`}>{eyebrow}</p>
      <h3 className="mt-3 max-w-3xl text-[clamp(22px,2.5vw,34px)] font-extrabold leading-[1.12] tracking-[-0.04em] text-hydro-ink">
        {title}
      </h3>

      <div className="mt-7 -mx-5 overflow-x-auto px-5 sm:-mx-7 sm:px-7 lg:mx-0 lg:overflow-visible lg:px-0">
        <div className="relative min-w-[860px] lg:min-w-0">
          <ol className="relative h-[62px]">
            {steps.map(([label, centerX], index) => (
              <li
                key={label}
                className="absolute top-0 flex w-[136px] -translate-x-1/2 flex-col items-center text-center"
                style={{ left: `${centerX}%` }}
              >
                <span className={`grid h-7 w-7 place-items-center rounded-full text-[10px] font-extrabold text-white ${badge}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-[13px] font-bold leading-tight text-hydro-ink">{label}</p>
              </li>
            ))}
          </ol>

          <Image
            src={flow.src}
            alt={flow.alt}
            width={flow.width}
            height={flow.height}
            className="mt-1 h-auto w-full"
            sizes="(min-width: 1024px) 1100px, 860px"
          />
        </div>
      </div>

      <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {notes.map(([label, Icon]) => (
          <li
            key={label}
            className={`flex items-center gap-3 rounded-md px-4 py-3 text-sm font-bold leading-snug text-hydro-ink ${noteWrap}`}
          >
            <Icon size={18} strokeWidth={1.9} className={`flex-none ${noteIcon}`} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HydroPureProcessInfographic() {
  return (
    <section id="process-infographic" className="mt-8 grid gap-5 scroll-mt-28">
      <FlowPanel
        eyebrow="Current process: manual"
        title="Irregular dosing, over/under dosing, no monitoring and health risk"
        steps={manualSteps}
        notes={manualNotes}
        tone="manual"
      />
      <FlowPanel
        eyebrow="The HydroPure solution"
        title="Automated, intelligent and reliable chlorination workflow"
        steps={solutionSteps}
        notes={solutionNotes}
        tone="solution"
      />
    </section>
  );
}
