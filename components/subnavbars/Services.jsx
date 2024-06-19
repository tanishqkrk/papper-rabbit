import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className=" w-full top-[44px] left-0 right-[80px] fixed h-[360px] z-50  gap-4 bg-gray-50 dark:bg-black bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-5 dark:backdrop-blur-sm  nav-items">
      <div className=" lg:w-full w-full top-0 h-[360px] absolute bg-gray-50 dark:bg-black bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-50 dark:backdrop-blur-2xl" />
      <div className="absolute left-[26%] top-[10%]  lg:w-[58rem] flex justify-start items-start gap-5">
        <div className="relative flex flex-col items-start justify-start mx-5">
          <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none">
            Services
          </div>
          <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[20px] ">
            {" "}
            <Link href="/serviceslayer">Identity</Link>{" "}
          </div>
          <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">
            <Link href="/serviceslayer">Communication</Link>{" "}
          </div>
          <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">
            <Link href="/serviceslayer">creative</Link>{" "}
          </div>
          <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">
            <Link href="/serviceslayer">Digital Design</Link>{" "}
          </div>
          <div className=" text-black dark:text-white text-2xl font-semibold font-['Inter'] leading-normal mt-[16px]">
            <Link href="/serviceslayer">Development</Link>{" "}
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-start mx-5">
          <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none ">
            Other Services
          </div>
          <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[20px]">
            <Link href="/serviceslayer">Marketing</Link>{" "}
          </div>
          <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">
            <Link href="/serviceslayer">Motion Graphic</Link>{" "}
          </div>
          <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">
            <Link href="/serviceslayer">White Labels</Link>{" "}
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-start mx-5">
          <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none">
            Quick Links
          </div>
          <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[20px]">
            <Link href="/articles">lorem</Link>{" "}
          </div>
          <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">
            <Link href="/resources">lorem ipsun</Link>{" "}
          </div>
          <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">
            Lorum Ipsum
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
