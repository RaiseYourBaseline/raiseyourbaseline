import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { freeKnots } from "@/lib/lbrLibrary";

export function generateStaticParams() {
  return freeKnots.map((knot) => ({ slug: knot.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const knot = freeKnots.find((k) => k.slug === slug);
  return { title: knot ? knot.title : "Knot tutorial" };
}

export default async function KnotPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const knot = freeKnots.find((k) => k.slug === slug);
  if (!knot) notFound();

  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <Link
        href="/"
        className="text-[11px] uppercase tracking-[0.2em] text-lbr-silverMuted transition-colors hover:text-lbr-silver"
      >
        &larr; The Library
      </Link>

      <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-lbr-blush">Free Tutorial</p>

      <h1 className="mt-3 font-serif italic leading-[1.1] text-ryb-white text-[clamp(2rem,6vw,3rem)]">
        {knot.title}
      </h1>

      <p className="mt-5 text-[15px] leading-relaxed text-lbr-silver">{knot.summary}</p>

      <ol className="mt-10 space-y-5 border-t border-lbr-line pt-8">
        {knot.steps.map((step, i) => (
          <li key={i} className="flex gap-4 text-sm leading-relaxed text-lbr-silver">
            <span className="shrink-0 text-lbr-blush">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
