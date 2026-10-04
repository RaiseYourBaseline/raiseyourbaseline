import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Raise Your Baseline",
  description: "Realign. It's all coming together.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-ryb-black">
      <Image
        src="/landing/raise-your-baseline-hero.webp"
        alt="Raise Your Baseline — Realign. It's all coming together."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Real text for accessibility/SEO — the visual typography lives in the image above. */}
      <h1 className="sr-only">Raise Your Baseline</h1>
      <p className="sr-only">Realign. It&rsquo;s all coming together.</p>
    </main>
  );
}
