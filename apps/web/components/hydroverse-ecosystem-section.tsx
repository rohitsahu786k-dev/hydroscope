import Link from "next/link";
import { ArrowRight, Cloud, Droplets, Gauge, Headphones, Network, Settings, ShieldCheck, Waves } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Container } from "./ui/container";
import { trustPillars } from "@/lib/solutions-content";

/* The ecosystem flow, in the order water actually moves through the products:
   HydroPure treats it, HydroPilot moves it, HydroEdge tracks what is stored,
   HydroSense measures it on the way out, and HydroSure watches all of it. */
const chain = [
  { title: "HydroPure", text: "Automatically disinfects and ensures safe water", href: "/solutions/hydropure", Icon: Droplets },
  { title: "HydroPilot", text: "Automates valves and pumps across the network", href: "/solutions/other-iot-solutions#hydropilot", Icon: Settings },
  { title: "HydroEdge", text: "Tracks tank levels with IoT-enabled sensing", href: "/solutions/other-iot-solutions#hydroedge", Icon: Waves },
  { title: "HydroSense", text: "Measures water quality in real time", href: "/solutions/hydrosense", Icon: Gauge },
  { title: "HydroSure", text: "Monitors, analyzes and manages your entire network", href: "/solutions/hydrosure", Icon: Cloud }
];

const pillarIcons = [ShieldCheck, Cloud, Settings, Headphones];

export function HydroVerseEcosystemSection() {
  return (
    <section className="hydro-section bg-white">
      <Container>
        <SectionHeading
          eyebrow="Smart water grid ecosystem"
          title="HydroVerse is one Intelligent Ecosystem for Water Quality Monitoring, Disinfection & Control"
          text="Integrate intelligent water quality monitoring, automated electrochlorination, and AI-powered analytics and system control into a single platform for real-time visibility, safer water, and smarter operations."
        />

        <div className="rounded-2xl border border-hydro-line bg-[#f7fbff] p-7 max-sm:p-5">
          <p className="text-center text-[13px] font-extrabold uppercase tracking-[0.16em] text-hydro-blue">
            One connected ecosystem. Complete water management.
          </p>

          {/* On wide screens this reads left to right with arrows between the
              nodes; below lg it stacks and the arrows are dropped. */}
          <ol className="mt-7 flex items-stretch gap-3 max-lg:flex-col">
            {chain.map(({ title, text, href, Icon }, index) => (
              <li key={title} className="flex flex-1 items-center gap-3">
                <Link
                  href={href}
                  className="flex h-full flex-1 flex-col items-center gap-3 rounded-xl border border-hydro-line bg-white px-4 py-6 text-center transition hover:-translate-y-1 hover:border-hydro-blue"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#eaf3fd] text-hydro-blue">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-sm font-extrabold text-hydro-navy">{title}</span>
                  <span className="text-[12px] leading-5 text-hydro-muted">{text}</span>
                </Link>
                {index < chain.length - 1 ? (
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-hydro-blue max-lg:hidden" />
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-5 flex items-center gap-4 rounded-xl border border-hydro-line bg-white px-6 py-5 max-sm:flex-col max-sm:text-center">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#eaf3fd] text-hydro-blue">
              <Network aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <div>
              <p className="text-sm font-extrabold text-hydro-navy">All Connected. All Intelligent.</p>
              <p className="mt-1 text-[12.5px] leading-5 text-hydro-muted">
                Our solutions work seamlessly together to deliver smarter, safer and more efficient water management.
              </p>
            </div>
            {/* Solid rather than outlined: this is the one action in the
                section, and as an outline it read as secondary to the five
                product tiles beside it. */}
            <Link
              href="/solutions/hydroverse"
              className="ml-auto inline-flex min-h-12 shrink-0 items-center gap-2 rounded-lg bg-hydro-blue2 px-6 text-sm font-bold text-white shadow-[0_14px_30px_-14px_rgba(18,88,182,0.8)] transition hover:-translate-y-0.5 hover:bg-hydro-navy max-sm:ml-0 max-sm:w-full max-sm:justify-center"
            >
              Explore HydroVerse
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>

        <ul className="mt-5 grid grid-cols-4 divide-x divide-hydro-line rounded-2xl border border-hydro-line bg-white max-md:grid-cols-2 max-md:divide-x-0">
          {trustPillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? ShieldCheck;
            return (
              <li key={pillar.title} className="flex items-center gap-3 px-5 py-6 max-md:border-b max-md:border-hydro-line">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-hydro-blue" strokeWidth={1.7} />
                <div className="min-w-0">
                  <p className="text-[13px] font-extrabold text-hydro-navy">{pillar.title}</p>
                  <p className="mt-0.5 text-[12px] leading-4 text-hydro-muted">{pillar.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
