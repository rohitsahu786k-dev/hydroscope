import type { CollectionConfig } from "payload";
import { faqArrayField, publishedField, schemaFields, slugField } from "./fields";

export const Solutions: CollectionConfig = {
  slug: "solutions",
  admin: { useAsTitle: "name", defaultColumns: ["name", "slug", "status"], group: "Content" },
  versions: { drafts: true },
  fields: [
    { name: "name", type: "text", required: true },
    slugField,
    { name: "heroHeading", type: "text" },
    { name: "shortDescription", type: "textarea", required: true },
    { name: "content", type: "richText" },
    { name: "benefits", type: "array", fields: [{ name: "benefit", type: "text", required: true }] },
    { name: "process", type: "array", fields: [{ name: "step", type: "text", required: true }, { name: "description", type: "textarea" }] },
    { name: "relatedProducts", type: "relationship", relationTo: "products", hasMany: true },
    { name: "relatedApplications", type: "relationship", relationTo: "applications", hasMany: true },
    faqArrayField,
    { name: "schema", type: "group", fields: schemaFields },
    publishedField
  ]
};
