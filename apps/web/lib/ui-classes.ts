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
 * generated. Pulling brightness and saturation down and darkening the corners
 * gives them the falloff a real lens produces, and it doubles as the contrast
 * the caption needs. The first pass at this was too gentle to register, so the
 * numbers are lower now. */
export const PHOTO_CARD_IMAGE = "brightness-[0.86] saturate-[0.82]";

export const PHOTO_CARD_VIGNETTE =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_38%,rgba(6,22,45,0)_30%,rgba(6,22,45,0.24)_62%,rgba(6,22,45,0.58)_100%)]";

/* Caption band along the foot of the card. It carries most of the weight now:
   a deeper, taller foot is what actually settles the bottom of a bright photo,
   where an even overlay would only flatten the whole thing. It still stops
   short of the middle, so the subject stays visible. */
export const PHOTO_CARD_CAPTION =
  "absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(4,17,36,0.95)_0%,rgba(4,17,36,0.82)_35%,rgba(4,17,36,0.45)_68%,rgba(4,17,36,0)_100%)] px-4 pb-4 pt-16";

export const PHOTO_CARD_CAPTION_TEXT =
  "text-[13px] font-extrabold leading-snug text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]";
