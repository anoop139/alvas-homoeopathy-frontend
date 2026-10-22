import { Link } from 'react-router-dom'
import headingImage from '../Images/Heading.jpg'
import rankHoldersImage from '../Images/RankeHolderjpg.jpg'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const featureCards = [
  {
    number: '01',
    title: 'Academic Excellence',
    description: 'Strong classroom learning, guided mentorship, and a foundation rooted in scientific understanding.',
  },
  {
    number: '02',
    title: 'Practical Exposure',
    description: 'Hands-on clinical learning that encourages thoughtful observation and patient-centered care.',
  },
  {
    number: '03',
    title: 'Holistic Growth',
    description: 'A learning culture that balances compassion, discipline, innovation, and social responsibility.',
  },
]

const campusHighlights = [
  'Well-equipped learning spaces',
  'Student support and mentoring',
  'Research and clinical exposure',
  'Healthy campus environment',
]

function Home() {
  return (
    <main id="home" className="home-page">
      <SiteHeader />

      <section
        className="hero-banner"
        aria-label="College banner"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10, 26, 21, 0.82) 0%, rgba(15, 32, 28, 0.65) 38%, rgba(15, 32, 28, 0.28) 100%), url(${headingImage})`,
        }}
      >
        <div className="hero-banner__inner section-wrap">
          <div className="hero-banner__content">
            <p className="hero-banner__eyebrow">A unit of Alva's Education Foundation</p>
            <h1>Alva's Homeopathic Medical College</h1>
            <p className="hero-banner__tagline">
              Inspiring compassionate care through quality education, clinical learning, and a value-driven campus culture.
            </p>
            <div className="hero-banner__actions">
              <a className="button hero-banner__cta hero-banner__cta--ghost" href="#about-college">Know More</a>
            </div>
            <ul className="hero-banner__metrics" aria-label="College highlights">
              <li>
                <strong>20+</strong>
                <span>Academic disciplines</span>
              </li>
              <li>
                <strong>25+</strong>
                <span>Clinical learning areas</span>
              </li>
              <li>
                <strong>2008</strong>
                <span>Established</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <section className="status-strip">
        <div className="section-wrap status-strip__inner">
          <div>
            <span>Ranked among top institutions</span>
          </div>
          <div>
            <span>Global collaborations</span>
          </div>
          <div>
            <span>Campus with modern infrastructure</span>
          </div>
        </div>
      </section>

      <section className="rank-holders-section" aria-labelledby="rank-holders-title">
        <div className="section-wrap">
          <div className="section-heading">
            <p className="section-kicker">Student Achievement</p>
            <h2 id="rank-holders-title">University Rank Holders</h2>
          </div>
          <img
            className="rank-holders-section__image"
            src={rankHoldersImage}
            alt="Alva's Homoeopathic Medical College university rank holders from 2019 to 2025"
            loading="lazy"
          />
        </div>
      </section>

      <section id="about-college" className="about-section section-wrap">
        <div className="section-heading">
          <p className="section-kicker">About College</p>
          <h2>Education shaped by knowledge, compassion, and purpose.</h2>
        </div>
        <div className="about-section__contents">
          <div className="about-section__lead">
            <p>
              At Alva's Homeopathic Medical College, we believe healthcare education must be rooted in empathy,
              scientific thinking, and a deep sense of responsibility toward patients and communities.
            </p>
            <a className="text-link" href="#hospital">Explore our approach <span aria-hidden="true">→</span></a>
          </div>

          <article className="message-card">
            <span className="message-card__label">Chairman's Message</span>
            <p>
              “Welcome to Alva's! Our mission is to provide world-class education infused with cultural values,
              shaping students into compassionate professionals who serve society.”
            </p>
            <Link to="/chairperson-message">Know More</Link>
          </article>

          <article className="message-card message-card--alt">
            <span className="message-card__label">Principal's Message</span>
            <p>
              “We foster an environment of academic excellence and personal growth, enabling learners to become
              confident, capable and caring healthcare professionals.”
            </p>
            <a href="#home">Know More</a>
          </article>
        </div>
      </section>

      <section id="course" className="program-section">
        <div className="section-wrap program-section__inner">
          <div className="program-section__copy">
            <p className="section-kicker">Academic Programs</p>
            <h2>Build a strong foundation for a future in healthcare.</h2>
            <p>
              Our approach blends academic depth, practical training, and patient-centered learning to help students
              grow with confidence and clarity.
            </p>
            <a className="button button--light" href="#facilities">Discover the Learning Environment <span aria-hidden="true">→</span></a>
          </div>

          <div className="program-card" aria-label="A well-rounded learning experience">
            <span className="program-card__index">01 / LEARNING</span>
            <div className="program-card__mark" aria-hidden="true">✳</div>
            <h3>Curiosity meets care</h3>
            <p>Learn to understand health from a whole-person perspective while becoming a thoughtful professional.</p>
          </div>
        </div>
      </section>

      <section id="facilities" className="features-section section-wrap">
        <div className="features-section__heading">
          <div>
            <p className="section-kicker">Campus Life</p>
            <h2>A place to learn, grow, and belong.</h2>
          </div>
          <p>Explore an environment designed to support learning, community, and discovery.</p>
        </div>

        <div className="feature-grid">
          {featureCards.map((feature) => (
            <article key={feature.number} className={`feature-card${feature.number === '02' ? ' feature-card--accent' : ''}`}>
              <span className="feature-card__number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="highlights-list">
          {campusHighlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
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
            <h2>Learning grounded in compassion and clinical understanding.</h2>
            <p>
              A meaningful healthcare education begins with listening, respect, and a sincere commitment to the dignity of every patient.
            </p>
          </div>
          <a className="button button--light" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default Home
