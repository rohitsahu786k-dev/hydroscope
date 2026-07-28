import type { Application, BlogPost, CaseStudy, Faq, Product, Solution } from "@hydroscope/types";

const now = "2026-07-27T00:00:00.000Z";

export const faqs: Faq[] = [
  {
    question: "What products are described in the supplied HYDROscope documents?",
    answer:
      "The supplied assets describe HydroPure for electrochlorination, HydroSense for water-quality sensing and HydroSure for IoT real-time monitoring and AI dashboard intelligence."
  },
  {
    question: "Which parameters are covered by the monitoring content?",
    answer:
      "The source material references active chlorine or residual chlorine, pH, conductivity, TDS, temperature, turbidity, pressure and flow, with HydroSense described as upgradeable for additional parameters."
  },
  {
    question: "Does HydroPure support remote or off-grid deployment?",
    answer:
      "Yes. The supplied HydroPure material positions the system as solar-ready, IoT-enabled, low-power, plug-and-play and suitable for remote or off-grid water infrastructure."
  }
];

export const products: Product[] = [
  {
    id: "hydropure-intelligent-electrochlorinator",
    title: "HydroPure Intelligent Electrochlorinator",
    slug: "hydropure-intelligent-electrochlorinator",
    subtitle: "Smart off-grid electrochlorination powered by solar and IoT",
    category: "Electrochlorination",
    excerpt:
      "HydroPure is an IoT-enabled electrochlorination system for on-site sodium hypochlorite generation, automated dosing, remote monitoring and water-safety visibility.",
    body:
      "HydroPure works on the proven principle of electrochlorination: a brine solution made from salt and water passes through an electrolytic cell, producing sodium hypochlorite for disinfection. The supplied documents position HydroPure for automated operation, flow-based dosing, PLC or microcontroller-led control, IoT monitoring, solar-ready deployment and use in village tanks, municipal water boards, residential communities, healthcare facilities, hotels, pools and industrial water applications.",
    status: "published",
    featuredImage: "/generated/hydropure-deployment-hero.png",
    features: [
      "On-site chlorine generation using salt, water and electricity",
      "Fully automatic operation with IoT-enabled monitoring",
      "Flow-proportional precision dosing",
      "Self-cleaning electrolyzer to reduce maintenance downtime",
      "Online chlorine analyzer feedback for consistent chlorine levels",
      "Solar-ready, low-power and plug-and-play deployment",
      "Remote dashboard visibility, alerts, analytics and reports"
    ],
    applications: [
      "Drinking water treatment",
      "Village water tanks",
      "Wastewater treatment",
      "Cooling water systems",
      "Bleaching processes",
      "Pharmaceutical manufacturing",
      "Municipal water boards",
      "Apartment complexes",
      "Residential communities",
      "Healthcare facilities",
      "Hotels and swimming pools",
      "Food and beverage / dairy"
    ],
    parameters: [
      "Output concentration: 0.6% to 0.8% sodium hypochlorite",
      "Alternative deck reference: electro-hypo contains 0.7% to 1% chlorine",
      "Model HSE 100: 100 gms/day chlorine production",
      "Model HSE 200: 200 gms/day chlorine production",
      "Model HSE 500: 500 gms/day chlorine production",
      "Model HSE 1000: 1000 gms/day chlorine production",
      "Model HSE 2000: 2000 gms/day chlorine production",
      "Catalog capacity values consider 16 hours runtime; system can run continuously for 24 hours"
    ],
    faqs,
    seo: {
      metaTitle: "HydroPure Intelligent Electrochlorinator | HYDROscope",
      metaDescription:
        "HydroPure intelligent electrochlorinator for on-site chlorine generation, automated dosing, IoT monitoring and solar-ready village tank deployment.",
      focusKeywords: ["electro chlorination system", "chlorine monitoring system", "smart electro chlorinator"]
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "hydrosense-water-quality-sensor",
    title: "HydroSense Water Quality Sensor",
    slug: "hydrosense-water-quality-sensor",
    subtitle: "Compact multi-parameter sensor for real-time field monitoring",
    category: "Sensors",
    excerpt:
      "HydroSense is described as a compact IoT sensor for active chlorine, pH, conductivity, TDS and temperature monitoring with cloud-based visualization.",
    body:
      "HydroSense uses advanced chemoresistance-based sensing technology and is described in the supplied deck as an IoT-integrated sensor for real-time monitoring. The material positions it as compact, upgradeable to additional parameters, designed for pipelines or tap-water infrastructure and connected to cloud dashboards for remote water-quality visibility.",
    status: "published",
    featuredImage: "/product-images/hydrosense-sensor.png",
    features: [
      "Measures active chlorine, pH, conductivity, TDS and temperature",
      "Advanced chemoresistance-based sensing technology",
      "Upgradeable for additional parameters such as arsenic, fluoride, nitrate and iron",
      "Fully integrated into IoT architecture",
      "Designed for pipelines or tap-water structure deployment",
      "Enables comprehensive remote monitoring of water quality in real time"
    ],
    applications: ["Source-to-tap monitoring", "Distribution networks", "Rural drinking-water schemes", "Utilities", "Public health monitoring"],
    parameters: ["Active chlorine", "pH", "Conductivity", "TDS", "Temperature", "Expandable parameter set"],
    faqs,
    seo: {
      metaTitle: "HydroSense Water Quality Sensor | HYDROscope",
      metaDescription:
        "HydroSense water quality sensor for active chlorine, pH, conductivity, TDS and temperature monitoring with IoT cloud visualization.",
      focusKeywords: ["water quality sensors India", "multi parameter water quality sensor", "pH TDS chlorine sensor"]
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "hydrosure-iot-real-time-monitoring",
    title: "HydroSure IoT Real-Time Monitoring",
    slug: "hydrosure-iot-real-time-monitoring",
    subtitle: "AI-enabled dashboards, alerts and role-based water intelligence",
    category: "Software",
    excerpt:
      "HydroSure turns raw sensor streams into dashboards, alerts, predictive maintenance signals and role-based monitoring views.",
    body:
      "HydroSure is the IoT and AI monitoring layer described in the supplied HYDROscope material. It connects raw sensor data, vector embeddings and AI insights to support real-time dashboards, smart alerts, automated escalation, anomaly detection, predictive maintenance, access control and monitoring from source to tap.",
    status: "published",
    featuredImage: "/generated/source-to-tap-platform.png",
    features: [
      "Real-time dashboard for water network visibility",
      "AI-powered analytics from raw sensor data",
      "Automated alerts for critical events",
      "Remote control and monitoring",
      "Predictive maintenance signals",
      "Operator, engineer, district and state-level access views",
      "Resolution and feedback loop for continuous improvement"
    ],
    applications: ["Utilities", "Command centres", "Government monitoring", "District operations", "State administration", "Smart cities"],
    parameters: ["Residual chlorine", "pH", "TDS", "Conductivity", "Turbidity", "Pressure", "Flow", "Alerts"],
    faqs,
    seo: {
      metaTitle: "HydroSure IoT Water Monitoring Dashboard | HYDROscope",
      metaDescription:
        "HydroSure IoT monitoring dashboard for real-time water intelligence, AI analytics, smart alerts and source-to-tap visibility.",
      focusKeywords: ["cloud based water monitoring dashboard", "AI water analytics", "source to tap water monitoring"]
    },
    updatedAt: now,
    createdAt: now
  }
];

export const solutions: Solution[] = [
  {
    title: "Smart Off-Grid Electrochlorination",
    excerpt: "Solar-ready HydroPure electrochlorination for automated on-site sodium hypochlorite generation and monitored water disinfection.",
    outcomes: ["On-site chlorine generation", "Automated dosing", "Reduced manual chlorination dependency", "Remote monitoring visibility"],
    applications: ["Village tanks", "Municipal water", "Rural schemes"],
    relatedProducts: ["hydropure-intelligent-electrochlorinator"]
  },
  {
    title: "Source-to-Tap Real-Time Monitoring",
    excerpt: "Continuous monitoring across source, treatment, storage and distribution points using sensors, cloud dashboards and alerts.",
    outcomes: ["24/7 monitoring", "Parameter trend visibility", "Faster response workflows", "Source-to-tap accountability"],
    applications: ["Utilities", "District operations", "Smart cities"],
    relatedProducts: ["hydrosense-water-quality-sensor", "hydrosure-iot-real-time-monitoring"]
  },
  {
    title: "AI Water Intelligence Dashboard",
    excerpt: "HydroSure data pipeline that converts sensor telemetry into vector embeddings, AI insights, alerts and operational actions.",
    outcomes: ["AI insight layer", "Smart escalation", "Predictive maintenance", "Role-based access"],
    applications: ["Command centres", "Government monitoring", "Engineering teams"],
    relatedProducts: ["hydrosure-iot-real-time-monitoring"]
  },
  {
    title: "Village Water Tank Safety",
    excerpt: "HydroPure workflow for village tanks: water source, automatic chlorination, sensors, cloud dashboard and safe water delivery.",
    outcomes: ["Consistent disinfection", "No manual dosing dependency", "Cloud reports", "Solar-ready deployment"],
    applications: ["Gram Panchayat operations", "Rural drinking water", "Tank distribution"],
    relatedProducts: ["hydropure-intelligent-electrochlorinator", "hydrosense-water-quality-sensor"]
  },
  {
    title: "Smart Alerts and Access Control",
    excerpt: "Alert detection, geo-targeting, context-aware notifications, escalation and feedback loops for water infrastructure teams.",
    outcomes: ["Intelligent detection", "Auto-location support", "Smart escalation", "Resolution tracking"],
    applications: ["Operators", "Engineers", "District officials", "State administrators"],
    relatedProducts: ["hydrosure-iot-real-time-monitoring"]
  },
  {
    title: "Government Scheme Monitoring",
    excerpt: "Document-derived positioning for Jal Jeevan Mission, AMRUT 2.0 and Smart Cities monitoring needs without making approval claims.",
    outcomes: ["RMS monitoring readiness", "Urban and rural visibility", "Dashboard-based governance", "Deployment planning support"],
    applications: ["JJM-aligned planning", "AMRUT 2.0", "Smart Cities"],
    relatedProducts: ["hydropure-intelligent-electrochlorinator", "hydrosure-iot-real-time-monitoring"]
  }
].map((item) => {
  const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return {
    id: slug,
    title: item.title,
    slug,
    excerpt: item.excerpt,
    body: `${item.title} is based on the supplied HYDROscope PPT/PDF material and connects the relevant product capability, operating workflow and monitoring layer into a practical water-infrastructure solution.`,
    status: "published" as const,
    featuredImage: item.relatedProducts.includes("hydropure-intelligent-electrochlorinator") ? "/generated/hydropure-deployment-hero.png" : "/generated/source-to-tap-platform.png",
    outcomes: item.outcomes,
    relatedProducts: item.relatedProducts,
    applications: item.applications,
    faqs,
    seo: {
      metaTitle: `${item.title} | HYDROscope`,
      metaDescription: item.excerpt,
      focusKeywords: [item.title.toLowerCase(), "HYDROscope", "water quality monitoring"]
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
    excerpt: "HydroPure deployment for water source, automatic chlorination, sensors, cloud dashboard and safe drinking-water delivery.",
    body: "The supplied HydroPure village tank material frames the challenge as manual chlorination, no real-time monitoring, inconsistent dosing and health risk. HYDROscope positions HydroPure, sensors and cloud monitoring as the connected workflow.",
    status: "published",
    sectors: ["Rural drinking water", "Tank distribution", "Gram Panchayat operations"],
    relatedSolutions: ["village-water-tank-safety", "smart-off-grid-electrochlorination"],
    seo: {
      metaTitle: "Village Water Tank Chlorination & Monitoring | HYDROscope",
      metaDescription: "HydroPure workflow for village water tanks with automatic chlorination, sensors and dashboard monitoring."
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "municipal-water-boards",
    title: "Municipal Water Boards",
    slug: "municipal-water-boards",
    excerpt: "Electrochlorination, RMS monitoring and dashboard visibility for public water infrastructure teams.",
    body: "The supplied catalog lists municipal water boards as an adoption segment for HydroPure and the company deck highlights RMS monitoring, government officials and water-disinfection quality visibility.",
    status: "published",
    sectors: ["Municipal water", "RMS monitoring", "Distribution networks"],
    relatedSolutions: ["source-to-tap-real-time-monitoring", "government-scheme-monitoring"],
    seo: {
      metaTitle: "Water Monitoring for Municipal Water Boards | HYDROscope",
      metaDescription: "HYDROscope HydroPure, HydroSense and HydroSure content for municipal water board monitoring and disinfection workflows."
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "residential-healthcare-and-commercial-sites",
    title: "Residential, Healthcare and Commercial Sites",
    slug: "residential-healthcare-and-commercial-sites",
    excerpt: "Catalog-listed adoption segments including residential communities, apartment complexes, healthcare facilities, hotels and swimming pools.",
    body: "The supplied HydroPure catalog identifies residential communities, apartment complexes, healthcare facilities, hotels and swimming pools as industry adoption segments for on-site chlorine generation and water disinfection.",
    status: "published",
    sectors: ["Residential communities", "Healthcare facilities", "Hotels and swimming pools"],
    relatedSolutions: ["smart-off-grid-electrochlorination"],
    seo: {
      metaTitle: "HydroPure for Residential, Healthcare & Commercial Sites",
      metaDescription: "HydroPure electrochlorination applications for residential communities, healthcare facilities, hotels and swimming pools."
    },
    updatedAt: now,
    createdAt: now
  },
  {
    id: "food-beverage-dairy-and-industrial-water",
    title: "Food, Beverage, Dairy and Industrial Water",
    slug: "food-beverage-dairy-and-industrial-water",
    excerpt: "Catalog-listed adoption for food and beverage, dairy, cooling water, wastewater and bleaching process use cases.",
    body: "The HydroPure catalog lists food and beverage, dairy, wastewater treatment, cooling water systems, bleaching processes and pharmaceutical manufacturing as use cases or adoption areas.",
    status: "published",
    sectors: ["Food and beverage", "Dairy", "Industrial water"],
    relatedSolutions: ["smart-off-grid-electrochlorination", "source-to-tap-real-time-monitoring"],
    seo: {
      metaTitle: "HydroPure for Food, Beverage, Dairy & Industrial Water",
      metaDescription: "HydroPure use cases for food and beverage, dairy, cooling water, wastewater and industrial water workflows."
    },
    updatedAt: now,
    createdAt: now
  }
];

export const blogPosts: BlogPost[] = [
  "Why Imprecise Chlorination Creates Water Safety Risk",
  "How HydroPure Generates Sodium Hypochlorite On Site",
  "HydroSense Parameters: Chlorine, pH, Conductivity, TDS and Temperature",
  "Turning IoT Sensor Data Into Water Intelligence",
  "Smart Alerts for Source-to-Tap Water Monitoring",
  "Jal Jeevan Mission, AMRUT 2.0 and Smart Cities Monitoring Alignment",
  "HydroPure Capacity Planning for Village Water Tanks",
  "Comparing Chlorination Options: Gas, Bleaching Powder, Sodium Hypochlorite and Electro-Hypo"
].map((title) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return {
    id: slug,
    title,
    slug,
    excerpt: `${title} - a document-derived HYDROscope insight based on supplied HydroPure, HydroSense and HydroSure material.`,
    body:
      "This insight is seeded from the supplied HYDROscope PPT/PDF content. It should be expanded in Payload CMS with verified project-specific details before publication as a final long-form article.",
    status: "published" as const,
    featuredImage: title.includes("HydroPure") || title.includes("Chlorination") ? "/generated/hydropure-deployment-hero.png" : "/generated/source-to-tap-platform.png",
    author: "HYDROscope Team",
    readingTime: "4 min read",
    tags: ["HydroPure", "HydroSense", "HydroSure"],
    seo: {
      metaTitle: `${title} | HYDROscope Insights`,
      metaDescription: `${title}. Seeded from supplied HYDROscope product documents for water monitoring and electrochlorination.`,
      focusKeywords: ["HYDROscope", "HydroPure", "water quality monitoring"]
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
    excerpt: "A planning framework based on the supplied HydroPure village tank workflow, not a claimed customer deployment.",
    body:
      "This framework converts the supplied village tank infographic into a planning format: challenge, manual process, HydroPure solution, installation components, dashboard monitoring, stakeholders and benefits.",
    status: "published",
    featuredImage: "/generated/hydropure-deployment-hero.png",
    sector: "Rural drinking water",
    location: "India",
    challenge: "Manual chlorination, inconsistent dosing, no real-time visibility and health risk are listed as challenges in the supplied village tank material.",
    solution: "HydroPure unit, automatic chlorination, sensors and monitoring, cloud dashboard and safe drinking-water workflow.",
    resultsNote: "This is a document-derived implementation framework. Verified customer results can be added through CMS when available.",
    seo: {
      metaTitle: "Village Water Tank HydroPure Implementation Framework",
      metaDescription: "Document-derived HydroPure village tank implementation framework for automatic chlorination, sensors and dashboard monitoring."
    },
    updatedAt: now,
    createdAt: now
  }
];

export function findBySlug<T extends { slug: string }>(items: T[], slug: string) {
  return items.find((item) => item.slug === slug);
}
