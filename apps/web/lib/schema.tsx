import type { BlogPosting, Organization, Product, WebPage, WithContext } from "schema-dts";
import type { BlogPost, Product as ProductContent } from "@hydroscope/types";
import { absoluteUrl } from "./seo";
import { siteConfig } from "./site";

export function organizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN"
    }
  };
}

export function webpageSchema(title: string, description: string, path: string): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path)
  };
}

export function productSchema(product: ProductContent): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.excerpt,
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: { "@type": "Organization", name: siteConfig.name }
  };
}

export function blogPostingSchema(post: BlogPost, path: string): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: absoluteUrl(path),
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name }
  };
}

export function JsonLdScript({ data }: { data: WithContext<Organization | WebPage | Product | BlogPosting> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
