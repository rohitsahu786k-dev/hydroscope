import type { CollectionConfig } from "payload";
import { publishedField, schemaFields, slugField } from "./fields";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: { useAsTitle: "title", group: "Content" },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", required: true },
    slugField,
    { name: "industry", type: "text" },
    { name: "excerpt", type: "textarea" },
    { name: "problem", type: "textarea" },
    { name: "solution", type: "textarea" },
    { name: "results", type: "textarea", admin: { description: "Use only verified outcomes. Avoid fake claims." } },
    { name: "images", type: "upload", relationTo: "media", hasMany: true },
    { name: "relatedProducts", type: "relationship", relationTo: "products", hasMany: true },
    { name: "relatedSolutions", type: "relationship", relationTo: "solutions", hasMany: true },
    { name: "schema", type: "group", fields: schemaFields },
    publishedField
  ]
};
