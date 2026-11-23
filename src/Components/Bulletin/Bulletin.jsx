import InsightNav from './InsightNav'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function Bulletin() {
  const { pathname } = useLocation()

  return (
    <main>
      <InsightNav />
      {pathname === '/bulletin' ? <Navigate to="/bulletin/bulletinHome" replace /> : <Outlet />}
    </main>
  )
}

export default Bulletin
