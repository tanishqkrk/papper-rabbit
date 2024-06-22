"use client";
import React, { useState } from "react";
import Image from "next/image";

import hatch1 from "../public/assets/brandingimg/hatch1.svg";
import hatch2 from "../public/assets/brandingimg/hatch2.svg";
import hatch from "../public/assets/brandingimg/hatch.svg";
import Link from "next/link";

function DummyBranding() {
  const [mouse, setMouse] = useState(false);
  const [id, setId] = useState(0);

  const mousehover = (id) => {
    setMouse(!mouse);
    setId(id);
  };

  return (
    <div className="w-full z-20 relative flex flex-col items-center justify-start gap-12 bg-white dark:bg-black h-screen mac:h-[880px] sm:h-full md:h-full">
      <div className="w-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-[1rem] top-[2.1rem] absolute text-red-200 lg:text-8xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Hutch
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Rabbit
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 relative lg:grid-rows-1 sam-[58%] lg:max-w-[58%] mac:w-[75%] mac:grid mac:grid-cols-2 lg:mt-[5rem] mac:grid-rows-1 ram-[75%] flex flex-col items-center justify-center lg:mb-20 lg:gap-20 mac:gap-20">
        <div className="relative flex items-center justify-center mt-5">
          <Image
            className="lg:min-w-[100%] mac:min-w-[100%] sm:w-[90%]"
            src={hatch}
            alt="Hatch"
            layout="responsive"
            width={500}
            height={300}
          />
          <div className="max-w-[49%] ram-[242px] ram2-[186px] left-[-10rem] bottom-[-10rem] mac:left-[-8rem] mac:bottom-[-9rem] hidden absolute lg:inline-flex mac:inline-flex">
            <Image
              src={hatch1}
              alt="Hatch 1"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
          <div className="max-w-[39%] ram-[242px] ram2-[186px] top-3 right-[-5rem] hidden absolute lg:inline-flex mac:inline-flex">
            <Image
              src={hatch2}
              alt="Hatch 2"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
          <div
            className="w-5 h-5 right-64 top-[5rem] hidden lg:block mac:block absolute"
            onMouseEnter={() => mousehover(1)}
            onMouseLeave={() => mousehover(0)}
          >
            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-sky-200 rounded-full" />
            {mouse && id === 1 && (
              <div className="w-80 top-7 left-7 absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                  Perspiciatis unde dolori perspiciatis unde dolori
                </div>
                <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud. Incididunt ut
                  labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                  nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim
                  ad minim veniam, quis nostrud.&quot;
                </div>
              </div>
            )}
          </div>
          <div
            className="w-5 h-5 left-28 top-28 hidden lg:block mac:block absolute"
            onMouseEnter={() => mousehover(2)}
            onMouseLeave={() => mousehover(0)}
          >
            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-emerald-200 rounded-full" />
            {mouse && id === 2 && (
              <div className="w-80 left-6 top-6 mac:left-[160px] mac:top-[5px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                  Perspiciatis unde dolori perspiciatis unde dolori
                </div>
                <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud. Incididunt ut
                  labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                  nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim
                  ad minim veniam, quis nostrud.&quot;
                </div>
              </div>
            )}
          </div>
          <div
            className="w-5 h-5 bottom-18 right-56 mac:bottom-18 mac:right-24 hidden lg:block mac:block absolute"
            onMouseEnter={() => mousehover(3)}
            onMouseLeave={() => mousehover(0)}
          >
            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-red-200 rounded-full" />
            {mouse && id === 3 && (
              <div className="w-80 left-6 top-6 mac:left-[40px] mac:top-[155px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                  Perspiciatis unde dolori perspiciatis unde dolori
                </div>
                <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud. Incididunt ut
                  labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                  nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim
                  ad minim veniam, quis nostrud.&quot;
                </div>
              </div>
            )}
          </div>
          <div
            className="w-5 h-5 z-10 bottom-16 left-56 hidden lg:block mac:block absolute"
            onMouseEnter={() => mousehover(4)}
            onMouseLeave={() => mousehover(0)}
          >
            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-yellow-200 rounded-full" />
            {mouse && id === 4 && (
              <div className="w-80 z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                <div className="p-4 relative text-white text-xl font-bold font-['Inter']">
                  Perspiciatis unde dolori perspiciatis unde dolori
                </div>
                <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud. Incididunt ut
                  labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                  nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim
                  ad minim veniam, quis nostrud.&quot;
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[100%]  lg:pl-16 h-full relative flex flex-col items-start justify-center gap-10">
          <div className="w-[100%] mt-[1.8rem] md:mt-[0rem] flex flex-col  gap-5">
            <div className=" w-full  text-black dark:text-white text-left text-xs md:text-sm lg:text-[0.9rem] font-normal font-['Inter'] leading-5">
              We are a dynamic, Custom Crafted, 360 Degree Surround Studio, One
              Stop Solution for all brand requirements. While customizing
              services as per brand needs we use traditional value of art
              combined with new technologies to advanced AI. Our brand mottos
              have been characterized as home of all kinds of animals, taking
              inspiration from each of their personalities, portraying its
              symbolic significance. The eleven chosen animal qualities largely
              depict the ideals we implement while seeding the services as well
              as what we aim to instill in the brands we create. Since all our
              mottos go hand in hand and intertwine with each other at some
              stage, we combine them together under one roof to form the hutch
              The Rabbit Hutch. Harnessing eleven personalities for the success
              of your brand.
            </div>
          </div>
          <div className=" flex items-start justify-end w-[90%] sm:w-[65%] md:w-full lg:gap-10 mac:gap-3 gap-5">
            <button className="w-[122px] h-11  bg-pink-300 dark:bg-white rounded-[10px] text-center text-black dark:text-black text-sm font-normal font-['Inter'] leading-none ">
              <Link href="/hutch">Know More</Link>
            </button>
            <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none ">
              <Link href="/contactus">Reach Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DummyBranding;
