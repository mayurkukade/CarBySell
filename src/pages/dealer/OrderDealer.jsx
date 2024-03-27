import { useParams } from "react-router-dom"
import { useGetAllDealerCompleteBookingQuery } from "../../services/dealerAPI"


const OrderDealer = () => {
    const {id} = useParams()
    console.log(id)
    const page = 0
    const {data,error,isLoading} =useGetAllDealerCompleteBookingQuery({page,id})
    console.log(data)
    console.log(error)

    if(isLoading){
       return <p>Loading.....</p>
    }
    if(error){
        return <p>error</p>
    }
  return (
    <div>
      <p>OrderDealer</p>
    </div>
  )
}

export default OrderDealer
