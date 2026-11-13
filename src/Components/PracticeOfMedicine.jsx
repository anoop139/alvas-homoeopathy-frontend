import './PracticeOfMedicine.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/PracticeOfMedicineDepartment.jpg'
import prashantDonkarPhoto from '../Images/Dr.PrashantDonkar.jpeg'
import anithaPhoto from '../Images/Dr.AnithaSK.jpeg'
import gayathriPhoto from '../Images/Dr.gayathri.jpg'
import shruthiPhoto from '../Images/Dr.shrustikm.jpeg'

const facultyMembers = [
  {
    photo: prashantDonkarPhoto,
    name: 'Dr. Prashant Donkar',
    abbreviation: 'PHD',
    department: 'Medicine',
    qualification: 'B.H.M.S., M.D. (Hom.)',
    designation: 'Professor & Head of Department',
    experience: '22 Years',
    contact: '+91-7353079975',
    email: 'prashanthdonkar@gmail.com',
    dateOfBirth: '24-09-1972',
    dateOfJoining: '01-04-2014',
    registration: '27067',
  },
  {
    photo: anithaPhoto,
    name: 'Dr. Anitha S K',
    abbreviation: 'ASK',
    department: 'Medicine',
    qualification: 'B.H.M.S., M.D. (Hom.)',
    designation: 'Associate Professor',
    experience: '10 Years',
    publications: '2',
    contact: '+91-9845844428',
    email: 'kumasagi2050@gmail.com',
    dateOfBirth: '23-01-1977',
    dateOfJoining: '01-10-2019',
    registration: 'A-7811',
  },
  {
    photo: gayathriPhoto,
    name: 'Dr. Gayathri Acharya',
    abbreviation: 'GBA',
    department: 'Practice of Medicine Including Paediatrics',
    qualification: 'B.H.M.S., M.D. (Paediatrics)',
    designation: 'Assistant Professor',
    experience: 'Fresher',
    contact: '+91-7259889290',
    email: 'gayathriracharya28@gmail.com',
    dateOfBirth: '27-05-1997',
    dateOfJoining: '15-07-2024',
    registration: '14364',
  },
  {
    photo: shruthiPhoto,
    name: 'Dr. Shruthi K M',
    abbreviation: 'SKM',
    department: 'Medicine',
    qualification: 'B.H.M.S., M.D. (Hom.)',
    designation: 'Assistant Professor',
    experience: 'Fresher',
    contact: '+91-7259268325',
    email: 'Shrusti.shri66@gmail.com',
    dateOfBirth: '24-03-1991',
    dateOfJoining: '26-04-2025',
    registration: 'Not listed',
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

function PracticeOfMedicine() {
  return (
    <main className="practice-of-medicine-page">
      <SiteHeader />
      <section className="practice-of-medicine-content" aria-labelledby="practice-of-medicine-title">
        <h1 id="practice-of-medicine-title">Practice Of Medicine With Essentials Of Pharmacology</h1>
        <img className="practice-of-medicine-image" src={departmentImage} alt="Students learning clinical skills in the Practice of Medicine department" />
        <div className="practice-of-medicine-details">
          <p>
            The department emphasizes clinical learning and helps students build skills in assessing
            patients, diagnosis, and treatment. Guest faculty guide bedside teaching and practical
            sessions, so students can develop confidence in clinical work.
          </p>
          <p>
            Facilities include HOD and staff cabins, a discussion room, clinical instruments,
            equipment, X-rays, ECGs, specimens, and a reference library. Teaching also covers
            paediatrics and psychology, with monthly seminars, tutorials, tests, and debates.
          </p>
        </div>
        <section className="practice-of-medicine-faculty" aria-labelledby="practice-of-medicine-faculty-title">
          <h2 id="practice-of-medicine-faculty-title">Faculty Details</h2>
          <div className="practice-of-medicine-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="practice-of-medicine-faculty-card" key={name}>
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

export default PracticeOfMedicine
