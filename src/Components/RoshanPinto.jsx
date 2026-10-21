import SiteHeader from './SiteHeader'
import roshanPintoImage from '../Images/Manging Comunity/Dr.RoshanPinto.jpeg'
import './PrajnyaAlvaM.css'

const profileDetails = [
  ['Qualification', 'B.H.M.S., M.D. (Hom.)'],
  ['Designation', 'Professor & Principal'],
  ['Department', 'Organon'],
  ['Experience', '29 years'],
  ['Contact', '+91 9845303492'],
  ['Email', 'drroshan_pinto@yahoo.com'],
  ['Date of Birth', '18 June 1971'],
  ['Date of Joining', '23 December 2016'],
  ['Registration No.', 'A-5597'],
]

function RoshanPinto() {
  return (
    <main className="prajnya-profile-page">
      <SiteHeader />
      <section className="prajnya-profile prajnya-profile--table" aria-label="Dr. Herald Roshan Pinto profile">
        <img src={roshanPintoImage} alt="Dr. Herald Roshan Pinto" />
        <dl className="prajnya-profile__details">
          <div className="prajnya-profile__detail prajnya-profile__name">
            <dt>Name</dt>
            <dd>Dr. Herald Roshan Pinto</dd>
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

export default RoshanPinto
