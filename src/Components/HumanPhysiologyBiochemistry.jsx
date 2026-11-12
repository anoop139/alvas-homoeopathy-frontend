import './HumanPhysiologyBiochemistry.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/HumanPhysiologyBiochemistryDepartment.jpg'
import premKumarPhoto from '../Images/Dr.PremKumarPhysiology.jpg'
import ashithaPhoto from '../Images/Dr.AshithaKPhysiology.jpeg'
import sushikshithaPhoto from '../Images/Dr.SushikshithaSA.jpg'
import athirakrishnanPhoto from '../Images/Dr.AthirakrishnanGK.jpg'

const facultyMembers = [
  {
    photo: premKumarPhoto,
    name: 'Dr. Prem Kumar',
    abbreviation: 'PMK',
    qualification: 'B.H.M.S., M.D.(Hom.) Materia Medica',
    department: 'PHYSIOLOGY',
    designation: 'Professor & HOD',
    experience: '6 Years',
    contactNumber: '+91-9444642160',
    email: 'drpremkumar1990@gmail.com',
    dateOfBirth: '14-03-1990',
    dateOfJoining: '02-05-2023',
    registrationNumber: '4530',
  },
  {
    photo: ashithaPhoto,
    name: 'Dr. Ashitha K',
    abbreviation: 'AAK',
    qualification: 'B.H.M.S., MD (Hom) Materia Medica',
    department: 'PHYSIOLOGY',
    designation: 'Associate Professor',
    experience: '9 Months',
    contactNumber: '+91-8075703537',
    email: 'ashibhms@gmail.com',
    dateOfBirth: '03-06-1986',
    dateOfJoining: '02-05-2023',
    registrationNumber: 'A-11118',
  },
  {
    photo: sushikshithaPhoto,
    name: 'Dr. Sushikshitha S A',
    abbreviation: 'SSA',
    qualification: 'B.H.M.S., MD (Hom)',
    department: 'PHYSIOLOGY',
    designation: 'Assistant Professor',
    experience: '1 Year',
    contactNumber: '+91-7022463006',
    email: 'sushikshitha@gmail.com',
    dateOfBirth: '28-11-1997',
    dateOfJoining: '21-04-2025',
  },
  {
    photo: athirakrishnanPhoto,
    name: 'Dr. Athirakrishnan G. K',
    abbreviation: 'AGK',
    qualification: 'BHMS, MD (Hom)',
    department: 'PHYSIOLOGY',
    designation: 'Assistant Professor',
    experience: '1 Year',
    contactNumber: '+91-8891170151',
    email: 'athirakrishnangk@gmail.com',
    dateOfBirth: '26/05/1996',
    dateOfJoining: '01/07/2025',
  },
]

const facultyLabels = {
  abbreviation: 'Abbreviation',
  qualification: 'Qualification',
  department: 'Department',
  designation: 'Designation',
  experience: 'Experience',
  contactNumber: 'Contact Number',
  email: 'E-Mail',
  dateOfBirth: 'Date of Birth',
  dateOfJoining: 'Date of Joining',
  registrationNumber: 'Registration No.',
}

function HumanPhysiologyBiochemistry() {
  return (
    <main className="human-physiology-biochemistry-page">
      <SiteHeader />
      <section
        className="human-physiology-biochemistry-content"
        aria-labelledby="human-physiology-biochemistry-title"
      >
        <h1 id="human-physiology-biochemistry-title">
          Human Physiology &amp; Biochemistry
        </h1>
        <img
          className="human-physiology-biochemistry-image"
          src={departmentImage}
          alt="Human Physiology and Biochemistry department"
        />
        <div className="human-physiology-biochemistry-details">
          <p>
            The major goal of the department is to provide the students of first
            BHMS the basic of physiology and biochemistry in a concise and
            interesting manner, so that the students should be able to correlate
            the subjects like pathology, materia medica and medicine.
          </p>
          <p>
            Physiology is a fascinating and ancient branch of science. It
            unfolds the mystery of the complicated functional aspects of
            fundamental organs of the body. Ancient because it exists since the
            origin of life. Knowledge of physiology lays the foundation;
            essential to understand its allied subjects like Biochemistry,
            pathology and medicine.
          </p>
          <p>
            The department includes a faculty room with library, laboratories,
            demonstration room and museum with an ample space of 194.39 sq. mt.
            It has well-equipped and sufficiently ventilated separate labs for
            physiology and biochemistry, and a separate demonstration room for
            conducting various clinical and systemic examinations. The
            department makes use of conventional techniques and instruments to
            perform biomedical analysis. Laboratory training includes models
            for practicing clinical skills, physical examination and
            procedures. The museum displays a collection of models and
            specimens. The department library contains updated Physiology and
            Biochemistry reference books, CDs and DVDs. Seminars and tutorials
            are regularly organized, along with lectures, small-group teaching
            and PowerPoint teaching methods.
          </p>
        </div>
        <section
          className="human-physiology-biochemistry-faculty-section"
          aria-labelledby="human-physiology-biochemistry-faculty-title"
        >
          <h2 id="human-physiology-biochemistry-faculty-title">Faculty Details</h2>
          <div className="human-physiology-biochemistry-faculty-grid">
            {facultyMembers.map(({ photo, name, ...faculty }) => (
              <article className="human-physiology-biochemistry-faculty-card" key={name}>
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

export default HumanPhysiologyBiochemistry
