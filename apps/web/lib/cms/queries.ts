import type { BlogPost, CaseStudy, Product, Solution } from "@hydroscope/types";
import { blogPosts, caseStudies, faqs, products, solutions } from "@/lib/content";
import { getPayloadClient, tryPayload } from "./payload";

type PayloadMedia = { url?: string; alt?: string };
type PayloadMeta = {
  title?: string;
  description?: string;
  image?: PayloadMedia;
  canonicalUrl?: string;
  robotsNoIndex?: boolean;
  robotsNoFollow?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: PayloadMedia;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: PayloadMedia;
  focusKeyword?: string;
  secondaryKeywords?: Array<{ keyword: string }>;
};

type PayloadProduct = {
  id: string;
  name: string;
  slug: string;
  subtitle?: string;
  shortDescription: string;
  keyFeatures?: Array<{ feature: string }>;
  technicalParameters?: Array<{ parameter: string; value?: string }>;
  useCases?: Array<{ useCase: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  featuredImage?: PayloadMedia;
  meta?: PayloadMeta;
  updatedAt?: string;
  createdAt?: string;
  status?: "draft" | "published" | "scheduled";
};

type PayloadSolution = {
  id: string;
  name: string;
  slug: string;
  heroHeading?: string;
  shortDescription: string;
  benefits?: Array<{ benefit: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  featuredImage?: PayloadMedia;
  meta?: PayloadMeta;
  updatedAt?: string;
  createdAt?: string;
  status?: "draft" | "published" | "scheduled";
};

type PayloadPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author?: string;
  readingTime?: string;
  publishedDate?: string;
  modifiedDate?: string;
  tags?: Array<{ name?: string } | string>;
  featuredImage?: PayloadMedia;
  meta?: PayloadMeta;
  updatedAt?: string;
  createdAt?: string;
  status?: "draft" | "published" | "scheduled";
};

type PayloadCaseStudy = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  industry?: string;
  problem?: string;
  solution?: string;
  results?: string;
  featuredImage?: PayloadMedia;
  meta?: PayloadMeta;
  updatedAt?: string;
  createdAt?: string;
  status?: "draft" | "published" | "scheduled";
};

const publishedWhere = { status: { equals: "published" } };

function imageUrl(media?: PayloadMedia) {
  return media?.url || undefined;
}

function seo(meta: PayloadMeta | undefined, title: string, description: string) {
  return {
    metaTitle: meta?.title || title,
    metaDescription: meta?.description || description,
    canonicalUrl: meta?.canonicalUrl,
    ogTitle: meta?.ogTitle,
    ogDescription: meta?.ogDescription,
    ogImage: imageUrl(meta?.ogImage || meta?.image),
    noIndex: meta?.robotsNoIndex,
    focusKeywords: [meta?.focusKeyword, ...(meta?.secondaryKeywords?.map((item) => item.keyword) ?? [])].filter(Boolean) as string[]
  };
}

function productFromPayload(item: PayloadProduct): Product {
  return {
    id: item.id,
    title: item.name,
    slug: item.slug,
    subtitle: item.subtitle || "",
    category: "CMS Product",
    excerpt: item.shortDescription,
    body: item.shortDescription,
    status: item.status === "published" ? "published" : "draft",
    featuredImage: imageUrl(item.featuredImage),
    gallery: [],
    brochureUrl: undefined,
    features: item.keyFeatures?.map((field) => field.feature) ?? [],
    applications: item.useCases?.map((field) => field.useCase) ?? [],
    parameters: item.technicalParameters?.map((field) => [field.parameter, field.value].filter(Boolean).join(": ")) ?? [],
    faqs: item.faqs ?? faqs,
    seo: seo(item.meta, `${item.name} | HYDROscope`, item.shortDescription),
    updatedAt: item.updatedAt || new Date().toISOString(),
    createdAt: item.createdAt || new Date().toISOString()
  };
}

function solutionFromPayload(item: PayloadSolution): Solution {
  return {
    id: item.id,
    title: item.name,
    slug: item.slug,
    excerpt: item.shortDescription,
    body: item.shortDescription,
    status: item.status === "published" ? "published" : "draft",
    featuredImage: imageUrl(item.featuredImage),
    outcomes: item.benefits?.map((field) => field.benefit) ?? [],
    relatedProducts: [],
    applications: [],
    faqs: item.faqs ?? faqs,
    seo: seo(item.meta, `${item.name} | HYDROscope`, item.shortDescription),
    updatedAt: item.updatedAt || new Date().toISOString(),
    createdAt: item.createdAt || new Date().toISOString()
  };
}

function postFromPayload(item: PayloadPost): BlogPost {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.excerpt,
    status: item.status === "published" ? "published" : "draft",
    featuredImage: imageUrl(item.featuredImage),
    author: item.author || "HYDROscope Team",
    readingTime: item.readingTime || "4 min read",
    tags: item.tags?.map((tag) => (typeof tag === "string" ? tag : tag.name || "")).filter(Boolean) ?? [],
    seo: seo(item.meta, `${item.title} | HYDROscope Insights`, item.excerpt),
    updatedAt: item.modifiedDate || item.updatedAt || new Date().toISOString(),
    createdAt: item.publishedDate || item.createdAt || new Date().toISOString()
  };
}

function caseStudyFromPayload(item: PayloadCaseStudy): CaseStudy {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt || "",
    body: item.excerpt || "",
    status: item.status === "published" ? "published" : "draft",
    featuredImage: imageUrl(item.featuredImage),
    sector: item.industry || "Water infrastructure",
    challenge: item.problem || "",
    solution: item.solution || "",
    resultsNote: item.results || "",
    seo: seo(item.meta, `${item.title} | HYDROscope`, item.excerpt || item.title),
    updatedAt: item.updatedAt || new Date().toISOString(),
    createdAt: item.createdAt || new Date().toISOString()
  };
}

export async function getProducts() {
  return tryPayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({ collection: "products", where: publishedWhere, depth: 2, limit: 100 });
    return result.docs.length ? (result.docs as unknown as PayloadProduct[]).map(productFromPayload) : products;
  }, products);
}

export async function getProduct(slug: string) {
  const items = await getProducts();
  return items.find((item) => item.slug === slug);
}

export async function getSolutions() {
  return tryPayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({ collection: "solutions", where: publishedWhere, depth: 2, limit: 100 });
    return result.docs.length ? (result.docs as unknown as PayloadSolution[]).map(solutionFromPayload) : solutions;
  }, solutions);
}

export async function getSolution(slug: string) {
  const items = await getSolutions();
  return items.find((item) => item.slug === slug);
}

export async function getBlogPosts() {
  return tryPayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({ collection: "blog-posts", where: publishedWhere, depth: 2, limit: 100, sort: "-publishedDate" });
    return result.docs.length ? (result.docs as unknown as PayloadPost[]).map(postFromPayload) : blogPosts;
  }, blogPosts);
}

export async function getBlogPost(slug: string) {
  const items = await getBlogPosts();
  return items.find((item) => item.slug === slug);
}

export async function getCaseStudies() {
  return tryPayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({ collection: "case-studies", where: publishedWhere, depth: 2, limit: 100 });
    return result.docs.length ? (result.docs as unknown as PayloadCaseStudy[]).map(caseStudyFromPayload) : caseStudies;
  }, caseStudies);
}

export async function getCaseStudy(slug: string) {
  const items = await getCaseStudies();
  return items.find((item) => item.slug === slug);
}
