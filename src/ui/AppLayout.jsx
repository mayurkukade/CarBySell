

import { Outlet } from 'react-router-dom'
import { StickyNavbar } from '../components/navbars/StickyNavbar'
import { FooterF } from '../components/home/FooterF'

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
        <foot>
            <FooterF/>
        </foot>
      </>
    </div>
  )
}

export default AppLayout
