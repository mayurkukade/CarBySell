import { useGetAllDealerPendingBookingQuery } from "../../services/dealerAPI"

import DealerCarPendingRequest from "../../components/carDetails/DealerCarPendingRequest"

const DealerAllPendingRequest = () => {
    const {data,isLoading,error} = useGetAllDealerPendingBookingQuery()
    console.log(data)

    const renderData = data?.list.map((item, index) => {
      console.log(item)
      return (
        <div key={index} className="mt-5">
          <DealerCarPendingRequest item = {item} />
        </div>
      );
    });
    if(isLoading){
    return    <p>Loading...</p>
    }

    if(error){
        return <p>error</p>
    }

  return (
    <>
   {renderData}
   </>
  )
}

export default DealerAllPendingRequest
