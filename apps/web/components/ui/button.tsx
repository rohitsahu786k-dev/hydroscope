import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
  showArrow?: boolean;
};

export function Button({ variant = "primary", children, showArrow = true, className, ...props }: ButtonProps) {
  return (
    <a
      className={clsx(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-[7px] border px-5 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(16,80,177,.22)]",
        variant === "primary" && "border-transparent hydro-gradient text-white",
        variant === "outline" && "border-hydro-blue bg-white/80 text-hydro-blue",
        variant === "ghost" && "border-transparent text-hydro-blue",
        className
      )}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" size={17} /> : null}
    </a>
  );
}
