import { ProductCard } from "@/components/cards";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { getProducts } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products | HydroPure, HydroSense & HydroSure",
  description: "Explore HYDROscope products from the supplied documents: HydroPure electrochlorination, HydroSense sensing and HydroSure IoT monitoring.",
  path: "/products"
});

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Products" }]} />
        <SectionHeading eyebrow="Products" title="HydroPure, HydroSense and HydroSure" />
        <div className="grid grid-cols-2 gap-5 max-xl:grid-cols-1">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </main>
  );
}
