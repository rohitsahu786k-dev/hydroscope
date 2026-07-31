import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Border/background tokens are mapped to this project's existing hydro-* palette
   instead of shadcn's border/accent tokens, so no new global colour semantics are
   introduced. */
const mockupVariants = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-hydro-line/70 border-t-white",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-md"
      }
    },
    defaultVariants: {
      type: "responsive"
    }
  }
);

export interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupVariants> {}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(({ className, type, ...props }, ref) => (
  <div ref={ref} className={cn(mockupVariants({ type, className }))} {...props} />
));
Mockup.displayName = "Mockup";

const frameVariants = cva("bg-hydro-soft flex relative z-10 overflow-hidden rounded-2xl", {
  variants: {
    size: {
      small: "p-2",
      large: "p-4"
    }
  },
  defaultVariants: {
    size: "small"
  }
});

export interface MockupFrameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof frameVariants> {}

const MockupFrame = React.forwardRef<HTMLDivElement, MockupFrameProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(frameVariants({ size, className }))} {...props} />
  )
);
MockupFrame.displayName = "MockupFrame";

export { Mockup, MockupFrame };
