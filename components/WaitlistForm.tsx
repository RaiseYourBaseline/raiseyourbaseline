"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

export type WaitlistHubspot = {
  portalId: string;
  formId: string;
  // Internal names of the two single-checkbox contact properties on the HubSpot form.
  ageProperty: string;
  consentProperty: string;
  // Optional: a HubSpot subscription type ID. When set, HubSpot also logs the
  // email consent (wording + time) against the contact's subscription.
  subscriptionTypeId?: number;
};

export const AGE_TEXT = "I'm 18 or older.";
export const CONSENT_TEXT =
  "Yes, YOY can email me about the launch and future offers. I can unsubscribe anytime.";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// A person can't read the page and fill the form faster than this.
const MIN_FILL_MS = 1500;

type Status = "idle" | "submitting" | "done" | "error";

export default function WaitlistForm({
  hubspot,
  successMessage,
  buttonLabel,
}: {
  hubspot: WaitlistHubspot;
  successMessage: string;
  buttonLabel: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdult, setIsAdult] = useState(false);
  const [consents, setConsents] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<{ email?: string; age?: string; consent?: string }>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const startedAt = useRef(0);
  const successRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "done") successRef.current?.focus();
  }, [status]);

  function validate() {
    const next: typeof errors = {};
    const trimmed = email.trim();
    if (!trimmed) next.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(trimmed)) next.email = "That email doesn't look quite right.";
    if (!isAdult) next.age = "Please confirm you're 18 or older.";
    if (!consents) next.consent = "Please tick this so we can email you about the launch.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    if (!validate()) return;

    // Spam traps: bots fill the hidden field or submit instantly. Show them the
    // normal success state and send nothing.
    if (honeypot || Date.now() - startedAt.current < MIN_FILL_MS) {
      setStatus("done");
      return;
    }

    setStatus("submitting");
    const fields = [
      { objectTypeId: "0-1", name: "email", value: email.trim().toLowerCase() },
      { objectTypeId: "0-1", name: hubspot.ageProperty, value: "true" },
      { objectTypeId: "0-1", name: hubspot.consentProperty, value: "true" },
    ];
    if (firstName.trim()) {
      fields.push({ objectTypeId: "0-1", name: "firstname", value: firstName.trim() });
    }

    const body: Record<string, unknown> = {
      submittedAt: Date.now(),
      fields,
      context: { pageUri: window.location.href, pageName: document.title },
    };
    if (hubspot.subscriptionTypeId) {
      body.legalConsentOptions = {
        consent: {
          consentToProcess: true,
          text: AGE_TEXT,
          communications: [
            { value: true, subscriptionTypeId: hubspot.subscriptionTypeId, text: CONSENT_TEXT },
          ],
        },
      };
    }

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${hubspot.portalId}/${hubspot.formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const invalidEmail = data?.errors?.some(
          (err: { errorType?: string }) => err.errorType === "INVALID_EMAIL"
        );
        if (invalidEmail) {
          setErrors({ email: "That email doesn't look quite right." });
          setStatus("idle");
          return;
        }
        throw new Error("Submission failed");
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setFormError("Something went wrong. Please try again in a moment.");
    }
  }

  if (status === "done") {
    return (
      <p
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="font-serif italic text-2xl text-lbr-blush outline-none sm:text-[1.75rem]"
      >
        {successMessage}
      </p>
    );
  }

  const inputClass =
    "w-full rounded-none border-0 border-b border-lbr-line bg-transparent px-0 py-3 text-base text-ryb-white placeholder:text-lbr-silverMuted focus:border-lbr-blush focus:outline-none focus:ring-0";
  const labelClass = "block text-[11px] uppercase tracking-[0.22em] text-lbr-silver";
  const errorClass = "mt-2 text-[13px] text-lbr-blush";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7 text-left">
      <div>
        <label htmlFor="lbr-first-name" className={labelClass}>
          First name <span className="normal-case tracking-normal text-lbr-silverMuted">(optional)</span>
        </label>
        <input
          id="lbr-first-name"
          name="firstname"
          type="text"
          autoComplete="given-name"
          autoCapitalize="words"
          maxLength={60}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="lbr-email" className={labelClass}>
          Email
        </label>
        <input
          id="lbr-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          required
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "lbr-email-error" : undefined}
          className={inputClass}
        />
        {errors.email && (
          <p id="lbr-email-error" className={errorClass}>
            {errors.email}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="lbr-website">Website</label>
        <input
          id="lbr-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="space-y-4 pt-1">
        <Checkbox
          id="lbr-age"
          checked={isAdult}
          onChange={setIsAdult}
          label={AGE_TEXT}
          error={errors.age}
        />
        <Checkbox
          id="lbr-consent"
          checked={consents}
          onChange={setConsents}
          label={CONSENT_TEXT}
          error={errors.consent}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-lbr-blush px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-lbr-black transition-colors hover:bg-ryb-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lbr-silver disabled:opacity-60"
      >
        {status === "submitting" ? "One moment…" : buttonLabel}
      </button>

      {formError && (
        <p role="alert" className="text-center text-[13px] text-lbr-blush">
          {formError}
        </p>
      )}
    </form>
  );
}

function Checkbox({
  id,
  checked,
  onChange,
  label,
  error,
}: {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3.5 py-1">
        <input
          id={id}
          type="checkbox"
          required
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-lbr-blush"
        />
        <span className="text-[14px] leading-relaxed text-lbr-silver">{label}</span>
      </label>
      {error && (
        <p id={`${id}-error`} className="ml-[34px] mt-1 text-[13px] text-lbr-blush">
          {error}
        </p>
      )}
    </div>
  );
}
