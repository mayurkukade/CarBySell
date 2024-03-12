/* eslint-disable react/prop-types */
import CardUi from "../../ui/CardUi"


const PriceCard = ({price,brand}) => {
  console.log(price,brand)
  return (
    <CardUi>
    {price ? <p>{price}</p>  : null}  
    {brand ? <p>{brand}</p>  : null}  
    
    </CardUi>
  )
}

export default PriceCard

