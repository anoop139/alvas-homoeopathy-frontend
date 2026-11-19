import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './NSS.css'

import environmentPhoto1 from '../Images/celebrations/env.jpg'
import environmentPhoto2 from '../Images/celebrations/env2.jpg'
import yogaPhoto1 from '../Images/celebrations/yoga.jpg'
import yogaPhoto2 from '../Images/celebrations/tr4.jpeg'
import swachhaPhoto1 from '../Images/NSSImages/sba1.jpg'
import swachhaPhoto2 from '../Images/NSSImages/sba2.jpg'
import swachhaPhoto3 from '../Images/NSSImages/sba3.jpg'
import eWastePhoto1 from '../Images/NSSImages/ewm.jpg'
import eWastePhoto2 from '../Images/NSSImages/ewm1.jpg'
import handwashingPhoto1 from '../Images/NSSImages/hwt1.jpg'
import handwashingPhoto2 from '../Images/NSSImages/hwt2.jpg'
import humanRightsPhoto1 from '../Images/celebrations/humanright1.jpg'
import humanRightsPhoto2 from '../Images/celebrations/humanright2.jpg'
import pollutionPhoto1 from '../Images/celebrations/pollution1.jpg'
import pollutionPhoto2 from '../Images/celebrations/pollution2.jpg'
import donorPhoto1 from '../Images/NSSImages/world2.png'
import donorPhoto2 from '../Images/NSSImages/worlddoners2.jpg'
import denguePhoto1 from '../Images/NSSImages/da1.jpg'
import denguePhoto2 from '../Images/NSSImages/da2.jpg'
import denguePhoto3 from '../Images/NSSImages/da3.jpg'
import denguePhoto4 from '../Images/NSSImages/da4.jpg'
import bloodDonationPhoto1 from '../Images/NSSImages/bd1.jpg'
import bloodDonationPhoto2 from '../Images/NSSImages/bd2.jpg'
import motherChildPhoto from '../Images/NSSImages/motherchild.png'
import allergyPhoto1 from '../Images/NSSImages/as1.png'
import allergyPhoto2 from '../Images/NSSImages/as2.png'
import allergyPhoto3 from '../Images/NSSImages/as3.png'

const eventLinks = [
  ['environment', 'Environmental Day'],
  ['yoga', 'Yoga Day'],
  ['sba', 'Swachha Bharat Abhiyan'],
  ['ewm', 'E-Waste Management'],
  ['hwt', 'Hand Washing Techniques'],
  ['whrd', 'World Human Rights Day'],
  ['npcd', 'National Pollution Control Day'],
  ['wdd', "World Donor's Day"],
  ['da', 'Dengue Awareness'],
  ['bd', 'Blood Donation'],
  ['mc', 'Mother and Child Health Camp'],
  ['as1', 'Allergy and Skin Health Camp'],
]

