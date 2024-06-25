import React from "react";
import ctaimg from "../public/assets/workwithus/workwithus.jpg";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";

function Cta() {
  return (
    <div className="w-full flex dark:bg-black justify-center items-center pt-10 pb-10">
      <div className="lg:w-[70%] mac:w-[74%] lg:h-80 w-full h-72 relative mx-5 my-8 text-center flex flex-col lg:flex-row mac:flex-row mac:gap-10 items-center lg:justify-between justify-center">
        <Image
          className="lg:w-[1420px] lg:h-80 w-full h-72 left-0 top-0 absolute rounded-[20px]"
          src={ctaimg}
          alt="cta image"
        />
        <div className="lg:h-80 w-full h-72 left-0 top-0 absolute bg-black bg-opacity-5 rounded-[20px] backdrop-blur-[10px]" />

        <div className="lg:w-full lg:h-full lg:pl-[40px] mac:w-full mac:h-full mac:pl-[60px] flex flex-col justify-center gap-3 my-10 lg:text-left text-2xl relative text-white dark:text-black lg:text-[40px] font-bold font-['Inter'] leading-none lg:leading-[48px]">
          <div className="w-full flex items-start sm:justify-center gap-4 text-custom-color">
            <span className="t text-[58px] sm:text-[28px] mac:text-[38px] font-bold font-['Inter']">
              <span className="word-1">Perspective</span>{" "}
              <span className="word-2">Inside</span>{" "}
              <span className="word-3">You</span>
            </span>
          </div>
          <p className="text-lg font-normal leading-tight text-left text-white">
            We inception your vision, extract the perspective and creatively
            craft your ideas so that they can manifest into the world of
            reality.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4">
          <Link href="/contactus">
            <button className=" button2 lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] sm:w-[5rem] relative text-xs bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex hover:shadow-pink">
              Know More
            </button>
          </Link>
          <Link href="/contactus">
            <button className="button2 lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] sm:w-[5rem] relative text-xs bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center block-bg inline-flex ">
              Reach Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cta;
