"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

/* --- Carousel Context ------------------------------------------------------ */

/* Derived from the hook rather than imported by name: embla-carousel-react v8 does
   not re-export EmblaCarouselType/EmblaOptionsType, so this stays version-proof. */
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
export type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

/* --- Main Carousel --------------------------------------------------------- */

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((emblaApi: CarouselApi) => {
      if (!emblaApi) return;
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
        api.off("reInit", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

/* --- Content / Item -------------------------------------------------------- */

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        )}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

/* --- Controls -------------------------------------------------------------- */
/* Plain <button> rather than the shadcn Button: this project's own
   components/ui/button.tsx renders an <a> and has no size/disabled handling, and
   overwriting it would break every existing call site. */

type CarouselControlProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const controlClasses =
  "absolute top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#d7e8fa] bg-white/90 text-hydro-blue shadow-hydro backdrop-blur transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselControlProps>(
  ({ className, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();

    return (
      <button
        ref={ref}
        type="button"
        className={cn(controlClasses, "left-2", className)}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Previous slide</span>
      </button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselControlProps>(
  ({ className, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();

    return (
      <button
        ref={ref}
        type="button"
        className={cn(controlClasses, "right-2", className)}
        onClick={scrollNext}
        disabled={!canScrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Next slide</span>
      </button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel };
