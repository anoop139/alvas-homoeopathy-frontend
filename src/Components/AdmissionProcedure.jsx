import './AdmissionProcedure.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const requiredDocuments = [
  'PUC / PDC / HSE (10+2) examination marks card, original, with five photocopies',
  'SSLC / 10th examination marks card, with five photocopies',
  'Transfer or school-leaving certificate, with five photocopies',
  'Migration certificate, with five photocopies, for applicants from another state or country',
  'Passport size photos 5 + Stamp size photos 3.',
  'RGUHS eligibility certificate',
  'Caste certificate, with five photocopies',
  'Character certificate, with five photocopies',
  'Medical fitness certificate',
  'Aadhaar card copy',
  'NEET marks card',
  'Registration on the Karnataka Examinations Authority website',
]

const contacts = [
  { name: "Alva's Homoeopathic Medical College office", phone: '+91-7090639555' },
  { name: 'Dr. Herald Roshan Pinto, Principal', phone: '+91-9845303492' },
  { name: 'Dr. Prajnya Alva M, Assistant Administrative Officer', phone: '+91-8722430123' },
]

function AdmissionProcedure() {
  return (
    <main className="admission-procedure-page">
      <SiteHeader />
      <section className="admission-procedure-content" aria-labelledby="admission-procedure-title">
        <header className="admission-procedure-heading">
          
          <h1 id="admission-procedure-title">Admission Procedure</h1>
          <p>Eligibility, application, selection, and document information for B.H.M.S. applicants.</p>
        </header>

        <section className="admission-procedure-card" aria-labelledby="eligibility-title">
          <h2 id="eligibility-title">Eligibility</h2>
          <ul>
            <li>
              The candidate shall have passed 10+2 or its equivalent examination from any recognised Board with
              Physics, Chemistry, Biology and have obtained minimum of 50% marks taken together in Physics,
              Chemistry and Biology / Biotechnology in case of student belonging to general category and 40% marks
              in case of student belonging to the Scheduled Castes, Scheduled Tribes and Other Backward Classes and
              eligibility as per Govt. norms related to NEET. All foreign nationals should have equivalent educational
              qualification approved by Board of All Indian Universities, New Delhi.
            </li>
            <li>
              No candidate shall be considered for admission in Bachelor of Homoeopathic Medicine and Surgery
              (B.H.M.S.) Course unless the candidate attains the age of 17 years on or before the 31st day of
              December of the year of admission in the first year of the Course.
            </li>
          </ul>
        </section>

        <section className="admission-procedure-card" aria-labelledby="application-title">
          <h2 id="application-title">Application and selection</h2>
          <ol>
            <li>Request the prospectus and application form from the college office; the source page lists a fee of Rs. 500.</li>
            <li>Submit the completed application with the Rs. 500 registration fee.</li>
            <li>Eligible applications are reviewed, and candidates are selected in merit order.</li>
            <li>Selected candidates complete admission by paying the prescribed fees.</li>
          </ol>
        </section>

        <section className="admission-procedure-card" aria-labelledby="documents-title">
          <h2 id="documents-title">Documents to prepare</h2>
          <ul className="admission-procedure-documents">
            {requiredDocuments.map((document) => <li key={document}>{document}</li>)}
          </ul>
          <p className="admission-procedure-note">
            Check with the college whether originals, copies, or additional documents are required for your application.
          </p>
        </section>

        <section className="admission-procedure-card" aria-labelledby="contact-title">
          <h2 id="contact-title">Admission enquiries</h2>
          <ul className="admission-procedure-contacts">
            {contacts.map(({ name, phone }) => (
              <li key={phone}>
                <span>{name}</span>
                <a href={`tel:${phone.replaceAll('-', '')}`}>{phone}</a>
              </li>
            ))}
          </ul>
          <a
            className="admission-procedure-kea-link"
            href="https://cetonline.karnataka.gov.in/kea/"
            target="_blank"
            rel="noreferrer"
          >
            Karnataka Examinations Authority website <span aria-hidden="true">↗</span>
          </a>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}

export default AdmissionProcedure
