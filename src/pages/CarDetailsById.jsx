import CarView from "../components/carDetails/CarView";
import PriceCard from "../components/carDetails/PriceCard";
import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../services/carAPI";
// import { redirectToSignIn } from "../services/apiSlice";
import { useNavigate } from "react-router-dom";


const CarDetailsById = () => {
     const navigate = useNavigate();
    const {carId} = useParams()
    
    const {data,isLoading,isError,error} = useGetCarByIdQuery()
    console.log(data)
    console.log(carId)
    console.log(isLoading)
    console.log(isError)
    console.log(error)
  console.log(error)
    if(error?.status === 401){
      console.log('navigate')
    
      navigate('/signin')
    }

    // if (isError && error?.status === 401) {
    //     console.log('click')
    //     Cookies.remove('token')
    //     redirectToSignIn(navigate); // Redirect to sign-in page
    //     return null; // Stop further rendering
    // }

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-3 gap-4 container mx-auto">
      <div className="p-4 md:col-span-2 overflow-y-auto max-h-screen ">
        <CarView />
      </div>
      <div className="p-4">
        <PriceCard />
      </div>
    </div>
  );
};

export default CarDetailsById;
