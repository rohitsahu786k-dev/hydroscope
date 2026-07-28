import { Breadcrumbs } from "@/components/breadcrumbs";
import { SolutionCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { getSolutions } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solutions | Smart Water Monitoring Solutions India",
  description: "HYDROscope solutions for real-time water quality monitoring, source-to-tap visibility, electro chlorination automation and AI water analytics.",
  path: "/solutions"
});

export default async function SolutionsPage() {
  const solutions = await getSolutions();

  return (
    <main className="hydro-section bg-hydro-soft">
      <Container>
        <Breadcrumbs items={[{ label: "Solutions" }]} />
        <SectionHeading eyebrow="Solutions" title="Smart water monitoring for utilities, industries and infrastructure" />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </Container>
    </main>
  );
}
