import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { instagramDm, yoyLooks } from "@/lib/yoyLooks";

export const metadata: Metadata = {
  title: "The Looks",
  description: "Shop the whole look from each RYB YOY story.",
  robots: { index: false, follow: false },
};

export default function YoyShopPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ryb-black px-6 py-20">
      <Image
        src="/landing/raise-your-baseline-clean.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-md">
        <header className="text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ryb-muted">RYB YOY</p>
          <h1 className="mt-4 font-serif leading-[1.08] tracking-[0.02em] text-ryb-white text-[clamp(2.25rem,7vw,3.5rem)]">
            The Looks
          </h1>
          <div className="mx-auto mt-8 mb-7 h-px w-10 bg-ryb-muted" />
          <p className="font-serif italic text-xl text-ryb-white sm:text-2xl">
            Not a piece. The whole scene.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ryb-muted sm:text-sm">
            Every look arrives together, in one box.
          </p>
        </header>

        {yoyLooks.map((look) => (
          <section key={look.slug} id={look.slug} className="mt-16 scroll-mt-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-ryb-muted">Part {look.part}</p>
            <h2 className="mt-2 font-serif text-3xl text-ryb-white">{look.story}</h2>
            <p className="mt-2 font-serif italic text-lg text-ryb-muted">{look.line}</p>
            <div className="mt-6 h-px w-full bg-ryb-graphiteLight" />

            <ul>
              {look.pieces.map((piece) => (
                <li key={piece.name} className="flex items-baseline justify-between gap-5 border-b border-ryb-graphiteLight py-5">
                  <div>
                    <p className="font-serif text-lg text-ryb-white">{piece.name}</p>
                    <p className="mt-1 text-sm text-ryb-muted">{piece.detail}</p>
                  </div>
                  {piece.href ? (
                    <a
                      href={piece.href}
                      className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-ryb-white transition-colors hover:text-ryb-muted"
                    >
                      Shop
                    </a>
                  ) : (
                    <span className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-ryb-muted">Coming soon</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-between gap-6 text-[11px] tracking-[0.2em]">
              <Link href={look.storyHref} className="text-ryb-muted transition-colors hover:text-ryb-white">
                Read the story
              </Link>
              <a href={instagramDm} className="text-ryb-white transition-colors hover:text-ryb-muted">
                Get it first &rarr;
              </a>
            </div>
          </section>
        ))}

        <div className="mt-16 text-center">
          <Link
            href="/yoy"
            className="text-[11px] tracking-[0.2em] text-ryb-muted/70 transition-colors hover:text-ryb-white"
          >
            &larr; RYB YOY
          </Link>
        </div>
      </div>
    </main>
  );
}
