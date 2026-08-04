/* Every string in this file is transcribed from the HYDROscope content guide.
   The site reads its solution copy from here, so there is exactly one place to
   correct a claim, a model number or a product name.

   Naming note: the guide renamed the top-level navigation concept from
   "Products" to "Solutions", and the five entries below are what the Solutions
   dropdown and the homepage solutions row both render. */

export type SolutionEntry = {
  slug: string;
  /** Small label above the title, e.g. "AUTOMATED DISINFECTION". */
  tag: string;
  /** Eyebrow used on the detail page hero - the category, not the tag. */
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Short card description used on the homepage solutions row. */
  description: string;
  /** Three ticked lines on the card. */
  checks: string[];
  bestFor: string;
  /** Two highlighted claims at the foot of the card. */
  speciality: string[];
  cardImage: string;
  cardImageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  /** Longer hero subtitle for the detail page. */
  heroSubtitle: string;
  overview: string[];
  coreFeatures: string[];
};

export const solutionEntries: SolutionEntry[] = [
  {
    slug: "hydropure",
    tag: "Automated disinfection",
    eyebrow: "Electrochlorinator",
    title: "HydroPure",
    subtitle: "Automated Water Disinfection with Real-Time Control",
    description:
      "Automatically generates disinfectant on-site and maintains optimal chlorine through intelligent dosing.",
    checks: [
      "Automatically adjusts chlorine dosage",
      "Solar and off-grid compatible",
      "Available in multiple capacity variants"
    ],
    bestFor: "Village water schemes, rural water supply, apartments, industries",
    speciality: ["99.99% Reliable Disinfection", "Reduced Operating Costs"],
    cardImage: "/images/hydroscope-products/hydropure-hp-100.webp",
    cardImageAlt: "HydroPure HP-100 electrochlorinator unit",
    heroImage: "/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp",
    heroImageAlt:
      "HydroPure electrochlorination skid feeding a village overhead tank and the distribution network",
    heroSubtitle:
      "Fully automated, IoT enabled electrochlorination system designed for complete autonomy and reliability.",
    overview: [
      "HydroPure is a fully automated electrochlorinator system that transforms drinking water disinfection into a continuously controlled, data-driven process. It integrates on-site chlorine generation, adaptive dosing intelligence, and real-time digital monitoring to ensure stable residual chlorine across distributed water networks.",
      "Designed as a public health infrastructure layer, HydroPure replaces manual, irregular chlorination practices with a closed-loop system that is remotely observable, controllable, governable, and self-regulating."
    ],
    coreFeatures: [
      "Intelligent Automation",
      "IoT Connectivity",
      "Solar Ready",
      "On-site Chlorine Generation",
      "Predictive Maintenance",
      "AI Analytics"
    ]
  },
  {
    slug: "hydrosense",
    tag: "Real-time monitoring",
    eyebrow: "Water Quality Sensor",
    title: "HydroSense",
    subtitle: "Smart Water Quality Monitoring System",
    description:
      "Continuously monitors water quality 24/7, providing real-time insights and instant alerts to help detect issues early, ensure compliance, and protect consumers.",
    checks: [
      "Monitor water quality parameters in real time",
      "Detect water quality changes instantly",
      "Access live data from anywhere"
    ],
    bestFor: "Water utilities, treatment plants, industries, borewells, households",
    speciality: ["24/7 Continuous Monitoring", "Multi-Parameter Capability"],
    cardImage: "/images/hydroscope-products/hydrosense-water-quality-sensor.webp",
    cardImageAlt: "HydroSense multi-parameter water quality sensor",
    heroImage: "/images/seo/hydrosense-water-quality-sensors-product-only-shot.webp",
    heroImageAlt: "HydroSense sensor body, fittings and in-line tee assembly laid out",
    heroSubtitle:
      "Industrial-grade, IoT-enabled sensing platform for real-time water quality monitoring and intelligent operational insights.",
    overview: [
      "HydroSense is an advanced multi-parameter water quality monitoring platform designed to deliver continuous, high-accuracy measurements across drinking water systems. Built on intelligent sensing technology and industrial IoT architecture, it provides real-time visibility into critical water quality parameters while enabling predictive analytics, automated decision-making, and regulatory compliance. With modular sensor support and seamless cloud integration, HydroSense transforms distributed water quality data into actionable operational intelligence."
    ],
    coreFeatures: [
      "Advanced Sensing",
      "Multi-Parameter Monitoring",
      "Expandable Detection",
      "Flexible Deployment",
      "IoT-Ready Architecture",
      "Real-Time Remote Monitoring"
    ]
  },
  {
    slug: "hydrosure",
    tag: "AI-powered analytics",
    eyebrow: "Cloud Dashboard",
    title: "HydroSure",
    subtitle: "AI-Powered Water Management Platform",
    description:
      "Unifies the entire water network into a single platform, providing real-time visibility, predictive insights, and alerts to prevent failures before they occur.",
    checks: [
      "Monitor your entire water network in real time",
      "Predictive alerts before failures occur",
      "AI detects leaks, anomalies and abnormal behaviour"
    ],
    bestFor: "Municipal corporations, smart cities, water utilities, large-scale networks",
    speciality: ["Manage Thousands of Devices", "Secure Cloud Platform"],
    cardImage: "/images/seo/hydrosure-iot-water-monitoring-system-product-shot.webp",
    cardImageAlt: "HydroSure cloud dashboard shown on a monitoring screen",
    heroImage: "/images/hydrosure-dashboard/hydrosure-dashboard-cinematic.webp",
    heroImageAlt: "HydroSure cloud dashboard running on a tablet beside a water treatment site at night",
    heroSubtitle:
      "Unlock complete operational visibility with real-time monitoring, AI-powered analytics, predictive insights, and cloud-based dashboards designed for modern water utilities.",
    overview: [
      "HydroSure is a secure, cloud-native IoT platform that transforms connected water infrastructure into an intelligent, data-driven ecosystem. It centralizes operational data from sensors, electrochlorination systems, and other field devices into a single unified dashboard, enabling real-time visibility, remote monitoring, and actionable insights.",
      "Designed for utilities, municipalities, industries, and commercial water systems, HydroSure combines real-time analytics, AI-powered intelligence, automated alerts, and historical trend analysis to optimize operations, improve water quality, and support proactive decision-making. With enterprise-grade security, scalable architecture, and seamless device integration, HydroSure empowers organizations to monitor, analyze, and manage their entire water network from anywhere."
    ],
    coreFeatures: [
      "Real-Time Device Monitoring",
      "AI-Powered Analytics & Insights",
      "Secure Cloud Infrastructure",
      "Enterprise Role-Based Access Control",
      "Automated Alerts & Notifications",
      "Historical Trends & Reporting",
      "Scalable Multi-Site Management",
      "Remote Device Management",
      "Open API & System Integration",
      "Cross-Platform Web & Mobile Access"
    ]
  }
];

