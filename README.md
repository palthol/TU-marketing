# Temple Underground Marketing Minisite

Lightweight, bilingual (EN/ES) QR landing page for Temple Underground — built with Astro, Tailwind CSS v4, and minimal React islands.

## Quick start

```bash
npm install
npm run optimize-images   # generates hero.webp from public/images/source/
npm run dev
```

Open [http://localhost:4321/en/](http://localhost:4321/en/) or [http://localhost:4321/es/](http://localhost:4321/es/).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production static build |
| `npm run preview` | Preview production build |
| `npm run optimize-images` | Generate responsive WebP assets with Sharp |

## Environment variables

Copy `.env.example` to `.env`:

| Variable | Description |
|----------|-------------|
| `PUBLIC_PLAUSIBLE_DOMAIN` | Plausible site domain (optional) |
| `PUBLIC_PRIMARY_SITE_URL` | Main Temple Underground website URL |

## Project structure

- `src/pages/en/` and `src/pages/es/` — localized homepages
- `src/i18n/` — all UI copy (EN + ES)
- `src/config/site.ts` — phone, email, address, URLs
- `src/config/campaigns/` — campaign variant config (default only for MVP)
- `src/components/sections/` — static page sections
- `src/islands/` — React: mobile nav, tracked CTAs, analytics init

## Hero background images

The hero uses a **layered stack** (back to front):

1. **Photo** — full-bleed `object-fit: cover` (`public/images/hero-bg-*.webp`)
2. **Scrim** — dark gradients for text contrast
3. **Glow** — gold/red brand radials (neon headline feel)
4. **Content** — wordmark + CTAs

**Add / replace photos**

1. Drop sources in `public/images/source/` (e.g. `hero-bg.jpg` for background, or only `hero.jpg` and the script copies for `hero-bg`)
2. Run `npm run optimize-images`
3. Register slides in [`src/config/hero-media.ts`](src/config/hero-media.ts):

```ts
export const heroBackgroundSlides = [
  { base: 'hero-bg', alt: '…' },
  { base: 'training-1', alt: '…' }, // optional — enables CSS crossfade
];
```

Multiple slides crossfade with **CSS only** (no carousel library). Prefer 2–3 strong gym photos; avoid autoplay video in the hero for mobile bandwidth.

**Section backgrounds (below hero)** — keep `#why`, schedule, pricing on solid ink for readability. Optional later: subtle texture or a single full-width band image between sections, still with a scrim.

## Adding a campaign variant (post-MVP)

1. Add `src/config/campaigns/your-campaign.ts`
2. Duplicate page pattern under `src/pages/[lang]/your-campaign.astro`
3. Override copy keys in i18n or a campaign-specific JSON file
4. Use QR URLs like `https://go.templeunderground.com/en/?utm_campaign=boxing-poster`

## Deploy to Vercel

1. Import this repository in [Vercel](https://vercel.com)
2. Framework preset: **Astro**
3. Set environment variables from `.env.example`
4. Add custom domain (e.g. `go.templeunderground.com`)

## Pre-launch checklist

- [ ] Update real phone, SMS, email, and map URL in `src/config/site.ts`
- [ ] Set `PUBLIC_PRIMARY_SITE_URL` to the live main site
- [ ] Replace placeholder hero: add photos to `public/images/source/` and run `npm run optimize-images`
- [ ] Review Spanish copy in `src/content/i18n/es.json`
- [ ] Configure `PUBLIC_PLAUSIBLE_DOMAIN` for analytics
- [ ] Print QR codes pointing to `https://your-domain/en/?utm_campaign=poster-name`

## Analytics events

Tracked via Plausible custom events (when configured):

- `cta_call`, `cta_text`, `cta_email`, `cta_directions`
- `cta_free_class`, `cta_main_site`

UTM capture: `?utm_campaign=` or `?ref=` stored in session and attached to events.
