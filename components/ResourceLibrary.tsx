"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

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
    portalId: string;
    formId: string;
    region: string;
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
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const formCreatedRef = useRef(false);
  const formTargetId = `hubspot-form-${storageKey}`;

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "true") setUnlocked(true);
    setChecked(true);
  }, [storageKey]);

  useEffect(() => {
    if (unlocked || !scriptLoaded || formCreatedRef.current) return;
    if (!window.hbspt) return;

    formCreatedRef.current = true;
    window.hbspt.forms.create({
      portalId: hubspot.portalId,
      formId: hubspot.formId,
      region: hubspot.region,
      target: `#${formTargetId}`,
      onFormSubmitted: () => {
        window.localStorage.setItem(storageKey, "true");
        setUnlocked(true);
      },
    });
  }, [unlocked, scriptLoaded, storageKey, hubspot.portalId, hubspot.formId, hubspot.region, formTargetId]);

  function unlockManually() {
    window.localStorage.setItem(storageKey, "true");
    setUnlocked(true);
  }

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
            <Script
              src="https://js-na3.hsforms.net/forms/embed/v2.js"
              strategy="afterInteractive"
              onLoad={() => setScriptLoaded(true)}
            />
            <div id={formTargetId} />
            <button
              type="button"
              onClick={unlockManually}
              className={`mt-4 text-[11px] underline opacity-60 ${theme.body}`}
            >
              Already submitted? Unlock now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
