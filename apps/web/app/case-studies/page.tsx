import { Breadcrumbs } from "@/components/breadcrumbs";
import { CaseStudyCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { getCaseStudies } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Case Studies | HYDROscope Water Monitoring Frameworks",
  description: "HYDROscope case study and deployment framework content for source-to-tap monitoring and smart water infrastructure planning.",
  path: "/case-studies"
});

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <main className="hydro-section bg-hydro-soft">
      <Container>
        <Breadcrumbs items={[{ label: "Case Studies" }]} />
        <SectionHeading eyebrow="Case Studies" title="Deployment frameworks and verified stories when available" />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </main>
  );
}
