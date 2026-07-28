import type { CollectionConfig } from "payload";
import { slugField } from "./fields";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: { useAsTitle: "name", group: "Blog" },
  fields: [{ name: "name", type: "text", required: true }, slugField, { name: "description", type: "textarea" }]
};
