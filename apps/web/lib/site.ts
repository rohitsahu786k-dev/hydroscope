export const siteConfig = {
  name: "HYDROscope",
  legalName: "HYDROscope",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hydroscope.in",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api",
  email: "sudhanshu@hydroscope.in",
  phone: "+91 95820 16238",
  location: "4/162, 1st Floor, Shipra Path, SFS Mansarovar, Jaipur, Rajasthan 302020, India",
  tagline: "Transforming Lives. Reliable Solutions",
  description:
    "IoT solutions, water quality monitoring, smart electrochlorination and AI-powered water analytics for safer, smarter and more sustainable water infrastructure."
};

export const navItems = [
  { label: "Why Choose Us", href: "/#why-hydroscope" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;
