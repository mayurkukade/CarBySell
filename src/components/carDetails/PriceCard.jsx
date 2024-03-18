/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import CardUi from "../../ui/CardUi";
import { jwtDecode } from "jwt-decode";
import { Button } from "@material-tailwind/react";


const PriceCard = ({
  price,
  brand,
  fuelType,
  kmDriven,
  ownerSerial,
  year,
  model,
  registration,
  city,
  area,
  color,
  bodyType,
}) => {
  const cookie = Cookies.get("token");
  console.log(cookie);
  const jwtDecodes = jwtDecode(cookie);
  console.log(jwtDecodes?.authorities.includes("DEALER"));
  const userRole = jwtDecodes?.authorities.includes("DEALER");
  return (
    <CardUi>
      <p className="font-bold text-2xl text-black uppercase">
        {year} {brand} {model}
      </p>
      <p>
        {color} {bodyType} . MANUAL
      </p>
      <div className="my-4 flex gap-2">
        {/* <Chip value={kmDriven}/> */}
        <div className="text-sm px-3 py-2 bg-blue-gray-50 rounded-2xl">
          {kmDriven} KM
        </div>
        <div className="text-sm px-3 py-2 bg-blue-gray-50 rounded-2xl">
          {ownerSerial} Owner
        </div>
        <div className="text-sm px-3 py-2 bg-blue-gray-50 rounded-2xl">
          {fuelType}
        </div>
        <div className="text-sm px-3 py-2 bg-blue-gray-50 rounded-2xl">
          {registration}
        </div>
      </div>
      <div className=" mt-4 text-sm">Home Test Drive Available</div>
      <div className=" mt-4 text-sm text-blue-900">
        Parked at : {area},{city}
      </div>
      <div className=" mt-4 text-sm text-blue-900">View Inspection Report</div>
      <div className=" mt-4 mb-6 text-sm text-blue-900">
        Get Service History Report
      </div>
      <hr className="border-gray-400" />
      <div className="flex justify-between align-middle items-center my-3">
        <div>
          <div className="text-orange-700 text-xl font-bold">₹6978/month</div>
          <div className="text-xs">On Zero down Payment</div>
          <div className="uppercase text-blue-900 text-xs">
            Check Eligibility
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-black">₹{price} Lakh</div>
          <div className="uppercase text-blue-900 text-xs">
            Understand Price
          </div>
        </div>
      </div>
      
      <Button
        disabled={userRole ? true : false}
        className="bg-orange-700 mt-2 text-white"
      >
        Buy Car
      </Button>
      
    </CardUi>
  );
};

export default PriceCard;
