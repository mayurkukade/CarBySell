import carGroup from "../../../public/cars/cars.webp";

const HeroSection = () => {
  return (
    <div className="flex justify-between   ">
      <div className="md:p-12 p-4 h-auto bg-blue-100 w-full">
        <p className="font-latto text-xs md:mt-8">Welcomes to CarBySell</p>
        <p className="text-md md:text-4xl font-Merriweather ">
          Your Journey to Exceptional
        </p>
        <p className="text-md md:text-4xl font-Merriweather ">
          Cars Begins Here!
        </p>
      </div>

     
      <div className="absolute  right-0 ">
      
        <img alt="car" src={carGroup} className="w-[16rem] md:w-[40rem] " />
      </div>
    </div>
  );
};

export default HeroSection;
