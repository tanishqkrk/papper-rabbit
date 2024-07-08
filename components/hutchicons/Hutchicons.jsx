"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import day1 from "../../public/assets/bannerimgs/1 background.svg";
import day2 from "../../public/assets/bannerimgs/2 background.svg";
import day3 from "../../public/assets/bannerimgs/3background.svg";

import arrowleft from "../../public/assets/bannerimgs/left arrow.png";
import arrowright from "../../public/assets/bannerimgs/right arrow.png";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import hutchimg from "../../public/assets/bannerimgs/hutchiconimg.svg";
import icon1 from "../../public/assets/hutchimg/rabbit2.svg";
import icon2 from "../../public/assets/hutchimg/ppl.svg";
import icon3 from "../../public/assets/hutchimg/trend.svg";
import { AppContext } from "@/context/DataContext";
import Image from "next/image";

function Hutchicons() {
  const { mode } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const page = [day1, day2, day3];
  const pages = [
    <FirstPage key={1} mode={mode} />,
    <SecondPage key={2} />,
    <ThirdPage key={3} />,
  ];

  const navigateNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === page.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigatePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? page.length - 1 : prevIndex - 1
    );
  };

  const changetab = (id) => {
    setCurrentIndex(id);
  };

  return (
    <div className="w-[100%] h-screen sm:h-[800px] relative flex flex-col items-center justify-center md:justify-center sm:justify-start overflow-hidden pt-20">
      <div className="w-[100%] h-full left-0 top-0 absolute">
        <Image
          className="w-[100%] h-full object-cover backdrop-blur-sm"
          src={hutchimg}
          alt="banner"
        />
      </div>
      <div className="w-full h-full left-0 top-0 absolute bg-white dark:bg-black bg-opacity-5 backdrop-blur-xl dark:bg-opacity-5 dark:backdrop-blur-xl" />

      {pages[currentIndex]}

      <button
        onClick={navigatePrevious}
        className="mac:left-10 mac:top-[50%] lg:left-10 lg:top-[50%] bottom-10 left-10 z-20 absolute w-14 h-12 sm:hidden"
      >
        <Image
          className="justify-center items-center inline-flex"
          src={arrowleft}
          alt=""
        />
      </button>
      <button
        onClick={navigateNext}
        className="mac:right-10 mac:top-[50%] lg:right-10 lg:top-[50%] bottom-10 right-10 z-20 absolute w-8 h-8 sm:hidden"
      >
        <Image
          className="justify-center items-center inline-flex"
          src={arrowright}
          alt=""
        />
      </button>

      <div className="w-[70px] h-4 lg:left-[50%] lg:bottom-[5rem] bottom-10 absolute bg-gray-300 rounded-[2rem] flex items-center justify-center gap-4">
        {currentIndex === 0 ? (
          <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" />
        ) : (
          <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />
        )}
        {currentIndex === 1 ? (
          <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" />
        ) : (
          <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />
        )}
        {currentIndex === 2 ? (
          <div className="w-2 h-2 relative bg-zinc-900 dark:bg-white rounded-full" />
        ) : (
          <div className="w-2 h-2 relative bg-zinc-500 dark:bg-zinc-950 rounded-full" />
        )}
      </div>

      <div className="lg:w-14 lg:h-[180px] md:mb-5 mac:w-10 mac:h-[120px] w-[180px] h-14 sm:left-[25%] lg:left-[10%] lg:top-[45%] mac:left-[10%] mac:top-[40%] bottom-[4%] left-[40%] absolute bg-gray-300 rounded-[2rem] flex lg:flex-col mac:flex-col items-center justify-center gap-2">
        {currentIndex === 0 ? (
          <Image
            onClick={() => changetab(0)}
            src={icon1}
            alt="icon1"
            className="w-8 h-8 bg-gray-50 relative rounded-full"
          />
        ) : (
          <Image
            onClick={() => changetab(0)}
            src={icon1}
            alt="icon1"
            className="w-8 h-8 relative rounded-full"
          />
        )}
        {currentIndex === 1 ? (
          <Image
            onClick={() => changetab(1)}
            src={icon2}
            alt="icon2"
            className="w-8 h-8 bg-gray-50 relative rounded-full"
          />
        ) : (
          <Image
            onClick={() => changetab(1)}
            src={icon2}
            alt="icon2"
            className="w-8 h-8 relative rounded-full"
          />
        )}
        {currentIndex === 2 ? (
          <Image
            onClick={() => changetab(2)}
            src={icon3}
            alt="icon3"
            className="w-8 h-8 bg-gray-50 relative rounded-full"
          />
        ) : (
          <Image
            onClick={() => changetab(2)}
            src={icon3}
            alt="icon3"
            className="w-8 h-8 relative rounded-full"
          />
        )}
      </div>
    </div>
  );
}

export default Hutchicons;
