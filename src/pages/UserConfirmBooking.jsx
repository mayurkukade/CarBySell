import { useGetAllUserConfirmQuery } from "../services/carAPI"


const UserConfirmBooking = () => {
    const {data,isLoading,error} = useGetAllUserConfirmQuery()
    console.log(data)
    console.log(isLoading)
    console.log(error)
  return (
    <div>
      <p>UserConfirmBooking</p>
    </div>
  )
}

export default UserConfirmBooking
