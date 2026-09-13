import type { Experience } from '../data/profile';
import { SectionLabel, SkillTags } from './Shared';
export default function ExperienceItem({ entry, expanded = false }: { entry: Experience; expanded?: boolean }) {
  return <article className="experience-item">
    <div><SectionLabel>{entry.id} / {entry.dates}</SectionLabel><p className="muted">{entry.location}</p></div>
    <div><h3>{entry.position}</h3><p className="experience-item__company">{entry.company}</p><p>{entry.description}</p>
      {expanded && <ul>{entry.accomplishments.map(item => <li key={item}>{item}</li>)}</ul>}
      <SkillTags skills={entry.skills} />
    </div>
  </article>;
}
