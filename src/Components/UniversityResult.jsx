import './LibraryResult.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const universityResultsUrl = 'https://alvashomoeopathy.com/files/RGUHSrankholder2019-25.pdf'

function UniversityResult() {
  return (
    <main className="library-result-page">
      <SiteHeader />
      <section className="library-result" aria-labelledby="university-result-title">
        <header className="library-result__heading">
          <div>
            <h1 id="university-result-title">University Results</h1>
          </div>
          <a
            className="library-result__open"
            href={universityResultsUrl}
            target="_blank"
            rel="noreferrer"
          >
            View University Results <span aria-hidden="true">↗</span>
          </a>
        </header>
      </section>
      <SiteFooter />
    </main>
  )
}

export default UniversityResult
