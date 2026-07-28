import type { CollectionConfig } from "payload";
import { slugField } from "./fields";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: { useAsTitle: "name", group: "Blog" },
  fields: [{ name: "name", type: "text", required: true }, slugField]
};
