import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Hydroscope | Water Quality Management Technology",
  description: "Hydroscope develops innovative water distribution, water-quality monitoring and electrochlorination solutions for reliable water safety infrastructure.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "About Us" }]} />
        <SectionHeading eyebrow="About Hydroscope" title="Water quality management technology for modern infrastructure" />
        <div className="mx-auto max-w-4xl text-lg text-hydro-muted">
          <p>
            Hydroscope is a water-technology company focused on reliable water distribution and water-quality management. The company develops practical products that combine disinfection, sensing, automation and real-time monitoring for modern water infrastructure.
          </p>
          <p className="mt-5">
            Hydroscope is not only a product supplier. It is a technology partner for water safety, field automation and accountable monitoring across rural, municipal, institutional and industrial sites.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {["Automated water disinfection", "Water-quality sensing", "IoT dashboards and reports"].map((item) => (
            <Card key={item} className="p-6">
              <h2 className="text-xl font-extrabold text-hydro-blue">{item}</h2>
              <p className="mt-3 text-sm text-hydro-muted">Practical technology for safer water operations, smart alerts and field-team accountability.</p>
            </Card>
          ))}
        </div>
        <section className="mt-12 grid grid-cols-[0.85fr_1.15fr] gap-8 max-lg:grid-cols-1">
          <Card className="p-7">
            <h2 className="text-2xl font-extrabold">Mission and vision</h2>
            <p className="mt-4 text-sm leading-7 text-hydro-muted">
              Hydroscope's mission is to make safe water management more reliable, automated and accessible for communities, water utilities and institutions. Its vision is intelligent water-safety infrastructure that supports healthier communities, better governance and sustainable operations.
            </p>
          </Card>
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {[
              ["HydroSense", "Multi-parameter sensing for chlorine, pH, conductivity, TDS and temperature."],
              ["HydroPure", "Smart off-grid electrochlorination powered by solar and IoT."],
              ["HydroSure", "AI-enabled IoT dashboard for live intelligence, alerts and access control."],
              ["Source-to-tap", "Monitoring every key point across the distribution system."]
            ].map(([title, text]) => (
              <Card key={title} className="p-5">
                <h3 className="font-extrabold text-hydro-blue">{title}</h3>
                <p className="mt-2 text-sm text-hydro-muted">{text}</p>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
