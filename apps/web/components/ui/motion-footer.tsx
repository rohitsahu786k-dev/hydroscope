"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

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
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
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
  from { transform: translateY(42px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes hydro-footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(38, 185, 232, 0.35)); }
  15%, 45% { transform: scale(1.18); filter: drop-shadow(0 0 12px rgba(38, 185, 232, 0.7)); }
  30% { transform: scale(1); }
}

.hydro-footer-marquee {
  animation: hydro-footer-marquee 40s linear infinite;
}

.hydro-footer-aurora {
  animation: hydro-footer-breathe 8s ease-in-out infinite alternate;
}

.hydro-footer-rise {
  animation: hydro-footer-rise 0.9s ease both;
}

.hydro-footer-heartbeat {
  animation: hydro-footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.hydro-footer-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.hydro-footer-glass {
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025));
  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.22),
    inset 0 1px 1px rgba(255, 255, 255, 0.12),
    inset 0 -1px 2px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, background 0.35s ease, color 0.35s ease;
}

.hydro-footer-glass:hover {
  border-color: rgba(255, 255, 255, 0.25);
  background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
  color: white;
}

.hydro-footer-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(185, 206, 230, 0.62) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 24px rgba(38, 185, 232, 0.18));
}
`;

function MagneticLink({
  href,
  children,
  className = "",
  openInNewTab
}: {
  href: string;
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
}) {
  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) scale(1.04)`;
  }

  function handleMouseLeave(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.style.transform = "";
  }

  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`hydro-footer-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-[#dce9f8] ${className}`}
    >
      {children}
    </Link>
  );
}

/* The strapline the content guide sets for every page footer. */
const MARQUEE_ITEMS = [
  "IoT Solutions",
  "Water Quality Monitoring",
  "Smart Electro-Chlorination",
  "AI Water Analytics"
];

function MarqueeItem() {
  return (
    <div className="flex items-center gap-8 px-4">
      {MARQUEE_ITEMS.map((item, index) => (
        <span key={item} className="flex items-center gap-8">
          {item}
          {index < MARQUEE_ITEMS.length - 1 ? <span className="text-[#26b9e8]">&bull;</span> : null}
        </span>
      ))}
      <span className="text-[#26b9e8]">&bull;</span>
    </div>
  );
}

export function MotionFooter({ description, columns, bottomText, email, phone, location, tagline }: MotionFooterProps) {
  /* The footer surfaces the whole Solutions range plus Company, so the cap is
     high enough to fit both groups rather than truncating mid-range. */
  const quickLinks = columns.flatMap((column) => column.links).slice(0, 10);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      {/* Ordinary flow footer. It used to be pinned with position:fixed inside
          a clipped, screen-tall wrapper, which produced a parallax reveal and
          forced the footer to occupy a whole viewport whatever it contained.
          It now takes only the height its content needs. */}
      <footer className="hydro-cinematic-footer relative w-full overflow-hidden bg-[#04152a] text-white">
        <div className="hydro-footer-aurora pointer-events-none absolute left-1/2 top-1/2 z-0 h-[420px] w-[80%] rounded-[50%] bg-[radial-gradient(circle,rgba(38,185,232,0.28)_0%,rgba(22,120,232,0.16)_40%,transparent_70%)] blur-[88px]" />
        <div className="hydro-footer-grid pointer-events-none absolute inset-0 z-0" />

        <div className="pointer-events-none absolute -bottom-6 left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-extrabold leading-[0.75] tracking-[-0.05em] text-white/[0.035]">
          HYDRO
        </div>

        <div className="relative z-10 w-full overflow-hidden border-b border-white/10 bg-[#04152a]/70 py-3.5 backdrop-blur-md">
          <div className="hydro-footer-marquee flex w-max text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#b9cee6] md:text-xs">
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-[90%] flex-col items-center pt-14 text-center max-sm:pt-10">
            <Link href="/" className="mb-8 inline-flex items-center gap-4">
              <span className="hydro-footer-glass grid h-16 w-16 place-items-center rounded-full">
                <Image src="/hydroscope-logo.png" alt="" width={52} height={52} className="h-[52px] w-[52px] object-contain" />
              </span>
              <span className="text-left">
                <strong className="block text-3xl font-semibold leading-none">
                  <b className="font-extrabold text-[#26b9e8]">HYDRO</b>scope
                </strong>
                <small className="text-xs text-[#aabbd0]">{tagline}</small>
              </span>
            </Link>

            <h2 className="hydro-footer-text-glow text-[clamp(34px,5vw,64px)] font-normal leading-none tracking-[-0.04em]">
              Ready to begin?
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#cfe4ff] md:text-base">{description}</p>

            <div className="mt-8 flex w-full flex-col items-center gap-5">
              <div className="flex w-full flex-wrap justify-center gap-4">
                <MagneticLink href="/request-demo" className="px-8 py-4 text-[15px] text-white">
                  Request Demo
                </MagneticLink>
                <MagneticLink href="/contact" className="px-8 py-4 text-[15px]">
                  Talk to Sales
                </MagneticLink>
              </div>

              <div className="flex w-full flex-wrap justify-center gap-3 md:gap-5">
                {quickLinks.map((link) => (
                  <MagneticLink key={link.href} href={link.href} openInNewTab={link.openInNewTab} className="px-5 py-3 text-xs text-[#aabbd0] md:text-sm">
                    {link.label}
                  </MagneticLink>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs font-semibold text-[#aabbd0] md:text-sm">
                <a href={`mailto:${email}`} className="hydro-footer-glass inline-flex items-center gap-2 rounded-full px-4 py-3 transition hover:text-white">
                  <Mail aria-hidden="true" size={15} className="text-[#26b9e8]" />
                  {email}
                </a>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hydro-footer-glass inline-flex items-center gap-2 rounded-full px-4 py-3 transition hover:text-white">
                  <Phone aria-hidden="true" size={15} className="text-[#26b9e8]" />
                  {phone}
                </a>
                <span className="hydro-footer-glass inline-flex max-w-full items-center gap-2 rounded-full px-4 py-3 text-left leading-5">
                  <MapPin aria-hidden="true" size={15} className="text-[#26b9e8]" />
                  {location}
                </span>
              </div>
            </div>
          </div>

        <div className="relative z-20 mx-auto mt-12 flex w-[90%] flex-col items-center justify-between gap-5 border-t border-white/10 py-7 text-center md:flex-row">
            <div className="order-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8194ad] md:order-1 md:text-xs">
              (c) 2026 HYDROscope. All rights reserved.
            </div>

            <div className="hydro-footer-glass order-1 flex items-center gap-2 rounded-full px-6 py-3 md:order-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aabbd0] md:text-xs">Built for</span>
              <span className="hydro-footer-heartbeat text-sm font-extrabold text-[#26b9e8] md:text-base">water</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aabbd0] md:text-xs">{bottomText}</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="hydro-footer-glass order-3 grid h-12 w-12 place-items-center rounded-full text-[#dce9f8]"
              aria-label="Back to top"
            >
              <ArrowUp aria-hidden="true" size={18} />
            </button>
          </div>
      </footer>
    </>
  );
}
