import React from "react";
import HutchPageCards from "../hutch/HutchPageCards";
import HutchConCards from "./HutchConCards";

function HutchContact() {
  return (
    <div className="lg:w-[100%]  w-full h-full lg:mx-auto flex flex-col z-10  justify-between items-center relative">
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-[24rem] h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Advertising
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Hutch
          </div>
        </div>
      </div>

      <div className=" w-full h-full place-items-center grid grid-cols-2 grid-rows-2 lg:flex lg:justify-center lg:items-center mac:grid mac:grid-cols-4 mac:grid-rows-1 mac:w-[100%] relative mt-20 gap-4">
        <HutchConCards />
        <HutchConCards />
        <HutchConCards />
        <HutchConCards />
      </div>
    </div>
  );
}

export default HutchContact;
