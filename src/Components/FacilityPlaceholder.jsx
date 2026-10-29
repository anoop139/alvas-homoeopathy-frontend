import { useParams } from 'react-router-dom'
import './GeneralInfrastructures.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const facilityTitles = {
  'clinical-facilities': 'Clinical Facilities',
  library: 'Library',
  hostel: 'Hostel',
  'sports-specialty': 'Sports Specialty',
  transportation: 'Transportation',
}

function FacilityPlaceholder() {
  const { facility } = useParams()
  const title = facilityTitles[facility] ?? 'Facilities'

  return (
    <main className="facilities-page">
      <SiteHeader />
      <section className="general-infrastructures" aria-labelledby="facility-placeholder-title">
        <header className="general-infrastructures__heading">
          <h1 id="facility-placeholder-title">{title}</h1>
          <p>Yet to be created</p>
        </header>
      </section>
      <SiteFooter />
    </main>
  )
}

export default FacilityPlaceholder
