import { CTAButton, PageHeader } from '../components/Shared';
import { profile } from '../data/profile';
export default function ContactPage() {
  return <div className="section editorial-page contact-page"><div className="content-width"><PageHeader number="04 / Get in Touch" title="Contact"><p>{profile.contactIntro}</p></PageHeader>
    <div className="contact-links"><a href={`mailto:${profile.email}`}><span>Email</span><span>{profile.email} ↗</span></a><a href={profile.linkedin}><span>LinkedIn</span><span>Joaquin Elizalde ↗</span></a><a href={profile.phoneHref}><span>Phone</span><span>{profile.phone}</span></a></div>
    <p className="mono-label muted">Based in {profile.location}</p><div className="hero-intro__actions"><CTAButton href={`mailto:${profile.email}`} primary>Send an Email ↗</CTAButton></div>
  </div></div>;
}
