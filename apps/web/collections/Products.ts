import type { CollectionConfig } from "payload";
import { faqArrayField, publishedField, schemaFields, slugField } from "./fields";

export const Products: CollectionConfig = {
  slug: "products",
  admin: { useAsTitle: "name", defaultColumns: ["name", "slug", "status", "updatedAt"], group: "Content" },
  versions: { drafts: true },
  fields: [
    { name: "name", type: "text", required: true },
    slugField,
    { name: "subtitle", type: "text" },
    { name: "shortDescription", type: "textarea", required: true },
    { name: "longDescription", type: "richText" },
    { name: "featuredImage", type: "upload", relationTo: "media" },
    { name: "gallery", type: "upload", relationTo: "media", hasMany: true },
    { name: "keyFeatures", type: "array", fields: [{ name: "feature", type: "text", required: true }] },
    { name: "technicalParameters", type: "array", fields: [{ name: "parameter", type: "text", required: true }, { name: "value", type: "text" }] },
    { name: "useCases", type: "array", fields: [{ name: "useCase", type: "text", required: true }] },
    { name: "applications", type: "relationship", relationTo: "applications", hasMany: true },
    faqArrayField,
    { name: "brochure", type: "upload", relationTo: "media" },
    { name: "relatedSolutions", type: "relationship", relationTo: "solutions", hasMany: true },
    { name: "relatedBlogs", type: "relationship", relationTo: "blog-posts", hasMany: true },
    { name: "schema", type: "group", fields: schemaFields },
    publishedField
  ]
};
