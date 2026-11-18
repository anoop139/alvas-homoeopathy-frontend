import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import './Sports.css'

function Sports() {
  return (
    <main className="sports-page">
      <SiteHeader />
      <section className="sports-page__content" aria-labelledby="sports-title">
        <h1 id="sports-title">Sports</h1>
        <p>Yet to be created</p>
      </section>
      <SiteFooter />
    </main>
  )
}

export default Sports
