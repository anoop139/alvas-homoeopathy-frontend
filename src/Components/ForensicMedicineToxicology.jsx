import './ForensicMedicineToxicology.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/ForensicMedicineToxicologyDepartment.jpg'
import manuBhatPhoto from '../Images/Dr.ManuBhatForensic.jpg'
import abinaAugustinePhoto from '../Images/Dr.AbinaAugustineForensicNoBorder.jpeg'

const facultyMembers = [
  {
    photo: manuBhatPhoto,
    name: 'Dr. Manu Bhat',
    abbreviation: 'MBK',
    department: 'FORENSIC MEDICINE & TOXICOLOGY',
    qualification: 'B.H.M.S., M.D.(Hom.)',
    designation: 'Professor & H.O.D.',
    experience: '10 years',
    contactNumber: '+91-9886932908',
    email: 'bhatdr22@yahoo.com',
    dateOfBirth: '21-10-1985',
    dateOfJoining: '01-01-2014',
    registrationNumber: 'A-10130',
  },
  {
    photo: abinaAugustinePhoto,
    name: 'Dr. Abina Augustine',
    abbreviation: 'Dr A A',
    department: 'FORENSIC MEDICINE & TOXICOLOGY',
    qualification: 'BHMS, MD (Hom)',
    designation: 'Assistant Professor',
    experience: 'Fresher',
    publication: '10',
    contactNumber: '+91-9496718901',
    email: 'abinaaugustine@gmail.com',
    dateOfBirth: '22-09-1996',
    dateOfJoining: '02-03-2026',
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

function ForensicMedicineToxicology() {
  return (
    <main className="forensic-medicine-toxicology-page">
      <SiteHeader />
      <section
        className="forensic-medicine-toxicology-content"
        aria-labelledby="forensic-medicine-toxicology-title"
      >
        <h1 id="forensic-medicine-toxicology-title">
          Forensic Medicine &amp; Toxicology
        </h1>
        <img
          className="forensic-medicine-toxicology-image"
          src={departmentImage}
          alt="Forensic Medicine and Toxicology department"
        />
        <div className="forensic-medicine-toxicology-details">
          <p>
            It is a department with Forensic science which deals with the
            medico-legal aspects of death, injuries and psychiatric conditions.
            We also deal with the moral principles of a medico which is not just
            taught but made to incorporate within them. In the Toxicology part
            we study the toxic effects of poisons along with treatment and
            medico-legal aspects. It is the subject of second year along with
            the subject of pathology which helps in getting the complete
            knowledge of abnormalities, connecting basics of first year with
            clinical topics of succeeding years. The department also has
            hundreds of poisons, weapons, charts and more. Students learn
            methods of post-mortem through live post-mortems and court visits
            to gain knowledge of legal trials.
          </p>
        </div>
        <section
          className="forensic-medicine-toxicology-faculty-section"
          aria-labelledby="forensic-medicine-toxicology-faculty-title"
        >
          <h2 id="forensic-medicine-toxicology-faculty-title">Faculty Details</h2>
          <div className="forensic-medicine-toxicology-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="forensic-medicine-toxicology-faculty-card" key={name}>
                <img src={photo} alt={name} />
                <h3>{name}</h3>
                <dl>
                  {Object.entries(faculty).map(([key, value]) => (
                    <div key={key}>
                      <dt>{facultyLabels[key]}</dt>
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

export default ForensicMedicineToxicology
