"use client";
import React from "react";
import BlogCards from "./BlogCards";
import { motion } from "framer-motion";

import blog1 from "../../public/assets/blogsimg/blog1.png";
import blog2 from "../../public/assets/blogsimg/blog2.png";
import blog3 from "../../public/assets/blogsimg/blog3.png";
import blog4 from "../../public/assets/blogsimg/blog4.png";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  const cardsinfo = [
    {
      id: 1,
      author: "Disti",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
    },
    {
      id: 2,
      author: "Disti3332",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
    },
    {
      id: 3,
      author: "Disti3333",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
    },
    {
      id: 4,
      author: "Disti33344",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
    },
    {
      id: 5,
      author: "Distigfbdfg5",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
    },
    {
      id: 6,
      author: "Distifgbgt255",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
    },
    {
      id: 7,
      author: "Disti35fdd555",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
    },
    {
      id: 8,
      author: "Disti5554",
      title:
        "Branding is oxygen for the companies identity building...! design creat design tech....",
    },
  ];

  return (
    <div className="w-full relative flex flex-col items-center justify-start dark:bg-black ">
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-red-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Expressions
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            blog
          </div>
        </div>
      </div>

      <div className="w-full h-fit relative flex items-start gap-5 overflow-x-scroll no-scrollbar mt-20">
        <motion.div
          className="w-full h-[542px] sm:h-[420px] sm:w-[240px] lg:h-[600px] relative flex flex-col justify-end items-start ml-[13%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Image
            className="w-[306px] lg:w-[340px] h-[542px] sm:h-[420px] sm:w-[240px] lg:h-[598px] left-0 top-0 absolute rounded-[20px]"
            src={blog1}
            alt=""
          />

          <div className="absolute top-0 left-0 w-10 h-10 z-10 text-black dark:text-white lg:w-16 lg:h-16 mac:w-14 mac:h-14 flex flex-col items-center justify-center text-[12px] lg:text-[32px] mac:text-[26px] font-bold font-['Katibeh'] rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
            <div className="w-full h-full absolute rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px]" />
            334
          </div>

          <div className="w-[306px] lg:w-[340px] sm:w-[240px] z-10 lg:h-[255px] h-[240px] relative rounded-[20px] flex flex-col justify-center items-start gap-2 group/items">
            <div className="w-[306px] lg:w-[340px] sm:w-[240px] z-10 h-[255px] relative rounded-[20px] flex flex-col justify-center items-start gap-2.5 group-hover/items:invisible">
              <div className="w-full h-full absolute z-10 rounded-[20px] bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50 dark:bg-black" />
              <div className="w-full flex z-10 items-center justify-start px-4 pt-3">
                <span className="text-black dark:text-white text-xs font-bold font-['Inter']">
                  Author :{" "}
                </span>
                <span className="text-black dark:text-white text-xs font-normal font-['Inter']">
                  Dishti Raju
                </span>
              </div>
              <div className="text-justify z-10 text-black dark:text-white text-[25px] lg:text-[40px] mac:text-[35px] mac:leading-[24px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[20px] lg:p-3 p-4">
                Branding is oxygen for the companies identity building...!
                design creat design tech....
              </div>
              <div className="w-full flex z-10 flex-col">
                <div className="mx-4">
                  <span className="text-black dark:text-white text-[10px] font-bold font-['Inter']">
                    Tag :{" "}
                  </span>
                  <span className="text-black dark:text-white text-[10px] font-normal font-['Inter']">
                    #paperrabbit #pr #hashtags
                  </span>
                </div>
                <div className="mx-4">
                  <span className="text-black dark:text-white text-[10px] font-bold font-['Inter']">
                    Date :
                  </span>
                  <span className="text-black dark:text-white text-[10px] font-normal font-['Inter']">
                    DD - MMM - YYYY
                  </span>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 z-10">
                {/* <Image src={more} alt="next" className="w-16 h-16" /> */}
              </div>

              <div className="absolute left-[1rem] top-[-1.5rem] z-10 w-[90px] h-6 bg-red-200 rounded-tl-[10px] rounded-tr-[10px] backdrop-blur-[20px] items-center justify-center flex">
                New
              </div>
            </div>

            <div className="w-full h-[542px] z-10 lg:h-[600px] lg:top-[-21.5rem] sm:h-[420px] top-[-18.9rem] sm:top-[-11.3rem] absolute rounded-[20px] flex flex-col justify-end items-start gap-2 invisible group-hover/items:visible">
              <div className="w-full h-full absolute z-10 rounded-[20px] bg-transparent bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-70 dark:backdrop-blur-2xl bg-gray-50" />

              <div className="w-full z-10 flex items-center justify-start px-3">
                <span className="text-black dark:text-white text-xs font-bold font-['Inter']">
                  Author :{" "}
                </span>
                <span className="text-black dark:text-white text-xs font-normal font-['Inter']">
                  Dishti Raju
                </span>
              </div>
              <div className="text-justify text-black dark:text-white z-10 text-[25px] lg:text-[40px] mac:text-[35px] mac:leading-[24px] font-normal font-['Katibeh'] lg:leading-[30px] leading-[17px] lg:p-3 p-3">
                Branding is oxygen for the companies identity building...!
                design creat design tech....
              </div>

              <div className="text-justify text-black dark:text-white z-10 text-[12px] lg:text-sm mac:text-sm mac:leading-[15px] font-normal font-['Inter'] lg:leading-[20px] leading-[13px] lg:p-3 p-3">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Tempor incididunt ut labore et dolore magna aliqua.
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Tempor incididunt ut labore et.{" "}
              </div>

              <div className="px-3 z-10">
                <span className="text-black dark:text-white text-[10px] font-bold font-['Inter']">
                  Tag :{" "}
                </span>
                <span className="text-black dark:text-white text-[10px] font-normal font-['Inter']">
                  #paperrabbit #pr #hashtags
                </span>
              </div>
              <div className="px-3 z-10">
                <span className="text-black dark:text-white text-[10px] font-bold font-['Inter']">
                  Date :
                </span>
                <span className="text-black dark:text-white text-[10px] font-normal font-['Inter']">
                  {" "}
                  DD - MMM - YYYY
                </span>
              </div>

              <div className="w-full flex flex-col items-center justify-center p-2 z-10">
                <button className="w-[122px] h-11 sm:h-7 bg-zinc-950 rounded-[10px] text-center text-white text-xs md:text-sm font-normal font-['Inter'] leading-none">
                  View More
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {cardsinfo.map((items, index) => (
          <motion.div
            key={items.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <BlogCards
              blogsimg={blog2}
              name={items.author}
              title={items.title}
            />
          </motion.div>
        ))}
      </div>

      <div className="w-[122px] h-11 relative pt-10">
        <button className="w-[122px] h-11 bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black text-sm font-normal font-['Inter'] leading-none">
          <Link href="/blogs">Explore All</Link>
        </button>
      </div>
    </div>
  );
}

export default Blog;
