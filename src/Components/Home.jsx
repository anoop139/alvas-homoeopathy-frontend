import React, { useState } from 'react'
import ahmcImage from '../Images/Logo.jpg'
import foundationLogo from '../Images/AlvasEducation.jpg'
import backgroundImage from '../Images/Backgrond.png'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsAboutOpen(false)
  }

  return (
    <main id="home" className="home-page">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-brand" href="#home" aria-label="Alva's Homeopathic Medical College home">
            <img src={ahmcImage} alt="Alva's Homeopathic Medical College" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="main-menu-links"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={`menu-toggle__icon${isMenuOpen ? ' is-open' : ''}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav
            id="main-menu-links"
            className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
            aria-label="Main navigation"
          >
            <a className="site-nav__link" href="#home" onClick={closeMenu}>Home</a>
            <details
              className="site-nav__dropdown"
              open={isAboutOpen}
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <summary
                className="site-nav__link"
                onClick={(event) => {
                  event.preventDefault()
                  setIsAboutOpen((open) => !open)
                }}
              >
                About us
                <span className="site-nav__chevron" aria-hidden="true" />
              </summary>
              <a className="site-nav__sublink" href="#about-college" onClick={closeMenu}>About College</a>
            </details>
            <a className="site-nav__link" href="#course" onClick={closeMenu}>Course</a>
            <a className="site-nav__link" href="#facilities" onClick={closeMenu}>Facilities</a>
            <a className="site-nav__link" href="#hospital" onClick={closeMenu}>Hospital</a>
          </nav>

          <a className="header-cta" href="#course">Explore Courses</a>
        </div>
      </header>

      <section
        className="hero-banner"
        aria-label="College banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-banner__overlay" />
        <div className="hero-banner__content">
          <p className="hero-banner__eyebrow">Welcome to Alva's</p>
          <h1>Alva's Homeopathic Medical College</h1>
          <p className="hero-banner__tagline">
            Learn with purpose and prepare for a future in compassionate healthcare.
          </p>
          <a className="button hero-banner__cta" href="#course">Explore Courses</a>
        </div>
      </section>

      <section id="about-college" className="intro-section section-wrap">
        <div className="section-heading">
          <p className="section-kicker">Welcome to Alva's</p>
          <h2>Education shaped by knowledge and compassion</h2>
        </div>
        <div className="intro-section__copy">
          <p>
            At Alva's Homeopathic Medical College, learning is a journey of understanding people,
            exploring health, and growing into a caring professional.
          </p>
          <a className="text-link" href="#hospital">Explore our approach <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section id="course" className="program-section">
        <div className="section-wrap program-section__inner">
          <div className="program-section__copy">
            <p className="section-kicker">Study at Alva's</p>
            <h2>Build a strong foundation for a life in healthcare.</h2>
            <p>
              Explore a learning experience that brings academic study, practical understanding,
              and compassionate care together.
            </p>
            <a className="button button--light" href="#facilities">Discover the learning environment <span aria-hidden="true">→</span></a>
          </div>
          <div className="program-card" aria-label="A well-rounded learning experience">
            <span className="program-card__index">01 / LEARNING</span>
            <div className="program-card__mark" aria-hidden="true">✳</div>
            <h3>Curiosity meets care</h3>
            <p>Learn to see health through a thoughtful, whole-person perspective.</p>
          </div>
        </div>
      </section>

      <section id="facilities" className="features-section section-wrap">
        <div className="features-section__heading">
          <div>
            <p className="section-kicker">The Alva's experience</p>
            <h2>A place to learn, grow, and belong.</h2>
          </div>
          <p>Explore an environment designed to support learning, discovery, and connection.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-card__number">01</span>
            <h3>Learning</h3>
            <p>Build knowledge and confidence through focused academic study.</p>
          </article>
          <article className="feature-card feature-card--accent">
            <span className="feature-card__number">02</span>
            <h3>Discovery</h3>
            <p>Stay curious, ask questions, and connect ideas to the world around you.</p>
          </article>
          <article className="feature-card">
            <span className="feature-card__number">03</span>
            <h3>Community</h3>
            <p>Grow alongside a community that values empathy and shared purpose.</p>
          </article>
        </div>
      </section>

      <section id="hospital" className="care-section">
        <div className="section-wrap care-section__inner">
          <div className="care-section__symbol" aria-hidden="true">
            <span />
            <span />
          </div>
          <div>
            <p className="section-kicker">Care at the heart</p>
            <h2>Learning grounded in compassion.</h2>
            <p>
              A meaningful healthcare education begins with listening, respect, and a genuine
              commitment to people and their wellbeing.
            </p>
          </div>
          <a className="button button--light" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-wrap site-footer__inner">
          <a className="site-footer__brand" href="#home">Alva's Homeopathic Medical College</a>
          <span>Learn with purpose. Care with compassion.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default Home