export function findSolutionEntry(slug: string) {
  return solutionEntries.find((entry) => entry.slug === slug);
}

/* ---------------------------------------------------------------- HydroPure */

export const hydroPureComparison = {
  title: "From Conventional to Intelligent Chlorination",
  subtitle: "The Future of Water, Engineered for Today",
  conventionalLabel: "Conventional Electrochlorinators",
  conventional: [
    "Manual, operator-dependent",
    "Fixed chlorine dosing",
    "Inconsistent water quality",
    "Reactive maintenance and troubleshooting",
    "No real-time monitoring",
    "Complex installation and infrastructure",
    "Hazardous chlorine handling",
    "Higher operating costs"
  ],
  productLabel: "HydroPure",
  product: [
    "Fully automated, solar-powered, remotely monitored system",
    "Dynamic, demand-based chlorine dosing",
    "Consistent, standards-compliant water quality",
    "AI-powered predictive insights for proactive decision-making",
    "IoT-enabled real-time monitoring and control",
    "Compact, easy-to-deploy system",
    "Solar-powered for sustainable, remote operation",
    "Safe on-site chlorine generation",
    "Cost-effective, environmentally friendly solution"
  ]
};

export const hydroPureHowItWorks =
  "HydroPure operates as an integrated electrochlorination system that combines on-site sodium hypochlorite generation, automated dosing control, and IoT-enabled process monitoring into a closed-loop disinfection system. Chlorine is generated from a brine solution through electrolysis and injected into the water distribution network using intelligent dosing algorithms that continuously optimize residual chlorine levels. Real-time operational data is transmitted to a centralized cloud platform, where AI-driven analytics monitor system health, detect anomalies, and enable predictive maintenance for uninterrupted, standards-compliant water disinfection.";

