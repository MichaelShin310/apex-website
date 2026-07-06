"use client";

import { useState, type FormEvent } from "react";

const STUDENT_TYPES = [
  "College student",
  "High school student",
  "Grad student",
  "Student athlete",
  "Working student",
  "Parent / educator",
];

type LaunchFormProps = {
  /** Set when the form sits on the dark pine background. */
  dark?: boolean;
  /** Unique prefix so ids stay unique when the form appears twice on the page. */
  idPrefix: string;
};

/**
 * Main launch-list signup: name, email, school, student type.
 *
 * TODO(backend): connect this form to your email collection service.
 * Recommended options, roughly in order of effort:
 *  - Airtable form / Airtable API (fastest to set up)
 *  - Supabase: insert into a `waitlist` table via a Next.js route handler
 *  - ConvertKit / Beehiiv: POST to their subscribe API for email marketing
 * Replace the setTimeout in handleSubmit with your real request.
 */
export default function LaunchForm({ dark = false, idPrefix }: LaunchFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO(backend): replace with a real POST, e.g.
    // await fetch("/api/waitlist", { method: "POST", body: new FormData(event.currentTarget) });
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  const inputClasses = dark
    ? "w-full rounded-xl border border-cream/15 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none transition focus:border-antenna/60 focus:bg-cream/15"
    : "w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink placeholder:text-slate-soft/60 outline-none transition focus:border-leaf/50 shadow-sm";

  const labelClasses = `mb-1.5 block text-xs font-semibold uppercase tracking-wide ${
    dark ? "text-cream/60" : "text-slate-soft"
  }`;

  if (status === "success") {
    return (
      <div
        role="status"
        className={`rounded-2xl border p-6 text-center ${
          dark
            ? "border-antenna/30 bg-cream/5 text-cream"
            : "border-leaf/30 bg-sprout text-ink"
        }`}
      >
        <p className="font-display text-lg font-semibold">You&apos;re on the list. 🎉</p>
        <p className={`mt-1 text-sm ${dark ? "text-cream/70" : "text-slate-soft"}`}>
          We&apos;ll email you when early access opens. LOLA is already saving you a seat.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={`${idPrefix}-name`} className={labelClasses}>
          Name
        </label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jordan Rivera"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className={labelClasses}>
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@school.edu"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-school`} className={labelClasses}>
          School
        </label>
        <input
          id={`${idPrefix}-school`}
          name="school"
          type="text"
          required
          placeholder="Your school"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-type`} className={labelClasses}>
          I&apos;m a…
        </label>
        <select
          id={`${idPrefix}-type`}
          name="studentType"
          required
          defaultValue=""
          className={`${inputClasses} appearance-none`}
        >
          <option value="" disabled>
            Select one
          </option>
          {STUDENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-leaf px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-leaf-deep disabled:opacity-70"
        >
          {status === "submitting" ? "Joining…" : "Join the Launch List"}
        </button>
        <p
          className={`mt-3 text-center text-xs ${
            dark ? "text-cream/50" : "text-slate-soft/80"
          }`}
        >
          Free to join. No spam — just launch updates and early access.
        </p>
      </div>
    </form>
  );
}
