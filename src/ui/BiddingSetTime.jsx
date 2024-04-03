

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

import {useStartBiddingSetTimeMutation} from "../services/biddingAPI"
 
export default function BiddingSetTime() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

 const [settime , setSettime] = React.useState("")
  const [startBiddingSetTime] = useStartBiddingSetTimeMutation();

 
  console.log(settime)

  async  function formsubmit  ()  {
    const res = await  startBiddingSetTime (settime)
console.log(res)
  }
  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color="indigo">
      Set Time
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Set Bidding Time</DialogHeader>
        <DialogBody>
           <Input label="set time" value={settime} onChange={(e) => setSettime(e.target.value)}/>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={formsubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}