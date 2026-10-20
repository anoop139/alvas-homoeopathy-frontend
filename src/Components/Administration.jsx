import SiteHeader from './SiteHeader'
import chairpersonImage from '../Images/Manging Comunity/DrMohan.jpeg'
import vivekAlvaImage from '../Images/Manging Comunity/vivekalva.jpg'
import vinayAlvaImage from '../Images/Manging Comunity/Dr.VinayMAlva.jpg'
import PrajnyaAlvaM from './PrajnyaAlvaM'
import RoshanPinto from './RoshanPinto'
import PraveenRaj from './PraveenRaj'
import './Administration.css'

const administrators = [
  { name: 'Dr. M. Mohan Alva', role: '(Chairman, AEF)', image: chairpersonImage },
  { name: 'Shri Vivek M Alva', role: 'Managing Trustee, AEF', image: vivekAlvaImage },
  { name: 'Dr Vinay M Alva', role: 'Managing Trustee, AEF', image: vinayAlvaImage },
]

function Administration() {
  return (
    <main className="administration-page">
      <SiteHeader />
      <section className="administration-section" aria-labelledby="administration-title">
        <div className="administration-section__heading">
          <h1 id="administration-title">ADMINISTRATION</h1>
        </div>
        <div className="administration-grid">
          {administrators.map((person) => (
            <article className="administration-card" key={person.name}>
              {person.image ? (
                <img className="administration-card__photo" src={person.image} alt={person.name} />
              ) : (
                <div className="administration-card__placeholder" aria-hidden="true">
                  {person.name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('')}
                </div>
              )}
              <div className="administration-card__details">
                <h2>{person.name}</h2>
                <p>{person.role}</p>
                {person.moreInfoUrl && (
                  <a className="administration-card__more-info" href={person.moreInfoUrl} target="_blank" rel="noreferrer">
                    More info <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
          <PrajnyaAlvaM />
          <RoshanPinto />
          <PraveenRaj />
        </div>
      </section>
    </main>
  )
}

export default Administration
