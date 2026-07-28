import type { Request, Response } from "express";
import { Enquiry } from "../models/enquiry.js";
import { enquiryValidator } from "../validators/content.js";

export async function createEnquiry(req: Request, res: Response) {
  const payload = enquiryValidator.parse(req.body);
  if (payload.website) return res.status(204).send();
  const data = await Enquiry.create(payload);
  res.status(201).json({ data, message: "Enquiry received" });
}

export async function listEnquiries(_req: Request, res: Response) {
  const data = await Enquiry.find().sort({ createdAt: -1 });
  res.json({ data });
}
