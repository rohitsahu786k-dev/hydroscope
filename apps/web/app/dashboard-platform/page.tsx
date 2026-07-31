import Image from "next/image";
import {
  Activity,
  Bell,
  FileSpreadsheet,
  Filter,
  LockKeyhole,
  MapPin,
  MonitorCheck,
  Search,
  ShieldCheck,
  TableProperties,
  UserCog
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HydroSure IoT Water Monitoring Dashboard | Real-Time Alerts",
  description:
    "HydroSure is an IoT monitoring platform for secure login, device maps, active/inactive device tracking, exportable reports and device analytics.",
  path: "/dashboard-platform"
});

const workflow = [
  ["Secure access", "Login, password change and 2FA protect dashboard entry.", LockKeyhole],
  ["Map overview", "Assigned device locations and status counts are visible from the home screen.", MapPin],
  ["Device registry", "Search, filter and export assigned active or inactive devices.", TableProperties],
  ["Device analytics", "Coordinates, system status, chlorine, water supplied and trend charts.", Activity]
];

const bentoCards = [
  ["2FA secured", "Authenticator-code verification and first-login password update workflows.", ShieldCheck],
  ["Profile controls", "View account, settings, password and two-factor authentication screens.", UserCog],
  ["Live status", "Active and inactive device counters for the last 24 hours.", MonitorCheck],
  ["Export-ready", "Home, device list and analytics data can be exported for review.", FileSpreadsheet],
  ["Smart filters", "Choose table columns such as region, city, facility and last update.", Filter],
  ["Search scale", "Find long device lists quickly by device ID or operational fields.", Search]
];

const screenshotCards = [
  {
    title: "Dashboard home",
    text: "Map view, assigned device counts and active/inactive status.",
    image: "/images/hydrosure-dashboard/dashboard-home.png"
  },
  {
    title: "Devices page",
    text: "Search, table controls, filters and export for assigned devices.",
    image: "/images/hydrosure-dashboard/devices-page.png"
  },
  {
    title: "Device analytics",
    text: "Location, system status, chlorine metrics, water supply and visualization.",
    image: "/images/hydrosure-dashboard/device-analytics-full.png"
  }
];

