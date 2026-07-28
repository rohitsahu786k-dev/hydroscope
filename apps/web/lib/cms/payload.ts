import { cache } from "react";
import config from "@payload-config";
import { getPayload } from "payload";

export const getPayloadClient = cache(async () => {
  return getPayload({ config });
});

export async function tryPayload<T>(callback: () => Promise<T>, fallback: T): Promise<T> {
  if (!process.env.DATABASE_URI && !process.env.MONGODB_URI) return fallback;

  try {
    return await callback();
  } catch {
    return fallback;
  }
}
