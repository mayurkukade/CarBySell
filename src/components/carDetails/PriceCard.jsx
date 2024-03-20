/* eslint-disable react/prop-types */
import CardUi from "../../ui/CardUi";
import { Chip } from "@material-tailwind/react";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

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
  return (
    <CardUi>
      <p className="font-extrabold text-2xl text-black uppercase font-[latto]">
        {year} {brand} {model}
      </p>
      <p className="uppercase font-[Merriweather]">
        {color} {bodyType} . MANUAL
      </p>
      <div className="my-4 flex gap-2">
        <Chip
          variant="outlined"
          value={`${kmDriven} KM`}
          className="text-sm text-black font-[latto] hover:bg-gray-900 hover:text-white"
        />
        <Chip
          variant="outlined"
          value={`${ownerSerial} Owner`}
          className="text-base text-black font-[latto] hover:bg-gray-900 hover:text-white"
        />
        <Chip
          variant="outlined"
          value={`${fuelType}`}
          className="text-base text-black font-[latto] hover:bg-gray-900 hover:text-white"
        />
        <Chip
          variant="outlined"
          value={`${registration}`}
          className="text-base text-black font-[latto] hover:bg-gray-900 hover:text-white"
        />
      </div>
      <div className="flex align-bottom items-baseline gap-3">
        <IoHome />
        <div className=" mt-4 text-base font-[lotto]">
          Home Test Drive Available
        </div>
      </div>
      <div className="flex align-bottom items-baseline gap-3">
        <FaLocationDot />
        <div className=" mt-4 text-base text-blue-900 font-[lotto]">
          Parked at: {area},{city}
        </div>
      </div>
      <div className="flex align-bottom items-baseline gap-3">
        <FaFileAlt />
        <div className=" mt-4 text-base text-blue-900 font-[lotto]">
          View Inspection Report
        </div>
      </div>
      <div className="flex align-bottom items-baseline gap-3">
        <IoLogoWhatsapp />
        <div className=" mt-4 mb-6 text-base text-blue-900 font-[lotto]">
          Get Service History Report
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="flex justify-between align-middle items-center my-3">
        <div>
          <div className="text-orange-700 text-xl font-bold font-[latto]">
            ₹6978/month
          </div>
          <div className="text-xs font-[lotto]">On Zero down Payment</div>
          <div className="uppercase text-blue-900 text-xs font-[lotto]">
            Check Eligibility
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-black font-[latto]">
            ₹{price} Lakh
          </div>
          <div className="uppercase text-blue-900 text-xs font-[lotto]">
            Understand Price
          </div>
        </div>
      </div>
      <div className="my-4 px-6 py-2 bg-orange-700 text-white flex justify-center text-sm items-center rounded-xl uppercase font-[latto]">
        Buy Car
      </div>
    </CardUi>
  );
};

export default PriceCard;
