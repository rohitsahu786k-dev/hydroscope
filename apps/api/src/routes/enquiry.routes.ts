import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createEnquiry, listEnquiries } from "../controllers/enquiry.controller.js";
import { requireAdmin } from "../middlewares/auth.js";

const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false
});

export const enquiryRouter = Router();

enquiryRouter.post("/", enquiryLimiter, createEnquiry);
enquiryRouter.get("/", requireAdmin, listEnquiries);
