import './Facilities.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

function CollegeCouncil() {
  return (
    <main className="facilities-page">
      <SiteHeader />
      <section className="general-infrastructures" aria-labelledby="college-council-title">
        <header className="general-infrastructures__heading college-council__heading">
          <h1 id="college-council-title">College Council</h1>
          <p>
            College councils are an essential part of academics. They provide a platform for staff to
            voice their opinions, organize events, and make a difference in the community. College
            councils are advisory bodies that provide a formal avenue of communication for all staff,
            ensuring important staff policies and benefits, concerns, and recommendations are heard
            and addressed for smooth functioning of the college.
          </p>
        </header>
        <div className="general-infrastructures__grid college-council__grid">
          <article className="general-infrastructures__card college-council__card">
            <a
              className="college-council__document"
              href="https://alvashomoeopathy.com/files/COLLEGECOUNCIL.pdf"
              target="_blank"
              rel="noreferrer"
              title='A pdf link'
            >
              COLLEGE COUNCIL 
            </a>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default CollegeCouncil
