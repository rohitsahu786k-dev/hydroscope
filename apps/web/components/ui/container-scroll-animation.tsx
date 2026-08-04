"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

/* Scroll-driven "laptop lid" reveal: the card starts tilted back on the X axis
   and rotates flat as the section scrolls through the viewport.
 *
 * Adapted from the supplied 21st.dev component. Changes made on the way in:
 *   - the `any`-typed Header props are typed, and Card's unused `translate`
 *     prop is dropped, so the file passes this project's lint and typecheck;
 *   - the bezel uses the brand navy instead of the original grey, so the frame
 *     reads as part of this site;
 *   - a reduced-motion branch renders the card flat and static, since the whole
 *     effect is decorative;
 *   - the outer height is set per breakpoint rather than the demo's fixed
 *     60rem/80rem plus 1000px of padding, which reserved most of a screen of
 *     empty space above and below. */

export const ContainerScroll = ({
  titleComponent,
  children
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* The card is slightly oversized on small screens so it still reads once the
     tilt is applied, and settles to 1:1 on desktop. */
  const scaleRange: [number, number] = isMobile ? [0.8, 0.95] : [1.04, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : scaleRange);
  const translate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -100]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[46rem] items-center justify-center p-2 md:h-[62rem] md:p-10"
    >
      <div className="relative w-full py-10 md:py-24" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div style={{ translateY: translate }} className="mx-auto max-w-5xl text-center">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003"
      }}
      className="mx-auto -mt-12 h-[22rem] w-full max-w-5xl rounded-[30px] border-4 border-[#1c3a68] bg-hydro-navy p-2 shadow-2xl md:h-[34rem] md:p-5"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-white">{children}</div>
    </motion.div>
  );
};
