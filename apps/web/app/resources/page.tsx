import { Download } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hydroscope Resources | Brochures and Datasheets",
  description: "Download Hydroscope product brochures, technical datasheets, model charts and water monitoring resources.",
  path: "/resources"
});

const resources = [
  "HydroPure brochure",
  "HydroPure model capacity chart",
  "HydroSense datasheet",
  "HydroSure dashboard overview",
  "Rural water supply solution note",
  "Municipal water monitoring note",
  "Company profile",
  "Installation overview",
  "FAQs"
];

export default function ResourcesPage() {
  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Resources" }]} />
        <SectionHeading
          eyebrow="Hydroscope brochure"
          title="Brochures, datasheets and water monitoring resources"
          text="Resources help buyers, engineers and government teams access the documents they need before a technical or commercial discussion."
        />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {resources.map((resource) => (
            <Card key={resource} className="p-6">
              <Download aria-hidden="true" className="mb-4 text-hydro-blue" />
              <h2 className="text-lg font-normal">{resource}</h2>
              <p className="mt-2 text-sm text-hydro-muted">Request the latest Hydroscope document for technical review and project planning.</p>
            </Card>
          ))}
        </div>
        <Card className="mt-8 p-7">
          <h2 className="text-2xl font-normal">Need project-specific documents?</h2>
          <p className="mt-3 text-hydro-muted">High-value datasheets and government solution notes can be shared after the project requirement is captured.</p>
          <Button href="/contact" className="mt-6">
            Contact sales
          </Button>
        </Card>
      </Container>
    </main>
  );
}
