import type { CollectionConfig } from "payload";
import { faqArrayField, publishedField, schemaFields, slugField } from "./fields";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: { useAsTitle: "title", defaultColumns: ["title", "slug", "status", "publishedDate"], group: "Blog" },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", required: true },
    slugField,
    { name: "excerpt", type: "textarea", required: true },
    { name: "featuredImage", type: "upload", relationTo: "media" },
    { name: "content", type: "richText", required: true },
    { name: "author", type: "text", defaultValue: "HYDROscope Team" },
    { name: "category", type: "relationship", relationTo: "categories" },
    { name: "tags", type: "relationship", relationTo: "tags", hasMany: true },
    { name: "tableOfContents", type: "json", admin: { readOnly: true, description: "Can be generated from heading blocks during publishing." } },
    { name: "readingTime", type: "text", admin: { description: "Example: 4 min read" } },
    { name: "publishedDate", type: "date" },
    { name: "modifiedDate", type: "date" },
    { name: "relatedProducts", type: "relationship", relationTo: "products", hasMany: true },
    { name: "relatedSolutions", type: "relationship", relationTo: "solutions", hasMany: true },
    { name: "relatedPosts", type: "relationship", relationTo: "blog-posts", hasMany: true },
    { name: "focusKeyword", type: "text" },
    { name: "secondaryKeywords", type: "array", fields: [{ name: "keyword", type: "text", required: true }] },
    { name: "seoHelper", type: "group", fields: [
      { name: "seoTitleLength", type: "number", admin: { readOnly: true } },
      { name: "metaDescriptionLength", type: "number", admin: { readOnly: true } },
      { name: "keywordUsageNotes", type: "textarea" },
      { name: "slugQualityNotes", type: "textarea" },
      { name: "headingStructureNotes", type: "textarea" },
      { name: "internalLinkSuggestions", type: "textarea" },
      { name: "externalLinkNotes", type: "textarea" },
      { name: "imageAltTextReminder", type: "checkbox" },
      { name: "wordCount", type: "number" },
      { name: "readabilityHints", type: "textarea" },
      { name: "checklistScore", type: "select", defaultValue: "ok", options: ["poor", "ok", "good", "excellent"] }
    ] },
    { name: "schema", type: "group", fields: schemaFields },
    faqArrayField,
    publishedField
  ]
};
