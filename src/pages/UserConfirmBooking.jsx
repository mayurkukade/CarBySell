import { useGetAllUserConfirmQuery } from "../services/carAPI";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const UserConfirmBooking = () => {
  const { data, isLoading, error } = useGetAllUserConfirmQuery();
  console.log(data);
  console.log(isLoading);
  console.log(error);
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
        {/* <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter> */}
      </Card>
    </div>
  );
};

export default UserConfirmBooking;
