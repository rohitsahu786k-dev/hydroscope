import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Application, BlogPost, CaseStudy, Product, Solution } from "@hydroscope/types";
import { Card } from "./ui/card";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="hydro-card-hover group relative flex h-full min-h-[560px] flex-col overflow-hidden border-[#cfe0f2] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] shadow-[0_26px_70px_rgba(18,55,99,0.1)]">
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={product.featuredImage ?? "/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp"}
          alt={`${product.title} by HYDROscope`}
          width={1672}
          height={941}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,14,31,0)_45%,rgba(3,14,31,0.72)_100%)]" />
        <span className="absolute left-5 top-5 border border-white/30 bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-hydro-blue shadow-[0_14px_34px_rgba(0,0,0,0.12)]">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h2 className="whitespace-nowrap text-[clamp(20px,1.6vw,26px)] font-extrabold tracking-[-0.03em] text-hydro-ink max-sm:whitespace-normal">{product.title}</h2>
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
        <Link href={`/products/${product.slug}`} className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 border border-hydro-blue bg-hydro-blue px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-hydro-blue2">
          View product <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </Card>
  );
}

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Card className="group relative min-h-[430px] overflow-hidden border-[#d7e5f4] bg-white shadow-[0_18px_42px_rgba(35,69,111,0.08)] transition hover:-translate-y-1 hover:border-[#b7d7f6] hover:shadow-hydroHover">
      <Link href={`/solutions/${solution.slug}`} className="absolute inset-0">
        <Image
          src={solution.featuredImage ?? "/images/seo/hydroscope-all-products-rural-water-treatment-banner.webp"}
          alt={`${solution.title} solution by HYDROscope`}
          width={1672}
          height={941}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-[72%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.72)_34%,rgba(255,255,255,0.96)_66%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="mb-3 inline-flex bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-hydro-blue shadow-[0_10px_24px_rgba(255,255,255,0.75)]">
            Solution
          </p>
          <h2 className="text-[24px] font-extrabold leading-tight tracking-[-0.04em] text-hydro-ink">{solution.title}</h2>
          <p className="mt-3 text-sm leading-6 text-hydro-muted">{solution.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-hydro-blue">
            Explore solution <ArrowRight aria-hidden="true" size={16} />
          </span>
        </div>
      </Link>
    </Card>
  );
}

export function ApplicationCard({ application }: { application: Application }) {
  return (
    <Card className="hydro-card-hover min-h-[220px] p-7">
      <h2 className="text-[22px] font-extrabold leading-tight tracking-[-0.03em]">{application.title}</h2>
      <p className="mt-4 text-sm leading-6 text-hydro-muted">{application.excerpt}</p>
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
    <Card className="hydro-card-hover min-h-[250px] p-7">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-hydro-blue">{post.readingTime}</p>
      <h2 className="mt-4 text-[22px] font-extrabold leading-tight tracking-[-0.03em]">{post.title}</h2>
      <p className="mt-4 text-sm leading-6 text-hydro-muted">{post.excerpt}</p>
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
