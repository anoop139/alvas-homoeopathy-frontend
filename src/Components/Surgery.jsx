import './Surgery.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import surgeryImage from '../Images/SURGERY.jpg'
import shivakumarPhoto from '../Images/Dr.ShivakumarMK.jpeg'
import vinayAlvaPhoto from '../Images/Dr.VinayMAlva2.jpg'
import mahalasaKanthiPhoto from '../Images/Dr.MahalasaKanthi.jpeg'

const facultyMembers = [
  {
    photo: shivakumarPhoto,
    name: 'Dr. Shivakumar M K',
    abbreviation: 'SMK',
    department: 'Surgery',
    qualification: 'B.H.M.S., M.D. (Hom.)',
    designation: 'Professor & HOD',
    experience: '9 Years',
    publications: '1',
    contact: '+91-9845843888',
    email: 'shiva.kumbar@gmail.com',
    dateOfBirth: '11-02-1978',
    dateOfJoining: '01-10-2019',
    registration: 'A-8161',
  },
  {
    photo: vinayAlvaPhoto,
    name: 'Dr. Vinay M Alva',
    abbreviation: 'VMA',
    department: 'Surgery',
    qualification: 'M.B.B.S., M.S. (GS)',
    designation: 'Professor',
    experience: '7 Years',
    contact: '+91-9986205557',
    email: 'vinaymalva5@gmail.com',
    dateOfBirth: '25-08-1988',
    dateOfJoining: '03-05-2021',
    registration: '96144',
  },
  {
    photo: mahalasaKanthiPhoto,
    name: 'Dr. Mahalasa Kanthi',
    abbreviation: 'MKK',
    department: 'Surgery',
    qualification: 'B.H.M.S., M.D. (Hom.)',
    designation: 'Associate Professor',
    experience: '5 Years',
    contact: '+91-9743861659',
    email: 'mahalasa.35@gmail.com',
    dateOfBirth: '05-10-1991',
    dateOfJoining: '01-07-2020',
    registration: 'A-12407',
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

function Surgery() {
  return (
    <main className="surgery-page">
      <SiteHeader />
      <section className="surgery-content" aria-labelledby="surgery-title">
        <h1 id="surgery-title">Surgery</h1>
        <img className="surgery-image" src={surgeryImage} alt="Students learning in the Surgery department" />
        <div className="surgery-details">
          <p>
            The department connects homoeopathic care with surgical learning to give students a broad
            understanding of patient care. Topics include orthopaedics, ENT, dentistry, ophthalmology,
            and general and systemic surgery. Students also learn about the role of homoeopathic care
            around surgery and in managing related conditions.
          </p>
          <p>
            Department facilities include a faculty room, demonstration room, attached hospital,
            library, charts, specimens, and models.
          </p>
        </div>
        <section className="surgery-faculty" aria-labelledby="surgery-faculty-title">
          <h2 id="surgery-faculty-title">Faculty Details</h2>
          <div className="surgery-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="surgery-faculty-card" key={name}>
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

export default Surgery
