import type { Metadata, Viewport } from "next";
import WaitlistForm, { type WaitlistHubspot } from "@/components/WaitlistForm";

const description =
  "The honest talk, woman to woman. Be the first to know when the Little Black Rope & the YOY Box launch.";

export const metadata: Metadata = {
  title: "The Little Black Rope",
  description,
  // Kept out of search like the rest of YOY; people arrive from the bio link.
  robots: { index: false, follow: false },
  openGraph: {
    title: "The Little Black Rope",
    description,
    url: "https://www.raiseyourbaseline.ca/little-black-rope",
    siteName: "Raise Your Baseline",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

// HubSpot form that stores the waitlist signups.
// TODO: set formId once the "Little Black Rope waitlist" form exists in HubSpot.
const hubspot: WaitlistHubspot = {
  portalId: "343531732",
  formId: "REPLACE_WITH_HUBSPOT_FORM_ID",
  ageProperty: "yoy_age_18_plus",
  consentProperty: "yoy_email_consent",
};

// CASL: the consent request must say who is asking, with a mailing address
// and one other way to reach you.
// TODO: replace with the business mailing address (a PO box is fine).
const sender = {
  name: "YOY by Raise Your Baseline",
  mailingAddress: "MAILING ADDRESS",
  contact: "raiseyourbaseline.ca",
};

export default function LittleBlackRopePage() {
  return (
    <main className="relative flex min-h-[100svh] justify-center overflow-hidden bg-lbr-black px-6 pb-14 pt-16 text-center text-ryb-white sm:items-center sm:py-20">
      {/* A faint blush glow so the black reads soft, not flat. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,rgba(235,198,198,0.10),transparent_65%)]"
      />

      <div className="relative z-10 w-full max-w-md">
        <p className="text-[11px] uppercase tracking-[0.34em] text-lbr-silver">YOY</p>

        <h1 className="mt-8 text-balance font-serif leading-[1.12] tracking-[0.01em] text-[clamp(2.1rem,9vw,3.25rem)]">
          <span className="block text-ryb-white">Every woman has a little black dress.</span>
          <span className="mt-3 block italic text-lbr-blush">Time to get the little black rope.</span>
        </h1>

        <div className="mx-auto mt-9 h-px w-10 bg-lbr-silverMuted" />

        <p className="mx-auto mt-8 max-w-sm text-[15px] leading-relaxed text-lbr-silver">
          The honest talk, woman to woman. Be the first to know when the Little Black Rope &amp; the
          YOY Box launch.
        </p>

        <div className="mt-12">
          <WaitlistForm hubspot={hubspot} buttonLabel="Notify me" successMessage="You're on the list. xoxo" />
        </div>

        <p className="mx-auto mt-14 max-w-sm text-[11px] leading-relaxed text-lbr-silverMuted">
          {sender.name} &middot; {sender.mailingAddress} &middot; {sender.contact}
          <br />
          You can unsubscribe at any time using the link in any email.
        </p>
      </div>
    </main>
  );
}
