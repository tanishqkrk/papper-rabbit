import React from "react";
import backarrow from "../../public/assets/headerimg/Vector.png";
import Image from "next/image";
import Link from "next/link";

function BackBar(props) {
  const name = props.name;
  return (
    <div className="w-full fixed z-40 flex flex-col items-center justify-center top-11  p-2 backdrop-blur-lg bg-gray-150 dark:bg-black bg-opacity-20">
      <div className="relative h-12 lg:w-[45%] mac:w-[49%] w-full flex justify-between items-center mx-11  p-2 b">
        <div className="flex flex-col justify-center gap-4 items-end h-full">
          <div className="flex justify-center items-center text-black  dark:text-white text-xl font-bold font-['Inter'] leading-[15px]">
            {name}
          </div>
          <div className="w-full dark:text-white flex justify-start items-center gap-1 text-black text-xs font-normal font-['Inter'] leading-none">
            <div>
              <Image className="w-2 h-2" src={backarrow} alt="" />
            </div>
            <Link
              href="/"
              className="text-black dark:text-white text-xs font-normal font-['Inter'] leading-none"
            >
              Home
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center  font-bold font-['Inter'] leading-[15px]">
          <button className="text-white bg-black dark:bg-white dark:text-black w-20 h-12 text-base rounded-[10px]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default BackBar;
