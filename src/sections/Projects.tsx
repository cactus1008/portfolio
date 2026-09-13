import ProjectCard from '../components/ProjectCard';
import { SectionLabel } from '../components/Shared';
import { projects } from '../data/projects';
export default function Projects() {
  return <section className="section editorial-section" id="work"><div className="content-width"><SectionLabel>01 / Work</SectionLabel><h2 className="section-title">Selected Work</h2>{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></section>;
}
