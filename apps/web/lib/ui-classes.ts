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
