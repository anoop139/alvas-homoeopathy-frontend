import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './SiteHeader.css'
import ahmcImage from '../Images/Logo.jpg'
import backgroundImage from '../Images/Backgrond.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about-college', hasDropdown: true },
  { label: 'Course - Admission', href: '#course', hasDropdown: true, menu: 'course' },
  { label: 'Facilities', href: '#facilities', hasDropdown: true, menu: 'facilities' },
  { label: 'Hospital', href: '#hospital', hasDropdown: true, menu: 'hospital' },
  { label: 'Academics', href: '#course', hasDropdown: true, menu: 'academics' },
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
  { label: 'GENERAL INFRASTRUCTURES', to: '/facilities#general-infrastructures' },
  { label: 'Clinical Facilities', to: '/facilities#clinical-facilities' },
  { label: 'Library', to: '/facilities#library' },
  { label: 'Hostel', to: '/facilities#hostel' },
  { label: 'Sports Specialty', to: '/facilities#sports-specialty' },
  { label: 'Transportation', to: '/facilities#transportation' },
]

const academicsLinks = [
  {
    label: 'Departments',
    children: [
      'Homoeopathic Materia Medica',
      'Organon with Homoeopathic Philosophy and Fundamentals of Psychology',
      'Homoeopathic Pharmacy',
      'Homoeopathic Repertory & Case Taking',
      'Human Anatomy',
      'Human Physiology & Biochemistry',
      'Forensic Medicine & Toxicology',
      'Pathology & Microbiology',
      'Community Medicine, Research Methodology & Biostatistics',
      'Surgery',
      'Gynaecology & Obstetrics',
      'Practice Of Medicine With Essentials Of Pharmacology',
      'Department of yoga',
    ],
  },
  { label: 'Time Table', to: '/academics/time-table' },
  { label: 'College Council', to: '/academics/college-council' },
  { label: 'Examination Schedule', to: '/academics/examination-schedule' },
  { label: 'University Results', to: '/academics/university-result' },
  { label: 'Library Result', to: '/academics/library-result' },
  { label: 'Staff Research & Publications', to: '/academics/staff-research-publications' },
  { label: 'Non teaching Staffs', href: 'https://alvashomoeopathy.com/files/Non%20teaching%20Staff.pdf' },
]

