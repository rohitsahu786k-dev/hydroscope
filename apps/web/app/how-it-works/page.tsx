import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How HydroPure Works | Electrochlorination Process",
  description: "Learn how HydroPure uses brine electrolysis, dosing pumps, sensors and IoT dashboards for water disinfection.",
  path: "/how-it-works"
});

const steps = [
  "Softened water is used to prepare brine with salt.",
  "Brine enters the electrolytic cell.",
  "Electric current converts brine into sodium hypochlorite.",
  "Generated solution is stored safely in the system.",
  "Dosing pumps inject disinfectant into the water line.",
  "Sensors monitor chlorine, flow and system status.",
  "HydroSure dashboard displays data, alerts and reports."
];

export default function HowItWorksPage() {
  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "How It Works" }]} />
        <SectionHeading
          eyebrow="How electrochlorination works"
          title="Brine electrolysis, automatic dosing and cloud visibility in one workflow"
          text="HydroPure combines brine electrolysis, dosing pumps, sensing and dashboards into one practical disinfection workflow."
        />
        <div className="grid grid-cols-7 gap-3 max-lg:grid-cols-1">
          {steps.map((step, index) => (
            <Card key={step} className="p-5">
              <span className="text-xs font-extrabold text-hydro-blue">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-sm font-bold leading-6">{step}</p>
            </Card>
          ))}
        </div>
        <section className="mt-10 grid grid-cols-[0.9fr_1.1fr] gap-6 max-lg:grid-cols-1">
          <Card className="p-7">
            <h2 className="text-2xl font-extrabold">Why this matters</h2>
            <p className="mt-4 leading-7 text-hydro-muted">
              The process reduces manual dosing errors and improves control. It also gives field teams and officials better visibility into whether the system is working as expected.
            </p>
          </Card>
          <Card className="p-7">
            <h2 className="text-2xl font-extrabold">Technical walkthrough</h2>
            <ul className="mt-4 grid gap-3 text-sm text-hydro-muted">
              {["Brine electrolysis", "Automatic dosing logic", "Sensor feedback", "IoT dashboard alerts", "Reports and operational visibility"].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 aria-hidden="true" size={17} className="mt-0.5 flex-none text-hydro-blue" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/request-demo" className="mt-6">
              Request technical walkthrough
            </Button>
          </Card>
        </section>
        <Link href="/installation-maintenance" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-hydro-blue">
          View installation and maintenance <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </Container>
    </main>
  );
}
