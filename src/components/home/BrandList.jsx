
import bmw from '/logo/bmw.png'
import honda from '/logo/honda.png'
import kia from '/logo/kia.png'
import mahindra from '/logo/mahindra.png'
import mercedes from '/logo/mercedes.png'
import suzuki from '/logo/suzuki.png'
import tata from '/logo/tata (1).png'
import volkswagen from '/logo/volkswagen.png'
import volvo from '/logo/volvo.png'
import Marquee from "react-fast-marquee";
const BrandList = () => {
  return (
    <div className='container mx-auto'>
    <ul >
    <Marquee style={{ display: "flex", justifyContent: "space-between", gap: "10px",marginTop:"2rem" }} autoFill>
    <li style={{ margin: "0 25px" }}> <img alt='bmw' src={bmw} className='w-[5rem]' /></li>
    <li style={{ margin: "0 25px" }}> <img alt='honda' src={honda} className='w-[5rem]' /></li>
    <li style={{ margin: "0 25px" }}> <img alt='kia' src={kia} className='w-[5rem]' /></li>
    <li style={{ margin: "0 25px" }}> <img alt='mahindra' src={mahindra} className='w-[5rem]' /></li>
    <li style={{ margin: "0 25px" }}> <img alt='mercedes' src={mercedes} className='w-[5rem]' /></li>
    <li style={{ margin: "0 25px" }}> <img alt='suzuki' src={suzuki} className='w-[5rem]' /></li>
    <li style={{ margin: "0 25px" }}> <img alt='tata' src={tata} className='w-[5rem]' /></li>
    <li style={{ margin: "0 25px" }}> <img alt='volkswagen' src={volkswagen} className='w-[5rem]' /></li>
    <li style={{ margin: "0 25px" }}> <img alt='volvo' src={volvo} className='w-[5rem]' /></li>
</Marquee>

    </ul>
     
      
    </div>
  )
}

export default BrandList
