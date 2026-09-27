"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Recipe } from "@/lib/recipes";

export default function RecipeGrid({ recipes, categories }: { recipes: Recipe[]; categories: string[] }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? recipes : recipes.filter((r) => r.category === active);

  return (
    <>
      <div role="group" aria-label="Filter recipes by category" className="flex flex-wrap justify-center gap-2.5 mb-10">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`text-[11px] font-semibold tracking-[0.14em] uppercase px-4 py-2 rounded-full border transition-colors ${
              active === c
                ? "bg-nutrition-dark border-nutrition-dark text-nutrition-light"
                : "border-nutrition-gold/60 text-nutrition-body hover:bg-nutrition-gold/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((r) => (
          <Link
            key={r.slug}
            href={`/nutrition/${r.slug}`}
            className="group block bg-nutrition-card border border-nutrition-rule rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={r.image}
                alt={r.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="px-5 py-4">
              <p className="text-[10px] tracking-[0.16em] uppercase text-nutrition-gold mb-1.5">{r.category}</p>
              <p className="font-serif text-2xl leading-tight text-nutrition-text">{r.title}</p>
              <p className="text-xs text-nutrition-body mt-2">{r.details.join(" · ")}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
