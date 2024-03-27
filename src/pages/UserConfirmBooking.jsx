import { useGetAllUserConfirmQuery } from "../services/carAPI";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const UserConfirmBooking = () => {
  const { data, isLoading, error } = useGetAllUserConfirmQuery();
  console.log(data);
  console.log(isLoading);
  console.log(error);
  return (
    <div>
      <p>UserConfirmBooking</p>
      <p>{data?.bookingDto?.price}</p>
      <Link to={`/carlist/cardetails/${data?.bookingDto?.carId}`}>
        <Button>Car Details</Button>
      </Link>
    </div>
  );
};

export default UserConfirmBooking;
