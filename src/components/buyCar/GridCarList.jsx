import { CardDefault } from "../../ui/CardDefault";
import CardUi from "../../ui/CardUi";

const GridCarList = () => {
  return (
    <CardUi>
  

      <div className="grid md:grid-cols-3 md:grid-rows-1 gap-4 justify-center">
        <div className="flex">
          <CardDefault />
        </div>
        <div className="flex">
          <CardDefault />
        </div>
        <div className="flex">
          <CardDefault />
        </div>
        <div className="flex">
          <CardDefault />
        </div>
        <div className="flex">
          <CardDefault />
        </div>
        <div className="flex">
          <CardDefault />
        </div>
      </div>
    </CardUi>
  );
};

export default GridCarList;
