import { useUserAllCarRequestQuery } from "../services/carAPI"


const PendingRequest = () => {
    const {data,isLoading,error} = useUserAllCarRequestQuery()
    console.log(data)
    if(isLoading){
        return <p>isLoading</p>
    }
if(error){
    console.log(error)
}
  return (
    <>
      <p>Pending request</p>
    </>
  )
}

export default PendingRequest
