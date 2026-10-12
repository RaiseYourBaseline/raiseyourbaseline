import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RYB — ;)",
  description: "A more secretive chapter of Raise Your Baseline.",
  robots: { index: false, follow: false },
};

const threads = [
  {
    numeral: "I",
    heading: "The Lady of Discretion",
    body: "Our narrator. She knows what's worth telling — and what isn't.",
  },
  {
    numeral: "II",
    heading: "XOXO Experiences",
    body: "The storytelling world taking shape inside RYB — ;), one chapter at a time.",
  },
  {
    numeral: "III",
    heading: "XOXO",
    body: "The story currently being written. Ours to tell, when it's ready.",
  },
];

export default function WinkPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ryb-black px-6 py-20 text-center">
      <Image
        src="/landing/raise-your-baseline-clean.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 max-w-md">
        <h1 className="font-serif leading-[1.08] tracking-[0.02em] text-ryb-white text-[clamp(2.25rem,7vw,3.5rem)]">
          RYB &mdash; ;)
        </h1>

        <div className="mx-auto mt-8 mb-7 h-px w-10 bg-ryb-muted" />

        <p className="font-serif italic text-xl text-ryb-white sm:text-2xl">
          Every story needs someone who knows how to keep a secret.
        </p>

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ryb-muted sm:text-sm">
          A world is taking shape, after hours.
        </p>

        <div className="mt-14 space-y-8 text-left">
          {threads.map((thread) => (
            <div key={thread.numeral}>
              <p className="text-[11px] tracking-[0.2em] text-ryb-muted">{thread.numeral}</p>
              <p className="mt-1 font-serif text-lg text-ryb-white">{thread.heading}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ryb-muted">{thread.body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-14 inline-block text-[11px] tracking-[0.2em] text-ryb-muted/70 transition-colors hover:text-ryb-white"
        >
          &larr; Raise Your Baseline
        </Link>
      </div>
    </main>
  );
}
