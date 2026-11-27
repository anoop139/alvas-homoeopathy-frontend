import './ChairpersonMessage.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import ChairPerson from '../Images/ChairPerson.jpg'
function ChairpersonMessage() {
  return (
    <main className="chairperson-message-page">
      <SiteHeader />
      <section className="chairperson-message" aria-labelledby="chairperson-message-title">
        <div className="chairperson-message__content">
          <h1 id="chairperson-message-title">Chairman's Message</h1>
          <img src={ChairPerson} alt="Dr. .M. Mohan Alva" />
          <div className="chairperson-name-card">
            <h2 className="chairperson-name">Dr. M. Mohan Alva</h2>
            <h2 className="chairperson-name">Chairman, Alva's Education Foundation (R.)</h2>
          </div>
          <article className="chairperson-message__card">
            <div className="chairperson-message__body">
            <p className='para'>
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
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default ChairpersonMessage
