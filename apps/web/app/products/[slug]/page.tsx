import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbSchema, FaqSchema, ProductSchema } from "@/components/json-ld";
import { FAQAccordion } from "@/components/faq-accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getProduct, getProducts, getSolutions } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return createMetadata({
    title: product.seo.metaTitle,
    description: product.seo.metaDescription,
    path: `/products/${product.slug}`,
    image: product.featuredImage
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  const solutions = await getSolutions();

  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: product.title }]} />
        <div className="grid grid-cols-[0.85fr_0.45fr] gap-8 max-lg:grid-cols-1">
          <article>
            <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">{product.category}</span>
            <h1 className="text-[clamp(38px,4.5vw,64px)] font-extrabold leading-[1.03] tracking-[-0.045em]">{product.title}</h1>
            <p className="mt-4 text-xl font-semibold text-hydro-blue">{product.subtitle}</p>
            <p className="mt-5 max-w-3xl text-hydro-muted">{product.body}</p>
            {product.featuredImage ? (
              <div className="mt-8 overflow-hidden rounded-hydro border border-hydro-line bg-white shadow-hydro">
                <Image src={product.featuredImage} alt={`${product.title} product visual`} width={1680} height={900} className="h-auto w-full" />
              </div>
            ) : null}
            {product.gallery?.length ? (
              <div className="mt-5 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                {product.gallery.map((image, index) => (
                  <div key={image} className="overflow-hidden rounded-hydro border border-hydro-line bg-white p-3 shadow-hydro">
                    <Image src={image} alt={`${product.title} supporting product image ${index + 1}`} width={1672} height={941} className="h-auto w-full rounded-lg" />
                  </div>
                ))}
              </div>
            ) : null}
            <div className="mt-8 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <FeatureList title="Key features" items={product.features} />
              <FeatureList title="Parameters supported" items={product.parameters} />
            </div>
            {product.slug === "hydropure-intelligent-electrochlorinator" ? (
              <>
                <HydroPureSourceDetails />
                <HydroPureCapacityTable />
              </>
            ) : null}
            <section className="mt-10">
              <h2 className="text-2xl font-extrabold">Applications</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.applications.map((item) => (
                  <span key={item} className="rounded-full bg-[#e8f3ff] px-3 py-1 text-sm font-bold text-hydro-blue">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </article>
          <aside className="grid content-start gap-5">
            <Card className="p-6">
              <h2 className="text-xl font-extrabold">Plan a deployment</h2>
              <p className="mt-3 text-sm text-hydro-muted">Discuss product fit, parameters, site conditions and dashboard needs with the HYDROscope team.</p>
              <Button href="/request-demo" className="mt-5 w-full">
                Request demo
              </Button>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-extrabold">Related solutions</h2>
              <div className="mt-4 grid gap-3 text-sm font-bold text-hydro-blue">
                {solutions.slice(0, 4).map((solution) => (
                  <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
                    {solution.title}
                  </Link>
                ))}
              </div>
            </Card>
          </aside>
        </div>
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-extrabold">FAQs</h2>
          <FAQAccordion faqs={product.faqs} />
        </section>
      </Container>
      <ProductSchema product={product} />
      <FaqSchema faqs={product.faqs} />
      <BreadcrumbSchema items={[{ name: "Products", item: "/products" }, { name: product.title, item: `/products/${product.slug}` }]} />
    </main>
  );
}

function HydroPureSourceDetails() {
  return (
    <section className="mt-8 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
      <Card className="p-6">
        <h2 className="text-lg font-extrabold">Scope of supply</h2>
        <ul className="mt-4 grid gap-2 text-sm text-hydro-muted">
          {["Electrolyser cell, chlorine reaction tank and chlorine storage tank", "Flowmeter, dosing pumps, level sensors and valves", "Softener unit with brine tank", "Microcontroller control panel and IoT module", "Web application for remote performance monitoring"].map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2 aria-hidden="true" size={16} className="mt-0.5 flex-none text-hydro-blue" />
              {item}
            </li>
          ))}
        </ul>
      </Card>
      <Card className="p-6">
        <h2 className="text-lg font-extrabold">Commissioning workflow</h2>
        <ul className="mt-4 grid gap-2 text-sm text-hydro-muted">
          {["Installation and commissioning of EC system", "Testing available chlorine after commissioning", "Operator or Gram Panchayat representative training", "Comprehensive maintenance planning for EC systems"].map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2 aria-hidden="true" size={16} className="mt-0.5 flex-none text-hydro-blue" />
              {item}
            </li>
          ))}
        </ul>
      </Card>
      <Card className="p-6">
        <h2 className="text-lg font-extrabold">Chlorination context</h2>
        <p className="mt-4 text-sm leading-6 text-hydro-muted">
          Source decks compare gas chlorine, bleaching powder, sodium hypochlorite cans and smart electrochlorination by strength, handling, safety and operating cost. Use exact cost models only after site-specific validation.
        </p>
      </Card>
    </section>
  );
}

function HydroPureCapacityTable() {
  const rows = [
    ["HSE 100", "100", "1,00,000"],
    ["HSE 200", "200", "2,00,000"],
    ["HSE 500", "500", "5,00,000"],
    ["HSE 1000", "1000", "10,00,000"],
    ["HSE 2000", "2000", "20,00,000"]
  ];

  return (
    <section className="mt-8">
      <Card className="overflow-hidden">
        <div className="border-b border-hydro-line bg-[#f4f9ff] p-5">
          <h2 className="text-xl font-extrabold">HydroPure model capacity range</h2>
          <p className="mt-2 text-sm text-hydro-muted">Catalog values below are based on 16 hours runtime. The system is described as capable of continuous 24 hour operation.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-[0.12em] text-hydro-blue">
              <tr>
                <th className="border-b border-hydro-line px-5 py-3">Model</th>
                <th className="border-b border-hydro-line px-5 py-3">Daily chlorine production (gms)</th>
                <th className="border-b border-hydro-line px-5 py-3">Water treated (liters/day)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([model, production, treated]) => (
                <tr key={model} className="odd:bg-[#fbfdff]">
                  <td className="border-b border-hydro-line px-5 py-3 font-bold text-hydro-ink">{model}</td>
                  <td className="border-b border-hydro-line px-5 py-3 text-hydro-muted">{production}</td>
                  <td className="border-b border-hydro-line px-5 py-3 text-hydro-muted">{treated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-extrabold">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-hydro-muted">
            <CheckCircle2 aria-hidden="true" size={17} className="mt-0.5 flex-none text-hydro-blue" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
