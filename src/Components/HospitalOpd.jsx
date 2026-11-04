import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './HospitalOPD.css'

const units = [
  ['01', 'Medicine'],
  ['02', 'Gynaecology & Obstetrics'],
  ['03', 'Paediatrics and Reproductive and Child Health'],
  ['04', 'Surgery'],
]

const clinics = [
  ['Moodbidri', 'Monday to Saturday', '9:00 AM – 5:00 PM'],
  ['Niramaya', 'Monday, Wednesday, Friday', '9:00 AM – 5:00 PM'],
  ['Pakshikere', 'Tuesday', '9:00 AM – 3:30 PM'],
  ['Pakshikere Church', 'Tuesday', '9:00 AM – 3:30 PM'],
  ['Hosangady', 'Friday', '9:00 AM – 1:00 PM'],
  ['Hudco Colony', 'Wednesday', '9:00 AM – 1:00 PM'],
  ['Kodyadka', 'Friday', '9:00 AM – 3:00 PM'],
  ['Alangar', 'Thursday', '9:00 AM – 1:00 PM'],
  ['Surathkal', '2nd and 4th Saturday', '9:00 AM – 1:00 PM'],
  ['Iruvail', '2nd and 4th Friday', '9:00 AM – 1:00 PM'],
  ['Puttige', 'Monday', '9:00 AM – 1:00 PM'],
  ['Shirthady', 'Monday', '9:00 AM – 1:00 PM'],
  ['Guddeyangady', 'Saturday', '9:00 AM – 1:00 PM'],
  ['School Camps', '11 School on Rotation', ''],
]

const stats = {
  2026: [
    ['January', 3279, 5277, 3723, 1830, 1770, 1233, 8556],
    ['February', 2743, 4757, 3536, 1454, 1443, 1067, 7500],
    ['March', 3414, 2970, 4057, 969, 2151, 2207, 9384],
    ['April', 3368, 5853, 3648, 1399, 1855, 2319, 9221],
  ],
  2025: [
    ['January', 3070, 4500, 2829, 1764, 1853, 1124, 7570], ['February', 2610, 3875, 2515, 1463, 1528, 979, 6485],
    ['March', 3381, 5159, 4538, 1623, 1404, 975, 8540], ['April', 3277, 5125, 4182, 1553, 1646, 1021, 8402],
    ['May', 3256, 4908, 4126, 1510, 1542, 986, 8164], ['June', 3478, 5382, 4658, 1561, 1596, 1045, 8860],
    ['July', 3682, 5825, 5045, 1640, 1736, 1086, 9507], ['August', 3225, 4792, 3948, 1463, 1454, 1152, 8017],
    ['September', 3478, 5545, 4815, 1507, 1654, 1047, 9023], ['October', 2000, 2520, 2381, 781, 818, 540, 4520],
    ['November', 2871, 4798, 3865, 1400, 1439, 965, 7669], ['December', 3789, 5919, 4761, 1914, 1918, 1115, 9708],
    ['Total', 38117, 58348, 47663, 18179, 18588, 12035, 96465],
  ],
  2024: [
    ['January', 2537, 4203, 3126, 1332, 1408, 874, 6740], ['February', 2500, 4179, 2924, 1446, 1439, 870, 6679],
    ['March', 2543, 4384, 2952, 1452, 1716, 807, 6927], ['April', 3118, 1230, 3447, 1922, 2218, 1051, 8643],
    ['May', 3058, 5300, 3058, 1972, 2187, 1141, 8358], ['June', 2641, 4173, 2812, 1655, 1590, 757, 6814],
    ['July', 2849, 4665, 3625, 1531, 1283, 1075, 7514], ['August', 2853, 4812, 3747, 1563, 1398, 957, 7665],
    ['September', 3282, 4590, 3711, 1784, 1487, 890, 7872], ['October', 2834, 5149, 3716, 1712, 1596, 959, 7983],
    ['November', 2970, 4651, 2841, 1778, 1893, 1109, 7621], ['December', 3026, 4483, 2816, 1708, 1861, 1124, 7509],
    ['Total', 34211, 56109, 38775, 19855, 20076, 11614, 90320],
  ],
  2023: [
    ['January', 2315, 4339, 2597, 1532, 1217, 1308, 6654], ['February', 1936, 3730, 1984, 1236, 1098, 1348, 5666],
    ['March', 2180, 4111, 2248, 1435, 1227, 1381, 6291], ['April', 1954, 3616, 1946, 1281, 1132, 1211, 5570],
    ['May', 1982, 3874, 2094, 1362, 1154, 1246, 5856], ['June', 2125, 3960, 2168, 1416, 1181, 1320, 6085],
    ['July', 2096, 4002, 2089, 1450, 1203, 1356, 6098], ['August', 2251, 3977, 2182, 1454, 1218, 1374, 6228],
    ['September', 1851, 3741, 2304, 1218, 1140, 930, 5592], ['October', 2237, 4245, 2901, 1236, 1253, 1092, 6482],
    ['November', 2110, 3867, 2858, 1192, 999, 928, 5977], ['December', 2436, 4176, 3123, 1357, 1032, 1100, 6612],
    ['Total', 25473, 47638, 28494, 16169, 13854, 14594, 73111],
  ],
}

