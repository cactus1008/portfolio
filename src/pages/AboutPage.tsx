import { CTAButton, ImageArea, PageHeader, SkillTags } from '../components/Shared';
import { profile } from '../data/profile';
export default function AboutPage() {
  return <div className="section editorial-page"><div className="content-width"><PageHeader number="03 / A Little More" title="About" />
    <div className="about-layout"><ImageArea image={profile.portrait} portrait /><div className="about-copy"><h2>Who I Am</h2>{profile.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<section><h2>What I Do</h2>{profile.whatIDo.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section><section><h2>Outside of Work</h2>{profile.outsideOfWork.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section><section><h2>Skills / Tools</h2><SkillTags skills={profile.skills} /></section><div className="hero-intro__actions"><CTAButton href="/#work" primary>View Work</CTAButton><CTAButton href="/contact">Contact Me</CTAButton></div></div></div>
  </div></div>;
}
