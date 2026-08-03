import type { Application, BlogPost, CaseStudy, Faq, Product, Solution } from "@hydroscope/types";

const now = "2026-07-27T00:00:00.000Z";

/** Faq plus an optional category chip. Assignable anywhere a `Faq` is expected. */
export type FaqEntry = Faq & { meta?: string };

export const faqs: FaqEntry[] = [
  {
    question: "What does HydroPure do?",
    answer:
      "HydroPure is an IoT-enabled electrochlorinator that generates sodium hypochlorite on site using salt, water and electricity, then supports automatic dosing and remote monitoring.",
    meta: "Product"
  },
  {
    question: "Which products are part of the Hydroscope ecosystem?",
    answer:
      "HydroPure handles on-site disinfection, HydroSense measures water-quality parameters and HydroSure gives teams live dashboards, alerts, reports and multi-site visibility.",
    meta: "Ecosystem"
  },
  {
    question: "Can Hydroscope support rural and off-grid sites?",
    answer:
      "Yes. The HydroPure content positions the system for village overhead tanks, rural schemes, solar-compatible operation, low maintenance and remote monitoring.",
    meta: "Deployment"
  },
  {
    question: "How is chlorine produced without storing hazardous chemicals?",
    answer:
      "The electrolyzer passes current through a brine solution to generate 0.6%-0.8% sodium hypochlorite on demand. Because the disinfectant is made where it is dosed, there is no chlorine gas cylinder or bleach stock to transport, store or handle.",
    meta: "Process"
  },
  {
    question: "What does a village tank installation involve?",
    answer:
      "A skid-mounted HydroPure unit sits beside the tank with a brine tank, an injection line into the outgoing main and the sensing layer. The units are plug and play, solar compatible and sized to the tank, so most sites need no civil rework.",
    meta: "Installation"
  },
  {
    question: "How much maintenance does the system need?",
    answer:
      "The self-cleaning electrolyzer keeps scaling down and extends electrode life, so routine attention is mostly refilling salt and periodic checks. Device health and faults surface as dashboard alerts rather than waiting for a site visit.",
    meta: "Maintenance"
  },
  {
    question: "What can an operator see on the dashboard?",
    answer:
      "Residual chlorine, water usage, flow, dosing status and device health for every connected tank, plus warnings, attention alerts, downloadable reports and multi-site visibility from one screen.",
    meta: "Monitoring"
  },
  {
    question: "Which HydroPure model matches our daily water volume?",
    answer:
      "The range runs from HP-100 at 100 g/day, which covers roughly 1,00,000 litres per day, up to HP-2000 at 2000 g/day for about 20,00,000 litres per day. Those figures assume a 16-hour runtime, though the system can run continuously for 24 hours.",
    meta: "Capacity"
  }
];

