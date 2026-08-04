import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { siteConfig } from "@/lib/site";

const solutions = [
  { label: "HydroPure", href: "/products/hydropure" },
  { label: "HydroSense", href: "/products/hydrosense" },
  { label: "HydroSure", href: "/dashboard-platform" }
];

const otherSolutions = [
  { label: "HydroPilot", href: "/solutions#hydropilot" },
  { label: "HydroEdge", href: "/solutions#hydroedge" },
  { label: "HydroVerse", href: "/solutions#hydroverse" }
];

export async function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-[88px] items-center gap-7 max-lg:h-[78px] max-sm:h-[70px]">
        <Link href="/" className="flex min-w-[270px] items-center gap-3 max-xl:min-w-[230px] max-lg:min-w-0" aria-label="HYDROscope home">
          <span className="grid h-[54px] w-[54px] place-items-center max-sm:h-11 max-sm:w-11">
            <Image src="/hydroscope-logo.png" alt="" width={54} height={54} className="h-full w-full object-contain" priority />
          </span>
          <span className="flex flex-col leading-none">
            <strong className="text-[27px] font-semibold tracking-[-0.04em] text-[#1c2a43] max-sm:text-[19px]">
              <b className="font-extrabold text-hydro-blue">HYDRO</b>scope
            </strong>
            <small className="mt-1 text-[10px] tracking-[.04em] text-[#788495] max-sm:hidden">{siteConfig.tagline}</small>
          </span>
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-1 max-lg:hidden" aria-label="Primary navigation">
          <Link href="/" className="rounded-full px-4 py-3 text-[13px] font-semibold text-hydro-ink transition hover:bg-[#edf6ff] hover:text-hydro-blue">Home</Link>
          <Link href="/#why-hydroscope" className="rounded-full px-4 py-3 text-[13px] font-semibold text-hydro-ink transition hover:bg-[#edf6ff] hover:text-hydro-blue">Why Choose Us</Link>
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-full px-4 py-3 text-[13px] font-semibold text-hydro-ink transition hover:bg-[#edf6ff] hover:text-hydro-blue">
              Solutions <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-hydro-line bg-white p-3 shadow-hydroHover">
                {solutions.map((item) => <Link key={item.label} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-hydro-ink hover:bg-[#edf6ff] hover:text-hydro-blue">{item.label}</Link>)}
                <div className="my-2 border-t border-hydro-line" />
                <p className="px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-hydro-muted">Other IoT Solutions</p>
                {otherSolutions.map((item) => <Link key={item.label} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-hydro-ink hover:bg-[#edf6ff] hover:text-hydro-blue">{item.label}</Link>)}
              </div>
            </div>
          </div>
          <Link href="/about" className="rounded-full px-4 py-3 text-[13px] font-semibold text-hydro-ink transition hover:bg-[#edf6ff] hover:text-hydro-blue">About Us</Link>
          <Link href="/contact" className="rounded-full px-4 py-3 text-[13px] font-semibold text-hydro-ink transition hover:bg-[#edf6ff] hover:text-hydro-blue">Contact</Link>
        </nav>

        <Button href="/contact" className="max-xl:hidden">Get in touch</Button>
      </Container>
    </header>
  );
}
