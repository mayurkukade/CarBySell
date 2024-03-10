
import bmw from '/logo/bmw.png'
import honda from '/logo/honda.png'
import kia from '/logo/kia.png'
import mahindra from '/logo/mahindra.png'
import mercedes from '/logo/mercedes.png'
import suzuki from '/logo/suzuki.png'
import tata from '/logo/tata (1).png'
import volkswagen from '/logo/volkswagen.png'
import volvo from '/logo/volvo.png'
const BrandList = () => {
  return (
    <div>
    <ul className='flex gap-10'>
        <li> <img alt='bmw' src={bmw} className='w-[5rem]'/></li>
        <li> <img alt='bmw' src={honda} className='w-[5rem]'/></li>
        <li> <img alt='bmw' src={kia} className='w-[5rem]'/></li>
        <li> <img alt='bmw' src={mahindra} className='w-[5rem]'/></li>
        <li> <img alt='bmw' src={mercedes} className='w-[5rem]'/></li>
        <li> <img alt='bmw' src={suzuki} className='w-[5rem]'/></li>
        <li> <img alt='bmw' src={tata} className='w-[5rem]'/></li>
        <li> <img alt='bmw' src={volkswagen} className='w-[5rem]'/></li>
        <li> <img alt='bmw' src={volvo} className='w-[5rem]'/></li>
    </ul>
     
      
    </div>
  )
}

export default BrandList
