import { Breadcrumbs } from "@/components/breadcrumbs";
import { HydroscopeProductLineup } from "@/components/hydroscope-product-lineup";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hydroscope Products | HydroPure and HydroSense",
  description:
    "Explore the HydroPure electrochlorinator range - HP-100 to HP-2000 - and the HydroSense water quality sensor.",
  path: "/products"
});

export default function ProductsPage() {
  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Products" }]} />
        <SectionHeading
          eyebrow="Water technology products"
          title="HydroPure and HydroSense"
          text="On-site chlorine generation paired with real-time water-quality sensing - one range that treats the water and measures the result."
        />
        {/* Same four-across range row as the homepage product section, so the
            model line-up reads identically in both places. */}
        <HydroscopeProductLineup />
      </Container>
    </main>
  );
}
