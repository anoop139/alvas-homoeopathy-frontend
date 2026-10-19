import './ChairpersonMessage.css'
import SiteHeader from './SiteHeader'
import PrincipalImg from '../Images/Try.jpeg'

function PrincipalMessage() {
  return (
    <main className="chairperson-message-page">
      <SiteHeader />
      <section className="chairperson-message" aria-labelledby="principal-message-title">
        <div className="chairperson-message__content">
          <h1 id="principal-message-title">Principal's Message</h1>
          <img src={PrincipalImg} alt="Dr. Herald Roshan Pinto" />
          <div className="principal-identity">
            <h2>Dr. Herald Roshan Pinto</h2>
            <p className="principal-identity__qualification">B.H.M.S., M.D. (Hom.)</p>
            <p className="principal-identity__role">Principal</p>
          </div>
          <p className="principal-message__body">
            Alva’s Homoeopathic Medical College shares a larger vision of growth in the medical field. Inspired by
            founder and visionary Dr. M. Mohan Alva, the college stands for quality education, clinical training,
            and the inculcation of human values in every student. Our vision is to help each student become a
            competitive, confident homoeopath over five and a half years of homoeopathic medical education.
            Knowledgeable faculty, dedicated staff, and encouraging management support this vision. Alva’s
            Homoeopathic Medical College aims to serve society and our nation by helping students become
            well-rounded homoeopaths with strong medical knowledge, clinical skills, and a sense of social
            responsibility.
          </p>
        </div>
      </section>
    </main>
  )
}

export default PrincipalMessage
