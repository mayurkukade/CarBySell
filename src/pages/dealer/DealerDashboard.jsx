import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,

} from "@heroicons/react/24/solid";
import SellForCar from "./SellForCar";
import BiddingDealer from "./BiddingDealer";

export default function DealerDashboard() {
  const data = [
    {
      label: "Sell For Car",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <SellForCar/>
    },
    {
      label: "Bidding Car",
      value: "profile",
      icon: UserCircleIcon,
      desc:<BiddingDealer/>,
    },
    
  ];
  return (
    
    <Tabs value="dashboard">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
