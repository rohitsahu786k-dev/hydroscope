"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Solution } from "@hydroscope/types";
import { Container } from "@/components/ui/container";

export function SolutionsShowcase({ solutions }: { solutions: Solution[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const visibleSolutions = solutions.slice(0, 6);

  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollability();
    container.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);

    return () => {
      container.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability, visibleSolutions.length]);

  function scroll(direction: "left" | "right") {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -container.clientWidth * 0.82 : container.clientWidth * 0.82,
      behavior: "smooth"
    });
  }

  if (!visibleSolutions.length) return null;

  return (
    <section className="hydro-section overflow-hidden bg-white">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
          <div>
            <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">Solutions</span>
            <h2 className="m-0 max-w-3xl text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.08] tracking-[-0.04em] text-hydro-ink">
              Choose a solution based on your water network
            </h2>
          </div>
          <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="grid h-11 w-11 place-items-center rounded-full border border-hydro-line bg-white text-hydro-muted shadow-hydro transition hover:border-hydro-blue hover:text-hydro-blue disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Scroll solutions left"
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="grid h-11 w-11 place-items-center rounded-full border border-hydro-line bg-white text-hydro-muted shadow-hydro transition hover:border-hydro-blue hover:text-hydro-blue disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Scroll solutions right"
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6"
        >
          {visibleSolutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group relative h-[430px] w-[260px] flex-none snap-start overflow-hidden rounded-[14px] border border-[#d7e5f4] bg-white shadow-[0_18px_42px_rgba(35,69,111,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-hydroHover sm:h-[470px] sm:w-[300px] lg:w-[320px]"
            >
              <Image
                src={solution.featuredImage ?? "/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp"}
                alt={`${solution.title} solution by HYDROscope`}
                width={1672}
                height={941}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-[64%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.72)_32%,rgba(255,255,255,0.96)_66%,#ffffff_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="mb-3 inline-flex bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-hydro-blue shadow-[0_12px_30px_rgba(255,255,255,0.85)]">
                  Solution
                </span>
                <h2 className="text-[20px] font-extrabold leading-[1.15] tracking-[-0.035em] text-hydro-ink">{solution.title}</h2>
                <p className="mt-3 text-[13px] leading-5 text-hydro-muted">{solution.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-hydro-blue">
                  Explore solution <ArrowRight aria-hidden="true" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
