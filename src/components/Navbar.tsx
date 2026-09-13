import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
const navItems = [
  { label: 'Work', href: '/#work' }, { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' },
];
export default function Navbar() {
  return <header className="navbar">
    <Link to="/" className="navbar__brand" aria-label="Joaquin Elizalde — Home"><span className="navbar__brand-text">Joaquin Elizalde - Portfolio</span><span className="navbar__mobile-brand">JE</span></Link>
    <nav className="navbar__links" aria-label="Main navigation">{navItems.map((item, index) => {
      const contents = <><span className="navbar__index">{String(index + 1).padStart(2, '0')}</span>{item.label}</>;
      return index === 0 ? <Link key={item.href} to={item.href} className="navbar__link">{contents}</Link> : <NavLink key={item.href} to={item.href} className="navbar__link">{contents}</NavLink>;
    })}</nav>
  </header>;
}
