import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './Celebration.css'

const celebrationImages = Object.fromEntries(
  Object.entries(import.meta.glob('../Images/celebrations/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }))
    .map(([path, imageUrl]) => [path.split('/').pop(), imageUrl]),
)

const celebrations = [
  {
    title: 'World Environmental Day',
    description: "On June 5, 2023, staff and students of Alva's Homoeopathic Medical College in Mijar planted saplings on the college premises. Through this meaningful act, participants not only contributed to the greenery of their surroundings but also raised environmental awareness and celebrated the role of nature in sustaining life.",
    reportUrl: 'https://alvashomoeopathy.com/filestr/ENVIRONMENTAL%20DAY%20-%202023.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['env.jpg', 'env2.jpg'],
  },
  {
    title: 'World Yoga Day',
    description: "At Alva's Nudisiri Vedike in Moodbidri, NSS volunteers of AHMC, Mijar presented a yoga performance celebrating wellness, unity, balance, and inner peace.",
    reportUrl: 'https://alvashomoeopathy.com/filestr/International%20yoga%20day.pdf',
    reportLabel: 'Read the event report (PDF)',
    images: ['yoga.jpg'],
  },
  {
    title: 'World Tuberculosis Day',
    description: 'The seminar covered tuberculosis and homoeopathy. Renowned expert in the field of Homoeopathy, Dr. Manu Bhat, shared his experience and took part in interactive sessions, and first-year BHMS students presented a skit on tuberculosis and homoeopathy.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/WORLD%20TUBERCULOSIS%20DAY.pdf',
    reportLabel: 'Read the related tuberculosis report (PDF)',
    images: ['tr3.jpeg', 'tr4.jpeg', 'tr1.jpeg'],
  },
  {
    title: 'Unicef Day Observation At Govt up School, Mijar',
    reportUrl: 'https://alvashomoeopathy.com/filestr/unicef.pdf',
    reportLabel: 'Read the full event report (PDF)',
    description: 'The Department of Forensic Medicine and Toxicology organized a UNICEF Day observation at Government UP School, Mijar, on December 19, 2023. Second-year BHMS students presented a skit, short talks, and activities to raise awareness of children’s rights and well-being.',
    images: ['unicef2.jpg', 'unicef4.jpg'],
  },
  {
    title: "World Heart Day and World Alzheimer's Day",
    description: 'On September 29, 2023, the Medicine Department held a symposium for medical professionals, students, and guests. The session ran from 10:00 AM to 1:00 PM.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/heartday1.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['heartday1.jpg', 'heartday2.jpg'],
  },
  {
    title: 'World AIDS Day',
    description: 'For World AIDS Day and National Pollution Control Day on December 1 and 2, 2023, final-year students presented posters and performed a skit.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/Aids%20day.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['imag1.jpg', 'img2.jpg'],
  },
  {
    title: 'World Human Rights Day',
    reportUrl: 'https://alvashomoeopathy.com/filestr/humanRights.pdf',
    reportLabel: 'Read the full event report (PDF)',
    description: 'On the occasion of World Human Rights day, talk was given by Mrs Renita D’Souza on 9/12/2022, at Alvas Homoeopathic Medical College, Mijar.',
    images: ['humanright1.jpg', 'humanright2.jpg'],
  },
  {
    title: 'National Pollution Control Day',
    description: 'On December 2, 2022, final-year students helped clean the premises of Shri Vishnumoorthy Temple in Mijar.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/national%20polutiojn%20control.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['pollution1.jpg', 'pollution2.jpg'],
  },
  {
    title: 'Traditional Day 2024',
    description: 'Held on June 11, 2024, Traditional Day brought together students from different regions to showcase their traditions. The day featured a lively cultural atmosphere that photographs can only partly capture.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/traditional%20day.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['trd1.jpg', 'trd2.jpg', 'trd3.jpg'],
  },
  {
    title: "Doctor's Day 2024",
    reportUrl: "https://alvashomoeopathy.com/filestr/Doctor's%20day.pdf",
    reportLabel: 'Read the full event report (PDF)',
    description: 'Alva’s Homoeopathic Medical College celebrated Doctor’s Day on July 1, 2024. Hosted by the Department of Case Taking and Repertory, the program recognized the college’s doctors. Guest Dr. Valarmathy Rachel Fernandes encouraged students to pursue higher education and scientific research.',
    images: ['dd1.jpg', 'dd2.jpg', 'dd3.jpg', 'dd4.jpg', 'dd5.jpg', 'dd6.jpg'],
  },
  {
    title: 'World Breast Feeding Day',
    description: 'The Department of Obstetrics and Gynecology held creative competitions for students and staff to raise awareness about breastfeeding. Activities included clay modeling, poem and slogan writing in English, Kannada, and Hindi, pencil sketching, and comic strips.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/breast%20feeding%201.pdf',
    reportLabel: 'Read event report 1 (PDF)',
    additionalReportUrl: 'https://alvashomoeopathy.com/filestr/breast%20feeding%202.pdf',
    additionalReportLabel: 'Read event report 2 (PDF)',
    images: ['bf1.jpg', 'bf2.jpg', 'bf3.jpg', 'bf4.jpg', 'bf5.jpg', 'bf6.jpg'],
  },
  {
    title: 'World Mosquito Day',
    description: 'On August 22, 2025, the Department of Physiology and Biochemistry held a program and poster-making competition for third-year students. It raised awareness about mosquito-borne diseases and their prevention, and marked World Mosquito Day, observed on August 20.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/world%20mosquito%20day.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['mosquito.jpg', 'mos day.jpg'],
  },
]

function Celebration() {
  return (
    <main className="celebration-page">
      <SiteHeader />
      <section className="celebration-page__content" aria-labelledby="celebration-title">
        <h1 id="celebration-title">Celebrations</h1>
        <nav className="celebration-jump-nav" aria-label="Jump to a celebration">
          {celebrations.map((celebration, index) => (
            <a className="celebration-jump-nav__link" href={`#celebration-${index + 1}`} key={celebration.title}>
              {celebration.title}
            </a>
          ))}
        </nav>
        <div className="celebration-list">
          {celebrations.map((celebration, index) => (
            <article className="celebration-card" id={`celebration-${index + 1}`} key={celebration.title}>
              <div className="celebration-card__copy">
                <h2>{celebration.title}</h2>
                <p>{celebration.description}</p>
              </div>
              <div className="celebration-card__gallery" aria-label={`${celebration.title} photos`}>
                {celebration.images.map((filename, imgIndex) =>
  celebrationImages[filename] ? (
    <img
      key={filename}
      src={celebrationImages[filename]}
      alt={`${celebration.title} photo ${imgIndex + 1}`}
      loading="lazy"
    />
  ) : null
)}
              </div>
              {celebration.reportUrl && (
                <a className="celebration-card__report-link" href={celebration.reportUrl} target="_blank" rel="noreferrer">
                  {celebration.reportLabel}
                </a>
              )}
              {celebration.additionalReportUrl && (
                <a className="celebration-card__report-link" href={celebration.additionalReportUrl} target="_blank" rel="noreferrer">
                  {celebration.additionalReportLabel}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default Celebration
