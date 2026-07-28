import type { Metadata } from "next";
import { siteConfig } from "./site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata(input: MetadataInput): Metadata {
  const canonical = absoluteUrl(input.path);
  const image = input.image ?? "/images/og-hydroscope.svg";
  const robots = input.noIndex ? { index: false, follow: false } : { index: true, follow: true };

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    robots,
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: `${siteConfig.name} smart water solutions` }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image]
    }
  };
}