export const hydroPureIndustryApplications = [
  "Municipal Water Boards",
  "Industries",
  "Rural Water Schemes",
  "Hotels & Healthcare Facilities",
  "Residential Communities",
  "Drinking Water Projects"
];

/* Model table exactly as supplied - production rate per batch and the maximum
   production per day. No row is extrapolated. */
export const hydroPureVariants = {
  subtitle: "One Platform. Multiple Capacities. Unlimited Possibilities.",
  intro:
    "Whether you're treating water for a village, municipality, industrial facility, or large utility network, HydroPure offers scalable solutions tailored to your requirements. Standard models range from HP-100 to HP-2000, with custom-built variants available for specialized applications.",
  models: ["HP-100", "HP-200", "HP-500", "HP-1000", "HP-2000"],
  rows: [
    { label: "Production rate (gm/batch)", values: ["50", "50", "125", "250", "500"] },
    { label: "Max Production per day (g)", values: ["100", "200", "500", "1000", "2000"] }
  ],
  ticks: ["Solar Compatible", "IoT Monitoring", "AI Analytics"],
  badges: ["Scalable", "Customizable", "Modular"]
};

export const hydroPureTrustBadge = {
  title: "Designed to meet international and national water quality standards.",
  text: "Compliant with WHO and BIS guidelines."
};

/* --------------------------------------------------------------- HydroSense */

export const hydroSenseComparison = {
  title: "Why HydroSense?",
  subtitle: "The future of water monitoring",
  conventionalLabel: "Conventional Systems",
  conventional: [
    "Frequent maintenance",
    "Multiple sensing modules",
    "Regular recalibration",
    "Slower response time",
    "Higher operating cost",
    "Bulky analyzer footprint",
    "Limited connectivity",
    "Higher power consumption",
    "Fixed installation",
    "Shorter operational life",
    "Limited data visibility"
  ],
  productLabel: "HydroSense",
  product: [
    "Low-maintenance operation (up to 90% lower OPEX)",
    "Integrated sensing platform",
    "No calibration requirement",
    "Up to 3x faster response",
    "Lower total operating cost",
    "Compact IoT-enabled design (up to 5x smaller)",
    "Cloud-connected remote monitoring",
    "Up to 10x greater energy efficiency",
    "Pipeline, bypass, or portable deployment (up to 50% lower CAPEX)",
    "Up to 2x longer operational lifespan",
    "AI-powered analytics with real-time insights and alerts"
  ]
};

export const hydroSenseFlow = [
  {
    number: "01",
    title: "Sense",
    text: "Advanced chemiresistive sensors continuously detect changes in water chemistry."
  },
  {
    number: "02",
    title: "Process",
    text: "Embedded electronics convert raw sensor signals into precise water quality measurements."
  },
  {
    number: "03",
    title: "Connect",
    text: "Measurements are securely transmitted to the HydroSense IoT cloud platform."
  },
  {
    number: "04",
    title: "Analyze",
    text: "AI-powered analytics generate real-time insights, anomaly detection, and instant alerts."
  },
  {
    number: "05",
    title: "Act",
    text: "Operators monitor system health remotely and make informed decisions using live dashboards."
  }
];

