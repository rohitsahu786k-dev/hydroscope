import { Breadcrumbs } from "@/components/breadcrumbs";
import { SolutionCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { getSolutions } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Water Treatment and Chlorination Solutions | Hydroscope",
  description: "Hydroscope provides automated water disinfection and monitoring solutions for rural, municipal, industrial and institutional water networks.",
  path: "/solutions"
});

export default async function SolutionsPage() {
  const solutions = await getSolutions();

  return (
    <main className="hydro-section bg-hydro-soft">
      <Container>
        <Breadcrumbs items={[{ label: "Solutions" }]} />
        <SectionHeading
          eyebrow="Water treatment solutions"
          title="Automated disinfection and monitoring for critical water networks"
          text="Each solution can combine HydroPure, HydroSense and HydroSure according to project requirements, from small village tanks to municipal networks and institutional campuses."
        />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </Container>
    </main>
  );
}
