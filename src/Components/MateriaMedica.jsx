import './MateriaMedica.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import rabiyaBashriPhoto from '../Images/Dr.RabiyaBashri.png'
import keerthirajPatilPhoto from '../Images/Dr.KeerthirajC.Patil.jpg'
import sasitharanPhoto from '../Images/Dr.SasitharanS.jpeg'

const facultyMembers = [
  {
    photo: rabiyaBashriPhoto,
    name: 'Dr. Rabiya Bashri',
    abbreviation: 'RBS',
    qualification: 'B.H.M.S., MD (Hom) Materia',
    department: 'MATERIA MEDICA',
    designation: 'Professor & Head of Department',
    experience: '26 Years (as of March 2024)',
    publications: '1',
    contactNumber: '+91-8951526313',
    email: 'rabiyarims@gmail.com',
    dateOfBirth: '05-08-1969',
    dateOfJoining: '02-03-2018',
    registrationNumber: 'A-5841',
  },
  {
    photo: keerthirajPatilPhoto,
    name: 'Dr. Keerthiraj C. Patil',
    abbreviation: 'KCP',
    qualification: 'B.H.M.S., MD (Hom) Materia',
    department: 'MATERIA MEDICA',
    designation: 'Professor',
    experience: '9 Years (as of March 2024)',
    contactNumber: '+91-9448635705',
    email: 'patil_kirtiraj@rediffmail.com',
    dateOfBirth: '05-01-1985',
    dateOfJoining: '06-04-2022',
    registrationNumber: 'A9799',
  },
  {
    photo: sasitharanPhoto,
    name: 'Dr. Sasitharan S',
    abbreviation: 'SSN',
    qualification: 'B.H.M.S., MD (Hom) Materia',
    department: 'MATERIA MEDICA',
    designation: 'Associate Professor',
    experience: '6 Years (as of March 2024)',
    contactNumber: '+91-9487261263',
    email: 'drsasitharan@gmail.com',
    dateOfBirth: '27-07-1986',
    dateOfJoining: '18-11-2022',
    registrationNumber: 'A-3006',
  },
]

function MateriaMedica() {
  return (
    <main className="materia-medica-page">
      <SiteHeader />
      <section className="materia-medica-content" aria-labelledby="materia-medica-title">
        <h1 id="materia-medica-title">Homoeopathic Materia Medica</h1>
        <div className="materia-medica-details">
          <p>
            Materia Medica is a branch of science which deals with medicinal
            substances and their properties used in the practice of medicine.
          </p>
          <p>
            The staff is well qualified, knowledgeable, innovative and determined.
            The department is spacious, with well-furnished infrastructure and
            equipped with computers, projectors, boards and all the necessary
            teaching aids. It includes an HOD cabin, staff cabins and a discussion
            room.
          </p>
          <p>
            The department has specimens, pictorial representations of drugs and
            charts for better understanding. Its library has a wide range of
            Materia Medica books for reference.
          </p>
          <p>
            This subject is taught from first year to final year in theory and
            clinical classes. Faculty use audio-visual techniques for a more
            immersive learning experience. Seminars, tutorials, group discussions,
            debates, role plays and camps are regularly conducted to build balanced
            theoretical and practical knowledge.
          </p>
        </div>
        <section className="materia-medica-faculty-section" aria-labelledby="materia-medica-faculty-title">
          <div className="materia-medica-faculty-heading-wrap">
            <h2 className="materia-medica-faculty-heading" id="materia-medica-faculty-title">Faculty Details</h2>
          </div>
          <div className="materia-medica-faculty-gallery">
            {facultyMembers.map(({ photo, ...faculty }, index) => (
              <figure
                className={`materia-medica-faculty-photo${index === 1 ? ' materia-medica-faculty-photo--cropped' : ''}`}
                key={faculty.name}
              >
                <img src={photo} alt={faculty.name} />
                <figcaption>{faculty.name}</figcaption>
                <dl className="materia-medica-faculty-details">
                  {Object.entries(faculty).filter(([key]) => key !== 'name').map(([key, value]) => (
                    <div key={key}>
                      <dt>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </figure>
            ))}
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}

export default MateriaMedica
