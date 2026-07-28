import { Breadcrumbs } from "@/components/breadcrumbs";
import { ApplicationCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { applications } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Applications | Water Quality Monitoring for Utilities & Industries",
  description: "HYDROscope applications for utilities, industries, rural drinking-water schemes, tanks, water distribution networks and smart cities.",
  path: "/applications"
});

export default function ApplicationsPage() {
  return (
    <main className="hydro-section bg-hydro-soft">
      <Container>
        <Breadcrumbs items={[{ label: "Applications" }]} />
        <SectionHeading eyebrow="Applications" title="Smart water monitoring across critical infrastructure" />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {applications.map((application) => (
            <ApplicationCard key={application.slug} application={application} />
          ))}
        </div>
        <section className="mt-12 grid grid-cols-[0.9fr_1.1fr] gap-8 max-lg:grid-cols-1">
          <div>
            <SectionHeading
              eyebrow="Village water tanks"
              title="Automated chlorination and monitoring for distributed drinking-water assets"
              align="left"
            />
            <p className="text-hydro-muted">
              Content from the supplied HydroPure material is converted into structured page copy, process steps and buyer-facing details without displaying the raw brochure images.
            </p>
          </div>
          <div className="grid gap-5">
            {[
              "Manual chlorination can create irregular dosing, over or under dosing, delayed visibility and higher operational dependence on field checks.",
              "HydroPure connects source water, automatic chlorination, sensors, cloud dashboards and alerts into one monitored workflow for village tank infrastructure.",
              "The supplied HydroPure material positions the system for solar-ready, low-power, plug-and-play deployment with remote monitoring and dashboard reporting."
            ].map((copy) => (
              <Card key={copy} className="p-5 text-sm leading-7 text-hydro-muted">
                {copy}
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
