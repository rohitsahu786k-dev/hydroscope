import type { CollectionConfig } from "payload";
import { publishedField, schemaFields, slugField } from "./fields";

export const Applications: CollectionConfig = {
  slug: "applications",
  admin: { useAsTitle: "name", group: "Content" },
  versions: { drafts: true },
  fields: [
    { name: "name", type: "text", required: true },
    slugField,
    { name: "shortDescription", type: "textarea", required: true },
    { name: "content", type: "richText" },
    { name: "sectors", type: "array", fields: [{ name: "sector", type: "text", required: true }] },
    { name: "relatedSolutions", type: "relationship", relationTo: "solutions", hasMany: true },
    { name: "schema", type: "group", fields: schemaFields },
    publishedField
  ]
};
