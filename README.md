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

1. In `src/lib/site.ts`, replace the placeholder **email, phone, WhatsApp number, social links and domain** (marked `TODO`).
2. To deliver contact-form enquiries by email, copy `.env.example` to `.env.local` and add a [Resend](https://resend.com) API key and destination address.

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
