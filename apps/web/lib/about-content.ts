/* Every string here is transcribed from the supplied About Us page content and
   its design mockup. Keeping it out of the page component means a copy
   correction is a one-line edit and never touches layout.

   Image paths all point at /images/about/, where filenames are descriptive
   rather than sequential - the filename is the first thing an image search
   reads, so "industry-hospital-healthcare-facility-water.webp" earns more than
   "img-6.webp". Every entry carries its own alt text for the same reason. */

const A = "/images/about/";

export const aboutHero = {
  eyebrow: "Empowering the future",
  titleLead: "Engineering Smarter Water Solutions for a",
  titleAccent: "Sustainable Tomorrow",
  subtitle:
    "Hydroscope develops intelligent water treatment, monitoring, and automation solutions that combine advanced engineering, IoT connectivity, and real-time analytics to ensure safe, efficient, and reliable water management.",
  /* Shared with the homepage hero rather than duplicated: it is the same
     photograph, and a second copy would only add weight and a second file to
     keep in step. */
  image: "/images/hero/hero-hydroscope-banner-desktop.webp",
  imageAlt:
    "HydroPure electrochlorinator and a HydroSense handheld water quality sensor on a stainless bench inside a treatment plant, with the HydroSure dashboard showing tanks online, alerts and residual chlorine on the screen behind"
};

export const whoWeAre = {
  eyebrow: "Who we are",
  paragraphs: [
    "Hydroscope Technology Pvt. Ltd. is a water technology company dedicated to solving real-world water management challenges through innovation and engineering excellence.",
    "We develop integrated solutions that combine fully automated electrochlorination systems, intelligent water quality sensors, industrial automation, and cloud-based monitoring into one connected ecosystem."
  ],
  image: A + "hydroscope-municipal-water-treatment-plant-city-skyline.webp",
  imageAlt:
    "Aerial view of a municipal water treatment plant, its circular clarifiers and treatment buildings, with a city skyline on the horizon"
};

/* Reach figures as set out in the design. These are company claims, not
   readings from a dashboard - see the note rendered under the row. */
export const impact = {
  icon: A + "icon-har-ghar-jal.webp",
  titleLine1: "From Har Ghar Jal",
  titleLine2: "to Har Ghar",
  titleAccent: "Swachh Jal.",
  subtitle:
    "Empowering every community with intelligent water solutions for a safer and healthier tomorrow.",
  stats: [
    { value: "1,250+", label: "Installations", icon: A + "icon-water-installations.webp" },
    { value: "142+", label: "Cities", icon: A + "icon-cities-covered.webp" },
    { value: "0.72", label: "Million People Impacted", icon: A + "icon-people-impacted.webp" },
    { value: "120+", label: "MLD Water Treated Daily", icon: A + "icon-water-treated-daily.webp" }
  ]
};

export const whatWeBuild = {
  eyebrow: "What we build",
  title: "Five products, one connected ecosystem",
  items: [
    {
      title: "Fully Automated Electrochlorinator",
      href: "/solutions/hydropure",
      image: A + "product-fully-automated-electrochlorinator.webp",
      imageAlt: "HydroPure fully automated electrochlorinator cabinet with on-board controller"
    },
    {
      title: "Intelligent Multi Parametric Water Quality Sensor",
      href: "/solutions/hydrosense",
      image: A + "product-multi-parameter-water-quality-sensor.webp",
      imageAlt: "HydroSense handheld multi-parameter water quality sensor with its reading display"
    },
    {
      title: "IoT Dashboard",
      href: "/solutions/hydrosure",
      image: A + "product-iot-water-monitoring-dashboard.webp",
      imageAlt: "HydroSure IoT water monitoring dashboard open on a laptop"
    },
    {
      title: "Fully Automated Valve and Pump Controller",
      href: "/solutions/other-iot-solutions#hydropilot",
      image: A + "product-automated-valve-and-pump-controller.webp",
      imageAlt: "HydroPilot automated valve and pump controller mounted on a stainless steel water line"
    },
    {
      title: "Tank Level Module",
      href: "/solutions/other-iot-solutions#hydroedge",
      image: A + "product-iot-water-tank-level-module.webp",
      imageAlt: "HydroEdge IoT water tank level module"
    }
  ]
};

