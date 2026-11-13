import './GynaecologyObstetrics.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/GYNAECOLOGYANDOBSTETRICS.jpg'
import anjaliPhoto from '../Images/Dr.AnjaliS.jpg'
import supriyaPhoto from '../Images/Dr.Supriya.M.Hiremath.jpg'
import hanaPhoto from '../Images/Dr.Hana.jpg'

const facultyMembers = [
  {
    photo: anjaliPhoto,
    name: 'Dr. Anjali S',
    abbreviation: 'ASA',
    department: 'Obstetrics & Gynaecology',
    qualification: 'B.H.M.S., M.D. (Hom.)',
    designation: 'Professor & Head of the Department',
    experience: '6 Years',
    publications: '5',
    contact: '+91-9384160958',
    email: 'anjalisujatha80@gmail.com',
    dateOfBirth: '04-05-1991',
    dateOfJoining: '20-08-2022',
    registration: '10745',
  },
  {
    photo: supriyaPhoto,
    name: 'Dr. Supriya Mahalingayya Hiremath',
    abbreviation: 'SMH',
    department: 'Obstetrics & Gynaecology',
    qualification: 'B.H.M.S., M.D. (Hom.)',
    designation: 'Assistant Professor',
    experience: '1 Year 2 Months',
    contact: '+91-9900444957',
    email: 'hp229693@gmail.com',
    dateOfBirth: '18-11-1988',
    dateOfJoining: '01-01-2024',
    registration: 'A-11992',
  },
  {
    photo: hanaPhoto,
    name: 'Dr. Hana Shetty',
    abbreviation: 'HNS',
    department: 'Obstetrics & Gynaecology',
    qualification: 'M.B.B.S., M.S. (OG)',
    designation: 'Associate Professor',
    experience: '8 Years',
    publications: 'Not listed',
    email: 'hanashetty@gmail.com',
    dateOfBirth: '01-01-1986',
    dateOfJoining: '31-10-2017',
    registration: '90417',
  },
]

const facultyLabels = {
  abbreviation: 'Abbreviation',
  department: 'Department',
  qualification: 'Qualification',
  designation: 'Designation',
  experience: 'Experience',
  publications: 'Publications',
  contact: 'Contact Number',
  email: 'E-Mail',
  dateOfBirth: 'Date of Birth',
  dateOfJoining: 'Date of Joining',
  registration: 'Registration No.',
}

function GynaecologyObstetrics() {
  return (
    <main className="gynaecology-obstetrics-page">
      <SiteHeader />
      <section className="gynaecology-obstetrics-content" aria-labelledby="gynaecology-obstetrics-title">
        <h1 id="gynaecology-obstetrics-title">Gynaecology &amp; Obstetrics</h1>
        <img className="gynaecology-obstetrics-image" src={departmentImage} alt="Gynaecology and Obstetrics department" />
        <div className="gynaecology-obstetrics-details">
          <p>
            The department teaches female reproductive health, related conditions, and homoeopathic
            care. Its faculty includes homoeopathic specialists alongside visiting practitioners of
            modern medicine, bringing both perspectives into student training.
          </p>
          <p>
            Teaching combines theory, practical sessions, and clinical classes at the attached
            hospital. Students use demonstration equipment, models, instruments, charts, and
            specimens, and take part in preventive health camps, clinical trials, seminars, and
            research activities. The programme follows the RGUHS syllabus and encourages student
            participation in university and national events.
          </p>
        </div>
        <section className="gynaecology-obstetrics-faculty" aria-labelledby="gynaecology-obstetrics-faculty-title">
          <h2 id="gynaecology-obstetrics-faculty-title">Faculty Details</h2>
          <div className="gynaecology-obstetrics-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="gynaecology-obstetrics-faculty-card" key={name}>
                {photo && <img src={photo} alt={name} />}
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

export default GynaecologyObstetrics
