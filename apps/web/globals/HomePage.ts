import type { GlobalConfig } from "payload";
import { pageBlocks } from "../blocks/PageBlocks";

export const HomePageGlobal: GlobalConfig = {
  slug: "home-page",
  label: "Home Page",
  admin: { group: "Content" },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text", defaultValue: "HYDROPURE • HYDROSENSE • HYDROSURE" },
        { name: "title", type: "text", defaultValue: "Smart Off-Grid Electrochlorination, Powered by Solar & IoT" },
        {
          name: "subtitle",
          type: "textarea",
          defaultValue: "Document-derived HYDROscope product platform for HydroPure electrochlorination, HydroSense sensing and HydroSure real-time monitoring."
        },
        { name: "primaryCtaLabel", type: "text", defaultValue: "Explore solutions" },
        { name: "primaryCtaUrl", type: "text", defaultValue: "/solutions" },
        { name: "secondaryCtaLabel", type: "text", defaultValue: "Request demo" },
        { name: "secondaryCtaUrl", type: "text", defaultValue: "/contact" },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "dashboardPreview", type: "checkbox", defaultValue: true }
      ]
    },
    {
      name: "trustStats",
      type: "array",
      fields: [
        { name: "label", type: "text" },
        { name: "note", type: "text" },
        { name: "icon", type: "select", options: ["drop", "chart", "shield", "cloud"] }
      ]
    },
    { name: "sections", type: "blocks", blocks: pageBlocks }
  ]
};
