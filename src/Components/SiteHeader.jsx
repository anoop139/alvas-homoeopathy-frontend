import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ahmcImage from '../Images/Logo.jpg'
import backgroundImage from '../Images/Backgrond.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about-college', hasDropdown: true },
  { label: 'Course - Admission', href: '#course', hasDropdown: true, menu: 'course' },
  { label: 'Facilities', href: '#facilities', hasDropdown: true, menu: 'facilities' },
  { label: 'Hospital', href: '#hospital' },
  { label: 'Academics', href: '#course' },
  { label: 'Students Data', href: '#facilities' },
  { label: "Life @ Alva's", href: '#facilities' },
  { label: 'Contact US', href: '#hospital', showChevron: false },
  { label: 'Bulletin', href: '#course', showChevron: false },
]

const aboutLinks = [
  { label: 'About College', to: '/about-college' },
  { label: 'Vision & Mission', to: '/vision-mission' },
  { label: "Chairman's Message", to: '/chairperson-message' },
  { label: "Principal's Message", to: '/principal-message' },
  { label: 'Our Administration', to: '/administration' },
  { label: 'About AEF', to: '/aef' },
]

const facilitiesLinks = [
  { label: 'General Infrastructures', to: '/facilities/general-infrastructures' },
  { label: 'Clinical Facilities', to: '/facilities/clinical-facilities' },
  { label: 'Library', to: '/facilities/library' },
  { label: 'Hostel', to: '/facilities/hostel' },
  { label: 'Sports Specialty', to: '/facilities/sports-specialty' },
  { label: 'Transportation', to: '/facilities/transportation' },
]

