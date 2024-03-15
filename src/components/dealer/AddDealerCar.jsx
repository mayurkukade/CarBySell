import React from "react";
import {
  Button,
  Dialog,
  Card,

  CardBody,
  CardFooter,
  Typography,
  
} from "@material-tailwind/react";
 
export default function AddDealerCar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button onClick={handleOpen}>ADD CAR+</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
             ADD CAR
            </Typography>
          
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              ADD+
            </Button>
            
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}