const events = [
  {
    id: 'environment',
    title: 'World Environmental Day',
    paragraphs: [
      'On June 5, 2023, a proactive initiative was undertaken at Alva’s Homoeopathic Medical College in Mijar to foster environmental consciousness and appreciation for Mother Nature. In an effort to raise awareness among the community, both staff and students of AHMC came together to plant saplings within the college premises. This collaborative effort symbolized a commitment to nurturing the environment and acknowledging the vital role it plays in sustaining life. Through this meaningful act, participants not only contributed to the greenery of their surroundings but also set an inspiring example for others to follow in the pursuit of environmental stewardship.',
    ],
    photos: [environmentPhoto1, environmentPhoto2],
    moreInfo: 'https://alvashomoeopathy.com/filestr/ENVIRONMENTAL%20DAY%20-%202023.pdf',
  },
  {
    id: 'yoga',
    title: 'World Yoga Day',
    paragraphs: [
      'Alva’s Nudisiri Vedike in Moodbidri, the spirit of wellness and unity permeated the air as International Yoga Day was joyously celebrated. The occasion was marked by a mesmerizing yoga performance presented by the dedicated NSS volunteers of AHMC, Mijar. Against the backdrop of serene surroundings, participants immersed themselves in the ancient art of yoga, embodying its principles of balance, harmony, and inner peace. Their graceful movements and focused energy resonated with the essence of the day, inspiring all present to embrace the practice of yoga for physical and mental well-being. This harmonious gathering served as a testament to the power of collective effort in promoting holistic health and spiritual growth.',
    ],
    photos: [yogaPhoto1, yogaPhoto2],
    moreInfo: 'https://alvashomoeopathy.com/filestr/International%20yoga%20day.pdf',
  },
  {
    id: 'sba',
    title: 'Swachha Bharat Abhiyan',
    paragraphs: [
      'Swachha Bharat Abhiyan was conducted to spread the awareness of CLEAN AND GREEN concept, under the guidance of Yuva Vahini, Local Govt Body, Moodbidri with students of 1st and 4th year along with the HOD, Department of Community Medicine, Dr Bibi Asma Desai, actively participated and cleaned the surroundings of Swaraj Maidan, Moodbidri.',
    ],
    photos: [swachhaPhoto1, swachhaPhoto2, swachhaPhoto3],
    moreInfo: 'https://alvashomoeopathy.com/filestr/SWACHHATA.pdf',
  },
  {
    id: 'ewm',
    title: 'E-Waste Management',
    detailsTable: [
      ['Topic', 'A Talk on E-Waste Management'],
      ['Speaker', 'Mr. Venkatesh Murthy'],
      ['Date', '23/04/2024'],
      ['Venue', 'V S Acharya Auditorium, Vidyagiri'],
    ],
    paragraphs: [
      'Mr. Venkatesh Murthy, founder of VANS CHEMISTRY, brings a wealth of professional qualifications, technical expertise, and commercial understanding in the Precious Metals & EEE-Resource Industry. He is a globally recognized personality in EEE-Resource markets.',
      'With over 25 years of experience, Mr. Venkatesh Murthy has specialized in:',
      'His contributions extend to designing and setting up integrated EEE-Resource facilities, including Analytical Labs, EEE-Resource Separation facilities, Metals Refining units, and Close Loop Pollution Control Systems. He adheres to ISO standards, manages Raw Material sourcing, and navigates international regulations and EEE-Resource guidelines.',
      'The E-waste market is rapidly expanding, presenting entrepreneurs with significant business opportunities. Establishing formal recycling plants can bring about substantial positive changes in environmental sustainability.',
      'To succeed in this entrepreneurial endeavor, one needs a profound knowledge base, extensive experience, and a diverse skill set. Identifying suitable technologies and adopting global best practices are crucial for sustained success in this sector.',
    ],
    points: [
      'EEE-Resource Management',
      'Precious and Strategic Metals Recovery & Refining',
      'Precious Metals plating',
      'Extraction Metallurgy',
      'Environmental Protection',
    ],
    photos: [eWastePhoto1, eWastePhoto2],
    moreInfo: 'https://alvashomoeopathy.com/filestr/E-Waste.pdf',
  },
  {
    id: 'hwt',
    title: 'Hand Washing Techniques',
    details: [
      'Topic- A Demo on Steps of Hand washing',
      'Speaker- Dr Sharath Mandicha',
      'Date- 8/05/2024',
      'Venue- Punarjanma Homoeopathic Hospital, Shobhavana campus, Mijar.',
      'Number of beneficiaries- 20',
    ],
    paragraphs: [
      'Steps of Hand washing was demonstrated to Hospital staff and interns of Alva’s Homoeopathic medical college. Dr Sharath Mandicha explained about the different steps and importance of Hand washing.',
    ],
    photos: [handwashingPhoto1, handwashingPhoto2],
    moreInfo: 'https://alvashomoeopathy.com/filestr/Hand%20washing.pdf',
  },
  {
    id: 'whrd',
    title: 'World Human Rights Day',
    paragraphs: [
      'On the occasion of World Human Rights day, talk was given by Mrs Renita D’souza on 9/12/2022, at Alvas Homoeopathic Medical College, Mijar.',
    ],
    photos: [humanRightsPhoto1, humanRightsPhoto2],
    moreInfo: 'https://alvashomoeopathy.com/filestr/humanRights.pdf',
  },
  {
    id: 'npcd',
    title: 'National Pollution Control Day',
    paragraphs: [
      'On the occasion of National Pollution control day i.e on 2/12/2022, cleaning was done in the premises of Shri Vishnumoorthy temple, Mijar with the help of final year students.',
    ],
    photos: [pollutionPhoto1, pollutionPhoto2],
    moreInfo: 'https://alvashomoeopathy.com/filestr/national%20polutiojn%20control.pdf',
  },
  {
    id: 'wdd',
    title: 'World Donor Day',
    details: [
      'Conducted by: Department of Community Medicine',
      'Place: Alva’s Homoeopathic Medical College, Mijar.',
      'Date: 15/06/2024',
      'Time: 10:00am to 11:00am',
      'Faculties: Dr. Bibi Asma Desai, Dr. Sudhamathi, Dr. Sharath M',
    ],
    paragraphs: [
      'World Donor day awareness program was conducted in Alva’s Homoeopathic Medical college. Students of Final and Third year prepared Posters and Seminar presentation was done. Poster presentation competition was held; judged by Dr. Qadri, Dr. Jiji & Dr. Rabiya. Faculties of Community medicine department with faculties of Alva’s Homoeopathic Medical College along with students from Final year and 3rd BHMS were part of this program.',
    ],
    photos: [donorPhoto1, donorPhoto2],
    moreInfo: 'https://alvashomoeopathy.com/files/homeo.pdf',
  },
  {
    id: 'da',
    title: 'Dengue Awareness',
    details: [
      'Conducted by: Department of Community Medicine',
      'Place: Kaambettu, Mijar & Moodbidri .',
      'Date: 29/07/2024 & 31/07/2024',
      'Faculties: Dr. Bibi Asma Desai, Dr. Sharath M',
    ],
    paragraphs: [
      'On 29th & 31st July 2024, the staff of Community Medicine Department, Dr Bibi Asma Desai & Dr Sharath Mandicha, along with students of final & third year went to Kaambettu, Mijar & Moodbidri to create awareness about the Dengue fever and about the effect of Homoeopathic treatment of Dengue. They visited almost 450 houses by distributing pamphlets regarding the same.',
    ],
    photos: [denguePhoto1, denguePhoto2, denguePhoto3, denguePhoto4],
    moreInfo: 'https://alvashomoeopathy.com/filestr/Dengue%20awareness%20.pdf',
  },
  {
    id: 'bd',
    title: 'Blood Donation',
    details: [
      'Place: AT Alva’s Homoeopathic Medical College & Hospital, Punarjanma ( Shobhavana Campus), Mijar Moodbidri.',
      'Date: 10/02/2024',
    ],
    paragraphs: [
      'In association with INDIAN RED CROSS, DISTRICT WENLOCK HOSPITAL, LIONS CLUB MOODABIDRI, NSS UNIT of AHMC, ACNYS & AIET conducted blood donation camp in the view of BLOOD DONATION AWARENESS. More than 145 students from AHMC, ACNYS, MBA, BPT, NURSING & AIET donated blood willingly.',
    ],
    photos: [bloodDonationPhoto1, bloodDonationPhoto2],
    moreInfo: 'https://alvashomoeopathy.com/filestr/BLOOD%20DONATION.pdf',
  },
  {
    id: 'mc',
    title: 'Mother and Child Health Camp',
    details: [
      'Place: Alva’s Homoeopathic OPD, Moodbidri.',
      'Date and Time: 06/11/2024, 9am to 5pm',
    ],
    paragraphs: [
      'A camp was conducted at Alva’s Homoeopathic OPD, Moodbidri by Alva’s Homoeopathic Medical college. A total of 15 patients attended the camp. All the patients were benefited by free homoeopathic medicines and health cards were issued by AHMC, Punarjanma, Mijar.',
    ],
    photos: [motherChildPhoto],
    moreInfo: 'https://alvashomoeopathy.com/filestr/motherchild.pdf',
  },
  {
    id: 'as1',
    title: 'Allergy and Skin Health Camp 1',
    details: [
      'Place: Alva’s Homoeopathic OPD, Punarjanma, Mijar.',
      'Date and Time: 20/11/2024, 9am to 5pm',
    ],
    paragraphs: [
      'A camp was conducted at Alva’s Homoeopathic OPD, Punarjanma, Mijar, by Alva’s Homoeopathic Medical college. A total of 9 patients attended the camp. All the patients were benefited by free homoeopathic medicines and health cards were issued by AHMC, Punarjanma, Mijar.',
    ],
    photos: [allergyPhoto1, allergyPhoto2],
  },
  {
    id: 'as2',
    title: 'Allergy and Skin Health Camp 2',
    details: [
      'Place: Alva’s Homoeopathic OPD, Mijar.',
      'Date and Time: 23/11/2024, 9am to 1pm',
    ],
    paragraphs: [
      'A camp was conducted at Alva’s Homoeopathic OPD, Moodbidri by Alva’s Homoeopathic Medical college. A total of 05 patients attended the camp. All the patients were benefited by free homoeopathic medicines and health cards were issued by AHMC, Punarjanma, Mijar.',
    ],
    photos: [allergyPhoto3],
    moreInfo: 'https://alvashomoeopathy.com/filestr/allergyskin.pdf',
  },
]

