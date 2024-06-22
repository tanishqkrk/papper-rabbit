import React from "react";
import article1 from "../public/assets/articalimgs/artical1.jpg";
import article2 from "../public/assets/articalimgs/artical2.jpg";
import article3 from "../public/assets/articalimgs/artical3.jpg";
import article4 from "../public/assets/articalimgs/artical4.jpg";
import Image from "next/image";
import Link from "next/link";

function Article() {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center dark:bg-black pt-20">
      <div className="w-full h-full relative flex flex-col justify-center items-center pt-10 lg:pt-20">
        <div className="w-full h-[6rem] relative content-center">
          <div className="w-full left-0 top-[2.1rem] absolute text-blue-200 lg:text-8xl mac:text-7xl text-[3.5rem] font-normal font-['Heaven'] leading-[64px] flex flex-col items-center justify-center">
            Definitions
          </div>
          <div className="w-full left-0 top-0 absolute text-black dark:text-white lg:text-[4rem] mac:text-[4rem] text-[2.5rem] font-normal font-['Revelstoke'] leading-[64px] flex flex-col items-center justify-center">
            Articles
          </div>
        </div>
      </div>

      <div className="lg:w-[56%] mac:w-[74%] w-[91%] h-full grid grid-rows-1 grid-cols-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 gap-4 mt-20 sm:p-2 md:p-2">
        <div className="w-full h-full relative  group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={article1}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-emerald-200 rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-emerald-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-emerald-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
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
            </div>{" "}
          </div>
        </div>
        <div className="w-full h-full relative  group/items">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={article2}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-red-200 rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-red-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-red-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
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
            </div>{" "}
          </div>
        </div>
        <div className="w-full h-full relative  group/items sm:hidden">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={article3}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-sky-200 rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-sky-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-sky-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
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
            </div>{" "}
          </div>
        </div>
        <div className="w-full h-full relative  group/items sm:hidden">
          <Image
            className="w-full h-full z-20 rounded-[20px]"
            src={article4}
            alt=""
          />
          <div className=" w-full h-full -z-10 left-0 top-0  absolute bg-amber-200 rounded-[20px]" />
          <div className="lg:w-[77%] w-[57%] lg:h-[50px] h-[40px] right-0 bottom-0 absolute bg-amber-200 bg-opacity-50 rounded-tl-[20px] rounded-br-[20px] backdrop-blur-[20px] justify-center items-center flex text-center text-white lg:text-lg text-xs font-bold font-['Inter'] leading-tight">
            Take A Look
          </div>
          <div className="w-full h-full absolute z-20 top-0 left-0 text-xs p-2 bg-amber-200 rounded-[20px] flex flex-col items-center justify-center invisible group-hover/items:visible ">
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
            </div>{" "}
          </div>
        </div>

        {/* <div className="w-[350px] h-[360px] absolute top-[-19.5rem] left-[-5rem] rounded-xl bg-red-100" >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe adipisci sunt reprehenderit maxime itaque deserunt, pariatur voluptatem repellat nulla!
                        </div> 
                    */}
      </div>

      <div className="w-[122px] h-11 relative pt-10">
        <button className="w-[122px] h-11  bg-zinc-950 dark:bg-white rounded-[10px] text-center text-white dark:text-black  text-sm font-normal font-['Inter'] leading-none ">
          {" "}
          <Link href="/articles">Explore All</Link>{" "}
        </button>
      </div>
    </div>
  );
}

export default Article;
