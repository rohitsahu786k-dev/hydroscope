import type { CollectionConfig } from "payload";

export const FAQs: CollectionConfig = {
  slug: "faqs",
  admin: { useAsTitle: "question", group: "Content" },
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
    { name: "scope", type: "select", defaultValue: "global", options: ["global", "page", "product", "solution", "blog"] },
    { name: "published", type: "checkbox", defaultValue: true }
  ]
};
