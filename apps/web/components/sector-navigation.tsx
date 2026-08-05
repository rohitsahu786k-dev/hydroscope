import { Building2, Factory, Landmark, Warehouse } from "lucide-react";
import { Container } from "./ui/container";
import { sectorNavigation } from "@/lib/solutions-content";

const icons = [Factory, Building2, Landmark, Warehouse];

/* The thin strip directly under the hero. Four sectors, split by hairlines.
   These are labels, not links: each used to jump into one solution page, which
   made a sector look like it belonged to a single product. The hover tint is
   kept so the strip still feels alive. */
export function SectorNavigation() {
  return (
    <section aria-label="Sectors we serve" className="border-y border-hydro-line bg-white">
      <Container>
        <ul className="grid grid-cols-4 max-sm:grid-cols-2">
          {sectorNavigation.map((sector, index) => {
            const Icon = icons[index] ?? Factory;
            return (
              <li
                key={sector.label}
                className="border-hydro-line [&:not(:first-child)]:border-l max-sm:[&:nth-child(3)]:border-t max-sm:[&:nth-child(4)]:border-t max-sm:[&:nth-child(3)]:border-l-0"
              >
                <span className="flex cursor-default items-center justify-center gap-3 px-4 py-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-hydro-ink transition hover:text-hydro-blue max-sm:text-[11px]">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px] shrink-0" strokeWidth={1.6} />
                  {sector.label}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
