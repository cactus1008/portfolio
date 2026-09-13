import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';
import type { ProjectImage } from '../data/projects';

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="mono-label section-label">{children}</p>;
}
export function PageHeader({ number, title, children }: { number: string; title: string; children?: ReactNode }) {
  return <header className="page-header"><SectionLabel>{number}</SectionLabel><h1>{title}</h1>{children && <div className="page-header__intro">{children}</div>}</header>;
}
export function SkillTag({ children }: { children: ReactNode }) {
  return <span>{children}</span>;
}
export function SkillTags({ skills }: { skills: string[] }) {
  return <div className="hero-intro__tags">{skills.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}</div>;
}
export function CTAButton({ href, children, primary = false, download = false, newTab = false }: {
  href: string; children: ReactNode; primary?: boolean; download?: boolean | string; newTab?: boolean;
}) {
  const className = `hero-intro__button${primary ? ' hero-intro__button--primary' : ''}`;
  return newTab || download || !href.startsWith('/')
    ? <a className={className} href={href} download={download || undefined} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined}>{children}</a>
    : <Link className={className} to={href}>{children}</Link>;
}
export function ImageArea({ image, portrait = false, banner = false }: { image: ProjectImage; portrait?: boolean; banner?: boolean }) {
  return <figure className={`image-area${portrait ? ' image-area--portrait' : ''}${banner ? ' image-area--banner' : ''}`}>
    {image.src ? <img src={publicAsset(image.src)} alt={image.alt} loading="lazy" /> :
      <div className="image-placeholder"><span className="mono-label">Image / Placeholder</span><span>{image.caption}</span><span className="image-placeholder__cross" aria-hidden="true">+</span></div>}
    {image.src && <figcaption>{image.caption}</figcaption>}
  </figure>;
}
