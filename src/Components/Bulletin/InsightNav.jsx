import './InsightNav.css'
import alvasEducationLogo from '../../Images/AlvasEducation.jpg'
import { Link, NavLink } from 'react-router-dom'

const insightHome = 'https://alvashomoeopathy.com/Insight/Home.html'

const links = [
  { label: 'Home', to: '/bulletin/bulletinHome' },
  { label: 'About', href: `${insightHome}#about` },
  { label: 'Editions', href: 'https://alvashomoeopathy.com/Insight/Editions.html' },
  { label: 'Our Editor', href: `${insightHome}#editor` },
  { label: 'Contact Us', href: 'https://alvashomoeopathy.com/Insight/Contact-us.html' },
]

function InsightNav() {
  return (
    <header className="insight-nav-header">
      <a className="insight-nav-brand" href={insightHome}>
        <img src={alvasEducationLogo} alt="Alva's Education Foundation" />
      </a>
      <nav className="insight-nav" aria-label="Homoeo Insight navigation">
        {links.map((link) => (
          link.to ? (
            <NavLink key={link.label} to={link.to} end>{link.label}</NavLink>
          ) : (
            <a key={link.label} href={link.href}>{link.label}</a>
          )
        ))}
      </nav>
    </header>
  )
}

export default InsightNav
