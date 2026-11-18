import { useState } from 'react'
import { Link } from 'react-router-dom'
import headingImage from '../Images/Heading.jpg'
import rankHoldersImage from '../Images/RankeHolderjpg.jpg'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './HomeFeatures.css'

const celebrationImages = Object.fromEntries(
  Object.entries(import.meta.glob('../Images/celebrations/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }))
    .map(([path, imageUrl]) => [path.split('/').pop(), imageUrl]),
)

const recentActivities = [
  { title: 'World Mosquito Day', date: 'August 2025', image: 'mosquito.jpg' },
  { title: "Doctor's Day", date: 'July 2024', image: 'dd1.jpg' },
  { title: 'Traditional Day', date: 'June 2024', image: 'trd1.jpg' },
]

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
  const [activeTopic, setActiveTopic] = useState(null)

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
      <nav className="home-topic-nav section-wrap" aria-label="College information">
        <p className="home-topic-nav__hint">Click here to see overview</p>
        <div className="home-topic-nav__tabs">
          <button type="button" onClick={() => setActiveTopic('about')}>About College</button>
          <button type="button" onClick={() => setActiveTopic('vision')}>Vision &amp; Mission</button>
          <button type="button" onClick={() => setActiveTopic('activities')}>Recent Activities</button>
          <button type="button" onClick={() => setActiveTopic('contact')}>Contact Us</button>
        </div>
      </nav>
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

      {activeTopic && (
        <div className="home-dialog-backdrop" onClick={() => setActiveTopic(null)}>
          <section
            className="home-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-topic-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="home-dialog__close" type="button" aria-label="Close section" onClick={() => setActiveTopic(null)}>
              &times;
            </button>
            <p className="section-kicker">
              {activeTopic === 'vision' ? 'Our Foundation' : activeTopic === 'activities' ? "Life at Alva's" : activeTopic === 'contact' ? 'Visit us' : 'About Alva’s'}
            </p>
            <h2 id="home-topic-dialog-title">
              {activeTopic === 'vision' ? 'Vision & Mission' : activeTopic === 'activities' ? 'Recent Activities' : activeTopic === 'contact' ? 'Contact Us' : 'About College'}
            </h2>
            {activeTopic === 'vision' && (
              <>
                <div className="home-vision__content">
                  <article><h3>Vision</h3><p>To impart quality education, moral values, social concern and patriotism to students and mould them into excellent professionals and credible citizens. To establish a centre of excellence through world-class education and research, preparing competent and ethically strong graduates.</p></article>
                  <article><h3>Mission</h3><p>To provide holistic education, excellent infrastructure and a supportive academic environment at affordable costs, fostering centres of excellence, intellectual growth and the total development of every student.</p></article>
                </div>
                <Link className="text-link" to="/vision-mission" onClick={() => setActiveTopic(null)}>See more</Link>
              </>
            )}
            {activeTopic === 'about' && (
              <div className="home-dialog__about">
                <p>As the world becomes more conscious about health and wellbeing, people are exploring gentle and effective approaches to care. Alva’s Homoeopathic Medical College supports this interest through education, clinical learning, and a value-driven campus culture.</p>
                <Link className="text-link" to="/about-college" onClick={() => setActiveTopic(null)}>See more</Link>
              </div>
            )}
            {activeTopic === 'activities' && (
              <>
                <div className="home-activity__grid">
                  {recentActivities.map(({ title, date, image }) => <article className="home-activity__card" key={title}><img src={celebrationImages[image]} alt={`${title} at Alva's Homoeopathic Medical College`} /><div><p>{date}</p><h3>{title}</h3></div></article>)}
                </div>
                <Link className="text-link" to="/life/celebrations" onClick={() => setActiveTopic(null)}>See more</Link>
              </>
            )}
            {activeTopic === 'contact' && (
              <div className="home-dialog__about">
                <address>Alva's Homoeopathic Medical College,<br />NH-13, Shobhavana Campus,<br />Mijar, Moodubidire, Mangalore,<br />Dakshina Kannada, Karnataka 574225, India</address>
                <p><a href="tel:+917090639555">+91 70906 39555</a><br /><a href="mailto:ahmc@alvas.org">ahmc@alvas.org</a></p>
                <a href="https://www.google.com/maps/search/?api=1&query=Alva%27s+Homoeopathic+Medical+College%2C+Mijar%2C+Moodubidire" target="_blank" rel="noreferrer">Get directions</a>
              </div>
            )}
          </section>
        </div>
      )}





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
              As economy is growing, and world is getting flatter, people all over the world are becoming more and more
              conscious about their health &amp; wellbeing. This has driven a larger chunk of population towards exploring
              the use of alternative means of curing aliments, which can be effective yet gentle on their body. Yes, you
              guessed it right it was this vacuum which has placed homoeopathy as the second most popular mode of
              therapeutic intervention practiced worldwide, according to WHO.
            </p>
            <Link className="text-link" to="/about-college">See more</Link>
          </div>

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





      <section id="home-vision" className="home-vision section-wrap" aria-labelledby="home-vision-title">
        <div className="home-vision__heading">
          <p className="section-kicker">Our Foundation</p>
          <h2 id="home-vision-title">Vision &amp; Mission</h2>
        </div>
        <div className="home-vision__content">
          <article>
            <h3>Vision</h3>
            <p>To impart quality education, moral values, social concern and patriotism to students and mould them into excellent professionals and credible citizens. To establish a centre of excellence through world-class education and research, preparing competent and ethically strong graduates.</p>
          </article>
          <article>
            <h3>Mission</h3>
            <p>To provide holistic education, excellent infrastructure and a supportive academic environment at affordable costs, fostering centres of excellence, intellectual growth and the total development of every student.</p>
          </article>
          <a className="text-link" href="/vision-mission">See more</a>
        </div>
      </section>

      <section id="home-activities" className="home-activity section-wrap" aria-labelledby="home-activity-title">
        <div className="section-heading">
          <p className="section-kicker">Life at Alva's</p>
          <h2 id="home-activity-title">Recent Activities</h2>
        </div>
        <div className="home-activity__grid">
          {recentActivities.map(({ title, date, image }) => (
            <article className="home-activity__card" key={title}>
              <img src={celebrationImages[image]} alt={`${title} at Alva's Homoeopathic Medical College`} loading="lazy" />
              <div><p>{date}</p><h3>{title}</h3></div>
            </article>
          ))}
        </div>
        <a className="text-link" href="/life/celebrations">See more</a>
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
