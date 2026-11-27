import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import prajnyaAlvaImage from '../Images/Manging Comunity/prajnaalva.jpeg'
import './PrajnyaAlvaM.css'

const profileDetails = [
  ['Name', 'Dr. Prajnya Alva M'],
  ['Qualification', 'B.H.M.S., MD (Hom)'],
  ['Designation', 'Administrative officer & Associate Professor'],
  ['Department', 'Organon'],
  ['Experience', '8 Year'],
  ['Phone', '+91-8722873696'],
  ['Email', 'dr.prajnya.alva.m@gmail.com'],
  ['DOB', '24-12-1988'],
  ['Joined', '23-12-2015'],
  ['Reg. No.', 'A-11405'],
]

function PrajnyaAlvaM({ embedded = false }) {
  return (
    <div className={`prajnya-profile-page${embedded ? ' prajnya-profile-page--embedded' : ''}`}>
      {!embedded && <SiteHeader />}
      <section className="prajnya-overview" aria-label="Profile overview">
        <div className="prajnya-overview__portrait">
          <img src={prajnyaAlvaImage} alt="Dr. Prajnya Alva M" />
        </div>
        <section className="prajnya-details-section" aria-labelledby="prajnya-details-title">
          <div className="prajnya-details-section__heading">
            <p className="prajnya-section-kicker">Professional Information</p>
            <h2 id="prajnya-details-title">Profile details</h2>
          </div>
          <dl className="prajnya-details-grid">
            {profileDetails.map(([label, value]) => (
              <div className="prajnya-detail-card" key={label}>
                <dt>{label}</dt>
                <dd>
                  {label === 'Email' ? <a href={`mailto:${value}`}>{value}</a> : null}
                  {label === 'Phone' ? <a href={`tel:${value.replace(/[^+\d]/g, '')}`}>{value}</a> : null}
                  {label !== 'Email' && label !== 'Phone' ? value : null}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </section>
      {!embedded && <SiteFooter />}
    </div>
  )
}

export default PrajnyaAlvaM
