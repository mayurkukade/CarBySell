import { useGetAllDealerPendingBookingQuery } from "../../services/dealerAPI"


const DealerAllPendingRequest = () => {
    const {data,isLoading,error} = useGetAllDealerPendingBookingQuery()
    console.log(data)
    if(isLoading){
    return    <p>Loading...</p>
    }

    if(error){
        return <p>error</p>
    }

  return (
    <div>
      <p>DealerAllPendingRequest</p>
    </div>
  )
}

export default DealerAllPendingRequest
