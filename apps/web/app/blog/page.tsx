import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { getBlogPosts } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog / Insights | HYDROscope Water Quality Monitoring Guides",
  description: "Read HYDROscope insights on real-time water quality monitoring, IoT, AI analytics, electro chlorination and cloud dashboards.",
  path: "/blog"
});

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Blog / Insights" }]} />
        <SectionHeading eyebrow="Insights" title="Practical guides for smart water infrastructure teams" />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </main>
  );
}
