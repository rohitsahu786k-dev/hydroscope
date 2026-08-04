"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export type NavChild = { label: string; href: string; children?: NavChild[] };
export type NavEntry = { label: string; href: string; children?: NavChild[] };

/* The Solutions entry is a menu, not just a link, so it needs client state.
   Keeping the whole nav here means the header itself stays a server component
   and only this strip ships JavaScript. */
export function PrimaryNav({ items }: { items: NavEntry[] }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  /* A dropdown that stays open after navigating or after a click elsewhere
     reads as a stuck menu, so close on both. */
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu && !mobileOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu, mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div ref={navRef} className="flex flex-1 items-center justify-center max-lg:justify-end">
      {/* Mobile toggle. Below lg the whole nav collapses into a panel. */}
      <button
        type="button"
        onClick={() => setMobileOpen((open) => !open)}
        aria-expanded={mobileOpen}
        aria-label="Toggle navigation menu"
        className="hidden h-11 w-11 place-items-center rounded-xl border border-hydro-line text-hydro-ink max-lg:grid"
      >
        <span className="grid gap-[5px]">
          <span className="block h-[2px] w-5 bg-current" />
          <span className="block h-[2px] w-5 bg-current" />
          <span className="block h-[2px] w-5 bg-current" />
        </span>
      </button>

      <nav
        aria-label="Primary navigation"
        className={clsx(
          "flex items-center gap-1 rounded-full border border-hydro-line/80 bg-white/70 p-1 shadow-[0_18px_50px_rgba(30,70,120,0.08)]",
          "max-xl:gap-0",
          "max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-full max-lg:block max-lg:rounded-none max-lg:border-x-0 max-lg:bg-white max-lg:p-4 max-lg:shadow-lg",
          mobileOpen ? "" : "max-lg:hidden"
        )}
      >
        {items.map((item) =>
          item.children?.length ? (
            <div key={item.label} className="relative max-lg:static">
              <button
                type="button"
                onClick={() => setOpenMenu((current) => (current === item.label ? null : item.label))}
                aria-expanded={openMenu === item.label}
                className={clsx(
                  "flex w-full items-center gap-1 rounded-full px-4 py-3 text-[13px] font-semibold transition hover:bg-[#edf6ff] hover:text-hydro-blue max-xl:px-3 max-lg:justify-between max-lg:rounded-lg",
                  isActive(item.href) ? "text-hydro-blue" : "text-hydro-ink"
                )}
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  size={14}
                  className={clsx("transition", openMenu === item.label && "rotate-180")}
                />
              </button>

              {openMenu === item.label ? (
                <div className="absolute left-1/2 top-full z-50 mt-2 w-[260px] -translate-x-1/2 rounded-2xl border border-hydro-line bg-white p-2 shadow-[0_28px_70px_-30px_rgba(9,36,76,0.5)] max-lg:static max-lg:mt-1 max-lg:w-full max-lg:translate-x-0 max-lg:border-0 max-lg:shadow-none">
                  {item.children.map((child) => (
                    <div key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-[13px] font-semibold text-hydro-ink transition hover:bg-[#edf6ff] hover:text-hydro-blue"
                      >
                        {child.label}
                      </Link>
                      {child.children?.length ? (
                        <div className="mb-1 ml-3 border-l border-hydro-line pl-2">
                          {child.children.map((grandchild) => (
                            <Link
                              key={grandchild.href}
                              href={grandchild.href}
                              className="block rounded-lg px-3 py-2 text-[12.5px] font-semibold text-hydro-muted transition hover:bg-[#edf6ff] hover:text-hydro-blue"
                            >
                              {grandchild.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "block rounded-full px-4 py-3 text-[13px] font-semibold transition hover:bg-[#edf6ff] hover:text-hydro-blue max-xl:px-3 max-lg:rounded-lg",
                isActive(item.href) ? "text-hydro-blue" : "text-hydro-ink"
              )}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
