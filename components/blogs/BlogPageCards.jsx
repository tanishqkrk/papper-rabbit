"use client";
import React, { useRef, useState } from "react";
import blogsimg from "../../public/assets/blogsimg/blog1.png";
import button from "../../public/assets/blogsimg/Vector.svg";
import Image from "next/image";

function BlogPageCards() {
  const smalldiv = useRef(null);
  const bigdiv = useRef(null);

  const [display, setDisplay] = useState(false);

  const hover = () => {
    setDisplay(!display);
    if (display) {
      smalldiv.current.classList.remove("hide");
      bigdiv.current.classList.remove("show");
    } else {
      smalldiv.current.classList.add("hide");
      bigdiv.current.classList.add("show");
    }
  };

  return (
    <div className="min-w-[180px] max-w-[280px] relative mx-auto z-10">
      <Image
        className="w-full relative -z-20 rounded-[20px]"
        src={blogsimg}
        alt="Blog Image"
      />

      <div
        className="h-[220px] w-full absolute left-0 bottom-0 rounded-[20px] flex flex-col justify-end items-center gap-2"
        ref={smalldiv}
        onMouseEnter={hover}
      >
        <div className="w-full h-full relative rounded-[20px] flex flex-col justify-center items-center">
          <div className="w-full h-full absolute -z-10 bg-gray-50 dark:bg-black bg-opacity-20 dark:bg-opacity-20 rounded-2xl backdrop-blur-[20px] dark:backdrop-blur-[20px]" />
          <div className="w-full flex z-20 items-center justify-start px-4 pt-3 sm:pt-0">
            <span className="text-black dark:text-white text-xs sm:text-[8px] font-bold font-['Inter']">
              Author:{" "}
            </span>
            <span className="text-black dark:text-white text-xs sm:text-[8px] font-normal font-['Inter']">
              Dishti Raju
            </span>
          </div>
          <div className="text-justify z-20 text-black dark:text-white text-[25px] sm:text-xl lg:text-[1.9rem] mac:text-[1.8rem] mac:leading-[20px] font-normal font-['Katibeh'] lg:leading-[24px] leading-[16px] sm:leading-none lg:p-3 p-4 sm:p-1">
            Branding is oxygen for the companies identity building...! design
            creat design tech....
          </div>
          <div className="w-full flex z-20 flex-col">
            <div className="mx-4 sm:mx-2">
              <span className="text-black dark:text-white text-[10px] sm:text-[8px] font-bold font-['Inter']">
                Tag:{" "}
              </span>
              <span className="text-black dark:text-white text-[10px] sm:text-[8px] font-normal font-['Inter']">
                #paperrabbit #pr #hashtags
              </span>
            </div>
            <div className="mx-4 sm:mx-2">
              <span className="text-black dark:text-white text-[10px] sm:text-[8px] font-bold font-['Inter']">
                Date:
              </span>
              <span className="text-black dark:text-white text-[10px] sm:text-[8px] font-normal font-['Inter']">
                {" "}
                DD - MMM - YYYY
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-full z-20 top-0 absolute rounded-[20px] flex flex-col justify-end items-start gap-2 sm:gap-0 invisible bg-gray-50 dark:bg-black dark:bg-opacity-20 dark:backdrop-blur-2xl"
        ref={bigdiv}
        onMouseLeave={hover}
      >
        <div className="w-full absolute z-10 rounded-[20px] bg-transparent bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-20 dark:backdrop-blur-2xl bg-gray-50" />

        <div className="w-full z-20 flex items-center justify-start px-3">
          <span className="text-black dark:text-white text-xs sm:text-[8px] font-bold font-['Inter']">
            Author:{" "}
          </span>
          <span className="text-black dark:text-white text-xs sm:text-[8px] font-normal font-['Inter']">
            Dishti Raju
          </span>
        </div>
        <div className="text-justify text-black dark:text-white z-20 text-[25px] sm:text-sm lg:text-[1.9rem] mac:text-[1.8rem] mac:leading-[20px] font-normal font-['Katibeh'] lg:leading-[24px] leading-[17px] sm:leading-none lg:p-3 p-3">
          Branding is oxygen for the companies identity building...! design
          creat design tech....
        </div>

        <div className="text-justify text-black dark:text-white z-20 text-[12px] sm:text-[10px] lg:text-sm mac:text-sm mac:leading-[16px] font-normal font-['Inter'] lg:leading-[2px] leading-[13px] sm:leading-none lg:p-3 p-3">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor
          incididunt ut labore et dolore magna aliqua. &quot;Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Tempor incididunt ut
          labore et.&quot;
        </div>

        <div className="px-3 z-20">
          <span className="text-black dark:text-white text-[10px] sm:text-[8px] font-bold font-['Inter']">
            Tag:{" "}
          </span>
          <span className="text-black dark:text-white text-[10px] sm:text-[8px] font-normal font-['Inter']">
            #paperrabbit #pr #hashtags
          </span>
        </div>
        <div className="px-3 z-20">
          <span className="text-black dark:text-white text-[10px] sm:text-[8px] font-bold font-['Inter']">
            Date:
          </span>
          <span className="text-black dark:text-white text-[10px] sm:text-[8px] font-normal font-['Inter']">
            {" "}
            DD - MMM - YYYY
          </span>
        </div>

        <div className="w-full flex flex-col items-center justify-center p-2 z-20">
          <button className="w-[122px] h-11 sm:h-7 bg-zinc-950 rounded-[10px] text-center text-white text-xs sm:text-[8px] md:text-sm font-normal font-['Inter'] leading-none">
            View More
          </button>
        </div>
      </div>

      <div className="z-10 absolute bottom-1 right-1">
        <Image src={button} alt="button" />
      </div>
    </div>
  );
}

export default BlogPageCards;
