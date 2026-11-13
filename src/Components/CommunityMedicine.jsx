import './CommunityMedicine.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/community-medicine.jpg'
import bibiAsmaPhoto from '../Images/BIBIASMA.jpg'
import sudhamathiPhoto from '../Images/sudamathi.jpeg'
import sharathPhoto from '../Images/sharathmandhica.jpeg'

const facultyMembers = [
  {
    photo: bibiAsmaPhoto,
    name: 'Dr. Bibi Asma Desai',
    abbreviation: 'AAD',
    department: 'Community Medicine',
    qualification: 'B.H.M.S., MD (Hom) Materia Medica',
    designation: 'Head of the Department & Professor',
    experience: '10 Years',
    contact: '+91-9880120431',
    email: 'drasma.khatib@gmail.com',
    dateOfBirth: '06-06-1975',
    dateOfJoining: '18-05-2022',
    registration: 'A-6879',
  },
  {
    photo: sudhamathiPhoto,
    name: 'Dr. Sudhamathi S M',
    abbreviation: 'SMS',
    department: 'Community Medicine',
    qualification: 'B.H.M.S., MD (Hom) Materia Medica',
    designation: 'Professor',
    experience: '18 Years',
    publications: '4',
    contact: '+91-9480053872',
    email: 'sudha_mati@yahoo.co.in',
    dateOfBirth: '01-06-1965',
    dateOfJoining: '01-07-2023',
    registration: 'A-4932',
  },
  {
    photo: sharathPhoto,
    name: 'Dr. Sharath Mandicha',
    abbreviation: 'SSM',
    department: 'Community Medicine',
    qualification: 'B.H.M.S., MD (Hom) Organon',
    designation: 'Associate Professor',
    experience: '5 Years',
    publications: '1',
    contact: '+91-7204644373',
    email: 'sharathmandicha@gmail.com',
    dateOfBirth: '31-05-1993',
    dateOfJoining: '14-12-2020',
    registration: 'A-13110',
  },
]

const facultyLabels = {
  abbreviation: 'Abbreviation', department: 'Department', qualification: 'Qualification',
  designation: 'Designation', experience: 'Experience', publications: 'Publications',
  contact: 'Contact Number', email: 'E-Mail', dateOfBirth: 'Date of Birth',
  dateOfJoining: 'Date of Joining', registration: 'Registration No.',
}

function CommunityMedicine() {
  return (
    <main className="community-medicine-page">
      <SiteHeader />
      <section className="community-medicine-content" aria-labelledby="community-medicine-title">
        <h1 id="community-medicine-title">Community Medicine, Research Methodology &amp; Biostatistics</h1>
        <img className="community-medicine-image" src={departmentImage} alt="Community Medicine department" />
        <div className="community-medicine-details">
          <p>The Department of Community Medicine, Research Methodology and Biostatistics moulds students in a professional manner to confidently deal with health issues in a community. The department encourages students to participate actively in assessing community health through routine surveys, identifying health issues, and sharing advice on corrective and preventive measures.</p>
          <p>Students learn about the health system in India, immunization schedules, and prevention of disease, and gain exposure to activities at Community Health Centres (CHCs) and Primary Health Centres (PHCs). Annual visits to dairies, industries, water purification facilities, and sewage treatment plants help students understand related health hazards and preventive measures. Seminars provide a platform for learning and discussion.</p>
          <p>The department includes faculty rooms, a well-equipped demonstration room, and a reference library.</p>
        </div>
        <section className="community-medicine-faculty" aria-labelledby="community-medicine-faculty-title">
          <h2 id="community-medicine-faculty-title">Faculty Details</h2>
          <div className="community-medicine-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="community-medicine-faculty-card" key={name}>
                {photo && <img src={photo} alt={name} />}
                <h3>{name}</h3>
                <dl>
                  {Object.entries(faculty).map(([key, value]) => (
                    <div key={key}><dt>{facultyLabels[key]}</dt><dd>{value}</dd></div>
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

export default CommunityMedicine
