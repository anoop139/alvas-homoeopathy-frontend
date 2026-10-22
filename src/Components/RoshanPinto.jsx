import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import roshanPintoImage from '../Images/Manging Comunity/Dr.RoshanPinto.jpeg'
import './PrajnyaAlvaM.css'

const profileDetails = [
  ['Name', 'Dr. Herald Roshan Pinto'],
  ['Qualification', 'B.H.M.S., M.D. (Hom.)'],
  ['Designation', 'Professor & Principal'],
  ['Department', 'Organon'],
  ['Experience', '29 years'],
  ['Phone', '+91 9845303492'],
  ['Email', 'drroshan_pinto@yahoo.com'],
  ['DOB', '18 June 1971'],
  ['Joined', '23 December 2016'],
  ['Reg. No.', 'A-5597'],
]

function RoshanPinto({ embedded = false }) {
  return (
    <div className={`prajnya-profile-page${embedded ? ' prajnya-profile-page--embedded' : ''}`}>
      {!embedded && <SiteHeader />}
      <section className="prajnya-overview" aria-label="Dr. Herald Roshan Pinto profile">
        <div className="prajnya-overview__portrait">
          <img src={roshanPintoImage} alt="Dr. Herald Roshan Pinto" />
        </div>
        <section className="prajnya-details-section" aria-labelledby="roshan-details-title">
          <div className="prajnya-details-section__heading">
            <p className="prajnya-section-kicker">Professional Information</p>
            <h2 id="roshan-details-title">Profile details</h2>
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

export default RoshanPinto
