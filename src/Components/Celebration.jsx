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
    description: 'On June 5, 2023, a proactive initiative was undertaken at Alva’s Homoeopathic Medical College in Mijar to foster environmental consciousness and appreciation for Mother Nature. In an effort to raise awareness among the community, both staff and students of AHMC came together to plant saplings within the college premises. This collaborative effort symbolized a commitment to nurturing the environment and acknowledging the vital role it plays in sustaining life. Through this meaningful act, participants not only contributed to the greenery of their surroundings but also set an inspiring example for others to follow in the pursuit of environmental stewardship.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/ENVIRONMENTAL%20DAY%20-%202023.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['env.jpg', 'env2.jpg'],
  },
  {
    title: 'World Yoga Day',
    description: 'At Alva’s Nudisiri Vedike in Moodbidri, the spirit of wellness and unity permeated the air as International Yoga Day was joyously celebrated. The occasion was marked by a mesmerizing yoga performance presented by the dedicated NSS volunteers of AHMC, Mijar. Against the backdrop of serene surroundings, participants immersed themselves in the ancient art of yoga, embodying its principles of balance, harmony, and inner peace. Their graceful movements and focused energy resonated with the essence of the day, inspiring all present to embrace the practice of yoga for physical and mental well-being. This harmonious gathering served as a testament to the power of collective effort in promoting holistic health and spiritual growth.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/International%20yoga%20day.pdf',
    reportLabel: 'Read the event report (PDF)',
    images: ['yoga.jpg'],
  },
  {
    title: 'World Tuberculosis Day',
    description: 'The seminar covered a wide range of topics related to Tuberculosis. Renowned expert in the field of Homoeopathy, Dr. Manu Bhat presented his views, shared valuable experiences and engaged in interactive sessions with the attendees. A skit on Tuberculosis and Homoeopathy was presented animatedly by students of 1st B.H.M.S.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/WORLD%20TUBERCULOSIS%20DAY.pdf',
    reportLabel: 'Read the related tuberculosis report (PDF)',
    images: ['tr3.jpeg', 'tr4.jpeg', 'tr1.jpeg'],
  },
  {
    title: 'Unicef Day Observation At Govt up School, Mijar',
    reportUrl: 'https://alvashomoeopathy.com/filestr/unicef.pdf',
    reportLabel: 'Read the full event report (PDF)',
    description: 'The Department of Forensic Medicine and Toxicology organized a remarkable UNICEF Day observation at Govt UP School, Mijar, on December 19, 2023. The event aimed to raise awareness and promote the rights and well-being of children worldwide. The highlight of the event was the engaging participation of the second-year BHMS students, who orchestrated an array of programs. They conducted a thought-provoking skit, insightful short presentations, and captivating activities tailored for the school students, fostering an interactive and educational environment.',
    images: ['unicef2.jpg', 'unicef4.jpg'],
  },
  {
    title: "World Heart Day and World Alzheimer's Day",
    description: 'The Medicine Department held a symposium on September 29, 2023, to observe World Heart Day and World Alzheimer’s Day. World Alzheimer’s Day is observed on September 21. The event ran from 10:00 AM to 1:00 PM and brought together medical professionals, students, and esteemed guests.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/heartday1.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['heartday1.jpg', 'heartday2.jpg'],
  },
  {
    title: 'World AIDS Day',
    description: 'On the occasion of World AIDS Day and National Pollution Control Day on December 1 and 2, 2023, final-year students presented posters and performed a skit.',
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
    description: 'Traditional Day 2024 was held on 11th June 2024. Students of various regions showcased their state traditions with great pride and grandiosity. A feast for the eyes, the photographs fail to portray the dynamic, electrifying environment. Students wait eagerly for this event every year. Watch for this space for posts from this event annually.',
    reportUrl: 'https://alvashomoeopathy.com/filestr/traditional%20day.pdf',
    reportLabel: 'Read the full event report (PDF)',
    images: ['trd1.jpg', 'trd2.jpg', 'trd3.jpg'],
  },
  {
    title: "Doctor's Day 2024",
    reportUrl: "https://alvashomoeopathy.com/filestr/Doctor's%20day.pdf",
    reportLabel: 'Read the full event report (PDF)',
    description: 'Alva’s Homoeopathic Medical College celebrated Doctor’s Day on July 1, 2024, hosted by the Department of Case Taking and Repertory. The program began by presenting a token of appreciation to all the doctors of Alva’s Homoeopathic Medical College. Dr. Valarmathy Rachel Fernandes, a Homoeopathic physician in Canada and founder of Rachel’s Homeopathy Inc. Canada and Khaylem Advanced Integrative Aesthetics & Group, India, and Khaylem Institute of Integrative Aesthetics, joined as a guest. She encouraged students to pursue higher education and scientific research.',
    images: ['dd1.jpg', 'dd2.jpg', 'dd3.jpg', 'dd4.jpg', 'dd5.jpg', 'dd6.jpg'],
  },
  {
    title: 'World Breast Feeding Day',
    description: 'The Department of Obstetrics and Gynecology conducted an innovative World Breastfeeding Awareness Day program featuring competitions for students and staff. Its objective was to raise awareness about the importance of breastfeeding through creative activities.',
    details: [
      'Clay Modeling: Participants created clay models depicting breastfeeding scenarios, showcasing their creativity and understanding of the theme.',
      'Poem Writing: Students and staff wrote poems in English, Kannada, and Hindi, expressing the importance and beauty of breastfeeding.',
      'Slogan Writing: Participants created slogans in three languages, conveying the message of breastfeeding awareness.',
      'Pencil Sketching: Beautiful sketches highlighted the special bond between a mother and child during breastfeeding.',
      'Comic Strips: Engaging comic strips conveyed the importance of breastfeeding in an entertaining and informative way.',
    ],
    reportUrl: 'https://alvashomoeopathy.com/filestr/breast%20feeding%201.pdf',
    reportLabel: 'Read event report 1 (PDF)',
    additionalReportUrl: 'https://alvashomoeopathy.com/filestr/breast%20feeding%202.pdf',
    additionalReportLabel: 'Read event report 2 (PDF)',
    images: ['bf1.jpg', 'bf2.jpg', 'bf3.jpg', 'bf4.jpg', 'bf5.jpg', 'bf6.jpg'],
  },
  {
    title: 'World Mosquito Day',
    description: 'World Mosquito Day is observed every year on August 20 to commemorate Sir Ronald Ross’s 1897 discovery that female mosquitoes transmit malaria between humans. On this occasion, the Department of Physiology and Biochemistry at Alva’s Homoeopathic Medical College organized a special program and a digital and live poster-making competition on August 22, 2025, in the Third Year Lecture Hall to raise awareness among students about mosquito-borne diseases and their prevention.',
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
                {celebration.details && (
                  <ul className="celebration-card__details">
                    {celebration.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </div>
              <div className="celebration-card__gallery" aria-label={`${celebration.title} photos`}>
                {celebration.images.map((filename, imgIndex) => (
                  celebrationImages[filename] ? (
                    <img
                      key={filename}
                      src={celebrationImages[filename]}
                      alt={`${celebration.title} photo ${imgIndex + 1}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="celebration-card__missing-image" key={filename} role="img" aria-label={`${filename} unavailable`}>
                      Image unavailable
                    </div>
                  )
                ))}
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
