import { model, Schema } from "mongoose";
import { faqSchema, seoSchema } from "./seo.js";
import { toSlug } from "../utils/slug.js";

const baseFields = {
  title: { type: String, required: true, trim: true },
  slug: { type: String, unique: true, index: true },
  excerpt: { type: String, required: true },
  body: { type: String, required: true },
  status: { type: String, enum: ["draft", "published"], default: "draft", index: true },
  featuredImage: String,
  seo: { type: seoSchema, required: true }
};

function addSlugHook(schema: Schema) {
  schema.pre("validate", function setSlug(next) {
    const document = this as unknown as { title: string; slug?: string };
    if (!document.slug && document.title) document.slug = toSlug(document.title);
    next();
  });
}

const pageSchema = new Schema(baseFields, { timestamps: true });
const productSchema = new Schema(
  {
    ...baseFields,
    subtitle: { type: String, required: true },
    category: { type: String, required: true },
    features: [{ type: String }],
    applications: [{ type: String }],
    parameters: [{ type: String }],
    faqs: [faqSchema]
  },
  { timestamps: true }
);
const solutionSchema = new Schema(
  {
    ...baseFields,
    outcomes: [{ type: String }],
    relatedProducts: [{ type: String }],
    applications: [{ type: String }],
    faqs: [faqSchema]
  },
  { timestamps: true }
);
const applicationSchema = new Schema(
  {
    ...baseFields,
    sectors: [{ type: String }],
    relatedSolutions: [{ type: String }]
  },
  { timestamps: true }
);
const blogPostSchema = new Schema(
  {
    ...baseFields,
    author: { type: String, default: "HYDROscope Team" },
    readingTime: String,
    tags: [{ type: String }]
  },
  { timestamps: true }
);
const caseStudySchema = new Schema(
  {
    ...baseFields,
    sector: { type: String, required: true },
    location: String,
    challenge: String,
    solution: String,
    resultsNote: String
  },
  { timestamps: true }
);
const teamMemberSchema = new Schema(
  {
    ...baseFields,
    role: { type: String, required: true },
    bio: String
  },
  { timestamps: true }
);
const mediaAssetSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    url: { type: String, required: true },
    alt: { type: String, required: true },
    mimeType: String,
    size: Number,
    seo: seoSchema
  },
  { timestamps: true }
);

[pageSchema, productSchema, solutionSchema, applicationSchema, blogPostSchema, caseStudySchema, teamMemberSchema, mediaAssetSchema].forEach(addSlugHook);

export const Page = model("Page", pageSchema);
export const Product = model("Product", productSchema);
export const Solution = model("Solution", solutionSchema);
export const Application = model("Application", applicationSchema);
export const BlogPost = model("BlogPost", blogPostSchema);
export const CaseStudy = model("CaseStudy", caseStudySchema);
export const TeamMember = model("TeamMember", teamMemberSchema);
export const MediaAsset = model("MediaAsset", mediaAssetSchema);

export const Faq = model(
  "Faq",
  new Schema(
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
      status: { type: String, enum: ["draft", "published"], default: "published" }
    },
    { timestamps: true }
  )
);
