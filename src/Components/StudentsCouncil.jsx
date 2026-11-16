import './StudentList.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import council2025Image from '../Images/Student_council_2025-2026.jpg'

const councils = [
  {
    year: '2025-2026',
    columns: ['POSITION', 'name of the student'],
    image: council2025Image,
    rows: [
      ['Chairperson', 'Sai Bhuvan Kottary'],
      ['Vice-Chair Person', 'Sachin Gavit'],
      ['General Secretory', 'D Aradhana Bhat'],
      ['Joint Secretory', 'Sakshi Readdy'],
      ['Treasurer', 'Visheth Poojary|Shweta Dhole'],
      ['NSS Cordinator', 'Sagar Huchhannavar|Shreya|Neha'],
      ['Cultural Co-Ordinator', 'Prutha Rai|Prajakta R Khatal|Drakshayani Ballari'],
      ['Sports Coordinator', 'Ashish Pandey|Meethika CS|Devendra Bhat'],
      ['Media & Publicity', 'Asil Farhan|Akshata|Abdul Raheman'],
      ['Magazine & Literature', 'Akshara Shetty|Nithya B|Prajwal B'],
      ['Boys Representative', 'Shubham Bhanushali'],
      ['Girls Representative', 'Bhavana CN'],
    ],
  },
]

function StudentsCouncil() {
  return (
    <main className="student-list-page council-page">
      <SiteHeader />
      <section className="student-list-content council-content" aria-labelledby="students-council-title">
        <h1 id="students-council-title">Student Council</h1>

        {councils.map(({ year, columns, rows, image }) => (
          <section className="council-year" key={year} aria-labelledby={`council-${year}`}>
            <h2 id={`council-${year}`}>Council Members · Academic Year {year}</h2>
            <div className="council-table-wrap">
              <table className="council-table">
                <thead>
                  <tr>
                    {columns.map((column) => <th key={column} scope="col">{column}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([position, students, years]) => (
                    <tr key={position}>
                      <td>{position}</td>
                      <td>{students.split('|').map((student) => <span key={student}>{student}</span>)}</td>
                      {years && <td>{years.split('|').map((studyYear) => <span key={studyYear}>{studyYear}</span>)}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <img
              className="council-poster"
              src={image}
              alt={`Student council ${year} poster`}
              width="933"
              height="1600"
              loading="lazy"
              decoding="async"
            />
          </section>
        ))}
      </section>
      <SiteFooter />
    </main>
  )
}

export default StudentsCouncil
