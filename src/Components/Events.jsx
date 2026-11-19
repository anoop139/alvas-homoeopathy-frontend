import { useState } from 'react'
import './Events.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

import riseWebinarImage from '../Images/rise-webinar.jpg'
import fdpImage1 from '../Images/fdp1.jpg'
import fdpImage2 from '../Images/fdp2.jpg'
import fdpImage3 from '../Images/fdp3.jpg'
import fdpImage4 from '../Images/fdp4.jpg'
import fdpImage5 from '../Images/fdp5.jpg'
import fireImage1 from '../Images/fire2.jpg'
import fireImage2 from '../Images/fire-sw20.jpg'
import fireImage3 from '../Images/fire3.jpg'
import fireImage4 from '../Images/fire-sw10.jpg'
import clinicalImage1 from '../Images/clinical1.jpg'
import clinicalImage2 from '../Images/clinical2.jpg'
import paediatricImage1 from '../Images/paediatric1.jpg'
import paediatricImage2 from '../Images/paediatric2.jpg'
import paediatricImage3 from '../Images/paediatric3.jpg'
import practiceImage1 from '../Images/clinical-practice1.jpg'
import practiceImage2 from '../Images/clinical-practice2.jpg'
import clinicalTipsImage1 from '../Images/clinical-tips1.jpg'
import clinicalTipsImage2 from '../Images/clinical-tips2.jpg'
import specialChildrenImage1 from '../Images/special-children1.jpg'
import specialChildrenImage2 from '../Images/special-children2.jpg'
import clinicTipsImage1 from '../Images/clinic-tips1.jpg'
import clinicTipsImage2 from '../Images/clinic-tips2.jpg'
import mentalHealthImage1 from '../Images/mental-health1.jpg'
import mentalHealthImage2 from '../Images/mental-health2.jpg'
import motherTinctureImage1 from '../Images/mother-tincture1.jpg'
import motherTinctureImage2 from '../Images/mother-tincture2.jpg'
import toolKitImage1 from '../Images/tool-kit1.jpg'
import toolKitImage2 from '../Images/tool-kit2.jpg'

const provenioImages = Object.entries(import.meta.glob('../Images/provenio/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' }))
  .sort(([firstPath], [secondPath]) => {
    const sectionOrder = ['PO-', 'D1S1-', 'OF-', 'PiP-', 'CU-', 'D2S1-', 'D2S2-', 'VL-']
    const firstName = firstPath.split('/').pop()
    const secondName = secondPath.split('/').pop()
    const firstSection = sectionOrder.findIndex((prefix) => firstName.startsWith(prefix))
    const secondSection = sectionOrder.findIndex((prefix) => secondName.startsWith(prefix))

    if (firstSection !== secondSection) return firstSection - secondSection
    return Number(firstName.match(/-(\d+)/)?.[1]) - Number(secondName.match(/-(\d+)/)?.[1])
  })
  .map(([path, imageUrl]) => ({ path, imageUrl }))

const provenioSections = [
  { title: 'Inauguration', prefix: 'PO-' },
  { title: 'DAY 1, session 1 - guest speaker', prefix: 'D1S1-' },
  { title: 'OPEN FORUM', prefix: 'OF-' },
  { title: 'POSTER PRESENTATION', prefix: 'PiP-' },
  { title: 'Cultural show', prefix: 'CU-' },
  { title: 'DAY 2, session 1 - guest speaker', prefix: 'D2S1-' },
  { title: 'DAY 2, session 2 - guest speaker', prefix: 'D2S2-' },
  { title: 'Valedictory', prefix: 'VL-' },
].map((section) => ({
  ...section,
  images: provenioImages.filter(({ path }) => path.split('/').pop().startsWith(section.prefix)),
})).filter((section) => section.images.length > 0)

const hasProvenioPhotos = provenioSections.length > 0

const eventImages = {
  'rise-webinar.jpg': riseWebinarImage,
  'fdp1.jpg': fdpImage1,
  'fdp2.jpg': fdpImage2,
  'fdp3.jpg': fdpImage3,
  'fdp4.jpg': fdpImage4,
  'fdp5.jpg': fdpImage5,
  'fire2.jpg': fireImage1,
  'fire-sw20.jpg': fireImage2,
  'fire3.jpg': fireImage3,
  'fire-sw10.jpg': fireImage4,
  'clinical1.jpg': clinicalImage1,
  'clinical2.jpg': clinicalImage2,
  'paediatric1.jpg': paediatricImage1,
  'paediatric2.jpg': paediatricImage2,
  'paediatric3.jpg': paediatricImage3,
  'clinical-practice1.jpg': practiceImage1,
  'clinical-practice2.jpg': practiceImage2,
  'clinical-tips1.jpg': clinicalTipsImage1,
  'clinical-tips2.jpg': clinicalTipsImage2,
  'special-children1.jpg': specialChildrenImage1,
  'special-children2.jpg': specialChildrenImage2,
  'clinic-tips1.jpg': clinicTipsImage1,
  'clinic-tips2.jpg': clinicTipsImage2,
  'mental-health1.jpg': mentalHealthImage1,
  'mental-health2.jpg': mentalHealthImage2,
  'mother-tincture1.jpg': motherTinctureImage1,
  'mother-tincture2.jpg': motherTinctureImage2,
  'tool-kit1.jpg': toolKitImage1,
  'tool-kit2.jpg': toolKitImage2,
}

