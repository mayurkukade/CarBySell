/* eslint-disable react/prop-types */

import { Button, Chip } from "@material-tailwind/react";
import CardUi from "../../ui/CardUi";
import { Link } from "react-router-dom";
import { useConfirmBookingMutation } from "../../services/carAPI";
const DealerCarPendingRequest = ({ item }) => {
  const [confirmBooking,{isLoading,error}] = useConfirmBookingMutation()
  console.log(item);
  console.log(isLoading)
  console.log(error)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = {
      "date": "2024-04-01",
      "price": 5000000,
      "carId": 73,
      "userId": 1012,
      "dealerId": 14
    }
    const res = await confirmBooking(data)
    console.log(res)
  }
  return (
    <div className="w-full flex justify-center ">
      <CardUi>
        <div className="min-w-[30rem]">
          <div className="flex justify-between">
            <Chip
              variant="outlined"
              value={`${item?.date}`}
              className="rounded-full font-[latto] text-sm"
            ></Chip>
            <Chip
              color="amber"
              value={`${item?.status}`}
              className="font-[latto] text-sm"
            ></Chip>
          </div>
          <div className="w-full flex justify-center">
            <div className="mt-5 flex flex-col justify-center">
              <div className="text-lg mt-3 font-[latto] font-medium text-black">
                Car Price:₹{item?.price}
              </div>
              <div className=" mt-3 font-[latto] text-lg font-medium text-black">
                Asking Price:₹{item?.askingPrice}
              </div>
              <div className="flex  justify-around gap-10">
                <Link to={`/carlist/cardetails/${item?.carId}`}>
                  <Button
                    color="blue"
                    className="flex gap-2 items-center mt-3 font-[latto]"
                  >
                    <span>Car Details </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
                <Button
                  color="green"
                  className="flex gap-2 items-center mt-3 font-[latto]"
                >
                  <span onClick={handleSubmit}>Confirm Request </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardUi>
    </div>
  );
};

export default DealerCarPendingRequest;
