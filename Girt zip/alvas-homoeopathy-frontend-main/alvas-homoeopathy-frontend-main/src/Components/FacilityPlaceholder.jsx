import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Facilities.css'
import Facilities from './Facilities'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const facilityTitles = {
  'general-infrastructures': 'General Infrastructures',
  'clinical-facilities': 'Clinical Facilities',
  library: 'Library',
  hostel: 'Hostel',
  'sports-specialty': 'Sports Specialty',
  transportation: 'Transportation',
}

function FacilityPlaceholder() {
  const { facility } = useParams()
  const location = useLocation()
  const title = facilityTitles[facility] ?? 'Facilities'
  const isClinicalFacilities = facility === 'clinical-facilities'

  useEffect(() => {
    const headingId = location.hash.slice(1)
    if (headingId) {
      document.getElementById(headingId)?.scrollIntoView()
    }
  }, [location])

  if (facility === 'general-infrastructures') return <Facilities />

  return (
    <main className="facilities-page facilities-page--subroute">
      <SiteHeader />
      <section className="general-infrastructures" aria-labelledby="facility-placeholder-title">
        <header className="general-infrastructures__heading">
          <h1 id={facility}>{title}</h1>
          {isClinicalFacilities ? (
            <p>Learn through supervised, hands-on experience in hospitals, clinics, and community health settings.</p>
          ) : (
            <p>Yet to be created</p>
          )}
        </header>
        {isClinicalFacilities && (
          <div className="general-infrastructures__grid">
            <article className="general-infrastructures__card">
              <h2>Hands-on Clinical Training</h2>
              <p>Students care for patients under the supervision of qualified faculty, applying classroom learning and building practical skills.</p>
            </article>
            <article className="general-infrastructures__card">
              <h2>Hospital and Community Experience</h2>
              <p>Clinical training is provided through the attached general multispecialty hospital, the Community Health Centre in Moodbidri, and Mount Rosario Charitable Institute in Alangar.</p>
            </article>
          </div>
        )}
      </section>
      <SiteFooter />
    </main>
  )
}

export default FacilityPlaceholder
