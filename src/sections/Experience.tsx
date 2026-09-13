import ExperienceItem from '../components/ExperienceItem';
import { CTAButton, SectionLabel } from '../components/Shared';
import { experience, profile } from '../data/profile';
export default function ExperiencePreview() {
  return <section className="section editorial-section"><div className="content-width"><SectionLabel>02 / Experience</SectionLabel><h2 className="section-title">Experience</h2>
    {experience.slice(0, 2).map(entry => <ExperienceItem key={entry.id} entry={entry} />)}
    <div className="hero-intro__actions"><CTAButton href="/experience">View Full Experience</CTAButton><CTAButton href={profile.resume} download="JoaquinElizaldeResume.pdf">Download Resume</CTAButton></div>
  </div></section>;
}
