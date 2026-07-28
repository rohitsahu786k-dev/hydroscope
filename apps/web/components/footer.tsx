import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/container";
import { products, solutions } from "@/lib/content";
import { getFooterData } from "@/lib/cms/globals";
import { siteConfig } from "@/lib/site";

export async function Footer() {
  const footer = await getFooterData();
  const columns = footer.columns.length
    ? footer.columns
    : [
        { heading: "Solutions", links: solutions.slice(0, 5).map((solution) => ({ label: solution.title, href: `/solutions/${solution.slug}` })) },
        { heading: "Products", links: products.slice(0, 5).map((product) => ({ label: product.title, href: `/products/${product.slug}` })) }
      ];

  return (
    <footer className="bg-hydro-navy py-12 text-white">
      <Container>
        <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center">
                <Image src="/hydroscope-logo.png" alt="" width={48} height={48} className="h-full w-full object-contain" />
              </span>
              <span>
                <strong className="block text-2xl font-semibold">
                  <b className="font-extrabold text-hydro-cyan">HYDRO</b>scope
                </strong>
                <small className="text-xs text-[#aabbd0]">{siteConfig.tagline}</small>
              </span>
            </Link>
            <p className="max-w-sm text-sm text-[#aabbd0]">{footer.description}</p>
          </div>
          {columns.slice(0, 2).map((column) => (
            <div key={column.heading}>
              <h2 className="mb-4 text-sm font-bold">{column.heading}</h2>
              <div className="grid gap-2 text-xs text-[#aabbd0]">
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href}>{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h2 className="mb-4 text-sm font-bold">Contact</h2>
            <div className="grid gap-2 text-xs text-[#aabbd0]">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
              <p>{siteConfig.location}</p>
            </div>
          </div>
        </div>
        <div className="mt-9 flex justify-between border-t border-[#1b3151] pt-4 text-[11px] text-[#8194ad] max-sm:flex-col max-sm:gap-2">
          <span>© 2026 HYDROscope. All rights reserved.</span>
          <span>{footer.bottomText}</span>
        </div>
      </Container>
    </footer>
  );
}
