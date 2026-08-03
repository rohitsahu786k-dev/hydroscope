import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* Card in the profile-card layout: square media, gradient scrim, name overlaid
   on the media, and a footer row with a small chip and meta line.
 *
 * Adapted from the reference component in two ways that matter here:
 *  - the reference injected a global <style> block setting `font-family:
 *    system-ui` on html/body, which would override this site's Manrope
 *    everywhere. Its hover rules are Tailwind classes instead.
 *  - the reference wrapped itself in `w-full h-screen`, which only suits a
 *    standalone demo. This renders as a plain card so it can sit in a grid or
 *    a carousel. */

export type ProfileCardProps = {
  /** Shown over the media area. */
  name: string;
  /** Small label in the footer row, beside the chip. */
  handle: string;
  /** Secondary footer line. */
  meta?: string;
  /** Photo for the media area. Falls back to `Icon` when absent. */
  image?: string;
  /** Describes the photo. Required whenever `image` is set. */
  alt?: string;
  /** Lucide icon used when there is no photo. */
  Icon?: React.ElementType;
  className?: string;
};

export function ProfileCard({ name, handle, meta, image, alt = "", Icon, className }: ProfileCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-24px_rgba(9,36,76,0.45)]",
        "border border-[#dcebfa] transition-transform duration-700 ease-out hover:scale-[1.02]",
        "group",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-[linear-gradient(155deg,#1678e8_0%,#1258b6_52%,#09244c_100%)]">
        {image ? (
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading="lazy"
            /* Faces sit in the upper half of these shots, so a centre crop would
               cut heads off in the square frame. */
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : Icon ? (
          <span className="absolute inset-0 grid place-items-center">
            <Icon
              className="h-20 w-20 text-white/85 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              strokeWidth={1.1}
              aria-hidden="true"
            />
          </span>
        ) : null}

        {/* The name sits at the top, so the scrim that protects it has to be at
            the top too - a photo can be bright up there. The bottom scrim just
            grounds the card. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 via-black/25 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent"
          aria-hidden="true"
        />

        <div className="absolute left-6 right-6 top-6">
          <h3 className="text-2xl font-normal leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            {name}
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#eaf3fd] text-hydro-blue ring-2 ring-[#dcebfa]">
          {Icon ? <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" /> : null}
        </span>
        <div className="min-w-0 transition-transform duration-500 ease-out group-hover:translate-x-1">
          <p className="truncate text-sm text-hydro-ink">{handle}</p>
          {meta ? <p className="mt-0.5 text-xs leading-5 text-hydro-muted">{meta}</p> : null}
        </div>
      </div>
    </article>
  );
}

export default ProfileCard;
