# Launch checklist — Temple Underground Minisite

Use this before printing QR codes or going live.

## Contact & URLs

Update [`src/config/site.ts`](src/config/site.ts):

- [ ] Real phone number and `phoneTel` / `smsTel` (E.164 format, e.g. `+14235551234`)
- [ ] Real email address
- [ ] Street address and Google Maps link
- [ ] `PUBLIC_PRIMARY_SITE_URL` in Vercel → live main website

## Content

- [ ] Review [`src/i18n/es.json`](src/i18n/es.json) with a native speaker
- [ ] Confirm schedule and pricing match current gym policy

## Imagery

- [ ] Add gym photos to `public/images/source/` (hero.svg, training.jpg, etc.)
- [ ] Run `npm run optimize-images`
- [ ] Verify hero loads on mobile (Lighthouse / real device)

## Analytics

- [ ] Create Plausible site at [plausible.io](https://plausible.io)
- [ ] Set `PUBLIC_PLAUSIBLE_DOMAIN` in Vercel production env
- [ ] Test one CTA click appears in Plausible goals/events

## Vercel

- [ ] Connect GitHub repo
- [ ] Production deploy succeeds (`npm run build`)
- [ ] Custom domain + SSL (e.g. `go.templeunderground.com`)

## QR codes for print

Recommended default URL:

```
https://go.templeunderground.com/en/?utm_campaign=poster-morristown-2025
```

Spanish poster:

```
https://go.templeunderground.com/es/?utm_campaign=poster-morristown-2025-es
```

Campaign variants (future):

```
https://go.templeunderground.com/en/?utm_campaign=boxing-flyer
```

Generate QR PNG/SVG with any tool (qr.io, Canva, print shop) using the URLs above.
