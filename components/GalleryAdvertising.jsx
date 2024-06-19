import React from "react";
import portfolio1 from "../public/assets/portfolioimg/portfolio1.jpg";
import portfolio2 from "../public/assets/portfolioimg/portfolio2.jpg";
import img1 from "../public/assets/lounge/1.png";
import img3 from "../public/assets/lounge/3.png";
import BackBar from "./back/BackBar";
import Image from "next/image";

function GalleryAdvertising() {
  return (
    // <></>
    <div className="w-full flex flex-col items-center justify-center pt-10 lg:pt-20 lg:gap-8 mac:gap-8 gap-2">
      <BackBar name={"GalleryAdvertising"} />

      <div className="w-full h-full relative flex flex-col justify-center items-center ">
        <div className="w-[24rem] h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Advertising
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Gallery
          </div>
        </div>
      </div>

      <div className="w-[95%] mac:w-[76%] lg:w-[56%] lg:h-screen grid lg:grid-cols-3 lg:grid-rows-3 mac:grid-cols-3 mac:grid-rows-3 grid-cols-2 grid-rows-4 lg:gap-4 mac:gap-4 gap-2">
        <div className="w-full h-full relative m-1 group/items  lg:row-span-2 mac:row-span-2 row-span-2">
          <Image
            className=" w-full h-full   rounded-[20px]"
            src={img1}
            alt=""
          />
          {/*
           <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight  ">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div>
           */}
        </div>

        <div className="w-full h-full relative m-1 group/items  lg:col-span-2 mac:col-span-2 ">
          <Image
            className=" w-full h-full   rounded-[20px]"
            src={portfolio1}
            alt=""
          />
          {/* <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight  ">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div> */}
        </div>

        <div className="w-full h-full relative m-1 group/items lg:block mac:block hidden">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={img3}
            alt=""
          />
          {/* <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div> */}
        </div>

        <div className="w-full h-full relative m-1 group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={portfolio2}
            alt=""
          />
          {/* <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div> */}
        </div>

        <div className="w-full h-full relative m-1 group/items  col-span-2">
          <Image
            className=" w-full h-full   rounded-[20px]"
            src={portfolio1}
            alt=""
          />
          {/* <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight  ">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div> */}
        </div>

        <div className="w-full h-full relative m-1 group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={portfolio2}
            alt=""
          />
          {/* <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div> */}
        </div>

        <div className="w-full h-full relative m-1 group/items lg:hidden mac:hidden block">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={img3}
            alt=""
          />
          {/* <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur
            voluptatem repellat nulla!
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default GalleryAdvertising;
