import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Facilities.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import libraryImage from '../Images/LIBRARY1.jpg'
import hostelImage from '../Images/HOSTEL.jpg'
import sportsImage from '../Images/sports.jpg'
import transportationImage from '../Images/Transport.jpg'

const infrastructureTopics = [
  {
    title: 'TEACHING FACILITIES',
    text: 'Method of teaching is beyond blackboard by use of Audio-visual aids- such as LCD projectors, Slide projectors, DVD, TV, Over Head Projectors etc. Ultimately is to make it more effective, informative and for better understanding.',
  },
  {
    title: 'GUEST LECTURES',
    text: 'In Medical Science Clinical knowledge is more of important hence Guest Lectures, Seminars, Workshops are being conducted by inviting skilled resource persons from outsource.',
  },
  {
    title: 'STUDY MONITORING',
    text: 'Monthly test examinations are being conducted for every subject regularly and monitored over students progress. In each semester examination is being conducted for all the subjects and marks are obtained in the test examination and semester examination together are being calculated for eligibility to appear for university examination.',
  },
  {
    title: 'ACADEMIC COMPETITIONS',
    text: 'By rotation Class Room Seminar are conducted among students for every subject and every class to improve their skill of presentation and explore their hidden characters.',
  },
  {
    title: 'STUDY TOURS',
    text: 'Tours are conducted as part of Curriculum for students associated by Staff to Witness Homoeopathic Manufacturing Pharmaceutical Companies, Homoeopathic Health & Research institutes. Also attending National, International Seminars, Conferences.',
  },
  {
    title: 'PROJECTS',
    text: 'Students are being further trained by allocating Projects of academic nature guided by the staff which is helping the students for overall improvement.',
  },
  {
    title: 'PRACTICAL TRAINING',
    text: 'Practical Training is provided at the student level as per Curriculum at laboratories which as are 100% equipped as per Regulations framed by the University and apex body. Additional training is provided during their internship period. Student witness Post Mortem at District Hospital and Community Health Centre officially.',
  },
  {
    title: 'CLINICAL TRAINING',
    text: 'Clinical Training is provided at various levels, on models to get acquainted with the procedures; at Out Patient Departments set by 22 Clinics, In patient Department; set in to three section own Homoeopathic Hospital, Multispecialty Hospital and Community Health Centre having modern equipment and all the facilities for investigations. Students are being posted and guided by the Medical Personal.',
  },
  {
    title: 'TEACHING UP-GRADATION',
    text: 'Regular monitoring is made on teaching skills, methodology of teaching. Each teacher adopts Teaching Planner as per calendar and microteaching teaching plan. Once in a month monitoring is done interdepartmentally and by the head of institute.',
  },
  {
    title: 'CURRICULAR AND EXTRACURRICULAR ACTIVITIES',
    text: 'As per calendar Curricular and extracurricular Activities are being conducted throughout year in planned manner. Facilities are provided to the students who have keen interest in Sports, Cultural and Art activities. Students have shown achievement at university level competitions.',
  },
  {
    title: 'SOCIAL & HEALTH ACTIVITIES',
    text: 'Regularly Health awareness, medical camps are organised with the help of NSS, Clinical and Community departments. NSS Units is carrying yeomen service in the field of Environment and Health Care sector.',
  },
  {
    title: 'STAFF COMMITTEE',
    text: 'Staff Committee consists of Principal, Staff Coordinator, Four Class Coordinators, Student Welfare Officer and NSS officer. Apart from this Staff Committee there are Twelve Department heads who also actively participate in college activities at every step.',
  },
]

