import type { Project } from '../data/projects';
import { CTAButton, ImageArea, PageHeader, SectionLabel, SkillTags } from './Shared';
export default function ProjectDetailLayout({ project, next }: { project: Project; next: Project }) {
  return <article className="section editorial-page"><div className="content-width">
    <PageHeader number={`${project.number} / Selected Work`} title={project.title}>
      <p className="mono-label">{project.category}</p>
      {project.website && <div className="hero-intro__actions"><CTAButton href={project.website} primary newTab>{project.websiteLabel ?? 'Visit Website'} ↗</CTAButton></div>}
      {project.permissionNote && <p className="project-permission-note">{project.permissionNote}</p>}
    </PageHeader>
    {project.codeSnippet && <section className="code-section" aria-label={project.codeSnippet.title}>
      <SectionLabel>Code / GDScript</SectionLabel>
      <h2>{project.codeSnippet.title}</h2>
      <p>{project.codeSnippet.description}</p>
      <details className="code-excerpt">
        <summary>View {project.codeSnippet.filename} / {project.codeSnippet.source.trimEnd().split('\n').length} lines</summary>
        <pre tabIndex={0} aria-label="Enemy AI source code"><code>{project.codeSnippet.source}</code></pre>
      </details>
    </section>}
    <ImageArea image={project.detailHero} banner />
    <dl className="project-facts"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Timeline</dt><dd>{project.timeline}</dd></div><div><dt>Tools / Technologies</dt><dd><SkillTags skills={project.tags} /></dd></div></dl>
    {project.sections.map((section, index) => <section className="detail-section" key={section.title}><h2><span className="detail-section__number">{String(index + 1).padStart(2, '0')} / </span>{section.title}</h2><p>{section.body}</p></section>)}
    <section className="gallery-section"><SectionLabel>Project Gallery</SectionLabel><h2>Images / Screenshots</h2><div className="image-gallery">{project.gallery.map((image, index) => <ImageArea key={index} image={image} />)}</div></section>
    <section className="detail-section"><h2>Outcome / Result</h2><p>{project.outcome}</p></section>
    <section className="detail-section"><h2>Lessons Learned</h2><p>{project.lessons}</p></section>
    <nav className="next-project" aria-label="Project navigation"><SectionLabel>Next Project / {next.number}</SectionLabel><h2>{next.title}</h2><div className="hero-intro__actions"><CTAButton href={`/work/${next.slug}`}>View Next Project ↗</CTAButton><CTAButton href="/#work">All Work</CTAButton></div></nav>
  </div></article>;
}
