
import { useParams } from "react-router-dom"
import { useGetAllDealerQuery } from "../../services/dealerAPI"
const AdminDealerEdit = () => {
    const {userid,id} = useParams()
    console.log(userid)
    console.log(id)
     const [getEditDealer] = useGetAllDealerQuery(userid)
  
  return (
    <div className="mx-auto container">
      <p>AdminDealerEdit</p>
    </div>
  )
}

export default AdminDealerEdit
