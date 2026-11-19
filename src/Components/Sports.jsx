import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './Sports.css'

import sportsDayPhoto1 from '../Images/SportsImages/asd.JPG'
import sportsDayPhoto2 from '../Images/SportsImages/MSM_3450.JPG'
import sportsDayPhoto3 from '../Images/SportsImages/sdf.JPG'
import foundationSportsDayPhoto from '../Images/SportsImages/fg.JPG'
import sportsDayPhoto5 from '../Images/SportsImages/MSM_3453.JPG'
import sportsDayPhoto6 from '../Images/SportsImages/MSM_3559.JPG'
import sportsDayPhoto7 from '../Images/SportsImages/MSM_3560.JPG'
import sportsDayPhoto8 from '../Images/SportsImages/MSM_3561.JPG'
import sportsDayPhoto9 from '../Images/SportsImages/MSM_3562.JPG'
import sportsDayPhoto10 from '../Images/SportsImages/MSM_3563.JPG'
import sportsDayPhoto11 from '../Images/SportsImages/MSM_3565.JPG'
import sportsDayPhoto12 from '../Images/SportsImages/MSM_3566.JPG'
import annualMeetPhoto2 from '../Images/SportsImages/as4.jpg'
import annualMeetPhoto3 from '../Images/SportsImages/as5.jpg'
import annualMeetPhoto4 from '../Images/SportsImages/as6.jpg'
import annualMeetPhoto5 from '../Images/SportsImages/as7.jpg'
import annualMeetPhoto6 from '../Images/SportsImages/as8.jpg'
import annualMeetPhoto7 from '../Images/SportsImages/as9.jpg'
import annualMeetPhoto8 from '../Images/SportsImages/as1.jpg'
import annualMeetPhoto9 from '../Images/SportsImages/as2.jpg'
import annualMeetPhoto10 from '../Images/SportsImages/as3.jpg'
import annualMeetPhoto11 from '../Images/SportsImages/as13.jpg'
import annualMeetPhoto12 from '../Images/SportsImages/as11.jpg'
import annualMeetPhoto13 from '../Images/SportsImages/as12.jpg'
import weightliftingPhoto1 from '../Images/SportsImages/irrayasports.jpg'
import weightliftingPhoto2 from '../Images/SportsImages/ir1.jpg'

const sportsDayPhotos = [
  { src: sportsDayPhoto1, alt: "Alva's Education Foundation Annual Sports Day photo 1" },
  { src: sportsDayPhoto2, alt: "Alva's Education Foundation Annual Sports Day photo 2" },
  { src: sportsDayPhoto3, alt: "Alva's Education Foundation Annual Sports Day photo 3" },
  {
    src: foundationSportsDayPhoto,
    alt: "Alva's Education Foundation Annual Sports Day photo 4",
  },
  { src: sportsDayPhoto5, alt: "Alva's Education Foundation Annual Sports Day photo 5" },
  { src: sportsDayPhoto6, alt: "Alva's Education Foundation Annual Sports Day photo 6" },
  { src: sportsDayPhoto7, alt: "Alva's Education Foundation Annual Sports Day photo 7" },
  { src: sportsDayPhoto8, alt: "Alva's Education Foundation Annual Sports Day photo 8" },
  { src: sportsDayPhoto9, alt: "Alva's Education Foundation Annual Sports Day photo 9" },
  { src: sportsDayPhoto10, alt: "Alva's Education Foundation Annual Sports Day photo 10" },
  { src: sportsDayPhoto11, alt: "Alva's Education Foundation Annual Sports Day photo 11" },
  { src: sportsDayPhoto12, alt: "Alva's Education Foundation Annual Sports Day photo 12" },
]

const annualMeetPhotos = [
  annualMeetPhoto2,
  annualMeetPhoto3,
  annualMeetPhoto4,
  annualMeetPhoto5,
  annualMeetPhoto6,
  annualMeetPhoto7,
  annualMeetPhoto8,
  annualMeetPhoto9,
  annualMeetPhoto10,
  annualMeetPhoto11,
  annualMeetPhoto12,
  annualMeetPhoto13,
].map((src, index) => ({ src, alt: `Annual sports meet 2024 photo ${index + 1}` }))

const weightliftingPhotos = [
  { src: weightliftingPhoto1, alt: 'Irayya B H at the 21st RGUHS Sports Meet' },
  { src: weightliftingPhoto2, alt: 'Weight lifting at the 21st RGUHS Sports Meet' },
]

function SportsGallery({ photos, className = '' }) {
  return (
    <div className={`sports-gallery ${className}`.trim()}>
      {photos.map(({ src, alt }) => (
        <img key={src} src={src} alt={alt} loading="lazy" />
      ))}
    </div>
  )
}

function Sports() {
  return (
    <main className="sports-page">
      <SiteHeader />
      <section className="sports-page__content" aria-labelledby="sports-title">
        <header className="sports-page__heading">
          <p className="sports-page__eyebrow">Life at Alva's</p>
          <h1 id="sports-title">Sports</h1>
        </header>

        <article className="sports-event">
          <h2>Alva's Education Foundation Annual Sports Day</h2>
          <p>On April 20, 2024, Alva’s Homeopathic Medical College witnessed active participation from all AHMC students.</p>
          <SportsGallery photos={sportsDayPhotos} />
        </article>

        <article className="sports-event">
          <h2>ALVA’S HOMOEOPATHIC MEDICAL COLLEGE ANNUAL SPORTS MEET 2024</h2>
          <p>On the 25th, 26th, and 27th of January 2024, Alva’s Homeopathic Medical College witnessed active participation from all AHMC students.</p>
          <SportsGallery photos={annualMeetPhotos} />
          <a className="sports-event__button" href="https://alvashomoeopathy.com/sportsimages/sportsmeet2023.pdf" target="_blank" rel="noreferrer">
            More Information
          </a>
        </article>

        <article className="sports-event">
          <h2>21ST RGUHS SPORTS MEET 2023 – WEIGHT LIFTING AND BEST PHYSIQUE</h2>
          <p>The competition which was conducted consisted a total of 4 participants and out of these 4, Irayya B H, the student of AHMC bagged the gold medal by lifting snatch 55kg and clean and jerk of 63kg with a total weight of 118kg.</p>
          <SportsGallery photos={weightliftingPhotos} className="sports-gallery--featured" />
          <a className="sports-event__button" href="https://alvashomoeopathy.com/sportsimages/irayya.pdf" target="_blank" rel="noreferrer">
            More Information
          </a>
        </article>
      </section>
      <SiteFooter />
    </main>
  )
}

export default Sports
