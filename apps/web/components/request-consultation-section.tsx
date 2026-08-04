import { ArrowRight } from "lucide-react";
import { Container } from "./ui/container";
import { proudlySupports } from "@/lib/solutions-content";

/* Closing call to action, followed by the programmes HYDROscope aligns its
   products with. These are rendered as wordmarks rather than emblems: the
   official Digital India, Make in India, Swachh Bharat, Jal Jeevan Mission and
   WHO marks are not licensed assets in this repo, and a redrawn lookalike would
   be a fabricated government mark. Drop the real files in and swap the <span>
   for an <Image> when they are cleared for use. */
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
                  <li key={`${copy}-${item}`} className="px-8">
                    <span className="whitespace-nowrap text-lg font-normal tracking-[-0.02em] text-hydro-muted">
                      {item}
                    </span>
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
