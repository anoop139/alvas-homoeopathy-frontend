 import { useEffect } from 'react'
import './BHMSCourse.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const subjects = [
  ['HomUG-HMM-IV', 'Homoeopathic Materia Medica'],
  ['HomUG-OM-IV', 'Organon with Homoeopathic Philosophy and Fundamentals of Psychology'],
  ['HomUG-R-IV', 'Homoeopathic Repertory & Case Taking'],
  ['HomUG-PM-III', 'Practice Of Medicine'],
  ['HomUG-CM-RM-Stat-II', 'Community Medicine, Research Methodology & Biostatistics'],
  ['HomUG-Yoga-IV', 'Department of yoga'],
]

function FinalProfesionalHtml() {
  useEffect(() => {
    document.title = 'Final Professional B.H.M.S. Subjects'
  }, [])

  return (
    <main className="bhms-course-page first-professional-bhms-page final-professional-bhms-page">
      <SiteHeader />
      <section className="bhms-course-content" aria-labelledby="final-professional-bhms-title">
        <header className="bhms-course-heading">
          <h1 id="final-professional-bhms-title">Final Professional B.H.M.S. Subjects</h1>
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
          <p className="bhms-course-duration final-professional-bhms-note">
            Subjects taught in professional session year wise as per the syllabus laid down by Homoeopathy Education Board and approved by the Commission.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default FinalProfesionalHtml
