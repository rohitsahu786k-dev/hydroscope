import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Hydroscope | Request HydroPure Demo",
  description: "Contact Hydroscope to request a HydroPure demo, technical consultation, quotation or project discussion.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="hydro-section bg-hydro-soft">
      <Container>
        <Breadcrumbs items={[{ label: "Contact Us" }]} />
        <SectionHeading
          eyebrow="Contact Hydroscope"
          title="Request a demo, quotation or technical consultation"
          text="Share your project details and Hydroscope will help identify the right system, model and deployment approach."
        />
        <div className="grid grid-cols-[.8fr_1.2fr] gap-8 max-lg:grid-cols-1">
          <Card className="p-6">
            <h2 className="text-2xl font-extrabold">Hydroscope Technology Pvt. Ltd.</h2>
            <div className="mt-5 grid gap-3 text-sm text-hydro-muted">
              <a href={`mailto:${siteConfig.email}`} className="font-bold text-hydro-blue">{siteConfig.email}</a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-bold text-hydro-blue">{siteConfig.phone}</a>
              <p>{siteConfig.location}</p>
            </div>
          </Card>
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
