import { useState } from "react";
import Inputs from "../../forms/Inputs";
import carGroup from "/cars/cars.webp";
import { Button } from "@material-tailwind/react";

const HeroSection = () => {
  const [locationState, setLocation] = useState("");

  const [carBrandState, setCarBrand] = useState("");

  const submitHandler = (e) => {
    e.target.value;
    console.log(locationState, carBrandState);
  };
  return (
    

    <div className="flex justify-between h-auto ">
      <div className="md:p-12 p-4 h-auto  bg-blue-100 w-full">
        <p className="font-latto text-xs md:mt-8 md:text-lg">
          Welcomes to CarBySell
        </p>
        <p className="text-md md:text-4xl font-Merriweather ">
          Your Journey to Exceptional
        </p>
        <p className="text-md md:text-4xl font-Merriweather ">
          Cars Begins Here!
        </p>
        <div className="w-[5rem] space-y-2 md:flex md:space-y-0 md:gap-2 mt-5 ">
          <Inputs
            label="Location"
            placeholder="Search by location"
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            value={locationState}
            type="text"
          />
          <Inputs
            label="Brand"
            placeholder="Search by location"
            name="brand"
            onChange={(e) => setCarBrand(e.target.value)}
            value={carBrandState}
            type="text"
          />
          
        </div>
        <Button onClick={submitHandler} className="mt-2">Search</Button>
      </div>

      <div className="absolute  right-0 ">
        <img alt="car" src={carGroup} className="w-[16rem] md:w-[45rem] " />
      </div>
    </div>
  );
};

export default HeroSection;
