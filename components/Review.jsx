"use client";
import React, { useRef, useState } from "react";
import review1 from "../public/assets/review/review1.jpg";
import review2 from "../public/assets/review/review2.jpg";
import review3 from "../public/assets/review/review3.jpg";
import review4 from "../public/assets/review/review4.png";
import review5 from "../public/assets/review/img.png";
import "./styles.css";
import ReviewCards from "./ReviewCards";
import Image from "next/image";
import { motion } from "framer-motion";

function Review() {
  const reviews = [review1, review2, review3, review4, review5, review3];

  return (
    <div className="w-full dark:bg-black pt-10 relative pb-14 flex-col justify-start items-center gap-[0.18px] inline-flex">
      <motion.div
        className="w-full relative flex flex-col justify-center items-center pt-10 lg:pt-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-[6rem] relative content-center">
          <motion.div
            className="w-full left-0 top-[2.1rem] absolute text-purple-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Reviews
          </motion.div>
          <motion.div
            className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Happy
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="w-[100%] h-[540px] lg:w-[70%] mac:w-[85%] relative inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ul className="h-full flex items-center justify-center md:justify-start relative [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right">
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="lg:w-[340px] w-[306px] h-[360px] relative flex items-end justify-end ml-[13%] p-4"
          >
            <Image
              className="lg:w-[340px] w-[306px] h-[360px] absolute rounded-[20px]"
              src={review1}
              alt="review image1"
            />
            <div className="lg:w-[340px] w-[306px] bg-white dark:bg-black bg-opacity-5 backdrop-blur-xl dark:bg-opacity-5 dark:backdrop-blur-xl opacity-95 rounded-[10px] p-4 m-4 relative text-justify h-[180px]">
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
              <div className="text-zinc-950 dark:text-white text-sm font-normal font-['Inter'] leading-1 mt-3 h-[115px] overflow-y-scroll pr-1">
                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, minima ex libero ipsa quo impedit quibusdam atque
                alias vel, nihil aliquam adipisci veritatis odit. Eos rem
                dignissimos dolor alias iure? ipsum Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Pariatur officia eum beatae, fuga
                aliquid similique nisi eligendi. dolor sit amet, aliqua. Ut enim
                ad minim veniam. Ut enim ad minim veniam et dolore magna aliqua.
                Ut enim ad minim veniam.
              </div>
            </div>
          </motion.li>

          {reviews.map((review, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + index * 0.2, duration: 0.5 }}
              className="lg:w-[340px] w-[306px] h-[360px] relative flex items-end justify-end p-4"
            >
              <ReviewCards review1={review} />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Review;
