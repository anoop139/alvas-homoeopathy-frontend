import { useEffect, useRef, useState } from 'react'
import './SiteFooter.css'

const socialLinks = [
  ['Facebook', 'https://m.facebook.com/ahmc.official/'],
  ['Instagram', 'https://instagram.com/ahmc.official?igshid=177ug59wuzplk'],
  ['X', 'https://twitter.com/OfficialAhmc?s=09'],
  ['YouTube', 'https://www.youtube.com/channel/UCy8HW-j_mFfEQRf-vnx4oYw'],
]

function SiteFooter({ hideContact = false }) {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const contactDetailsRef = useRef(null)

  useEffect(() => {
    if (!isContactOpen) return undefined

    const timeoutId = window.setTimeout(() => {
      contactDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, 560)

    return () => window.clearTimeout(timeoutId)
  }, [isContactOpen])

  return (
    <footer id="contact" className="site-footer">
      <div className={`site-footer__contact-grid${hideContact ? ' site-footer__contact-grid--social-only' : ''}`}>
        <div className={`site-footer__topline${hideContact ? ' site-footer__topline--social-only' : ''}`}>
        {!hideContact && (
        <section className="site-footer__contact" aria-labelledby="footer-contact-title">
          <button
            id="footer-contact-title"
            className="site-footer__contact-toggle"
            type="button"
            aria-expanded={isContactOpen}
            aria-controls="footer-contact-details"
            onClick={() => setIsContactOpen((isOpen) => !isOpen)}
          >
            Contact Us
            <span className="site-footer__contact-chevron" aria-hidden="true" />
          </button>
        </section>
        )}
        <nav className="site-footer__social-links" aria-label="Social media">
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
          ))}
        </nav>
        </div>
        {!hideContact && (
        <div
          ref={contactDetailsRef}
          id="footer-contact-details"
          className={`site-footer__contact-details${isContactOpen ? ' is-open' : ''}`}
          aria-hidden={!isContactOpen}
          inert={!isContactOpen}
        >
          <div className="site-footer__contact-copy">
            <address>
              Alva's Homoeopathic Medical College,<br />
              NH-13, Shobhavana Campus,<br />
              Mijar, Moodubidire, Mangalore,<br />
              Dakshina Kannada, Karnataka 574225, India
            </address>
            <a href="tel:+917090639555">+91 70906 39555</a>
            <a href="mailto:ahmc@alvas.org">ahmc@alvas.org</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Alva%27s+Homoeopathic+Medical+College%2C+Mijar%2C+Moodubidire" target="_blank" rel="noreferrer">Get directions</a>
          </div>
          <iframe
            className="site-footer__map"
            src="https://www.google.com/maps?q=Alva%27s+Homoeopathic+Medical+College,+Mijar,+Moodubidire&output=embed"
            title="Map to Alva's Homoeopathic Medical College"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        )}
      </div>
      <div className="section-wrap site-footer__inner">
        <p className="site-footer__brand">Follow Alva’s Homoeopathic Medical College</p>
      </div>
    </footer>
  )
}

export default SiteFooter
