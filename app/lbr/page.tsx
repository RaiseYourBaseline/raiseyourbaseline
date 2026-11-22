import type { Metadata } from "next";
import { freeKnots, lockedCategories } from "@/lib/lbrLibrary";
import LbrLibraryGrid from "@/components/LbrLibraryGrid";

export const metadata: Metadata = {
  title: "The Little Black Rope — Library",
  description: "Free knot tutorials, plus the full library once you scan the QR code on your rope.",
};

export default function LbrLibraryHome() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-lbr-silverMuted">The Library</p>

      <h1 className="mt-4 font-serif italic leading-[1.1] tracking-[0.01em] text-ryb-white text-[clamp(2.25rem,7vw,3.5rem)]">
        The Little Black Rope
      </h1>

      <div className="mx-auto mt-7 h-px w-10 bg-lbr-line" />

      <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-lbr-silver">
        Free knot tutorials to start. The full library &mdash; wearable tutorials, meditations,
        somatic content, and notes &mdash; unlocks with the QR code on your rope.
      </p>

      <LbrLibraryGrid freeKnots={freeKnots} lockedCategories={lockedCategories} />

      <p className="mx-auto mt-16 max-w-sm text-xs leading-relaxed text-lbr-silverMuted">
        Part of every rope supports women&rsquo;s shelters. Details at launch.
      </p>
    </div>
  );
}
