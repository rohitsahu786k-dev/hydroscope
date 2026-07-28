import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About HYDROscope | HydroPure, HydroSense & HydroSure",
  description: "HYDROscope product material describes HydroPure, HydroSense and HydroSure for electrochlorination, sensing and IoT water intelligence.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "About Us" }]} />
        <SectionHeading eyebrow="About HYDROscope" title="Reliable water intelligence for real operating conditions" />
        <div className="mx-auto max-w-4xl text-lg text-hydro-muted">
          <p>
            HYDROscope is a technology company developing innovative products for water distribution and water quality management. The supplied company material positions the portfolio around HydroSense, HydroPure and HydroSure for real-time monitoring, automated disinfection and AI-enabled dashboard intelligence.
          </p>
          <p className="mt-5">
            The supplied company deck frames HYDROscope around three product pillars: HydroSense for sensing, HydroPure for smart off-grid electrochlorination and HydroSure for IoT real-time monitoring.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {["HydroSense water quality sensors", "HydroPure electrochlorination", "HydroSure IoT real-time monitoring"].map((item) => (
            <Card key={item} className="p-6">
              <h2 className="text-xl font-extrabold text-hydro-blue">{item}</h2>
              <p className="mt-3 text-sm text-hydro-muted">Document-derived positioning for real-time monitoring, automated disinfection and dashboard-led visibility.</p>
            </Card>
          ))}
        </div>
        <section className="mt-12 grid grid-cols-[0.85fr_1.15fr] gap-8 max-lg:grid-cols-1">
          <Card className="p-7">
            <h2 className="text-2xl font-extrabold">The water-quality problem HYDROscope addresses</h2>
            <p className="mt-4 text-sm leading-7 text-hydro-muted">
              Source material highlights contamination, imprecise chlorination, limited access to skilled personnel, slow manual monitoring and lack of real-time visibility as key operating challenges. HYDROscope’s product direction is built around safer dosing, continuous measurements and accountable remote monitoring.
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
