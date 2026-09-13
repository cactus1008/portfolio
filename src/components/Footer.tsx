import { profile } from '../data/profile';
export default function Footer() {
  return <footer className="footer"><div><p>{profile.name}</p><span>© {new Date().getFullYear()}</span></div>
    <div className="footer__links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin}>LinkedIn</a><a href={profile.phoneHref}>{profile.phone}</a></div>
    <a href="#page-top">Back to top ↑</a>
  </footer>;
}
