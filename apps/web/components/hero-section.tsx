import Image from "next/image";
import { Activity, Bell, Droplets, ShieldCheck, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./ui/container";

export function HeroSection({
  eyebrow = "HydroPure | HydroSense | HydroSure",
  title = "Smart Off-Grid Electrochlorination, Powered by Solar & IoT",
  subtitle = "Document-derived HYDROscope product platform for HydroPure electrochlorination, HydroSense sensing and HydroSure real-time monitoring.",
  primaryCtaLabel = "Explore solutions",
  primaryCtaUrl = "/solutions",
  secondaryCtaLabel = "Request demo",
  secondaryCtaUrl = "/contact"
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
}) {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[linear-gradient(135deg,#f8fcff_0%,#edf7ff_52%,#ffffff_100%)]">
      <div className="hydro-network absolute inset-0 -z-20 opacity-35 [mask-image:radial-gradient(circle_at_72%_35%,#000,transparent_60%)]" />
      <div className="absolute right-[-12%] top-[-18%] -z-10 h-[520px] w-[520px] rounded-full bg-[#d9f3ff] opacity-60 blur-3xl" />
      <Container className="grid min-h-[720px] grid-cols-[minmax(0,0.92fr)_minmax(520px,1.08fr)] items-center gap-12 py-16 max-lg:grid-cols-1 max-lg:text-center">
        <div>
          <span className="mb-5 inline-flex rounded-full border border-[#c8ddf4] bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-hydro-blue shadow-[0_12px_30px_rgba(18,88,182,0.08)]">
            {eyebrow}
          </span>
          <h1 className="m-0 max-w-3xl text-[clamp(44px,5.4vw,82px)] font-extrabold leading-[0.98] tracking-[-0.055em]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] text-[#3f4a5a] max-lg:mx-auto max-sm:text-sm">{subtitle}</p>
          <div className="mt-7 flex gap-3 max-lg:justify-center max-sm:flex-col">
            <Button href={primaryCtaUrl}>{primaryCtaLabel}</Button>
            <Button href={secondaryCtaUrl} variant="outline">
              {secondaryCtaLabel}
            </Button>
          </div>
          <div className="mt-8 grid max-w-[720px] grid-cols-3 gap-3 max-lg:mx-auto max-sm:grid-cols-1">
            {[
              ["HydroPure", "on-site electrochlorination", Droplets],
              ["HydroSense", "water quality sensing", Activity],
              ["HydroSure", "IoT monitoring and alerts", ShieldCheck]
            ].map(([cardTitle, text, Icon]) => (
              <article key={cardTitle as string} className="flex items-center gap-3 rounded-xl border border-[#d0dded] bg-white/75 p-3 text-left shadow-[0_8px_25px_rgba(70,100,130,.06)]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e8f3ff] text-hydro-blue">
                  <Icon aria-hidden="true" size={18} />
                </span>
                <div>
                  <strong className="block text-sm">{cardTitle as string}</strong>
                  <small className="text-xs text-hydro-muted">{text as string}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="relative min-h-[560px] max-lg:min-h-[520px] max-sm:min-h-[560px]">
          <div className="absolute inset-x-0 top-8 overflow-hidden rounded-[30px] border border-white/85 bg-white p-3 shadow-[0_34px_90px_rgba(9,36,76,.18)]">
            <Image
              src="/images/seo/hydropure-smart-chlorination-system-outdoor-utility-banner.webp"
              alt="HydroPure smart chlorination system installed at outdoor water utility site"
              width={1915}
              height={821}
              className="aspect-[1.45] w-full rounded-[24px] object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-4 left-0 w-[68%] rounded-[22px] bg-hydro-navy p-5 text-white shadow-[0_24px_58px_rgba(9,36,76,.25)] max-sm:w-full">
            <div className="mb-4 flex items-center justify-between">
              <strong>HydroSure monitoring</strong>
              <span className="flex items-center gap-2 text-xs text-[#cfe4ff]">
                <i className="h-2 w-2 rounded-full bg-[#5ed46a] shadow-[0_0_12px_#5ed46a]" /> Live
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {["Smart alerts", "AI insights", "Access control", "Feedback loop"].map((item) => (
                <div key={item} className="rounded-xl bg-white/10 p-3 text-xs font-bold text-[#cfe4ff]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-white/20 pt-4 text-xs font-bold">
              <Sun aria-hidden="true" size={16} /> Solar-ready and IoT-enabled
            </div>
          </div>
          <div className="absolute bottom-16 right-6 w-[46%] overflow-hidden rounded-[20px] border border-[#c8ddf4] bg-white p-3 shadow-[0_20px_52px_rgba(18,88,182,.16)] max-sm:hidden">
            <Image
              src="/images/seo/hydrosure-dashboard-control-unit-product-only-shot.webp"
              alt="HydroSure dashboard control unit with laptop and mobile app product only image"
              width={1672}
              height={941}
              className="rounded-2xl"
            />
          </div>
          <div className="absolute right-8 top-2 grid h-14 w-14 place-items-center rounded-full bg-white text-hydro-blue shadow-hydro">
            <Bell aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
