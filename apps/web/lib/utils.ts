import { clsx, type ClassValue } from "clsx";

/**
 * Project-local `cn`. Backed by clsx only - `tailwind-merge` is deliberately not a
 * dependency of this app, so avoid handing it two conflicting utilities for the same
 * CSS property and expecting the last one to win.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
