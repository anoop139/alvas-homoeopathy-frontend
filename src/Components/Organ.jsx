import './Organ.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/OrganDepartment.jpg'
import roshanPintoPhoto from '../Images/Dr.RoshanPinto.jpeg'
import jijiKappilPhoto from '../Images/Dr.JiJiSKappil.jpeg'
import praveenRajPhoto from '../Images/Dr.PraveenRajP.jpeg'
import prajnyaAlvaPhoto from '../Images/Dr.PrajnyaAlvaM.jpg'
import archanaPhoto from '../Images/Dr.ArchanaK.jpg'
import anushaPhoto from '../Images/Dr.Anusha.jpeg'

const facultyMembers = [
  {
    photo: roshanPintoPhoto,
    name: 'Dr. Herald Roshan Pinto',
    abbreviation: 'HRP',
    qualification: 'B.H.M.S., MD (Hom) Organon',
    department: 'Organon',
    designation: 'Professor & Principal',
    experience: '29 Years',
    contactNumber: '+91-9845303492',
    email: 'drroshan_pinto@yahoo.com',
    dateOfBirth: '18-06-1971',
    dateOfJoining: '23-12-2016',
    registrationNumber: 'A-5597',
  },
  {
    photo: jijiKappilPhoto,
    name: 'Dr. JiJi S Kappil',
    abbreviation: 'JSK',
    qualification: 'B.H.M.S., MD (Hom) Organon',
    department: 'Organon',
    designation: 'Professor & Head of Department',
    experience: '18 Years',
    publications: '1',
    contactNumber: '+91-9448176812',
    email: 'drjijiskappil@gmail.com',
    dateOfBirth: '17-01-1969',
    dateOfJoining: '17-08-2019',
    registrationNumber: 'A-5596',
  },
  {
    photo: praveenRajPhoto,
    name: 'Dr. Praveen Raj P.',
    abbreviation: 'PRP',
    qualification: 'B.H.M.S., MD (Hom) Organon, PhD',
    department: 'Organon',
    designation: 'Professor & Advisor',
    experience: '27 Years',
    publications: '9',
    contactNumber: '+91-9448483214',
    email: 'paleripraveen@gmail.com',
    dateOfBirth: '04-01-1973',
    dateOfJoining: '23-06-2016',
    registrationNumber: 'A-6035',
  },
  {
    photo: prajnyaAlvaPhoto,
    name: 'Dr. Prajnya Alva M',
    abbreviation: 'PAM',
    qualification: 'B.H.M.S., MD (Hom) Organon',
    designation: 'Administrative Officer & Associate Professor',
    department: 'Organon',
    experience: '8 Years',
    publications: '1',
    contactNumber: '+91-8722873696',
    email: 'dr.prajnya.alva.m@gmail.com',
    dateOfBirth: '24-12-1988',
    dateOfJoining: '23-12-2015',
    registrationNumber: 'A-11405',
  },
  {
    photo: archanaPhoto,
    name: 'Dr. Archana K. R.',
    abbreviation: 'ARK',
    qualification: 'B.H.M.S., MD (Hom) Organon',
    department: 'Organon',
    designation: 'Assistant Professor',
    experience: '3 Years',
    contactNumber: '+91-9880847395',
    email: 'arch.archanakr@gmail.com',
    dateOfBirth: '23-05-1989',
    dateOfJoining: '05-12-2022',
    registrationNumber: 'A-12114',
  },
  {
    photo: anushaPhoto,
    name: 'Dr. Anusha',
    abbreviation: 'Dr Anu',
    qualification: 'BHMS, MD (Hom), Organon of Medicine with Homoeopathic Philosophy',
    department: 'Department of Organon of Medicine',
    designation: 'Assistant Professor',
    publications: '2',
    contactNumber: '+91-8951104399',
    email: 'dr.anusha317@gmail.com',
    dateOfBirth: '31-07-1997',
    dateOfJoining: '11-05-2026',
    registrationNumber: 'A-14746',
  },
]

function Organ() {
  return (
    <main className="organ-page">
      <SiteHeader />
      <section className="organ-content" aria-labelledby="organ-title">
        <h1 id="organ-title">Organon with Homoeopathic Philosophy and Fundamentals of Psychology</h1>
        <img className="organ-department-image" src={departmentImage} alt="Organon department" />
        <div className="organ-details">
          <p>
            The department introduces students to the principles and philosophy
            that shape homoeopathic education and practice. Its teaching connects
            foundational ideas with the responsibilities, values and practical
            skills expected of a healthcare professional.
          </p>
          <p>
            Through the study of Organon, students explore homoeopathy as both a
            discipline of ideas and an area of clinical learning. The curriculum
            encourages them to understand its historical foundations while
            considering how practice and research continue to develop.
          </p>
          <p>
            Psychology complements this study by helping students understand
            behaviour in relation to a person’s surroundings. Learning combines
            theory with practice so students can develop sound judgement,
            communication and a thoughtful approach to patient care.
          </p>
        </div>
        <section className="organ-faculty-section" aria-labelledby="organ-faculty-title">
          <div className="organ-faculty-heading-wrap">
            <h2 className="organ-faculty-heading" id="organ-faculty-title">Faculty Details</h2>
          </div>
          <div className="organ-faculty-gallery">
            {facultyMembers.map(({ photo, ...faculty }) => (
              <article className="organ-faculty-card" key={faculty.name}>
                <img
                  className={faculty.name === 'Dr. Prajnya Alva M' ? 'organ-faculty-photo--prajnya' : undefined}
                  src={photo}
                  alt={faculty.name}
                />
                <h2>{faculty.name}</h2>
                <dl className="organ-faculty-details">
                  {Object.entries(faculty).filter(([key]) => key !== 'name').map(([key, value]) => (
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

export default Organ
