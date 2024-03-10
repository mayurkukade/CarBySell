import FilterCars from "../components/buyCar/FilterCars"
import GridCarList from "../components/buyCar/GridCarList"


const BuyCar = () => {
  return (
    <div className="container mx-auto mt-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <FilterCars />
      </div>
      <div className="md:col-span-3">
        <GridCarList />
      </div>
    </div>
  </div>
  
  )
}

export default BuyCar
