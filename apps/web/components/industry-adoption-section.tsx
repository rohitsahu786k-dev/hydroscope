"use client";

import {
  Building,
  Building2,
  Factory,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Milk,
  Pill,
  Shirt,
  Snowflake,
  Sprout,
  Waves
} from "lucide-react";
import { Logos3, type Logo } from "@/components/ui/logos3";

/* The sectors HydroPure is deployed in. Every entry here is a segment this site
   already claims in lib/content.ts (solutions sectors and the industrial
   solution's applications list) - nothing invented.
 *
 * These are categories, not named customers, so each shows a Lucide icon plus
 * its label. To use a photo instead, drop the file in
 *   public/images/hydroscope-industries/
 * and add `image: "/images/hydroscope-industries/<file>.webp"` to that entry -
 * it renders in the same round slot, so nothing else changes. Keep `Icon` as
 * the fallback for entries that have no photo yet. */
const industries: Logo[] = [
  { id: "municipal-water-boards", description: "Municipal water boards", Icon: Landmark },
  { id: "phed-and-smart-cities", description: "State PHED and smart cities", Icon: Building2 },
  { id: "rural-water-supply", description: "Rural water supply schemes", Icon: Sprout },
  { id: "residential-communities", description: "Residential communities", Icon: Building },
  { id: "apartment-complexes", description: "Apartment complexes", Icon: Building2 },
  { id: "healthcare-facilities", description: "Healthcare facilities", Icon: HeartPulse },
  { id: "schools-and-campuses", description: "Schools and campuses", Icon: GraduationCap },
  { id: "food-and-beverage-dairy", description: "Food and beverage, dairy", Icon: Milk },
  { id: "pharmaceutical-manufacturing", description: "Pharmaceutical manufacturing", Icon: Pill },
  { id: "hotels-and-swimming-pools", description: "Hotels and swimming pools", Icon: Hotel },
  { id: "cooling-water-systems", description: "Cooling water systems", Icon: Snowflake },
  { id: "wastewater-treatment-plants", description: "Wastewater treatment plants", Icon: Waves },
  { id: "textile-pulp-and-paper", description: "Textile, pulp and paper", Icon: Shirt },
  { id: "process-water-for-industry", description: "Process water for industry", Icon: FlaskConical },
  { id: "industrial-plants", description: "Industrial plants", Icon: Factory }
];

export function IndustryAdoptionSection() {
  return <Logos3 eyebrow="Where HydroPure runs" heading="Industry adoption" logos={industries} />;
}
