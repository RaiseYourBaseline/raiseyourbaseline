import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const APP_URL = "https://reminderswithlove.rupal-bell.workers.dev";

export const metadata: Metadata = {
  title: "Reminders With Love",
  description: "A gentleman who texts you good morning, remembers your dates, and cheers you on.",
  robots: { index: false, follow: false },
};

const perks = [
  "Good morning, at the time you choose",
  "Never forget a birthday or a big day",
  "Gentle nudges to drink water, move, rest",
];

export default function RemindersPage() {
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
        <p className="text-[11px] uppercase tracking-[0.3em] text-ryb-muted">RYB YOY</p>

        <h1 className="mt-4 font-serif leading-[1.08] tracking-[0.02em] text-ryb-white text-[clamp(2.25rem,7vw,3.5rem)]">
          Reminders With Love
        </h1>

        <div className="mx-auto mt-8 mb-7 h-px w-10 bg-ryb-muted" />

        <p className="font-serif italic text-xl text-ryb-white sm:text-2xl">
          A gentleman who texts you good morning, remembers your dates, and cheers you on.
        </p>

        <ul className="mt-10 border-t border-ryb-graphiteLight text-left">
          {perks.map((perk) => (
            <li key={perk} className="border-b border-ryb-graphiteLight py-4 text-sm text-ryb-white">
              {perk}
            </li>
          ))}
        </ul>

        <a
          href={APP_URL}
          className="mt-12 inline-block rounded-full bg-[#C8A951] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ryb-black transition-opacity hover:opacity-90"
        >
          Meet your gentleman
        </a>

        <p className="mt-4 text-xs text-ryb-muted">Pick your guy, set your times, and he&rsquo;ll text you. Reply STOP anytime.</p>

        <Link
          href="/yoy"
          className="mt-14 inline-block text-[11px] tracking-[0.2em] text-ryb-muted/70 transition-colors hover:text-ryb-white"
        >
          &larr; RYB YOY
        </Link>
      </div>
    </main>
  );
}
