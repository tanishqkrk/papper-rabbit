import Image from "next/image";
import React from "react";

function InsightsCards(props) {
  const insight1 = props.insightimg;
  return (
    <div className="lg:w-[340px] mac:w-[306px] w-[240px] lg:h-[510px] mac:h-[460px] h-[400px] relative flex items-end justify-center">
      {/* <div className="w-[66px] h-[65px] bg-black absolute bg-opacity-25 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]" /> */}

      <div className="absolute top-0 left-0 w-10 h-10 z-10 text-black dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
        <div className="w-full h-full absolute rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] " />
        334
      </div>

      <Image
        className="lg:w-[340px]  mac:w-[306px] w-[240px] lg:h-[510px] mac:h-[460px] h-[400px] absolute  rounded-[20px]"
        src={insight1}
        alt="review image1"
      />
      <div className=" lg:w-[340px]  mac:w-[306px] w-[240px] bg-white dark:bg-black bg-opacity-5 backdrop-blur-xl dark:bg-opacity-5 dark:backdrop-blur-xl  opacity-95 rounded-[10px] p-4 m-2 relative text-justify h-[250px]">
        <div className="absolute top-[-1.5rem] z-10 w-[90px] h-6 bg-red-200 rounded-tl-[10px] rounded-tr-[10px] backdrop-blur-[20px] items-center justify-center flex">
          New
        </div>

        <div className="text-black dark:text-white  text-xl mac:text-lg md:text-sm sm:text-sm z-10 font-bold font-['Inter'] ">
          Perspiciatis unde dolori Perspiciatis unde dolori
        </div>
        <div className="flex items-start justify-between mt-2">
          <div className="flex text-justify">
            <span className="text-black dark:text-white  text-[11px] font-bold font-['Inter'] ">
              Category -{" "}
            </span>
            <span className="text-black dark:text-white text-[11px] font-normal font-['Inter'] ">
              Lorem ipsum
            </span>
          </div>
          <div className="flex text-justify">
            <span className="text-black dark:text-white  text-[11px] font-bold font-['Inter'] ">
              Date -{" "}
            </span>
            <span className="text-black dark:text-white  text-[11px] font-normal font-['Inter'] ">
              DD/MM/YYYY
            </span>
          </div>
        </div>
        <div className="text-black dark:text-white  text-[12px] sm:text-xs md:text-xs font-normal font-['Inter'] leading-1 mt-3  h-[115px] overflow-y-scroll pr-1">
          Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Deleniti, minima ex libero ipsa quo impedit quibusdam atque alias vel,
          nihil aliquam adipisci veritatis odit. Eos rem dignissimos dolor alias
          iure? ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur officia eum beatae, fuga aliquid similique nisi eligendi.
          dolor sit amet, aliqua. Ut enim ad minim veniam. Ut enim ad minim
          veniam et dolore magna aliqua. Ut enim ad minim veniam.
        </div>
      </div>
    </div>
  );
}

export default InsightsCards;
