import './LibraryResult.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const staffResearchUrl = 'https://alvashomoeopathy.com/files/staffacivements.pdf'

function StaffResearchPublications() {
  return (
    <main className="library-result-page">
      <SiteHeader />
      <section className="library-result" aria-labelledby="staff-research-title">
        <header className="library-result__heading">
          <h1 id="staff-research-title">Staff Research &amp; Publications</h1>
          <a
            className="library-result__open"
            href={staffResearchUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Staff Research &amp; Publications <span aria-hidden="true">↗</span>
          </a>
        </header>
      </section>
      <SiteFooter />
    </main>
  )
}

export default StaffResearchPublications