const statHeadings = ['MONTH', 'NEW', 'FOLLOW UP', 'MEDICINE', 'SURGERY', 'OBG', 'PAED', 'TOTAL']

function HospitalOpd() {
  return (
    <div className="opd-page">
      <SiteHeader />
      <main>
        <section className="opd-hero">
          <div className="opd-hero__content">
            <h1>HOSPITAL OPD</h1>
          </div>
        </section>

        <section className="opd-section opd-central" aria-labelledby="central-title">
          <div className="opd-central__intro">
            <h2 id="central-title">Central OPD:</h2>
            <p className="opd-central__address">ADDRESS: Shobhavana Campus, Thenka Mijar, Moodbidri.</p>
          </div>
          <div className="opd-units"><h3 className="opd-units__heading">Divisions:</h3>{units.map(([number, name]) => <article className="opd-unit" key={number}><span>UNIT – {number}:</span><h3>{name}</h3></article>)}</div>
        </section>

        <section className="opd-section opd-locations" id="clinic-locations" aria-labelledby="locations-title">
          <div className="opd-section__heading opd-section__heading--center"><div><h2 id="locations-title">PERIPHERALS</h2></div></div>
          <div className="opd-table-wrap"><table className="opd-table"><thead><tr><th scope="col">PLACE</th><th scope="col">DAY</th><th scope="col">TIMINGS</th></tr></thead><tbody>{clinics.map(([place, day, time]) => <tr key={place}><th scope="row">{place}</th><td>{day}</td><td>{time}</td></tr>)}</tbody></table></div>
        </section>

        <section className="opd-section opd-statistics" aria-label="OPD STATISTICS">
          {Object.entries(stats).map(([year, rows]) => <details className="opd-statistics__year" key={year} open={year === '2026'}>
            <summary><span>OPD STATISTICS -{year}</span><span className="opd-statistics__toggle" aria-hidden="true">+</span></summary>
            <div className="opd-table-wrap"><table className="opd-table opd-table--stats"><thead><tr>{statHeadings.map((heading) => <th key={heading} scope="col">{heading}</th>)}</tr></thead><tbody>{rows.map(([month, ...values]) => <tr className={month === 'Total' ? 'opd-table__total' : ''} key={month}><th scope="row">{month.toUpperCase()}</th>{values.map((value, index) => <td key={`${month}-${index}`}>{value.toLocaleString('en-IN')}</td>)}</tr>)}</tbody></table></div>
          </details>)}
 
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default HospitalOpd
