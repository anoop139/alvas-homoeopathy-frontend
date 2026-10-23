import './BHMSCourse.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const courseDurations = [
  ['First Professional B.H.M.S.', '18 Months'],
  ['Second Professional B.H.M.S.', '12 Months'],
  ['Third Professional B.H.M.S.', '12 Months'],
  ['Fourth (Final) Professional B.H.M.S.', '12 Months'],
  ['Compulsory Rotatory Internship', '12 Months'],
]

function BHMSCourse() {
  return (
    <main className="bhms-course-page">
      <SiteHeader />
      <section className="bhms-course-content" aria-labelledby="bhms-course-title">
        <header className="bhms-course-heading">

        </header>
        <div className="bhms-course-card">
          <h2>Duration of Bachelor of Homoeopathic Medicine and Surgery (B.H.M.S.) Course</h2>
          <p className="bhms-course-duration">5 years and 6 months as specified in the table below:</p>
          <div className="bhms-course-table-wrap">
          {/* <h1 id="bhms-course-title">B.H.M.S Course</h1> */}
            <table className="bhms-course-table">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {courseDurations.map(([course, duration]) => (
                  <tr key={course}>
                    <th scope="row">{course}</th>
                    <td>{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default BHMSCourse
