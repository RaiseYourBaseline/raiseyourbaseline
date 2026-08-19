"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export type Resource = {
  title: string;
  description: string;
  thumbnail?: string;
  pdf: string;
};

export default function ResourceLibrary({
  storageKey,
  pitchLine,
  resources,
  hubspot,
  theme,
}: {
  storageKey: string;
  pitchLine: string;
  resources: Resource[];
  hubspot: {
    scriptSrc: string;
    region: string;
    formId: string;
    portalId: string;
  };
  theme: {
    text: string;
    accent: string;
    cardBorder: string;
    body: string;
  };
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "true") setUnlocked(true);
    setChecked(true);
  }, [storageKey]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const data = event.data;
      if (
        data &&
        data.type === "hsFormCallback" &&
        data.eventName === "onFormSubmitted"
      ) {
        window.localStorage.setItem(storageKey, "true");
        setUnlocked(true);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [storageKey]);

  if (!checked) {
    return null;
  }

  return (
    <div className="relative">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
          unlocked ? "" : "blur-sm pointer-events-none select-none"
        }`}
        aria-hidden={!unlocked}
      >
        {resources.map((r) => (
          <div key={r.title} className={`rounded-[10px] border bg-white p-5 ${theme.cardBorder}`}>
            {r.thumbnail && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={r.thumbnail} alt="" className="w-full h-32 object-cover rounded mb-3" />
            )}
            <div className={`font-bold text-sm mb-2 ${theme.text}`}>{r.title}</div>
            <p className={`text-[12.5px] leading-relaxed mb-4 ${theme.body}`}>{r.description}</p>
            {unlocked ? (
              <a
                href={r.pdf}
                download
                className={`text-xs font-semibold uppercase tracking-wide border-b pb-0.5 ${theme.accent} ${theme.cardBorder}`}
              >
                Download
              </a>
            ) : (
              <span className={`text-xs font-semibold uppercase tracking-wide opacity-50 ${theme.body}`}>
                Download
              </span>
            )}
          </div>
        ))}
      </div>

      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className={`max-w-sm w-full rounded-[10px] border bg-white p-6 text-center ${theme.cardBorder}`}>
            <p className={`text-sm mb-4 ${theme.text}`}>{pitchLine}</p>
            <Script src={hubspot.scriptSrc} strategy="afterInteractive" />
            <div
              className="hs-form-frame"
              data-region={hubspot.region}
              data-form-id={hubspot.formId}
              data-portal-id={hubspot.portalId}
            />
          </div>
        </div>
      )}
    </div>
  );
}
