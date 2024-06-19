import React from "react";
import services0 from "../../public/assets/hutchimg/img2.png";
import Image from "next/image";

function HutchPageCards() {
  return (
    <div className="min-w-[240px] max-w-[360px] relative  mx-auto z-20 mt-20 sm:min-w-[150px] ">
      <Image
        className="w-full relative -z-20 rounded-[20px]"
        src={services0}
        alt=""
      />

      <div className="h-[220px] sm:h-[180px] m-1  absolute bottom-0 rounded-[20px] flex flex-col justify-center items-center gap-2 group/items ">
        <div className=" h-[100%] m-2 sm:m-1 relative rounded-[20px] flex flex-col justify-center items-center gap-2 p-2 ">
          <div className="w-full h-full absolute -z-10 bg-gray-50 bg-opacity-20 rounded-2xl backdrop-blur-[20px]" />
          <div className="flex items-center justify-center text-black lg:text-2xl mac:text-[1.1rem] font-bold font-['Inter'] text-xs ">
            Perspiciatis unde omrs
          </div>
          <div className="text-justify text-black text-xs font-normal relative font-['Inter'] lg:leading-normal sm:leading-none">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
          </div>
          <div className="w-[122px] relative">
            <button className="w-[122px]  lg:h-11 mac:h-11 h-8  bg-zinc-950 rounded-[10px] text-center text-white text-xs md:text-sm font-normal font-['Inter'] leading-none ">
              Learn
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HutchPageCards;
