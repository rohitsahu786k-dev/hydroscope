/* Section heading block, used across every page.
 *
 * The two lines swapped roles: a section's own name (`eyebrow` - "Why Choose
 * Us", "What we build") is now the large navy heading, and the descriptive line
 * (`title`) sits under it as the small blue kicker. `eyebrow` therefore carries
 * the h2, since it is the line that names the section.
 *
 * Call sites that pass only a `title` still get a proper heading: with no
 * eyebrow the title keeps the large treatment, rather than shrinking to a
 * kicker with nothing above it. */
export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  const isLeft = align === "left";
  const headingClass =
    "m-0 text-[clamp(25px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.035em] text-hydro-navy";
  const kickerClass = "text-[11px] font-extrabold uppercase tracking-[0.2em] text-hydro-blue2";

  return (
    <div className={`mb-9 max-w-[820px] max-sm:mb-7 ${isLeft ? "" : "mx-auto text-center"}`}>
      {eyebrow ? (
        <>
          <h2 className={headingClass}>{eyebrow}</h2>
          <p className={`mt-3 ${kickerClass}`}>{title}</p>
        </>
      ) : (
        <h2 className={headingClass}>{title}</h2>
      )}
      {text ? (
        <p
          className={`mt-4 max-w-2xl text-[15px] leading-7 text-hydro-muted max-sm:text-[14px] ${
            isLeft ? "" : "mx-auto"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
