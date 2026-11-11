import './HomoeopathicRepertory.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/HOMOEOPATHICREPERTORYANDCASETAKING.jpg'
import vasumathiPhoto from '../Images/Dr.VasumathiKodikalT.png'
import shriRakshaPhoto from '../Images/Dr.ShriRakshaB.jpeg'
import ananyaPhoto from '../Images/Dr Ananya K.jpg'

const facultyMembers = [
  {
    photo: vasumathiPhoto,
    name: 'Dr. Vasumathi Kodikal T',
    abbreviation: 'VAK',
    department: 'Repertory',
    qualification: 'B.H.M.S., MD (Hom) Repertory',
    designation: 'Associate Professor',
    experience: '9 Years',
    contactNumber: '+91-9483322428',
    email: 'vasukodikal@gmail.com',
    dateOfBirth: '31-05-1988',
    dateOfJoining: '19-12-2017',
    registrationNumber: 'A-11029',
  },
  {
    photo: shriRakshaPhoto,
    name: 'Dr. Shri Raksha B',
    abbreviation: 'SRB',
    department: 'Repertory',
    qualification: 'B.H.M.S., MD (Hom) Repertory',
    designation: 'Associate Professor',
    experience: '3 Years',
    contactNumber: '+91-8904468730',
    email: 'shrirakshabhat44@gmail.com',
    dateOfBirth: '17-02-1995',
    dateOfJoining: '24-01-2022',
    registrationNumber: 'A-13514',
  },
  {
    photo: ananyaPhoto,
    name: 'Dr. Ananya K',
    abbreviation: 'AK',
    department: 'Homoeopathic Repertory and Case-Taking',
    qualification: 'BHMS, MD (Hom.)',
    designation: 'Assistant Professor',
    experience: '1 Year',
    publications: '3',
    contactNumber: '+91-9008576489',
    email: 'ananyak2597@gmail.com',
    dateOfBirth: '25-09-1997',
    dateOfJoining: '21-04-2025',
  },
]

function HomoeopathicRepertory() {
  return (
    <main className="homoeopathic-repertory-page">
      <SiteHeader />
      <section className="homoeopathic-repertory-content" aria-labelledby="homoeopathic-repertory-title">
        <h1 id="homoeopathic-repertory-title">Homoeopathic Repertory &amp; Case Taking</h1>
        <div className="homoeopathic-repertory-intro">
          <img
            className="homoeopathic-repertory-image"
            src={departmentImage}
            alt="Homoeopathic Repertory and Case Taking department"
          />
          <div className="homoeopathic-repertory-details">
            <p>
          Case-taking is the art of gathering patient information through observation, history-taking, and clinical examination to identify remedies using Homeopathic Materia Medica, the Organon, and repertories. Repertories are systematic compilations of symptoms that help find similar remedies for a given case. The department teaches students to use these tools alongside homeopathic software, and provides the opportunity to observe live outpatient case-taking sessions for clinical discussion.
            </p>
          </div>
        </div>
        <section className="homoeopathic-repertory-faculty-section" aria-labelledby="homoeopathic-repertory-faculty-title">
          <h2 id="homoeopathic-repertory-faculty-title">Faculty Details</h2>
          <div className="homoeopathic-repertory-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="homoeopathic-repertory-faculty-card" key={name}>
                <img src={photo} alt={name} />
                <h3>{name}</h3>
                <dl>
                  {Object.entries(faculty).map(([key, value]) => (
                    <div key={key}>
                      <dt>
                        {key === 'registrationNumber'
                          ? 'Registration No.'
                          : key.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())}
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

export default HomoeopathicRepertory