const events = [
  {
    title: 'RISE WEBINAR BY CCRH',
    date: '21/11/2024',
    images: ['rise-webinar.jpg'],
    table: [
      ['Topic', 'Designing a research study- III, Clinical Trial – Phases, Preclinical study and other study designs (Quasi experimental, Factorial, N of 1, Pre and Post study)'],
      ['Speaker', 'Dr. Hima Bindu, Research Officer, CCRH'],
      ['Date', '21/11/2024'],
      ['Time', '2:00 PM to 3:30 PM'],
      ['Total Students Attendees', '145'],
      ['Male Students', '65'],
      ['Female Students', '80'],
      ['Staff (Male)', '02'],
      ['Staff (Female)', '06'],
    ],
  },
  {
    title: 'Faculty development program on “Mastering Instrumentation in Biomedical Research”',
    date: 'August 22–23, 2024',
    images: ['fdp1.jpg', 'fdp2.jpg', 'fdp3.jpg', 'fdp4.jpg', 'fdp5.jpg'],
    details: [
      'Dates: August 22–23, 2024',
      'Venue: Sanidya Hall, St. Aloysius College, Mangalore',
      'Organized by: School of Life Sciences, St. Aloysius College, Mangalore, in collaboration with Alva’s Homoeopathic Medical College (AHMC), Mangalore',
      'DAY 1: AUGUST 22, 2024',
      '8:45 - 9:10 AM: Breakfast',
      'Inaugural Session (9:15 AM). Venue: Sanidya Hall',
      'Welcome Address: Mr. Sreejesh P.C., Convenor and Program Coordinator of FDP, HoD of Biotechnology Department',
      'Inaugural Address: Rev. Dr. Praveen Martis SJ, Vice Chancellor, St. Aloysius College',
      'Opening Remarks: Dr. Herald Roshan Pinto, Principal, AHMC',
      'Vote of Thanks: Dr. Jiji George, Organizing Secretary',
      '10:00 AM - 1:15 PM: Workshop. Participants were divided into two batches and attended sessions in the Biotechnology and Microbiology labs.',
      'Batch 1: Characterization of Bioactives in Homoeopathic Medicine Using UV-Vis Spectrophotometer. Resource person: Mr. Sreejesh P.C., Assistant Professor, Stage III, Dept. of Biotechnology, St. Aloysius College. Details: Principle explanation, demonstration, and hands-on experience. Participants had the opportunity to clear doubts.',
      'Isolation of DNA from Plants. Resource person: Mr. Sreejesh P.C., Assistant Professor, Stage III, Dept. of Biotechnology, St. Aloysius College. Details: Practical session where participants isolated DNA in small groups.',
      '1:15 - 2:15 PM: Lunch Break. 2:15 - 4:45 PM: DPPH Free Radical Scavenging Assay and Thin Layer Chromatography. Resource person: Dr. Nagaraj, Assistant Professor, Dept. of Microbiology. Details: Theory followed by hands-on experience.',
      '4:45 PM: High Tea and Conclusion of Day 1',
      'DAY 2: AUGUST 23, 2024',
      '8:45 - 9:00 AM: Breakfast. 9:00 AM - 3:30 PM: Polymerase Chain Reaction (PCR). Resource person: Dr. Jiji George, Assistant Professor, Stage III, Dept. of Biotechnology, St. Aloysius College.',
      'Agarose Gel Electrophoresis. Resource person: Dr. Santhosh Goveas, Assistant Professor, Stage III, Dept. of Biotechnology, St. Aloysius College.',
      '3:30 - 3:45 PM: High Tea',
      '3.50 - 4:30 PM: Valedictory Function. Presided by: Pro VC, Rev. Dr Melwyn D’Cunha',
      'Welcome Address: Dr. Shreelalitha Suvarna, Co convener, FDP',
      'Opening Remarks: Dr Adarsha Gowda, chairperson of entrepreneurship and consultancy cell, St Aloysius',
      'Presidential remarks: Rev Dr Melwyn D’Cunha',
      'Feedback: Dr. Sudhamathi, Professor, AHMC and Dr. Indu O S, Associate Professor and Coordinator of Research Committee, AHMC',
      'Certificate Distribution: Rev Dr Melwyn D’Cunha and Dr. Herald Roshan Pinto',
      'Vote of Thanks: Dr Nagaraj, Co organizing secretary, FDP',
      '4:30 PM: National Anthem',
      'The FDP was successfully conducted with active participation from all staff members. The sessions provided valuable hands-on experience and theoretical knowledge, enhancing the skills of the participants in biomedical research instrumentation.',
    ],
  },
  {
    title: 'Workshop on the Topic “Fire and safety mock drill”',
    date: '31/05/2024',
    images: ['fire2.jpg', 'fire-sw20.jpg', 'fire3.jpg', 'fire-sw10.jpg'],
    description: 'FIRE AND SAFETY MOCK DRILL CONDUCTED ON 31/5/2024. Alvas Homoeopathic Medical College conducted fire and safety mock drill on 31/05/2024 by Thaksheel fire and safety equipments in association with Hindustan Institute of Safety Management, Manglore, Karnataka, a branch of NIFS. Fire and safety officer Mr Harish HP and Mr Nobert Rodrigues along with their staffs gave awareness and mock drill on fire accident for faculty staff and workers. All faculty participated in the drill. Date – 31/05/2024. Name of the event-Fire and safety mock drill. Venue – AHMC. Mock drill was carried out in college to prepare the staffs and students for the fire risk reduction programme. The purpose to organise mock drill was to check the readiness of staff, workers and students to face any fire emergency and also to make students and staff aware about fire fighting rescue operation. A group of teachers and students volunteered to guide and assist the students in the mock fire and evacuation drill. The fire and safety mock drill was conducted in the assembly area. Mock drill was monitored by fire and safety committee chairperson, members and student council of Alvas Homoeopathic Medical College.',
  },
  {
    title: 'Workshop on the Topic Clinical Meeting April 2024',
    date: '24 April 2024',
    images: ['clinical1.jpg', 'clinical2.jpg'],
    description: 'A clinical meeting was conducted on 24th of April in final year classroom at 11:00 AM. The case was distributed among students priorly and all had individually worked out according to the directives given by the guide Ms Rajalakshmi (Intern). All directives were discussed well, starting from disease diagnosis till the final choice of remedy. The meeting was moderated by Dr Shriraksha B and Dr Sasitharan. The case discussion was concluded by the guide and Phosphorus was the remedy prescribed. Evaluation report was taken from all the participants at the end of the clinical meeting.',
  },
  {
    title: 'CME on the Topics “How to reach similimum in paediatric cases & Video microscopic assessment of Hair, different types of Hair loss and Homoeopathic management”',
    date: '02/07/2023',
    images: ['paediatric1.jpg', 'paediatric2.jpg', 'paediatric3.jpg'],
    description: 'on 02/07/2023 by Dr Sanjay Panicker for Faculty, Students and Interns from 10am-2pm.',
  },
  {
    title: 'CME on the topic “Secrets to build a roaring Clinical Practice”',
    date: '18/06/2023',
    images: ['clinical-practice1.jpg', 'clinical-practice2.jpg'],
    description: 'on 18/06/2023 by Dr Alex Kurian for Faculty and Interns from 9am-2pm.',
  },
  {
    title: 'CME on the topic “Clinical Tips for Beginners”',
    date: '04/05/2023',
    images: ['clinical-tips1.jpg', 'clinical-tips2.jpg'],
    description: 'on 04/05/2023 by Dr Shreepad Hegde for Faculty, Students and Interns from 11.30am-4.30pm.',
  },
  {
    title: 'CME on the topic “Homoeopathic Approach in Special Children”',
    date: '02/04/2023',
    images: ['special-children1.jpg', 'special-children2.jpg'],
    description: 'on 02/04/2023 by Dr Guruprasad M N for Faculty, Students and Interns from 11.00am-1.00pm.',
  },
  {
    title: 'CME on the topic “Clinic and Clinical Tips”',
    date: '26/03/2023',
    images: ['clinic-tips1.jpg', 'clinic-tips2.jpg'],
    description: 'on 26/03/2023 by Dr Aneesh Kumar S for Faculty and Interns from 10.00am-12.00pm.',
  },
  {
    title: 'Session on the topic “Mental Health- Challenges and Needs”',
    date: '25/02/2023',
    images: ['mental-health1.jpg', 'mental-health2.jpg'],
    description: 'by Dr Manas on 25/02/2023 from 9.00am to 1.00pm for Students and Faculty.',
  },
  {
    title: 'CME on the topic “Clinical tips for beginners and use of Mother Tincture in Daily Practice”',
    date: '12/02/2023',
    images: ['mother-tincture1.jpg', 'mother-tincture2.jpg'],
    description: 'on 12/02/2023 by Dr Ambily B for Faculty and Interns from 10.00am-12.00pm.',
  },
  {
    title: 'Workshop on the Topic “Building a Homoeopathic Tool Kit - an Indo-German perspective”',
    date: '21/01/2023',
    images: ['tool-kit1.jpg', 'tool-kit2.jpg'],
    description: 'on 21/01/2023 by Dr Nicola Coutinho for Faculty, Students and Interns from 9.00am-4.00pm.',
  },
]

