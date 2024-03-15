import CardUi from "../../ui/CardUi";
import { Carousel } from "@material-tailwind/react";
import medal from "/logo/medal.png";
import forwardarrow from "/logo/forwardarrow.png";

const TopFeatures = () => {
  return (
    <>
      <div className="text-2xl text-black font-bold my-6 ml-12">
        Top Features
      </div>
      <CardUi>
        <div className="w-full flex gap-7">
          <div className="w-1/2 h-52">
            <Carousel
              className="rounded-xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
                
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://media.istockphoto.com/id/146917964/photo/mannequin-in-a-car.jpg?s=2048x2048&w=is&k=20&c=LsAnu76us78Ae6cM0z_QqD1izPXEjAd8ehbBc9JEuzo="
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://media.istockphoto.com/id/531868882/photo/starting-the-car-engine.jpg?s=2048x2048&w=is&k=20&c=tYYKtOLf2WDrX4QYjMIaxKNP77NPDkFRlUeg4McqhVc="
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="font-semibold text-black">
                Steering Mounted Controls
              </div>
            </div>
            <div className="flex mt-5">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="font-semibold text-black">Push Button Start</div>
            </div>
            <div className="flex mt-5">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="font-semibold text-black">
                Bluetooth Campatibility
              </div>
            </div>
            <div className="flex mt-5">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="font-semibold text-black">Airbags</div>
            </div>
            <div className="flex mt-5">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="font-semibold text-black">
                ABS - Anti-lock Braking System
              </div>
            </div>
            <div className="flex justify-end items-center mt-12">
              <div className="flex gap-2 px-20 py-3 items-center bg-[#002441] text-white text-sm rounded-2xl uppercase">
                <div>View Inspection Report</div>
                <div>
                  <img alt="medal" src={forwardarrow} className="w-[1.2rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardUi>
    </>
  );
};

export default TopFeatures