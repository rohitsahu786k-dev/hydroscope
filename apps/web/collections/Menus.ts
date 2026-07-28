import type { CollectionConfig } from "payload";
import { linkFields } from "./fields";

export const Menus: CollectionConfig = {
  slug: "menus",
  admin: { useAsTitle: "name", group: "Navigation" },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "location", type: "select", required: true, options: ["header", "footer", "cta"] },
    { name: "items", type: "array", fields: linkFields }
  ]
};
