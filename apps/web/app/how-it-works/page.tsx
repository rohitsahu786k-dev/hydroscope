import { Breadcrumbs } from "@/components/breadcrumbs";
import { HowItWorksContent } from "@/components/how-it-works-content";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How HydroPure Works | Electrochlorination Process",
  description:
    "Learn how HydroPure uses brine electrolysis, dosing pumps, sensors and IoT dashboards for water disinfection.",
  path: "/how-it-works"
});

export default function HowItWorksPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_22%,#ffffff_100%)] pb-20 pt-10">
      <Container>
        <Breadcrumbs items={[{ label: "How It Works" }]} />
        <div className="mt-8">
          <HowItWorksContent />
        </div>
      </Container>
    </main>
  );
}
