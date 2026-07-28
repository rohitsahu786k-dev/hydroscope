import type { Block } from "payload";

const ctaFields = [
  { name: "label", type: "text" as const },
  { name: "url", type: "text" as const }
];

export const HeroBlock: Block = {
  slug: "hero",
  labels: { singular: "Hero Block", plural: "Hero Blocks" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "textarea" },
    { name: "primaryCta", type: "group", fields: ctaFields },
    { name: "secondaryCta", type: "group", fields: ctaFields },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "dashboardPreview", type: "checkbox", defaultValue: true }
  ]
};

export const TextBlock: Block = {
  slug: "textBlock",
  labels: { singular: "Text Block", plural: "Text Blocks" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    { name: "body", type: "richText" }
  ]
};

export const ImageTextBlock: Block = {
  slug: "imageText",
  labels: { singular: "Image + Text", plural: "Image + Text Blocks" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "body", type: "textarea" },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "imagePosition", type: "select", defaultValue: "right", options: ["left", "right"] }
  ]
};

export const FeatureGridBlock: Block = {
  slug: "featureGrid",
  labels: { singular: "Feature Grid", plural: "Feature Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    {
      name: "features",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea" },
        { name: "icon", type: "select", options: ["drop", "sensor", "cloud", "ai", "alert", "chart", "shield", "leaf"] }
      ]
    }
  ]
};

export const ProductGridBlock: Block = {
  slug: "productGrid",
  labels: { singular: "Product Grid", plural: "Product Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    { name: "products", type: "relationship", relationTo: "products", hasMany: true }
  ]
};

export const SolutionGridBlock: Block = {
  slug: "solutionGrid",
  labels: { singular: "Solution Grid", plural: "Solution Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    { name: "solutions", type: "relationship", relationTo: "solutions", hasMany: true }
  ]
};

export const StatsBlock: Block = {
  slug: "stats",
  labels: { singular: "Stats Block", plural: "Stats Blocks" },
  fields: [
    {
      name: "stats",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        { name: "note", type: "text" }
      ]
    }
  ]
};

export const DashboardPreviewBlock: Block = {
  slug: "dashboardPreview",
  labels: { singular: "Dashboard Preview", plural: "Dashboard Previews" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "image", type: "upload", relationTo: "media" }
  ]
};

export const CtaBlock: Block = {
  slug: "cta",
  labels: { singular: "CTA", plural: "CTAs" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "button", type: "group", fields: ctaFields }
  ]
};

export const FaqBlock: Block = {
  slug: "faq",
  labels: { singular: "FAQ Block", plural: "FAQ Blocks" },
  fields: [
    { name: "heading", type: "text" },
    { name: "faqs", type: "relationship", relationTo: "faqs", hasMany: true }
  ]
};

export const ContactFormBlock: Block = {
  slug: "contactForm",
  labels: { singular: "Contact Form", plural: "Contact Forms" },
  fields: [{ name: "heading", type: "text" }, { name: "description", type: "textarea" }]
};

export const BlogGridBlock: Block = {
  slug: "blogGrid",
  labels: { singular: "Blog Grid", plural: "Blog Grids" },
  fields: [{ name: "heading", type: "text" }, { name: "posts", type: "relationship", relationTo: "blog-posts", hasMany: true }]
};

export const CaseStudyGridBlock: Block = {
  slug: "caseStudyGrid",
  labels: { singular: "Case Study Grid", plural: "Case Study Grids" },
  fields: [{ name: "heading", type: "text" }, { name: "caseStudies", type: "relationship", relationTo: "case-studies", hasMany: true }]
};

export const pageBlocks = [
  HeroBlock,
  TextBlock,
  ImageTextBlock,
  FeatureGridBlock,
  ProductGridBlock,
  SolutionGridBlock,
  StatsBlock,
  DashboardPreviewBlock,
  CtaBlock,
  FaqBlock,
  ContactFormBlock,
  BlogGridBlock,
  CaseStudyGridBlock
];
