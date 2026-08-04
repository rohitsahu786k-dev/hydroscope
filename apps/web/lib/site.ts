export const siteConfig = {
  name: "HYDROscope",
  legalName: "HYDROscope",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hydroscope.in",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api",
  email: "sudhanshu@hydroscope.in",
  phone: "+91 95820 16238",
  location: "4/162, 1st Floor, Shipra Path, SFS Mansarovar, Jaipur, Rajasthan 302020, India",
  tagline: "Reliable water intelligence",
  description:
    "HydroPure electrochlorination, HydroSense water-quality sensing and HydroSure IoT real-time monitoring for safe water infrastructure."
};

/* Navigation follows the content guide: Products is gone as a top-level entry
   and Solutions carries the whole product range as a dropdown, with the smaller
   IoT modules nested one level deeper. */
export type NavItem = { label: string; href: string; children?: NavItem[] };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  /* "Why Choose Us" is a homepage section in the guide, not its own page. */
  { label: "Why Choose Us", href: "/#why-choose-us" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "HydroPure", href: "/solutions/hydropure" },
      { label: "HydroSense", href: "/solutions/hydrosense" },
      { label: "HydroSure", href: "/solutions/hydrosure" },
      {
        label: "Other IoT Solutions",
        href: "/solutions/other-iot-solutions",
        children: [
          { label: "HydroPilot", href: "/solutions/other-iot-solutions#hydropilot" },
          { label: "HydroEdge", href: "/solutions/other-iot-solutions#hydroedge" },
          { label: "HydroVerse", href: "/solutions/hydroverse" }
        ]
      }
    ]
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;
