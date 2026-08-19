"use client";

import { useEffect, useState, type FormEvent } from "react";

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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "true") setUnlocked(true);
    setChecked(true);
  }, [storageKey]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${hubspot.portalId}/${hubspot.formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [{ name: "email", value: email }],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );
      if (!res.ok) throw new Error("Submission failed");
      window.localStorage.setItem(storageKey, "true");
      setUnlocked(true);
    } catch {
      setStatus("error");
    }
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
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className={`flex-1 min-w-0 border rounded px-3 py-2 text-sm ${theme.cardBorder} ${theme.text}`}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded border whitespace-nowrap disabled:opacity-50 ${theme.accent} ${theme.cardBorder}`}
              >
                {status === "submitting" ? "..." : "Unlock"}
              </button>
            </form>
            {status === "error" && (
              <p className="text-xs text-red-600 mt-2">Something went wrong — try again.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
