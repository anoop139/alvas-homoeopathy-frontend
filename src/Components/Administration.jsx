import SiteHeader from './SiteHeader'
import chairpersonImage from '../Images/Manging Comunity/DrMohan.jpeg'
import vivekAlvaImage from '../Images/Manging Comunity/vivekalva.jpg'
import vinayAlvaImage from '../Images/Manging Comunity/Dr.VinayMAlva.jpg'
import prajnyaAlvaImage from '../Images/Manging Comunity/prajnaalva.jpeg'
import roshanPintoImage from '../Images/Manging Comunity/Dr.RoshanPinto.jpeg'
import praveenRajImage from '../Images/Manging Comunity/Dr.PraveenRajP.jpeg'
import './Administration.css'
import { NavLink } from 'react-router-dom'

const administrators = [
  { name: 'Dr. M. Mohan Alva', role: '(Chairman, AEF)', image: chairpersonImage },
  { name: 'Shri Vivek M Alva', role: 'Managing Trustee, AEF', image: vivekAlvaImage },
  { name: 'Dr Vinay M Alva', role: 'Managing Trustee, AEF', image: vinayAlvaImage },
  {
    name: 'Dr. Prajnya Alva M',
    role: 'Administrative Officer',
    image: prajnyaAlvaImage,
    moreInfoUrl:'/PrajnyaAlvaM',
  },
  {
    name: 'Dr. H. Roshan Pinto',
    role: 'Principal',
    image: roshanPintoImage,
    moreInfoUrl: '/RoshanPinto',
  },
  {
    name: 'Dr. Praveen Raj',
    role: 'Advisor',
    image: praveenRajImage,
    moreInfoUrl: '/PraveenRaj',
  },
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
                  <NavLink className="administration-card__more-info" to={person.moreInfoUrl} >
                    More info <span aria-hidden="true">↗</span>
                  </NavLink>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Administration
