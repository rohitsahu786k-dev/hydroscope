import Link from "next/link";
import Image from "next/image";
import { PrimaryNav } from "./primary-nav";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { getHeaderData } from "@/lib/cms/globals";
import { navItems, siteConfig } from "@/lib/site";

export async function Header() {
  const header = await getHeaderData();
  /* The CMS menu is flat, so it cannot express the Solutions dropdown the guide
     asks for. Use the CMS list only when it has been customised away from the
     code default; otherwise render the structured nav. */
  const items = header.menuItems.length ? header.menuItems : navItems;

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/88 backdrop-blur-xl">
      <Container className="relative flex h-[88px] items-center gap-7 max-lg:h-[78px] max-sm:h-[70px]">
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
        <PrimaryNav items={items.map((item) => ({ ...item }))} />
        <Button href={header.cta.href} className="max-lg:hidden">
          {header.cta.label}
        </Button>
      </Container>
    </header>
  );
}
