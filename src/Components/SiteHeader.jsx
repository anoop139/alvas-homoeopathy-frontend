import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ahmcImage from '../Images/Logo.jpg'
import backgroundImage from '../Images/Backgrond.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about-college', hasDropdown: true },
  { label: 'Course - Admission', href: '#course' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Hospital', href: '#hospital' },
  { label: 'Academics', href: '#course' },
  { label: 'Students Data', href: '#facilities' },
  { label: "Life @ Alva's", href: '#facilities' },
  { label: 'Contact US', href: '#hospital', showChevron: false },
  { label: 'Bulletin', href: '#course', showChevron: false },
]

const aboutLinks = [
  { label: 'About College', to: '/about-college' },
  { label: 'Vision & Mission', to: '/#about-college' },
  { label: "Chairman's Message", to: '/#about-college' },
  { label: "Principal's Message", to: '/#about-college' },
  { label: 'Our Administration', to: '/#about-college' },
  { label: 'About AEF', to: '/#about-college' },
]

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!isAboutOpen) return undefined

    const closeAboutOnEscape = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsAboutOpen(false)
        document.querySelector('#main-menu-links .site-nav__dropdown summary')?.focus()
      }
    }

    document.addEventListener('keydown', closeAboutOnEscape)
    return () => document.removeEventListener('keydown', closeAboutOnEscape)
  }, [isAboutOpen])

  useEffect(() => {
    if (!location.hash) return

    const sectionId = decodeURIComponent(location.hash.slice(1))
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsAboutOpen(false)
  }

  return (
    <header
      className="site-header"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(4, 16, 14, 0.45) 0%, rgba(4, 16, 14, 0.2) 100%), url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="site-header__inner">
        <NavLink className="site-brand" to="/#home" aria-label="Alva's Homeopathic Medical College home">
          <img src={ahmcImage} alt="Alva's Homeopathic Medical College logo" />
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu-links"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`menu-toggle__icon${isMenuOpen ? ' is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav
          id="main-menu-links"
          className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) =>
            item.hasDropdown ? (
              <details
                key={item.label}
                className="site-nav__dropdown"
                open={isAboutOpen}
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <summary
                  className={`site-nav__link${location.pathname === '/about-college' ? ' is-active' : ''}`}
                  onClick={(event) => {
                    event.preventDefault()
                    setIsAboutOpen((open) => !open)
                  }}
                >
                  {item.label}
                  <span className="site-nav__chevron" aria-hidden="true" />
                </summary>
                <div className="site-nav__submenu">
                  {aboutLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      className="site-nav__sublink"
                      to={link.to}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </details>
            ) : (
              <NavLink
                key={item.label}
                className="site-nav__link"
                to={`/${item.href}`}
                end={item.label === 'Home'}
                onClick={closeMenu}
              >
                {item.label}
                {(item.showChevron ?? item.label !== 'Home') && (
                  <span className="site-nav__chevron" aria-hidden="true" />
                )}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
