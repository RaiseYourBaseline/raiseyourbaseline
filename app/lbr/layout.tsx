import type { Metadata } from "next";
import Image from "next/image";
import WaitlistPopup from "@/components/WaitlistPopup";
import type { WaitlistHubspot } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: { default: "The Little Black Rope", template: "%s — The Little Black Rope" },
  description: "Tie into yourself.",
  // Pre-launch: findable only through the product/QR code, not search engines.
  robots: { index: false, follow: false },
};

// Reuses the same HubSpot form already set up for the Little Black Rope waitlist.
const hubspot: WaitlistHubspot = {
  portalId: "343531732",
  formId: "ce88ea0f-2b42-40c6-9d23-68d2bf5bb940",
  ageProperty: "yoy_age_18_plus",
  consentProperty: "yoy_email_consent",
};

export default function LbrLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-lbr-black text-lbr-silver">
      {/* Same botanical photo as the main RYB site, recoloured toward chocolate/copper
          via CSS filter (no separate image asset) so the two sites share a visual
          language without looking like the same identity at a glance. Plain `fill`
          (no `fixed`/negative z-index) so it stretches across the full page height,
          matching the pattern already used on the main RYB pages. */}
      <Image
        src="/landing/raise-your-baseline-clean.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ filter: "sepia(1) saturate(2.4) hue-rotate(-28deg) brightness(0.95) contrast(1.1)" }}
      />
      <div className="absolute inset-0 bg-lbr-black/35" />

      <div className="relative z-10">
        {children}

        <footer className="border-t border-lbr-line px-6 py-10 text-center">
          <p className="font-serif italic text-sm text-lbr-silverMuted">
            The Little Black Rope &middot; Tie into yourself.
          </p>
        </footer>
      </div>

      <WaitlistPopup hubspot={hubspot} />
    </div>
  );
}