export const hydroSenseApplications = [
  {
    title: "Water Distribution Network",
    text: "Continuous multi-parameter monitoring with cloud connectivity for real-time visibility across distribution networks. Detect leaks, contamination, and abnormal water conditions early.",
    image: "/images/seo/hydrosense-water-quality-sensors-product-only-shot.webp"
  },
  {
    title: "Swimming Pool",
    text: "Maintain optimal water quality with continuous pH and disinfectant monitoring. Improve sanitation while protecting pool equipment.",
    image: "/images/seo/hydroscope-water-treatment-products-feature-collage.webp"
  },
  {
    title: "Wastewater",
    text: "Monitor critical water quality parameters throughout the treatment process. Optimize treatment efficiency while reducing operational costs.",
    image: "/images/seo/hydropure-water-treatment-facility-village-tank-banner.webp"
  },
  {
    title: "Groundwater",
    text: "Continuously monitor groundwater quality parameters and other contaminants. Enable early warning and informed treatment decisions.",
    image: "/images/how-it-works/13-water-sensor-probe.webp"
  },
  {
    title: "Irrigation",
    text: "Monitor irrigation water quality to support efficient water and nutrient management. Improve crop productivity while optimizing resource utilization.",
    image: "/images/seo/hydropure-modular-chlorination-unit-village-water-tank.webp"
  },
  {
    title: "Residential Water Quality Monitoring",
    text: "Monitor water quality directly within residential plumbing systems using continuous multi-parameter sensing, enabling real-time monitoring, remote access, and intelligent alerts for improved water safety.",
    image: "/images/applications/village-water-tanks.webp"
  }
];

/* ---------------------------------------------------------------- HydroSure */

export const hydroSureIntelligence = {
  eyebrow: "AI-powered intelligence",
  title: "Transforming Water Data into Actionable Intelligence",
  items: [
    {
      title: "Real-Time Analytics",
      text: "Continuously process live device data to provide instant visibility into water quality, system performance, and operational status."
    },
    {
      title: "Anomaly Detection",
      text: "Identify unusual changes in water quality or equipment behaviour, enabling early intervention before issues escalate."
    },
    {
      title: "Intelligent Recommendations",
      text: "Convert complex operational data into clear, actionable insights that help operators respond quickly and efficiently."
    },
    {
      title: "Trend Analysis",
      text: "Visualize long-term performance trends to identify recurring issues, optimize operations, and support data-driven planning."
    },
    {
      title: "Smart Alert Prioritization",
      text: "Deliver context-aware alerts by highlighting the most critical events first, helping teams focus on what matters most."
    }
  ]
};

export const hydroSureSecurity = {
  eyebrow: "Enterprise security",
  title: "Security & Access Control Built for Critical Water Infrastructure",
  subtitle:
    "HydroSure is designed with a security-first architecture to protect operational data, connected devices, and user access. Through secure communication, role-based permissions, encrypted data handling, and comprehensive audit logging, the platform ensures reliable and controlled access across every level of your organization.",
  ticks: [
    "Secure Authentication",
    "Encrypted Data Communication",
    "Audit Logs & Activity Tracking",
    "Secure Cloud Infrastructure",
    "Multi-Organization Management"
  ],
  capabilityIntro: "Built around secure access, field visibility and exportable operations data.",
  capabilities: [
    { title: "Secure access", text: "Login, password change and 2FA protect dashboard entry." },
    {
      title: "Live Location",
      text: "Assigned device locations and status counts are visible from the home screen."
    },
    { title: "Device registry", text: "Search, filter and export assigned active or inactive devices." },
    {
      title: "Device analytics",
      text: "Coordinates, system status, chlorine, water supplied and trend charts."
    }
  ]
};

export const hydroSureDeployments = {
  eyebrow: "Deployed across industries",
  title: "One Platform. Every Infrastructure.",
  subtitle:
    "HydroSure provides centralized monitoring, AI-powered analytics, and operational intelligence across diverse water systems, enabling organizations to manage distributed assets securely from a single cloud platform.",
  items: [
    {
      title: "Municipal Water Utilities",
      text: "Monitor treatment plants, reservoirs, pumping stations, and distribution networks through a unified dashboard with real-time operational insights."
    },
    {
      title: "Industrial Water Management",
      text: "Track water quality, equipment performance, and process efficiency across manufacturing facilities while optimizing operational performance."
    },
    {
      title: "Rural water schemes",
      text: "Monitor water quality and connected devices throughout the distribution network to ensure continuous compliance and service reliability in rural areas."
    },
    {
      title: "Commercial & Institutional Buildings",
      text: "Manage water infrastructure across hospitals, campuses, hotels, airports, malls, and office complexes through centralized monitoring and intelligent alerts."
    },
    {
      title: "Drinking water project",
      text: "Analyze treatment performance, monitor critical parameters, and receive automated alerts to improve operational efficiency and regulatory compliance."
    }
  ]
};

