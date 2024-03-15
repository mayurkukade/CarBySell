import CardUi from "../../ui/CardUi";
import medal from "/logo/medal.png";
import forwardarrow from "/logo/forwardarrow.png";

const InspectionReport = () => {
  return (
    <>
      <div className="text-2xl text-black font-bold my-6 ml-12">
        Inspection Report
      </div>
      <CardUi>
        <div className="flex justify-between w-full gap-4">
          <div className="w-1/2 text-base">
            We aim to provide our customers with a reliable drive. Every car we
            sell is refurbished by experts at our Mega Refurbishment Labs.
          </div>
          <div className="flex gap-5 ">
            <div className="flex flex-col items-center text-center">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="text-sm mt-3 font-semibold text-black">
                Non <br /> Accidental
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="text-sm mt-3 font-semibold text-black">
                Non <br /> Tempered
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="text-sm mt-3 font-semibold text-black">
                Non <br /> Accidental
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
              <div className="text-sm mt-3 font-semibold text-black">
                Non <br /> Accidental
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="mt-2">
            <CardUi>
              <div className="flex justify-between w-full align-middle items-center">
                <div className="flex">
                  <img
                    alt="medal"
                    src={medal}
                    className="w-[1.5rem] ml-3 mr-5"
                  />
                  <div className="text-black font-bold">Imperfections</div>
                </div>
                <div>
                  <img
                    alt="medal"
                    src={forwardarrow}
                    className="w-[1rem] ml-3 mr-5"
                  />
                </div>
              </div>
              <div className="mt-4 px-4">
                {" "}
                Minor cosmetic imperfection are not repared as they do not
                affect performance, and educe the cost of ownership
              </div>
            </CardUi>
          </div>
          <div className="mt-2"></div>
          <CardUi>
            <div className="flex justify-between w-full align-middle items-center">
              <div className="flex">
                <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
                <div className="text-black font-bold">Repainted Parts</div>
              </div>
              <div>
                <img
                  alt="medal"
                  src={forwardarrow}
                  className="w-[1rem] ml-3 mr-5"
                />
              </div>
            </div>
            <div className="mt-4 px-4">
              {" "}
              Minor cosmetic imperfection are not repared as they do not affect
              performance, and educe the cost of ownership
            </div>
          </CardUi>
          <div className="mt-2"></div>
          <CardUi>
            <div className="flex justify-between w-full align-middle items-center">
              <div className="flex">
                <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
                <div className="text-black font-bold">Perfect Parts</div>
              </div>
              <div>
                <img
                  alt="medal"
                  src={forwardarrow}
                  className="w-[1rem] ml-3 mr-5"
                />
              </div>
            </div>
            <div className="mt-4 px-4">
              {" "}
              Minor cosmetic imperfection are not repared as they do not affect
              performance, and educe the cost of ownership
            </div>
          </CardUi>
          <div className="mt-2"></div>
          <CardUi>
            <div className="flex justify-between w-full align-middle items-center">
              <div className="flex">
                <img alt="medal" src={medal} className="w-[1.5rem] ml-3 mr-5" />
                <div className="text-black font-bold">Tyres (Life Remaining)</div>
              </div>
              <div>
                <img
                  alt="medal"
                  src={forwardarrow}
                  className="w-[1rem] ml-3 mr-5"
                />
              </div>
            </div>
            <div className="mt-4 px-4">
              {" "}
              Minor cosmetic imperfection are not repared as they do not affect
              performance, and educe the cost of ownership
            </div>
          </CardUi>
        </div>
        <div className="flex justify-end items-center mt-12">
          <div className="flex gap-2 px-20 py-3 items-center bg-[#002441] text-white text-sm rounded-2xl uppercase">
            <div>View Inspection Report</div>
            <div>
              <img alt="medal" src={forwardarrow} className="w-[1.2rem]" />
            </div>
          </div>
        </div>
      </CardUi>
    </>
  );
};

export default InspectionReport;
