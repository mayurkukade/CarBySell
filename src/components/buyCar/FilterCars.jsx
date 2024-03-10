import { useState } from "react";

import CardUi from "../../ui/CardUi";
import { Button, Slider, Typography } from "@material-tailwind/react";

const FilterCars = () => {
  const [value, setValue] = useState(200000);
  console.log(new Intl.NumberFormat("en-IN").format(value));
  const formattedAmount = new Intl.NumberFormat("en-IN").format(value);
  console.log(formattedAmount);
  return (
    <CardUi >
      <div className="space-y-4 ">
        <form>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price Range
            </Typography>
            <div className="flex justify-center items-center">
              <div style={{ width: "300px" }}></div>
            </div>
            ₹ {formattedAmount}
            <div className="w-auto">
              <Slider
                className="overflow-hidden"
                color="blue"
                defaultValue={200000}
                step={10000}
                min={200000}
                max={10000000}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <select className="border border-gray-700 h-10 rounded-lg">
              <option>Select Area</option>
              <option>Wagholi</option>
              <option>Kharadi</option>
              <option>Baner</option>
              <option>Hinjewadi</option>
              <option>Viman Nagar</option>
            </select>
            <select className="border border-gray-700 h-10 rounded-lg">
              <option>Select Year</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
            <select className="border border-gray-700 h-10 rounded-lg">
              <option>Select Brand</option>
              <option>Tata</option>
              <option>Honda</option>
              <option>Hyundai</option>
              <option>Mahindra</option>
              <option>Kia</option>
              <option>Suzuki</option>
              <option>Volkswagen</option>
            </select>
            <select className="border border-gray-700 h-10 rounded-lg">
              <option>Select Brand</option>
              <option>Harrier</option>
              <option>Verna</option>
              <option>Swift</option>
              <option>i20</option>
              <option>Sonet</option>
              <option>Virtus</option>
              <option>Creata</option>
            </select>
            <select className="border border-gray-700 h-10 rounded-lg">
              <option> Fuel Type</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
           
            </select>
            <select className="border border-gray-700 h-10 rounded-lg">
              <option> Transmission</option>
              <option>Manual</option>
              <option>Automatic</option>
            
           
            </select>
            
         
          </div>
          <div className="flex gap-5 mt-5">
          <Button>Search</Button>
          <Button>Reset</Button>
          </div>
        </form>
      </div>
    </CardUi>
  );
};

export default FilterCars;
