import bcrypt from "bcryptjs";
import { env } from "../config/env.js";
import { AdminUser } from "../models/admin-user.js";

export async function seedAdminUser() {
  if (!env.ADMIN_EMAIL || !env.ADMIN_PASSWORD) return;
  const existing = await AdminUser.findOne({ email: env.ADMIN_EMAIL });
  if (existing) return;
  const passwordHash = await bcrypt.hash(env.ADMIN_PASSWORD, 12);
  await AdminUser.create({ email: env.ADMIN_EMAIL, passwordHash });
}