function Facilities() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const sectionIds = [
      'general-infrastructures',
      'clinical-facilities',
      'library',
      'hostel',
      'sports-specialty',
      'transportation',
    ]
    let frame = null
    let jumpFrame = null
    let finalJumpFrame = null

    const updateHashForVisibleSection = () => {
      if (frame !== null) return

      frame = window.requestAnimationFrame(() => {
        frame = null
        const visibleSections = sectionIds
          .map((id) => document.getElementById(id))
          .filter((section) => section && section.getBoundingClientRect().top <= 150)
        const activeSection = visibleSections[visibleSections.length - 1]

        if (!activeSection || window.location.hash === `#${activeSection.id}`) return

        window.history.replaceState(
          window.history.state,
          '',
          `${window.location.pathname}${window.location.search}#${activeSection.id}`,
        )
      })
    }

    const targetId = hash.slice(1) || (pathname === '/general-infrastructures' ? 'general-infrastructures' : '')
    if (targetId) {
      jumpFrame = window.requestAnimationFrame(() => {
        finalJumpFrame = window.requestAnimationFrame(() => {
          const target = document.getElementById(targetId)
          if (target) {
            const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 96
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12
            window.scrollTo({ top, behavior: 'auto' })
          }

          updateHashForVisibleSection()
        })
      })
    } else {
      updateHashForVisibleSection()
    }

    window.addEventListener('scroll', updateHashForVisibleSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateHashForVisibleSection)
      if (frame !== null) window.cancelAnimationFrame(frame)
      if (jumpFrame !== null) window.cancelAnimationFrame(jumpFrame)
      if (finalJumpFrame !== null) window.cancelAnimationFrame(finalJumpFrame)
    }
  }, [hash, pathname])

  return (
    <main className="facilities-page">
      <SiteHeader />
      <section id="general-infrastructures" className="general-infrastructures" aria-labelledby="facilities-title">
        <header className="general-infrastructures__heading">
          <h1 id="facilities-title">GENERAL INFRASTRUCTURES</h1>
        </header>

        <div className="general-infrastructures__grid">
          {infrastructureTopics.map(({ title, text }, index) => (
            <article className="general-infrastructures__card" key={title}>
              <span className="general-infrastructures__number">{String(index + 1).padStart(2, '0')}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <section className="general-infrastructures__future" aria-labelledby="future-plan-title">
          <h2 id="future-plan-title">FUTURE PLAN</h2>
          <p>Commencing Post Graduate Study in Homeopathic Medicine.</p>
          <p>Manufacture of Homoeopathic Medicines.</p>
        </section>

        <section id="clinical-facilities" className="general-infrastructures__clinical" aria-labelledby="clinical-facilities-title">
          <h2 id="clinical-facilities-title">CLINICAL FACILITIES</h2>
          <p>
            Clinical facilities support healthcare education by giving students supervised, hands-on experience
            and a chance to apply what they learn. They include hospitals, clinics, private practices, and research
            facilities.
          </p>
          <p>
            Students care for patients under qualified faculty supervision. The college has an attached general
            multispecialty hospital and is officially attached to the Community Health Centre, Moodbidri, and
            Mount Rosario Charitable Institute, Alangar (Old Age Home).
          </p>
        </section>

        {[
          ['library', 'LIBRARY'],
          ['hostel', 'HOSTEL'],
          ['sports-specialty', 'SPORTS SPECIALTY'],
          ['transportation', 'TRANSPORTATION'],
        ].map(([id, title]) => (
          <section key={id} id={id} className="general-infrastructures__clinical">
            <h2>{title}</h2>
            {id === 'library' ? (
              <>
                <img
                  className="general-infrastructures__library-image"
                  src={libraryImage}
                  alt="Library at Alva's Homeopathic Medical College"
                  loading="lazy"
                />
                <p>
                  College libraries are essential resources for students pursuing their education. They provide access
                  to academic resources, offer a variety of services, and support the core missions of research and
                  education in an education institutions. College libraries guide academics in advancing and
                  sustaining their role as partners in educating, provide collections that incorporate resources in a
                  variety of formats, and provide access to collections aligned with areas of research, curricular foci,
                  or institutional strengths. College libraries help students examine their roles as information
                  creators and sharers, educate users on issues related to economic and sustainable models of scholarly
                  communication, and provide supplemental resources in coordination with textbooks and courses.
                </p>
              </>
            ) : id === 'hostel' ? (
              <>
                <img
                  className="general-infrastructures__library-image"
                  src={hostelImage}
                  alt="Hostel at Alva's Homeopathic Medical College"
                  loading="lazy"
                />
                <p>
                  Separate hostels for both boys and girls are available with spacious rooms. Uninterrupted power supply ensures a hassle-free stay. An efficient housekeeping department in the hostel is always on the toes to maintain the hygiene. The mess here caters a wholesome vegetarian menu.
                </p>
              </>
            ) : id === 'sports-specialty' ? (
              <>
                <img
                  className="general-infrastructures__library-image"
                  src={sportsImage}
                  alt="Sports facilities at Alva's Homeopathic Medical College"
                  loading="lazy"
                />
                <p>Alva’s encourage the students who have keen interest in Sports & all necessary facilities for the practice are provided at every step. Students have shown achievement at University level competitions. </p>
              </>
            ) : id === 'transportation' ? (
              <>
                <img
                  className="general-infrastructures__library-image"
                  src={transportationImage}
                  alt="College transportation at Alva's Homeopathic Medical College"
                  loading="lazy"
                />
                <p>AEF has fleets of buses for easy commuting of students to the campus from the hostels. The college also provides special conveyance for academic tours and travels.</p>
              </>
            ) : null}
          </section>
        ))}
      </section>
      <SiteFooter />
    </main>
  )
}

export default Facilities

