import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './EducationalTours.css'

import milkDairyPhoto from '../Images/ToursImages/milkDairy.jpg'
import waterTreatmentPhoto1 from '../Images/ToursImages/water treatment 1.jpg'
import waterTreatmentPhoto2 from '../Images/ToursImages/water treatment 2.jpg'
import primaryHealthCenterPhoto from '../Images/ToursImages/primary health center.jpg'

const tours = [
  {
    id: 'milk-dairy',
    title: 'Milk Dairy',
    photos: [milkDairyPhoto],
    report: 'https://alvashomoeopathy.com/filestr/REPORT%20ON%20VISIT%20TO%20MILK%20DIARY.pdf',
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment',
    photos: [waterTreatmentPhoto1, waterTreatmentPhoto2],
    report: 'https://alvashomoeopathy.com/filestr/REPORT%20ON%20VISIT%20TO%20WATER%20TREATMENT%20CENTER.pdf',
  },
  {
    id: 'primary-health-center',
    title: 'Primary Health Center',
    photos: [primaryHealthCenterPhoto],
    report: 'https://alvashomoeopathy.com/filestr/VISIT%20TO%20PRIMARY%20HEALTH%20CENTER.pdf',
  },
]

function EducationalTours() {
  return (
    <main className="educational-tours-page">
      <SiteHeader />
      <section className="educational-tours-page__content" aria-labelledby="educational-tours-title">
        <header className="educational-tours-page__heading">
          <h1 id="educational-tours-title">Educational Tours</h1>
        </header>

        <nav className="educational-tours-nav" aria-label="Tours of 2025">
          <a href="#tours-2025">Tours of 2025</a>
        </nav>

        <div className="educational-tours-list" id="tours-2025">
          {tours.map((tour) => (
            <article className="educational-tour" id={tour.id} key={tour.id}>
              <h2>{tour.title}</h2>
              <div className="educational-tour__gallery">
                {tour.photos.map((photo, index) => (
                  <img key={photo} src={photo} alt={`${tour.title} tour photo ${index + 1}`} loading="lazy" />
                ))}
              </div>
              <a className="educational-tour__button" href={tour.report} target="_blank" rel="noreferrer">
                More Information
              </a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default EducationalTours
