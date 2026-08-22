# Braian Bernatto — Portfolio

Personal portfolio for **Braian Bernatto**, React.js Lead Frontend Developer.
Built as a high-performance, mostly-static site that doubles as a showcase of the
modern React stack it's built with.

## Tech stack

- **[Astro](https://astro.build)** — static output, zero-JS by default, React islands where interactivity matters
- **[React 19](https://react.dev)** — islands for the contact form (hydration on visible)
- **TypeScript** — strict mode, fully-typed content
- **[Tailwind CSS v4](https://tailwindcss.com)** — CSS-first config, custom design tokens
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** + Iconify (`simple-icons`, `lucide`) — inlined SVGs, no runtime
- **React Hook Form + Zod** — typed, validated contact form
- **Framer Motion** — micro-interactions

## Highlights

- Dark, professional theme with **glassmorphism + neumorphism**
- Scroll-reveal via `IntersectionObserver` (no framework cost)
- Scroll-spy navigation, accessible mobile menu, skip-to-content
- `astro check` + `astro build` typecheck pipeline, sitemap, robots.txt, OG meta

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Typecheck (`astro check`) + build    |
| `npm run preview` | Preview the production build locally |
| `npm run check`   | Run the typechecker only            |

## Editing content

All site content lives in a single typed module:

```
src/data/portfolio.ts
```

Update `profile`, `experience`, `skillGroups`, `projects`, `education`, `stats`
there — the UI updates automatically. Icons are [Iconify](https://icon-sets.iconify.design)
names (e.g. `simple-icons:react`, `lucide:code`).

The banking-platform placeholder visual is an inline SVG at
`public/projects/banking-dashboard.svg` — swap it for a real screenshot when ready.

## Project structure

```
public/            favicon, robots.txt, project assets
src/
  components/      Nav, Hero, About, Experience, Skills, Projects, Contact, Footer
  data/            portfolio.ts  (all content)
  islands/         ContactForm.tsx  (React + RHF + Zod + Framer Motion)
  layouts/         Layout.astro  (head, fonts, scroll-reveal, scroll-spy)
  pages/           index.astro
  styles/          global.css  (design tokens, glass/neu utilities)
```

## Deployment (Dokploy)

This is a static site — `npm run build` outputs a self-contained `dist/` folder.

**Static site (recommended):**
- Build command: `npm run build`
- Output directory: `dist`

**Or with a Dockerfile** serving the preview build:

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 4321
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
```

> Update `site` in `astro.config.mjs` to your real domain (used for the sitemap &
> canonical URLs), then rebuild.

## License

Personal portfolio — all rights reserved. Source provided for reference.
