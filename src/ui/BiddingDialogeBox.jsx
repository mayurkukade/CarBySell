
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

import {useCreateBiddingMutation} from "../services/biddingAPI"
 
export default function BiddingDailogeBox() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const [bidding , setBidding] = React.useState({
    createdAt : "",
    closingTime : ""
  })

  const [createBidding] = useCreateBiddingMutation()

  async function formsubmit () {
     const res = await createBidding(bidding);
     console.log(res)
     handleOpen()
  }

  const handleClosingTimeChange = (e) => {
    setBidding({
      ...bidding,
      closingTime: e.target.value
    });
  };

  const handleCreatedAtChange = (e) => {
    setBidding({
      ...bidding,
      createdAt: e.target.value
    });
  };
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color="blue">
        Start Bidding
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>

        <Input label="Created at" value={bidding.createdAt} onChange={handleCreatedAtChange} />
        <div className="mt-5">
         <Input label="Closing time" value={bidding.closingTime} onChange={handleClosingTimeChange} />
        </div>
       
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