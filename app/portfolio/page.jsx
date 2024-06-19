import React from "react";
import portfolio1 from "../../public/assets/portfolioimg/portfolio1.jpg";
import portfolio2 from "../../public/assets/portfolioimg/portfolio2.jpg";
import Image from "next/image";
import BackBar from "@/components/back/BackBar";
// import portfolio3 from '../../../assets/portfolioimg/portfolio3.jpg';
// import portfolio4 from '../../../assets/portfolioimg/portfolio4.jpg';

function PortfolioPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start mt-11">
      <BackBar />

      <div className="lg:max-w-[57%] mac:min-w-[74%] w-[70%] sm:w-[90%]  sm:p-0 relative gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 mac:grid-cols-2 mac:grid-rows-2 grid grid-cols-1 grid-rows-4 mt-20">
        <div className="w-full h-full relative m-1 group/items">
          <Image
            className=" w-full h-full   rounded-[20px]"
            src={portfolio1}
            alt=""
          />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight  ">
            Take A Look
          </div>

          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        <div className="w-full h-full relative m-1 group/items">
          <Image
            className=" w-full h-full   rounded-[20px]"
            src={portfolio1}
            alt=""
          />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight  ">
            Take A Look
          </div>

          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        <div className="w-full h-full flex flex-row-reverse items-end justify-between relative gap-2">
          <div className=" w-full h-full flex flex-col items-center justify-center relative m-1">
            <div className="w-full h-full z-10  left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
            <div className="w-full h-full z-10 text-center flex flex-col items-center justify-center  text-black dark:text-white text-[64px] font-normal font-['Katibeh'] leading-[64px]">
              Lorum ipsum
            </div>
          </div>

          <div className="w-full h-full relative m-1 group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={portfolio2}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
            <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
              voluptatem repellat nulla!
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-end justify-between relative gap-2">
          <div className=" w-full h-full flex flex-col items-center justify-center relative m-1">
            <div className="w-full h-full z-10  left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
            <div className="w-full h-full z-10 text-center flex flex-col items-center justify-center  text-black dark:text-white text-[64px] font-normal font-['Katibeh'] leading-[64px]">
              Lorum ipsum
            </div>
          </div>
          <div className="w-full h-full relative m-1 group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={portfolio2}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
            <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
              voluptatem repellat nulla!
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[57%] mac:min-w-[74%] w-[70%] sm:w-[90%]  sm:p-0 relative gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-2 mac:grid-cols-4 mac:grid-rows-2 grid grid-cols-2 grid-rows-3 my-3">
        <div className="w-full h-full relative m-1 group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={portfolio2}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        <div className="w-full h-full relative m-1 col-span-2 group/items">
          <Image
            className=" w-full h-full   rounded-[20px]"
            src={portfolio1}
            alt=""
          />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight  ">
            Take A Look
          </div>

          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        <div className="w-full h-full relative m-1 group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={portfolio2}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        <div className="w-full h-full relative m-1 group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={portfolio2}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        <div className="w-full h-full relative m-1 group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={portfolio2}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        <div className="w-full h-full relative m-1 group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={portfolio2}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>

        <div className="w-full h-full relative m-1 group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={portfolio2}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
