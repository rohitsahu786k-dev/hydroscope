import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={clsx("border border-hydro-line bg-white shadow-[0_18px_48px_rgba(35,69,111,0.07)]", className)}>{children}</article>;
}
