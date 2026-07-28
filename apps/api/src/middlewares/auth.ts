import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { ApiError } from "../utils/errors.js";

export interface AuthRequest extends Request {
  admin?: { id: string; email: string };
}

export function requireAdmin(req: AuthRequest, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
  if (!token) return next(new ApiError(401, "Authentication required"));

  try {
    req.admin = jwt.verify(token, env.JWT_SECRET) as { id: string; email: string };
    return next();
  } catch {
    return next(new ApiError(401, "Invalid or expired token"));
  }
}
