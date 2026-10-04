import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Raise Your Baseline",
  description: "Realign. It's all coming together.",
};

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ryb-black px-6 text-center">
      <Image
        src="/landing/raise-your-baseline-clean.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 max-w-2xl">
        <h1 className="font-serif leading-[1.08] tracking-[0.02em] text-ryb-white text-[clamp(2.75rem,9vw,5.5rem)]">
          RAISE
          <br />
          YOUR
          <br />
          BASELINE
        </h1>

        <div className="mx-auto mt-8 mb-7 h-px w-10 bg-ryb-muted" />

        <p className="font-serif italic text-2xl text-ryb-white sm:text-3xl">Realign.</p>

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ryb-muted sm:text-sm">
          It&rsquo;s all coming together.
        </p>
      </div>
    </main>
  );
}
