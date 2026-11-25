import { useEffect, useRef } from 'react'
import './BulletinCrew.css'
import BulletinFooter from './BulletinFooter'
import crewHero from './bulletinImg/ab596a393b79e1aae7fb865fb2a3c7dc8af26d79a04504b5cdad2ab6fcfa50922ea154749c9cdfe5949fdae51e7cb8e50e99151c6191e4692e911b_1280.jpg'

import anithaImage from './bulletinImg/Screenshot2024-06-24212058.png'
import vasumathiImage from './bulletinImg/Screenshot2024-06-24212157.png'
import sudhamathiImage from './bulletinImg/Screenshot2024-06-242123241.png'
import nithinImage from './bulletinImg/20230622193202_IMG_4117-01-01-03.jpg'
import alwinImage from './bulletinImg/IMG_0092.jpg'
import rituImage from './bulletinImg/IMG_0080.jpg'
import aparnaImage from './bulletinImg/IMG_5580.JPG'
import shahanasImage from './bulletinImg/IMG_5652.JPG'
import saiImage from './bulletinImg/IMG_5559.JPG'
import aradhanaImage from './bulletinImg/IMG_5562.JPG'
import mubeenImage from './bulletinImg/IMG_5676.JPG'
import sadhiyaImage from './bulletinImg/IMG_5674.JPG'
import varshithImage from './bulletinImg/IMG_55941.JPG'
import vishethImage from './bulletinImg/IMG_5690.JPG'
import asilImage from './bulletinImg/IMG_5695.JPG'
import rumaizImage from './bulletinImg/Screenshot2024-06-23010012.png'
import meghaImage from './bulletinImg/IMG_0087.jpg'
import shrishtiImage from './bulletinImg/IMG_0081.jpg'

const crew = [
  { name: 'Dr. Anitha S K', role: 'Chief Editor', image: anithaImage },
  { name: 'Dr. Vasumathi K', role: 'Staff Editor', image: vasumathiImage },
  { name: 'Dr. Sudhamathi', role: 'Staff Editor', image: sudhamathiImage },
  { name: 'Nithin Krishna', role: 'Executive Designer', image: nithinImage },
  { name: 'Alwin Crasta', role: 'Executive Designer', image: alwinImage },
  { name: 'Ritu Antony', role: 'Executive Writer', image: rituImage },
  { name: 'Aparna P S', role: 'Senior Writer', image: aparnaImage },
  { name: 'Shahanas Arshadh', role: 'Senior Writer', image: shahanasImage },
  { name: 'Sai Bhuvan', role: 'Junior Designer', image: saiImage },
  { name: 'Aradhana Bhat', role: 'Junior Writer', image: aradhanaImage },
  { name: 'Mubeen Nisha', role: 'Junior Writer', image: mubeenImage },
  { name: 'Sadhiya', role: 'Junior Writer', image: sadhiyaImage },
  { name: 'Varshith N.K', role: 'Senior Photographer', image: varshithImage },
  { name: 'Visheth', role: 'Junior Photographer', image: vishethImage },
  { name: 'Asil Farhan', role: 'Junior Photographer', image: asilImage },
  { name: 'Rumaiz Mohammed', role: 'Senior Designer', image: rumaizImage },
  { name: 'Megha B.K', role: 'Senior Photographer', image: meghaImage },
  { name: 'Shrishti Shetty', role: 'Senior Writer', image: shrishtiImage },
]

function BulletinCrew() {
  const teamGridRef = useRef(null)

  useEffect(() => {
    const cards = teamGridRef.current?.querySelectorAll('.bulletin-crew__card')
    if (!cards?.length) return

    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    cards.forEach((card, index) => {
      card.style.setProperty('--reveal-delay', `${(index % 4) * 100}ms`)
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="bulletin-crew" aria-labelledby="crew-title">
        <header className="bulletin-crew__hero">
          <img className="bulletin-crew__hero-image" src={crewHero} alt="Homoeo Insight team at work" />
          <div className="bulletin-crew__hero-copy">
            <p className="bulletin-crew__eyebrow">Homoeo Insight</p>
            <h1 id="crew-title">Meet our Team</h1>
            <p>
              The magic behind the curtain! We could not bring you these updates
              without our amazing team. Get to know the passionate people who
              research, write, design and edit the content you see here.
            </p>
            <p>
              They work tirelessly to gather the latest news, curate engaging
              stories and present it all in a visually appealing format. Their
              dedication ensures you have a one-stop shop for all things happening
              on campus.
            </p>
            <a className="bulletin-crew__link" href="#team">Learn more <span aria-hidden="true">&#8595;</span></a>
          </div>
        </header>
        <section id="team" className="bulletin-crew__team" aria-labelledby="team-title">
          <h2 id="team-title">Our Amazing Team</h2>
          <div className="bulletin-crew__grid" ref={teamGridRef}>
{crew.map(({ name, role, image }, index) => (
  <article className="bulletin-crew__card" key={`${name}-${index}`}>
                <img className="bulletin-crew__portrait" src={image} alt={name} loading="lazy" />
                <h3>{name}</h3>
                <p>{role}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
      <BulletinFooter />
    </>
  )
}

export default BulletinCrew
