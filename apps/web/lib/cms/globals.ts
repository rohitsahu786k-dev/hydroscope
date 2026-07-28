import { navItems, siteConfig } from "@/lib/site";
import { getPayloadClient, tryPayload } from "./payload";

type LinkItem = {
  label?: string;
  url?: string;
  openInNewTab?: boolean;
  published?: boolean;
  sortOrder?: number;
};

type Media = { url?: string; alt?: string };

export type HeaderData = {
  logo?: Media;
  menuItems: Array<{ label: string; href: string; openInNewTab?: boolean }>;
  cta: { label: string; href: string };
};

export type FooterData = {
  logo?: Media;
  description: string;
  columns: Array<{ heading: string; links: Array<{ label: string; href: string; openInNewTab?: boolean }> }>;
  bottomText: string;
};

export type HomeData = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    primaryCtaUrl: string;
    secondaryCtaLabel: string;
    secondaryCtaUrl: string;
    image?: Media;
    dashboardPreview?: boolean;
  };
};

function normalizeLinks(items?: LinkItem[]) {
  return (items ?? [])
    .filter((item) => item.published !== false && item.label && item.url)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
    .map((item) => ({ label: item.label as string, href: item.url as string, openInNewTab: item.openInNewTab }));
}

export async function getHeaderData(): Promise<HeaderData> {
  return tryPayload(async () => {
    const payload = await getPayloadClient();
    const header = (await payload.findGlobal({ slug: "header", depth: 2 })) as { logo?: Media; menuItems?: LinkItem[]; cta?: LinkItem };
    const menuItems = normalizeLinks(header.menuItems);
    return {
      logo: header.logo,
      menuItems: menuItems.length ? menuItems : navItems.map((item) => ({ label: item.label, href: item.href })),
      cta: { label: header.cta?.label || "Get in touch", href: header.cta?.url || "/contact" }
    };
  }, { logo: undefined, menuItems: navItems.map((item) => ({ label: item.label, href: item.href })), cta: { label: "Get in touch", href: "/contact" } });
}

export async function getFooterData(): Promise<FooterData> {
  return tryPayload(async () => {
    const payload = await getPayloadClient();
    const footer = (await payload.findGlobal({ slug: "footer", depth: 2 })) as {
      logo?: Media;
      description?: string;
      columns?: Array<{ heading: string; links?: LinkItem[] }>;
      bottomText?: string;
    };
    return {
      logo: footer.logo,
      description: footer.description || siteConfig.description,
      columns:
        footer.columns?.map((column) => ({ heading: column.heading, links: normalizeLinks(column.links) })) ?? [],
      bottomText: footer.bottomText || "Quality Water for a Quality Life."
    };
  }, {
    logo: undefined,
    description: siteConfig.description,
    columns: [],
    bottomText: "Quality Water for a Quality Life."
  });
}

export async function getHomeData(): Promise<HomeData> {
  return tryPayload(async () => {
    const payload = await getPayloadClient();
    const home = (await payload.findGlobal({ slug: "home-page", depth: 2 })) as HomeData;
    return home;
  }, {
    hero: {
      eyebrow: "ON-SITE CHLORINE GENERATION | IOT ENABLED | SOLAR COMPATIBLE",
      title: "Intelligent Water Safety Infrastructure for India's Water Networks",
      subtitle: "HydroPure generates disinfectant on-site using salt, water and electricity. It helps villages, municipalities and institutions automate chlorination with real-time monitoring.",
      primaryCtaLabel: "Request demo",
      primaryCtaUrl: "/request-demo",
      secondaryCtaLabel: "Request demo",
      secondaryCtaUrl: "/contact",
      dashboardPreview: true
    }
  });
}
