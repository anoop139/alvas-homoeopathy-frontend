import { useEffect } from 'react'
import './BHMSCourse.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const subjects = [
  ['HomUG-HMM-II', 'Homoeopathic Materia Medica'],
  ['HomUG-OM-II', 'Organon with Homoeopathic Philosophy and Fundamentals of Psychology'],
  ['HomUG-R-II', 'Homoeopathic Repertory & Case Taking'],
  ['HomUG-FMT', 'Forensic Medicine and Toxicology'],
  ['HomUG-Path M', 'Pathology and Microbiology'],
  ['HomUG-Sur-I', 'Surgery'],
  ['HomUG-ObGy-I', 'Gynecology & Obstetrics'],
  ['HomUG-PM-I', 'Practice Of Medicine'],
  ['HomUG-Yoga-II', 'Department of yoga'],
]

function SecondProfesionalHtml() {
  useEffect(() => {
    document.title = 'Second Professional B.H.M.S. Subjects'
  }, [])

  return (
    <main className="bhms-course-page first-professional-bhms-page second-professional-bhms-page">
      <SiteHeader />
      <section className="bhms-course-content" aria-labelledby="second-professional-bhms-title">
        <header className="bhms-course-heading">
          <h1 id="second-professional-bhms-title">Second Professional B.H.M.S. Subjects</h1>
        </header>
        <div className="bhms-course-card">
          <div className="bhms-course-table-wrap">
            <table className="bhms-course-table">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map(([code, subject]) => (
                  <tr key={code}>
                    <th scope="row">{code}</th>
                    <td>{subject}</td>
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

export default SecondProfesionalHtml
