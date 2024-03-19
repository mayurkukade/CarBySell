

import { Outlet } from 'react-router-dom'
import { StickyNavbar } from '../components/navbars/StickyNavbar'

import Cookies from 'js-cookie'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
====
import { FooterF } from '../components/Footer'

>>>>>>> Venky
const AppLayout = () => {
  const location = useLocation()
  const token = Cookies.get('token')
  console.log(token)
  
  return (
    <div>
      <>
        <nav>
            <StickyNavbar/>
        </nav>
        <main>
         {token ? <Outlet/>:  <Navigate to="/signin" state={{ from: location }} replace /> }   
        </main>
        <FooterF/>
      </>
    </div>
  )
}

export default AppLayout
