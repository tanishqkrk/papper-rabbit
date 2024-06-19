import React from "react";
import workwithusimg from "../public/assets/workwithus/workwithus.jpg";
import Image from "next/image";

function Workwithus() {
  return (
    <div className="w-full flex justify-center items-center mt-20 ">
      <div className="lg:w-[56%] mac:w-[74%] lg:h-80 w-full h-72 relative mx-5 my-8 text-center flex flex-col lg:flex-row mac:flex-row mac:gap-10 items-center lg:justify-between justify-center ">
        <Image
          className="lg:w-[1420px] lg:h-80 w-full  z-[1] h-72 left-0 top-0 absolute rounded-[20px] "
          src={workwithusimg}
          alt=""
        />
        <div className=" lg:h-80 w-full h-72 left-0 top-0 z-[2] absolute bg-black bg-opacity-5 rounded-[20px] backdrop-blur-[10px]" />

        <div className="lg:w-full lg:h-full lg:pl-[60px] mac:w-full mac:h-full mac:pl-[60px] flex flex-col justify-center  gap-3 my-10 lg:text-left text-2xl relative text-white dark:text-black lg:text-[40px] font-bold font-['Inter'] leading-none lg:leading-[48px]  z-[4] ">
          <div className="w-full flex items-start sm:justify-center gap-4 text-custom-color ">
            <span className=" text-[58px] sm:text-[28px] mac:text-[38px] font-bold font-['Inter']">
              Perspective Inside
            </span>
            <span className=" text-[58px] sm:text-[28px] mac:text-[38px] font-bold font-['Inter']">
              You!
            </span>
          </div>
          <div className="w-full flex items-start text-white  sm:text-xs text-lg font-normal font-['Inter']">
            Let’s makes you build your dream into a reality and gain growth to
            your business.
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4 z-[4]">
          <button className="lg:w-[122px] lg:h-[44px] lg:mr-[100px] mac:w-[122px] mac:h-[44px] mac:mr-[100px] md:w-[7rem] sm:w-[6rem] relative text-xs bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex">
            Work with US
          </button>
          <button className=" lg:w-[122px] lg:h-[44px] lg:mr-[100px] mac:w-[122px] mac:h-[44px] mac:mr-[100px]  md:w-[7rem] sm:w-[6rem] relative text-xs bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex block-bg ">
            <div to="career"> Work with US</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Workwithus;
