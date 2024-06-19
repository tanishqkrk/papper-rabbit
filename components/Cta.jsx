import React from "react";
import ctaimg from "../public/assets/workwithus/workwithus.jpg";
import Image from "next/image";

function Cta() {
  return (
    <div className="w-full flex justify-center items-center mt-20 ">
      <div className="lg:w-[56%] mac:w-[74%] lg:h-80 w-full h-72 relative mx-5 my-8 text-center flex flex-col lg:flex-row mac:flex-row mac:gap-10 items-center lg:justify-between justify-center ">
        <Image
          className="lg:w-[1420px] lg:h-80 w-full  h-72 left-0 top-0 absolute rounded-[20px] "
          src={ctaimg}
          alt="cta image"
        />
        <div className=" lg:h-80 w-full h-72 left-0 top-0  absolute bg-black bg-opacity-5 rounded-[20px] backdrop-blur-[10px]" />

        <div className="lg:w-full lg:h-full lg:pl-[40px] mac:w-full mac:h-full mac:pl-[60px] flex flex-col justify-center  gap-3 my-10 lg:text-left text-2xl relative text-white dark:text-black lg:text-[40px] font-bold font-['Inter'] leading-none lg:leading-[48px]">
          <div className="w-full flex items-start sm:justify-center gap-4 text-custom-color ">
            <span className="t text-[58px] sm:text-[28px] mac:text-[38px] font-bold font-['Inter']">
              Perspective Inside Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat, dolores.
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4">
          <div to="/contactus">
            <button className="lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] sm:w-[5rem]  relative text-xs bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex">
              CTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
