import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/lib/recipes";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  return recipe ? { title: recipe.title, description: recipe.intro } : {};
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  return (
    <main className="min-h-screen bg-nutrition-bg text-nutrition-text font-sans">
      <nav className="px-6 sm:px-7 py-4 text-[13px] text-nutrition-gold">
        <Link href="/" className="hover:underline">
          Raise Your Baseline
        </Link>
        <span className="mx-1.5">&rsaquo;</span>
        <Link href="/nutrition" className="hover:underline">
          Nutrition
        </Link>
        <span className="mx-1.5">&rsaquo;</span>
        {recipe.title}
      </nav>

      <article className="max-w-4xl mx-auto sm:px-7 pb-16">
        <header className="bg-nutrition-dark text-nutrition-light sm:rounded-t-lg overflow-hidden grid sm:grid-cols-2">
          <div className="px-7 py-10 flex flex-col justify-center order-2 sm:order-1">
            <p className="text-[11px] tracking-[0.2em] uppercase text-nutrition-gold mb-4">{recipe.category}</p>
            <h1 className="font-serif text-4xl sm:text-5xl leading-[1.05] uppercase tracking-wide">{recipe.title}</h1>
            <div className="w-10 h-px bg-nutrition-gold my-6" />
            <p className="font-serif italic text-xl leading-snug">{recipe.intro}</p>
          </div>
          <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[22rem] order-1 sm:order-2">
            <Image src={recipe.image} alt={recipe.title} fill priority sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
        </header>

        <div className="bg-nutrition-card border-x border-nutrition-rule grid md:grid-cols-[2fr_3fr] md:divide-x divide-nutrition-rule">
          <section className="px-7 py-9">
            <h2 className="font-serif text-lg tracking-[0.25em] uppercase text-nutrition-gold mb-5">You&rsquo;ll Need</h2>
            <ul className="divide-y divide-nutrition-rule">
              {recipe.ingredients.map((ing) => (
                <li key={ing.name} className="py-3">
                  <p className="font-serif text-xl leading-tight">{ing.name}</p>
                  {ing.amount && <p className="font-serif italic text-nutrition-body">{ing.amount}</p>}
                  {ing.note && <p className="font-serif italic text-nutrition-body">{ing.note}</p>}
                </li>
              ))}
            </ul>
          </section>

          <section className="px-7 py-9 border-t md:border-t-0 border-nutrition-rule">
            <h2 className="font-serif text-lg tracking-[0.25em] uppercase text-nutrition-gold mb-5">Make It</h2>
            <ol className="divide-y divide-nutrition-rule">
              {recipe.steps.map((step, i) => (
                <li key={step.title} className="py-3.5 flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-nutrition-gold text-nutrition-light font-sans text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-serif text-lg tracking-[0.15em] uppercase text-nutrition-gold">{step.title}</p>
                    <p className="text-sm leading-relaxed text-nutrition-text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {recipe.tip && (
          <aside className="bg-nutrition-dark text-nutrition-light sm:rounded-b-lg px-7 py-8 sm:flex sm:items-center sm:gap-8">
            <p className="font-serif text-lg tracking-[0.25em] uppercase text-nutrition-gold shrink-0 mb-3 sm:mb-0">RYB Tip</p>
            <div className="sm:border-l sm:border-nutrition-gold/40 sm:pl-8">
              <p className="font-serif italic text-lg leading-snug">{recipe.tip.text}</p>
              {recipe.tip.closing && (
                <p className="font-serif text-xl leading-snug text-nutrition-gold mt-3">{recipe.tip.closing}</p>
              )}
            </div>
          </aside>
        )}

        {recipe.card && (
          <p className="text-center mt-8 px-6">
            <a
              href={recipe.card}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-nutrition-gold/60 text-nutrition-body text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 rounded-full hover:bg-nutrition-gold/10 transition-colors"
            >
              View the printable recipe card
            </a>
          </p>
        )}
      </article>
    </main>
  );
}
