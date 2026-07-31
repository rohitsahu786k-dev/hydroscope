import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("mx-auto w-[90%]", className)}>{children}</div>;
}
