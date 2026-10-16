import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RYB YOY",
  description: "RYB YOY — the storytelling chapter of Raise Your Baseline.",
  robots: { index: false, follow: false },
};

const parts = [
  { number: 1, title: "Re-Awakening", href: "/yoy/re-awakening" },
  { number: 2, title: "I Should Get His Number", href: "/yoy/i-should-get-his-number" },
  { number: 3, title: "Meet Me Outside", href: "/yoy/meet-me-outside" },
];

export default function YoyPage() {
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
          RYB YOY
        </h1>

        <div className="mx-auto mt-8 mb-7 h-px w-10 bg-ryb-muted" />

        <p className="font-serif italic text-xl text-ryb-white sm:text-2xl">
          Every story needs someone who knows how to keep a secret.
        </p>

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ryb-muted sm:text-sm">
          A world is taking shape, after hours.
        </p>

        <nav className="mt-14 text-left">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ryb-muted">Contents</p>
          <div className="mt-3 h-px w-full bg-ryb-graphiteLight" />
          {parts.map((part) => (
            <Link
              key={part.number}
              href={part.href}
              className="group flex items-baseline gap-5 border-b border-ryb-graphiteLight py-5"
            >
              <span className="w-12 shrink-0 text-[11px] tracking-[0.2em] text-ryb-muted">Part {part.number}</span>
              <span className="font-serif text-lg text-ryb-white transition-colors group-hover:text-ryb-muted">
                {part.title}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-10">
          <Link
            href="/yoy/shop"
            className="inline-block border border-ryb-muted px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-ryb-white transition-colors hover:bg-ryb-white hover:text-ryb-black"
          >
            Shop the looks
          </Link>
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
