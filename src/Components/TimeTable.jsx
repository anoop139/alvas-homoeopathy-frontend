import { useState } from 'react'
import './TimeTable.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import timetablePage1 from '../Images/TimeTable-1.png'
import timetablePage2 from '../Images/TimeTable-2.png'
import timetablePage3 from '../Images/TimeTable-3.png'
import timetablePage4 from '../Images/TimeTable-4.png'
import timetablePage5 from '../Images/TimeTable-5.png'

const timetableData = {
  year: 2026,
  effectiveDate: 'W.E.F. 29th November 2025',
  sheets: [
    { page: 1, imageUrl: timetablePage1 },
    { page: 2, imageUrl: timetablePage2 },
    { page: 3, imageUrl: timetablePage3 },
    { page: 4, imageUrl: timetablePage4 },
    { page: 5, imageUrl: timetablePage5 },
  ],
}

function TimeTable() {
  const [activePage, setActivePage] = useState(1)
  const [imageFailed, setImageFailed] = useState(false)
  const activeSheet = timetableData.sheets[activePage - 1]
  const imageUrl = activeSheet.imageUrl

  const selectPage = (page) => {
    setActivePage(page)
    setImageFailed(false)
  }

  return (
    <main className="time-table-page">
      <SiteHeader />
      <section className="time-table-content" aria-labelledby="time-table-title">
        <header className="time-table-heading">
          <h1 id="time-table-title">Academic Timetable</h1>
        </header>
        <div className="time-table-viewer">
          <div className="time-table-viewer__toolbar">
            <div className="time-table-viewer__page-count" aria-live="polite">
              <span className="time-table-viewer__page-number">{String(activePage).padStart(2, '0')}</span>
              <span>of {String(timetableData.sheets.length).padStart(2, '0')} sheets</span>
            </div>
            <div className="time-table-viewer__actions">
              <button
                className="time-table-viewer__arrow"
                type="button"
                aria-label="Previous batch"
                title="Previous batch"
                disabled={activePage === 1}
                onClick={() => selectPage(activePage - 1)}
              >
                <span aria-hidden="true">&larr;</span>
              </button>
              <button
                className="time-table-viewer__arrow"
                type="button"
                aria-label="Next batch"
                title="Next batch"
                disabled={activePage === timetableData.sheets.length}
                onClick={() => selectPage(activePage + 1)}
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
              <a
                className="time-table-viewer__open"
                href={imageUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open full size <span aria-hidden="true">&nearr;</span>
              </a>
            </div>
          </div>

          <div className="time-table-viewer__canvas">
            {imageFailed ? (
              <p className="time-table-viewer__error" role="alert">
                This timetable sheet could not be loaded. Please try again later.
              </p>
            ) : (
              <div className="time-table-viewer__image-frame">
                <img
                  className="time-table-page-image"
                  src={imageUrl}
                  alt={`2026 academic timetable, sheet ${activeSheet.page} of ${timetableData.sheets.length}`}
                  width="1502"
                  height="1019"
                  onError={() => setImageFailed(true)}
                />
                <nav className="time-table-viewer__pagination" aria-label="Batch navigation">
                  <button
                    className="time-table-viewer__arrow"
                    type="button"
                    aria-label="Previous batch"
                    title="Previous batch"
                    disabled={activePage === 1}
                    onClick={() => selectPage(activePage - 1)}
                  >
                    <span aria-hidden="true">&larr;</span>
                  </button>
                  <button
                    className="time-table-viewer__arrow"
                    type="button"
                    aria-label="Next batch"
                    title="Next batch"
                    disabled={activePage === timetableData.sheets.length}
                    onClick={() => selectPage(activePage + 1)}
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default TimeTable
