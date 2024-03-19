/* eslint-disable react/prop-types */
import CardUi from "../../ui/CardUi";
import medal from "/logo/medal.png";

const KnowYourCar = ({
    fuelType,
    registration,
    ownerSerial,
    transmission,
    year,
    carInsurance,
    kmDriven,
}) => {
    console.log(
        fuelType,
        registration,
        ownerSerial,
        transmission,
        year,
        carInsurance,
        kmDriven
    );
    return (
      <>
        <p className="text-2xl text-black font-bold my-6 ml-12 font-[Merriweather]">
          Know your Car
        </p>
        <CardUi>
          <div>
            <div className="flex justify-between">
              <div className="flex items-center gap-6 mr-6">
                <div>
                  <img alt="medal" src={medal} className="w-[2rem] ml-5 mr-4" />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-black font-[latto] text-xl">
                    Top Model
                  </div>
                  <div className="font-[latto] text-lg">
                    Top varient that is equipped with all features of the model
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mr-6">
                <div>
                  <img alt="medal" src={medal} className="w-[2rem] ml-3 mr-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-black font-[latto] text-xl">
                    Regularly Serviced
                  </div>
                  <div className="font-[latto] text-lg">
                    Top varient that is equipped with all features of the model
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-11">
              <div>
                <img alt="medal" src={medal} className="w-[2rem] ml-5" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-black font-[latto] text-xl">
                  Standard Safty Features
                </div>
                <div className="font-[latto] text-lg">
                  Top varient that is equipped with all <br />
                  features of the model
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 flex justify-between mt-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Reg Year</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto] uppercase">
                    {registration}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col mt-7">
                  <div className="font-[latto]">Make Year</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {year}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col mt-7">
                  <div className="font-[latto]">Reg Number</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    ABC-1234567
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Fuel Type</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {fuelType}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Engine Capacity</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    1551 cc
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col mt-7">
                  <div className="font-[latto]">Insurance</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    Upto 25/12/2025
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col mt-7">
                  <div className="font-[latto]">Spare Key</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    Yes
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Transimission</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {transmission}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col mt-7">
                  <div className="font-[latto]">KM Driven</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {kmDriven}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <img alt="medal" src={medal} className="w-[1.4rem]" />
                </div>
                <div className="flex flex-col mt-7">
                  <div className="font-[latto]">Ownership</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {ownerSerial}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardUi>
      </>
    );
};

export default KnowYourCar;