export const whyHydroscope = {
  eyebrow: "Why HydroScope?",
  intro:
    "Our expertise extends beyond products. We work closely with customers to deliver scalable water quality and distribution solutions that improve operational performance, strengthen compliance, and support long-term sustainability.",
  cards: [
    {
      title: "Engineered for Reliability",
      text: "Products designed for demanding field conditions.",
      icon: A + "icon-engineered-for-reliability.webp"
    },
    {
      title: "Intelligent Automation",
      text: "Reduce manual effort through automated monitoring and control.",
      icon: A + "icon-intelligent-automation.webp"
    },
    {
      title: "End-to-End Solutions",
      text: "Hardware, software, installation, and support from one trusted partner.",
      icon: A + "icon-end-to-end-solutions.webp"
    },
    {
      title: "Real-Time Visibility",
      text: "Monitor assets and water quality from anywhere.",
      icon: A + "icon-real-time-visibility.webp"
    },
    {
      title: "Scalable Architecture",
      text: "Solutions for single installations or large multi-site deployments.",
      icon: A + "icon-scalable-architecture.webp"
    },
    {
      title: "Expert Support",
      text: "Dedicated engineering and technical assistance throughout the project lifecycle.",
      icon: A + "icon-expert-support.webp"
    }
  ]
};

export const industriesWeServe = {
  eyebrow: "Industries we serve",
  items: [
    {
      title: "Municipal Water Supply",
      image: A + "industry-municipal-water-supply-treatment-plant.webp",
      imageAlt: "Municipal water supply treatment plant with circular clarifiers and storage tanks"
    },
    {
      title: "Drinking Water Projects",
      image: A + "industry-drinking-water-project-treated-water.webp",
      imageAlt: "Glass of treated drinking water beside a water treatment works"
    },
    {
      title: "Rural Water Schemes",
      image: A + "industry-rural-water-scheme-village-overhead-tank.webp",
      imageAlt: "Village overhead water tank serving a rural water supply scheme in India"
    },
    {
      title: "Industrial Water Treatment",
      image: A + "industry-industrial-water-treatment-plant.webp",
      imageAlt: "Industrial water treatment plant with clarifiers and process towers"
    },
    {
      title: "Manufacturing",
      image: A + "industry-manufacturing-plant-process-water.webp",
      imageAlt: "Robotic assembly line inside a manufacturing plant that runs on process water"
    },
    {
      title: "Hospitals",
      image: A + "industry-hospital-healthcare-facility-water.webp",
      imageAlt: "Hospital campus entrance where water quality is monitored continuously"
    },
    {
      title: "Educational Institutions",
      image: A + "industry-educational-institution-campus-water.webp",
      imageAlt: "University campus buildings and courtyard served by a campus water network"
    },
    {
      title: "Commercial Buildings",
      image: A + "industry-commercial-building-water-management.webp",
      imageAlt: "Glass commercial office building with a managed water supply system"
    },
    {
      title: "Hospitality",
      image: A + "industry-hospitality-hotel-pool-water-treatment.webp",
      imageAlt: "Hotel swimming pool at dusk with treated and monitored pool water"
    },
    {
      title: "Government Infrastructure",
      image: A + "industry-government-infrastructure-water-supply.webp",
      imageAlt: "Government administrative building with fountains and a public water supply"
    }
  ]
};

export const howWeThink = {
  eyebrow: "How we think",
  items: [
    { title: "Innovation", text: "Continuously advancing water technologies.", icon: A + "icon-innovation.webp" },
    { title: "Quality", text: "Engineering products built to perform.", icon: A + "icon-quality-engineering.webp" },
    {
      title: "Sustainability",
      text: "Helping conserve water and protect public health.",
      icon: A + "icon-sustainability.webp"
    },
    {
      title: "Customer Success",
      text: "Building long-term partnerships through dependable solutions.",
      icon: A + "icon-customer-success.webp"
    }
  ]
};
