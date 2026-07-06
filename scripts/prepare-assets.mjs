/**
 * Asset pipeline: reads original brand assets from ./assets-src and writes
 * web-optimized versions to ./public/assets.
 *
 * Usage:  node scripts/prepare-assets.mjs
 *
 * To replace an asset later (e.g. a new screenshot), drop the new file into
 * assets-src/ with the same name and re-run this script.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "assets-src";
const OUT = "public/assets";

/** Phone screenshots: resize to 720px wide (2x the largest display size). */
const SCREENSHOTS = [
  ["screen-login.png", "screen-login.png"],
  ["screen-chat.png", "screen-chat.png"],
  ["screen-today.png", "screen-today.png"],
  ["screen-calendar.png", "screen-calendar.png"],
  ["screen-menu.png", "screen-menu.png"],
  ["screen-efficiency.png", "screen-efficiency.png"],
  ["screen-study-windows.png", "screen-study-windows.png"],
  ["screen-week.png", "screen-week.png"],
];

async function main() {
  await mkdir(OUT, { recursive: true });

  // Logo: keep at native size, just strip metadata.
  await sharp(path.join(SRC, "apex-logo.png"))
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, "apex-logo.png"));

  // Mountain mark: trim the white canvas, keep a crisp 512px square.
  await sharp(path.join(SRC, "apex-mark.png"))
    .resize(512, 512, { fit: "inside" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, "apex-mark.png"));

  // LOLA full body (white background) — trim margins, 640px wide.
  await sharp(path.join(SRC, "lola-full.png"))
    .trim({ threshold: 10 })
    .resize(640, null, { fit: "inside" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, "lola-full.png"));

  // LOLA head (transparent) — trim, 512px.
  await sharp(path.join(SRC, "lola-head.png"))
    .trim({ threshold: 10 })
    .resize(512, null, { fit: "inside" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, "lola-head.png"));

  // LOLA lockup (mascot + wordmark, transparent).
  await sharp(path.join(SRC, "lola-lockup.png"))
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, "lola-lockup.png"));

  // App screenshots.
  for (const [src, out] of SCREENSHOTS) {
    await sharp(path.join(SRC, src))
      .resize(720, null, { fit: "inside" })
      .png({ compressionLevel: 9, quality: 85 })
      .toFile(path.join(OUT, out));
  }

  // Favicon + Apple touch icon from the mountain mark.
  await sharp(path.join(SRC, "apex-mark.png"))
    .resize(512, 512, { fit: "inside" })
    .png()
    .toFile("src/app/icon.png");
  await sharp(path.join(SRC, "apex-mark.png"))
    .flatten({ background: "#faf8f2" })
    .resize(180, 180, { fit: "contain", background: "#faf8f2" })
    .png()
    .toFile("src/app/apple-icon.png");

  // Open Graph card (1200x630): cream background, logo + tagline + LOLA.
  const logo = await sharp(path.join(SRC, "apex-logo.png"))
    .resize(360, null, { fit: "inside" })
    .toBuffer();
  const lola = await sharp(path.join(SRC, "lola-head.png"))
    .trim({ threshold: 10 })
    .resize(300, null, { fit: "inside" })
    .toBuffer();
  const lolaMeta = await sharp(lola).metadata();

  const taglineSvg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <text x="90" y="330" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="700" fill="#101b15">The AI planner built for student life.</text>
      <text x="90" y="400" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#4c5a52">Upload your syllabus. Get a week that actually works.</text>
      <text x="90" y="540" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#2e7d57">Join the launch list — early access opening soon</text>
    </svg>
  `);

  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: "#faf8f2" },
  })
    .composite([
      { input: logo, left: 90, top: 120 },
      { input: taglineSvg, left: 0, top: 0 },
      { input: lola, left: 1200 - (lolaMeta.width ?? 300) - 80, top: 630 - (lolaMeta.height ?? 300) - 60 },
    ])
    .png()
    .toFile(path.join(OUT, "og.png"));

  console.log("Assets prepared → public/assets");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
