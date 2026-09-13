// Files in public/ are served under Vite's base path (e.g. /portfolio/).
// Content files can keep using /images/name.png and /resume.pdf.
export function publicAsset(path: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
