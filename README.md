# APEX Launch Website

Marketing site for **APEX** — the AI-powered student life optimization app — and its mascot **LOLA** (Life Optimization Learning Assistant).

Built with **Next.js (App Router) + Tailwind CSS v4**. Fully static, fully responsive, no backend required to run.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
src/
  app/
    layout.tsx          # Fonts, SEO metadata, Open Graph / Twitter cards
    page.tsx            # Assembles all sections + FAQ JSON-LD schema
    globals.css         # Design tokens (colors, fonts) + animations
    privacy/page.tsx    # Privacy policy (apexstudent.app/privacy)
    icon.png            # Favicon (generated from the APEX mark)
  components/
    Navbar.tsx          # Sticky nav with mobile menu
    Reveal.tsx          # Scroll-reveal animation wrapper
    PhoneFrame.tsx      # Phone mockup shell for app screenshots
    SectionHeading.tsx  # Shared eyebrow/title/description block
    forms/
      AmbassadorForm.tsx
      ContactForm.tsx
    sections/           # One file per page section, top to bottom:
      Hero, Problem, Solution, HowItWorks, Features, Lola,
      AppPreview, WhoItsFor, Benefits, Community, Faq, About,
      Ambassador, Contact, FinalCta, Footer
  data/
    faq.ts              # FAQ copy (shared by the accordion + SEO schema)
assets-src/             # Original uploaded brand assets (source of truth)
scripts/
  prepare-assets.mjs    # Optimizes assets-src/ → public/assets/
public/assets/          # Web-optimized images (committed, used by the site)
```

## Editing content

- **Copy**: each section's text lives at the top of its file in `src/components/sections/` as a plain array/string — no digging through JSX needed.
- **FAQ**: edit `src/data/faq.ts` (updates both the accordion and the Google FAQ rich-result schema).
- **Colors/fonts**: edit the `@theme` block in `src/app/globals.css`.

## Replacing images

1. Drop the new file into `assets-src/` using the same filename
   (e.g. `screen-today.png` for the hero phone).
2. Run `node scripts/prepare-assets.mjs`.
3. Done — optimized versions land in `public/assets/`.

## Forms & environment variables

| Form | Goes to | Env vars |
|---|---|---|
| Contact | Web3Forms (client-side call) | `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` |
| Campus ambassador | `/api/ambassador` → Kit form/list | `KIT_API_KEY`, `KIT_AMBASSADOR_FORM_ID` |

The launch-list signup was removed when the app went live on the App Store (download
buttons now link to `APP_STORE_URL` in `src/data/site.ts`). `KIT_FORM_ID` is no longer
used and can be deleted from Vercel.

Also keep current:
- `APP_STORE_URL` and `CONTACT_EMAIL` in `src/data/site.ts`
- Social links in `src/components/sections/Contact.tsx`
- The privacy policy text in `src/app/privacy/page.tsx` (public at `/privacy`; the app links to it)

## Deploying on Vercel (free)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. You'll get `https://<project>.vercel.app` free, with HTTPS.
4. Optional: buy a domain (~$10/yr) and add it under **Project → Settings → Domains**.
5. Every `git push` to `main` auto-deploys.
