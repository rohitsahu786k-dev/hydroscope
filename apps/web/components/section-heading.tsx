export function SectionHeading({ eyebrow, title, text, align = "center" }: { eyebrow?: string; title: string; text?: string; align?: "center" | "left" }) {
  const isLeft = align === "left";
  return (
    <div className={`mb-10 max-w-[780px] ${isLeft ? "" : "mx-auto text-center"}`}>
      {eyebrow ? <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">{eyebrow}</span> : null}
      <h2 className="m-0 text-[clamp(24px,2.4vw,34px)] font-normal leading-[1.12] tracking-[-0.03em] text-hydro-ink">{title}</h2>
      {text ? <p className={`mt-3 max-w-2xl text-hydro-muted ${isLeft ? "" : "mx-auto"}`}>{text}</p> : null}
    </div>
  );
}
