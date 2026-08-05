import { ArrowRight } from "lucide-react";
import { Container } from "./ui/container";

/* Closing call to action. The programme marquee used to be bolted on here;
   it is now placed by the page, so it can sit above this block. */
export function RequestConsultationSection() {
  return (
    <section className="relative overflow-hidden bg-hydro-navy py-20 text-center text-white max-sm:py-14">
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
  );
}