const hospitalLinks = [
  { label: 'Hospital OPD', to: '/hospital/opd' },
  { label: 'Hospital IPD', to: '/hospital/ipd' },
  {
    label: 'Campus',
    children: [
      { label: 'General Health Camp', to: '/hospital/campus#general-health-camp' },
      { label: 'Blood Donation Camp', to: '/hospital/campus#blood-donation-camp' },
      { label: 'Mulky General Health Camp', to: '/hospital/campus#mulky-general-health-camp' },
      { label: 'School Health Camp', to: '/hospital/campus#school-health-camp' },
      { label: 'High School Health Camp', to: '/hospital/campus#high-school-health-camp' },
      { label: 'Anganawady Health Camp', to: '/hospital/campus#anganawady-health-camp' },
      { label: 'Government High School Health Camp', to: '/hospital/campus#government-high-school-health-camp' },
      { label: 'Government School and Anganawady Camp', to: '/hospital/campus#government-school-anganawady-camp' },
    ],
  },
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
  const [isHospitalOpen, setIsHospitalOpen] = useState(false)
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false)
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false)
  const [isCourseOpen, setIsCourseOpen] = useState(false)
  const [isBhmsOpen, setIsBhmsOpen] = useState(false)
  const [isCampusOpen, setIsCampusOpen] = useState(false)
  const [selectedNavItem, setSelectedNavItem] = useState('')
  const location = useLocation()
  const selectedItem = navItems.find((item) => item.label === selectedNavItem)
  const isCurrentHashLink = (to) => `${location.pathname}${location.hash}` === to
  const sublinkClassName = (to) => ({ isActive }) => {
    const isHashLink = to.includes('#')
    const isCurrentLink = isHashLink
      ? isCurrentHashLink(to)
      : isActive

    return `site-nav__sublink${isCurrentLink ? ' is-active' : ''}`
  }
  const courseSectionHashes = courseLinks.flatMap((link) => [
    ...(link.href ? [link.href] : []),
    ...(link.children ?? []).map((child) => child.href),
  ]).map((href) => href.split('#')[1]).filter(Boolean)
  const isCoursePage = location.pathname.startsWith('/course-admission')
    || (location.pathname === '/' && courseSectionHashes.includes(location.hash.slice(1)))
  const activeNavItem = ['/about-college', '/vision-mission', '/chairperson-message', '/principal-message', '/administration', '/aef'].includes(location.pathname)
    ? 'About us'
    : location.pathname.startsWith('/academics')
      ? 'Academics'
    : location.pathname === '/facilities' || location.pathname.startsWith('/facilities/') || location.pathname === '/general-infrastructures'
      ? 'Facilities'
    : location.pathname.startsWith('/hospital')
      ? 'Hospital'
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
    if (!isAboutOpen && !isCourseOpen && !isFacilitiesOpen && !isHospitalOpen && !isAcademicsOpen && !isDepartmentsOpen) return undefined

    const closeAboutOnEscape = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsAboutOpen(false)
        setIsFacilitiesOpen(false)
        setIsHospitalOpen(false)
        setIsAcademicsOpen(false)
        setIsDepartmentsOpen(false)
        setIsCourseOpen(false)
        setIsBhmsOpen(false)
        document.querySelector('#main-menu-links .site-nav__dropdown[open] summary')?.focus()
      }
    }

    document.addEventListener('keydown', closeAboutOnEscape)
    return () => document.removeEventListener('keydown', closeAboutOnEscape)
  }, [isAboutOpen, isCourseOpen, isFacilitiesOpen, isHospitalOpen, isAcademicsOpen, isDepartmentsOpen])

  useEffect(() => {
    if (!location.hash) return

    const sectionId = decodeURIComponent(location.hash.slice(1))
    const target = document.getElementById(sectionId)
    if (target) {
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 96
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12
      window.scrollTo({ top, behavior: 'auto' })
    }
  }, [location.hash])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsAboutOpen(false)
    setIsFacilitiesOpen(false)
    setIsHospitalOpen(false)
    setIsAcademicsOpen(false)
    setIsDepartmentsOpen(false)
    setIsCourseOpen(false)
    setIsBhmsOpen(false)
    setIsCampusOpen(false)
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
                className={`site-nav__dropdown${item.menu === 'hospital' ? ' site-nav__dropdown--hospital' : item.menu === 'academics' ? ' site-nav__dropdown--academics' : item.menu === 'facilities' ? ' site-nav__dropdown--facilities' : ''}`}
                open={item.menu === 'course' ? isCourseOpen : item.menu === 'facilities' ? isFacilitiesOpen : item.menu === 'hospital' ? isHospitalOpen : item.menu === 'academics' ? isAcademicsOpen : isAboutOpen}
                onMouseEnter={() => {
                  if (item.menu === 'course') setIsCourseOpen(true)
                  else if (item.menu === 'facilities') setIsFacilitiesOpen(true)
                  else if (item.menu === 'hospital') setIsHospitalOpen(true)
                  else if (item.menu === 'academics') setIsAcademicsOpen(true)
                  else setIsAboutOpen(true)
                }}
                onMouseLeave={() => {
                  if (item.menu === 'course') {
                    setIsCourseOpen(false)
                    setIsBhmsOpen(false)
                  } else if (item.menu === 'facilities') {
                    setIsFacilitiesOpen(false)
                  } else if (item.menu === 'hospital') {
                    setIsHospitalOpen(false)
                  } else if (item.menu === 'academics') {
                    setIsAcademicsOpen(false)
                  } else {
                    setIsAboutOpen(false)
                  }
                }}
              >
                <summary
                  className={`site-nav__link${activeNavItem === item.label || (item.menu === 'facilities' && isFacilitiesOpen) || (item.menu === 'hospital' && isHospitalOpen) || (item.menu === 'academics' && isAcademicsOpen) ? ' is-active' : ''}`}
                  style={item.menu === 'hospital' && isHospitalOpen ? { color: '#f1cb83' } : undefined}
                  onClick={(event) => {
                    if ((item.menu === 'facilities' || item.menu === 'hospital') && event.target.closest('a')) return
                    event.preventDefault()
                    if (item.menu === 'course') setIsCourseOpen((open) => !open)
                    else if (item.menu === 'facilities') setIsFacilitiesOpen((open) => !open)
                    else if (item.menu === 'hospital') setIsHospitalOpen((open) => !open)
                    else if (item.menu === 'academics') setIsAcademicsOpen((open) => !open)
                    else setIsAboutOpen((open) => !open)
                  }}
                >
                  {item.menu === 'facilities' ? (
                    <NavLink
                      to="/facilities#general-infrastructures"
                      style={{ color: activeNavItem === item.label || isFacilitiesOpen ? '#f1cb83' : 'inherit' }}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  ) : item.label}
                  <span className="site-nav__chevron" aria-hidden="true" />
                </summary>
                <div
                  className={`site-nav__submenu${item.menu === 'course' ? '' : item.menu === 'facilities' ? ' site-nav__submenu--facilities' : item.menu === 'academics' ? ' site-nav__submenu--academics' : ' site-nav__submenu--about'}`}
                >
                  {item.menu === 'academics' ? academicsLinks.map((link) => (
                    typeof link === 'string' ? (
                      <span key={link} className="site-nav__sublink">{link}</span>
                    ) : link.href ? (
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
                    ) : link.to ? (
                      <NavLink
                        key={link.label}
                        className={sublinkClassName(link.to)}
                        to={link.to}
                        onClick={closeMenu}
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <details
                        key={link.label}
                        className="site-nav__nested site-nav__nested--departments"
                        open={isDepartmentsOpen}
                        onMouseEnter={() => setIsDepartmentsOpen(true)}
                        onMouseLeave={() => setIsDepartmentsOpen(false)}
                      >
                        <summary
                          className="site-nav__sublink site-nav__nested-summary"
                          onClick={(event) => {
                            event.preventDefault()
                            setIsDepartmentsOpen((open) => !open)
                          }}
                        >
                          {link.label}
                          <span className="site-nav__chevron" aria-hidden="true" />
                        </summary>
                        <div className="site-nav__submenu site-nav__nested-menu site-nav__nested-menu--departments">
                          {link.children.map((department) => (
                            <span key={department} className="site-nav__sublink">{department}</span>
                          ))}
                        </div>
                      </details>
                    )
                  )) : (item.menu === 'course' ? courseLinks : item.menu === 'facilities' ? facilitiesLinks : item.menu === 'hospital' ? hospitalLinks : aboutLinks).map((link) => (
                    (item.menu === 'course' || item.menu === 'hospital') && link.children ? (
                      <details
                        key={link.label}
                        className="site-nav__nested"
                        open={item.menu === 'course' ? isBhmsOpen : isCampusOpen}
                        onMouseEnter={() => item.menu === 'course' ? setIsBhmsOpen(true) : setIsCampusOpen(true)}
                        onMouseLeave={() => item.menu === 'course' ? setIsBhmsOpen(false) : setIsCampusOpen(false)}
                      >
                        <summary
                          className="site-nav__sublink site-nav__nested-summary"
                          onClick={(event) => {
                            event.preventDefault()
                            if (item.menu === 'course') setIsBhmsOpen((open) => !open)
                            else setIsCampusOpen((open) => !open)
                          }}
                        >
                          {item.menu === 'hospital' ? (
                            <a
                              href="/hospital/campus#hospital-camps"
                              onClick={(event) => {
                                event.stopPropagation()
                                closeMenu()
                              }}
                            >
                              {link.label}
                            </a>
                          ) : link.label}
                          <span className="site-nav__chevron" aria-hidden="true" />
                        </summary>
                        <div className="site-nav__submenu site-nav__nested-menu">
                          {link.children.map((child) => (
                            item.menu === 'hospital' ? (
                              <a
                                key={child.label}
                                className={`site-nav__sublink${isCurrentHashLink(child.to) ? ' is-active' : ''}`}
                                href={child.to}
                                onClick={closeMenu}
                              >
                                {child.label}
                              </a>
                            ) : (
                              <NavLink
                                key={child.label}
                                className={sublinkClassName(child.href)}
                                to={child.href}
                                onClick={closeMenu}
                              >
                                {child.label}
                              </NavLink>
                            )
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
                          className={sublinkClassName(link.href)}
                          to={link.href}
                          onClick={closeMenu}
                        >
                          {link.label}
                          {link.hasChevron && <span className="site-nav__chevron" aria-hidden="true" />}
                        </NavLink>
                      )
                    ) : item.menu === 'hospital' ? (
                    <NavLink
                      key={link.label}
                      className={sublinkClassName(link.to)}
                      to={link.to}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                    ) : (
                    <NavLink
                      key={link.label}
                      className={sublinkClassName(link.to)}
                      to={link.to}
                      onClick={() => {
                        closeMenu()
                        if (link.to === '/facilities#general-infrastructures') {
                          const previousScrollRestoration = window.history.scrollRestoration
                          window.history.scrollRestoration = 'manual'
                          window.setTimeout(() => {
                            const target = document.getElementById('general-infrastructures')
                            if (target) {
                              const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 96
                              const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12
                              window.scrollTo({ top, behavior: 'auto' })
                            }
                            window.history.scrollRestoration = previousScrollRestoration
                          }, 150)
                        }
                      }}
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
                      
            
