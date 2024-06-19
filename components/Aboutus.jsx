import React from "react";

import aboutuslogo from "../public/assets/aboutuspngs/aboutuslogo.svg";
import Image from "next/image";
import Link from "next/link";

function Aboutus() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-20 ">
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Adevertising
          </div>
          <div className="w-full top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            About us
          </div>
        </div>
      </div>
      <div className="lg:w-[56%] mac:w-[74%] w-full flex flex-col items-center justify-center gap-8 mt-10">
        <div className="w-full text-justify text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal p-8">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
        </div>
        <div className="h-full flex items-center justify-center md:flex-col sm:flex-col gap-10 p-8">
          <div className="h-full max-w-[400px] text-center text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            <br />_ DARSHAN PRAKASH&quot;
          </div>
          <div className="h-full text-center text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal">
            <Image src={aboutuslogo} alt="logo" />
          </div>
          <div className="max-h-full max-w-[400px] text-center text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            <br />_ DARSHAN PRAKASH&quot;
          </div>
        </div>
        <div className="w-full text-justify text-black dark:text-white text-sm font-normal font-['Inter'] leading-normal p-8">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
        </div>
        <div className="w-[122px] h-11 relative mt-4">
          <button className="w-[122px] h-11 bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none">
            <Link href="/aboutus">View More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
