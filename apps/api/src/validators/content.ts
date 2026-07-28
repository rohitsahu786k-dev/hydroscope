import { z } from "zod";

export const seoValidator = z.object({
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  canonicalUrl: z.string().url().optional().or(z.literal("")),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  noIndex: z.boolean().optional(),
  focusKeywords: z.array(z.string()).optional()
});

export const contentValidator = z.object({
  title: z.string().min(1),
  slug: z.string().optional(),
  excerpt: z.string().min(1),
  body: z.string().min(1),
  status: z.enum(["draft", "published"]).default("draft"),
  featuredImage: z.string().optional(),
  seo: seoValidator
});

export const enquiryValidator = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().min(2),
  requirementType: z.string().min(2),
  interest: z.string().optional(),
  message: z.string().min(10),
  consent: z.literal(true),
  website: z.string().optional()
});