const courseLinks = [
  {
    label: 'B.H.M.S Course',
    children: [
      { label: 'Course Duration', href: '/course-admission/bhms-course' },
      { label: 'First Professional B.H.M.S. Subjects', href: '/course-admission/first-professional-bhms-subjects' },
      { label: 'Second Professional B.H.M.S. Subjects', href: '/course-admission/second-professional-bhms-subjects' },
      { label: 'Third Professional B.H.M.S. Subjects', href: '/course-admission/third-professional-bhms-subjects' },
      { label: 'Final Professional B.H.M.S. Subjects', href: '/course-admission/final-professional-bhms-subjects' },
    ],
  },
  { label: 'Admission Procedure', href: '/course-admission/admission-procedure' },
  {
    label: 'UG/PG Fees Structure',
    href: 'https://alvashomoeopathy.com/files/2023-24%20UG,%20PG%20Fees%20Structure.pdf',
    external: true,
  },
]

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false)
  const [isCourseOpen, setIsCourseOpen] = useState(false)
  const [isBhmsOpen, setIsBhmsOpen] = useState(false)
  const [selectedNavItem, setSelectedNavItem] = useState('')
  const location = useLocation()
  const selectedItem = navItems.find((item) => item.label === selectedNavItem)
  const courseSectionHashes = courseLinks.flatMap((link) => [
    ...(link.href ? [link.href] : []),
    ...(link.children ?? []).map((child) => child.href),
  ]).map((href) => href.split('#')[1]).filter(Boolean)
  const isCoursePage = location.pathname.startsWith('/course-admission')
    || (location.pathname === '/' && courseSectionHashes.includes(location.hash.slice(1)))
  const activeNavItem = ['/about-college', '/vision-mission', '/chairperson-message', '/principal-message', '/administration', '/aef'].includes(location.pathname)
    ? 'About us'
    : location.pathname.startsWith('/facilities/')
      ? 'Facilities'
    : isCoursePage
      ? 'Course - Admission'
      : location.pathname === '/'
      ? selectedItem?.href === location.hash
        ? selectedNavItem
        : location.hash
          ? navItems.find((item) => item.href === location.hash)?.label ?? ''
          : 'Home'
      : ''

  useEffect(() => {
    if (!isAboutOpen && !isCourseOpen && !isFacilitiesOpen) return undefined

    const closeAboutOnEscape = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsAboutOpen(false)
        setIsFacilitiesOpen(false)
        setIsCourseOpen(false)
        setIsBhmsOpen(false)
        document.querySelector('#main-menu-links .site-nav__dropdown[open] summary')?.focus()
      }
    }

    document.addEventListener('keydown', closeAboutOnEscape)
    return () => document.removeEventListener('keydown', closeAboutOnEscape)
  }, [isAboutOpen, isCourseOpen, isFacilitiesOpen])

  useEffect(() => {
    if (!location.hash) return

    const sectionId = decodeURIComponent(location.hash.slice(1))
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsAboutOpen(false)
    setIsFacilitiesOpen(false)
    setIsCourseOpen(false)
    setIsBhmsOpen(false)
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
                open={item.menu === 'course' ? isCourseOpen : item.menu === 'facilities' ? isFacilitiesOpen : isAboutOpen}
                onMouseEnter={() => {
                  if (item.menu === 'course') setIsCourseOpen(true)
                  else if (item.menu === 'facilities') setIsFacilitiesOpen(true)
                  else setIsAboutOpen(true)
                }}
                onMouseLeave={() => {
                  if (item.menu === 'course') {
                    setIsCourseOpen(false)
                    setIsBhmsOpen(false)
                  } else if (item.menu === 'facilities') {
                    setIsFacilitiesOpen(false)
                  } else {
                    setIsAboutOpen(false)
                  }
                }}
              >
                <summary
                  className={`site-nav__link${activeNavItem === item.label ? ' is-active' : ''}`}
                  onClick={(event) => {
                    event.preventDefault()
                    if (item.menu === 'course') setIsCourseOpen((open) => !open)
                    else if (item.menu === 'facilities') setIsFacilitiesOpen((open) => !open)
                    else setIsAboutOpen((open) => !open)
                  }}
                >
                  {item.label}
                  <span className="site-nav__chevron" aria-hidden="true" />
                </summary>
                <div className={`site-nav__submenu${item.menu === 'course' ? '' : item.menu === 'facilities' ? ' site-nav__submenu--facilities' : ' site-nav__submenu--about'}`}>
                  {(item.menu === 'course' ? courseLinks : item.menu === 'facilities' ? facilitiesLinks : aboutLinks).map((link) => (
                    item.menu === 'course' && link.children ? (
                      <details
                        key={link.label}
                        className="site-nav__nested"
                        open={isBhmsOpen}
                        onMouseEnter={() => setIsBhmsOpen(true)}
                        onMouseLeave={() => setIsBhmsOpen(false)}
                      >
                        <summary
                          className="site-nav__sublink site-nav__nested-summary"
                          onClick={(event) => {
                            event.preventDefault()
                            setIsBhmsOpen((open) => !open)
                          }}
                        >
                          {link.label}
                          <span className="site-nav__chevron" aria-hidden="true" />
                        </summary>
                        <div className="site-nav__submenu site-nav__nested-menu">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.label}
                              className="site-nav__sublink"
                              to={child.href}
                              onClick={closeMenu}
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </details>
                    ) : item.menu === 'course' ? (
                      link.external ? (
                        <a
                          key={link.label}
                          className="site-nav__sublink"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={closeMenu}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <NavLink
                          key={link.label}
                          className="site-nav__sublink"
                          to={link.href}
                          onClick={closeMenu}
                        >
                          {link.label}
                          {link.hasChevron && <span className="site-nav__chevron" aria-hidden="true" />}
                        </NavLink>
                      )
                    ) : (
                    <NavLink
                      key={link.label}
                      className="site-nav__sublink"
                      to={link.to}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                    )
                  ))}
                </div>
              </details>
            ) : (
              <NavLink
                key={item.label}
                className={`site-nav__link${activeNavItem === item.label ? ' is-active' : ''}`}
                to={`/${item.href}`}
                end={item.label === 'Home'}
                onClick={() => {
                  setSelectedNavItem(item.label)
                  closeMenu()
                }}
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
                      
            
