import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

/* The one place the HydroSure screen itself is shown at size. Swapping the
   screenshot is a single edit here. */
const DASHBOARD_IMAGE = "/images/hydrosure-dashboard/hydrosure-dashboard-full.webp";
const DASHBOARD_ALT =
  "HydroSure dashboard: tanks online, warnings, attention alerts, residual chlorine and water usage, with the assigned devices map, device analytics, chlorination data and seven-day trend charts";

export function HydroSureDashboardShowcase() {
  return (
    <section aria-label="HydroSure dashboard" className="overflow-hidden bg-[#f7fbff]">
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-hydro-blue">HydroSure</p>
            <h2 className="mt-3 text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.06] tracking-[-0.04em] text-hydro-ink">
              Your entire water network, on one screen.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-hydro-muted">
              Live device status, residual chlorine, dosing performance and water supplied - with alerts that reach
              you before a site visit would have.
            </p>
            <Link
              href="/solutions/hydrosure"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-hydro-blue px-5 text-sm font-bold text-hydro-blue transition hover:bg-hydro-blue hover:text-white"
            >
              Explore HydroSure
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        }
      >
        {/* object-contain, not cover: the screenshot is the content here, and a
            dashboard with its KPI row or its charts cropped away is worse than
            a little letterboxing against the white card. */}
        <Image
          src={DASHBOARD_IMAGE}
          alt={DASHBOARD_ALT}
          width={1672}
          height={941}
          loading="lazy"
          draggable={false}
          className="pointer-events-none mx-auto h-full w-full select-none rounded-2xl object-contain"
        />
      </ContainerScroll>
    </section>
  );
}