/* -------------------------------------------------------- Other IoT / Verse */

export type IotSolution = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export const otherIotSolutions: IotSolution[] = [
  {
    slug: "hydropilot",
    title: "HydroPilot",
    subtitle: "Fully automatic Valve and Pump controller",
    overview:
      "HydroPilot transforms conventional pumping systems into intelligent, automated water management solutions. By combining advanced level sensing, automation, and IoT technology, it ensures reliable water availability, reduces manual effort, saves energy, and provides complete visibility of your water infrastructure anytime, anywhere.",
    features: [
      "Fully automatic operation",
      "IoT-enabled for remote connectivity",
      "Real-time monitoring and system status",
      "Remote control through a secure web dashboard",
      "Overflow and dryrun protection",
      "Energy efficient",
      "Instant alerts and notification",
      "Suitable for commercial, industrial, and municipal applications",
      "Seamless integration with HydroVerse"
    ],
    image: "/images/how-it-works/12-dosing-pump.webp",
    imageAlt: "Automated valve and pump control assembly on a water main"
  },
  {
    slug: "hydroedge",
    title: "HydroEdge",
    subtitle: "IoT enabled water tank level module",
    overview:
      "HydroEdge empowers organizations with continuous visibility into their water storage systems, enabling smarter decisions, reduced water wastage, and more efficient water resource management.",
    features: [
      "Accurate and reliable sensor integration",
      "Real-time water level monitoring",
      "IoT-enabled cloud connectivity",
      "Remote monitoring through web dashboard",
      "Quick installation with minimal maintenance",
      "Suitable for residential, commercial, industrial, and municipal applications",
      "Seamless integration with HydroVerse"
    ],
    image: "/images/how-it-works/11-storage-tank.webp",
    imageAlt: "IoT water tank level module mounted on a storage tank"
  }
];

export const hydroVerse = {
  eyebrow: "Complete intelligent water ecosystem",
  title: "HydroVerse",
  subtitle: "HydroVerse is the unified ecosystem of HYDROscope's next-generation water management solution.",
  overview:
    "HydroVerse is the unified ecosystem of HYDROscope's next-generation water management products. Bringing together HydroPilot for intelligent pump and valve automation, HydroEdge for IoT-enabled water level monitoring, HydroSense for advanced sensing solutions, HydroPure for smart water quality monitoring, and HydroSure for reliable infrastructure intelligence, HydroVerse offers a comprehensive suite of connected solutions for modern water management. By combining intelligent monitoring, automation, sensing, water quality, and IoT technologies, HydroVerse delivers scalable solutions that simplify operations, enhance reliability, improve resource efficiency, and drive smarter water infrastructure across residential, commercial, industrial, and municipal applications.",
  integrated: [
    { title: "HydroPilot", subtitle: "Fully Automatic Valve & Pump Controller", href: "/solutions/other-iot-solutions#hydropilot" },
    { title: "HydroEdge", subtitle: "IoT Enabled Water Tank Level Module", href: "/solutions/other-iot-solutions#hydroedge" },
    { title: "HydroSense", subtitle: "IoT based Water quality monitoring solution", href: "/solutions/hydrosense" },
    { title: "HydroPure", subtitle: "Intelligent AI enabled electrochlorination system", href: "/solutions/hydropure" },
    { title: "HydroSure", subtitle: "Cloud native water infrastructure monitoring system", href: "/solutions/hydrosure" }
  ],
  features: [
    "Unified ecosystem instead of isolated products",
    "Intelligent Automation",
    "Real-Time Monitoring",
    "Remote Device Management",
    "Cloud-connected monitoring",
    "Reduced operational cost"
  ],
  comparison: {
    title: "Why Choose HydroVerse?",
    conventionalLabel: "Conventional Systems",
    conventional: [
      "Manual monitoring",
      "Multiple standalone devices",
      "Reactive maintenance",
      "No remote visibility",
      "High operational costs",
      "Limited data"
    ],
    productLabel: "HydroVerse",
    product: [
      "24x7 real-time monitoring",
      "Integrated ecosystem",
      "Predictive insights",
      "Cloud access from anywhere",
      "Optimized energy & water usage",
      "Historical analytics & reports"
    ]
  },
  applications: ["Smart Cities", "Municipal Water Supply", "Industries", "Water Treatment Plants", "Utilities"],
  futureReady:
    "HydroVerse is built on a scalable IoT architecture that grows with your infrastructure. As your water management needs evolve, new HydroVerse products and intelligent capabilities can be seamlessly integrated into the same ecosystem, ensuring your investment remains future-ready."
};

