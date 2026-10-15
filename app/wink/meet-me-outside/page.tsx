import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Me Outside",
  description: "Story 001 from XOXO Experiences, RYB XOX.",
  robots: { index: false, follow: false },
};

const passages = [
  "The short skirt was just grazing the bottom of my butt. It tickled. My ass hadn’t been touched in so long.",
  "I reached for my fuzzy boots, you know the ones. Perfect with a far-too-short skirt and a nice, pull-away button-down shirt.",
  "Flats, of course. You need to keep your footing.",
  "I put on my barely-there-but-perfect-shelf bra so my nipples stood at attention. The cold fall air would help.",
  "I decided to go for ponytails, two perfectly placed, cuffed just under the jawbone.",
  "Perfect control for him.",
  "And then I hit send on the SMS.",
  "“Meet me outside.”",
  "No panties, of course.",
];

export default function MeetMeOutsidePage() {
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

      <article className="relative z-10 mx-auto max-w-md">
        <header className="text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ryb-muted">
            RYB XOX &middot; Story 001
          </p>
          <h1 className="mt-4 font-serif leading-[1.08] tracking-[0.02em] text-ryb-white text-[clamp(2.25rem,7vw,3.5rem)]">
            Meet Me Outside
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ryb-muted/70">In development</p>
          <div className="mx-auto mt-8 h-px w-10 bg-ryb-muted" />
        </header>

        <div className="mt-12 space-y-7 font-serif text-xl leading-relaxed text-ryb-white sm:text-[1.375rem]">
          {passages.map((passage) => (
            <p key={passage}>{passage}</p>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/wink"
            className="text-[11px] tracking-[0.2em] text-ryb-muted/70 transition-colors hover:text-ryb-white"
          >
            &larr; RYB XOX
          </Link>
        </div>
      </article>
    </main>
  );
}
