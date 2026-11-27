import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './HospitalCampus.css'
import hospitalCampBloodImage from '../Images/Campus-img/hospital-camp-blood.jpg'
import hospitalCampMulkyImage1 from '../Images/Campus-img/hospital-camp-mulky-01.jpg'
import hospitalCampMulkyImage2 from '../Images/Campus-img/hospital-camp-mulky-02.jpg'
import hospitalCampSchoolImage1 from '../Images/Campus-img/hospital-camp-school-01.jpg'
import hospitalCampSchoolImage2 from '../Images/Campus-img/hospital-camp-school-02.jpg'
import hospitalCampHighSchoolImage1 from '../Images/Campus-img/hospital-camp-high-school-01.jpg'
import hospitalCampHighSchoolImage2 from '../Images/Campus-img/hospital-camp-high-school-02.png'
import hospitalCampAnganawadiImage1 from '../Images/Campus-img/hospital-camp-anganawadi-01.jpg'
import hospitalCampAnganawadiImage2 from '../Images/Campus-img/hospital-camp-anganawadi-02.jpg'
import hospitalCampGovernmentSchoolImage1 from '../Images/Campus-img/hospital-camp-government-school-01.jpg'
import hospitalCampGovernmentSchoolImage2 from '../Images/Campus-img/hospital-camp-government-school-02.jpg'
import hospitalCampSchoolAnganawadiImage1 from '../Images/Campus-img/hospital-camp-school-anganawadi-01.jpg'
import hospitalCampSchoolAnganawadiImage2 from '../Images/Campus-img/hospital-camp-school-anganawadi-02.jpg'

const generalHealthCampImages = [
  'https://alvashomoeopathy.com/camps/c1.jpg',
  'https://alvashomoeopathy.com/camps/c2.jpg',
  'https://alvashomoeopathy.com/camps/c3.jpg',
  'https://alvashomoeopathy.com/camps/c4.jpg',
  'https://alvashomoeopathy.com/camps/c5.jpg',
  'https://alvashomoeopathy.com/camps/c6.jpg',
]

const hospitalCampMoreInfoUrl = 'https://alvashomoeopathy.com/camps.html'

const hospitalCamps = [
  {
    id: 'general-health-camp',
    title: 'General Health Camp',
    text: 'A general health camp was conducted at Gurupura by Alva’s Homoeopathic Medical College.',
    pdfUrl: 'https://alvashomoeopathy.com/camps/General%20health%20camp.pdf',
  },
  {
    id: 'blood-donation-camp',
    title: 'Blood Donation Camp',
    text: 'Held with the Red Cross Club Moodbidri, the AHMC NSS Unit organised a blood donation awareness camp. More than 182 students from AHMC, ACNYS, MBA, and AIET donated blood.',
    pdfUrl: 'https://alvashomoeopathy.com/camps/BLOOD.pdf',
  },
  {
    id: 'mulky-general-health-camp',
    title: 'Mulky General Health Camp',
    text: 'The camp at Rotary Bhavan, Karnadu, Mulky served 25 patients. Free homoeopathic medicines were provided and AHMC Punarjanma health cards were issued for follow-up.',
    pdfUrl: 'https://alvashomoeopathy.com/files/Mulky%20General%20health%20camp%20(1).pdf',
  },
  {
    id: 'school-health-camp',
    title: 'School Health Camp',
    date: '7 August 2024, 10:00 AM to 1:00 PM',
    place: 'Anudaanita Tenkayedapadavu Higher Primary School, Shibrikere, Mangaluru',
    text: 'On 7 August 2024, a school health check-up camp was conducted at Anudaanita Tenkayedapadavu Higher Primary School, Shibrikere, Mangaluru. BMI, nutrition, and other health parameters were assessed for 62 students. Health awareness was provided, free homoeopathic medicines were distributed, and health cards were issued by AHMC Punarjanma, Mijar.',
  },
  {
    id: 'high-school-health-camp',
    title: 'High School Health Camp',
    date: '31 January 2026, 10:00 AM to 1:00 PM',
    place: 'Government Primary School and Anganawady School, Moodbidri',
    text: 'A school health check-up camp was conducted at Government Primary School, Moodbidri.',
    pdfUrl: 'https://alvashomoeopathy.com/files/MODDBIDRE%20GOVERNMENT%20HIGHSCHOOL%20CAMP.pdf',
  },
  {
    id: 'anganawady-health-camp',
    title: 'Anganawady Health Camp',
    date: '20 December 2025, 9:30 AM to 1:00 PM',
    place: 'Government High School and Anganawady, Moodbidri, Mangaluru',
    text: 'A school health check-up camp was conducted at Government High School and Anganawady, Moodbidri.',
    pdfUrl: 'https://alvashomoeopathy.com/files/ANGANAWADI%20CAMP2.pdf',
  },
  {
    id: 'government-high-school-health-camp',
    title: 'Government High School Health Camp',
    date: '29 November 2025, 9:30 AM to 1:00 PM',
    place: 'Government Primary School and Anganawady School, Moodbidri',
    text: 'A school health check-up camp was conducted by the college team.',
  },
  {
    id: 'government-school-anganawady-camp',
    title: 'Government High School and Anganawady Health Camp',
    date: '27 January 2025, 9:30 AM to 1:00 PM',
    place: 'Government Primary School and Anganawady School, Moodbidri',
    text: 'A school health check-up camp was conducted by the college team.',
    pdfUrl: 'https://alvashomoeopathy.com/files/ANGANAWADI%20CAMP2.pdf',
  },
]

