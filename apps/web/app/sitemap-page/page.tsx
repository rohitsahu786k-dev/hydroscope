import Link from "next/link";
import { Container } from "@/components/ui/container";
import { blogPosts, caseStudies, products, solutions } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Sitemap | HYDROscope", description: "HTML sitemap for HYDROscope products, solutions, insights and company pages.", path: "/sitemap-page" });

export default function SitemapPage() {
  const links = [
    ["/", "Home"],
    ["/about", "About Us"],
    ["/products", "Products"],
    ["/solutions", "Solutions"],
    ["/applications", "Applications"],
    ["/how-it-works", "How It Works"],
    ["/dashboard-platform", "Dashboard / Platform"],
    ["/installation-maintenance", "Installation & Maintenance"],
    ["/resources", "Resources"],
    ["/request-demo", "Request Demo"],
    ["/blog", "Blog"],
    ["/case-studies", "Case Studies"],
    ["/contact", "Contact Us"],
    ...products.map((item) => [`/products/${item.slug}`, item.title]),
    ...solutions.map((item) => [`/solutions/${item.slug}`, item.title]),
    ...blogPosts.map((item) => [`/blog/${item.slug}`, item.title]),
    ...caseStudies.map((item) => [`/case-studies/${item.slug}`, item.title])
  ];

  return (
    <main className="hydro-section">
      <Container>
        <h1 className="text-5xl font-extrabold">Sitemap</h1>
        <div className="mt-8 grid grid-cols-3 gap-3 max-lg:grid-cols-1">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="rounded-md border border-hydro-line bg-white p-4 text-sm font-bold text-hydro-blue">
              {label}
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
