import BrandList from "../components/home/BrandList"
import HeroSection from "../components/home/HeroSection"
import { StickyNavbar } from "../components/navbars/StickyNavbar"



const Home = () => {
  return (
    <div>
    <StickyNavbar/>
     <HeroSection/>
     <div className="mt-[5rem] flex justify-center">
     <BrandList/>
     </div>
     
    </div>
  )
}

export default Home