function HospitalCampus() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash])

  return (
    <div className="hospital-campus-page">
      <SiteHeader />
      <main>
        <section className="hospital-campus-hero" aria-labelledby="hospital-campus-title">
          <div className="hospital-campus-hero__content">
            <div>
              <p className="hospital-campus-hero__eyebrow">ALVA'S HOMOEOPATHIC MEDICAL COLLEGE</p>
              <h1 id="hospital-campus-title">HOSPITAL CAMPS</h1>
              <p>Health awareness and check-up camps serving communities around Moodbidri.</p>
            </div>
          </div>
        </section>

        <section className="hospital-camps" id="hospital-camps" aria-labelledby="hospital-camps-title">
          <div className="hospital-camps__heading">
            <span>COMMUNITY OUTREACH</span>
            <h2 id="hospital-camps-title">Hospital Camps</h2>
            <p>
              Alva's Homoeopathic Medical College organises general health, school health, and blood donation camps
              with its hospital, clinical and community departments, and NSS unit.
            </p>
          </div>
          <div className="hospital-camps__grid">
            {hospitalCamps.map(({ id, title, date, place, text, pdfUrl }, index) => (
              <article className="hospital-camp-card" id={id} key={id}>
              {/* <p>hi</p> */}
                <span className="hospital-campus-card__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                {(id === 'school-health-camp' || id === 'high-school-health-camp' || id === 'anganawady-health-camp' || id === 'government-high-school-health-camp' || id === 'government-school-anganawady-camp') && (
                  <table className="hospital-camp-card__details">
                    <tbody>
                      <tr>
                        <th scope="row">Date and time:</th>
                        <td>{date}</td>
                      </tr>
                      <tr>
                        <th scope="row">Place:</th>
                        <td>{id === 'school-health-camp' ? (
                          <>
                            Anudaanita Tenkayedapadavu<br />
                            Higher Primary School, Shibrikere<br />
                            Mangaluru
                          </>
                        ) : place}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                <p>{text}</p>
                <p className="hospital-camp-card__reference">
                  <span>Refer PDF for</span>
                  <a className="hospital-camp-card__more-info" href={pdfUrl ?? hospitalCampMoreInfoUrl} target="_blank" rel="noreferrer">More Information</a>
                </p>
                {id === 'general-health-camp' && (
                  <div className="hospital-camp-card__gallery" aria-label="General health camp photos">
                    {generalHealthCampImages.map((image, imageIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={`General health camp photo ${imageIndex + 1}`}
                      />
                    ))}
                  </div>
                )}
                {id === 'blood-donation-camp' && (
                  <div className="hospital-camp-card__gallery hospital-camp-card__gallery--single" aria-label="Blood donation camp photo">
                    <img src={hospitalCampBloodImage} alt="Blood donation camp photo" />
                  </div>
                )}
                {id === 'mulky-general-health-camp' && (
                  <div className="hospital-camp-card__gallery" aria-label="Mulky general health camp photos">
                    <img src={hospitalCampMulkyImage1} alt="Mulky general health camp photo 1" />
                    <img src={hospitalCampMulkyImage2} alt="Mulky general health camp photo 2" />
                  </div>
                )}
                {id === 'school-health-camp' && (
                  <div className="hospital-camp-card__gallery" aria-label="School health camp photos">
                    <img src={hospitalCampSchoolImage1} alt="School health camp photo 1" />
                    <img src={hospitalCampSchoolImage2} alt="School health camp photo 2" />
                  </div>
                )}
                {id === 'high-school-health-camp' && (
                  <div className="hospital-camp-card__gallery" aria-label="High school health camp photos">
                    <img src={hospitalCampHighSchoolImage1} alt="High school health camp photo 1" />
                    <img src={hospitalCampHighSchoolImage2} alt="High school health camp photo 2" />
                  </div>
                )}
                {id === 'anganawady-health-camp' && (
                  <div className="hospital-camp-card__gallery" aria-label="Anganawady health camp photos">
                    <img src={hospitalCampAnganawadiImage1} alt="Anganawady health camp photo 1" />
                    <img src={hospitalCampAnganawadiImage2} alt="Anganawady health camp photo 2" />
                  </div>
                )}
                {id === 'government-high-school-health-camp' && (
                  <div className="hospital-camp-card__gallery" aria-label="Government high school health camp photos">
                    <img src={hospitalCampGovernmentSchoolImage1} alt="Government high school health camp photo 1" />
                    <img src={hospitalCampGovernmentSchoolImage2} alt="Government high school health camp photo 2" />
                  </div>
                )}
                {id === 'government-school-anganawady-camp' && (
                  <div className="hospital-camp-card__gallery" aria-label="Government school and Anganawady camp photos">
                    <img src={hospitalCampSchoolAnganawadiImage1} alt="Government school and Anganawady camp photo 1" />
                    <img src={hospitalCampSchoolAnganawadiImage2} alt="Government school and Anganawady camp photo 2" />
                  </div>
                )}
                {/* <p>{text/}</p> */}
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default HospitalCampus
