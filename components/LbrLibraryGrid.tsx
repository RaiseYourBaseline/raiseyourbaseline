"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Knot } from "@/lib/lbrLibrary";

const UNLOCK_KEY = "lbr_library_unlocked";

export default function LbrLibraryGrid({
  freeKnots,
  lockedCategories,
}: {
  freeKnots: Knot[];
  lockedCategories: { title: string; description: string }[];
}) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(window.localStorage.getItem(UNLOCK_KEY) === "true");
  }, []);

  return (
    <div className="mt-14 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
      {freeKnots.map((knot) => (
        <Link
          key={knot.slug}
          href={`/knots/${knot.slug}`}
          className="group rounded-[10px] border border-lbr-line bg-white/[0.02] p-5 transition-colors hover:border-lbr-blush"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-lbr-blush">Free</p>
          <p className="mt-2 font-serif text-lg text-ryb-white transition-colors group-hover:text-lbr-blush">
            {knot.title}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-lbr-silverMuted">{knot.summary}</p>
        </Link>
      ))}

      {lockedCategories.map((category) => (
        <div key={category.title} className="rounded-[10px] border border-lbr-line bg-white/[0.02] p-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-lbr-silverMuted">
            {unlocked ? "Unlocked" : "Locked"}
          </p>
          <p className="mt-2 font-serif text-lg text-ryb-white">{category.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-lbr-silverMuted">
            {unlocked ? "Content is on its way." : category.description}
          </p>
        </div>
      ))}
    </div>
  );
}
