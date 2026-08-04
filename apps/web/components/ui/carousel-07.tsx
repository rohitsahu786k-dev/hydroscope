"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
  type PanInfo
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/* Stacked drag carousel, adapted from the supplied 21st.dev component.
 *
 * Changes made on the way in, all of which the original needed to run here:
 *   - imports from `framer-motion`, not `motion/react`. They are the same
 *     library under two names, and this project already ships framer-motion;
 *     adding `motion` as well would put two copies of it in the bundle.
 *   - `bg-linear-to-t` is Tailwind v4 syntax and does not exist in this
 *     project's v3.4 - it is `bg-gradient-to-t` here.
 *   - `h-112` / `h-128` are outside v3's spacing scale (which stops at 96), so
 *     they are arbitrary values.
 *   - `bg-background` / `bg-muted` are shadcn theme tokens this project does
 *     not define; replaced with real colours.
 *   - slides come in as a prop instead of being hardcoded to the demo data.
 *   - <img> became next/image, matching every other image on the site.
 *   - prev/next buttons added. The original is drag-only, which leaves the
 *     other cards unreachable by keyboard and awkward on a desktop mouse.
 */

export interface StackedSlide {
  image: string;
  title: string;
  description: string;
  badge: string;
}

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 90,
      yMultiplier: 20,
      rotationMultiplier: 8,
      scaleReduction: 0.06
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 130,
      yMultiplier: 30,
      rotationMultiplier: 10,
      scaleReduction: 0.09
    };
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 170,
    yMultiplier: 40,
    rotationMultiplier: 12,
    scaleReduction: 0.12
  };
};

const SPRING = { type: "spring" as const, stiffness: 200, damping: 30, mass: 1 };

export function CarouselStacked({ slides, className }: { slides: StackedSlide[]; className?: string }) {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(() => getCarouselConfig(windowWidth), [windowWidth]);

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const distanceShift = -info.offset.x / config.distanceDivisor;
    const velocityShift = -info.velocity.x / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    animate(scrollProgress, Math.round(startProgress.current) + totalShift, SPRING);
  };

  const step = (direction: 1 | -1) => {
    animate(scrollProgress, Math.round(scrollProgress.get()) + direction, SPRING);
  };

  return (
    <div className={cn("relative flex w-full select-none flex-col items-center justify-center py-10", className)}>
      <div className="relative flex h-80 w-full max-w-7xl items-center justify-center sm:h-[28rem] lg:h-[32rem]">
        {/* Transparent drag surface sitting over the whole stack. */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            scrollProgress.set(scrollProgress.get() - info.delta.x / config.sensitivity);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-40 cursor-grab active:cursor-grabbing"
        />

        {slides.map((slide, index) => (
          <Card
            key={slide.title}
            slide={slide}
            index={index}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}

        {/* Above the drag surface so they stay clickable. */}
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous card"
          className="absolute left-2 top-1/2 z-50 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-hydro-line bg-white/90 text-hydro-blue shadow-hydro backdrop-blur transition hover:bg-white"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next card"
          className="absolute right-2 top-1/2 z-50 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-hydro-line bg-white/90 text-hydro-blue shadow-hydro backdrop-blur transition hover:bg-white"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

interface CardProps {
  slide: StackedSlide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}

function Card({ slide, index, total, progress, config }: CardProps) {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : o * config.rotationMultiplier));
  const y = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : Math.abs(o) * config.yMultiplier));
  const scale = useTransform(offset, (o) => 1 - Math.abs(o) * config.scaleReduction);
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0]
  );
  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 10));

  /* Hoisted out of the JSX so every hook is called in one place. */
  const dimOpacity = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.5, 0.2, 0, 0.2, 0.5]);
  const textOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, rotate, y, scale, opacity, zIndex }}
      className={cn(
        "group pointer-events-none absolute overflow-hidden rounded-2xl bg-[#eef7ff]",
        "h-56 w-44 sm:h-80 sm:w-56 lg:h-96 lg:w-64"
      )}
    >
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 176px"
        draggable={false}
        className="pointer-events-none select-none object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <motion.div style={{ opacity: dimOpacity }} className="pointer-events-none absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <Badge className="absolute right-3 top-3 rounded-full bg-white/95 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-black backdrop-blur-md sm:right-5 sm:top-5 sm:px-3 sm:py-1 lg:right-6 lg:top-6">
        {slide.badge}
      </Badge>

      <div className="absolute bottom-5 left-3 right-3 text-center text-white sm:bottom-8 sm:left-5 sm:right-5 sm:text-left lg:bottom-10 lg:left-6 lg:right-6">
        <motion.p
          style={{ opacity: textOpacity }}
          className="mb-0.5 text-sm font-bold leading-tight drop-shadow-md sm:mb-1 sm:text-lg lg:text-xl"
        >
          {slide.title}
        </motion.p>
        <motion.p
          style={{ opacity: textOpacity }}
          className="hidden text-xs font-medium italic text-white/80 sm:line-clamp-3 sm:block"
        >
          {slide.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default CarouselStacked;
