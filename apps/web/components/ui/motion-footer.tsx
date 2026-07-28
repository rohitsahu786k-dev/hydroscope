"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ArrowUp, Mail, MapPin, Phone, ShieldCheck, Waves } from "lucide-react";

type FooterLink = { label: string; href: string; openInNewTab?: boolean };
type FooterColumn = { heading: string; links: FooterLink[] };

export type MotionFooterProps = {
  description: string;
  columns: FooterColumn[];
  bottomText: string;
  email: string;
  phone: string;
  location: string;
  tagline: string;
};

const STYLES = `
.hydro-cinematic-footer {
  --footer-ink: #f8fbff;
  --footer-muted: #aabbd0;
  --footer-line: rgba(219, 228, 239, 0.16);
  --footer-blue: #1678e8;
  --footer-cyan: #26b9e8;
}

@keyframes hydro-footer-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes hydro-footer-breathe {
  from { transform: translate(-50%, -50%) scale(0.94); opacity: 0.55; }
  to { transform: translate(-50%, -50%) scale(1.08); opacity: 0.95; }
}

@keyframes hydro-footer-rise {
  from { transform: translateY(34px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.hydro-footer-marquee {
  animation: hydro-footer-marquee 34s linear infinite;
}

.hydro-footer-aurora {
  animation: hydro-footer-breathe 8s ease-in-out infinite alternate;
}

.hydro-footer-rise {
  animation: hydro-footer-rise 0.9s ease both;
}
`;

function MagneticLink({
  href,
  children,
  className = "",
  openInNewTab
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  openInNewTab?: boolean;
}) {
  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noreferrer" : undefined}
      className={`rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-[#dce9f8] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.11] hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}

function MarqueeItem() {
  return (
    <div className="flex items-center gap-8 px-4">
      <span>On-Site Chlorine Generation</span>
      <span className="text-[#26b9e8]">+</span>
      <span>IoT Water Monitoring</span>
      <span className="text-[#26b9e8]">+</span>
      <span>Solar Compatible</span>
      <span className="text-[#26b9e8]">+</span>
      <span>HydroPure</span>
      <span className="text-[#26b9e8]">+</span>
      <span>HydroSense</span>
      <span className="text-[#26b9e8]">+</span>
      <span>HydroSure</span>
    </div>
  );
}

export function MotionFooter({ description, columns, bottomText, email, phone, location, tagline }: MotionFooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="hydro-cinematic-footer relative overflow-hidden bg-[#04152a] text-white">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="hydro-footer-aurora pointer-events-none absolute left-1/2 top-1/2 h-[56vh] w-[72vw] rounded-full bg-[radial-gradient(circle,rgba(38,185,232,0.24)_0%,rgba(22,120,232,0.16)_38%,transparent_68%)] blur-[88px]" />
      <div className="hydro-network pointer-events-none absolute inset-0 opacity-[0.18]" />
      <div
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none text-[18vw] font-black leading-none tracking-[-0.08em] text-white/[0.035] max-md:text-[25vw]"
      >
        HYDRO
      </div>

      <div className="-mx-8 rotate-[-1.8deg] border-y border-white/10 bg-white/[0.05] py-4 shadow-2xl backdrop-blur-md">
        <div className="hydro-footer-marquee flex w-max text-xs font-extrabold uppercase tracking-[0.28em] text-[#b9cee6]">
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>

      <div className="hydro-footer-rise relative z-10 mx-auto grid max-w-7xl grid-cols-[1.2fr_1.6fr_1fr] gap-10 px-6 py-16 max-lg:grid-cols-1">
        <section>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
              <Image src="/hydroscope-logo.png" alt="" width={48} height={48} className="h-12 w-12 object-contain" />
            </span>
            <span>
              <strong className="block text-3xl font-semibold leading-none">
                <b className="font-extrabold text-[#26b9e8]">HYDRO</b>scope
              </strong>
              <small className="text-xs text-[#aabbd0]">{tagline}</small>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#aabbd0]">{description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <MagneticLink href="/request-demo" className="bg-[#1678e8] text-white hover:bg-[#1f86ff]">
              Request Demo
            </MagneticLink>
            <MagneticLink href="/resources">Download Resources</MagneticLink>
          </div>
        </section>

        <nav className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          {columns.slice(0, 2).map((column) => (
            <div key={column.heading} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <h2 className="mb-5 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[#26b9e8]">
                <ShieldCheck aria-hidden="true" size={16} />
                {column.heading}
              </h2>
              <div className="grid gap-3">
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm font-semibold text-[#c9d8eb] transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <h2 className="mb-5 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[#26b9e8]">
            <Waves aria-hidden="true" size={16} />
            Contact
          </h2>
          <div className="grid gap-4 text-sm text-[#c9d8eb]">
            <a href={`mailto:${email}`} className="flex gap-3 transition hover:text-white">
              <Mail aria-hidden="true" size={17} className="mt-0.5 flex-none text-[#26b9e8]" />
              {email}
            </a>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex gap-3 transition hover:text-white">
              <Phone aria-hidden="true" size={17} className="mt-0.5 flex-none text-[#26b9e8]" />
              {phone}
            </a>
            <p className="flex gap-3 leading-6">
              <MapPin aria-hidden="true" size={17} className="mt-1 flex-none text-[#26b9e8]" />
              {location}
            </p>
          </div>
        </section>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 border-t border-white/10 px-6 py-6 text-xs font-semibold text-[#8194ad] max-sm:flex-col">
        <span>© 2026 HYDROscope. All rights reserved.</span>
        <span>{bottomText}</span>
        <button
          type="button"
          onClick={scrollToTop}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/[0.12]"
          aria-label="Back to top"
        >
          <ArrowUp aria-hidden="true" size={18} />
        </button>
      </div>
    </footer>
  );
}
