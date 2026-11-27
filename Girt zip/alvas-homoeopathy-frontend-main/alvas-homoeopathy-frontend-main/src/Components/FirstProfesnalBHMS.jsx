import { useEffect } from 'react'
import './BHMSCourse.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const subjects = [
  ['HomUG-HMM-I', 'Homoeopathic Materia Medica'],
  ['HomUG-OM-I', 'Organon with Homoeopathic Philosophy and Fundamentals of Psychology'],
  ['HomUG-R-I', 'Homoeopathic Repertory & Case Taking'],
  ['HomUG-HP', 'Homoeopathic Pharmacy'],
  ['HomUG-AN', 'Human Anatomy'],
  ['HomUG-PB', 'Human Physiology & Biochemistry'],
  ['HomUG-Yoga I', 'Department of yoga'],
]

function FirstProfesnalBHMS() {
  useEffect(() => {
    document.title = 'First Professional B.H.M.S. Subjects'
  }, [])

  return (
    <main className="bhms-course-page first-professional-bhms-page">
      <SiteHeader />
      <section className="bhms-course-content" aria-labelledby="first-professional-bhms-title">
        <header className="bhms-course-heading">
          <h1 id="first-professional-bhms-title">First Professional B.H.M.S. Subjects</h1>
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
                    <td className="first-professional-bhms-subject">{subject}</td>
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

export default FirstProfesnalBHMS
