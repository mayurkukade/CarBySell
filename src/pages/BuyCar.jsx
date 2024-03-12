import { useState } from "react";

import FilterCars from "../components/buyCar/FilterCars";
import GridCarList from "../components/buyCar/GridCarList";
import { useFilterCarQuery } from "../services/carAPI";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const BuyCar = () => {
  const [urlState, setUrlState] = useState();
  const { data, error, isLoading } = useFilterCarQuery(urlState);

  const navigate = useNavigate();
  console.log(data, error);
  console.log(isLoading);
  console.log(urlState);
  console.log(error);

  if (error?.status == 401) {
    Cookies.remove("token");
    navigate("/signin");
  }
  return (
    <div className="container mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <FilterCars setUrlState={setUrlState} />
        </div>
        <div className="md:col-span-3">
          <GridCarList data={data} />
        </div>
      </div>
    </div>
  );
};

export default BuyCar;
