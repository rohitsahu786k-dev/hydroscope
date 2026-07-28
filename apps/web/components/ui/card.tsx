import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={clsx("rounded-hydro border border-hydro-line bg-white shadow-hydro", className)}>{children}</article>;
}
