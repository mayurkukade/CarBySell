import BrandList from "../components/home/BrandList"
import HeroSection from "../components/home/HeroSection"



const Home = () => {
  return (
    <div>
     <HeroSection/>
     <div className="mt-[7rem] flex justify-center">
     <BrandList/>
     </div>
     
    </div>
  )
}

export default Home

