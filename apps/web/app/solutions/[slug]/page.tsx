import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbSchema, FaqSchema } from "@/components/json-ld";
import { FAQAccordion } from "@/components/faq-accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getProducts, getSolution, getSolutions } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const solutions = await getSolutions();
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = await getSolution(slug);
  if (!solution) return {};
  return createMetadata({ title: solution.seo.metaTitle, description: solution.seo.metaDescription, path: `/solutions/${solution.slug}`, image: solution.featuredImage });
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = await getSolution(slug);
  if (!solution) notFound();
  const products = await getProducts();

  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: solution.title }]} />
        <div className="grid grid-cols-[0.85fr_0.45fr] gap-8 max-lg:grid-cols-1">
          <article>
            <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">Solution</span>
            <h1 className="text-[clamp(38px,4.5vw,64px)] font-extrabold leading-[1.03] tracking-[-0.045em]">{solution.title}</h1>
            <p className="mt-5 max-w-3xl text-hydro-muted">{solution.body}</p>
            <section className="mt-8">
              <h2 className="text-2xl font-extrabold">Operational outcomes</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {solution.outcomes.map((outcome) => (
                  <Card key={outcome} className="flex gap-3 p-5">
                    <CheckCircle2 aria-hidden="true" className="text-hydro-blue" />
                    <strong>{outcome}</strong>
                  </Card>
                ))}
              </div>
            </section>
          </article>
          <aside className="grid content-start gap-5">
            <Card className="p-6">
              <h2 className="text-xl font-extrabold">Recommended products</h2>
              <div className="mt-4 grid gap-3 text-sm font-bold text-hydro-blue">
                {products.slice(0, 4).map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`}>
                    {product.title}
                  </Link>
                ))}
              </div>
            </Card>
            <Button href="/request-demo" className="w-full">
              Discuss this solution
            </Button>
          </aside>
        </div>
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-extrabold">FAQs</h2>
          <FAQAccordion faqs={solution.faqs} />
        </section>
      </Container>
      <FaqSchema faqs={solution.faqs} />
      <BreadcrumbSchema items={[{ name: "Solutions", item: "/solutions" }, { name: solution.title, item: `/solutions/${solution.slug}` }]} />
    </main>
  );
}
