import './HomoeopathicPharmacy.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import departmentImage from '../Images/HOMOEOPATHICPHARMACY.jpg'
import qadriPhoto from '../Images/Dr.Y.M.Qadri.jpeg'
import shreyasPhoto from '../Images/Dr.ShreyasKS.jpg'

const facultyMembers = [
  {
    photo: qadriPhoto,
    name: 'Dr. Y. M. Qadri',
    abbreviation: 'YMQ',
    qualification: 'B.H.M.S., MD (Hom) Organon',
    department: 'Pharmacy',
    designation: 'Professor & Head of Department',
    contactNumber: '+91-9008047160',
    email: 'yusuf123.ymq@gmail.com',
    dateOfBirth: '14-04-1967',
    dateOfJoining: '25-11-2008',
    registrationNumber: 'A-5116',
  },
  {
    photo: shreyasPhoto,
    name: 'Dr. Shreyas K S',
    abbreviation: 'SKS',
    qualification: 'B.H.M.S., MD (Hom) Organon',
    department: 'Pharmacy',
    designation: 'Assistant Professor',
    contactNumber: '+91-9663579979',
    email: 'drshreyasks@gmail.com',
    dateOfBirth: '21-08-1995',
    dateOfJoining: '23-05-2023',
    registrationNumber: '15001',
  },
]

function HomoeopathicPharmacy() {
  return (
    <main className="homoeopathic-pharmacy-page">
      <SiteHeader />
      <section className="homoeopathic-pharmacy-content" aria-labelledby="homoeopathic-pharmacy-title">
        <h1 id="homoeopathic-pharmacy-title">Homoeopathic Pharmacy</h1>
        <img
          className="homoeopathic-pharmacy-image"
          src={departmentImage}
          alt="Homoeopathic Pharmacy department"
        />
        <div className="homoeopathic-pharmacy-body">
          <div className="homoeopathic-pharmacy-details">
            <p>
              Department of Homoeopathic Pharmacy is the basic subject for BHMS
              students. Which deals with identification of source of drugs,
              Homoeopathic concept of preparation, ingredients present in the drugs,
              it’s usage, concept of Homoeopathic drug proving, legal aspect, Quality
              control of drugs and commerce of Homoeopathic medicine.
            </p>
            <p>
              The department includes faculty room, well equipped laboratory, and
              Demonstration room. The department has a separate herbal garden of 3
              Acres with Homoeopathic medicinal plants.
            </p>
            <p>
              The department has well maintained museum with 200 specimens.
              Departmental library for reference of staff with all types of reference
              books and Homoeopathic Pharmacopoeia. Department conducts Seminars,
              debates, Panel discussion, tutorials on regular basis.
            </p>
          </div>
          <section
            className="homoeopathic-pharmacy-faculty-section"
            aria-labelledby="homoeopathic-pharmacy-faculty-title"
          >
            <h2
              className="homoeopathic-pharmacy-faculty-heading"
              id="homoeopathic-pharmacy-faculty-title"
            >
              Faculty Details
            </h2>
            <div className="homoeopathic-pharmacy-faculty">
              {facultyMembers.map(({ photo, ...faculty }) => (
                <article className="homoeopathic-pharmacy-faculty-card" key={faculty.name}>
                  <img src={photo} alt={faculty.name} />
                  <h2>{faculty.name}</h2>
                  <dl>
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
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default HomoeopathicPharmacy
