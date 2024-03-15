import { AccordionCustom } from "../components/home/AccordionCustom"
import BrandList from "../components/home/BrandList"
import ContactUs from "../components/home/ContactUs"
import HeaderL from "../components/home/HeaderL"
import HeroSection from "../components/home/HeroSection"
import Testimonials from "../components/home/Testimonials"



const Home = () => {
  return (
    <div>
     <HeroSection/>
     <HeaderL/>
     <Testimonials/>
     <div className="mt-[5rem] mb-[5rem] flex justify-center">
     <BrandList/>
     </div>
     <ContactUs/>
     <div className="m-[4rem]">                                
     <AccordionCustom/>
     </div>
     
    </div>
  )
}

export default Home