function NSSEvent({ event }) {
  const introductoryParagraphs = event.points ? event.paragraphs.slice(0, 2) : event.paragraphs
  const concludingParagraphs = event.points ? event.paragraphs.slice(2) : []

  return (
    <article className="nss-event" id={event.id}>
      <header className="nss-event__header">
        <h2>{event.title}</h2>
        {event.details?.length > 0 && (
          <div className="nss-event__details">
            {event.details.map((detail) => <p key={detail}>{detail}</p>)}
          </div>
        )}
        {event.detailsTable && (
          <div className="nss-event__table-wrap">
            <table className="nss-event__table">
              <tbody>
                {event.detailsTable.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </header>
      <div className="nss-event__copy">
        {introductoryParagraphs.map((paragraph, index) => <p key={`intro-${index}`}>{paragraph}</p>)}
        {event.points && (
          <ul>
            {event.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        )}
        {concludingParagraphs.map((paragraph, index) => <p key={`conclusion-${index}`}>{paragraph}</p>)}
      </div>
      <div className="nss-gallery">
        {event.photos.map((src, index) => (
          <img key={src} src={src} alt={`${event.title} photo ${index + 1}`} loading="lazy" />
        ))}
      </div>
      {event.moreInfo && (
        <a className="nss-event__button" href={event.moreInfo} target="_blank" rel="noreferrer">
          More Information
        </a>
      )}
    </article>
  )
}

function NSS() {
  return (
    <main className="nss-page">
      <SiteHeader />
      <section className="nss-page__content" aria-labelledby="nss-title">
        <header className="nss-page__heading">
          <h1 id="nss-title">NSS Events</h1>
        </header>
        <nav className="nss-event-nav" aria-label="NSS events">
          {eventLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <div className="nss-event-list">
          {events.map((event) => <NSSEvent key={event.id} event={event} />)}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default NSS
