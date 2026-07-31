"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

/* An item shows either a photo (`image`) or a Lucide icon (`Icon`) - both render
   in the same round media slot, so a category can be upgraded from icon to photo
   by adding one field, with no layout change. The icon form is the default
   because industry categories have no wordmark artwork, and inventing one would
   mean shipping a fake logo. Set `bareImage` for a real partner wordmark, which
   should sit on its own rather than inside a labelled card. */
export interface Logo {
  id: string;
  description: string;
  image?: string;
  Icon?: React.ElementType;
  bareImage?: boolean;
  className?: string;
}

export interface Logos3Props {
  heading?: string;
  eyebrow?: string;
  logos?: Logo[];
  className?: string;
}

/* AutoScroll is motion the visitor did not ask for, so it must not start when
   the OS asks for reduced motion. Read once on mount, then keep listening. */
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
}

const Logos3 = ({ heading = "Trusted by these companies", eyebrow, logos = [], className }: Logos3Props) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  /* Re-created only when the motion preference flips, so embla is not torn down
     and rebuilt on every parent render. */
  const plugins = React.useMemo(
    () => [AutoScroll({ playOnInit: !prefersReducedMotion, speed: 1, stopOnInteraction: false })],
    [prefersReducedMotion]
  );

  return (
    <section className={cn("py-14", className)}>
      <div className="flex flex-col items-center text-center">
        {eyebrow ? (
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-hydro-blue">{eyebrow}</p>
        ) : null}
        <h2 className="mt-3 text-[clamp(28px,3.4vw,44px)] font-bold tracking-tighter text-hydro-ink">
          {heading}
        </h2>
      </div>

      <div className="pt-10 md:pt-14">
        <div className="relative mx-auto flex items-center justify-center">
          <Carousel
            /* The strip is decorative repetition of the list below it in the DOM
               sense - embla still exposes it as a region, so name it. */
            aria-label={heading}
            opts={{ loop: true, align: "start", dragFree: true }}
            plugins={plugins}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-4 flex shrink-0 items-center justify-center">
                    {logo.bareImage ? (
                      /* Plain <img>: a partner wordmark at a fixed height, so
                         next/image would add config for no gain. */
                      <img src={logo.image} alt={logo.description} className={logo.className} />
                    ) : (
                      <div className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-[#dcebfa] bg-white px-5 py-4 shadow-[0_6px_20px_rgba(7,29,70,0.06)]">
                        <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-[#eaf3fd] text-hydro-blue">
                          {logo.image ? (
                            <img
                              src={logo.image}
                              alt=""
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : logo.Icon ? (
                            <logo.Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                          ) : null}
                        </span>
                        <span className="text-left text-sm font-bold leading-snug text-hydro-ink">
                          {logo.description}
                        </span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Tailwind v3 gradient utilities - the source snippet used the v4
              `bg-linear-*` names, which do not exist in this project's v3.4. */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
