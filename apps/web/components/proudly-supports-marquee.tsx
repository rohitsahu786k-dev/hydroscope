import Image from "next/image";
import { proudlySupports } from "@/lib/solutions-content";

/* The programme marks HYDROscope aligns its products with, as a CSS marquee.
   They sit desaturated and slightly dimmed so the row reads as one texture,
   and lift to full colour under the pointer - the highlight the About page
   content asks for. The whole track pauses on hover so a mark can actually be
   caught and read. */
export function ProudlySupportsMarquee({ heading = "HydroScope proudly supports" }: { heading?: string }) {
  return (
    <section aria-label={heading} className="border-y border-hydro-line bg-white py-10">
      <p className="mb-7 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">{heading}</p>
      <div className="overflow-hidden">
        <div className="hydro-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {proudlySupports.map((item) => (
                <li key={`${copy}-${item.name}`} className="px-10 max-sm:px-6">
                  {/* Fixed height, auto width: the marks have different
                      proportions, so matching on height keeps the row
                      optically even instead of letterboxing them. */}
                  <Image
                    src={item.image}
                    /* The duplicate copy is aria-hidden, so only the first
                       announces the programme name. */
                    alt={copy === 0 ? item.name : ""}
                    width={500}
                    height={250}
                    loading="lazy"
                    draggable={false}
                    className="h-14 w-auto select-none object-contain opacity-70 grayscale transition duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 max-sm:h-11"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
