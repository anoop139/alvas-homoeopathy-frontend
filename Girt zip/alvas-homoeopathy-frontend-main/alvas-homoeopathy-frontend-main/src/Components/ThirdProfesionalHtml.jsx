import { useEffect } from 'react'
import './BHMSCourse.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const subjects = [
  ['HomUG-HMM-III', 'Homoeopathic Materia Medica'],
  ['HomUG-OM-III', 'Organon with Homoeopathic Philosophy and Fundamentals of Psychology'],
  ['HomUG-R-III', 'Homoeopathic Repertory & Case Taking'],
  ['HomUG-PM-II', 'Practice Of Medicine'],
  ['HomUG-Mod.Phar', 'Essentials Of Pharmacology'],
  ['HomUG-Sur-II', 'Surgery'],
  ['HomUG-ObGy-II', 'Gynecology & Obstetrics'],
  ['HomUG-CM-I', 'Community Medicine'],
  ['HomUG-Yoga-III', 'Department of yoga'],
]

function ThirdProfesionalHtml() {
  useEffect(() => {
    document.title = 'Third Professional B.H.M.S. Subjects'
  }, [])

  return (
    <main className="bhms-course-page first-professional-bhms-page third-professional-bhms-page">
      <SiteHeader />
      <section className="bhms-course-content" aria-labelledby="third-professional-bhms-title">
        <header className="bhms-course-heading">
          <h1 id="third-professional-bhms-title">Third Professional B.H.M.S. Subjects</h1>
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

export default ThirdProfesionalHtml
