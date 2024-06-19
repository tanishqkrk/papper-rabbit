import React from "react";
import image from "../../public/assets/casestudyimg/img.png";
import Image from "next/image";

function CasestudyContentReverse() {
  return (
    <div className="lg:w-[55%] w-screen h-full relative flex lg:flex-row-reverse flex-col justify-center items-center lg:p-0 p-3 ">
      <div className="">
        <Image
          className="w-full h-full relative rounded-[20px]"
          src={image}
          alt="services"
        />
      </div>

      <div className="lg:w-[50%] lg:h-[31rem] w-full h-full relative flex flex-col items-center justify-center lg:ml-[1.2rem] m-2  gap-10 p-4">
        <div className="flex flex-col items-center justify-center relative text-black text-2xl font-bold font-['Inter'] leading-normal ">
          halo impact
        </div>
        <div className="w-full flex items-center justify-center relative text-black text-xs font-bold font-['Inter'] leading-3 gap-10">
          <div className="w-full h-full flex items-center justify-center text-justify">
            <span className="text-zinc-950 text-xs font-bold font-['Inter'] leading-3">
              Comapny -{" "}
            </span>
            <span className="text-zinc-950 text-xs font-normal font-['Inter'] leading-3">
              Lorem ipsum
            </span>
          </div>
          <div className="w-full h-full flex items-center justify-center text-justify">
            <span className="text-zinc-950 text-xs font-bold font-['Inter'] leading-3">
              Comapny -{" "}
            </span>
            <span className="text-zinc-950 text-xs font-normal font-['Inter'] leading-3">
              Lorem ipsum
            </span>
          </div>
          <div className="w-full h-full flex items-center justify-center text-justify">
            <span className="text-zinc-950 text-xs font-bold font-['Inter'] leading-3">
              Comapny -{" "}
            </span>
            <span className="text-zinc-950 text-xs font-normal font-['Inter'] leading-3">
              Lorem ipsum
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justifypaper-center relative text-justify text-black text-sm font-normal font-['Inter'] leading-normal">
          Perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
          omnis perspiciatis unde omnis unde. Perspiciatis unde omnis
          perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde
          omnis unde omnis perspiciatis unde omnis perspiciatis unde omnis
          perspiciatis unde omnis{" "}
        </div>

        <div className="w-full flex flex-col items-center justify-end relative">
          <button className="w-[122px] h-11  bg-zinc-950 rounded-[10px] text-center text-white text-sm font-normal font-['Inter'] leading-none ">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
export default CasestudyContentReverse;
