import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Building2,
  CheckCircle2,
  Cloud,
  Factory,
  Gauge,
  Network,
  ShieldCheck,
  Sparkles,
  Waves,
  Zap
} from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Smart Water Management Solutions | HYDROscope",
  description:
    "HYDROscope delivers HydroPure automated electrochlorination, HydroSense real-time water quality monitoring and HydroSure AI-powered water infrastructure intelligence.",
  path: "/"
});

const sectors = [
  { label: "Industrial", icon: Factory },
  { label: "Private Sector", icon: Building2 },
  { label: "Public Sector", icon: ShieldCheck },
  { label: "Municipal", icon: Network }
];

const solutions = [
  {
    tag: "Automated Disinfection",
    title: "HydroPure",
    subtitle: "Automated Water Disinfection with Real-Time Control",
    description: "Automatically generates disinfectant on-site and maintains optimal chlorine through intelligent dosing.",
    image: "/images/hydroscope-products/hydropure-hp-100.webp",
    href: "/products/hydropure",
    checks: ["Automatically adjusts chlorine dosage", "Solar and off-grid compatible", "Available in multiple capacity variants"],
    specialty: ["99.99% Reliable Disinfection", "Reduced Operating Costs"]
  },
  {
    tag: "Real-Time Monitoring",
    title: "HydroSense",
    subtitle: "Smart Water Quality Monitoring System",
    description: "Continuously monitors water quality 24/7, providing real-time insights and instant alerts to detect issues early and protect consumers.",
    image: "/images/hydroscope-products/hydrosense-water-quality-sensor.webp",
    href: "/products/hydrosense",
    checks: ["Monitor water quality parameters in real time", "Detect water quality changes instantly", "Access live data from anywhere"],
    specialty: ["24/7 Continuous Monitoring", "Multi-Parameter Capability"]
  },
  {
    tag: "AI-Powered Analytics",
    title: "HydroSure",
    subtitle: "AI-Powered Water Management Platform",
    description: "Unifies the entire water network into a single platform with real-time visibility, predictive insights and alerts before failures occur.",
    image: "/images/hero/hero-water-confidence-desktop.webp",
    href: "/dashboard-platform",
    checks: ["Monitor your entire water network in real time", "Predictive alerts before failures occur", "AI detects leaks and abnormal behaviour"],
    specialty: ["Manage Thousands of Devices", "Secure Cloud Platform"]
  }
];

const features = [
  { title: "Energy Efficient Operation", text: "Optimized electrolysis design enables dependable performance with lower power consumption.", icon: Zap },
  { title: "On-Site Chlorine Generation", text: "Produces disinfectant safely at the point of use without transporting hazardous chlorine.", icon: Sparkles },
  { title: "Fully Automated Operation", text: "Microcontroller-based intelligence controls dosing and monitoring with minimal manual intervention.", icon: Gauge },
  { title: "Self-Cleaning Electrolyzer", text: "Automated maintenance reduces scale buildup and extends operational life.", icon: Activity }
];

const useCases = [
  { title: "Drinking Water Treatment", image: "/images/applications/village-water-tanks.webp" },
  { title: "Wastewater Treatment", image: "/images/risk-removed/salt-refill.webp" },
  { title: "Cooling Water Systems", image: "/images/applications/industrial-institutional-water.webp" },
  { title: "Bleaching Processes", image: "/images/risk-removed/no-chlorine-cylinders.webp" },
  { title: "Pharmaceutical Manufacturing", image: "/images/applications/industrial-institutional-water.webp" }
];

