
import './VisionMission.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import visionMissionImage from '../Images/Vission.jpg'

function VisionMission() {
  return (
    <main className="vision-mission-page">
      <SiteHeader />
      <h1 id="about-college-title">VISION & MISSION</h1><br />
      <div className="vision-mission-layout">
        <img
          className="vision-mission-image"
          src={visionMissionImage}
          alt="Vision and mission represented by puzzle pieces"
        />
        <section className="vision-mission-copy" aria-label="Vision and mission statements">
          <article className="vision-mission-statement">
            <h2>Vision</h2>
            <p>
              To impart quality education, moral values, social concern and patriotism to students and mould them into
              excellent professional and credible citizens. To setup center of excellence by offering world class
              education and research opportunities of very high standards and making our students competent and
              ethically strong.
            </p>
          </article>
          <article className="vision-mission-statement">
            <h2>Mission</h2>
            <p>
              To impart holistic education with unparalleled infrastructural facilities and conducive academic ambience,
              at affordable costs, leading to the creation of Centers of Excellence with best brains collectively
              interacting for total personality development and intellectual growth.
            </p>
          </article>
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}

export default VisionMission
