"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import portfolio1 from "../public/assets/portfolioimg/portfolio1.jpg";
import portfolio2 from "../public/assets/portfolioimg/portfolio2.jpg";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      ref={sectionRef}
      className="w-[100%] lg:h-[100%] relative flex flex-col dark:bg-black items-center pb-10  justify-center h-full"
    >
      <div
        variants={variants}
        className="w-[100%] lg:h-[1020px] mac:h-[1020px] flex-col justify-start items-center gap-[50px] inline-flex p-10 sm:p-2"
      >
        <div className="w-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
          <div className="w-full h-[6rem] relative content-center">
            <div className="w-full left-0 top-[2.1rem] absolute text-yellow-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
              Showcase
            </div>
            <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
              Portfolio
            </div>
          </div>
        </div>

        <div className="  lg:h-[700px] mac:h-[90%] h-[950px] sm:h-[700px] sm:p-0 relative gap-4 sm:gap-1 md:gap-1 lg:grid lg:grid-cols-4 lg:grid-rows-2 mac:grid-cols-4 mac:grid-rows-2 grid grid-cols-2 grid-rows-4">
          <div className="w-full h-full m-1 group/items bg-cover relative rounded-[20px] col-span-2">
            <Image
              className=" w-full h-full rounded-[20px]   relative"
              src={portfolio1}
              alt=""
            />
            <div className="lg:w-[20rem] w-[35%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-tight  ">
              Take A Look
            </div>

            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs sm:text-[10px] md:text-[10px]  p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-4 sm:gap-1 md:gap-1">
                <div className="h-6 text-justify text-black text-[40px] sm:text-[28px] md:text-[28px] font-normal font-['Katibeh'] ">
                  Title
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Comapny -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Tag -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Date -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify text-black text-sm font-normal font-['Inter']  sm:hidden md:hidden">
                  Perspiciatis unde omnis perspiciatis unde. Perspiciatis unde
                  omnis perspiciatis unde perspiciatis.
                </div>
                <div className="w-full flex items-end justify-end">
                  <button className="w-[7rem] h-[3rem] sm:w-[3rem] sm:h-[2rem] md:w-[3rem] md:h-[2rem] rounded-lg bg-black text-white">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative m-1 group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={portfolio2}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
            <div className="lg:w-[20rem] w-[75%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs sm:text-[10px] md:text-[10px]  p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-3 sm:gap-1 md:gap-1">
                <div className="h-6 text-justify text-black text-[36px] sm:text-[28px] md:text-[28px] font-normal font-['Katibeh'] ">
                  Title
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Comapny -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Tag -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Date -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify text-black text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter']  sm:hidden md:hidden ">
                  Perspiciatis unde omnis perspiciatis unde. Perspiciatis unde
                  omnis perspiciatis unde perspiciatis.
                </div>
                <div className="w-full flex items-end justify-end">
                  <button className="w-[5rem] h-[2rem] sm:w-[3rem] sm:h-[2rem] md:w-[3rem] md:h-[2rem] rounded-lg bg-black text-white">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative m-1 group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={portfolio2}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
            <div className="lg:w-[20rem] w-[75%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs sm:text-[10px] md:text-[10px]  p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-3 sm:gap-1 md:gap-1">
                <div className="h-6 text-justify text-black text-[36px] sm:text-[28px] md:text-[28px] font-normal font-['Katibeh'] ">
                  Title
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Comapny -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Tag -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Date -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify text-black text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter']  sm:hidden md:hidden ">
                  Perspiciatis unde omnis perspiciatis unde. Perspiciatis unde
                  omnis perspiciatis unde perspiciatis.
                </div>
                <div className="w-full flex items-end justify-end">
                  <button className="w-[5rem] h-[2rem] sm:w-[3rem] sm:h-[2rem] md:w-[3rem] md:h-[2rem] rounded-lg bg-black text-white">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative m-1 group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={portfolio2}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
            <div className="lg:w-[20rem] w-[75%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs sm:text-[10px] md:text-[10px]  p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-3 sm:gap-1 md:gap-1">
                <div className="h-6 text-justify text-black text-[36px] sm:text-[28px] md:text-[28px] font-normal font-['Katibeh'] ">
                  Title
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Comapny -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Tag -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Date -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify text-black text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter']  sm:hidden md:hidden ">
                  Perspiciatis unde omnis perspiciatis unde. Perspiciatis unde
                  omnis perspiciatis unde perspiciatis.
                </div>
                <div className="w-full flex items-end justify-end">
                  <button className="w-[5rem] h-[2rem] sm:w-[3rem] sm:h-[2rem] md:w-[3rem] md:h-[2rem] rounded-lg bg-black text-white">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative m-1 group/items">
            <Image
              className="w-full h-full z-20 rounded-[20px]"
              src={portfolio2}
              alt=""
            />
            <div className=" w-full h-full -z-10 left-0 top-0  absolute rounded-[20px]" />
            <div className="lg:w-[20rem] w-[75%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-violet-300 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-tight">
              Take A Look
            </div>
            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs sm:text-[10px] md:text-[10px]  p-2 bg-violet-300 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-3 sm:gap-1 md:gap-1">
                <div className="h-6 text-justify text-black text-[36px] sm:text-[28px] md:text-[28px] font-normal font-['Katibeh'] ">
                  Title
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Comapny -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Tag -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] ">
                    Date -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify text-black text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter']  sm:hidden md:hidden ">
                  Perspiciatis unde omnis perspiciatis unde. Perspiciatis unde
                  omnis perspiciatis unde perspiciatis.
                </div>
                <div className="w-full flex items-end justify-end">
                  <button className="w-[5rem] h-[2rem] sm:w-[3rem] sm:h-[2rem] md:w-[3rem] md:h-[2rem] rounded-lg bg-black text-white">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative m-1 group/items  col-span-2">
            <Image
              className=" w-full h-full   rounded-[20px]"
              src={portfolio1}
              alt=""
            />
            <div className="lg:w-[20rem] w-[35%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-tight  ">
              Take A Look
            </div>

            <div className="w-full h-full absolute z-20 top-0 left-0 text-xs sm:text-[10px] md:text-[10px]  p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-4 sm:gap-1 md:gap-1">
                <div className="h-6 text-justify text-black text-[40px] sm:text-[28px] md:text-[28px] font-normal font-['Katibeh'] leading-10">
                  Title
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-3">
                    Comapny -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-3">
                    Tag -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>
                <div className="text-justify">
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-bold font-['Inter'] leading-3">
                    Date -{" "}
                  </span>
                  <span className="text-zinc-950 text-xs sm:text-[10px] md:text-[10px]  font-normal font-['Inter'] leading-3">
                    Lorem ipsum
                  </span>
                </div>

                <div className="text-justify text-black text-sm font-normal font-['Inter'] leading-normal sm:hidden md:hidden">
                  Perspiciatis unde omnis perspiciatis unde. Perspiciatis unde
                  omnis perspiciatis unde perspiciatis.
                </div>
                <div className="w-full flex items-end justify-end">
                  <button className="w-[7rem] h-[3rem] sm:w-[3rem] sm:h-[2rem] md:w-[3rem] md:h-[2rem] rounded-lg bg-black text-white">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[122px] h-11  pb-10 relative">
          <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black  text-sm font-normal font-['Inter'] leading-none ">
            {" "}
            <Link href="/portfolio">Explore All</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