export const products: Product[] = [
  {
    id: "hydropure-intelligent-electrochlorinator",
    title: "HydroPure Electrochlorinator",
    slug: "hydropure-intelligent-electrochlorinator",
    subtitle: "On-site sodium hypochlorite generation with automatic dosing",
    category: "Electrochlorinator",
    excerpt:
      "HydroPure is an IoT-enabled electrochlorinator for on-site sodium hypochlorite generation, automatic dosing and real-time water monitoring.",
    body:
      "HydroPure uses salt, water and electricity to support reliable water disinfection without routine dependency on transported chlorine chemicals. A brine solution passes through an electrolytic cell, direct current triggers electrolysis and the generated sodium hypochlorite is stored and dosed into the water system through dosing pumps.",
    status: "published",
    featuredImage: "/images/hydroscope-products/hydropure-hp-200-500-1000.webp",
    gallery: [
      "/images/hydroscope-products/hydropure-hp-100.webp",
      "/images/hydroscope-products/hydropure-hp-1600-2000.webp",
      "/images/seo/hydropure-electrochlorinator-product-only-outdoor-shot.webp",
      "/images/seo/hydropure-clean-front-product-shot-solar-water-tank.webp",
      "/images/seo/hydropure-electrochlorinator-feature-marketing-image.webp",
      "/images/seo/hydropure-modular-chlorination-unit-village-water-tank.webp"
    ],
    features: [
      "On-site chlorine generation",
      "Fully automated operation",
      "Self-cleaning electrolyser",
      "Precision dosing technology",
      "Online chlorine analyzer",
      "PLC and SCADA integration",
      "IoT-enabled monitoring",
      "Solar-compatible operation",
      "Compact modular design"
    ],
    applications: [
      "Village tanks",
      "Municipal supply",
      "Residential communities",
      "Healthcare facilities",
      "Hotels and swimming pools",
      "Food and beverage units",
      "Cooling water systems",
      "Wastewater treatment"
    ],
    parameters: [
      "HP-100: small village tanks, compact institutions and low-demand sites",
      "HP-200: medium-demand sites needing higher chlorine output",
      "HP-500: larger village, residential and institutional applications",
      "HP-1000: high-volume municipal or campus-level water systems",
      "HP-2000: large water-supply schemes and multi-site infrastructure projects"
    ],
    faqs,
    seo: {
      metaTitle: "HydroPure Electrochlorinator | On-Site Sodium Hypochlorite Generator",
      metaDescription:
        "HydroPure is an IoT-enabled electrochlorinator for on-site sodium hypochlorite generation, automatic dosing and real-time water monitoring.",
      focusKeywords: ["on-site sodium hypochlorite generator", "electrochlorination system", "water chlorination system"]
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "hydrosense-water-quality-sensor",
    title: "HydroSense Water Quality Sensor",
    slug: "hydrosense-water-quality-sensor",
    subtitle: "Real-time monitoring for critical water-quality parameters",
    category: "Sensor",
    excerpt:
      "HydroSense monitors active chlorine, pH, conductivity, TDS and temperature for better water-quality visibility.",
    body:
      "HydroSense is a water-quality sensing platform for real-time monitoring of critical parameters. It supports better decisions by reducing dependency on delayed manual checks and creates a stronger data foundation for reports, alerts and preventive action.",
    status: "published",
    featuredImage: "/images/hydroscope-products/hydrosense-water-quality-sensor.webp",
    gallery: [
      "/images/seo/hydrosense-water-quality-sensors-product-only-shot.webp",
      "/images/seo/hydroscope-water-treatment-products-feature-collage.webp"
    ],
    features: [
      "Active chlorine monitoring",
      "pH monitoring",
      "Conductivity monitoring",
      "TDS monitoring",
      "Temperature monitoring",
      "Additional parameters as per project requirement",
      "Cloud-connected monitoring through HydroSure"
    ],
    applications: [
      "Direct pipeline installation",
      "Bypass installation",
      "Portable monitoring use",
      "Integration with HydroPure",
      "Source-to-tap monitoring"
    ],
    parameters: ["Active chlorine", "pH", "Conductivity", "TDS", "Temperature", "Project-specific additional parameters"],
    faqs,
    seo: {
      metaTitle: "HydroSense Water Quality Sensor | Real-Time Water Monitoring",
      metaDescription:
        "HydroSense monitors active chlorine, pH, conductivity, TDS and temperature for better water-quality visibility.",
      focusKeywords: ["water quality monitoring system", "residual chlorine monitoring system", "pH TDS conductivity sensor"]
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "hydrosure-iot-real-time-monitoring",
    title: "HydroSure IoT Monitoring Platform",
    slug: "hydrosure-iot-real-time-monitoring",
    subtitle: "Live water-quality data, alerts, reports and multi-site visibility",
    category: "Dashboard",
    excerpt:
      "HydroSure connects chlorination units, sensors and field devices to a live dashboard for alerts, analytics, reports and multi-site visibility.",
    body:
      "HydroSure is an IoT monitoring platform that helps teams monitor performance, receive alerts and manage multiple sites from one place. Operators get site-level actions, engineers get diagnostics, district officials get reports and administrators get aggregate performance insights.",
    status: "published",
    featuredImage: "/images/seo/hydrosure-iot-water-monitoring-system-product-shot.webp",
    gallery: [
      "/images/seo/hydrosure-dashboard-control-unit-product-only-shot.webp"
    ],
    features: [
      "Live monitoring",
      "Residual chlorine tracking",
      "Water usage visibility",
      "Flow and pressure data",
      "Tank-level status",
      "Real-time alerts",
      "Reports and analytics",
      "Mobile and desktop access",
      "Multi-site visibility"
    ],
    applications: ["Operators", "Engineers", "District officials", "Administrators", "Command centres", "Government monitoring"],
    parameters: ["Residual chlorine", "Water usage", "Flow", "Pressure", "Tank level", "Alerts", "Reports", "Multi-site status"],
    faqs,
    seo: {
      metaTitle: "HydroSure IoT Water Monitoring Dashboard | Real-Time Alerts",
      metaDescription:
        "HydroSure is an IoT monitoring platform for live water-quality data, alerts, reports and multi-site visibility.",
      focusKeywords: ["IoT water monitoring dashboard", "real-time water monitoring", "water quality dashboard"]
    },
    updatedAt: now,
    createdAt: now
  }
];

const solutionSeeds = [
  {
    title: "Rural Water Supply Chlorination",
    excerpt: "Automate village water tank chlorination with HydroPure, IoT monitoring and solar-compatible operation.",
    body:
      "HydroPure helps automate chlorination for village overhead tanks and rural water-supply schemes. Install HydroPure near the water tank or treatment point, generate disinfectant on site, dose automatically and monitor the system through HydroSure. Add HydroSense where parameter-level monitoring is required.",
    outcomes: ["Consistent disinfection", "Reduced manual dosing", "Solar-compatible operation", "Remote monitoring", "Better accountability", "Simple local operation"],
    applications: ["Village overhead tanks", "Rural water-supply schemes", "Gram Panchayat workflows"],
    relatedProducts: ["hydropure-intelligent-electrochlorinator", "hydrosense-water-quality-sensor", "hydrosure-iot-real-time-monitoring"],
    featuredImage: "/images/seo/hydropure-installation-engineers-village-water-tank-banner.webp",
    seoTitle: "Rural Water Supply Chlorination System | Village Tank Monitoring",
    seoDescription: "Automate village water tank chlorination with HydroPure, IoT monitoring and solar-compatible operation.",
    keywords: ["village water tank chlorination system", "rural drinking water chlorination", "solar chlorination system"]
  },
  {
    title: "Municipal and Government Water Solution",
    excerpt: "Automated chlorination, sensor integration and centralized monitoring for public water infrastructure.",
    body:
      "Hydroscope supports municipal and government water networks with automated chlorination, sensor integration and centralized monitoring. The solution improves visibility across multiple sites and supports faster field response.",
    outcomes: ["Automatic chlorination", "Multi-site dashboard", "Residual chlorine monitoring", "Flow and pressure visibility", "Alerts and escalation", "Reports for officials"],
    applications: ["Municipal water boards", "PHED departments", "RWSS projects", "District water authorities", "Smart city water systems", "JJM and AMRUT aligned projects"],
    relatedProducts: ["hydropure-intelligent-electrochlorinator", "hydrosure-iot-real-time-monitoring"],
    featuredImage: "/images/seo/hydropure-smart-chlorination-system-outdoor-utility-banner.webp",
    seoTitle: "Municipal Water Chlorination System | IoT Monitoring",
    seoDescription: "Hydroscope supports municipal and government water systems with automated chlorination, sensors and centralized monitoring.",
    keywords: ["municipal water chlorination system", "PHED water monitoring", "smart city water quality monitoring"]
  },
  {
    title: "Industrial Water Treatment",
    excerpt: "On-site sodium hypochlorite generation, automated dosing and monitoring for industrial water disinfection.",
    body:
      "HydroPure supports industrial and institutional water-disinfection needs with on-site sodium hypochlorite generation, automated dosing and monitoring options. It helps reduce dependency on stored chlorine chemicals and gives maintenance teams better remote visibility.",
    outcomes: ["Reduced stored chemical dependency", "Better dosing control", "Improved site-team safety", "Remote maintenance visibility", "Scalable capacity"],
    applications: ["Cooling water systems", "Wastewater treatment", "Process water disinfection", "Food and beverage plants", "Pharmaceutical manufacturing", "Hospitals and campuses"],
    relatedProducts: ["hydropure-intelligent-electrochlorinator", "hydrosense-water-quality-sensor"],
    featuredImage: "/images/seo/hydropure-water-treatment-facility-village-tank-banner.webp",
    seoTitle: "Industrial Water Chlorination System | On-Site Hypochlorite Generator",
    seoDescription: "HydroPure supports industrial water disinfection, cooling water systems, wastewater treatment and process water chlorination.",
    keywords: ["industrial water chlorination system", "cooling water chlorination", "wastewater chlorination"]
  },
  {
    title: "Source-to-Tap Monitoring",
    excerpt: "Continuous water-quality visibility from source, treatment and storage to distribution points.",
    body:
      "HydroSense and HydroSure create a source-to-tap monitoring layer across distributed water infrastructure. Teams can see site status, receive alerts and review reports without waiting for delayed manual checks.",
    outcomes: ["Live monitoring", "Reports and analytics", "Multi-site visibility", "Faster response workflows"],
    applications: ["Utilities", "District operations", "Smart cities"],
    relatedProducts: ["hydrosense-water-quality-sensor", "hydrosure-iot-real-time-monitoring"],
    featuredImage: "/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp",
    seoTitle: "Water Treatment and Chlorination Solutions | Hydroscope",
    seoDescription: "Hydroscope provides automated water disinfection and monitoring solutions for rural, municipal, industrial and institutional water networks.",
    keywords: ["water treatment solutions", "chlorination solutions", "water monitoring solutions"]
  }
];

export const solutions: Solution[] = solutionSeeds.map((item) => {
  const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return {
    id: slug,
    title: item.title,
    slug,
    excerpt: item.excerpt,
    body: item.body,
    status: "published" as const,
    featuredImage: item.featuredImage,
    outcomes: item.outcomes,
    relatedProducts: item.relatedProducts,
    applications: item.applications,
    faqs,
    seo: {
      metaTitle: `${item.seoTitle} | Hydroscope`,
      metaDescription: item.seoDescription,
      focusKeywords: item.keywords
    },
    updatedAt: now,
    createdAt: now
  };
});

export const applications: Application[] = [
  {
    id: "village-water-tanks",
    title: "Village Water Tanks",
    slug: "village-water-tanks",
    excerpt: "Automated chlorination, sensors and dashboard monitoring for rural overhead tanks.",
    featuredImage: "/images/applications/village-water-tanks.webp",
    body: "HydroPure helps replace irregular manual chlorination with on-site generation, automatic dosing and remote visibility.",
    status: "published",
    sectors: ["Rural water supply", "Village tanks", "Gram Panchayat workflows"],
    relatedSolutions: ["rural-water-supply-chlorination"],
    seo: {
      metaTitle: "Village Water Tank Chlorination System | Hydroscope",
      metaDescription: "Automated village water tank chlorination with HydroPure, sensors and HydroSure dashboard monitoring."
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "municipal-government-water",
    title: "Municipal and Government Water",
    slug: "municipal-government-water",
    excerpt: "Centralized monitoring and chlorination support for municipal, PHED, RWSS and smart-city water systems.",
    featuredImage: "/images/applications/municipal-government-water.webp",
    body: "Hydroscope supports public agencies with multi-site dashboard visibility, residual chlorine monitoring, alerts, reports and role-based access.",
    status: "published",
    sectors: ["Municipal boards", "PHED", "Smart cities"],
    relatedSolutions: ["municipal-and-government-water-solution"],
    seo: {
      metaTitle: "Municipal Water Chlorination System | Hydroscope",
      metaDescription: "Hydroscope municipal and government water monitoring with automated chlorination and IoT dashboards."
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "industrial-institutional-water",
    title: "Industrial and Institutional Water",
    slug: "industrial-institutional-water",
    excerpt: "On-site hypochlorite generation for cooling water, wastewater, process water and large campuses.",
    featuredImage: "/images/applications/industrial-institutional-water.webp",
    body: "HydroPure supports industrial and institutional disinfection workflows where dosing control, safety and remote maintenance visibility matter.",
    status: "published",
    sectors: ["Industrial water", "Healthcare", "Food and beverage"],
    relatedSolutions: ["industrial-water-treatment"],
    seo: {
      metaTitle: "Industrial Water Chlorination System | Hydroscope",
      metaDescription: "HydroPure for industrial water disinfection, cooling water, wastewater and process water chlorination."
    },
    updatedAt: now,
    createdAt: now
  }
];

/* One image per topic. The previous rule keyed off the word "chlor", so five of
   the seven posts shared a single banner - the listing looked duplicated. Every
   path below is an existing file in public/images/seo. */
const blogImages: Record<string, string> = {
  "what-is-electrochlorination-and-how-does-it-work":
    "/images/seo/hydropure-electrochlorinator-feature-marketing-image.webp",
  "electrochlorination-vs-bleaching-powder":
    "/images/seo/hydropure-front-view-electrochlorinator-product-image.webp",
  "on-site-sodium-hypochlorite-generation-for-municipal-water":
    "/images/seo/hydropure-water-treatment-facility-village-tank-banner.webp",
  "why-village-water-tanks-need-automated-chlorination":
    "/images/seo/hydropure-modular-chlorination-unit-village-water-tank.webp",
  "residual-chlorine-monitoring-in-drinking-water":
    "/images/seo/hydrosense-water-quality-sensors-product-only-shot.webp",
  "solar-powered-chlorination-systems-for-remote-villages":
    "/images/seo/hydropure-clean-front-product-shot-solar-water-tank.webp",
  "iot-water-monitoring-for-public-water-supply":
    "/images/seo/hydrosure-iot-water-monitoring-system-product-shot.webp"
};

export const blogPosts: BlogPost[] = [
  "What is electrochlorination and how does it work?",
  "Electrochlorination vs bleaching powder",
  "On-site sodium hypochlorite generation for municipal water",
  "Why village water tanks need automated chlorination",
  "Residual chlorine monitoring in drinking water",
  "Solar-powered chlorination systems for remote villages",
  "IoT water monitoring for public water supply"
].map((title) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return {
    id: slug,
    title,
    slug,
    excerpt: `${title} - a Hydroscope guide for electrochlorination, sensing and IoT water monitoring decisions.`,
    body:
      "This article topic is mapped from the Hydroscope SEO keyword and blog plan. Expand it with project-specific data, diagrams and verified technical details before final long-form publication.",
    status: "published" as const,
    featuredImage: blogImages[slug] ?? "/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp",
    author: "Hydroscope Team",
    readingTime: "4 min read",
    tags: ["HydroPure", "HydroSense", "HydroSure"],
    seo: {
      metaTitle: `${title} | Hydroscope Insights`,
      metaDescription: `${title}. Learn about water chlorination, monitoring and Hydroscope technology.`,
      focusKeywords: ["electrochlorinator", "water monitoring", "chlorination"]
    },
    updatedAt: now,
    createdAt: now
  };
});

export const caseStudies: CaseStudy[] = [
  {
    id: "village-water-tank-implementation-framework",
    title: "Village Water Tank Implementation Framework",
    slug: "village-water-tank-implementation-framework",
    excerpt: "A planning framework for HydroPure village water tank chlorination and monitoring.",
    body:
      "Water Source -> Treatment Point -> Village Tank -> HydroPure Chlorination -> Sensors and Monitoring -> Cloud Dashboard -> Safe Drinking Water.",
    status: "published",
    featuredImage: "/images/seo/hydropure-modular-chlorination-unit-village-water-tank.webp",
    sector: "Rural drinking water",
    location: "India",
    challenge: "Manual chlorination can be irregular, operators may not be available at every site, power availability can be limited and delayed alerts can increase water-safety risk.",
    solution: "HydroPure near the water tank or treatment point, on-site disinfectant generation, automatic dosing, HydroSure monitoring and HydroSense where parameter-level monitoring is required.",
    resultsNote: "This is a document-derived planning framework. Verified deployment results can be added through CMS when available.",
    seo: {
      metaTitle: "Village Water Tank HydroPure Implementation Framework",
      metaDescription: "HydroPure village tank implementation framework for automatic chlorination, sensors and dashboard monitoring."
    },
    updatedAt: now,
    createdAt: now
  }
];

export function findBySlug<T extends { slug: string }>(items: T[], slug: string) {
  return items.find((item) => item.slug === slug);
}
