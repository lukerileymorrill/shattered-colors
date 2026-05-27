# Shattered Colors

Official website for the band Shattered Colors. Single-page Next.js app with a dark/neon design.

## Tech stack

- **Next.js 15** (App Router) + React 19
- **TypeScript**
- **Tailwind CSS v3** with HSL CSS variables for theming
- **shadcn/ui** primitives in `components/ui/` (Radix-based, copied into the repo)
- **lucide-react** for icons
- **next/font** for Inter (body) and Oswald (display)
- **pnpm** for package management
- Hosted on **Render**

## Local development

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

Other scripts:
- `pnpm build` — production build
- `pnpm start` — run the production build locally
- `pnpm lint` — lint

## Project structure

```
app/
  layout.tsx          Root layout: fonts, ThemeProvider, body classes
  page.tsx            Home page — composes the sections below
  globals.css         Tailwind directives + CSS variables (dark palette)
components/
  navbar.tsx          Fixed top nav with mobile menu
  hero.tsx            Headline section
  music-section.tsx   "Our Music" — album/track cards
  shows-section.tsx   "Upcoming Shows" — date list
  about-section.tsx   "About the Band" — copy + stats
  contact-section.tsx Newsletter, socials, booking/press emails
  footer.tsx
  ui/                 shadcn/ui primitives — don't edit directly
tailwind.config.ts    Theme tokens (neon-pink/cyan/purple, font-display)
public/images/        Photos, logo, placeholder.jpg
```

## Design tokens

Colors come from CSS variables in `app/globals.css` and are wired into Tailwind in `tailwind.config.ts`:

- `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-border` — theme tokens
- `text-neon-pink`, `text-neon-cyan`, `text-neon-purple` — brand accents (also work as `bg-…` and `border-…`)
- `font-display` — Oswald, used for headlines and uppercase eyebrows
- Body font is Inter via `inter.className` on `<body>`

Prefer the tokens over raw hex/Tailwind palette colors — keeps the palette swappable from one place.

## Deployment

Deploys are managed on Render: https://dashboard.render.com/project/prj-d7t3jr57vvec7392qveg

- Production URL: https://shattered-colors-official.onrender.com/
- Auto-deploys from the `main` branch on push
- Build command: `pnpm install && pnpm build`
- Start command: `pnpm start`

To ship a change: merge to `main`, watch the deploy log in the Render dashboard.

## How we work

1. **Open a GitHub Issue** for anything you want a record of — new feature, design change, bug, typo, content update you might want to find again later. 
2. **Branch from `main`**  Branch name should hint at the issue (`shows-revamp`, `fix-mobile-nav`).
3. **Open a PR** when you want a second pair of eyes; otherwise merge when ready.
4. **Close the issue** when the change is live on prod (after Render redeploys).

### Issue labels

Keep it simple:
- `content` — copy, photos, shows, tracks
- `design` — layout, colors, typography
- `bug` — something broken
- `idea` — speculative, not committed to

If labels start feeling like overhead, drop them. Issues themselves are the thing worth keeping.
