import Image from "next/image";
import { MonitorCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import { Mockup } from "@/components/ui/mockup";

type DashboardHeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  /**
   * The screenshot shown in the mockup frame. To change it, overwrite the file at
   *   apps/web/public/images/hydrosure-dashboard/dashboard-realtime-overview.png
   * and keep width/height equal to that file's real pixel size - they reserve the
   * space before the image loads, so a mismatch reintroduces layout shift.
   */
  mockupImage?: { src: string; alt: string; width: number; height: number };
  className?: string;
};

export function HydroPureDashboardHero({
  eyebrow = "Real-time dashboard",
  title = "Live monitoring, alerts and multi-site visibility",
  description = "Every tank reports into one operating picture - residual chlorine, flow, device health and audit-ready reports, with no manual field checks.",
  primaryCta = { text: "Open the dashboard", href: "/dashboard-platform" },
  secondaryCta = { text: "Book a walkthrough", href: "/contact" },
  mockupImage = {
    src: "/images/hydrosure-dashboard/dashboard-realtime-overview.png",
    alt: "HydroScope dashboard showing tanks online, warnings, attention alerts, residual chlorine and water usage alongside the assigned devices map, device analytics and chlorination trend charts",
    width: 1890,
    height: 902
  },
  className
}: DashboardHeroProps) {
  return (
    <section
      aria-labelledby="realtime-dashboard-heading"
      className={cn(
        "relative rounded-[24px] border border-[#d7e8fa] bg-white text-hydro-ink",
        "px-4 py-12 md:py-16 lg:py-20",
        "overflow-hidden",
        className
      )}
    >
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 lg:gap-16">
        <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:gap-8">
          <p className="animate-appear inline-flex items-center gap-2 rounded-full bg-[#006edc] px-4 py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
            <MonitorCheck aria-hidden="true" size={14} />
            {eyebrow}
          </p>

          {/* Heading */}
          <h2
            id="realtime-dashboard-heading"
            className={cn(
              "animate-appear inline-block",
              "bg-gradient-to-b from-hydro-ink via-hydro-ink/90 to-hydro-muted",
              "bg-clip-text text-transparent",
              "text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
              "leading-[1.1] sm:leading-[1.1]",
              "max-w-[900px]"
            )}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className={cn(
              "animate-appear max-w-[580px] [animation-delay:150ms]",
              "text-base sm:text-lg",
              "text-hydro-muted",
              "font-medium"
            )}
          >
            {description}
          </p>

          {/* CTAs */}
          <div className="animate-appear relative z-10 flex flex-wrap justify-center gap-4 [animation-delay:300ms]">
            <Button href={primaryCta.href}>{primaryCta.text}</Button>
            <Button href={secondaryCta.href} variant="outline">
              {secondaryCta.text}
            </Button>
          </div>

          {/* Mockup */}
          <div className="relative w-full pt-6 sm:px-6 lg:px-8">
            <Mockup
              className={cn(
                "animate-appear [animation-delay:700ms]",
                "shadow-[0_0_50px_-12px_rgba(11,31,68,0.28)]",
                "border-[#006edc]/10"
              )}
            >
              <Image
                src={mockupImage.src}
                alt={mockupImage.alt}
                width={mockupImage.width}
                height={mockupImage.height}
                sizes="(min-width: 1280px) 1200px, 100vw"
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </Mockup>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Glow variant="above" className="animate-appear-zoom [animation-delay:1000ms]" />
      </div>
    </section>
  );
}
