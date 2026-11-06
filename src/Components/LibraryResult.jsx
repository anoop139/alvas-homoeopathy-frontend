import './LibraryResult.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const libraryDataUrl = 'https://alvashomoeopathy.com/files/LibraryData.pdf'
function LibraryResult() {
  return (
    <main className="library-result-page">
      <SiteHeader />
      <section className="library-result" aria-labelledby="library-result-title">
        <header className="library-result__heading">
          <div>
            <h1 id="library-result-title">Library Data</h1>
          </div>
          <a
            className="library-result__open"
            href={libraryDataUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open full document <span aria-hidden="true">↗</span>
          </a>
        </header>
      </section>
      <SiteFooter />
    </main>
  )
}

export default LibraryResult
