import { CalendarCheck, Monitor, Settings } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Request HydroPure Demo | Hydroscope",
  description: "Book a HydroPure product demo or HydroSure dashboard walkthrough with Hydroscope.",
  path: "/request-demo"
});

export default function RequestDemoPage() {
  return (
    <main className="hydro-section bg-hydro-soft">
      <Container>
        <Breadcrumbs items={[{ label: "Request Demo" }]} />
        <SectionHeading
          eyebrow="Request HydroPure demo"
          title="Book a focused demo with a clear technical recommendation"
          text="Book a HydroPure or HydroSure demo to understand system operation, dashboard visibility and the right model for your site."
        />
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-8 max-lg:grid-cols-1">
          <div className="grid content-start gap-5">
            {[
              ["Product presentation", "Understand HydroPure operation and model range.", Settings],
              ["Dashboard walkthrough", "See HydroSure live monitoring, alerts and reports.", Monitor],
              ["Model selection call", "Discuss water demand, sites, solar needs and monitoring scope.", CalendarCheck]
            ].map(([title, text, Icon]) => (
              <Card key={title as string} className="p-6">
                <Icon aria-hidden="true" className="mb-4 text-hydro-blue" />
                <h2 className="text-xl font-extrabold">{title as string}</h2>
                <p className="mt-2 text-sm text-hydro-muted">{text as string}</p>
              </Card>
            ))}
          </div>
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