const stakeholders = ["Government", "State PHED / RWS", "District Administration", "Village Panchayat"];

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="border-y border-hydro-line bg-white py-5">
        <Container>
          <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.label} className="flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-hydro-ink">
                  <Icon size={18} className="text-hydro-blue" aria-hidden="true" /> {sector.label}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="solutions" className="hydro-section bg-hydro-soft">
        <Container>
          <SectionHeading
            eyebrow="Our Innovative Solutions"
            title="Transforming Water Infrastructure with Pure Intelligence"
            text="An integrated ecosystem delivering real-time monitoring, automated water treatment, and intelligent infrastructure performance."
          />
          <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1">
            {solutions.map((solution) => (
              <Card key={solution.title} className="group flex h-full flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-hydroHover">
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image src={solution.image} alt={`${solution.title} smart water solution`} fill sizes="(min-width: 1280px) 33vw, 100vw" className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-hydro-blue">{solution.tag}</span>
                  <h2 className="mt-3 text-3xl font-normal tracking-tight text-hydro-ink">{solution.title}</h2>
                  <p className="mt-2 font-semibold text-hydro-ink">{solution.subtitle}</p>
                  <p className="mt-3 leading-7 text-hydro-muted">{solution.description}</p>
                  <ul className="mt-5 grid gap-2">
                    {solution.checks.map((item) => <li key={item} className="flex gap-2 text-sm text-hydro-ink"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-hydro-blue" />{item}</li>)}
                  </ul>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {solution.specialty.map((item) => <div key={item} className="rounded-xl bg-[#edf6ff] px-3 py-3 text-xs font-semibold text-hydro-ink">{item}</div>)}
                  </div>
                  <Link href={solution.href} className="mt-6 inline-flex font-semibold text-hydro-blue">Explore Solution →</Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="hydro-section">
        <Container>
          <SectionHeading eyebrow="Stakeholders" title="Everyone the water passes through." />
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {stakeholders.map((item, index) => (
              <Card key={item} className="relative overflow-hidden p-0">
                <div className="relative aspect-[4/3] bg-[#edf6ff]">
                  <Image src={index === 3 ? "/images/applications/village-water-tanks.webp" : "/images/applications/municipal-government-water.webp"} alt={item} fill className="object-cover" />
                </div>
                <div className="p-5"><h3 className="text-xl font-normal text-hydro-ink">{item}</h3></div>
              </Card>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-hydro-line bg-white shadow-hydro">
            <div className="bg-hydro-navy px-6 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-white">Model Capacity Range</div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-[#edf6ff] text-hydro-ink"><tr><th className="p-4">Model</th><th className="p-4">Daily Chlorine</th><th className="p-4">Water Treated</th></tr></thead>
                <tbody className="divide-y divide-hydro-line text-hydro-muted">
                  {[['HP-100','100 g/day','1,00,000 litres/day'],['HP-200','200 g/day','2,00,000 litres/day'],['HP-500','500 g/day','5,00,000 litres/day'],['HP-1000','1000 g/day','10,00,000 litres/day'],['HP-2000','2000 g/day','20,00,000 litres/day']].map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell} className="p-4">{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="hydro-section bg-hydro-soft">
        <Container>
          <SectionHeading eyebrow="Key Features" title="Key features." />
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {features.map((feature) => {
              const Icon = feature.icon;
              return <Card key={feature.title} className="min-h-[260px] bg-[linear-gradient(145deg,#f7fbff,#e8f3ff)]"><Icon className="text-hydro-blue" /><h3 className="mt-20 text-lg font-normal uppercase tracking-wide text-hydro-ink">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-hydro-muted">{feature.text}</p></Card>;
            })}
          </div>
        </Container>
      </section>

      <section className="hydro-section">
        <Container>
          <SectionHeading eyebrow="Use Cases" title="Built for Multiple Water Challenges" text="HydroPure adapts to a wide range of water environments where safe, reliable and continuous disinfection is critical." />
          <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {useCases.map((item) => <article key={item.title} className="text-center"><div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full border-8 border-[#edf6ff]"><Image src={item.image} alt={item.title} fill className="object-cover" /></div><h3 className="mt-4 font-normal text-hydro-ink">{item.title}</h3></article>)}
          </div>
        </Container>
      </section>

      <section className="hydro-section bg-hydro-soft">
        <Container>
          <SectionHeading eyebrow="The Challenge" title="Manual operation creates blind spots." text="Irregular dosing, fragmented monitoring and delayed intervention make water quality harder to control." />
          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            <Card className="border-[#ffd9dc] bg-[#fff7f7] p-8">
              <h3 className="text-2xl font-normal text-hydro-ink">Current Process</h3>
              <p className="mt-2 text-hydro-muted">Irregular dosing, over/under dosing, no monitoring and health risk.</p>
              <div className="mt-8 flex items-center justify-between gap-2 max-sm:flex-col">
                {["Source", "Treatment Plant", "Village Tank", "Manual Intervention", "Homes"].map((item, i) => <div key={item} className="flex items-center gap-2"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-xs font-bold text-[#d84f5f] shadow">{i+1}</span><span className="text-xs text-hydro-muted">{item}</span></div>)}
              </div>
            </Card>
            <Card className="border-[#ccebdc] bg-[#f3fff8] p-8">
              <h3 className="text-2xl font-normal text-hydro-ink">The HydroPure Solution</h3>
              <p className="mt-2 text-hydro-muted">A monitored dosing layer built for distributed water tanks.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Automated Dosing", "Real-Time Visibility", "Health Reporting", "Safe Disinfection"].map((item) => <div key={item} className="flex items-center gap-2 rounded-xl bg-white p-4 text-sm font-semibold text-hydro-ink"><CheckCircle2 size={17} className="text-[#1e9d67]" />{item}</div>)}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section id="why-hydroscope" className="hydro-section">
        <Container>
          <SectionHeading eyebrow="Why Hydroscope" title="Everything your water infrastructure needs" text="An integrated water ecosystem combining intelligent sensing, automated disinfection, and AI-powered monitoring into one unified platform for complete operational control." />
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
            {[['24×7','Continuous Monitoring'],['100%','Cloud-Connected Architecture'],['1','Unified Platform'],['100%','Remote Accessibility']].map(([value,label]) => <Card key={label} className="text-center"><strong className="text-4xl font-normal text-hydro-blue">{value}</strong><p className="mt-3 text-sm font-semibold text-hydro-ink">{label}</p></Card>)}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              ["Engineered as One","Sensors, treatment, automation, and software—perfectly integrated for seamless operation."],
              ["Precision Monitoring","High-accuracy water quality measurements with continuous data validation."],
              ["Intelligent Disinfection","Optimized chlorine generation and dosing for safer, more efficient treatment."],
              ["Operational Intelligence","AI transforms operational data into insights and automated decisions."],
              ["Connected Everywhere","Unified cloud dashboard with live monitoring, alarms, trends, reports and remote control."],
              ["Ready for Scale","Designed for municipalities, utilities, industries and large distributed water networks."]
            ].map(([title,text]) => <Card key={title} className="group min-h-[220px] [perspective:1000px]"><div className="flex h-full flex-col justify-between transition duration-500 group-hover:-translate-y-2"><Waves className="text-hydro-blue" /><div><h3 className="text-xl font-normal text-hydro-ink">{title}</h3><p className="mt-3 leading-7 text-hydro-muted">{text}</p></div></div></Card>)}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden border-y border-hydro-line bg-hydro-navy py-5 text-white">
        <div className="flex min-w-max animate-[marquee_24s_linear_infinite] gap-12 px-6 text-sm font-semibold uppercase tracking-[0.16em]">
          {["Electrochlorinators","Water Quality Sensor","IoT","Automation","AI","Unified Systems","Electrochlorinators","Water Quality Sensor","IoT","Automation","AI","Unified Systems"].map((item,index) => <span key={`${item}-${index}`}>• {item}</span>)}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#102a64,#164d8f)] py-24 text-white">
        <div className="hydro-network absolute inset-0 opacity-10" />
        <Container className="relative text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#bde8ff]">Request Consultation</span>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(38px,5vw,68px)] font-normal leading-[1.05] tracking-[-0.045em]">Let&apos;s Engineer the Future of Water Together.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#cfe4ff]">Discuss a pilot, utility deployment, rural water scheme, or long-term water infrastructure project with the HYDROscope team.</p>
          <Button href="/contact" className="mt-8">Request a Consultation</Button>
        </Container>
      </section>

      <section className="hydro-section bg-white">
        <Container className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-hydro-blue">HYDROscope Proudly Supports</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-lg font-semibold text-hydro-muted">
            {['Digital India','Make in India','Clean India','Jal Jeevan Mission','WHO'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </Container>
      </section>
    </main>
  );
}
