/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";
import CardUi from "../../ui/CardUi";
import { Link } from "react-router-dom";
const UserCardPendingRequest = ({ item }) => {
  console.log(item);
  return (
    <div className="w-full flex justify-center ">
      <CardUi>
        <div className="min-w-[30rem]">
          <div className="flex justify-around">
            <div>{item?.date}</div>
            <div>{item?.status}</div>
          </div>

          <div className="flex justify-around mt-5">
            <div className="text-lg">Car Price:₹{item?.price}</div>
            <div>Asking Price:₹{item?.askingPrice}</div>
          </div>
          <Link to={`/carlist/cardetails/${item?.carId}`}>
          <Button className="flex gap-2 items-center" ><span>Car Details </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</Button>
          </Link>
        </div>
      </CardUi>
    </div>
  );
};

export default UserCardPendingRequest;
