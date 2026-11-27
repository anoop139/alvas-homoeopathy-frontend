import './Aef.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import foundationImage from '../Images/ABOUTALVASEDUCATIONFOUNDATION1.jpg'
import {foundationContent }from './AefContent'

function Aef() {
  return (
    <main className="aef-page">
      <SiteHeader />
      <p className="aef-foundation-name">Alva’s Education Foundation</p>
      <section className="aef-hero" style={{ '--aef-hero-image': `url("${foundationImage}")` }}>
        <h1 className="aef-hero__college-title">Alva’s Homeopathic Medical College</h1>
      </section>
      <section className="aef-content aef-shell">
        {foundationContent.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
      <foundationContent/>
      <SiteFooter />
    </main>
  )
}

export default Aef
