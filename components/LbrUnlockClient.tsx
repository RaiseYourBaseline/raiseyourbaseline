"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// This is the single shared code encoded in the QR code printed on every rope.
// There's no backend/database in this project, so this is a flat-file "secret"
// rather than a per-purchase check — change it here if it ever needs to rotate.
const UNLOCK_CODE = "TIEINTOYOURSELF";
const UNLOCK_KEY = "lbr_library_unlocked";

export default function LbrUnlockClient({ code }: { code?: string }) {
  const [status, setStatus] = useState<"checking" | "ok" | "bad">("checking");

  useEffect(() => {
    if (code && code.trim().toLowerCase() === UNLOCK_CODE.toLowerCase()) {
      window.localStorage.setItem(UNLOCK_KEY, "true");
      setStatus("ok");
    } else {
      setStatus("bad");
    }
  }, [code]);

  if (status === "checking") {
    return <p className="text-sm text-lbr-silverMuted">One moment&hellip;</p>;
  }

  if (status === "ok") {
    return (
      <>
        <p className="font-serif italic text-2xl text-ryb-white">The library is yours.</p>
        <p className="mt-4 text-sm text-lbr-silver">Everything&rsquo;s unlocked on this device.</p>
        <Link
          href="/"
          className="copper-shine mt-8 inline-block rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-lbr-black transition-opacity hover:opacity-90"
        >
          Enter the library
        </Link>
      </>
    );
  }

  return (
    <>
      <p className="font-serif italic text-2xl text-ryb-white">That link doesn&rsquo;t look right.</p>
      <p className="mt-4 text-sm text-lbr-silver">Check the QR code on your rope and try again.</p>
      <Link
        href="/"
        className="mt-8 inline-block text-[11px] uppercase tracking-[0.2em] text-lbr-silverMuted transition-colors hover:text-lbr-silver"
      >
        &larr; Back to the library
      </Link>
    </>
  );
}
