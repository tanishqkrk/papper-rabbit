import React from "react";
import servicesImage from "../../public/assets/services/servicesPage/img.png";
import Image from "next/image";

function ServicesContentReverse({ name }) {
  return (
    <div className="lg:w-[56%] mac:w-[74%] w-full h-full relative flex lg:flex-row-reverse mac:flex-row-reverse flex-col justify-center items-center lg:p-0 mac:p-0 p-3 ">
      <div className="">
        <Image
          className="w-full h-full relative rounded-[20px]"
          src={servicesImage}
          alt="services"
        />
      </div>

      <div className="lg:w-[50%] lg:h-[31rem] w-full h-full flex flex-col items-center justify-start gap-5 lg:mr-[1.2rem] mac:mr-[1.2rem] m-2">
        <div className="flex flex-col items-center justify-center text-black dark:text-white text-2xl font-bold font-['Inter'] leading-normal ">
          {name ? name : "none"}
        </div>
        <div className="flex flex-col items-center justify-center text-black dark:text-white text-xs font-bold font-['Inter'] leading-3">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="flex flex-col items-center justify-center text-justify text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. &quot;
        </div>
        <div className=" w-full h-full flex items-center justify-evenly">
          <div className="h-full gap-8 flex flex-col items-center text-black dark:text-white lg:text-xs text-xs font-bold font-['Inter'] leading-3">
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet.
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet.
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet.
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet.
            </a>
          </div>
          <div className="h-full gap-8 flex flex-col items-center text-black dark:text-white lg:text-xs text-xs font-bold font-['Inter'] leading-3">
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet.
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet.
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet.
            </a>
          </div>
        </div>
        <div className="w-full h-[40%] flex flex-col items-center justify-end">
          <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none ">
            {" "}
            <div to="/serviveslayer"> View More</div>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesContentReverse;
