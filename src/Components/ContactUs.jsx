import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './ContactUs.css'

const address = [
  'Alva’s Homoeopathic Medical College',
  'NH-13, Shobhavana Campus, Mijar',
  'Moodubidire, Dakshina Kannada',
  'Karnataka, India – 574225',
]

function ContactUs() {
  const mapQuery = encodeURIComponent('Alva’s Homoeopathic Medical College, Mijar, Moodubidire, Karnataka 574225')

  return (
    <main className="contact-page">
      <SiteHeader />
      <section className="contact-page__content" aria-labelledby="contact-title">
        <header className="contact-page__heading">
          <h1 id="contact-title">Contact Us</h1>
          <span>We’re here to help with your questions.</span>
        </header>
        <div className="contact-page__details">
          <article className="contact-card">
            <span className="contact-card__label">Call us</span>
            <h2>Phone</h2>
            <a href="tel:+917090639555">+91 70906 39555</a>
          </article>
          <article className="contact-card">
            <span className="contact-card__label">Write to us</span>
            <h2>Email</h2>
            <a href="mailto:ahmc@alvas.org">ahmc@alvas.org</a>
          </article>
          <article className="contact-card contact-card--address">
            <span className="contact-card__label">Visit us</span>
            <h2>Address</h2>
            <address>{address.map((line) => <span key={line}>{line}</span>)}</address>
          </article>
          <div className="contact-page__map">
            <iframe
              title="Map to Alva’s Homoeopathic Medical College"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <SiteFooter hideContact />
    </main>
  )
}

export default ContactUs
