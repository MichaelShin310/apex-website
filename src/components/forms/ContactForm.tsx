"use client";

import { useState, type FormEvent } from "react";

const REASONS = [
  "General question",
  "Campus ambassadors",
  "Partnerships",
  "Press",
  "Feedback",
];

/**
 * Contact form. Posts directly to Web3Forms from the browser — their free
 * tier requires client-side calls (server-to-server calls need a paid
 * plan), and the access key is designed by Web3Forms to be public.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "");
      formData.append("replyto", String(formData.get("email") ?? ""));
      formData.append("subject", `APEX contact form: ${formData.get("reason")}`);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const body = await res.json();
      if (!res.ok || !body.success) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink placeholder:text-slate-soft/60 outline-none transition focus:border-leaf/50 shadow-sm";
  const labelClasses = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-soft";

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-leaf/30 bg-sprout p-6 text-center">
        <p className="font-display text-lg font-semibold text-ink">Message sent.</p>
        <p className="mt-1 text-sm text-slate-soft">
          Thanks for reaching out. We read everything and reply as fast as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="contact-name" className={labelClasses}>
          Name
        </label>
        <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClasses}>
          Email
        </label>
        <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClasses} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-reason" className={labelClasses}>
          Reason
        </label>
        <select id="contact-reason" name="reason" required defaultValue="" className={`${inputClasses} appearance-none`}>
          <option value="" disabled>
            Select a reason
          </option>
          {REASONS.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="What's on your mind?"
          className={`${inputClasses} resize-none`}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-ink px-6 py-3.5 text-base font-semibold text-cream transition hover:bg-pine disabled:opacity-70 sm:w-auto sm:px-10"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
        {status === "error" ? (
          <p role="alert" className="mt-3 text-xs font-medium text-red-500">
            Something went wrong. Please try again in a moment.
          </p>
        ) : null}
      </div>
    </form>
  );
}
