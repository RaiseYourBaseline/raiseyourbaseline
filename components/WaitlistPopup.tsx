"use client";

import { useEffect, useState } from "react";
import WaitlistForm, { type WaitlistHubspot } from "./WaitlistForm";

const DISMISS_KEY = "lbr_waitlist_dismissed";
const DELAY_MS = 6000;
const SCROLL_FRACTION = 0.4;

export default function WaitlistPopup({ hubspot }: { hubspot: WaitlistHubspot }) {
  // Default to dismissed until the one-time localStorage check runs, so the
  // popup never flashes open before we know whether it's already been seen.
  const [dismissed, setDismissed] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setDismissed(window.localStorage.getItem(DISMISS_KEY) === "true");
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), DELAY_MS);

    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > SCROLL_FRACTION) {
        setVisible(true);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dismissed]);

  function close() {
    setVisible(false);
    setDismissed(true);
    window.localStorage.setItem(DISMISS_KEY, "true");
  }

  if (dismissed || !visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Join the waitlist"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-[10px] border border-lbr-line bg-lbr-black p-6 sm:p-7">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 text-lg text-lbr-silverMuted transition-colors hover:text-lbr-silver"
        >
          &times;
        </button>

        <p className="pr-8 font-serif italic text-lg leading-snug text-ryb-white">
          Be the first to hold the rope. Join the waitlist &#x1F5A4;
        </p>

        <div className="mt-6">
          <WaitlistForm hubspot={hubspot} buttonLabel="Notify me" successMessage="You're on the list. xoxo" />
        </div>
      </div>
    </div>
  );
}
