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

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Applications", href: "/applications" },
  { label: "Dashboard", href: "/dashboard-platform" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
] as const;
