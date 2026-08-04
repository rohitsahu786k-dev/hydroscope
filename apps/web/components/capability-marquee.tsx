import { capabilityMarquee } from "@/lib/solutions-content";

/* A pure-CSS marquee: the list is rendered twice inside one track, and the
   track slides by exactly half its width, so the loop has no seam and no
   JavaScript runs. The duplicate copy is hidden from assistive tech. */
export function CapabilityMarquee({ items = capabilityMarquee }: { items?: string[] }) {
  return (
    <section aria-label="What HYDROscope builds" className="overflow-hidden bg-hydro-navy py-4">
      <div className="hydro-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center whitespace-nowrap text-[12px] font-extrabold uppercase tracking-[0.22em] text-white"
              >
                <span className="px-8">{item}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#7fb4ff]" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
