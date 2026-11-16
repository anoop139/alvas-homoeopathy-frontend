      import './StudentAwardsAchievements.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import awardPhoto1 from '../Images/ac6.jpg'
import awardPhoto2 from '../Images/ac5.jpeg'
import awardPhoto3 from '../Images/ac4.jpeg'
import awardPhoto4 from '../Images/ach1.jpeg'
import awardPhoto5 from '../Images/ach2.jpeg'

const galleryItems = [
  { src: awardPhoto1, alt: 'Students celebrating an achievement at Alva’s Homoeopathic Medical College', featured: true },
  { src: awardPhoto2, alt: 'Student award ceremony at Alva’s Homoeopathic Medical College' },
  { src: awardPhoto3, alt: 'Students recognized for their achievements' },
  { src: awardPhoto4, alt: 'Alva’s students at an awards event' },
  { src: awardPhoto5, alt: 'Students celebrating their achievements' },
]

function StudentAwardsAchievements() {
  return (
    <main className="student-awards-page">
      <SiteHeader />
      <section className="student-awards-content" aria-labelledby="student-awards-title">
        <h1 id="student-awards-title">Awards &amp; Achievements</h1>
        <a
          className="student-awards-pdf-link"
          href="https://alvashomoeopathy.com/files/studentsAchivements.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Student Awards &amp; Achievements
          <span aria-hidden="true">↗</span>
        </a>
        <div className="student-awards-gallery">
          {galleryItems.map((item) => (
            <img
              className={item.featured ? 'student-awards-gallery-featured' : undefined}
              key={item.src}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default StudentAwardsAchievements
