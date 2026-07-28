export type PublishStatus = "draft" | "published";

export interface SeoFields {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
  focusKeywords?: string[];
}

export interface ContentBase {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  status: PublishStatus;
  featuredImage?: string;
  seo: SeoFields;
  updatedAt: string;
  createdAt: string;
}

export interface Product extends ContentBase {
  subtitle: string;
  category: string;
  features: string[];
  applications: string[];
  parameters: string[];
  brochureUrl?: string;
  gallery?: string[];
  faqs: Faq[];
}

export interface Solution extends ContentBase {
  outcomes: string[];
  relatedProducts: string[];
  applications: string[];
  faqs: Faq[];
}

export interface Application extends ContentBase {
  sectors: string[];
  relatedSolutions: string[];
}

export interface BlogPost extends ContentBase {
  author: string;
  readingTime: string;
  tags: string[];
}

export interface CaseStudy extends ContentBase {
  sector: string;
  location?: string;
  challenge: string;
  solution: string;
  resultsNote: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface TeamMember extends ContentBase {
  role: string;
  bio: string;
}

export interface Enquiry {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  country: string;
  cityState?: string;
  requirementType: string;
  applicationType?: string;
  dailyWaterDemand?: string;
  tankCapacity?: string;
  numberOfSites?: string;
  powerAvailability?: string;
  solarRequirement?: string;
  interest?: string;
  message: string;
  consent: boolean;
  website?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
