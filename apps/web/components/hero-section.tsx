import Image from "next/image";
import { Activity, Clock3, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./ui/container";

type HeroSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
};

const highlights = [
  { title: "100% Autonomous", subtitle: "Designed for complete autonomy", icon: ShieldCheck },
  { title: "Real time", subtitle: "Monitoring with live insights", icon: Activity },
  { title: "24/7 Operation", subtitle: "Engineered for reliability", icon: Clock3 }
];

export function HeroSection(_: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7fbff_0%,#edf6ff_48%,#dbeeff_100%)] py-16 max-sm:py-10">
      <div className="hydro-network absolute inset-0 opacity-[0.08]" />
      <Container className="relative grid min-h-[620px] grid-cols-[1.05fr_.95fr] items-center gap-10 max-lg:grid-cols-1 max-lg:pt-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">AI Driven Technologies for Safe Water</span>
          <h1 className="mt-5 max-w-3xl text-[clamp(46px,6vw,84px)] font-normal leading-[.96] tracking-[-0.055em] text-hydro-ink">
            Empowering. <span className="text-hydro-blue">Smarter Water Management.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hydro-muted">
            We deliver next-generation IoT-enabled, fully automated water management solutions and AI-powered intelligence for utilities, industries and communities—making water systems safer, smarter and more sustainable.
          </p>
          <Button href="/#solutions" className="mt-8">Explore Solutions</Button>

          <div className="mt-10 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-white/90 bg-white/75 p-4 shadow-hydro backdrop-blur-sm">
                  <Icon size={20} className="text-hydro-blue" aria-hidden="true" />
                  <h2 className="mt-3 text-base font-semibold text-hydro-ink">{item.title}</h2>
                  <p className="mt-1 text-xs leading-5 text-hydro-muted">{item.subtitle}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[520px] max-sm:min-h-[430px]">
          <div className="absolute inset-8 rounded-[42px] bg-white/45 blur-2xl" />
          <Image
            src="/images/hydroscope-products/hydropure-hp-100.webp"
            alt="HydroPure HP-100 electrochlorinator for automated water disinfection"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-contain object-center drop-shadow-[0_35px_45px_rgba(20,55,110,.22)]"
          />
          <div className="absolute right-0 top-8 w-[42%] rounded-3xl border border-white/80 bg-[#102a64]/95 p-5 text-white shadow-2xl backdrop-blur-xl max-sm:w-[52%]">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#bde8ff]">Real-Time Water Intelligence</p>
            <div className="mt-5 h-24 rounded-xl bg-[linear-gradient(180deg,rgba(72,176,255,.24),rgba(72,176,255,.03))] p-3">
              <div className="h-full rounded-lg border border-white/10 bg-[radial-gradient(circle_at_80%_25%,#68d5ff_0_3px,transparent_4px),linear-gradient(135deg,transparent_0_34%,#56b7ff_35%_37%,transparent_38%_55%,#71d5d0_56%_58%,transparent_59%)]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div><strong className="block text-lg">85</strong><span className="text-[9px] text-[#bde8ff]">Quality</span></div>
              <div><strong className="block text-lg">128</strong><span className="text-[9px] text-[#bde8ff]">Devices</span></div>
              <div><strong className="block text-lg">1m</strong><span className="text-[9px] text-[#bde8ff]">Update</span></div>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 w-[34%] rounded-3xl border border-white/90 bg-white/90 p-4 shadow-xl">
            <Image src="/images/hydroscope-products/hydrosense-water-quality-sensor.webp" alt="HydroSense water quality sensor" width={280} height={220} className="h-auto w-full object-contain" />
            <p className="mt-2 text-center text-xs font-semibold text-hydro-ink">HydroSense Live Monitoring</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
