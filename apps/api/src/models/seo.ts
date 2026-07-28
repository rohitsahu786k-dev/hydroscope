import { Schema } from "mongoose";

export const seoSchema = new Schema(
  {
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    canonicalUrl: String,
    ogTitle: String,
    ogDescription: String,
    ogImage: String,
    noIndex: { type: Boolean, default: false },
    focusKeywords: [{ type: String }]
  },
  { _id: false }
);

export const faqSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true }
  },
  { _id: false }
);
