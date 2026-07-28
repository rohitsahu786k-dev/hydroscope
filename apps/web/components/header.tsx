import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { getHeaderData } from "@/lib/cms/globals";
import { siteConfig } from "@/lib/site";

export async function Header() {
  const header = await getHeaderData();

  return (
    <header className="sticky top-0 z-50 border-b border-hydro-line/80 bg-white/95 backdrop-blur">
      <Container className="flex h-[92px] items-center gap-8 max-lg:h-[78px] max-sm:h-[70px]">
        <Link href="/" className="flex min-w-[270px] items-center gap-3 max-xl:min-w-[230px] max-lg:min-w-0" aria-label="HYDROscope home">
          <span className="grid h-[54px] w-[54px] place-items-center max-sm:h-11 max-sm:w-11">
            <Image src="/hydroscope-logo.png" alt="" width={54} height={54} className="h-full w-full object-contain" priority />
          </span>
          <span className="flex flex-col leading-none">
            <strong className="text-[27px] font-semibold tracking-[-0.04em] text-[#1c2a43] max-sm:text-[19px]">
              <b className="font-extrabold text-hydro-blue">HYDRO</b>scope
            </strong>
            <small className="mt-1 text-[10px] tracking-[.04em] text-[#788495] max-sm:hidden">{siteConfig.tagline}</small>
          </span>
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-8 max-xl:gap-5 max-lg:flex max-lg:flex-wrap max-lg:gap-3" aria-label="Primary navigation">
          {header.menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="py-8 text-[13px] font-semibold text-hydro-ink hover:text-hydro-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href={header.cta.href} className="max-xl:hidden">
          {header.cta.label}
        </Button>
      </Container>
    </header>
  );
}
