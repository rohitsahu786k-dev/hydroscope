import type { Field } from "payload";

export const publishedField: Field = {
  name: "status",
  type: "select",
  defaultValue: "draft",
  required: true,
  options: [
    { label: "Draft", value: "draft" },
    { label: "Published", value: "published" },
    { label: "Scheduled", value: "scheduled" }
  ],
  admin: { position: "sidebar" }
};

export const slugField: Field = {
  name: "slug",
  type: "text",
  required: true,
  unique: true,
  index: true,
  admin: {
    position: "sidebar",
    description: "Clean SEO URL slug. Auto-generate from title, then edit manually if needed."
  }
};

export const faqArrayField: Field = {
  name: "faqs",
  type: "array",
  label: "FAQs",
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true }
  ]
};

export const linkFields: Field[] = [
  { name: "label", type: "text", required: true },
  {
    name: "linkType",
    type: "radio",
    defaultValue: "internal",
    options: [
      { label: "Internal", value: "internal" },
      { label: "External", value: "external" }
    ]
  },
  { name: "url", type: "text", required: true },
  { name: "openInNewTab", type: "checkbox", defaultValue: false },
  { name: "sortOrder", type: "number", defaultValue: 0 },
  { name: "published", type: "checkbox", defaultValue: true }
];

export const schemaFields: Field[] = [
  {
    name: "schemaType",
    type: "select",
    defaultValue: "WebPage",
    options: ["WebPage", "Product", "Service", "Article", "BlogPosting", "ContactPage", "AboutPage", "CollectionPage", "BreadcrumbList", "Organization", "LocalBusiness"]
  },
  {
    name: "customJsonLd",
    type: "json",
    admin: { description: "Optional custom JSON-LD. Avoid fake ratings, reviews, prices, awards or certifications." }
  }
];

export const seoHelperFields: Field[] = [
  { name: "focusKeyword", type: "text" },
  { name: "secondaryKeywords", type: "array", fields: [{ name: "keyword", type: "text", required: true }] },
  { name: "canonicalUrl", type: "text" },
  { name: "robotsNoIndex", type: "checkbox", defaultValue: false },
  { name: "robotsNoFollow", type: "checkbox", defaultValue: false },
  { name: "ogTitle", type: "text" },
  { name: "ogDescription", type: "textarea" },
  { name: "ogImage", type: "upload", relationTo: "media" },
  { name: "twitterTitle", type: "text" },
  { name: "twitterDescription", type: "textarea" },
  { name: "twitterImage", type: "upload", relationTo: "media" },
  ...schemaFields,
  {
    name: "seoScore",
    type: "select",
    defaultValue: "ok",
    options: ["poor", "ok", "good", "excellent"],
    admin: { description: "Practical editorial checklist score inspired by SEO tools; not a Yoast/RankMath equivalent." }
  },
  {
    name: "seoChecklist",
    type: "group",
    fields: [
      { name: "keywordUsedInTitle", type: "checkbox" },
      { name: "keywordUsedInSlug", type: "checkbox" },
      { name: "keywordUsedInIntro", type: "checkbox" },
      { name: "hasInternalLinks", type: "checkbox" },
      { name: "hasExternalLinks", type: "checkbox" },
      { name: "hasImageAltText", type: "checkbox" },
      { name: "goodHeadingStructure", type: "checkbox" },
      { name: "healthyWordCount", type: "checkbox" },
      { name: "readabilityNotes", type: "textarea" }
    ]
  }
];
