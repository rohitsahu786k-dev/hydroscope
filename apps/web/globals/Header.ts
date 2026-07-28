import type { GlobalConfig } from "payload";
import { linkFields } from "../collections/fields";

export const HeaderGlobal: GlobalConfig = {
  slug: "header",
  label: "Header",
  admin: { group: "Navigation" },
  fields: [
    { name: "logo", type: "upload", relationTo: "media" },
    { name: "menuItems", type: "array", fields: linkFields },
    { name: "cta", type: "group", fields: linkFields.slice(0, 3) }
  ]
};
