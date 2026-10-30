import './GeneralInfrastructures.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

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

function GeneralInfrastructures() {
  return (
    <main className="facilities-page">
      <SiteHeader />
      <section className="general-infrastructures" aria-labelledby="general-infrastructures-title">
        <header className="general-infrastructures__heading">
          <h1 id="general-infrastructures-title">GENERAL INFRASTRUCTURES</h1>
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

        <section className="general-infrastructures__clinical" aria-labelledby="clinical-facilities-title">
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
      </section>
      <SiteFooter />
    </main>
  )
}

export default GeneralInfrastructures
                                                                                                                                                                                    
