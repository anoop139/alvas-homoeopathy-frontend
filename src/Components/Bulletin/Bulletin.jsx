import InsightNav from './InsightNav'
import BulletinHome from './Components/BulletinHome'
import BulletinAbout from './Components/BulletinAbout'
import BuletinEditors from './Components/BuletinEditors'
import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function Bulletin() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pathname === '/bulletin/bulletinAbout' ? 'About the Bulletin' : pathname === '/bulletin/editions' ? 'Bulletin Editions' : 'Bulletin Home'
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
      ) : (
        <BulletinHome />
      )}
    </main>
  )
}

export default Bulletin
