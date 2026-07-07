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

/**
 * LOLA pose art (from assets-src/processed, produced by scripts/remove_bg.py
 * which strips the baked-in checkerboard background from AI-generated art).
 */
const LOLA_POSES = [
  "lola-wave.png",
  "lola-reading.png",
  "lola-pointing.png",
  "lola-celebrating.png",
  "lola-thinking.png",
  "lola-chillin.png",
  "lola-flag.png",
  "lola-head-solid.png",
];

/** Decorative doodle icons (also from assets-src/processed). */
const DOODLE_ICONS = [
  "icon-calendar.png",
  "icon-check.png",
  "icon-flame.png",
  "icon-book.png",
  "icon-dumbbell.png",
  "icon-pizza.png",
  "icon-alarm.png",
  "icon-notebook.png",
  "icon-coffee.png",
  "icon-chat.png",
  "icon-star.png",
  "icon-bolt.png",
];

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

  // LOLA poses: cap at 560px on the long edge (2x display size).
  for (const name of LOLA_POSES) {
    await sharp(path.join(SRC, "processed", name))
      .resize(560, 560, { fit: "inside" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUT, name));
  }

  // Doodle icons: small decorative use only.
  for (const name of DOODLE_ICONS) {
    await sharp(path.join(SRC, "processed", name))
      .resize(160, 160, { fit: "inside" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUT, name));
  }

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

  // Open Graph card (1200x630): the wide LOLA + phone illustration with the
  // APEX wordmark composited top-left (the art itself carries no branding).
  const logo = await sharp(path.join(SRC, "apex-logo.png")).toBuffer();

  await sharp(path.join(SRC, "LOLA - wide hero.png"))
    .resize(1200, 630, { fit: "cover" })
    .composite([{ input: logo, left: 930, top: 44 }])
    .png()
    .toFile(path.join(OUT, "og.png"));

  console.log("Assets prepared → public/assets");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
