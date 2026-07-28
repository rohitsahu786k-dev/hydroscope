import cors from "cors";
import express from "express";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import { authRouter } from "./routes/auth.routes.js";
import { contentRouter } from "./routes/content.routes.js";
import { enquiryRouter } from "./routes/enquiry.routes.js";
import { errorHandler, notFound } from "./utils/errors.js";

export const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(mongoSanitize());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.get("/health", (_req, res) => res.json({ data: { status: "ok", service: "hydroscope-api" } }));
app.use("/api/auth", authRouter);
app.use("/api/enquiries", enquiryRouter);
app.use("/api", contentRouter);
app.use(notFound);
app.use(errorHandler);
