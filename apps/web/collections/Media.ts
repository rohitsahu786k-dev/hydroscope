import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre" },
      { name: "card", width: 800, height: 600, position: "centre" },
      { name: "hero", width: 1600, height: 900, position: "centre" }
    ]
  },
  admin: { useAsTitle: "alt", group: "Assets" },
  fields: [
    { name: "alt", type: "text", required: true },
    { name: "caption", type: "text" }
  ]
};
