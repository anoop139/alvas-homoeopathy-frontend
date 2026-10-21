import SiteHeader from './SiteHeader'
import prajnyaAlvaImage from '../Images/Manging Comunity/prajnaalva.jpeg'
import './PrajnyaAlvaM.css'

const profileDetails = [
  ['Qualification', 'B.H.M.S., M.D. (Hom.) Organon'],
  ['Designation', 'Administrative Officer & Associate Professor'],
  ['Department', 'Organon'],
  ['Experience', '8 years'],
  ['Contact', '+91 8722873696'],
  ['Email', 'dr.prajnya.alva.m@gmail.com'],
  ['Date of Birth', '24-12-1988'],
  ['Date of Joining', '29-12-2022'],
  ['Registration No.', 'A-11405'],
]

function PrajnyaAlvaM() {
  return (
    <main className="prajnya-profile-page">
      <SiteHeader />
      <section className="prajnya-profile prajnya-profile--prajnya" aria-label="Dr. Prajnya Alva M profile">
        <img src={prajnyaAlvaImage} alt="Dr. Prajnya Alva M" />
        <dl className="prajnya-profile__details">
          <div className="prajnya-profile__detail prajnya-profile__name">
            <dt>Name</dt>
            <dd>Dr. Prajnya Alva M</dd>
          </div>
          {profileDetails.map(([label, value]) => (
            <div className="prajnya-profile__detail" key={label}>
              <dt>{label}</dt>
              <dd>{label === 'Email' ? <a href={`mailto:${value}`}>{value}</a> : value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}

export default PrajnyaAlvaM
