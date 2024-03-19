

import { Outlet } from 'react-router-dom'
import { StickyNavbar } from '../components/navbars/StickyNavbar'
import { FooterF } from '../components/Footer'

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
        <FooterF/>
      </>
    </div>
  )
}

export default AppLayout
