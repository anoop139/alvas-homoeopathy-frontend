import './BulletinAbout.css'
import editorPortrait from '../../../Images/InsightChiefEditor.png'
import aboutImage from '../../../Images/InsightAbout.jpg'
import BulletinFooter from './BulletinFooter'

function BulletinAbout() {
  return (
    <section className="bulletin-about" aria-labelledby="bulletin-about-title">
      <div className="bulletin-about__content">
        <p className="bulletin-about__eyebrow">Homoeo Insight</p>
        <div className="bulletin-about__intro">
          <div className="bulletin-about__intro-copy">
            <h1 id="bulletin-about-title">About Us</h1>
            <p className="bulletin-about__lead">
              Alva’s Homoeopathic Medical College created this digital bulletin to
              keep its community informed, connected and involved in campus life.
            </p>
            <p>
              Homoeo Insight brings together college announcements, academic news,
              upcoming events and student achievements. It is a space for sharing
              information, exchanging ideas and building stronger connections across
              the college community.
            </p>
          </div>
          <img
            className="bulletin-about__intro-image"
            src={aboutImage}
            alt="Alva’s Homoeopathic Medical College featured in Homoeo Insight"
          />
        </div>
        

        <section className="bulletin-about__editor" aria-labelledby="bulletin-editor-title">
          <div className="bulletin-about__editor-copy">
            <p className="bulletin-about__eyebrow">A message from our editor</p>
            <h2 id="bulletin-editor-title">Chief Editor’s Message</h2>
            <p>
              I'm delighted to introduce Alva's Homoeo insights. An e-bulletin
              focusing on documenting and communicating the diverse range of
              activities and accomplishments within our college community.
            </p>
            <p>
              Step into the heart of campus life with us. We're committed to
              publishing every three months, covering everything from riveting cultural
              showcases to adrenaline-pumping sports events and enlightening
              CME sessions. We bring you the pulse of our college.
            </p>
            <p>
              I also thank the management for their dedication to fostering a
              nurturing learning environment that has been instrumental in our
              collective success.
            </p>
            <p>Thank you.</p>
            <p className="bulletin-about__signature">Dr. Anitha S.K</p>
          </div>
          <figure className="bulletin-about__portrait-card">
            <img
              className="bulletin-about__editor-portrait"
              src={editorPortrait}
              alt="Dr. Anitha S.K, Chief Editor"
            />
            <figcaption>Dr. Anitha S.K <span>Chief Editor</span></figcaption>
          </figure>
        </section>

        <p className="bulletin-about__contact">
          Bulletin enquiries: <a href="mailto:ebulletinahmc@gmail.com">ebulletinahmc@gmail.com</a>
        </p>
      </div>
      <BulletinFooter />
    </section>
  )
}

export default BulletinAbout
