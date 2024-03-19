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
            <p className="font-bold text-2xl md:ml-12 ml-16 mb-4 mt-4" >Know your Car</p>
            <CardUi>
                <div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-6 mr-6">
                            <div>
                                <img alt="medal" src={medal} className="w-[2rem] ml-5 mr-4" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold text-black">Top Model</div>
                                <div>
                                    Top varient that is equipped with all features of the model
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mr-6">
                            <div>
                                <img alt="medal" src={medal} className="w-[2rem] ml-3 mr-5" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold text-black">Top Model</div>
                                <div>
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
                            <div className="font-bold text-black">Top Model</div>
                            <div>
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
                                <div>Reg Year</div>
                                <div className="font-bold text-black text-sm mt-2">
                                    {registration}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img alt="medal" src={medal} className="w-[1.4rem]" />
                            </div>
                            <div className="flex flex-col mt-7">
                                <div>Make Year</div>
                                <div className="font-bold text-black text-sm mt-2">{year}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img alt="medal" src={medal} className="w-[1.4rem]" />
                            </div>
                            <div className="flex flex-col mt-7">
                                <div>Reg Number</div>
                                <div className="font-bold text-black text-sm mt-2">
                                    ABC-1234567
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-6">
                            <div>
                                <img alt="medal" src={medal} className="w-[1.4rem]" />
                            </div>
                            <div className="flex flex-col">
                                <div>Fuel Type</div>
                                <div className="font-bold text-black text-sm mt-2">
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
                                <div>Engine Capacity</div>
                                <div className="font-bold text-black text-sm mt-2">1551 cc</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img alt="medal" src={medal} className="w-[1.4rem]" />
                            </div>
                            <div className="flex flex-col mt-7">
                                <div>Insurance</div>
                                <div className="font-bold text-black text-sm mt-2">
                                    Upto 25/12/2025
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img alt="medal" src={medal} className="w-[1.4rem]" />
                            </div>
                            <div className="flex flex-col mt-7">
                                <div>Spare Key</div>
                                <div className="font-bold text-black text-sm mt-2">Yes</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-5">
                            <div>
                                <img alt="medal" src={medal} className="w-[1.4rem]" />
                            </div>
                            <div className="flex flex-col">
                                <div>Transimission</div>
                                <div className="font-bold text-black text-sm mt-2">
                                    {transmission}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img alt="medal" src={medal} className="w-[1.4rem]" />
                            </div>
                            <div className="flex flex-col mt-7">
                                <div>KM Driven</div>
                                <div className="font-bold text-black text-sm mt-2">
                                    {kmDriven}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img alt="medal" src={medal} className="w-[1.4rem]" />
                            </div>
                            <div className="flex flex-col mt-7">
                                <div>Ownership</div>
                                <div className="font-bold text-black text-sm mt-2">
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