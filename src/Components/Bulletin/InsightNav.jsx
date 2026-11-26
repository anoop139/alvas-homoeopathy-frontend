import './InsightNav.css'
import alvasEducationLogo from '../../Images/AlvasEducation.jpg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/bulletin/bulletinHome' },
  { label: 'About', to: '/bulletin/bulletinAbout' },
  { label: 'Editions', to: '/bulletin/editions' },
  { label: 'Our Editor', to: '/bulletin/our-editor' },
  { label: 'Contact Us', to: '/bulletin/contact' },
]

function InsightNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="insight-nav-header">
      <NavLink
        className="insight-nav-brand"
        to="/"
        title="Back to Alva's Homeopathy College"
      >
        <img src={alvasEducationLogo} alt="Alva's Education Foundation" />
      </NavLink>
      <button
        className="insight-nav-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="insight-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="insight-navigation" className={`insight-nav${menuOpen ? ' is-open' : ''}`} aria-label="Homoeo Insight navigation">
        {links.map((link) => (
          link.to ? (
            <NavLink key={link.label} to={link.to} end onClick={() => setMenuOpen(false)}>{link.label}</NavLink>
          ) : (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          )
        ))}
      </nav>
    </header>
  )
}

export default InsightNav
