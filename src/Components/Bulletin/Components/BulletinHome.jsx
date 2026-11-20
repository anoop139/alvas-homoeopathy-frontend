import './BulletinHome.css'
import { useEffect, useState } from 'react'
import quarterlyIcon from './bulletinImg/quarterly.png'
import eventsIcon from './bulletinImg/events.png'
import emailIcon from './bulletinImg/email.png'
import locationIcon from './bulletinImg/location.png'
import heroImage from './bulletinImg/hero-desk.jpg'

const email = 'ebulletinahmc@gmail.com'

const features = [
  {
    title: 'Quarterly Issued',
    text: 'Stay ahead of the curve! Our E-bulletin delivers insights straight to you, published quarterly.',
    symbol: 'bulb',
  },
  {
    title: 'Campus events, at a glance',
    text: 'Explore a concise roundup of activities and memorable moments from college life.',
    image: quarterlyIcon,
  },
  {
    title: 'A community that celebrates',
    text: 'See how students and staff come together to mark achievements and special occasions.',
    image: eventsIcon,
  },
]

const readerNotes = [
  { name: 'Ananthram', text: 'The bulletin presents college activities and achievements in an engaging, polished format.' },
  { name: 'Shahib Shad', text: 'Its stories offered a memorable glimpse into the college culture and its ideas.' },
  { name: 'Jishnu M', text: 'A colourful, informative edition that makes it easy to learn a lot in a short time.' },
  { name: 'George', text: 'The concise coverage is easy to follow, and the edition is thoughtfully put together.' },
]

