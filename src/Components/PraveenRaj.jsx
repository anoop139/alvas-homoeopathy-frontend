import SiteHeader from './SiteHeader'
import praveenRajImage from '../Images/Manging Comunity/Dr.PraveenRajP.jpeg'
import './PrajnyaAlvaM.css'

const profileDetails = [
  ['Qualification', 'B.H.M.S., M.D. (Hom.), Ph.D.'],
  ['Designation', 'Professor & Advisor'],
  ['Department', 'Organon'],
  ['Experience', '27 years'],
  ['Contact', '+91 9448483214'],
  ['Email', 'paleripraveen@gmail.com'],
  ['Date of Birth', '04-01-1973'],
  ['Date of Joining', '23-06-2016'],
  ['Registration No.', 'A-6035'],
]

function PraveenRaj() {
  return (
    <main className="prajnya-profile-page">
      <SiteHeader />
      <section className="prajnya-profile prajnya-profile--table" aria-label="Dr. Praveen Raj P. profile">
        <img src={praveenRajImage} alt="Dr. Praveen Raj P." />
        <dl className="prajnya-profile__details">
          <div className="prajnya-profile__detail prajnya-profile__name">
            <dt>Name</dt>
            <dd>Dr. Praveen Raj P.</dd>
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

export default PraveenRaj
