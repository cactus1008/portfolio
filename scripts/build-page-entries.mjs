import { copyFile, mkdir } from 'node:fs/promises';

// GitHub Pages serves files rather than rewriting requests to index.html.
// Give every portfolio route an entry so shared links and refreshes work.
// Add a path here when adding a new route in src/App.tsx.
const routes = [
  'experience', 'about', 'contact',
  'work/trailhead-therapy', 'work/game', 'work/mountain-project',
];

for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
