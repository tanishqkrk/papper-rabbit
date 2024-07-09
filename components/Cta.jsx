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
        <div className="lg:h-80 w-full flex flex-row  justify-between h-72 left-0 top-0 absolute bg-black bg-opacity-5 rounded-[20px] backdrop-blur-[10px]" />

        <div className="lg:w-full lg:h-full sm:px-2 md:px-2 lg:pl-[40px] mac:w-full mac:h-full mac:pl-[60px] flex flex-col justify-center gap-3 my-5 sm:my-2 lg:text-left text-2xl relative text-white dark:text-black lg:text-[40px] font-bold font-['Inter'] leading-none lg:leading-[48px]">
          <div className="w-full flex items-start sm:justify-start gap-4 text-custom-color">
            <span className="t text-[58px] sm:text-[28px] mac:text-[38px] md:text-[48px] font-bold font-['Inter']">
              <span className="word-1 sm:text-[24px] md:text-[32px] lg:text-[58px]">
                Perspective
              </span>{" "}
              <span className="word-2 sm:text-[24px] md:text-[32px] lg:text-[58px]">
                Inside
              </span>{" "}
              <span className="word-3 sm:text-[24px] md:text-[32px] lg:text-[58px]">
                You
              </span>
            </span>
          </div>
          <p className="text-lg sm:text-base md:text-lg font-normal leading-tight text-left text-white">
            We inception your vision, extract the perspective and creatively
            craft your ideas so that they can manifest into the world of
            reality.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4">
          <Link href="/contactus">
            <button className=" button2 lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] md:w-[150px] md:h-[40px] sm:w-[100px] sm:h-[35px] relative text-xs bg-zinc-950 dark:bg-white rounded-[10px] text-white dark:text-black lg:text-sm font-bold font-['Inter'] leading-[30px] justify-center items-center inline-flex hover:shadow-pink">
              Know More
            </button>
          </Link>
          <Link href="/contactus">
            <button className="sm:hidden  button1 relative inline-flex lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] md:w-[150px] md:h-[40px] sm:w-[100px] sm:h-[35px] h-12 overflow-hidden rounded-[10px] p-[3px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-50">
              <span className="absolute inset-[-200%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFC0CB_0%,#FF69B4_50%,#FFC0CB_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[8px] bg-zinc-950 dark:bg-white text-white dark:text-black text-xs lg:text-sm font-bold font-['Inter'] leading-[30px] backdrop-blur-3xl">
                Reach Us
              </span>
            </button>
          </Link>

          <Link href="/contactus">
            <button className="sm:block hidden   relative inline-flex lg:w-[192px] lg:h-[44px] lg:mr-[100px] mac:w-[200px] mac:h-[50px] mac:mr-[100px] md:w-[150px] md:h-[40px] sm:w-[100px] sm:h-[35px] h-12 overflow-hidden rounded-[10px] p-[3px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-50">
              <span className="absolute inset-[-200%]  bg-[conic-gradient(from_90deg_at_50%_50%,#FFC0CB_0%,#FF69B4_50%,#FFC0CB_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[8px] bg-zinc-950 dark:bg-white text-white dark:text-black text-xs lg:text-sm font-bold font-['Inter'] leading-[30px] backdrop-blur-3xl">
                Reach Us1
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cta;
