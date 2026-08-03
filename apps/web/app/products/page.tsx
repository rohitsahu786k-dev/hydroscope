import { ProductCard } from "@/components/cards";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HydroscopeProductLineup } from "@/components/hydroscope-product-lineup";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { getProducts } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hydroscope Products | HydroPure, HydroSense and HydroSure",
  description: "Explore Hydroscope products for electrochlorination, sensing and IoT water monitoring.",
  path: "/products"
});

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Products" }]} />
        <SectionHeading
          eyebrow="Water technology products"
          title="HydroPure, HydroSense and HydroSure"
          text="Hydroscope offers an integrated product ecosystem for water disinfection, sensing and monitoring. The system is designed to reduce dependency on manual dosing and delayed checks."
        />
        <div className="mb-10 overflow-hidden rounded-hydro border border-hydro-line bg-white p-3 shadow-hydro">
          <Image
            src="/images/hydroscope-products/hydroscope-product-lineup-cinematic.png"
            alt="Cinematic Hydroscope product lineup with HydroPure electrochlorinator models and HydroSense sensor"
            width={1792}
            height={768}
            className="h-auto w-full rounded-lg"
            priority
          />
        </div>

        {/* Same four-across range row as the homepage product section, so the
            model line-up reads identically in both places. */}
        <HydroscopeProductLineup />

        {/* Kept below the range: these are the three ecosystem entries that own
            the product detail pages, so removing them would orphan those routes. */}
        <div className="mt-14">
          <SectionHeading
            eyebrow="Explore in detail"
            title="Specifications, applications and model range"
            align="left"
          />
          <div className="grid grid-cols-2 gap-5 max-xl:grid-cols-1">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
