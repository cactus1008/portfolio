import { CTAButton, SectionLabel } from '../components/Shared';
import { profile } from '../data/profile';
export default function ContactPreview() {
  return <section className="section editorial-section" id="contact"><div className="content-width"><SectionLabel>04 / Contact</SectionLabel><h2 className="section-title">Let’s Connect</h2><p>{profile.contactIntro}</p><div className="hero-intro__actions"><CTAButton href="/contact" primary>Get in Touch ↗</CTAButton></div></div></section>;
}