function BulletinHome() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  useEffect(() => {
    const scrollStorageKey = 'bulletin-home-scroll-y'
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    const navigation = performance.getEntriesByType('navigation')[0]
    const savedScrollY = sessionStorage.getItem(scrollStorageKey)
    if (navigation?.type === 'reload' && savedScrollY !== null) {
      requestAnimationFrame(() => window.scrollTo(0, Number(savedScrollY)))
    }

    let frame = null
    const saveScrollPosition = () => {
      if (frame !== null) return
      frame = requestAnimationFrame(() => {
        frame = null
        sessionStorage.setItem(scrollStorageKey, String(window.scrollY))
      })
    }
    const saveScrollPositionImmediately = () => {
      sessionStorage.setItem(scrollStorageKey, String(window.scrollY))
    }

    window.addEventListener('scroll', saveScrollPosition, { passive: true })
    window.addEventListener('pagehide', saveScrollPositionImmediately)

    return () => {
      window.removeEventListener('scroll', saveScrollPosition)
      window.removeEventListener('pagehide', saveScrollPositionImmediately)
      saveScrollPositionImmediately()
      if (frame !== null) cancelAnimationFrame(frame)
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  return (
    <div className="bulletin-home">
      <section id="home" className="bulletin-hero" aria-labelledby="bulletin-title">
        <div className="bulletin-hero-content">
          <p className="bulletin-eyebrow">Alva’s</p>
          <h1 id="bulletin-title">Homoeo Insight</h1>
          <p className="bulletin-hero-copy">
            The digital bulletin from Alva’s Homoeopathic Medical College brings campus news,
            activities, and achievements together in one place.
          </p>
          <a className="bulletin-button" href="https://heyzine.com/flip-book/018504e362.html#page/1">
            Read latest bulletin
          </a>
        </div>
        <img className="bulletin-hero-image" src={heroImage} alt="Overhead view of a laptop, camera, lenses, mouse, and a green plant on a desk" />
      </section>

      <section className="bulletin-editor" id="editor" aria-labelledby="editor-title">
        <div>
          <p className="bulletin-kicker">A note from our chief editor</p>
          <h2 id="editor-title">Stories from the heart of campus</h2>
        </div>
        <p>
          Homoeo Insight records the many activities and accomplishments across our college
          community. We invite you to explore the people, ideas, and moments that make campus life
          special.
        </p>
      </section>

      <section id="features" className="bulletin-features" aria-label="About the bulletin">
        {features.map((feature, index) => (
          <article className="bulletin-feature" key={feature.title}>
            {feature.symbol === 'bulb' ? (
              <span className="bulletin-feature-icon bulletin-bulb-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" focusable="false">
                  <path d="M10 13a6 6 0 1 1 12 0c0 2.2-1.1 3.5-2.4 4.9-.8.9-1.2 1.6-1.3 2.6h-4.6c-.1-1-.5-1.7-1.3-2.6C11.1 16.5 10 15.2 10 13Z" />
                  <path d="M14 23h4m-3.5 2h3m-1.5-21V2m-9 4 1.5 1.5m15 0L25 6m-17 7H6m20 0h-2" />
                </svg>
              </span>
            ) : feature.image ? (
              <img className="bulletin-feature-icon" src={feature.image} alt="" />
            ) : null}
            <span className="bulletin-feature-number">0{index + 1}</span>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="bulletin-team" id="team" aria-labelledby="team-title">
        <p className="bulletin-kicker">Made together</p>
        <h2 id="team-title">Our Core Team</h2>
        <p>
          Researchers, writers, designers, and editors work behind every edition to share the
          stories and updates of our college.
        </p>
        <a className="bulletin-text-link" href="https://alvashomoeopathy.com/Insight/Home.html#editor">
          Meet the team <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="bulletin-readers" aria-labelledby="readers-title">
        <p className="bulletin-kicker">From our readers</p>
        <h2 id="readers-title">What readers say</h2>
        <div className="bulletin-reader-grid">
          {readerNotes.map((note) => (
            <figure className="bulletin-reader-note" key={note.name}>
              <blockquote>{note.text}</blockquote>
              <figcaption>{note.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bulletin-contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="bulletin-kicker">We’d love to hear from you</p>
          <h2 id="contact-title">Get in Touch</h2>
          <p>Questions or feedback about the bulletin? Send our team a note.</p>
          <a className="bulletin-text-link" href={`mailto:${email}`}>{email}</a>
        </div>
        <address>
          <span className="bulletin-contact-item">
            <img src={locationIcon} alt="" />
            <span><strong>Visit the college</strong><br />Alva’s Homoeopathic Medical College<br />Mijar, Moodbidri, Mangalore – 574225</span>
          </span>
          <span className="bulletin-contact-item">
            <img src={emailIcon} alt="" />
            <span><strong>Email the team</strong><br /><a href={`mailto:${email}`}>{email}</a></span>
          </span>
        </address>
        <form
          id="feedback-form"
          className="bulletin-feedback-form"
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            if (!event.currentTarget.checkValidity()) {
              event.currentTarget.reportValidity()
              setFeedbackSubmitted(false)
              return
            }
            event.currentTarget.reset()
            setFeedbackSubmitted(true)
          }}
        >
          <p className="bulletin-kicker">Give us your feedback</p>
          <h2>Tell us what you think</h2>
          <p>You can also reach us anytime at <a href={`mailto:${email}`}>{email}</a>.</p>
          <div className="bulletin-form-fields">
            <label>Name<input name="name" type="text" placeholder="Enter your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="Enter a valid email address" required /></label>
            <label className="bulletin-message-field">Your thoughts<textarea name="feedback" rows="5" placeholder="What do you feel about our bulletin?" required /></label>
          </div>
          {feedbackSubmitted && (
            <p className="bulletin-feedback-success" role="status" aria-live="polite">
              Thank you! Your message has been sent.
            </p>
          )}
          <button className="bulletin-button" type="submit">Submit feedback</button>
        </form>
      </section>
      <footer id="footer" className="bulletin-footer">
        <strong>Alva’s Homoeopathic Medical College</strong>
        <span>Mijar, Shobhavan Campus, Moodbidri, Mangalore – 574225</span>
        <span>Developed by C.K Developers</span>
      </footer>
    </div>
  )
}

export default BulletinHome
