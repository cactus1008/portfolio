import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { CTAButton, ImageArea, SectionLabel, SkillTags } from './Shared';

export default function ProjectCard({ project }: { project: Project }) {
  return <article className="project-row">
    <Link to={`/work/${project.slug}`} className="project-row__image" aria-label={`View ${project.title}`}><ImageArea image={project.hero} /></Link>
    <div className="project-row__text">
      <SectionLabel>{project.number} / {project.category}</SectionLabel>
      <h3>{project.title}</h3><p>{project.description}</p>
      <SkillTags skills={project.tags} />
      <div className="hero-intro__actions"><CTAButton href={`/work/${project.slug}`}>View Project ↗</CTAButton></div>
    </div>
  </article>;
}
