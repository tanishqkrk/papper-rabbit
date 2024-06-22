import React from "react";
import review1 from "../public/assets/review/review1.jpg";
import review2 from "../public/assets/review/review2.jpg";
import review3 from "../public/assets/review/review3.jpg";
import review4 from "../public/assets/review/review4.png";
import review5 from "../public/assets/review/img.png";

import ReviewCards from "./ReviewCards";
import Image from "next/image";

function Review() {
  return (
    <div className="w-full dark:bg-black pt-10  relative pb-14 flex-col justify-start items-center gap-[0.18px] inline-flex">
      <div className="w-full  relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-purple-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Reviews
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Happy
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[464.95px] pt-8 pb-[32.95px] justify-end items-center inline-flex"> */}
      <div className="w-full h-[360px] relative flex items-start gap-4 overflow-x-scroll no-scrollbar mt-10">
        <div className="lg:w-[340px] w-[306px] h-[360px] relative flex items-end justify-end ml-[13%] ">
          <Image
            className="lg:w-[340px]  w-[306px] h-[360px] absolute  rounded-[20px]"
            src={review1}
            alt="review image1"
          />
          <div className="  lg:w-[340px]  w-[306px] bg-white dark:bg-black bg-opacity-5 backdrop-blur-xl dark:bg-opacity-5 dark:backdrop-blur-xl  opacity-95 rounded-[10px] p-4 m-4 relative text-justify h-[180px]">
            <span className="text-zinc-950 dark:text-white text-sm font-bold font-['Inter']">
              Flexinutria{" "}
            </span>
            <span className="text-zinc-950 dark:text-white text-sm font-normal font-['Inter']">
              |
            </span>
            <span className="text-zinc-950 dark:text-white text-sm font-bold font-['Inter']">
              {" "}
            </span>
            <span className="text-zinc-950 dark:text-white text-sm font-normal font-['Inter']">
              Company <br />
            </span>
            <div className="text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-1 mt-3  h-[115px] overflow-y-scroll pr-1">
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

        <ReviewCards review1={review2} />
        <ReviewCards review1={review3} />
        <ReviewCards review1={review4} />
        <ReviewCards review1={review5} />
        <ReviewCards review1={review3} />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Review;
