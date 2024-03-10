import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { CarouselCustomArrows } from "./CarouselCustomArrows";

export function CardDefault() {
  return (
    <Card className="mt-6 w-96">
      <div className="p-2">
        <CarouselCustomArrows />
      </div>
      <CardBody>
        <Typography>2021</Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Maruti New Wagon-R
        </Typography>
        <p className="text-sm">36KM PETROL MANUAL</p>
        <Typography variant="h6">₹ 4.42Lakh</Typography>

        <Button className="mt-2 mb-4">View Car</Button>
        <hr />
        <p className="text-sm">Free Test Drive Today at Kharadi</p>
      </CardBody>
    </Card>
  );
}
