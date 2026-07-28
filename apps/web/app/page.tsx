import { Activity, Bell, Cloud, Gauge, ShieldCheck, Waypoints } from "lucide-react";
import Image from "next/image";
import { ApplicationCard, BlogCard, ProductCard, SolutionCard } from "@/components/cards";
import { FAQAccordion } from "@/components/faq-accordion";
import { HeroSection } from "@/components/hero-section";
import { FaqSchema } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { applications, blogPosts, faqs, products, solutions } from "@/lib/content";
import { getHomeData } from "@/lib/cms/globals";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HYDROscope | HydroPure, HydroSense & HydroSure",
  description:
    "HYDROscope supplied product material for HydroPure electrochlorination, HydroSense sensing and HydroSure IoT real-time monitoring.",
  path: "/"
});

export default async function HomePage() {
  const home = await getHomeData();

  return (
    <main>
      <HeroSection {...home.hero} />
      <section className="hydro-section">
        <Container>
          <SectionHeading
            eyebrow="Our innovative products"
            title="HydroPure, HydroSense and HydroSure"
            text="A document-derived product ecosystem for electrochlorination, water-quality sensing and IoT real-time monitoring."
          />
          <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-4 gap-0 rounded-hydro border border-hydro-line bg-hydro-soft p-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              ["Safe & Pure Water", "Fully disinfected water workflow from the supplied HydroPure material.", ShieldCheck],
              ["Smart & Connected", "IoT module, remote monitoring and cloud-based visualization.", Cloud],
              ["Alerts & Analytics", "HydroSure smart alerts, AI insights and feedback loops.", Bell],
              ["Solar Ready", "Low-power off-grid deployment for distributed water assets.", Waypoints]
            ].map(([title, text, Icon]) => (
              <article key={title as string} className="flex gap-3 border-r border-hydro-line px-5 last:border-0 max-lg:border-0 max-lg:p-4">
                <Icon aria-hidden="true" className="mt-1 text-hydro-blue" />
                <div>
                  <h3 className="text-sm font-extrabold text-hydro-blue">{title as string}</h3>
                  <p className="mt-1 text-xs text-hydro-muted">{text as string}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section bg-hydro-soft">
        <Container>
          <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-12 max-lg:grid-cols-1">
            <div>
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">HydroSure monitoring layer</span>
              <h2 className="text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.08] tracking-[-0.045em]">
                Turn raw sensor data into water intelligence.
              </h2>
              <p className="mt-5 text-hydro-muted">
                The supplied deck describes a data pipeline from raw sensor data to vector embeddings, AI insights, smart alerts, role-based access and operational action.
              </p>
              <div className="mt-7 grid gap-4">
                {[
                  ["01", "Collect raw sensor data", "Flow, pressure, chlorine, pH, conductivity, TDS, turbidity and temperature readings."],
                  ["02", "Convert into intelligence", "Vector embeddings and AI insights connect parameter patterns across sites."],
                  ["03", "Act through alerts", "Smart alerts, escalation and feedback loops support operations teams."]
                ].map(([number, title, text]) => (
                  <article key={number} className="flex gap-4">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#e8f3ff] text-xs font-extrabold text-hydro-blue">{number}</span>
                    <div>
                      <h3 className="font-extrabold">{title}</h3>
                      <p className="text-sm text-hydro-muted">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <Card className="overflow-hidden p-3">
              <Image
                src="/generated/source-to-tap-platform.png"
                alt="Source-to-tap water monitoring workflow with HydroPure, sensors, cloud dashboard and alerts"
                width={1680}
                height={900}
                className="h-auto w-full rounded-lg"
              />
            </Card>
          </div>
        </Container>
      </section>
      <section className="hydro-section">
        <Container>
          <SectionHeading eyebrow="Solutions" title="Built around real water infrastructure workflows" />
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {solutions.slice(0, 6).map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section bg-hydro-soft">
        <Container>
          <SectionHeading eyebrow="Applications" title="Smart water monitoring across critical infrastructure" />
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {applications.map((application) => (
              <ApplicationCard key={application.slug} application={application} />
            ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section">
        <Container>
          <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-8 max-lg:grid-cols-1">
            <div>
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">HydroPure for village water tanks</span>
              <h2 className="text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.045em]">
                Intelligent water safety infrastructure for distributed tank networks.
              </h2>
              <p className="mt-5 text-hydro-muted">
                HydroPure replaces irregular manual chlorination workflows with automated on-site chlorine generation, sensor monitoring, cloud dashboards and safe drinking-water visibility for village tank operations.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-hydro-muted">
                {["Water source to HydroPure unit to automatic chlorination", "Sensors and monitoring with cloud dashboard visibility", "Solar-ready, low-power and plug-and-play installation"].map((item) => (
                  <div key={item} className="rounded-md border border-hydro-line bg-white p-4 font-bold text-hydro-ink shadow-hydro">{item}</div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-hydro border border-hydro-line bg-white shadow-hydro">
              <Image
                src="/generated/hydropure-deployment-hero.png"
                alt="HydroPure smart electrochlorination deployment near water infrastructure with solar and IoT monitoring"
                width={1680}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {[
                ["The challenge", "Ageing infrastructure, leakages, inconsistent chlorination, manual handling and no real-time visibility can increase operational risk."],
                ["HydroPure workflow", "Water source, HydroPure unit, automatic chlorination, sensors, cloud dashboard and safe drinking-water delivery are connected into one monitored process."],
                ["Operating model", "Salt solution tank, electrochlorination unit, injection line and water distribution workflow support automated village tank deployment."],
                ["Governance view", "Dashboards help teams track residual chlorine, alerts, water usage and multi-site status for better accountability."]
              ].map(([title, text]) => (
                <Card key={title} className="p-5">
                  <h3 className="text-base font-extrabold text-hydro-blue">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-hydro-muted">{text}</p>
                </Card>
              ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section">
        <Container>
          <SectionHeading eyebrow="Why HYDROscope" title="Water intelligence designed for operating teams" />
          <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {[
              ["Real-time", "Dashboard", Gauge],
              ["AI-powered", "Analytics", Activity],
              ["Automated", "Alerts", Bell],
              ["Remote", "Control", Cloud],
              ["Secure", "Visibility", ShieldCheck],
              ["Scalable", "Sites", Waypoints]
            ].map(([title, text, Icon]) => (
              <Card key={title as string} className="p-5 text-center">
                <Icon aria-hidden="true" className="mx-auto mb-4 text-hydro-blue" />
                <strong className="block text-sm">{title as string}</strong>
                <span className="text-xs text-hydro-muted">{text as string}</span>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section bg-hydro-soft">
        <Container>
          <SectionHeading eyebrow="Insights" title="Guides for smart water decisions" />
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section">
        <Container>
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <FAQAccordion faqs={faqs} />
        </Container>
      </section>
      <section className="relative overflow-hidden bg-hydro-navy py-20 text-center text-white">
        <div className="hydro-network absolute inset-0 opacity-10" />
        <Container className="relative">
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#bde8ff]">Smarter water. Safer future.</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-[clamp(34px,4vw,58px)] font-extrabold leading-[1.05] tracking-[-0.045em]">
            Transform how you monitor, treat and protect water.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#cfe4ff]">Discuss a pilot, utility deployment, rural water scheme or technology partnership with the HYDROscope team.</p>
          <Button href="/contact" className="mt-7">
            Request a consultation
          </Button>
        </Container>
      </section>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
