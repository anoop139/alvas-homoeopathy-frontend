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
    title: 'RISE Webinar by CCRH',
    date: '21 November 2024', images: ['rise-webinar.jpg'],
    summary: 'A research webinar on clinical trial phases, preclinical studies, and other research study designs.',
    table: [
      ['Topic', 'Designing a research study – III: clinical trial phases, preclinical study, and other study designs, including quasi-experimental, factorial, N of 1, and pre- and post-study designs.'],
      ['Speaker', 'Dr. Hima Bindu, Research Officer, CCRH'],
      ['Time', '2:00 PM–3:30 PM'],
      ['Student attendees', '145 (65 male, 80 female)'],
      ['Staff attendees', '8 (2 male, 6 female)'],
    ],
  },
  {
    title: 'Faculty Development Program: Mastering Instrumentation in Biomedical Research',
    date: '22–23 August 2024',
    images: ['fdp1.jpg', 'fdp2.jpg', 'fdp3.jpg', 'fdp4.jpg', 'fdp5.jpg'],
    description: 'A two-day faculty development program at Sanidya Hall, St. Aloysius College, Mangalore, organized by the School of Life Sciences, St. Aloysius College, in collaboration with Alva’s Homoeopathic Medical College.',
    details: [
      'Day 1 included workshops on UV-Vis spectrophotometry, plant DNA isolation, DPPH free radical scavenging assay, and thin layer chromatography.',
      'Day 2 covered polymerase chain reaction (PCR) and agarose gel electrophoresis, followed by the valedictory function.',
      'The hands-on sessions helped participants build practical skills in biomedical research instrumentation.',
    ],
    additionalDetails: [
      'Day 1, 22 August: Breakfast was served from 8:45–9:10 AM. The inaugural session began at 9:15 AM in Sanidya Hall.',
      'Welcome address: Mr. Sreejesh P.C., convenor and program coordinator, and Head of the Biotechnology Department. Inaugural address: Rev. Dr. Praveen Martis SJ, Vice Chancellor, St. Aloysius College. Opening remarks: Dr. Herald Roshan Pinto, Principal, AHMC. Vote of thanks: Dr. Jiji George, Organizing Secretary.',
      '10:00 AM–1:15 PM workshop: participants attended sessions in the Biotechnology and Microbiology laboratories. Mr. Sreejesh P.C. led sessions on characterization of bioactives in homoeopathic medicine using a UV-Vis spectrophotometer, and isolation of DNA from plants.',
      'After lunch (1:15–2:15 PM), Dr. Nagaraj led the DPPH free radical scavenging assay and thin layer chromatography session from 2:15–4:45 PM. High tea and the conclusion of Day 1 followed at 4:45 PM.',
      'Day 2, 23 August: after breakfast, sessions from 9:00 AM–3:30 PM covered polymerase chain reaction (PCR), led by Dr. Jiji George, and agarose gel electrophoresis, led by Dr. Santhosh Goveas.',
      'High tea was at 3:30 PM. The valedictory function ran from 3:50–4:30 PM, presided over by Pro Vice Chancellor Rev. Dr. Melwyn D’Cunha. Dr. Shreelalitha Suvarna gave the welcome address; Dr. Adarsha Gowda gave the opening remarks.',
      'Feedback was given by Dr. Sudhamathi and Dr. Indu O.S. Certificates were distributed by Rev. Dr. Melwyn D’Cunha and Dr. Herald Roshan Pinto. Dr. Nagaraj delivered the vote of thanks, followed by the National Anthem at 4:30 PM.',
      'The hands-on sessions provided practical experience and theoretical knowledge in biomedical research instrumentation.',
    ],
  },
  {
    title: 'Fire and Safety Mock Drill', date: '31 May 2024', images: ['fire2.jpg', 'fire-sw20.jpg', 'fire3.jpg', 'fire-sw10.jpg'],
    description: 'The college conducted a fire and safety mock drill with Thaksheel Fire and Safety Equipment in association with the Hindustan Institute of Safety Management. The drill prepared staff, workers, and students for fire emergencies, evacuation, and rescue operations.',
    details: ['Venue: Alva’s Homoeopathic Medical College', 'Fire and safety officers Mr. Harish H.P. and Mr. Nobert Rodrigues led the awareness session and drill.', 'The college fire and safety committee, staff, and student council monitored the evacuation exercise.'],
  },
  {
    title: 'Clinical Meeting', date: '24 April 2024', images: ['clinical1.jpg', 'clinical2.jpg'],
    description: 'Final-year students discussed a case they had prepared under the guidance of intern Ms. Rajalakshmi. The group worked through the case from diagnosis to remedy selection. Dr. Shriraksha B. and Dr. Sasitharan moderated the meeting, which concluded with Phosphorus as the prescribed remedy.',
    details: ['Venue: Final-year classroom', 'An evaluation report was collected from participants at the end of the meeting.'],
  },
  { title: 'CME: Homoeopathic Approach in Paediatric Cases and Hair Loss', date: '2 July 2023', images: ['paediatric1.jpg', 'paediatric2.jpg', 'paediatric3.jpg'], description: 'The CME covered how to reach the similimum in paediatric cases, microscopic assessment of hair, different types of hair loss, and homoeopathic management.', details: ['Speaker: Dr. Sanjay Panicker', 'Audience: Faculty, students, and interns', 'Time: 10:00 AM–2:00 PM'] },
  { title: 'CME: Secrets to Build a Roaring Clinical Practice', date: '18 June 2023', images: ['clinical-practice1.jpg', 'clinical-practice2.jpg'], description: 'A continuing medical education session on building a successful clinical practice.', details: ['Speaker: Dr. Alex Kurian', 'Audience: Faculty and interns', 'Time: 9:00 AM–2:00 PM'] },
  { title: 'CME: Clinical Tips for Beginners', date: '4 May 2023', images: ['clinical-tips1.jpg', 'clinical-tips2.jpg'], description: 'A CME session sharing clinical tips for beginners.', details: ['Speaker: Dr. Shreepad Hegde', 'Audience: Faculty, students, and interns', 'Time: 11:30 AM–4:30 PM'] },
  { title: 'CME: Homoeopathic Approach in Special Children', date: '2 April 2023', images: ['special-children1.jpg', 'special-children2.jpg'], description: 'A continuing medical education session on the homoeopathic approach to caring for special children.', details: ['Speaker: Dr. Guruprasad M.N.', 'Audience: Faculty, students, and interns', 'Time: 11:00 AM–1:00 PM'] },
  { title: 'CME: Clinic and Clinical Tips', date: '26 March 2023', images: ['clinic-tips1.jpg', 'clinic-tips2.jpg'], description: 'A continuing medical education session on clinic practice and clinical tips.', details: ['Speaker: Dr. Aneesh Kumar S.', 'Time: 10:00 AM–12:00 PM'] },
  { title: 'Session: Mental Health—Challenges and Needs', date: '25 February 2023', images: ['mental-health1.jpg', 'mental-health2.jpg'], description: 'A session exploring mental health challenges and needs.', details: ['Speaker: Dr. Manas', 'Audience: Students and faculty', 'Time: 9:00 AM–1:00 PM'] },
  { title: 'CME: Clinical Tips for Beginners and Use of Mother Tincture in Daily Practice', date: '12 February 2023', images: ['mother-tincture1.jpg', 'mother-tincture2.jpg'], description: 'A CME session on beginner clinical tips and the use of mother tincture in daily practice.', details: ['Speaker: Dr. Ambily B.', 'Audience: Faculty and interns', 'Time: 10:00 AM–12:00 PM'] },
  { title: 'Workshop: Building a Homoeopathic Tool Kit—An Indo-German Perspective', date: '21 January 2023', images: ['tool-kit1.jpg', 'tool-kit2.jpg'], description: 'A workshop presenting an Indo-German perspective on building a homoeopathic tool kit.', details: ['Speaker: Dr. Nicola Coutinho', 'Audience: Faculty, students, and interns', 'Time: 9:00 AM–4:00 PM'] },
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
          <h2 id="provenio-title">Provenio 2.0</h2>
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
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}

export default Events
