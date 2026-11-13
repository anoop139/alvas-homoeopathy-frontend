import './DepartmentOfYoga.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/yoga.jpg'
import rashmithaPhoto from '../Images/Dr.Rashmitha.jpeg'
import srinivasPhoto from '../Images/Dr.SrinivasK.jpeg'
import thejakshaPhoto from '../Images/Dr.Thejaksha.jpeg'

const facultyMembers = [
  {
    photo: rashmithaPhoto,
    name: 'Dr. RASHMITHA A P',
    details: [
      ['Qualification', 'B.N.Y.S (M.D)'],
      ['Department', 'YOGA'],
      ['Designation', 'YOGA Teacher'],
      ['Contact Number', '8548086583'],
      ['Date of Birth', '14-09-1991'],
      ['Date of Joining', '16-03-2026'],
      ['Registration No', '1013'],
    ],
  },
  {
    photo: srinivasPhoto,
    name: 'Dr. SRINIVAS K SHENOY',
    details: [
      ['Qualification', 'B.N.Y.S (M.D)'],
      ['Department', 'YOGA'],
      ['Designation', 'YOGA Teacher'],
      ['Contact Number', '9535616313'],
      ['Date of Birth', '29-03-2001'],
      ['Date of Joining', '02-01-2026'],
      ['Registration No', '2629'],
    ],
  },
  {
    photo: thejakshaPhoto,
    name: 'Dr. THEJAKSHA',
    details: [
      ['Qualification', 'B.P.T'],
      ['Department', 'B.P.T'],
      ['Designation', 'PHYSIOTHERAPIST'],
      ['Contact Number', '9591734984'],
      ['Date of Birth', '08-10-2002'],
      ['Date of join', '16-03-2026'],
    ],
  },
]

function DepartmentOfYoga() {
  return (
    <main className="department-of-yoga-page">
      <SiteHeader />
      <section className="department-of-yoga-content" aria-labelledby="department-of-yoga-title">
        <header className="department-of-yoga-heading">
          <h1 id="department-of-yoga-title">Department of Yoga</h1>
        </header>
        <img
          className="department-of-yoga-image"
          src={departmentImage}
          alt="Students participating in a large group yoga session"
        />
        <div className="department-of-yoga-details">
          <p>
            Yoga an ancient art of right living has now been developed as a separate medical science.
            Maharshi Patanjali propounded it in a systematic form, which consists of eight components
            namely restraint, observance of austerity, physical postures, breathing exercises,
            restraining of sense organs, contemplation, meditation and Samadhi. These steps in the
            practice of yoga have potential in improvement of social behaviour, improvement of physical
            health, and thereby inducing tranquillity and serenity to the mind. The practice of yoga
            prevents psychosomatic disorders/diseases and improve individual’s resistance and ability to
            endure stressful situations. It improves the intelligence and memory and develops an
            integrated psychosomatic personality. Meditation can stabilize emotional changes and
            prevent abnormal functions of vital organs of the body and control the autonomic nervous
            system.
          </p>
        </div>
        <section className="department-of-yoga-faculty" aria-labelledby="department-of-yoga-faculty-title">
          <h2 id="department-of-yoga-faculty-title">Faculty Details</h2>
          <div className="department-of-yoga-faculty-grid">
            {facultyMembers.map(({ photo, name, details }) => (
              <article className="department-of-yoga-faculty-card" key={name}>
                {photo && (
                  <img
                    className={name === 'Dr. THEJAKSHA' ? 'department-of-yoga-faculty-photo--thejaksha' : undefined}
                    src={photo}
                    alt={name}
                  />
                )}
                <h3>{name}</h3>
                <dl>
                  {details.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
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

export default DepartmentOfYoga
