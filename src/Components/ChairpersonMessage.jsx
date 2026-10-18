import './ChairpersonMessage.css'
import SiteHeader from './SiteHeader'

function ChairpersonMessage() {
  return (
    <main className="chairperson-message-page">
      <SiteHeader />
      <section className="chairperson-message" aria-labelledby="chairperson-message-title">
        <div className="chairperson-message__content">
          <p className="chairperson-message__eyebrow">Alva's Education Foundation</p>
          <h1 id="chairperson-message-title">Chairman's Message</h1>
          <article className="chairperson-message__card">
            <p className="chairperson-message__intro">
              Dr. M. Mohan Alva
              <span>Chairman, Alva's Education Foundation (R.)</span>
            </p>
            <div className="chairperson-message__body">
              <p>
                Education can turn information into lasting knowledge, giving young people the understanding and
                confidence to meet the challenges of a rapidly changing world. Alva's Education Foundation seeks
                to support that growth while encouraging integrity and ethical responsibility.
              </p>
              <p>
                The foundation's approach brings together academic learning, cultural awareness, and sports to
                nurture well-rounded students and responsible citizens.
              </p>
              <p>
                Established in 2004, Alva's Homoeopathic Medical College prepares students to connect the
                foundations of homoeopathy with modern sciences through extensive practical training, developing
                capable and compassionate future doctors.
              </p>
            </div>
            <a
              className="chairperson-message__source"
              href="https://alvashomoeopathy.com/chairman.html"
              target="_blank"
              rel="noreferrer"
            >
              Read the original message <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>
    </main>
  )
}

export default ChairpersonMessage
