"use client";

import { Briefcase, Building2, HardHat, Landmark, Users, UsersRound } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ProfileCard } from "@/components/ui/profile-card";

/* Who a deployment answers to, and what each of them actually gets. The "gets"
   lines come from the HydroSure copy already in lib/content.ts - "Operators get
   site-level actions, engineers get diagnostics, district officials get reports
   and administrators get aggregate performance insights" - plus the dashboard
   feature list. No new capability is claimed here.
 *
 * Each entry can take an `image` instead of `Icon` once stakeholder photography
 * exists; the card renders either in the same square media slot. */
const stakeholders = [
  {
    id: "government",
    name: "Government",
    handle: "Policy and funding",
    meta: "Aggregate performance insight across schemes and districts.",
    image: "/images/stakeholders/government.webp",
    alt: "Senior government officials reviewing a district water-supply map during a planning meeting",
    Icon: Landmark
  },
  {
    id: "state-phed-rws",
    name: "State PHED / RWS",
    handle: "Network owner",
    meta: "Multi-site dashboard visibility, alerts and reports across the network.",
    image: "/images/stakeholders/state-phed-rws.webp",
    alt: "Engineers in a control room reviewing connected village water tanks on a live state-wide dashboard",
    Icon: Building2
  },
  {
    id: "district-administration",
    name: "District administration",
    handle: "Oversight",
    meta: "Downloadable reports and district-level status from one screen.",
    image: "/images/stakeholders/district-administration.webp",
    alt: "District officials reviewing water-quality reports beside a district monitoring dashboard",
    Icon: Briefcase
  },
  {
    id: "village-panchayat",
    name: "Village panchayat",
    handle: "Local ownership",
    meta: "Tank-level status and proof the village supply is being dosed.",
    image: "/images/stakeholders/village-panchayat.webp",
    alt: "HydroPure units installed beside a village overhead tank while two men review readings on a tablet",
    Icon: UsersRound
  },
  {
    id: "operator",
    name: "Operator",
    handle: "Day to day",
    meta: "Site-level actions, dosing status and salt refill prompts.",
    image: "/images/stakeholders/operator.webp",
    alt: "Water plant operator checking the HydroPure control panel beside the salt refill bin",
    Icon: HardHat
  },
  {
    id: "citizens",
    name: "Citizens",
    handle: "The reason for all of it",
    meta: "Safe drinking water, consistently disinfected at the tank.",
    image: "/images/stakeholders/citizens.webp",
    alt: "A village family filling vessels and bottles with treated water at a community tap stand",
    Icon: Users
  }
];

export function StakeholdersCarousel() {
  return (
    <section aria-labelledby="stakeholders-heading">
      <div className="mb-6 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-hydro-blue">Stakeholders</p>
          <h3
            id="stakeholders-heading"
            className="mt-3 text-[clamp(24px,2.4vw,34px)] font-normal leading-[1.12] tracking-[-0.03em] text-hydro-ink"
          >
            Everyone the water passes through.
          </h3>
        </div>
      </div>

      {/* px-14 on desktop keeps the overlaid arrows clear of the first and last
          card instead of sitting on top of them. */}
      <Carousel opts={{ align: "start", loop: true }} className="relative lg:px-14">
        <CarouselContent>
          {stakeholders.map((person) => (
            <CarouselItem key={person.id} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <ProfileCard
                  name={person.name}
                  handle={person.handle}
                  meta={person.meta}
                  image={person.image}
                  alt={person.alt}
                  /* Icon still feeds the small footer chip, and stands in if a
                     photo ever fails to resolve. */
                  Icon={person.Icon}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-lg:hidden" />
        <CarouselNext className="max-lg:hidden" />
      </Carousel>
    </section>
  );
}
