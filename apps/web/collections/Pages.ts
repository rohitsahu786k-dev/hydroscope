import type { CollectionConfig } from "payload";
import { pageBlocks } from "../blocks/PageBlocks";
import { publishedField, schemaFields, slugField } from "./fields";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title", defaultColumns: ["title", "slug", "status", "updatedAt"], group: "Content" },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", required: true },
    slugField,
    { name: "excerpt", type: "textarea" },
    { name: "layout", type: "blocks", blocks: pageBlocks },
    { name: "pageType", type: "select", defaultValue: "WebPage", options: ["WebPage", "AboutPage", "ContactPage", "CollectionPage"] },
    { name: "schema", type: "group", fields: schemaFields },
    publishedField
  ]
};
