import { NextResponse } from "next/server";

/**
 * Forwards campus ambassador applications to Kit's dedicated AMBASSADOR FORM
 * (separate from the launch-list form, so it gets its own confirmation
 * email and subscriber list rather than sharing the launch list's).
 * Runs server-side so KIT_API_KEY never reaches the browser.
 */
export async function POST(request: Request) {
  const apiKey = process.env.KIT_API_KEY?.trim();
  const formId = process.env.KIT_AMBASSADOR_FORM_ID?.trim();

  if (!apiKey || !formId) {
    console.error("Ambassador signup attempted before KIT_API_KEY / KIT_AMBASSADOR_FORM_ID were configured.");
    return NextResponse.json({ error: "Not configured yet." }, { status: 500 });
  }

  const data = await request.formData();
  const email = data.get("email");
  const name = data.get("name");
  const school = data.get("school");
  const handle = data.get("handle");
  const why = data.get("why");

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
        social_handle: typeof handle === "string" ? handle : undefined,
        ambassador_why: typeof why === "string" ? why : undefined,
        lead_type: "Campus Ambassador",
      },
    }),
  });

  if (!kitRes.ok) {
    console.error("Kit subscribe (ambassador) failed", kitRes.status, await kitRes.text());
    return NextResponse.json({ error: "Application failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
