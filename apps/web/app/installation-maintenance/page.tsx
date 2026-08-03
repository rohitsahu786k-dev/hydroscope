import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HydroPure Installation, Commissioning and Maintenance",
  description: "Hydroscope supports site survey, installation, commissioning, testing, operator training and comprehensive maintenance.",
  path: "/installation-maintenance"
});

const deployment = ["Site survey", "Water demand assessment", "Model selection", "System design", "Supply and installation", "Commissioning", "Water testing", "Operator training", "Dashboard setup", "Comprehensive maintenance"];
const supply = ["Electrolyser cell", "Chlorine reaction tank", "Chlorine storage tank", "Flowmeter", "Dosing pumps", "Level sensors and valves", "Softener unit with brine tank", "Control panel and IoT module", "Web application for remote monitoring"];

export default function InstallationMaintenancePage() {
  return (
    <main className="hydro-section bg-hydro-soft">
      <Container>
        <Breadcrumbs items={[{ label: "Installation & Maintenance" }]} />
        <SectionHeading
          eyebrow="HydroPure installation"
          title="Deployment support from site assessment to long-term maintenance"
          text="Hydroscope supports the complete deployment lifecycle from site assessment to commissioning, training and maintenance."
        />
        <div className="mb-8 overflow-hidden rounded-hydro border border-hydro-line bg-white p-3 shadow-hydro">
          <Image
            src="/images/seo/hydropure-field-inspection-iot-enabled-water-treatment-banner.webp"
            alt="HydroPure IoT enabled water treatment system field inspection with village tank background"
            width={1916}
            height={821}
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <ListCard title="Deployment process" items={deployment} />
          <ListCard title="Scope of supply" items={supply} />
        </div>
        <Card className="mt-8 p-7">
          <h2 className="text-2xl font-normal">Plan the right capacity</h2>
          <p className="mt-3 max-w-3xl text-hydro-muted">
            Share water demand, dosing requirement, runtime, power availability and site conditions so the right HydroPure model and monitoring setup can be recommended.
          </p>
          <Button href="/request-demo" className="mt-6">
            Request site assessment
          </Button>
        </Card>
      </Container>
    </main>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-normal">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-hydro-muted">
            <CheckCircle2 aria-hidden="true" size={17} className="mt-0.5 flex-none text-hydro-blue" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
