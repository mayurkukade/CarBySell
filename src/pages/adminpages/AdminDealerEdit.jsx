
import { useParams } from "react-router-dom"

const AdminDealerEdit = () => {
    const {userid,id} = useParams()
    console.log(userid)
    console.log(id)

    
   
  
  return (
    <div className="mx-auto container">
      <p>AdminDealerEdit</p>
    </div>
  )
}

export default AdminDealerEdit
