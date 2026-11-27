import SiteHeader from './SiteHeader'
import chairpersonImage from '../Images/Manging Comunity/DrMohan.jpeg'
import vivekAlvaImage from '../Images/Manging Comunity/vivekalva.jpg'
import vinayAlvaImage from '../Images/Manging Comunity/Dr.VinayMAlva.jpg'
import prajnyaAlvaImage from '../Images/Manging Comunity/prajnaalva.jpeg'
import roshanPintoImage from '../Images/Manging Comunity/Dr.RoshanPinto.jpeg'
import praveenRajImage from '../Images/Manging Comunity/Dr.PraveenRajP.jpeg'
import './Administration.css'
import SiteFooter from './SiteFooter'
import { useEffect, useRef, useState } from 'react'
import PrajnyaAlvaM from './PrajnyaAlvaM'
import RoshanPinto from './RoshanPinto'
import PraveenRaj from './PraveenRaj'

const administrators = [
  { name: 'Dr. M. Mohan Alva', role: '(Chairman, AEF)', image: chairpersonImage },
  { name: 'Shri Vivek M Alva', role: 'Managing Trustee, AEF', image: vivekAlvaImage },
  { name: 'Dr Vinay M Alva', role: 'Managing Trustee, AEF', image: vinayAlvaImage },
  {
    name: 'Dr. Prajnya Alva M',
    role: 'Administrative Officer',
    image: prajnyaAlvaImage,
    profileComponent: PrajnyaAlvaM,
  },
  {
    name: 'Dr. H. Roshan Pinto',
    role: 'Principal',
    image: roshanPintoImage,
    profileComponent: RoshanPinto,
  },
  {
    name: 'Dr. Praveen Raj',
    role: 'Advisor',
    image: praveenRajImage,
    profileComponent: PraveenRaj,
  },
]

function Administration() {
  const [activeProfile, setActiveProfile] = useState(null)
  const profileTrigger = useRef(null)

  useEffect(() => {
    if (!activeProfile) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveProfile(null)
        profileTrigger.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeProfile])

  const closeProfile = () => {
    setActiveProfile(null)
    profileTrigger.current?.focus()
  }
  const ActiveProfile = activeProfile?.profileComponent

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
                {person.profileComponent && (
                  <button
                    ref={profileTrigger}
                    className="administration-card__more-info"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={activeProfile?.name === person.name}
                    onClick={() => {
                      profileTrigger.current = document.activeElement
                      setActiveProfile(person)
                    }}
                  >
                    More info <span aria-hidden="true">↗</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
      {activeProfile && (
        <div
          className="administration-profile-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeProfile()
          }}
        >
          <section
            className="administration-profile-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProfile.name} profile`}
          >
            <button
              className="administration-profile-dialog__close"
              type="button"
              aria-label="Close profile"
              onClick={closeProfile}
            >
              <span aria-hidden="true">×</span>
            </button>
            <ActiveProfile embedded />
          </section>
        </div>
      )}

    </main>
  )
}

export default Administration
