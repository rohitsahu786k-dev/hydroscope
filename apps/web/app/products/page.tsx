import { ProductCard } from "@/components/cards";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
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
        <div className="mb-8 overflow-hidden rounded-hydro border border-hydro-line bg-white p-3 shadow-hydro">
          <Image
            src="/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp"
            alt="Hydroscope HydroPure HydroSense and HydroSure integrated rural water treatment and monitoring banner"
            width={1916}
            height={821}
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 max-xl:grid-cols-1">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </main>
  );
}
