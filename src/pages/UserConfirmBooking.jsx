import { useGetAllUserConfirmQuery } from "../services/carAPI";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UserConfirmBooking = () => {
  const { data, isLoading, error } = useGetAllUserConfirmQuery();
  const navigate = useNavigate() 
  console.log(data);
  console.log(isLoading);
  console.log(error);
  if(error?.status == 401)
  {
    navigate("/signin")
  }
  return (
    <div>
      <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
        User Confirm Booking
      </Typography>
      <Card className="flex mt-6 w-96 md:ml-[36rem] justify-center items-center">
        <CardBody>

          <Typography>
            ID: {data?.bookingDto?.id}
          </Typography>
          <Typography>
            Date: {data?.bookingDto?.date}
          </Typography>
          <Typography>
            Price: {data?.bookingDto?.price}
          </Typography>
          <Link to={`/carlist/cardetails/${data?.bookingDto?.carId}`}>
            <Button>Car Details</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserConfirmBooking;
