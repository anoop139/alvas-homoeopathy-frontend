import InsightNav from './InsightNav'
import BulletinHome from './bulletinComponent/BulletinHome'
import BulletinAbout from './bulletinComponent/BulletinAbout'
import BuletinEditors from './bulletinComponent/BuletinEditors'
import BulletinContactUs from './bulletinComponent/BulletinContactUs'
import BulletinCrew from './bulletinComponent/BulletinCrew'
import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function Bulletin() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pathname === '/bulletin/bulletinAbout'
      ? 'About the Bulletin'
      : pathname === '/bulletin/editions'
        ? 'Bulletin Editions'
        : pathname === '/bulletin/contact'
          ? 'Contact Us'
          : pathname === '/bulletin/our-editor'
            ? 'Crew'
            : 'Bulletin Home'
  }, [pathname])

  return (
    <main>
      <InsightNav />
      {pathname === '/bulletin' ? (
        <Navigate to="/bulletin/bulletinHome" replace />
      ) : pathname === '/bulletin/bulletinAbout' ? (
        <BulletinAbout />
      ) : pathname === '/bulletin/editions' ? (
        <BuletinEditors />
      ) : pathname === '/bulletin/contact' ? (
        <BulletinContactUs />
      ) : pathname === '/bulletin/our-editor' ? (
        <BulletinCrew />
      ) : (
        <BulletinHome />
      )}
    </main>
  )
}

export default Bulletin
