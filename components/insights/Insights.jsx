"use client";
import React from "react";
import insight1 from "../../public/assets/insights/insights1.jpg";
import insight2 from "../../public/assets/insights/insights2.jpg";
import insight3 from "../../public/assets/insights/insights3.jpg";
import insight4 from "../../public/assets/insights/insights4.jpg";
import InsightsCards from "./InsightsCards";
import Image from "next/image";
import Link from "next/link";
// import { Link } from "react-router-dom";

function Insights() {
  return (
    <div className="w-full relative pb-14 flex-col justify-start items-center gap-[0.18px] inline-flex dark:bg-black ">
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-teal-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Advertising
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Insight
          </div>
        </div>
      </div>

      <div className="w-full mac:w-[70%] lg:w-[56%] relative text-center text-black dark:text-white text-2xl font-bold font-['Inter'] leading-9 mt-10 p-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. <br />
        <br />
      </div>

      <div className="w-full lg:h-[510px] mac:h-[460px] h-[400px] relative flex items-start gap-4 overflow-x-scroll no-scrollbar mt-10">
        <div className="lg:w-[340px] mac:w-[306px] w-[240px] lg:h-[510px] mac:h-[460px] h-[400px] relative flex items-end justify-center lg:ml-[570px] ml-[13%] ">
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
              Deleniti, minima ex libero ipsa quo impedit quibusdam atque alias
              vel, nihil aliquam adipisci veritatis odit. Eos rem dignissimos
              dolor alias iure? ipsum Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Pariatur officia eum beatae, fuga aliquid
              similique nisi eligendi. dolor sit amet, aliqua. Ut enim ad minim
              veniam. Ut enim ad minim veniam et dolore magna aliqua. Ut enim ad
              minim veniam.
            </div>
          </div>
        </div>

        <InsightsCards insightimg={insight2} />
        <InsightsCards insightimg={insight3} />
        <InsightsCards insightimg={insight4} />
        <InsightsCards insightimg={insight1} />
        <InsightsCards insightimg={insight2} />
      </div>

      <div className="w-[122px] h-11 relative pt-10 ">
        <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black  text-sm font-normal font-['Inter'] leading-none ">
          {" "}
          <Link href="/insight">Explore All</Link>{" "}
        </button>
      </div>
    </div>
  );
}

export default Insights;
