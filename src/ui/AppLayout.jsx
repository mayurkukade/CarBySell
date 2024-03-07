

import { Outlet } from 'react-router-dom'
import { StickyNavbar } from '../components/navbars/StickyNavbar'

const AppLayout = () => {
  return (
    <div>
      <>
        <nav>
            <StickyNavbar/>
        </nav>
        <main>
            <Outlet/>
        </main>
      </>
    </div>
  )
}

export default AppLayout
