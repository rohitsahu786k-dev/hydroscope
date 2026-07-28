import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env.js";
import { AdminUser } from "../models/admin-user.js";
import { ApiError } from "../utils/errors.js";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) throw new ApiError(422, "Email and password are required");

  const admin = await AdminUser.findOne({ email });
  if (!admin) throw new ApiError(401, "Invalid credentials");
  const valid = await bcrypt.compare(password, admin.passwordHash);
  if (!valid) throw new ApiError(401, "Invalid credentials");

  const options: SignOptions = { expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"] };
  const token = jwt.sign({ id: admin.id, email: admin.email }, env.JWT_SECRET, options);
  res.json({ data: { token, admin: { id: admin.id, email: admin.email, name: admin.name } } });
}
