import type { GlobalConfig } from "payload";
import { linkFields } from "../collections/fields";

export const FooterGlobal: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  admin: { group: "Navigation" },
  fields: [
    { name: "logo", type: "upload", relationTo: "media" },
    { name: "description", type: "textarea" },
    {
      name: "columns",
      type: "array",
      fields: [
        { name: "heading", type: "text", required: true },
        { name: "links", type: "array", fields: linkFields }
      ]
    },
    { name: "bottomText", type: "text" }
  ]
};
