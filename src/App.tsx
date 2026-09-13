import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import ExperiencePreview from './sections/Experience';
import ContactPreview from './sections/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDetailLayout from './components/ProjectDetailLayout';
import { CTAButton, PageHeader } from './components/Shared';
import ExperiencePage from './pages/ExperiencePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { projects } from './data/projects';
import './styles/Portfolio.css';

function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const project = projects.find(item => pathname === `/work/${item.slug}`);
    const title = project?.title ?? ({ '/experience': 'Experience', '/about': 'About', '/contact': 'Contact', '/': 'Portfolio' }[pathname] ?? 'Page Not Found');
    document.title = `${title} — Joaquin Elizalde`;
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, key]);
  return null;
}
export default function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><RouteEffects /><div className="page-shell" id="page-top"><a className="skip-link" href="#main-content">Skip to content</a><Navbar />
    <main id="main-content"><Routes>
      <Route path="/" element={<><Hero /><Projects /><ExperiencePreview /><ContactPreview /></>} />
      {projects.map((project, index) => <Route key={project.slug} path={`/work/${project.slug}`} element={<ProjectDetailLayout project={project} next={projects[(index + 1) % projects.length]} />} />)}
      <Route path="/experience" element={<ExperiencePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<div className="section editorial-page"><PageHeader number="404 / Not Found" title="Off the Map" /><CTAButton href="/">Return Home</CTAButton></div>} />
    </Routes></main><Footer />
  </div></BrowserRouter>;
}
