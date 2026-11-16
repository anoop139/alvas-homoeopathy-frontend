import { useEffect, useState } from 'react'
import './Alumni.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import alumniImage01 from '../Images/AM-01.jpg'
import alumniImage02 from '../Images/AM-02.jpg'
import alumniImage03 from '../Images/AM-03.jpg'
import alumniImage04 from '../Images/AM-04.jpg'
import alumniImage05 from '../Images/AM-05.jpg'
import alumniImage06 from '../Images/AM-06.jpg'
import alumniImage07 from '../Images/AM-07.jpg'
import alumniImage08 from '../Images/AM-08.jpg'
import alumniImage09 from '../Images/AM-09.jpg'
import alumniImage10 from '../Images/AM-10.jpg'
import alumniImage11 from '../Images/AM-11.jpg'
import alumniImage12 from '../Images/AM-12.jpg'
import alumniImage13 from '../Images/AM-13.jpg'
import alumniImage14 from '../Images/AM-14.jpg'
import alumniImage15 from '../Images/AM-15.jpg'
import alumniImage16 from '../Images/AM-16.jpg'
import alumniImage17 from '../Images/AM-17.jpg'
import alumniImage18 from '../Images/AM-18.jpg'
import alumniImage19 from '../Images/AM-19.jpg'
import alumniImage20 from '../Images/AM-20.jpg'
import alumniImage21 from '../Images/AM-21.jpg'

const alumniImages = [
  alumniImage01, alumniImage02, alumniImage03, alumniImage04, alumniImage05,
  alumniImage06, alumniImage07, alumniImage08, alumniImage09, alumniImage10,
  alumniImage11, alumniImage12, alumniImage13, alumniImage14, alumniImage15,
  alumniImage16, alumniImage17, alumniImage18, alumniImage19, alumniImage20,
  alumniImage21,
]

function Alumni() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % alumniImages.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + alumniImages.length) % alumniImages.length)
  }
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % alumniImages.length)
  }

  return (
    <main className="alumni-page">
      <SiteHeader />
      <section className="alumni-content" aria-labelledby="alumni-title">
        <h1 id="alumni-title">Alumni Meet – Connect 23</h1>
        <div className="alumni-carousel" aria-roledescription="carousel" aria-label="Alumni Meet photographs">
          <img
            className="alumni-carousel-image"
            src={alumniImages[activeIndex]}
            alt={`Alumni Meet photograph ${activeIndex + 1} of ${alumniImages.length}`}
          />
          <button
            className="alumni-carousel-arrow alumni-carousel-arrow--previous"
            type="button"
            onClick={showPrevious}
            aria-label="Show previous alumni photo"
          >
            ‹
          </button>
          <button
            className="alumni-carousel-arrow alumni-carousel-arrow--next"
            type="button"
            onClick={showNext}
            aria-label="Show next alumni photo"
          >
            ›
          </button>
          <div className="alumni-carousel-controls">
            <span aria-live="polite">{activeIndex + 1} / {alumniImages.length}</span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default Alumni
