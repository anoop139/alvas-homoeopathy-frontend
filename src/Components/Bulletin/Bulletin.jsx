import InsightNav from './InsightNav'
import BulletinHome from './Components/BulletinHome'
import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function Bulletin() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = 'Bulletin Home'
  }, [pathname])

  return (
    <main>
      <InsightNav />
      {pathname === '/bulletin' ? <Navigate to="/bulletin/bulletinHome" replace /> : <BulletinHome />}
    </main>
  )
}

export default Bulletin
