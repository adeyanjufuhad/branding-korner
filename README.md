# Branding Korner Global Consult Limited: Website

Marketing site for Branding Korner Global Consult Limited (RC 9589873), built with
Next.js 16 (App Router), React 19, Tailwind CSS v4 and Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| What | File |
| --- | --- |
| Company info, contact details, services, cities | `src/lib/site.ts` |
| Brand colours (white-dominant, blue accent) | `src/app/globals.css` (`--color-brand-*`) |
| Pages | `src/app/page.tsx`, `about/`, `services/`, `contact/` |
| Shared site components | `src/components/site/` |
| UI primitives (shadcn-style) | `src/components/ui/` |
| Logo files | `public/brand/` |

### Before launch

1. **Deploy** to [Vercel](https://vercel.com) (import the repo). Until a domain is bought, the site runs on the free `*.vercel.app` URL and SEO/sitemap URLs follow it automatically.
2. **Contact form email**: create a free [Resend](https://resend.com) account with brandingkorner@gmail.com, then set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (see `.env.example`) in Vercel's environment variables.
3. **After buying a domain**: set `NEXT_PUBLIC_SITE_URL`, verify the domain in Resend and set `CONTACT_FROM_EMAIL`.
4. **Social profiles**: add URLs to `site.socials` in `src/lib/site.ts`; empty ones stay hidden.
5. **Analytics**: enable Web Analytics in the Vercel project (the `<Analytics />` component is already installed).

Also included: `sitemap.xml`, `robots.txt`, web manifest, a generated social share image, schema.org business data, a custom 404 page, Privacy Policy (NDPA 2023) and Terms pages, and a floating WhatsApp button.

## Adding 21st.dev components

The project is set up to accept shadcn/21st.dev components: `components.json`, `@/lib/utils` (`cn`),
`@radix-ui/react-slot`, `lucide-react` and `motion` are installed, and the shadcn colour tokens
(`--primary`, `--border`, etc.) are mapped to the brand blues. Components can go straight into
`src/components/ui/` and will pick up the brand palette.

Currently in use:

- `ui/world-map.tsx`: adapted from Aceternity's [World Map](https://21st.dev/@manuarora700/components/world-map). The dotted map is pre-generated with `dotted-map` into `public/brand/world-dots.svg`, so nothing is computed in the browser.
- `ui/glowing-effect.tsx`: Aceternity's [Glowing Effect](https://21st.dev/@manuarora700/components/glowing-effect), with an added `brand` variant (the default). Used on the home service cards, "Who we serve" and the About values.
- `ui/bento-grid.tsx`: Kokonut UI's [Bento Grid](https://21st.dev/@kokonutd/components/bento-grid), restyled in brand blues with `dark:` styles removed (the site is light-only). Used as the services overview on `/services`.
- `ui/text-rotate.tsx`, `ui/number-ticker.tsx`, and the tubelight nav in `site/navbar.tsx` follow popular 21st.dev patterns (Word Rotate, Number Ticker, Tubelight Navbar).
