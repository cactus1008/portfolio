import ExperienceItem from '../components/ExperienceItem';
import { CTAButton, PageHeader, SectionLabel, SkillTags } from '../components/Shared';
import { education, earlierExperience, experience, profile, resumeSkills } from '../data/profile';

export default function ExperiencePage() {
  return (
    <div className="section editorial-page">
      <div className="content-width">
        <PageHeader number="02 / Background" title="Experience">
          <CTAButton href={profile.resume} download="Joaquin Elizalde Resume.pdf">Download One-Page Resume</CTAButton>
        </PageHeader>

        <section aria-label="Experience">
          {experience.map(entry => <ExperienceItem key={entry.id} entry={entry} expanded />)}
        </section>

        <section className="resume-section" aria-labelledby="earlier-experience-title">
          <h2 id="earlier-experience-title">Earlier Experience</h2>
          {earlierExperience.map(entry => (
            <article className="earlier-experience" key={`${entry.company}-${entry.position}`}>
              <div><h3>{entry.position}</h3><p>{entry.company}</p></div>
              <div className="muted"><p>{entry.dates}</p><p>{entry.location}</p></div>
            </article>
          ))}
        </section>

        <section className="resume-section" aria-label="Education">
          <SectionLabel>Education</SectionLabel>
          {education.map(entry => (
            <div className="detail-section" key={entry.school}>
              <div><h2>{entry.school}</h2><p className="muted">{entry.dates}</p></div>
              <div><h3>{entry.degree}</h3><p>{entry.details}</p></div>
            </div>
          ))}
        </section>

        <section className="resume-section" aria-labelledby="resume-skills-title">
          <h2 id="resume-skills-title">Selected Skills / Tools</h2>
          {resumeSkills.map(group => (
            <div className="resume-skill-group" key={group.category}>
              <h3 className="mono-label">{group.category}</h3>
              <SkillTags skills={group.skills} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
