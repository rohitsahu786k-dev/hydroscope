import Image from "next/image";
import { Container } from "./ui/container";
import { proudlySupports } from "@/lib/solutions-content";

/* The About page shows the programme marks as a static row of cards rather
   than the homepage marquee: on a page a visitor has scrolled through to reach
   the end, a strip that keeps moving is harder to read than one that sits
   still. Same source list as the marquee, so the two cannot disagree. */
export function ProudlySupportsGrid({ heading = "We proudly support" }: { heading?: string }) {
  return (
    <section aria-label={heading} className="hydro-section bg-white">
      <Container>
        <p className="mb-9 text-center text-[11px] font-extrabold uppercase tracking-[0.24em] text-hydro-blue2">
          {heading}
        </p>
        <ul className="grid grid-cols-7 gap-4 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
          {proudlySupports.map((item) => (
            <li
              key={item.name}
              className="grid h-24 place-items-center rounded-xl border border-hydro-line bg-white p-4 transition hover:-translate-y-1 hover:border-hydro-blue2 hover:shadow-[0_20px_46px_-34px_rgba(9,36,76,0.7)]"
            >
              {/* Desaturated at rest so the row reads as one texture, full
                  colour on hover - the highlight the design asks for. */}
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={250}
                loading="lazy"
                draggable={false}
                className="h-full w-auto max-w-full select-none object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
