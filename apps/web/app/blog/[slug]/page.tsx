import { notFound } from "next/navigation";
import { ArticleSchema, BreadcrumbSchema } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getBlogPost, getBlogPosts, getProducts, getSolutions } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return createMetadata({ title: post.seo.metaTitle, description: post.seo.metaDescription, path: `/blog/${post.slug}`, image: post.featuredImage });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const [products, solutions] = await Promise.all([getProducts(), getSolutions()]);

  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-hydro-blue">{post.readingTime}</p>
          <h1 className="mt-4 text-[clamp(38px,4.5vw,64px)] font-normal leading-[1.04] tracking-[-0.045em]">{post.title}</h1>
          <p className="mt-5 text-xl text-hydro-muted">{post.excerpt}</p>
          <div className="mt-10 grid gap-6 text-hydro-muted">
            <p>{post.body}</p>
            <h2 className="text-2xl font-normal text-hydro-ink">What teams should evaluate</h2>
            <p>Start with the monitoring objective, the parameters that matter, site conditions, connectivity, dashboard users, escalation rules and how data will support field response.</p>
            <h2 className="text-2xl font-normal text-hydro-ink">Related HYDROscope areas</h2>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {[products[0], solutions[0]].map((item) => (
              <Card key={item.slug} className="p-5">
                <h3 className="font-normal">{item.title}</h3>
                <Link href={`${"category" in item ? "/products" : "/solutions"}/${item.slug}`} className="mt-3 inline-block text-sm font-bold text-hydro-blue">
                  Learn more
                </Link>
              </Card>
            ))}
          </div>
        </article>
      </Container>
      <ArticleSchema title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} date={post.createdAt} />
      <BreadcrumbSchema items={[{ name: "Blog", item: "/blog" }, { name: post.title, item: `/blog/${post.slug}` }]} />
    </main>
  );
}