/* ------------------------------------------------------------- Home page UI */

export const sectorNavigation = [
  { label: "Industrial", href: "/solutions/hydropure" },
  { label: "Private Sector", href: "/solutions/hydrosense" },
  { label: "Public Sector", href: "/solutions/hydrosure" },
  { label: "Municipal", href: "/solutions/hydroverse" }
];

export const heroContent = {
  eyebrow: "AI driven technologies for safe water",
  title: "Empowering. Smarter Water Management.",
  subtitle:
    "We deliver next-generation IoT enabled, fully automated water management solutions and AI-powered intelligence for utilities, industries and communities - making water systems safer, smarter and more sustainable.",
  ctaLabel: "Explore solutions",
  ctaHref: "/solutions",
  cards: [
    { title: "100% Autonomous", subtitle: "Designed for complete autonomy" },
    { title: "Real time", subtitle: "Monitoring with live insights" },
    { title: "24/7 Operation", subtitle: "Engineered for Reliability" }
  ]
};

export const whyChooseUs = {
  eyebrow: "Why HYDROscope",
  title: "Everything your water infrastructure needs",
  text: "An integrated water ecosystem combining intelligent sensing, automated disinfection, and AI-powered monitoring into one unified platform for complete operational control.",
  stats: [
    { value: "24x7", label: "Continuous Monitoring" },
    { value: "100%", label: "Cloud-Connected Architecture" },
    { value: "1", label: "Unified Platform" },
    { value: "100%", label: "Remote Accessibility" }
  ],
  cards: [
    {
      title: "Engineered as One",
      text: "Sensors, treatment, automation, and software - perfectly integrated for seamless operation."
    },
    { title: "Precision Monitoring", text: "High-accuracy water quality measurements with continuous data validation." },
    { title: "Intelligent Disinfection", text: "Optimized chlorine generation and dosing for safer, more efficient treatment." },
    { title: "Operational Intelligence", text: "AI transforms operational data into insights and automated decisions." },
    {
      title: "Connected Everywhere",
      text: "Unified cloud dashboard with live monitoring, alarms, trends, reports, and remote control."
    },
    { title: "Ready for Scale", text: "Designed for municipalities, utilities, industries, and large distributed water networks." }
  ]
};

export const capabilityMarquee = [
  "Electrochlorinators",
  "Water Quality Sensor",
  "IoT",
  "Automation",
  "AI",
  "Unified Systems"
];

export const trustPillars = [
  { title: "Trusted & Reliable", text: "Built for harsh environments" },
  { title: "Secure & Compliant", text: "Enterprise-grade data security" },
  { title: "Easy to Install & Use", text: "Plug-and-play products" },
  { title: "Expert Support", text: "We're with you, always" }
];

/* Programmes HYDROscope aligns its products with. The artwork is the supplied
   official logo for each, so `name` is only the accessible label. */
export const proudlySupports = [
  { name: "Digital India", image: "/images/programmes/digital-india.webp" },
  { name: "Make In India", image: "/images/programmes/make-in-india.webp" },
  { name: "Swachh Bharat", image: "/images/programmes/swachh-bharat.webp" },
  { name: "Har Ghar Jal - Jal Jeevan Mission", image: "/images/programmes/jal-jeevan-mission.webp" },
  { name: "World Health Organization", image: "/images/programmes/world-health-organization.webp" }
];
