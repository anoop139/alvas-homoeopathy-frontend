import InsightNav from './InsightNav'
import { Outlet } from 'react-router-dom'

function Bulletin() {
  return (
    <main>
      <InsightNav />
      <Outlet />
    </main>
  )
}

export default Bulletin
