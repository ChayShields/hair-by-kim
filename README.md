# Hair by Kim

One-page website for Kim, a home-based hairdresser in Lowestoft. Next.js 16 (App Router), React 19, Tailwind 4, TypeScript, deployed on Vercel. A fully static brochure site: no database, no forms, no cookies, no analytics (yet).

**Status:** built and checked locally. Not pushed, not deployed. Target repo: `github.com/ChayShields/hair-by-kim`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

| To change | Edit |
|---|---|
| Phone, WhatsApp, hours, address, Facebook link, domain, whether the address is shown | `src/lib/business.ts` |
| Prices and services | `src/lib/services.ts` |
| Client reviews (word for word) | `reviews` list in `src/lib/services.ts` |
| Before/after photos | `results` list in `src/lib/services.ts` (put files in `public/`) |
| Colours, type, the ruled-paper look | `src/app/globals.css`, `src/app/layout.tsx` |
| Kim's logo (header, favicon, home-screen icon, share card) | `public/logo.png`, `src/app/icon.png`, `src/app/apple-icon.png` |
| Privacy Policy / Terms | `src/app/privacy-policy`, `src/app/terms-of-service` |

The Reviews and Before-and-after sections render nothing while their lists are empty, so the page never shows placeholder or made-up content.

### Hide the street address

Kim works from home. Set `showAddress: false` in `src/lib/business.ts`. The page, the "Find Kim" section and the structured data then show only "Lowestoft, NR32" and "address given when you book".

## Before launch

- Replace `siteUrl` in `src/lib/business.ts` with the real domain (canonical URLs, sitemap, schema and share card all read it).
- Add real reviews and before/after photos from Kim's Facebook page.
- Confirm with Kim: does "Cut £22" cover all cuts (women and men)? The £18 gents cut is confirmed.
- If GA4 is added, it needs a cookie-consent banner and a Privacy Policy update first (the policy currently says there are no cookies or analytics).

## Design

Direction: "the appointment diary". Lavender-white ruled paper on a 2rem baseline, a purple margin line, a near-black steel-ring binder, a purple highlighter for open hours and the Call button, violet-ink handwriting for small notes. The purple (`#784f8b`) and black come from Kim's own logo. The round logo in `public/logo.png` was rebuilt as a transparent PNG from the image Kim supplied (her real lettering with the rings redrawn around it, because the supplied image cut off the top of the circle); the favicon and home-screen icon are the same mark. Fonts: Bricolage Grotesque, Hanken Grotesk, Reenie Beanie (via `next/font`, self-hosted at build).

## Security

Static CSP and security headers are set in `next.config.ts` (no third-party hosts; `script-src` allows `'unsafe-inline'` because the site has no per-request nonce). JSON-LD is serialised through `src/lib/json-ld.ts`, which escapes `<`, `>`, `&` and line separators.