export default function DashboardPlatformPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)] py-20">
        <div className="hydro-network absolute inset-0 opacity-[0.08]" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Dashboard / Platform" }]} />
          <div className="grid grid-cols-[0.8fr_1.2fr] items-center gap-10 max-lg:grid-cols-1">
            <div>
              <span className="mb-4 inline-flex border border-hydro-line bg-white px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">
                HydroSure dashboard
              </span>
              <h1 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[1.02] tracking-[-0.055em] text-hydro-ink">
                Monitor every site from one intelligent water dashboard.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-hydro-muted">
                HydroSure gives operators and administrators secure access to maps, device counts, searchable device tables, exports, profile controls and real-time electrochlorinator analytics.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/request-demo">Request demo</Button>
                <Button href="/products/hydrosure-iot-real-time-monitoring" variant="outline">
                  View HydroSure
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 rounded-[48px] bg-hydro-cyan/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_30px_90px_rgba(9,36,76,0.18)]">
                <Image
                  src="/images/hydrosure-dashboard/hydrosure-dashboard-cinematic.png"
                  alt="Cinematic HydroSure dashboard interface showing water monitoring map and device analytics"
                  width={1680}
                  height={820}
                  priority
                  className="h-auto w-full rounded-[22px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="hydro-section bg-white">
        <Container>
          <div className="mb-10 max-w-4xl">
            <h2 className="text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.08] tracking-[-0.04em] text-hydro-ink">
              Built around secure access, field visibility and exportable operations data.
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {workflow.map(([title, text, Icon]) => (
              <Card key={title as string} className="p-6">
                <Icon aria-hidden="true" className="mb-5 text-hydro-blue" size={28} />
                <h3 className="text-lg font-extrabold text-hydro-ink">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-hydro-muted">{text as string}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="hydro-section bg-hydro-soft">
        <Container>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-[20px] bg-hydro-navy p-8 text-white shadow-[0_26px_70px_rgba(9,36,76,0.18)] max-lg:col-span-1">
              <Image
                src="/images/hydrosure-dashboard/device-analytics-full.png"
                alt="HydroSure device analytics page with map, operation metrics and chart visualization"
                width={1138}
                height={2058}
                className="absolute inset-0 h-full w-full object-cover opacity-28"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hydro-navy via-hydro-navy/70 to-hydro-navy/30" />
              <div className="relative z-10 flex min-h-[520px] flex-col justify-end">
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#dff6ff] backdrop-blur">
                  <Bell aria-hidden="true" size={15} />
                  Real-time device intelligence
                </span>
                <h2 className="max-w-2xl text-[clamp(34px,4vw,58px)] font-extrabold leading-[1.04] tracking-[-0.05em]">
                  From map marker to chlorine trendline in one workflow.
                </h2>
                <p className="mt-5 max-w-xl text-[#d5eaff]">
                  Device analytics combines coordinates, installation metadata, network type, current operation, chlorine produced, chlorine dosed, water supplied and processed chart visualization.
                </p>
              </div>
            </div>
            {bentoCards.map(([title, text, Icon]) => (
              <Card key={title as string} className="min-h-[180px] p-6">
                <Icon aria-hidden="true" className="mb-5 text-hydro-blue" size={24} />
                <h3 className="text-lg font-extrabold text-hydro-ink">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-hydro-muted">{text as string}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="hydro-section bg-white">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
            <div>
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">HydroSure screens</span>
              <h2 className="max-w-3xl text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.08] tracking-[-0.04em] text-hydro-ink">
                Key software pages explained with real dashboard references.
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center max-sm:grid-cols-1">
              {[
                ["1 min", "data cadence"],
                ["2FA", "secure login"],
                ["CSV/XLSX", "exports"]
              ].map(([value, label]) => (
                <div key={label} className="border border-hydro-line bg-hydro-soft px-5 py-3">
                  <strong className="block text-xl text-hydro-blue">{value}</strong>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-hydro-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {screenshotCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[18px] border border-hydro-line bg-white shadow-hydro">
                <div className="relative h-[230px] overflow-hidden bg-hydro-soft">
                  <Image src={card.image} alt={card.title} width={1672} height={941} className="h-full w-full object-cover object-left-top transition duration-700 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-hydro-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-hydro-muted">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="hydro-section bg-hydro-soft">
        <Container>
          <div className="grid grid-cols-[0.8fr_1.2fr] items-center gap-10 max-lg:grid-cols-1">
            <div>
              <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">Secure account layer</span>
              <h2 className="text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.08] tracking-[-0.04em] text-hydro-ink">
                Login, password governance and two-factor authentication.
              </h2>
              <p className="mt-5 text-hydro-muted">
                HydroSure supports username or email login, first-time password changes, 6-digit authenticator app verification, account settings and profile management.
              </p>
              <div className="mt-6 grid gap-3">
                {["Keep device operations private", "Enforce stronger first-login passwords", "Secure analyst and administrator access"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-hydro-line bg-white p-4 text-sm font-bold text-hydro-ink shadow-hydro">
                    <ShieldCheck aria-hidden="true" size={18} className="text-hydro-blue" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <ImageCard src="/images/hydrosure-dashboard/login-2fa.png" title="2FA verification" />
              <ImageCard src="/images/hydrosure-dashboard/devices-page.png" title="Device search and export" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ImageCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-hydro-line bg-white p-2 shadow-hydro">
      <Image src={src} alt={title} width={1672} height={941} className="h-auto w-full rounded-[14px]" />
      <p className="px-3 py-3 text-sm font-extrabold text-hydro-blue">{title}</p>
    </div>
  );
}
