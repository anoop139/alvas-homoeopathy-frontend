import './AboutCollage.css'
import SiteHeader from './SiteHeader'
import campusImage from '../Images/CollageCampus.jpg'

function AboutCollage() {
  return (
    <main className="about-college-placeholder">
      <SiteHeader />
      <h1 id="about-college-title">About College</h1>
      <img className="about-college-campus" src={campusImage} alt="Alva's Homeopathic Medical College campus" />
    </main>
  )
}

export default AboutCollage
