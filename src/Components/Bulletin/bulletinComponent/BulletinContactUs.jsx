import { useEffect, useState } from 'react'
import BulletinFooter from './BulletinFooter'
import './BulletinContactUs.css'

function BulletinContactUs() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!submitted) return undefined

    const timeoutId = window.setTimeout(() => setSubmitted(false), 6000)
    return () => window.clearTimeout(timeoutId)
  }, [submitted])

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const emailInput = form.elements.email
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

    if (!validEmail.test(emailInput.value)) {
      emailInput.setCustomValidity(
        'Enter a valid email address with a domain extension, such as .com.',
      )
      emailInput.reportValidity()
      setSubmitted(false)
      return
    }

    emailInput.setCustomValidity('')
    const formData = new FormData(form)
    const subject = encodeURIComponent(`Website feedback from ${formData.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('feedback')}`,
    )
    window.location.href = `mailto:alvas.homoeo.insight@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="bulletin-contact-page">
      <div className="bulletin-contact-page__content">
        <header className="bulletin-contact-page__heading">
          <h1>Contact Us</h1>
        </header>
        <p className="bulletin-contact-page__prompt">
          Any questions or remarks? Just write us a message!
        </p>

        <div className="bulletin-contact-page__layout">
          <form className="bulletin-contact-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Enter a valid email address"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
                title="Enter a valid email address with a domain extension, such as .com."
                onInput={(event) => {
                  const input = event.currentTarget
                  const cursorPosition = input.selectionStart
                  const lowercaseEmail = input.value.toLowerCase()

                  if (input.value !== lowercaseEmail) {
                    input.value = lowercaseEmail
                    input.setSelectionRange(cursorPosition, cursorPosition)
                  }

                  input.setCustomValidity('')
                  setSubmitted(false)
                }}
                onInvalid={(event) => {
                  const email = event.currentTarget.value
                  event.currentTarget.setCustomValidity(
                    /[A-Z]/.test(email)
                      ? 'Capital letters are not allowed in the email address. Use lowercase letters.'
                      : 'Enter a valid email address with a domain extension, such as .com.',
                  )
                }}
                required
              />
            </label>
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Enter your Name"
                onChange={() => setSubmitted(false)}
                required
              />
            </label>
            <label className="bulletin-contact-form__message">
              Your Feedback
              <textarea
                name="feedback"
                rows="6"
                onChange={() => setSubmitted(false)}
                required
              />
            </label>
            {submitted && (
              <p className="bulletin-contact-form__note" role="status">
                Thank you! Your message has been sent.
              </p>
            )}
            <button type="submit">Submit</button>
          </form>

          <aside className="bulletin-contact-page__details" aria-label="Contact details">
            <section className="bulletin-contact-detail">
              <span className="bulletin-contact-detail__icon" aria-hidden="true">&#9993;</span>
              <div>
                <h2>Mail Us</h2>
                <a href="mailto:alvas.homoeo.insight@gmail.com">alvas.homoeo.insight@gmail.com</a>
              </div>
            </section>
            <section className="bulletin-contact-detail">
              <span className="bulletin-contact-detail__icon" aria-hidden="true">&#9742;</span>
              <div>
                <h2>Phone</h2>
                <a href="tel:+917090639555">+91 70906 39555</a>
                <a href="tel:+919845303492">+91 98453 03492</a>
              </div>
            </section>
            <section className="bulletin-contact-detail">
              <span className="bulletin-contact-detail__icon" aria-hidden="true">&#128205;</span>
              <div>
                <h2>Our Location</h2>
                <address>Alva's Homoeopathic Medical College, Mijar, Shobhavan Campus, Moodbidri, Mangalore - 574225</address>
              </div>
            </section>
          </aside>
        </div>
      </div>
      <BulletinFooter />
    </main>
  )
}

export default BulletinContactUs
