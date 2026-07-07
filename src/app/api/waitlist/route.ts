import { NextResponse } from "next/server";

/**
 * Forwards launch-list signups to Kit (app.kit.com). Runs server-side so
 * KIT_API_KEY never reaches the browser. Set KIT_API_KEY and KIT_FORM_ID
 * in .env.local for dev, and in Vercel Project Settings -> Environment
 * Variables for production.
 */
export async function POST(request: Request) {
  const apiKey = process.env.KIT_API_KEY?.trim();
  const formId = process.env.KIT_FORM_ID?.trim();

  if (!apiKey || !formId) {
    console.error("Waitlist signup attempted before KIT_API_KEY / KIT_FORM_ID were configured.");
    return NextResponse.json({ error: "Waitlist is not configured yet." }, { status: 500 });
  }

  const data = await request.formData();
  const email = data.get("email");
  const name = data.get("name");
  const school = data.get("school");
  const studentType = data.get("studentType");

  if (typeof email !== "string" || !email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const kitRes = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      email,
      first_name: typeof name === "string" ? name : undefined,
      fields: {
        school: typeof school === "string" ? school : undefined,
        student_type: typeof studentType === "string" ? studentType : undefined,
      },
    }),
  });

  if (!kitRes.ok) {
    console.error("Kit subscribe failed", kitRes.status, await kitRes.text());
    return NextResponse.json({ error: "Signup failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
