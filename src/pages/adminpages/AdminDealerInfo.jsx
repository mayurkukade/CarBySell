
import { useParams } from "react-router-dom"
import { useGetDealerQuery } from "../../services/dealerAPI"
const AdminDealerInfo = () => {
    const {id} = useParams()
    
    const {data,isLoading,isError,error} = useGetDealerQuery(id)
    console.log(isLoading)
    console.log(isError)
    console.log(error)
    console.log(data)
  return (
    <div className="container mx-auto">
      <p>Admin dealer info</p>
    </div>
  )
}

export default AdminDealerInfo
