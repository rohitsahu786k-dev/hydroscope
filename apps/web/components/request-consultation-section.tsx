import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/container";
import { proudlySupports } from "@/lib/solutions-content";

/* Closing call to action, followed by the programmes HYDROscope aligns its
   products with, using the supplied official logos. */
export function RequestConsultationSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-hydro-navy py-20 text-center text-white">
        <div className="hydro-network absolute inset-0 opacity-10" aria-hidden="true" />
        <Container className="relative">
          <h2 className="mx-auto max-w-3xl text-[clamp(30px,3.6vw,50px)] font-normal leading-[1.06] tracking-[-0.04em]">
            Let&apos;s Engineer the Future of Water Together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#cfe4ff]">
            Discuss a pilot, utility deployment, rural water scheme, or long-term water infrastructure project with
            the HydroScope team.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-hydro-navy transition hover:-translate-y-0.5 hover:bg-[#eaf3fd]"
          >
            Request a Consultation
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </Container>
      </section>

      <section aria-label="HydroScope proudly supports" className="border-y border-hydro-line bg-white py-10">
        <p className="mb-6 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">
          HydroScope proudly supports
        </p>
        <div className="overflow-hidden">
          <div className="hydro-marquee">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                {proudlySupports.map((item) => (
                  <li key={`${copy}-${item.name}`} className="px-10 max-sm:px-6">
                    {/* Fixed height, auto width: the five marks have different
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
                      className="pointer-events-none h-14 w-auto select-none object-contain max-sm:h-11"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
