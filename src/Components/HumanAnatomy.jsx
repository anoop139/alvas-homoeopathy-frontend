import './HumanAnatomy.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/HumanAnatomyDepartment.jpg'
import deepakPhoto from '../Images/Dr.DeepakRD.jpeg'
import bharathPhoto from '../Images/Dr.BharathRajCK.jpg'
import kalpanaPhoto from '../Images/Dr.KalpanaKarunakaran.jpg'

const facultyMembers = [
  {
    photo: deepakPhoto,
    name: 'Dr. Deepak R D',
    abbreviation: 'DRD',
    department: 'ANATOMY',
    qualification: 'B.H.M.S., MD(HOM) Organon',
    designation: 'Associate Professor',
    experience: '4 Years',
    publication: '1',
    contactNumber: '+91-8050242485',
    email: 'homoeopathyrd@gmail.com',
    dateOfBirth: '08-05-1992',
    dateOfJoining: '06-01-2020',
    registrationNumber: 'A-12795',
  },
  {
    photo: bharathPhoto,
    name: 'Dr. Bharath Raj C K',
    abbreviation: 'BRK',
    department: 'ANATOMY',
    qualification: 'B.H.M.S., MD(HOM) Repertory',
    designation: 'Assistant Professor',
    experience: '3 Months',
    contactNumber: '+91-9448563806',
    email: 'bharathrajck2@gmail.com',
    dateOfBirth: '03-01-1994',
    dateOfJoining: '15-11-2023',
    registrationNumber: 'A-13897',
  },
  {
    photo: kalpanaPhoto,
    name: 'Dr. Kalpana Karunakaran',
    abbreviation: 'KKK',
    department: 'ANATOMY',
    qualification: 'B.H.M.S., MD(HOM)',
    designation: 'Assistant Professor',
    experience: '4 years & 3 Months',
    contactNumber: '+91-9048466502',
    email: 'kalpuskk61@gmail.com',
    dateOfBirth: '08-10-1988',
    dateOfJoining: '01-07-2024',
    registrationNumber: '10293',
  },
]

const facultyLabels = {
  abbreviation: 'Abbreviation',
  department: 'Department',
  qualification: 'Qualification',
  designation: 'Designation',
  experience: 'Experience',
  publication: 'Publication',
  contactNumber: 'Contact Number',
  email: 'E-Mail',
  dateOfBirth: 'Date of Birth',
  dateOfJoining: 'Date of Joining',
  registrationNumber: 'Registration No.',
}

function HumanAnatomy() {
  return (
    <main className="human-anatomy-page">
      <SiteHeader />
      <section className="human-anatomy-content" aria-labelledby="human-anatomy-title">
        <h1 id="human-anatomy-title">Human Anatomy</h1>
        <img
          className="human-anatomy-image"
          src={departmentImage}
          alt="Human Anatomy department"
        />
        <div className="human-anatomy-details">
          <p>
            Human anatomy is the branch of medical sciences, the basis to study
            all other branches of medicine and surgery. It deals with scientific
            and rational study of macroscopic and microscopic structure of human
            body, to understand normal and abnormal functions of the body for
            prevention, management and cure of various kinds of diseases. This is
            the science which is a basic subject to study various systems of
            medicine like Homoeopathy, Ayurveda, Unani, Siddha and Allopathy and
            various branches of surgery and forensic autopsies. The knowledge of
            human anatomy is achieved by macroscopic and microscopic observations
            by dissection of human organism.
          </p>
          <p>
            Good infrastructure consisting of spacious department which is
            scientifically designed and appropriately equipped and furnished. We
            have well maintained separate demonstration hall, dissection hall,
            cadaver room, histology demonstration platform, lecture hall to
            accommodate 100 students.
          </p>
          <p>
            Anatomy museum containing articulated bone set, isolated bones,
            models, specimen various tissues and organs of the human body,
            sufficient number of charts, diagrams, various models related to
            various tissues, organs and human embryology, 25 medical microscopes
            and 1 binocular electron microscope for histological studies with more
            than sufficient number of slides of various tissues and organs of the
            body are available, mummified body to study topographic and surface
            anatomy, has arrangements for basic study of radiographic anatomy,
            has all the materials and equipment for modern and traditional
            methods of teaching like power point projectors, audio-visual devices
            blackboard, whiteboard etc.
          </p>
        </div>
        <section className="human-anatomy-faculty-section" aria-labelledby="human-anatomy-faculty-title">
          <h2 id="human-anatomy-faculty-title">Faculty Details</h2>
          <div className="human-anatomy-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="human-anatomy-faculty-card" key={name}>
                <img src={photo} alt={name} />
                <h3>{name}</h3>
                <dl>
                  {Object.entries(faculty).map(([key, value]) => (
                    <div key={key}>
                      <dt>
                        {facultyLabels[key] ?? key.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())}
                      </dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}

export default HumanAnatomy
