import type { GlobalConfig } from "payload";
import { linkFields, seoHelperFields } from "../collections/fields";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Website Settings",
  admin: { group: "Settings" },
  fields: [
    { name: "siteName", type: "text", defaultValue: "HYDROscope", required: true },
    { name: "logo", type: "upload", relationTo: "media" },
    { name: "favicon", type: "upload", relationTo: "media" },
    { name: "defaultOgImage", type: "upload", relationTo: "media" },
    { name: "businessEmail", type: "email", defaultValue: "contact@hydroscope.in" },
    { name: "phoneNumber", type: "text", defaultValue: "+91 95820 16238" },
    { name: "address", type: "textarea", defaultValue: "Udaipur, Rajasthan, India" },
    { name: "socialLinks", type: "array", fields: linkFields },
    { name: "headerCta", type: "group", fields: linkFields.slice(0, 3) },
    { name: "footerText", type: "textarea", defaultValue: "Quality Water for a Quality Life." },
    { name: "globalSeoDefaults", type: "group", fields: seoHelperFields }
  ]
};
