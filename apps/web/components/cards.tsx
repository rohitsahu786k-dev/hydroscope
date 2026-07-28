import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Application, BlogPost, CaseStudy, Product, Solution } from "@hydroscope/types";
import { Card } from "./ui/card";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="hydro-card-hover flex h-full min-h-[520px] flex-col overflow-hidden">
      <div className="relative h-[240px] overflow-hidden">
        <Image
          src={product.featuredImage ?? "/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp"}
          alt={`${product.title} by HYDROscope`}
          width={1672}
          height={941}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-hydro-blue">{product.category}</p>
        <h2 className="text-xl font-extrabold text-hydro-blue">{product.title}</h2>
        <p className="mt-1 text-xs font-semibold text-[#445066]">{product.subtitle}</p>
        <p className="mt-4 text-sm text-hydro-muted">{product.excerpt}</p>
        <ul className="my-5 grid gap-2">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs">
              <CheckCircle2 aria-hidden="true" size={15} className="text-hydro-blue" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={`/products/${product.slug}`} className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-hydro-blue">
          View product <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </Card>
  );
}

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Card className="hydro-card-hover p-6">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-hydro-blue">Solution</p>
      <h2 className="text-xl font-extrabold">{solution.title}</h2>
      <p className="mt-3 text-sm text-hydro-muted">{solution.excerpt}</p>
      <Link href={`/solutions/${solution.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-hydro-blue">
        Explore solution <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </Card>
  );
}

export function ApplicationCard({ application }: { application: Application }) {
  return (
    <Card className="hydro-card-hover p-6">
      <h2 className="text-xl font-extrabold">{application.title}</h2>
      <p className="mt-3 text-sm text-hydro-muted">{application.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {application.sectors.map((sector) => (
          <span key={sector} className="rounded-full bg-[#e8f3ff] px-3 py-1 text-xs font-bold text-hydro-blue">
            {sector}
          </span>
        ))}
      </div>
    </Card>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="hydro-card-hover p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-hydro-blue">{post.readingTime}</p>
      <h2 className="mt-3 text-xl font-extrabold">{post.title}</h2>
      <p className="mt-3 text-sm text-hydro-muted">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-hydro-blue">
        Read insight <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </Card>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card className="hydro-card-hover p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-hydro-blue">{study.sector}</p>
      <h2 className="mt-3 text-xl font-extrabold">{study.title}</h2>
      <p className="mt-3 text-sm text-hydro-muted">{study.excerpt}</p>
      <Link href={`/case-studies/${study.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-hydro-blue">
        View framework <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </Card>
  );
}
