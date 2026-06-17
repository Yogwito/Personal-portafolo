# Personal Portfolio — Juan Sebastian Arias Rueda

Personal portfolio site for Juan Sebastian Arias Rueda — Systems Engineering student
wiring web, infrastructure, algorithms, networking, and business into working products.

Built as a static single-page site with a **cyanotype blueprint** design language: a
drafting-grid background, monospace schematic annotations, and a signature node-network
"systems map" in the hero.

## Stack

- **React 19** + **TypeScript**
- **Vite** (static build)
- **Tailwind CSS v3**
- **Framer Motion** (reduced-motion-aware) + CSS animations
- Self-hosted fonts via `@fontsource`: Bricolage Grotesque, Hanken Grotesk, IBM Plex Mono

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  data/         # content (profile, projects, skills, experience, education)
  components/   # Nav, Hero, NodeGraph, Projects, Skills, Experience, Education, Contact, Footer
  hooks/        # useReveal (scroll-reveal via IntersectionObserver)
  index.css     # design tokens, blueprint background, reduced-motion rules
public/
  _redirects    # SPA fallback for Cloudflare Pages
  resume.pdf    # CV (replace with the real file)
  favicon.svg
```

## Deploy — Cloudflare Pages

This is a static build, deployable directly to Cloudflare Pages.

**Dashboard:** connect the GitHub repo and use:

| Setting              | Value           |
| -------------------- | --------------- |
| Framework preset     | Vite            |
| Build command        | `npm run build` |
| Build output directory | `dist`        |

`public/_redirects` (`/* /index.html 200`) provides the single-page-app fallback so
deep links resolve to `index.html`.

**Or via Wrangler:**

```bash
npm run build
npx wrangler pages deploy dist
```

## Updating content

All copy lives in `src/data/*.ts` — edit those files to change projects, skills,
experience, or contact details. Replace `public/resume.pdf` with the real CV (the
"Download CV" buttons link to `/resume.pdf`).
