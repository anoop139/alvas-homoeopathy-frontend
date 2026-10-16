import './AboutCollage.css'
import SiteHeader from './SiteHeader'
import campusImage from '../Images/CollageCampus.jpg'

function AboutCollage() {
  return (
    <main className="about-college-placeholder">
      <SiteHeader />
      <h1 id="about-college-title">About College</h1>
      <img className="about-college-campus" src={campusImage} alt="Alva's Homeopathic Medical College campus" />
      <p className="AboutCollege">
        As economy is growing, and world is getting flatter, people all over the world are becoming more and more
        conscious about their health &amp; wellbeing. This has driven a larger chunk of population towards exploring
        the use of alternative means of curing aliments, which can be effective yet gentle on their body. Yes, you
        guessed it right it was this vacuum which has placed homoeopathy as the second most popular mode of
        therapeutic intervention practiced worldwide, according to WHO.
      </p>
      <p className="AboutCollege">
        Since 2004, Alva’s Homoeopathic Medical College has turned into one of the finest abodes, for quality
        education in India which aims at providing you with the much-needed launching pad to take off a glorious
        career into this field of health care. Its state-of-the-art infrastructure and an effective curriculum will
        ensure that students will become a true world class Homoeopathic practitioner.
      </p>
      <p className="AboutCollege">
        Alva’s Homoeopathic Medical College, Moodbidri was one more feather in cap of Alva’s Education Foundation
        under Health Science Education towards Holistic Medicine under AYUSH. It’s a dream of a great visionary Dr.
        M. Mohan Alva. Seed of Alva’s Homoeopathic Medical College was sowed during mid of 2004 and First Batch of
        students started this study course in 2005. College started with strength of four students and now reached
        to 749 students. As on today we are proud to have 373 Alumni, serving the suffering mankind at various
        corners of India and at various level right from Private Practice, Post graduate study, Medical Officer at
        Government &amp; as a research scholar.
      </p>
      <p className="AboutCollege">
        Alva’s Homoeopathic Medical College is being preferred by many of the Homoeopathic Doctors from various part
        of the country to provide Homoeopathic Education to their Children and we are grateful to them. The
        encouragement and faith in the institution from our well-wishers boosted our confidence to make progress
        day by day. The support and guidance of our Chairman Dr. M. Mohan Alva and dedication of our committed
        teaching and non-teaching staff and the efforts of students will take this institution to the highest
        pinnacle of imparting the Homoeopathic education to the future generation.
      </p>
      <footer className="about-college-footer">
        <p>Follow Alva’s Homoeopathic Medical College</p>
        <nav className="about-college-footer__social-links" aria-label="Social media">
          <a href="https://m.facebook.com/ahmc.official/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com/ahmc.official?igshid=177ug59wuzplk" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com/OfficialAhmc?s=09" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.youtube.com/channel/UCy8HW-j_mFfEQRf-vnx4oYw" target="_blank" rel="noreferrer">YouTube</a>
        </nav>
      </footer>
    </main>
  )
}

export default AboutCollage
