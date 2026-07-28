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
  title: "HydroPure Electrochlorinator | IoT Enabled Water Chlorination System",
  description:
    "HydroPure by Hydroscope is an IoT-enabled electrochlorination system for on-site chlorine generation, automatic dosing, solar-compatible deployment and real-time monitoring.",
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
            eyebrow="Hydroscope integrated solution"
            title="HydroPure, HydroSense and HydroSure"
            text="Hydroscope brings electrochlorination, water-quality sensing and dashboard monitoring into one ecosystem for distributed water networks."
          />
          <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-4 gap-0 rounded-hydro border border-hydro-line bg-hydro-soft p-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              ["On-Site Generation", "Generate disinfectant using salt, water and electricity.", ShieldCheck],
              ["Automatic Dosing", "Reduce manual dosing dependency with controlled operation.", Gauge],
              ["Live Monitoring", "HydroSure dashboards show alerts, reports and site status.", Cloud],
              ["Solar Compatible", "Built for rural, distributed and off-grid deployments.", Waypoints]
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
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">How HydroPure works</span>
              <h2 className="text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.08] tracking-[-0.045em]">
                From brine electrolysis to monitored water disinfection.
              </h2>
              <p className="mt-5 text-hydro-muted">
                Salt and softened water are used to prepare brine. The brine passes through an electrolytic cell, converts into sodium hypochlorite and is dosed automatically into the water line.
              </p>
              <div className="mt-7 grid gap-4">
                {[
                  ["01", "Prepare brine", "Softened water and salt create the input for electrochlorination."],
                  ["02", "Generate sodium hypochlorite", "Direct current triggers electrolysis inside the electrolytic cell."],
                  ["03", "Dose and monitor", "Dosing pumps, sensors and HydroSure dashboards support controlled operation."]
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
          <SectionHeading eyebrow="Solutions" title="Choose a solution based on your water network" />
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {solutions.slice(0, 6).map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </Container>
      </section>
      <section className="hydro-section bg-hydro-soft">
        <Container>
          <SectionHeading eyebrow="Applications" title="Rural, municipal, institutional and industrial water networks" />
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
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">Automated village tank chlorination</span>
              <h2 className="text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.045em]">
                Safer drinking water for every village tank.
              </h2>
              <p className="mt-5 text-hydro-muted">
                Replace manual dosing with automated chlorination, sensor feedback and cloud dashboard visibility. The workflow is built for rural and off-grid deployments.
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
                ["Water safety challenge", "Manual chlorination creates inconsistent dosing, delayed monitoring and limited accountability."],
                ["Hydroscope solution", "HydroPure, HydroSense and HydroSure combine generation, sensing and visibility."],
                ["Model range", "HSE 100 to HSE 2000 support small tanks through large multi-site infrastructure projects."],
                ["Buyer outcome", "Lower chemical handling, improved dosing consistency and better reporting for decision-makers."]
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
          <SectionHeading eyebrow="Why Hydroscope" title="Water intelligence designed for operating teams" />
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
          <SectionHeading eyebrow="SEO resources" title="Guides for smart water decisions" />
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
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#bde8ff]">Automate chlorination and monitoring</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-[clamp(34px,4vw,58px)] font-extrabold leading-[1.05] tracking-[-0.045em]">
            Share your water demand, tank capacity and monitoring requirement.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#cfe4ff]">Hydroscope will recommend the right HydroPure model, sensing layer and deployment plan.</p>
          <Button href="/request-demo" className="mt-7">
            Request demo
          </Button>
        </Container>
      </section>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
