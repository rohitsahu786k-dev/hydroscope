"use client";

import { Building2, CircuitBoard, Droplets, Gauge, MonitorCheck, SlidersHorizontal, Zap } from "lucide-react";
import { ServiceCarousel, type Service } from "@/components/ui/services-card";

/* The icons are React components, so this data has to live on the client - a server
   component cannot serialise them across the boundary as props. Edit the copy here. */
const keyFeatures: Service[] = [
  {
    number: "001",
    title: "On-site chlorine generation",
    description:
      "Produces sodium hypochlorite safely and efficiently using only salt, water and electricity, eliminating the need for hazardous chlorine storage.",
    icon: Droplets,
    gradient: "from-[#eef6ff] to-[#d8e9ff]"
  },
  {
    number: "002",
    title: "Fully automated operation",
    description:
      "Microcontroller-based intelligent control with optional IoT-enabled remote monitoring for seamless hands-free performance.",
    icon: CircuitBoard,
    gradient: "from-[#ecf7fc] to-[#d3ecf8]"
  },
  {
    number: "003",
    title: "Self-cleaning electrolyzer",
    description:
      "Reduces maintenance and downtime while extending the lifespan of critical electrochemical components.",
    icon: SlidersHorizontal,
    gradient: "from-[#f0f6ff] to-[#dce7fb]"
  },
  {
    number: "004",
    title: "Compact modular design",
    description:
      "Skid-mounted and customizable modules allow easy installation in confined or distributed environments.",
    icon: Building2,
    gradient: "from-[#eaf4ff] to-[#d5e6fa]"
  },
  {
    number: "005",
    title: "Precision dosing technology",
    description: "Flow-proportional dosing ensures accurate disinfection across variable water flows.",
    icon: Gauge,
    gradient: "from-[#edf8fb] to-[#d6eef6]"
  },
  {
    number: "006",
    title: "Online chlorine analyzer",
    description: "Enables continuous measurement and feedback for consistent chlorine levels.",
    icon: MonitorCheck,
    gradient: "from-[#f1f7ff] to-[#dbe8fd]"
  },
  {
    number: "007",
    title: "Energy-efficient operation",
    description:
      "Optimized electrode design ensures low power consumption without compromising performance.",
    icon: Zap,
    gradient: "from-[#eaf6fa] to-[#d2ebf5]"
  }
];

export function KeyFeaturesCarousel() {
  return <ServiceCarousel services={keyFeatures} />;
}
