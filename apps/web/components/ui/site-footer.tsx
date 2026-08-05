import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

type FooterLink = { label: string; href: string; openInNewTab?: boolean };
type FooterColumn = { heading: string; links: FooterLink[] };

export type SiteFooterProps = {
  description: string;
  columns: FooterColumn[];
  bottomText: string;
  email: string;
  phone: string;
  location: string;
  tagline: string;
};

/* The site footer, rebuilt for the website review.
 *
 * What it replaced was a full-viewport "cinematic" panel: the footer was pinned
 * with position:fixed inside a clipped, screen-tall wrapper so the page slid up
 * to reveal it, and it took a whole screen however little it contained. Every
 * link was a glass pill that slid away from the cursor, over a drifting aurora,
 * a scrolling marquee and a giant HYDRO watermark - so the one thing a footer
 * has to do, let someone find an address or a page, was the hardest thing to do
 * in it.
 *
 * This is an ordinary footer: brand and contact details on the left, link
 * columns on the right, a legal line underneath. It is as tall as its contents
 * and it holds still. It renders on every page through the root layout, so
 * there is nothing per-page to keep in step. */

const CONTACT_ITEM = "flex items-start gap-3 text-sm leading-6 text-[#c2d4ea]";

function FooterLinkList({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h2 className="m-0 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#7fc4ec]">{column.heading}</h2>
      <ul className="mt-4 list-none space-y-2.5 p-0">
        {column.links.map((link) => (
          <li key={`${column.heading}-${link.href}`}>
            <Link
              href={link.href}
              target={link.openInNewTab ? "_blank" : undefined}
              rel={link.openInNewTab ? "noreferrer" : undefined}
              className="text-sm leading-6 text-[#c2d4ea] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter({ description, columns, bottomText, email, phone, location, tagline }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#04152a] text-white">
      {/* One quiet CTA strip, kept because the old footer's two calls were the
          only ones on the deeper pages, and losing them would cost a route to
          contact. It is a single row rather than a full-height panel. */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-[90%] max-w-[1180px] flex-col gap-5 py-9 md:flex-row md:items-center md:justify-between">
          <p className="m-0 text-xl font-semibold tracking-[-0.02em] text-white">Ready to begin?</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/request-demo"
              className="inline-flex items-center rounded-full bg-[#1678e8] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2a8bf5]"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-[#dce9f8] transition-colors hover:border-white/50 hover:text-white"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[90%] max-w-[1180px] py-16 max-sm:py-12">
        {/* The brand block is wider than a link column because it carries the
            address, which does not want to wrap every few words. */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/hydroscope-logo.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span>
                <strong className="block text-xl font-semibold leading-none">
                  <b className="font-extrabold text-[#26b9e8]">HYDRO</b>scope
                </strong>
                <small className="text-xs text-[#8fa6c2]">{tagline}</small>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#c2d4ea]">{description}</p>

            <address className="mt-6 space-y-3 not-italic">
              <a href={`mailto:${email}`} className={`${CONTACT_ITEM} transition-colors hover:text-white`}>
                <Mail aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-[#26b9e8]" />
                {email}
              </a>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className={`${CONTACT_ITEM} transition-colors hover:text-white`}>
                <Phone aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-[#26b9e8]" />
                {phone}
              </a>
              <p className={CONTACT_ITEM}>
                <MapPin aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-[#26b9e8]" />
                <span className="max-w-xs">{location}</span>
              </p>
            </address>
          </div>

          {/* Two columns side by side even on a phone: the lists are short, and
              stacking them pushes the legal line a long way down. */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:gap-10">
            {columns.map((column) => (
              <FooterLinkList key={column.heading} column={column} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-[#8fa6c2] md:flex-row md:items-center md:justify-between">
          <p className="m-0">
            &copy; {year} {"HYDROscope"}. All rights reserved.
          </p>
          <p className="m-0">{bottomText}</p>
        </div>
      </div>
    </footer>
  );
}
