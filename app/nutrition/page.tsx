import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RecipeGrid from "@/components/RecipeGrid";
import { recipeCategories, recipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Nutrition",
  description: "RYB Nutrition recipes. Start with what you have. Add only what you need.",
};

export default function NutritionPage() {
  const categories = recipeCategories.filter((c) => recipes.some((r) => r.category === c));

  return (
    <main className="min-h-screen bg-nutrition-bg text-nutrition-text font-sans">
      <nav className="px-6 sm:px-7 py-4 border-b border-nutrition-rule">
        <Breadcrumb current="Nutrition" accentClassName="text-nutrition-gold" />
      </nav>

      <section className="px-6 sm:px-7 pt-12 pb-10 text-center">
        <p className="text-xs tracking-[0.16em] uppercase text-nutrition-gold mb-4">RYB Nutrition</p>
        <p className="font-serif text-3xl sm:text-4xl leading-snug">Start with what you have.</p>
        <p className="font-serif italic text-3xl sm:text-4xl leading-snug text-nutrition-gold">
          Add only what you need.
        </p>
      </section>

      <section className="px-6 sm:px-7 pb-16 max-w-5xl mx-auto">
        <RecipeGrid recipes={recipes} categories={categories} />
      </section>
    </main>
  );
}
