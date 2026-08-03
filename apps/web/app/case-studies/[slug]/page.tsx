import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbSchema } from "@/components/json-ld";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getCaseStudies, getCaseStudy } from "@/lib/cms/queries";
import { createMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) return {};
  return createMetadata({ title: study.seo.metaTitle, description: study.seo.metaDescription, path: `/case-studies/${study.slug}`, image: study.featuredImage });
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main className="hydro-section">
      <Container>
        <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: study.title }]} />
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-hydro-blue">{study.sector}</p>
          <h1 className="mt-4 text-[clamp(38px,4.5vw,64px)] font-normal leading-[1.04] tracking-[-0.045em]">{study.title}</h1>
          <p className="mt-5 text-xl text-hydro-muted">{study.excerpt}</p>
          <div className="mt-8 grid gap-5">
            <Card className="p-6"><h2 className="font-normal">Challenge</h2><p className="mt-2 text-hydro-muted">{study.challenge}</p></Card>
            <Card className="p-6"><h2 className="font-normal">Solution</h2><p className="mt-2 text-hydro-muted">{study.solution}</p></Card>
            <Card className="p-6"><h2 className="font-normal">Results note</h2><p className="mt-2 text-hydro-muted">{study.resultsNote}</p></Card>
          </div>
        </article>
      </Container>
      <BreadcrumbSchema items={[{ name: "Case Studies", item: "/case-studies" }, { name: study.title, item: `/case-studies/${study.slug}` }]} />
    </main>
  );
}
