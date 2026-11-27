import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { freeSomatic } from "@/lib/lbrLibrary";
import LbrKnotPlayer from "@/components/LbrKnotPlayer";

export function generateStaticParams() {
  return freeSomatic.map((practice) => ({ slug: practice.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const practice = freeSomatic.find((p) => p.slug === slug);
  return { title: practice ? practice.title : "Somatic practice" };
}

export default async function SomaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = freeSomatic.find((p) => p.slug === slug);
  if (!practice) notFound();

  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <Link
        href="/"
        className="text-[11px] uppercase tracking-[0.2em] text-lbr-silverMuted transition-colors hover:text-lbr-silver"
      >
        &larr; The Library
      </Link>

      <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-lbr-blush">
        Free Somatic Practice
      </p>

      <h1 className="mt-3 font-serif italic leading-[1.1] text-ryb-white text-[clamp(2rem,6vw,3rem)]">
        {practice.title}
      </h1>

      <p className="mt-5 text-[15px] leading-relaxed text-lbr-silver">{practice.summary}</p>

      <LbrKnotPlayer videoUrl={practice.videoUrl} musicUrl={practice.musicUrl} />

      <ol className="mt-10 space-y-5 border-t border-lbr-line pt-8">
        {practice.steps.map((step, i) => (
          <li key={i} className="flex gap-4 text-sm leading-relaxed text-lbr-silver">
            <span className="shrink-0 text-lbr-blush">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <p className="mt-10 border-t border-lbr-line pt-6 text-[13px] leading-relaxed text-lbr-silverMuted">
        More somatic practices, meditations and notes unlock with the QR code on your rope.
      </p>
    </div>
  );
}
