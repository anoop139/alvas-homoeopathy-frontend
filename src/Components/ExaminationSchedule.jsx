import './ExaminationSchedule.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const examinationSchedules = [
  {
    title: 'I Professional B.H.M.S.',
    examinations: [
      {
        name: 'Periodical assessment exams',
        details: 'A minimum of 3 for each subject, ordinarily in the 4th, 9th, and 14th months.',
      },
      {
        name: 'Term exams',
        details: 'Ordinarily in the 6th and 11th months.',
      },
      {
        name: 'Pre-University Examination',
        details: 'Ordinarily in the 16th month. The College conducts this examination before the Final University Examination.',
      },
    ],
  },
  {
    title: 'II, III & IV Professional B.H.M.S.',
    examinations: [
      {
        name: 'Periodical assessment exams',
        details: 'A minimum of 2 for each subject, ordinarily in the 4th and 9th months.',
      },
      {
        name: 'Term exams',
        details: 'Ordinarily in the 6th month.',
      },
      {
        name: 'Pre-University Examination',
        details: 'Ordinarily in the 10th month. The College conducts this examination before the Final University Examination.',
      },
    ],
  },
]

function ExaminationSchedule() {
  return (
    <main className="examination-schedule-page">
      <SiteHeader />
      <section className="examination-schedule" aria-labelledby="examination-schedule-title">
        <header className="examination-schedule__heading">
          <h1 id="examination-schedule-title">Examination Schedule</h1>
        </header>

        <div className="examination-schedule__grid">
          {examinationSchedules.map((schedule, index) => (
            <section
              className="examination-schedule__card"
              key={schedule.title}
              aria-labelledby={`examination-schedule-group-${index}`}
            >
              <header className="examination-schedule__card-heading">
                <h2 id={`examination-schedule-group-${index}`}>{schedule.title}</h2>
              </header>
              <ul className="examination-schedule__list">
                {schedule.examinations.map((examination) => (
                  <li className="examination-schedule__item" key={examination.name}>
                    <span className="examination-schedule__marker" aria-hidden="true" />
                    <div>
                      <h3>{examination.name}</h3>
                      <p>{examination.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default ExaminationSchedule
