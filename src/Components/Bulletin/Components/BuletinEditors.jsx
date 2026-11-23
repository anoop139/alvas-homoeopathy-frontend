import { useMemo, useState } from 'react'
import './BuletinEditors.css'
import BulletinFooter from './BulletinFooter'
import heroDeskImage from '../../../Images/EditorCover.jpg'
import ninthEditionCover from '../../../Images/HomeoInsight9TH.jpeg'

const editions = [
  { year: 2024, quarter: 'Q2', number: 1, period: 'July 01 2024', cover: 'Screenshot2024-06-03195630.jpg', read: 'AHI/EDI%201/index.html', pdf: 'Homoeo%20Insight.pdf' },
  { year: 2024, quarter: 'Q3', number: 2, period: 'October 01 2024', cover: 'HomoeoInsight2ND.png', read: 'AHI/EDI%202/index.html', pdf: 'HomoeoInsight2ND.pdf' },
  { year: 2025, quarter: 'Q1', number: 3, period: 'Jan-Mar 2025', cover: 'HomoeoInsight3RD.png', read: 'AHI/EDI%203/index.html', pdf: 'HomoeoInsight3RD1_compressed.pdf' },
  { year: 2025, quarter: 'Q2', number: 4, period: 'Apr-Jun 2025', cover: 'Homoeoinsight4ND.png', read: 'AHI/EDI%204/index.html', pdf: 'Homoeoinsight4RND.pdf' },
  { year: 2025, quarter: 'Q3', number: 5, period: 'Jul-Sep 2025', cover: 'HomeoInsight5TH.png', read: 'AHI/EDI%205/index.html', pdf: 'HomeoInsights5TH.pdf' },
  { year: 2025, quarter: 'Q4', number: 6, period: 'Oct-Dec 2025', cover: 'HomeoInsight6TH.png', read: 'AHI/EDI%206/index.html', pdf: 'HomoeoInsight6TH.pdf' },
  { year: 2026, quarter: 'Q1', number: 7, period: 'Jan-Mar 2026', cover: 'HomeoInsight7TH.png', read: 'https://heyzine.com/flip-book/b5ce9f3606.html', pdf: 'HomoeoInsight7TH.pdf' },
  { year: 2026, quarter: 'Q2', number: 8, period: 'Apr-Jun 2026', cover: 'HomeoInsight8TH.png', read: 'AHI/EDI%208/index.html', pdf: 'HomoeoInsight8TH.pdf' },
  { year: 2026, quarter: 'Q3', number: 9, period: 'Jul-Sep 2026', cover: 'HomeoInsight9TH.jpeg', read: 'https://heyzine.com/flip-book/018504e362.html#page/1', pdf: 'HomoeoInsight9TH.pdf' },
]

const insightUrl = (path) => path.startsWith('https://') ? path : `https://alvashomoeopathy.com/Insight/${path}`

function BuletinEditors() {
  const [activeYear, setActiveYear] = useState('All')
  const visibleEditions = useMemo(
    () => activeYear === 'All' ? editions : editions.filter(({ year }) => year === Number(activeYear)),
    [activeYear],
  )

  return (
    <div className="bulletin-editions">
      <div className="bulletin-editions-banner">
        <img src={heroDeskImage} alt="Laptop and mug on a desk" />
        <div className="bulletin-editions-banner-label">
          <p>Alva's</p>
          <span aria-hidden="true" />
          <h1 id="editions-title">Homoeo Insight</h1>
        </div>
      </div>
      <section className="bulletin-editions-intro" aria-labelledby="editions-title">
        <div className="bulletin-editions-intro-content">
          <p>Explore every edition of our college bulletin.</p>
          <div className="bulletin-year-filters" aria-label="Filter editions by year">
            {['All', 2024, 2025, 2026].map((year) => (
              <button key={year} type="button" className={activeYear === year ? 'is-active' : ''} aria-pressed={activeYear === year} onClick={() => setActiveYear(year)}>
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="bulletin-editions-list" aria-label="Bulletin editions">
        <div className="bulletin-edition-grid">
          {visibleEditions.map(({ year, quarter, number, period, cover, read, pdf }) => (
            <article className="bulletin-edition-card" key={number}>
              <div className="bulletin-edition-year">{year}</div>
              <a className="bulletin-edition-cover-link" href={insightUrl(read)} target="_blank" rel="noreferrer" aria-label={`Read edition ${number}`}>
                <img
                  className="bulletin-edition-cover"
                  src={number === 9 ? ninthEditionCover : insightUrl(`images/${cover}`)}
                  alt={`Alva's Homoeo Insight edition ${number} cover`}
                  loading="lazy"
                />
              </a>
              <div className="bulletin-edition-info">
                <span className="bulletin-edition-quarter">{quarter}</span>
                <h2>Alva's Homoeo Insight</h2>
                <p>Edition {number}, {period}.</p>
                <div className="bulletin-edition-actions">
                  <a href={insightUrl(read)} target="_blank" rel="noreferrer">Read now <span aria-hidden="true">&#8599;</span></a>
                  <a href={insightUrl(`files/${pdf}`)} target="_blank" rel="noreferrer">Download PDF <span aria-hidden="true">&#8595;</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <BulletinFooter />
    </div>
  )
}

export default BuletinEditors
