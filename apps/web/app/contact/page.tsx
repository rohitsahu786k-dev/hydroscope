import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, CircleCheckBig, Headphones, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Hydroscope | Request HydroPure Demo",
  description:
    "Contact Hydroscope to request a HydroPure demo, technical consultation, quotation or project discussion.",
  path: "/contact"
});

const promises = [
  { Icon: Headphones, title: "Expert Support", text: "Get expert guidance from our team" },
  { Icon: ShieldCheck, title: "Quick Response", text: "We ensure quick turnaround" },
  { Icon: CircleCheckBig, title: "Reliable Solutions", text: "Tailored solutions for your needs" }
];

/* Every detail is read from lib/site.ts, so this page can never drift from the
   real contact record the rest of the site uses. */
const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const mapsQuery = encodeURIComponent(`${siteConfig.legalName}, ${siteConfig.location}`);
/* wa.me needs the number with no punctuation and no leading plus. */
const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`;

/* The three direct-contact routes the content guide asks for, as one wide card
   under the hero. Every value comes from siteConfig, so nothing here can drift
   from the real contact record. */
const directContact = [
  { Icon: Phone, label: "Phone", value: siteConfig.phone, action: "Call Now", href: telHref },
  { Icon: Mail, label: "Email", value: siteConfig.email, action: "Send email", href: `mailto:${siteConfig.email}` },
  { Icon: MessageCircle, label: "WhatsApp", value: siteConfig.phone, action: "Chat on WhatsApp", href: whatsappHref }
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* ---- Hero. The artwork carries the units and the wave, and was drawn
             with a clear left band, so the copy sits in that band. ---- */}
      <section className="relative overflow-hidden bg-white">
        {/* object-right keeps the units in frame whatever the section height
            works out to; the artwork's own left edge fades to white, so it
            blends into the white background with no visible seam. */}
        <Image
          src="/images/contact/contact-hero.webp"
          alt="HydroPure electrochlorinator units and a HydroSense sensor installed beside a water treatment tank"
          width={1792}
          height={878}
          priority
          draggable={false}
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-[62%] select-none object-cover object-right max-lg:hidden"
        />

        <Container className="relative">
          <div className="py-14 max-lg:py-10">
            <Breadcrumbs items={[{ label: "Contact Us" }]} />

            <div className="max-w-[560px] max-lg:max-w-none">
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">
                Get in touch
              </p>
              <h1 className="mt-3 text-[clamp(38px,4.4vw,62px)] font-normal leading-[1.05] tracking-[-0.04em] text-hydro-navy">
                Contact HydroScope Team
              </h1>
              <p className="mt-4 max-w-[460px] text-base leading-7 text-hydro-muted">
                For water project enquiries, technical consultations or general information, you can reach us
                directly by phone, email or WhatsApp.
              </p>

              <ul className="mt-8 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                {promises.map(({ Icon, title, text }) => (
                  <li key={title}>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#dcebfa] bg-white text-hydro-blue shadow-[0_10px_26px_-16px_rgba(9,36,76,0.5)]">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <p className="mt-3 text-sm font-extrabold text-hydro-navy">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-hydro-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Below lg the artwork moves into the flow: behind the copy it
                would sit under the text and make it unreadable. */}
            <div className="mt-8 hidden overflow-hidden rounded-2xl max-lg:block">
              <Image
                src="/images/contact/contact-hero.webp"
                alt=""
                width={1792}
                height={878}
                draggable={false}
                className="pointer-events-none h-auto w-full select-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Details + form ---- */}
      {/* Starts near-white so there is no hard edge where the white hero ends,
          then eases into the tint the cards sit on. */}
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#eef6ff_16%,#f7fbff_52%,#ffffff_100%)] pb-16 pt-12">
        <Container>
          {/* Three direct-contact routes in one wide card, as the guide sets
              out: call, email or WhatsApp without filling in a form first. */}
          <ul className="mb-6 grid grid-cols-3 divide-x divide-hydro-line rounded-2xl border border-[#dcebfa] bg-white shadow-[0_18px_50px_-34px_rgba(9,36,76,0.5)] max-md:grid-cols-1 max-md:divide-x-0 max-md:divide-y">
            {directContact.map(({ Icon, label, value, action, href }) => (
              <li key={label} className="flex flex-col items-start gap-3 p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf3fd] text-hydro-blue">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <p className="text-sm font-extrabold text-hydro-navy">{label}</p>
                <p className="break-all text-sm text-hydro-muted">{value}</p>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-extrabold text-hydro-blue"
                >
                  {action}
                  <ArrowRight aria-hidden="true" size={15} />
                </a>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-[0.8fr_1.6fr] gap-6 max-lg:grid-cols-1">
            <div className="rounded-2xl border border-[#dcebfa] bg-white p-7 shadow-[0_18px_50px_-34px_rgba(9,36,76,0.5)]">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-hydro-blue">
                Administrative headquarters
              </p>
              <h2 className="mt-2 text-2xl font-normal tracking-[-0.02em] text-hydro-navy">Address Information</h2>
              <span className="mt-3 block h-1 w-10 rounded-full bg-hydro-blue" aria-hidden="true" />

              <ul className="mt-7 grid gap-6">
                <ContactRow Icon={Phone} label="Phone">
                  <a href={telHref} className="font-extrabold text-hydro-navy hover:text-hydro-blue">
                    {siteConfig.phone}
                  </a>
                  <p className="mt-1 text-xs text-hydro-muted">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </ContactRow>

                <ContactRow Icon={Mail} label="Email">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all font-extrabold text-hydro-navy hover:text-hydro-blue"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="mt-1 text-xs text-hydro-muted">We reply within 24 hours</p>
                </ContactRow>

                <ContactRow Icon={MapPin} label="Address">
                  <p className="text-sm leading-6 text-hydro-ink">
                    <span className="font-extrabold text-hydro-navy">{siteConfig.legalName}</span>
                    <br />
                    {siteConfig.location}
                  </p>
                </ContactRow>

              </ul>
            </div>

            <div className="rounded-2xl border border-[#dcebfa] bg-white p-7 shadow-[0_18px_50px_-34px_rgba(9,36,76,0.5)]">
              <h2 className="text-2xl font-normal tracking-[-0.02em] text-hydro-navy">Send Us a Message</h2>
              <span className="mt-3 block h-1 w-10 rounded-full bg-hydro-blue" aria-hidden="true" />
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* ---- Map ---- */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#dcebfa] bg-white shadow-[0_18px_50px_-34px_rgba(9,36,76,0.5)]">
            <iframe
              title={`Map showing ${siteConfig.legalName}`}
              src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 max-sm:h-[240px]"
            />
            <div className="absolute left-6 top-6 max-w-[300px] rounded-xl border border-[#dcebfa] bg-white/95 p-5 shadow-[0_18px_44px_-26px_rgba(9,36,76,0.6)] backdrop-blur max-sm:static max-sm:m-4 max-sm:max-w-none">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eaf3fd] text-hydro-blue">
                <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <p className="mt-3 text-sm font-extrabold text-hydro-navy">{siteConfig.legalName}</p>
              <p className="mt-1 text-xs leading-5 text-hydro-muted">{siteConfig.location}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-hydro-blue"
              >
                Get Directions <ArrowRight aria-hidden="true" size={14} />
              </a>
            </div>
          </div>

          {/* ---- Closing CTA ---- */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#dcebfa] bg-[#f4f9ff]">
            <Image
              src="/images/contact/contact-cta.webp"
              alt=""
              width={2000}
              height={667}
              draggable={false}
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
            />
            {/* The artwork puts the units on the left, so the whole copy block
                sits on the right half where the banner is clear. */}
            <div className="relative px-8 py-10 max-lg:px-6">
              <div className="ml-auto w-[52%] text-right max-lg:ml-0 max-lg:w-full max-lg:text-left">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">
                  Looking for a solution?
                </p>
                <h2 className="mt-3 text-[clamp(22px,2.2vw,30px)] font-normal leading-tight tracking-[-0.02em] text-hydro-navy">
                  Let&apos;s Build a Smarter &amp; Safer Water System Together
                </h2>
                <p className="ml-auto mt-3 max-w-[460px] text-sm leading-6 text-hydro-muted max-lg:ml-0">
                  Our expert team is ready to help you find the right solution for your water treatment needs.
                </p>
                <a
                  href="/request-demo"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-hydro-navy px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-hydro-blue"
                >
                  Request a Quote <ArrowRight aria-hidden="true" size={16} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ContactRow({ Icon, label, children }: { Icon: typeof Phone; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#eaf3fd] text-hydro-blue">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-extrabold text-hydro-navy">{label}</p>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </li>
  );
}
