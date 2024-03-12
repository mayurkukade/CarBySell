/* eslint-disable react/prop-types */
import { CardDefault } from "../../ui/CardDefault";
import CardUi from "../../ui/CardUi";

const GridCarList = ({data}) => {
  console.log(data)
  return (
    <CardUi>
  

      <div className="grid md:grid-cols-3 md:grid-rows-1 gap-4 justify-center">
        
        {
          data?.list.map((items,index)=>{
            return(
              <div key={index}>
              <div className="flex">
          <CardDefault data={items} />
        </div>
              </div>
            )
          })
        }
        
    
      </div>
    </CardUi>
  );
};

export default GridCarList;
