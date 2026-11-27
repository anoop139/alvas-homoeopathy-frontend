import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { useState } from 'react'
import './HospitalIPD.css'

const departments = [
  'General medicine: MALE AND FEMALE',
  'Paediatric',
  'Surgery: MALE & FEMALE',
  'Gynaecology & Obstetrics',
]

const ugBeds = [
  ['General Medicine', 12], ['Paediatrics', 3], ['Surgery', 5], ['Gynaecology & Obstetrics', 5],
]

const pgBeds = [
  ['Materia Medica', 3], ['Organon', 3], ['Repertory', 3], ['General Medicine', 3], ['Paediatrics', 3],
]

const statistics = {
  2026: [
    ['January', 137, 121, 841, 73, 27, 28, 9], ['February', 99, 96, 819, 53, 26, 16, 4],
    ['March', 124, 116, 1098, 67, 30, 18, 9], ['April', 126, 112, 1452, 68, 31, 17, 10],
  ],
  2025: [
    ['January', 112, 109, 777, 48, 29, 27, 8], ['February', 98, 89, 790, 35, 31, 24, 8],
    ['March', 116, 107, 751, 48, 25, 27, 16], ['April', 107, 87, 857, 40, 24, 24, 19],
    ['May', 106, 85, 646, 45, 24, 21, 16], ['June', 105, 86, 792, 42, 25, 22, 16],
    ['July', 118, 104, 911, 52, 25, 22, 19], ['August', 84, 102, 863, 36, 18, 18, 12],
    ['September', 112, 104, 879, 67, 14, 24, 10], ['October', 33, 25, 1023, 30, 3, 2, '-'], ['November', 96, 165, 937, 55, 13, 18, 10], ['December', 123, 117, 797, 60, 27, 28, 11],
  ],
  2024: [
    ['January', 69, 67, 307, 18, 20, 26, 4], ['February', 66, 62, 310, 18, 19, 25, 4],
    ['March', 68, 73, 305, 20, 17, 26, 5], ['April', 70, 69, 159, 20, 18, 27, 4],
    ['May', 104, 91, 714, 43, 28, 26, 5], ['June', 81, 101, 323, 27, 18, 28, 8],
    ['July', 110, 88, 832, 48, 37, 19, 6], ['August', 86, 68, 766, 29, 29, 19, 9],
    ['September', 54, 60, 300, 24, 13, 11, 6], ['October', 86, 79, 335, 45, 24, 12, 5],
    ['November', 101, 92, 549, 42, 27, 24, 8], ['December', 98, 79, 488, 45, 26, 23, 4],
    ['Total', 993, 929, 5388, 383, 276, 266, 68],
  ],
  2023: [
    ['January', 26, 13, 294, 14, 5, 4, 3], ['February', 21, 13, 505, 12, 4, 3, 2],
    ['March', 27, 27, 823, 17, 5, 4, 1], ['April', 22, 23, 740, 9, 11, 1, 1],
    ['May', 20, 22, 285, 12, 7, 1, 0], ['June', 27, 23, 433, 10, 11, 3, 3],
    ['July', 20, 32, 714, 7, 7, 3, 3], ['August', 37, 30, 582, 15, 10, 7, 5],
    ['September', 10, 15, 327, 7, 3, 0, 0], ['October', 65, 51, 646, 35, 19, 8, 3],
    ['November', 77, 83, 477, 35, 25, 12, 5], ['December', 67, 76, 424, 35, 14, 14, 4],
    ['Total', 419, 408, 6250, 208, 121, 60, 30],
  ],
}

const headings = ['MONTH', 'ADMISSION', 'DISCHARGE', 'BED OCCUPANCY', 'MEDICINE', 'SURGERY', 'OBG', 'PAEDIATRICS']

function HospitalIpd() {
  const [hoveredYear, setHoveredYear] = useState(null)
  const [pinnedYears, setPinnedYears] = useState([])
  const [closedOnHover, setClosedOnHover] = useState([])

  return (
    <div className="ipd-page">
      <SiteHeader />
      <main>
        <section className="ipd-hero">
          <div className="ipd-hero__content">
            <h1>HOSPITAL IPD</h1>
          </div>
        </section>

        <div className="ipd-capacity-heading"><h2>40 Bedded Indoor Homoeopathic section.</h2></div>

        <section className="ipd-section ipd-services" id="ipd-services" aria-labelledby="ipd-services-title">
          <div className="ipd-section__intro">
            <h2 id="ipd-services-title">IPD SETUP:</h2>
          </div>
          <div className="ipd-departments">
            {departments.map((department) => <article className="ipd-department" key={department}><h3>{department}</h3></article>)}
          </div>
          <figure className="ipd-hospital-photo"><img src="https://alvashomoeopathy.com/images/HOSPITAL1.jpg" alt="Hospital" /></figure>
        </section>

        <section className="ipd-beds" aria-labelledby="ipd-beds-title">
          <div className="ipd-section ipd-beds__inner">
            <div className="ipd-section__heading ipd-section__heading--center"><div><h2 id="ipd-beds-title">BED DIVISION:</h2></div></div>
            <div className="ipd-bed-groups">
              <article className="ipd-bed-group"><div className="ipd-bed-group__heading"><h3>UG:</h3></div>{ugBeds.map(([name, count]) => <div className="ipd-bed-row" key={name}><span>{name}</span><strong>{count.toString().padStart(2, '0')}</strong></div>)}</article>
              <article className="ipd-bed-group"><div className="ipd-bed-group__heading"><h3>PG (Proposed):</h3></div>{pgBeds.map(([name, count], index) => <div className="ipd-bed-row" key={`${name}-${index}`}><span>{name}</span><strong>{count.toString().padStart(2, '0')}</strong></div>)}</article>
            </div>
          </div>
        </section>

        <section className="ipd-section ipd-statistics" aria-labelledby="ipd-statistics-title">
          {Object.entries(statistics).reverse().map(([year, rows]) => {
            const isOpen = pinnedYears.includes(year) || (hoveredYear === year && !closedOnHover.includes(year))
            return <details className="ipd-statistics__year" key={year} open={isOpen} onMouseEnter={() => { setHoveredYear(year); setClosedOnHover((years) => years.filter((closedYear) => closedYear !== year)) }} onMouseLeave={() => setHoveredYear((currentYear) => currentYear === year ? null : currentYear)}>
            <summary onClick={(event) => { event.preventDefault(); if (isOpen) { setPinnedYears((years) => years.filter((openYear) => openYear !== year)); setClosedOnHover((years) => years.includes(year) ? years : [...years, year]) } else { setClosedOnHover((years) => years.filter((closedYear) => closedYear !== year)); setPinnedYears((years) => years.includes(year) ? years : [...years, year]) } }}><span>IPD STATISTICS -{year}</span><span className="ipd-statistics__toggle" aria-hidden="true">+</span></summary>
            <div className="ipd-statistics__content"><div className="ipd-statistics__content-inner"><div className="ipd-table-wrap"><table className="ipd-table"><thead><tr>{headings.map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{rows.map(([month, ...values]) => <tr className={month === 'Total' ? 'ipd-table__total' : ''} key={month}><th scope="row">{month.toUpperCase()}</th>{values.map((value, index) => <td key={`${month}-${index}`}>{typeof value === 'number' ? value.toLocaleString('en-IN') : value}</td>)}</tr>)}</tbody></table></div></div></div>
          </details>
          })}
        
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}

export default HospitalIpd
