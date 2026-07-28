import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cloud Dashboard & AI Water Analytics Platform | HYDROscope",
  description: "HYDROscope dashboard platform for live intelligence, alerts, AI water analytics and cloud-based water monitoring operations.",
  path: "/dashboard-platform"
});

export default function DashboardPlatformPage() {
  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Dashboard / Platform" }]} />
        <SectionHeading eyebrow="Dashboard / Platform" title="Cloud dashboards for source-to-tap water visibility" />
        <div className="grid grid-cols-[1.1fr_.8fr] gap-8 max-lg:grid-cols-1">
          <Card className="overflow-hidden p-3">
            <Image
              src="/generated/source-to-tap-platform.png"
              alt="HYDROscope source-to-tap IoT monitoring workflow, AI dashboard and alerts"
              width={1680}
              height={900}
              className="h-auto w-full rounded-lg"
            />
          </Card>
          <div className="grid content-center gap-5">
            {[
              "24/7 source-to-tap monitoring",
              "30-minute response workflows",
              "AI analytics from raw sensor streams",
              "Operator, engineer, district and state access views"
            ].map((feature) => (
              <Card key={feature} className="p-6">
                <h2 className="text-xl font-extrabold text-hydro-blue">{feature}</h2>
                <p className="mt-2 text-sm text-hydro-muted">Designed to help teams see parameter movement, site status and exceptions without waiting for manual reporting cycles.</p>
              </Card>
            ))}
          </div>
        </div>
        <section className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {[
            ["Raw sensor data", "Flow, pressure, residual chlorine, pH, conductivity, TDS, turbidity and temperature readings become the live operational foundation."],
            ["Vector embeddings", "Time-series sensor data is converted into semantic relationships across sites, parameters and infrastructure events."],
            ["AI insights and action", "The platform highlights anomalies, predicts risk patterns and supports alerts, escalation and maintenance decisions."]
          ].map(([title, text]) => (
            <Card key={title} className="p-6">
              <h2 className="text-xl font-extrabold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-hydro-muted">{text}</p>
            </Card>
          ))}
        </section>
        <section className="mt-8 grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-1">
          {["Intelligent detection", "Auto-location and geo-targeting", "Context-aware notifications", "Smart escalation", "Resolution and feedback loop"].map((item) => (
            <Card key={item} className="p-5 text-sm font-bold text-hydro-blue">
              {item}
            </Card>
          ))}
        </section>
      </Container>
    </main>
  );
}
