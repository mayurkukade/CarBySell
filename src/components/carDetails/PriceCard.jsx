/* eslint-disable react/prop-types */
import CardUi from "../../ui/CardUi"


const PriceCard = ({price,brand}) => {
  console.log(price,brand)
  return (
    <CardUi>
      <p>{price}</p>
      <p>{brand}</p>
    </CardUi>
  )
}

export default PriceCard

