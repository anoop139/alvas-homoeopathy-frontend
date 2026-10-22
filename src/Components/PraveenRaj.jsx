import SiteHeader from './SiteHeader'
import praveenRajImage from '../Images/Manging Comunity/Dr.PraveenRajP.jpeg'
import './PrajnyaAlvaM.css'

const profileDetails = [
  ['Name', 'Dr. Praveen Raj P.'],
  ['Qualification', 'B.H.M.S., M.D. (Hom.), Ph.D.'],
  ['Designation', 'Professor & Advisor'],
  ['Department', 'Organon'],
  ['Experience', '27 years'],
  ['Phone', '+91 9448483214'],
  ['Email', 'paleripraveen@gmail.com'],
  ['DOB', '04-01-1973'],
  ['Joined', '23-06-2016'],
  ['Reg. No.', 'A-6035'],
]

function PraveenRaj({ embedded = false }) {
  return (
    <div className={`prajnya-profile-page${embedded ? ' prajnya-profile-page--embedded' : ''}`}>
      {!embedded && <SiteHeader />}
      <section className="prajnya-overview" aria-label="Dr. Praveen Raj P. profile">
        <div className="prajnya-overview__portrait">
          <img src={praveenRajImage} alt="Dr. Praveen Raj P." />
        </div>
        <section className="prajnya-details-section" aria-labelledby="praveen-details-title">
          <div className="prajnya-details-section__heading">
            <p className="prajnya-section-kicker">Professional Information</p>
            <h2 id="praveen-details-title">Profile details</h2>
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
    </div>
  )
}

export default PraveenRaj
