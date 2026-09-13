import { motion } from 'framer-motion';
import '../styles/Hero.css';
import { publicAsset } from '../utils/publicAsset';

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <img
          src={publicAsset('/images/hero-combined2.png')}
          alt="Outdoor collage portrait of Joaquin Elizalde"
          className="hero__image"
        />

        <div className="hero__wash" />
        <div className="hero__noise" />

        <div className="hero__meta">
          <span>Development Project Archive</span>
          <span>Based in Utah</span>
          <span>Web / Systems / Design</span>
        </div>

        <div className="hero__portfolio-label">Portfolio</div>

        <p className="hero__side-text hero__side-text--left">Personal Projects / Selected Work</p>
        <p className="hero__side-text hero__side-text--right">Utah / Web / Systems / Design</p>

        <motion.div
          className="hero__overlay"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <h1 className="hero__name">
            <span className="hero__name-line hero__name-line--first">JOAQUIN</span>
            <span className="hero__name-line hero__name-line--second">ELIZALDE</span>
          </h1>

          <div className="hero__subtype">
            <span>WEB APPS / SYSTEMS</span>
            <span>DEVELOPMENT / CREATIVE TECH</span>
          </div>
        </motion.div>
        <a href="#intro" className="hero__scroll-cue" aria-label="Scroll to intro">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </a>
      </section>

      <motion.section
        className="hero-intro"
        id="intro"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
      >
        <div className="hero-intro__inner">
          <p className="hero-intro__eyebrow">Intro / 01</p>

          <p className="hero-intro__description">
            I’m an Information Systems student and developer focused on creating software that is both practical and well designed. 
            I enjoy blending technical development with thoughtful user experience and real-world utility, 
            especially in projects that involve collaboration and people. 
            Outside of development, I spend most of my time outdoors hiking, climbing, and camping.
          </p>

          <div className="hero-intro__actions">
            <a href="#work" className="hero-intro__button hero-intro__button--primary">
              View Work
            </a>
            <a href="#contact" className="hero-intro__button">
              Reach Out
            </a>
          </div>

          <div className="hero-intro__tags">
            <span>React / TypeScript</span>
            <span>ASP.NET Core</span>
            <span>C++</span>
            <span>Python</span>
            <span>Creative Tech</span>
          </div>
        </div>
      </motion.section>
    </>
  );
}