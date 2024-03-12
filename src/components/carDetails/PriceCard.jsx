/* eslint-disable react/prop-types */
import CardUi from "../../ui/CardUi"


const PriceCard = ({price,brand}) => {
  console.log(price,brand)
  return (
    <CardUi>
    {price ? <p>{price}</p>  : ''}  
    {brand ? <p>{brand}</p>  : ''}  
    
    </CardUi>
  )
}

export default PriceCard

