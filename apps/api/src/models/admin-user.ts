import { model, Schema } from "mongoose";

const adminUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    name: { type: String, default: "HYDROscope Admin" },
    role: { type: String, enum: ["admin"], default: "admin" }
  },
  { timestamps: true }
);

export const AdminUser = model("AdminUser", adminUserSchema);
