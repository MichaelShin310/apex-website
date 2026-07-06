"use client";

import { useState, type FormEvent } from "react";

/**
 * Campus ambassador interest form.
 *
 * TODO(backend): connect to your collection tool (Airtable base, Supabase
 * table, or a Google Form endpoint). Replace the setTimeout below.
 */
export default function AmbassadorForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    // TODO(backend): replace with a real POST request.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  const inputClasses =
    "w-full rounded-xl border border-cream/15 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none transition focus:border-antenna/60 focus:bg-cream/15";
  const labelClasses = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cream/60";

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-antenna/30 bg-cream/5 p-6 text-center text-cream"
      >
        <p className="font-display text-lg font-semibold">Application received. 🙌</p>
        <p className="mt-1 text-sm text-cream/70">
          We&apos;ll reach out as we start onboarding ambassadors for launch semester.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="amb-name" className={labelClasses}>
          Name
        </label>
        <input id="amb-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="amb-email" className={labelClasses}>
          Email
        </label>
        <input id="amb-email" name="email" type="email" required autoComplete="email" placeholder="you@school.edu" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="amb-school" className={labelClasses}>
          School
        </label>
        <input id="amb-school" name="school" type="text" required placeholder="Your campus" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="amb-handle" className={labelClasses}>
          Instagram / TikTok
        </label>
        <input id="amb-handle" name="handle" type="text" placeholder="@yourhandle" className={inputClasses} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="amb-why" className={labelClasses}>
          Why do you want to bring APEX to your campus?
        </label>
        <textarea
          id="amb-why"
          name="why"
          required
          rows={3}
          placeholder="Tell us a little about you and your campus."
          className={`${inputClasses} resize-none`}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-antenna px-6 py-3.5 text-base font-semibold text-ink shadow-md transition hover:brightness-95 disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Become a Campus Ambassador"}
        </button>
      </div>
    </form>
  );
}
