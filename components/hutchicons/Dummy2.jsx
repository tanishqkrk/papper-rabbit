"use client";
import day1 from "../../assets/bannerimgs/1 background.svg";
import day2 from "../../assets/bannerimgs/2 background.svg";
import day3 from "../../assets/bannerimgs/3background.svg";
import day4 from "../../assets/bannerimgs/4background.svg";
import day5 from "../../assets/bannerimgs/5background.svg";
import day6 from "../../assets/bannerimgs/6background.svg";
import day7 from "../../assets/bannerimgs/7background.svg";
import day8 from "../../assets/bannerimgs/8background.svg";
import day9 from "../../assets/bannerimgs/9background.svg";
import day10 from "../../assets/bannerimgs/10background.svg";
import day11 from "../../assets/bannerimgs/11background.svg";

import dark1 from "../../assets/bannerimgs/1 background-dark.png";
import dark2 from "../../assets/bannerimgs/2 background-dark.png";
import dark3 from "../../assets/bannerimgs/3 background-dark.png";
import dark4 from "../../assets/bannerimgs/4 background-dark.png";
import dark5 from "../../assets/bannerimgs/5 background-dark.png";
import dark6 from "../../assets/bannerimgs/6 background-dark.png";
import dark7 from "../../assets/bannerimgs/7 background-dark.png";
import dark8 from "../../assets/bannerimgs/8 background-dark.png";
import dark9 from "../../assets/bannerimgs/9 background-dark.png";

import React, { useEffect, useState } from "react";

import { useInView } from "framer-motion";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

function Dummy2({ mode }) {
  const hutchicons = useRef();
  const isInView = useInView(hutchicons, { once: true });

  // useEffect(()=>{
  //     console.log('Element is in view', isInView);
  // },[isInView])

  useGSAP(
    () => {
      gsap.from(".top", {
        autoAlpha: -1,
        stagger: 0.1,
        // duration: 1,

        scale: -1,
        transformOrigin: "center center",
      });
    },
    { scope: hutchicons, dependencies: [isInView] }
  );

  return (
    <div
      div
      className="w-full h-full flex flex-col items-center justify-center scroll-smooth"
    >
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-20 sm:gap-16"
        ref={hutchicons}
      >
        <div className=" relative flex gap-20 sm:gap-4 " ref={hutchicons}>
          <div className=" w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center ">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark1 : day1}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>

          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark2 : day2}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>

          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark3 : day3}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>
          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark4 : day4}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>
        </div>

        <div className="flex relative gap-20 sm:gap-4" ref={hutchicons}>
          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark5 : day5}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>
          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark6 : day6}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>
          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark7 : day7}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>

          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark8 : day8}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>
          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top sm:hidden">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark9 : day9}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>
        </div>

        <div className="flex relative gap-40 sm:gap-8" ref={hutchicons}>
          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top lg:hidden mac:hidden md:hidden ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark9 : day9}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>

          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark1 : day10}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>
          <div className="w-[9rem] h-[10rem] sm:w-[5rem] sm:h-[6rem] md:w-[5.5rem] md:h-[6rem] relative top ">
            <div className="w-[8.5rem] h-[8.5rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
              <Image
                className="w-[8rem] h-[8rem] sm:w-[5rem] sm:h-[5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                alt="image1"
                src={mode ? dark1 : day11}
              />
            </div>
            <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
              Breath
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dummy2;
