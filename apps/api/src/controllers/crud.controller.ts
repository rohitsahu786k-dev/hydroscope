import type { Model } from "mongoose";
import type { Request, Response } from "express";
import { contentValidator } from "../validators/content.js";

export function makeCrudController(model: Model<Record<string, unknown>>, validateContent = true) {
  return {
    list: async (req: Request, res: Response) => {
      const status = req.query.status ? { status: req.query.status } : {};
      const data = await model.find(status).sort({ updatedAt: -1 });
      res.json({ data });
    },
    bySlug: async (req: Request, res: Response) => {
      const data = await model.findOne({ slug: req.params.slug });
      if (!data) return res.status(404).json({ message: "Not found" });
      return res.json({ data });
    },
    create: async (req: Request, res: Response) => {
      const payload = validateContent ? contentValidator.passthrough().parse(req.body) : req.body;
      const data = await model.create(payload);
      res.status(201).json({ data });
    },
    update: async (req: Request, res: Response) => {
      const payload = validateContent ? contentValidator.passthrough().partial().parse(req.body) : req.body;
      const data = await model.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true });
      if (!data) return res.status(404).json({ message: "Not found" });
      return res.json({ data });
    },
    remove: async (req: Request, res: Response) => {
      const data = await model.findByIdAndDelete(req.params.id);
      if (!data) return res.status(404).json({ message: "Not found" });
      return res.status(204).send();
    }
  };
}
