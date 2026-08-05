"use client";

import { Logos3, type Logo } from "@/components/ui/logos3";

/* The sectors HydroPure is deployed in. Every entry here is a segment this site
   already claims in lib/content.ts (solutions sectors and the industrial
   solution's applications list) - nothing invented.
 *
 * Each is a photograph with its name set into a white scrim along the bottom
 * edge, rendered by the Logos3 "photo" variant. `description` is both the
 * caption and the image's alt text, so a sector cannot end up captioned one way
 * and described another. */
const industries: Logo[] = [
  {
    id: "municipal-water-boards",
    description: "Municipal water boards",
    image: "/images/hydroscope-industries/municipal-water-boards-treatment-facility.webp"
  },
  {
    id: "phed-and-smart-cities",
    description: "State PHED and smart cities",
    image: "/images/hydroscope-industries/state-phed-smart-cities-water-infrastructure.webp"
  },
  {
    id: "rural-water-supply",
    description: "Rural water supply schemes",
    image: "/images/hydroscope-industries/rural-water-supply-scheme-village.webp"
  },
  {
    id: "residential-communities",
    description: "Residential communities",
    image: "/images/hydroscope-industries/residential-communities-water-infrastructure.webp"
  },
  {
    id: "apartment-complexes",
    description: "Apartment complexes",
    image: "/images/hydroscope-industries/apartment-complexes-water-infrastructure.webp"
  },
  {
    id: "healthcare-facilities",
    description: "Healthcare facilities",
    image: "/images/hydroscope-industries/healthcare-facilities-water-infrastructure.webp"
  },
  {
    id: "schools-and-campuses",
    description: "Schools and campuses",
    image: "/images/hydroscope-industries/schools-campuses-water-infrastructure.webp"
  },
  {
    id: "food-and-beverage-dairy",
    description: "Food and beverage, dairy",
    image: "/images/hydroscope-industries/food-beverage-dairy-processing-facility.webp"
  },
  {
    id: "pharmaceutical-manufacturing",
    description: "Pharmaceutical manufacturing",
    image: "/images/hydroscope-industries/pharmaceutical-manufacturing-cleanroom.webp"
  },
  {
    id: "hotels-and-swimming-pools",
    description: "Hotels and swimming pools",
    image: "/images/hydroscope-industries/hotels-swimming-pools-luxury-environment.webp"
  },
  {
    id: "wastewater-treatment-plants",
    description: "Wastewater treatment plants",
    image: "/images/hydroscope-industries/wastewater-treatment-plant-environment.webp"
  },
  {
    id: "textile-pulp-and-paper",
    description: "Textile, pulp and paper",
    image: "/images/hydroscope-industries/textile-pulp-paper-manufacturing-environment.webp"
  },
  {
    id: "process-water-for-industry",
    description: "Process water for industry",
    image: "/images/hydroscope-industries/process-water-for-industry-infrastructure.webp"
  },
  {
    id: "industrial-plants",
    description: "Industrial plants",
    image: "/images/hydroscope-industries/industrial-plants-water-infrastructure-cinematic.webp"
  }
];

export function IndustryAdoptionSection() {
  return (
    <Logos3
      variant="photo"
      /* Still by default. Fourteen large photographs drifting continuously
         pulled the eye away from the rest of the page; the arrows and dragging
         still move it, on the visitor's own initiative. */
      autoScroll={false}
      /* Not "Where HydroPure runs": on the homepage this row covers the whole
         range, not one product. */
      eyebrow="Reliable water intelligence across every sector"
      heading="Industry adoption"
      logos={industries}
    />
  );
}