function Events() {
  const [expandedEvents, setExpandedEvents] = useState({})
  const [provenioArchiveExpanded, setProvenioArchiveExpanded] = useState(false)
  const [provenioArchiveLoaded, setProvenioArchiveLoaded] = useState(false)

  const toggleEvent = (title) => {
    setExpandedEvents((current) => ({ ...current, [title]: !current[title] }))
  }

  return (
    <main className="events-page">
      <SiteHeader />
      <section className="events-content" aria-labelledby="events-title">
        <h1 id="events-title">Events</h1>
        <div className="events-list">
          {events.map((event) => {
            const expanded = Boolean(expandedEvents[event.title])
            const hasMore = Boolean(event.table || event.details || event.additionalDetails || event.images?.length > 1)
            const imageUrl = (filename) => eventImages[filename]
            return (
              <article className="event-card" key={event.title}>
                {event.images?.[0] && <img className="event-card__image" src={imageUrl(event.images[0])} alt={`${event.title} event`} loading="lazy" />}
                <div className="event-card__copy">
                  <p className="event-card__date">{event.date}</p>
                  <h2>{event.title}</h2>
                  {event.description && <p className="event-card__description">{event.description}</p>}
                  {event.summary && <p className="event-card__description">{event.summary}</p>}
                  {expanded && event.table && (
                    <div className="event-table-wrap"><table className="event-table"><tbody>
                      {event.table.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}
                    </tbody></table></div>
                  )}
                  {expanded && event.details && <ul className="event-details">{event.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
                  {expanded && event.additionalDetails && <ul className="event-details event-additional-details">{event.additionalDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
                  {expanded && event.images?.length > 1 && (
                    <div className="event-card__gallery" aria-label={`${event.title} photos`}>
                      {event.images.slice(1).map((filename) => <img key={filename} src={imageUrl(filename)} alt={`${event.title} event photo`} loading="lazy" />)}
                    </div>
                  )}
                  {hasMore && <button className="event-more-button" type="button" aria-expanded={expanded} onClick={() => toggleEvent(event.title)}>{expanded ? 'See less' : 'See more'}</button>}
                </div>
              </article>
            )
          })}
        </div>
        <section className="events-archive" aria-labelledby="provenio-title">
          <p className="events-eyebrow">National Homoeopathic Conference 2023</p>
          <h2 id="provenio-title">Provenio</h2>
          <div className="provenio-topics">{['Inauguration', 'Guest speaker sessions', 'Open forum', 'Poster presentation', 'Cultural show', 'Valedictory'].map((topic) => <span key={topic}>{topic}</span>)}</div>
          {hasProvenioPhotos && (
            <div
              id="provenio-photo-grid"
              className={`provenio-photo-archive${provenioArchiveExpanded ? ' is-open' : ''}`}
              aria-label="Provenio 2.0 conference photos"
              aria-hidden={!provenioArchiveExpanded}
            >
              <div className="provenio-photo-archive__inner">
                {provenioArchiveLoaded && provenioSections.filter((section) => section.images.length > 0).map((section) => (
                  <section className="provenio-photo-section" key={section.prefix} aria-label={section.title}>
                    <h3>{section.title}</h3>
                    <div className="provenio-photo-grid">
                      {section.images.map(({ path, imageUrl }, index) => (
                        <img key={path} src={imageUrl} alt={`${section.title} photo ${index + 1}`} loading="lazy" />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}
          <button
            className="event-more-button provenio-archive-button"
            type="button"
            aria-expanded={provenioArchiveExpanded && hasProvenioPhotos}
            aria-controls={hasProvenioPhotos ? 'provenio-photo-grid' : undefined}
            disabled={!hasProvenioPhotos}
            onClick={() => {
              setProvenioArchiveLoaded(true)
              setProvenioArchiveExpanded((expanded) => !expanded)
            }}
          >
            {!hasProvenioPhotos ? 'No Provenio photos available' : provenioArchiveExpanded ? 'Hide photos' : 'View Provenio 2.0 Photo Archive (152 photos)'}
          </button>
          <a className="provenio-report-link" href="https://alvashomoeopathy.com/files/PROVENIO%202.0.pdf" target="_blank" rel="noreferrer">
            View Provenio Report
          </a>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}

export default Events
