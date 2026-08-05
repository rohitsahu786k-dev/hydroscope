/* The label that sits in the top-right corner of a sector photo card.
 *
 * It lives here because two separate places render it - the Industry adoption
 * carousel on the homepage and the Industries we serve grid on About - and when
 * the styling was duplicated the two drifted apart. Change it once, both
 * follow.
 *
 * White fill rather than a tinted one: over photographs that run from a bright
 * sunset to a dark mill interior, an opaque white chip is the only background
 * that keeps the blue label legible everywhere without per-image tuning. */
export const PHOTO_CARD_PILL =
  "rounded-full border border-white/70 bg-white/90 px-3.5 py-1.5 text-[12.5px] font-extrabold leading-none tracking-[-0.01em] text-hydro-blue shadow-[0_6px_18px_-8px_rgba(9,36,76,0.55)] backdrop-blur-sm";

/* Sector photography treatment, shared by the Industry adoption carousel and
   the Industries we serve grid.
 *
 * The source renders are bright and evenly lit, which reads as obviously
 * generated. Pulling brightness and saturation down slightly and darkening the
 * corners gives them the falloff a real lens produces, and it doubles as the
 * contrast the caption needs. */
export const PHOTO_CARD_IMAGE = "brightness-[0.94] saturate-[0.9]";

export const PHOTO_CARD_VIGNETTE =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(125%_105%_at_50%_42%,rgba(6,22,45,0)_38%,rgba(6,22,45,0.16)_66%,rgba(6,22,45,0.44)_100%)]";

/* Caption band along the foot of the card: a gradient only as tall as the text
   needs, so it never covers the subject of the photograph. */
export const PHOTO_CARD_CAPTION =
  "absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(6,22,45,0.9)_0%,rgba(6,22,45,0.62)_48%,rgba(6,22,45,0)_100%)] px-4 pb-4 pt-10";

export const PHOTO_CARD_CAPTION_TEXT =
  "text-[13px] font-extrabold leading-snug text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]";
