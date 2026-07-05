# EMIGARMENTS — website

A fast, static **Astro** marketing/credibility site for EMIGARMENTS, a Karachi-based
B2B textile & garments group (Leather · Denim · Home Textiles · Towels & Terry).
Four pages — Home, Divisions, About, Contact — funnelling international sourcing
buyers to an inquiry/quote.

Design system and strategy live in [`DESIGN.md`](./DESIGN.md) and [`PRODUCT.md`](./PRODUCT.md).
Built with the [impeccable](https://github.com/pbakaus/impeccable) design skill.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

Node 18+ required (built on Node 24).

## Where to edit

- **All copy, contact details, divisions, stats, certs** → `src/data/site.ts` (one file).
- **Colours, fonts, spacing** → `src/styles/tokens.css` (design tokens).
- **Page structure** → `src/pages/*.astro`; reusable pieces → `src/components/*.astro`.

## ⚠️ Before public launch — replace every placeholder (marked `✱` / `CONFIRM`)

All of these live in `src/data/site.ts` unless noted:

1. **Contact details** — `phone`, `whatsapp`, `addressLines`, `mapQuery` are placeholders.
2. **Facility figures** — `facility[]` (capacity, headcount, area, markets) are `00,000`-style placeholders.
3. **Certifications** — `compliance.standards` are *target* standards, **not** certificates held.
   Replace with your real, currently-valid certifications (with logos + validity dates).
   Publishing certifications you don't hold is a legal/reputational risk.
4. **Inquiry form email** — set `forms.web3formsKey` to a real key from
   [web3forms.com](https://web3forms.com) (enter `info@emigarments.com` as the destination).
   Until then the form shows a "please email us" fallback instead of sending.
5. **Photography** — every image is a verified **Unsplash placeholder**. Swap for real
   EMIGARMENTS facility/product photos (replace the `img` tokens in `src/data/site.ts`,
   or drop files in `public/` and point to them). At minimum replace the hero + one shot
   per division before launch.
6. **Logo** — `src/components/Logo.astro` recreates the wordmark in SVG. Swap in your exact
   vector if you have one. `public/favicon.svg` is the browser-tab mark.

## Deploy to Vercel

This is a **static** site — no server needed.

**CLI (fastest):**
```bash
npm i -g vercel      # or use: npx vercel
vercel login         # one-time, opens your browser
vercel --prod        # build + deploy to production
```
Vercel auto-detects Astro (build `astro build`, output `dist`).

**Or via GitHub:** push this repo to GitHub → import it at vercel.com → every push auto-deploys.

### Custom domain (`emigarments.com`, registered at Namecheap)

In Vercel → Project → **Settings → Domains**, add `emigarments.com` and `www.emigarments.com`,
then at **Namecheap → Domain → Advanced DNS** add the records Vercel shows (typically):
- `A` · Host `@` · Value `76.76.21.21`
- `CNAME` · Host `www` · Value `cname.vercel-dns.com`

Vercel issues the SSL certificate automatically once DNS verifies.

### Email on the domain

Vercel does not host email. For `info@emigarments.com` use **Zoho Mail** (Mail Lite ≈ $1/user/mo
enables Outlook/IMAP) or **Google Workspace**, and add their MX/TXT records at Namecheap. The
website's `A`/`CNAME` records and the email `MX` records coexist in the same Namecheap DNS panel.

## Notes

- The numbered 01–04 process is an intentional, genuine sequence (the design detector flags
  numbered markers as *advisory* only — this is the documented exception).
- Motion is enhancement-only: content is always visible even with JS off / in crawlers.
