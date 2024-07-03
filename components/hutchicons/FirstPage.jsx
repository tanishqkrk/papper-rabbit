"use client";
import day1 from "../../public/assets/bannerimgs/1 background.svg";
import day2 from "../../public/assets/bannerimgs/2 background.svg";
import day3 from "../../public/assets/bannerimgs/3background.svg";
import day4 from "../../public/assets/bannerimgs/4background.svg";
import day5 from "../../public/assets/bannerimgs/5background.svg";
import day6 from "../../public/assets/bannerimgs/6background.svg";
import day7 from "../../public/assets/bannerimgs/7background.svg";
import day8 from "../../public/assets/bannerimgs/8background.svg";
import day9 from "../../public/assets/bannerimgs/9background.svg";
import day10 from "../../public/assets/bannerimgs/10background.svg";
import day11 from "../../public/assets/bannerimgs/11background.svg";

import dark1 from "../../public/assets/bannerimgs/1-background-dark.svg";
import dark2 from "../../public/assets/bannerimgs/2 background-dark.png";
import dark3 from "../../public/assets/bannerimgs/3 background-dark.png";
import dark4 from "../../public/assets/bannerimgs/4 background-dark.png";
import dark5 from "../../public/assets/bannerimgs/5 background-dark.png";
import dark6 from "../../public/assets/bannerimgs/6 background-dark.png";
import dark7 from "../../public/assets/bannerimgs/7 background-dark.png";
import dark8 from "../../public/assets/bannerimgs/8 background-dark.png";
import dark9 from "../../public/assets/bannerimgs/9 background-dark.png";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function FirstPage({ mode }) {
  const hutchicons = useRef();
  const isInView = useInView(hutchicons, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center scroll-smooth bg-red-500">
      <div
        className="flex flex-col items-center justify-center sm:items-center sm:justify-start gap-20 mac:gap-12 sm:gap-16 bg-red-500"
        ref={hutchicons}
      >
        <motion.div
          className="relative flex gap-20 mac:gap-12 lg:h-[15rem] sm:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { src: mode ? dark1 : day1, alt: "image1" },
            { src: mode ? dark2 : day2, alt: "image2" },
            { src: mode ? dark3 : day3, alt: "image3" },
            { src: mode ? dark4 : day4, alt: "image4", hideOnSmall: true },
          ].map((image, index) => (
            <motion.div
              key={index}
              className={`w-[13rem] h-[13rem] mac:w-[8rem] mac:h-[9rem] sm:w-[5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative top ${
                image.hideOnSmall ? "sm:hidden" : ""
              }`}
              variants={variants}
            >
              <div className="w-[12.5rem] h-[12.5rem] mac:w-[7.5rem] mac:h-[7.5rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
                <Image
                  className="w-[12rem] h-[12rem] mac:w-[7rem] mac:h-[7rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
              <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
                Breath
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex relative lg:h-[15rem] gap-20 mac:gap-12 sm:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { src: mode ? dark4 : day4, alt: "image4", hideOnSmall: true },
            { src: mode ? dark5 : day5, alt: "image5" },
            { src: mode ? dark6 : day6, alt: "image6" },
            { src: mode ? dark7 : day7, alt: "image7", hideOnSmall: true },
            { src: mode ? dark8 : day8, alt: "image8", hideOnSmall: true },
            { src: mode ? dark9 : day9, alt: "image9", hideOnSmall: true },
          ].map((image, index) => (
            <motion.div
              key={index}
              className={`w-[13rem] h-[13rem] mac:w-[8rem] mac:h-[9rem] sm:w-[5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative top ${
                image.hideOnSmall ? "sm:hidden" : ""
              }`}
              variants={variants}
            >
              <div className="w-[12.5rem] h-[12.5rem] mac:w-[7.5rem] mac:h-[7.5rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
                <Image
                  className="w-[12rem] h-[12rem] mac:w-[7rem] mac:h-[7rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
              <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
                Breath
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex relative lg:h-[15rem] gap-40 md:p-1 mac:gap-32 sm:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { src: mode ? dark7 : day7, alt: "image7", hideOnSmall: true },
            { src: mode ? dark8 : day8, alt: "image8", hideOnSmall: true },
            { src: mode ? dark1 : day10, alt: "image10", hideOnLarge: true },
            { src: mode ? dark1 : day11, alt: "image11", hideOnLarge: true },
          ].map((image, index) => (
            <motion.div
              key={index}
              className={`w-[13rem] h-[13rem] mac:w-[8rem] mac:h-[9rem] sm:w-[5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative top ${
                image.hideOnSmall ? "hidden sm:block" : ""
              } ${image.hideOnLarge ? "lg:hidden mac:hidden md:hidden" : ""}`}
              variants={variants}
            >
              <div className="w-[12.5rem] h-[12.5rem] mac:w-[7.5rem] mac:h-[7.5rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
                <Image
                  className="w-[12rem] h-[12rem] mac:w-[7rem] mac:h-[7rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
              <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
                Breath
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative gap-40 mac:gap-32 sm:gap-8 hidden sm:flex"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { src: mode ? dark1 : day10, alt: "image10" },
            { src: mode ? dark1 : day11, alt: "image11" },
          ].map((image, index) => (
            <motion.div
              key={index}
              className="w-[13rem] h-[13rem] mac:w-[8rem] mac:h-[9rem] sm:w-[5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative top"
              variants={variants}
            >
              <div className="w-[12.5rem] h-[12.5rem] mac:w-[7.5rem] mac:h-[7.5rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative bg-gray-300 rounded-full shadow flex flex-col items-center justify-center">
                <Image
                  className="w-[12rem] h-[12rem] mac:w-[7rem] mac:h-[7rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[5.5rem] md:h-[6rem] relative rounded-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
              <div className="relative text-center text-white text-lg sm:text-xs md:text-sm font-normal font-['Revelstoke']">
                Breath
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default FirstPage;
