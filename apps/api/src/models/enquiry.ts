import { model, Schema } from "mongoose";

const enquirySchema = new Schema(
  {
    name: { type: String, required: true },
    company: String,
    email: { type: String, required: true, index: true },
    phone: String,
    country: { type: String, required: true },
    requirementType: { type: String, required: true },
    interest: String,
    message: { type: String, required: true },
    consent: { type: Boolean, required: true },
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new", index: true }
  },
  { timestamps: true }
);

export const Enquiry = model("Enquiry", enquirySchema);
