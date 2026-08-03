"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
/* The carousel primitives live in components/ui/carousel.tsx - one source of
   truth shared with the industry-adoption marquee. Re-exported at the bottom so
   existing imports from this module keep working. */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

/* --- Service card + carousel ---------------------------------------------- */

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 }
  })
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
  <motion.article
    custom={index}
    variants={cardVariants}
    className={cn(
      "relative flex h-[400px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br p-6",
      "border border-[#d7e8fa]",
      service.gradient
    )}
  >
    <div className="z-10 flex flex-col items-start text-left">
      <span className="mb-6 text-xs font-bold tracking-[0.12em] text-hydro-blue/60">( {service.number} )</span>
      <service.icon className="mb-auto h-10 w-10 text-hydro-blue" aria-hidden="true" strokeWidth={1.6} />
    </div>
    <div className="z-10">
      <h3 className="mb-2 text-base font-normal uppercase tracking-wide text-hydro-ink">{service.title}</h3>
      <p className="text-[13px] leading-6 text-hydro-muted">{service.description}</p>
    </div>

    {/* Subtle overlay for better text readability */}
    <div
      className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"
      aria-hidden="true"
    />
  </motion.article>
);

export const ServiceCarousel = ({ services }: { services: Service[] }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="mx-auto w-full">
      <Carousel ref={ref} opts={{ align: "start", loop: true }} className="relative">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={service.number} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <ServiceCard service={service} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious };
