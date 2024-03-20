import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CarouselCustom from "./CarouselCustom";

export function HomeCardDefault() {
 
  return (
   
<div className="flex justify-center gap-10 bg-blue-300 ">

    <Card className="mt-6 w-80 ">
      <div className="p-2">
        <CarouselCustom/>
      </div>
      <CardBody className="">
        <Typography>2009</Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
           Hyundai base
        </Typography>
        <p className="text-sm uppercase">
          1200km Diesel abc
        </p>
        <Typography variant="h6">₹ 14,50000</Typography>

         <Link to={`/carlist/cardetails/${1200}`}>   
        <Button className="mt-2 mb-4">View Car</Button></Link>
        <hr />
        <p className="text-sm">Free Test Drive Today at Pune</p>
      </CardBody>
    </Card>

    <Card className="mt-6 w-80">
      <div className="p-2">
        <CarouselCustom/>
      </div>
      <CardBody>
        <Typography>2009</Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
           Hyundai base
        </Typography>
        <p className="text-sm uppercase">
          1200km Diesel abc
        </p>
        <Typography variant="h6">₹ 14,50000</Typography>

         <Link to={`/carlist/cardetails/${1200}`}>   
        <Button className="mt-2 mb-4">View Car</Button></Link>
        <hr />
        <p className="text-sm">Free Test Drive Today at Pune</p>
      </CardBody>
    </Card>

    <Card className="mt-6 w-80">
      <div className="p-2">
        <CarouselCustom/>
      </div>
      <CardBody>
        <Typography>2009</Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
           Hyundai base
        </Typography>
        <p className="text-sm uppercase">
          1200km Diesel abc
        </p>
        <Typography variant="h6">₹ 14,50000</Typography>

         <Link to={`/carlist/cardetails/${1200}`}>   
         <Button className="mt-2 mb-4">View Car</Button></Link>
        <hr />
        <p className="text-sm">Free Test Drive Today at Pune</p>
      </CardBody>
    </Card>
</div>

    
  );
}
export default HomeCardDefault;