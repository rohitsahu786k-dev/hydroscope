import type { MetadataRoute } from "next";
import { getBlogPosts, getCaseStudies, getProducts, getSolutions } from "@/lib/cms/queries";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, solutions, blogPosts, caseStudies] = await Promise.all([getProducts(), getSolutions(), getBlogPosts(), getCaseStudies()]);
  const staticPaths = [
    "/",
    "/about",
    "/products",
    "/solutions",
    /* The five range pages the content guide adds under Solutions. */
    "/solutions/hydropure",
    "/solutions/hydrosense",
    "/solutions/hydrosure",
    "/solutions/other-iot-solutions",
    "/solutions/hydroverse",
    "/applications",
    "/how-it-works",
    "/dashboard-platform",
    "/installation-maintenance",
    "/resources",
    "/request-demo",
    "/blog",
    "/case-studies",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/sitemap-page"
  ];
  const dynamicPaths = [
    ...products.map((item) => `/products/${item.slug}`),
    ...solutions.map((item) => `/solutions/${item.slug}`),
    ...blogPosts.map((item) => `/blog/${item.slug}`),
    ...caseStudies.map((item) => `/case-studies/${item.slug}`)
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-07-27"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/blog/") ? 0.6 : 0.8
  }));
}
