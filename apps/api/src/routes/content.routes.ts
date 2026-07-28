import { Router } from "express";
import type { Model } from "mongoose";
import { Application, BlogPost, CaseStudy, Faq, MediaAsset, Page, Product, Solution, TeamMember } from "../models/content.js";
import { makeCrudController } from "../controllers/crud.controller.js";
import { requireAdmin } from "../middlewares/auth.js";

const resources = [
  ["pages", Page],
  ["products", Product],
  ["solutions", Solution],
  ["applications", Application],
  ["blog", BlogPost],
  ["case-studies", CaseStudy],
  ["faqs", Faq],
  ["team-members", TeamMember],
  ["media", MediaAsset]
] as const;

export const contentRouter = Router();

for (const [path, model] of resources) {
  const controller = makeCrudController(model as unknown as Model<Record<string, unknown>>, path !== "faqs");
  contentRouter.get(`/${path}`, controller.list);
  contentRouter.get(`/${path}/:slug`, controller.bySlug);
  contentRouter.post(`/${path}`, requireAdmin, controller.create);
  contentRouter.patch(`/${path}/:id`, requireAdmin, controller.update);
  contentRouter.delete(`/${path}/:id`, requireAdmin, controller.remove);
}
