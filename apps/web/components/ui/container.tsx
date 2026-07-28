import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("mx-auto w-[min(1400px,calc(100%-64px))] max-lg:w-[min(100%-36px,760px)]", className)}>{children}</div>;
}
