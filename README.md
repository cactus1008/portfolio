# Joaquin Elizalde — Portfolio

React + TypeScript + Vite. The original homepage hero, intro, photography, palette, typography and grain are preserved. New layouts reuse `src/styles/variables.css` and the existing hero button/tag classes.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

```sh
npm run lint
npm run build
npm run preview
```

## Edit your content

- `src/data/projects.ts`: project names, categories, descriptions, suggested tags, roles, timelines, case-study sections and images. Each project has its own labeled object; edit its description, details, sections and image fields directly. Outcome and lessons are editable in the same project data.
- `src/data/profile.ts`: email, social URLs, location, about copy, skills, jobs and education. The first two `experience` entries appear on the homepage. All jobs appear on `/experience`; `earlierExperience` holds compact earlier roles and `resumeSkills` holds the grouped resume skills.
- `src/sections/Contact.tsx`: the short homepage contact invitation.
- `src/sections/Hero.tsx`: your existing homepage hero and introduction.
- `src/pages/ContactPage.tsx`: replace the bracketed social profile labels when adding your real URLs.

All bracketed text is intentionally unfinished. Suggested project skill tags are placeholders, not claims about completed work.

## Add images

Put project files in `public/images/projects/`. In `src/data/projects.ts`, set each hero/gallery image's `src`, `alt` and `caption`, for example:

```ts
hero: {
  src: '/images/projects/trailhead-hero.jpg',
  alt: 'Describe the screenshot for someone who cannot see it',
  caption: 'Homepage — desktop view',
}
```

Each project has `hero` for its homepage card and `detailHero` for the banner at the top of its detail page. Edit them independently. Detail banners have a shorter frame (180–400px tall) and fill it with a centered crop.

No `src` displays a labeled placeholder. Add a portrait under `public/images/` and update `profile.portrait` in `src/data/profile.ts`. Images retain their natural proportions; portrait images use a 4:5 crop.

## Resume

Replace `public/resume.pdf` with your one-page resume, keeping that filename. The included PDF is a copy of `Joaquin Elizalde Resume.pdf`. All resume buttons use `profile.resume` (`/resume.pdf`).

## Structure

- `src/components/`: Navbar, Footer, ProjectCard, ExperienceItem, ProjectDetailLayout and small shared UI in `Shared.tsx`.
- `src/sections/`: homepage sections.
- `src/pages/`: Experience, About and Contact.
- `src/styles/Portfolio.css`: styles scoped to the new layouts, plus mobile navigation and accessibility adjustments.
- `src/App.tsx`: routes, document titles and scroll handling.

Routes: `/`, `/work/trailhead-therapy`, `/work/game`, `/work/mountain-project`, `/experience`, `/about`, `/contact`. Unknown routes show a small 404 page.

## Manual checks

1. Open every route, including by refreshing its URL.
2. Click WORK from an inner page and again from home; both should reach Selected Work.
3. Check the brand link, project links, next-project loop, email/social links, resume download and Back to top.
4. Check widths of 320px, 390px, 768px and 1440px. Project rows and galleries stack on mobile.
5. Tab through navigation and links; check visible focus and Skip to content. Enable reduced motion to check the quieter presentation.
6. Replace remaining placeholder content, URLs and images, and confirm that the resume PDF is current before publishing.

Production hosting must rewrite non-file paths to `index.html` for React Router direct links. Vite's development and preview servers already handle this. Configure the equivalent SPA fallback on your chosen host.

## Game AI code excerpt

`combat_enemy.gd` at the project root contains the 271-line portfolio excerpt. The game project's `codeSnippet` entry in `src/data/projects.ts` imports it as text, so editing that file updates the expandable code section on `/work/game`. It contains selected decision and movement functions, not a standalone Godot script; the header lists omitted context. The original function bodies are preserved.


## GitHub Pages deployment

The site is deployed at `https://cactus1008.github.io/portfolio/`, so `vite.config.ts` uses `base: '/portfolio/'` and `BrowserRouter` uses that same base. Image fields still use `/images/filename.png`; `src/utils/publicAsset.ts` adds the deployment base when rendered. The resume uses the same helper.

`npm run build` also runs `scripts/build-page-entries.mjs`, creating an `index.html` for each page so direct links and refreshes work on GitHub Pages. Add new routes to that script as well as `src/App.tsx`. Push the changes to `main` to trigger the existing deployment workflow. Preview locally at `/portfolio/`.
