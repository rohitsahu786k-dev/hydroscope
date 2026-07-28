import { ArticleJsonLd, BreadcrumbJsonLd, FAQPageJsonLd, ProductJsonLd } from "next-seo";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import type { Faq, Product } from "@hydroscope/types";
import { JsonLdScript, organizationSchema } from "@/lib/schema";

export function OrganizationJsonLd() {
  return <JsonLdScript data={organizationSchema()} />;
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; item: string }> }) {
  return (
    <BreadcrumbJsonLd
      useAppDir
      itemListElements={[
        { position: 1, name: "Home", item: siteConfig.url },
        ...items.map((item, index) => ({ position: index + 2, name: item.name, item: absoluteUrl(item.item) }))
      ]}
    />
  );
}

export function ProductSchema({ product }: { product: Product }) {
  return (
    <ProductJsonLd
      useAppDir
      productName={product.title}
      description={product.excerpt}
      images={[absoluteUrl(product.featuredImage ?? "/images/og-hydroscope.svg")]}
      brand={siteConfig.name}
      manufacturerName={siteConfig.name}
    />
  );
}

export function ArticleSchema({ title, description, path, date }: { title: string; description: string; path: string; date: string }) {
  return (
    <ArticleJsonLd
      useAppDir
      url={absoluteUrl(path)}
      title={title}
      images={[absoluteUrl("/images/og-hydroscope.svg")]}
      datePublished={date}
      dateModified={date}
      authorName="HYDROscope Team"
      publisherName={siteConfig.name}
      publisherLogo={absoluteUrl("/images/og-hydroscope.svg")}
      description={description}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: Faq[] }) {
  return (
    <FAQPageJsonLd
      useAppDir
      mainEntity={faqs.map((faq) => ({
        questionName: faq.question,
        acceptedAnswerText: faq.answer
      }))}
    />
  );
}
