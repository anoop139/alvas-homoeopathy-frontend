import './PathologyMicrobiology.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from './pathology-microbiology.jpg'
import suhruthomPhoto from './dr-suhruthom.jpg'
import jessanPhoto from './dr-jessan-joshua.png'
import prajnaPhoto from './dr-prajna.jpg'

const facultyMembers = [
  {
    photo: suhruthomPhoto,
    name: 'Dr. Suhruthom P',
    abbreviation: 'SHM',
    department: 'PATHOLOGY & MICROBIOLOGY',
    qualification: 'B.H.M.S., MD (Hom) Organon',
    designation: 'Professor & H.O.D.',
    experience: '6 Years',
    publication: '2',
    contactNumber: '+91-7904431972',
    email: 'suhruthomprakash@gmail.com',
    dateOfBirth: '05-02-1990',
    dateOfJoining: '03-12-2022',
    registrationNumber: 'A-11449',
  },
  {
    photo: jessanPhoto,
    name: 'Dr. Jessan Joshua',
    abbreviation: 'JSN',
    department: 'PATHOLOGY & MICROBIOLOGY',
    qualification: 'B.H.M.S., MD (Hom) Homoeopathic Philosophy',
    designation: 'Assistant Professor',
    experience: '3 Years 10 Months',
    contactNumber: '+91-8590791622',
    email: 'jessanjoshua7@gmail.com',
    dateOfBirth: '25-05-1992',
    dateOfJoining: '10-05-2021',
    registrationNumber: '12153',
  },
  {
    photo: prajnaPhoto,
    name: 'Dr. Prajna',
    abbreviation: 'PRD',
    department: 'PATHOLOGY & MICROBIOLOGY',
    qualification: 'B.H.M.S., MD (Hom)',
    designation: 'Assistant Professor',
    experience: '1 Year',
    publication: '3',
    contactNumber: '+91-8970423348',
    email: 'prajnadevadiga97@gmail.com',
    dateOfBirth: '22-12-1997',
    dateOfJoining: '01-04-2025',
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

function PathologyMicrobiology() {
  return (
    <main className="pathology-microbiology-page">
      <SiteHeader />
      <section className="pathology-microbiology-content" aria-labelledby="pathology-microbiology-title">
        <h1 id="pathology-microbiology-title">Pathology &amp; Microbiology</h1>
        <img className="pathology-microbiology-image" src={departmentImage} alt="Pathology and Microbiology department" />
        <div className="pathology-microbiology-details">
          <p>Pathology is a branch of medicine devoted to the diagnosis and study of structural and functional changes in organs in diseases. It involves the examination of tissues, organs, bodily fluids, and autopsies in order to study and diagnose disease.</p>
          <p>It also deals with the study and cultivation of microorganisms, parasites, and viruses. The department includes a faculty room with library, demonstration room, museum, and laboratory. It also houses pathological specimens, histopathological slides, charts, models, and laminated photographs.</p>
          <p>The well-equipped laboratory has microscopes, incubator, hot air oven, centrifuge, semi-auto analyser, UV chamber, autoclave, colony counter, and pH meters. It can accommodate 100 students at a time. The department library has a good number of books, including the latest Pathology and Microbiology books.</p>
        </div>
        <section className="pathology-microbiology-faculty-section" aria-labelledby="pathology-microbiology-faculty-title">
          <h2 id="pathology-microbiology-faculty-title">Faculty Details</h2>
          <div className="pathology-microbiology-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="pathology-microbiology-faculty-card" key={name}>
                <img src={photo} alt={name} />
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

export default PathologyMicrobiology
